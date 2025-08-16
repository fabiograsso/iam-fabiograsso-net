---
title: Citrix step-up MFA
date: 2025-06-27
tags: [Okta, MFA, "Citrix"]
description: abc
ShowToc: true
draft: true
---
I received a request from a customer. They are a bank and use Citrix XenApp.

They have some applications used for operations under PCI DSS. These applications are already separated and accessible only to some users (I.e., they have an “Edge Browser” and “Edge Browser PCI”).

They don’t use MFA for access to Citrix and don’t want to implement it (… no way to convince them).

Due to the PCI DSS regulation, they must implement the MFA for all PCI DSS applications, but they don’t want to implement it for everyone accessing Citrix.

Their initial request was to use the Okta MFA Credential Provider for Windows, with the idea to install it only on the PCI DSS server. Following is my recap email with the solutions proposed. (The original email was in Italian, please excuse typos in the translation).

A special thanks to my colleaugue **@Ivan Rodriguez** (former Citrix SE) for the information provided.

---
{{< alert icon="circle-info" >}}
**TL;DR** :Arrow: the solution for a near-step-up MFA is described in [Chapter 3. Solution with Citrix ADC (NetScaler): Single Portal and Contextual MFA for Applications](#3-solution-with-citrix-adc-netscaler-single-portal-and-contextual-mfa-for-applications).
{{< /alert >}}


---


### 1. Incompatibility of "Okta MFA Credential Provider for Windows" with Citrix

The **Okta MFA Credential Provider for Windows** is not compatible with Citrix sessions based on the ICA/HDX protocol.

Technical explanation: This agent is specifically designed to intercept the Windows login process that occurs via **Remote Desktop Protocol (RDP)** . It functions as a Credential Provider that activates on the Windows server's interactive login screen.

The Citrix ICA/HDX protocol, on the other hand, uses a completely different authentication mechanism. When a user authenticates to Citrix StoreFront, they receive a token. This token is then passed directly to the Citrix server to start the session, completely bypassing the operating system's interactive login screen. Since the Okta agent hooks into a screen that is never presented during a Citrix session launch, it has no opportunity to intervene and request MFA.

Documentation: [Okta - MFA Credential Provider for Windows](https://help.okta.com/en-us/content/topics/security/proc-mfa-win-creds-rdp.htm "https://help.okta.com/en-us/content/topics/security/proc-mfa-win-creds-rdp.htm"), which exclusively mentions its use with RDP.

---



### 2. Solution without Citrix ADC: Dual-StoreFront Architecture

Citrix StoreFront does not natively support "step-up MFA" logic for individual applications. Authentication policies are applied at the entire "Store" level, not per application. Once the user is authenticated to the Store, they have access to all published resources without further MFA prompts from StoreFront.

**Proposed Workaround:** To meet the security requirement for PCI DSS applications without a Citrix ADC, the architectural approach is to create two distinct and isolated access paths:

* **Standard Store (No MFA):** A dedicated portal for non-PCI applications. Authentication will be handled via a specific SAML application in Okta with a policy that does *not* require MFA (in this case, you could also bypass Okta and use the current login method, which I imagine is AD/LDAP).
* **PCI Store (with MFA):** A second, completely separate portal that will exclusively publish PCI DSS applications. Authentication will be managed by a second SAML application in Okta, whose policy will *mandatorily require* MFA.

This solution implies that users will have two separate URLs and dashboards: one for standard activities and one for high-security activities. To mitigate this impact and offer a unified access point, you can configure the **Okta user dashboard** to include "bookmarks" for the Citrix applications. This way, the user will always start from a single point (their Okta dashboard) to access both types of resources.

Documentation: [Citrix - Configure authentication](https://docs.citrix.com/en-us/storefront/current-release/stores/authentication.html "https://docs.citrix.com/en-us/storefront/current-release/stores/authentication.html"), which illustrates how authentication is tied to the Store.


---



### 3. Solution with Citrix ADC (NetScaler): Single Portal and Contextual MFA for Applications

The introduction of a **Citrix ADC** (formerly known as *NetScaler* ) into the architecture allows for achieving the goal of a single portal securely, using its **nFactor Authentication** functionality.

However, it's important to understand how the architecture works and what the user experience will be. There are two main models:

* **Model 1: MFA per Session (Simpler to implement):** The ADC, via nFactor Authentication, checks at login time if the user belongs to a group that requires access to sensitive data (e.g., "PCI-Users"). If the user is in the group, they are immediately prompted for MFA. If not, they access without MFA. In this model, PCI users will always receive an MFA prompt (even if they access the Citrix portal for non-PCI applications).
* **Model 2: MFA per Application (As per your request):** It is possible to configure the ADC to require MFA only when a specific application is launched. In this scenario, two **Citrix Gateway Virtual Servers** are configured on the ADC, but a **single StoreFront portal** is used:
  * **Standard Gateway:** Configured for basic authentication (e.g., Okta without MFA, or AD/LDAP).
  * **PCI Gateway:** Configured with nFactor to force authentication with Okta MFA.
  * **StoreFront:** Uses a feature called **Optimal Gateway Routing** . This rule routes launch requests for PCI applications to the "*PCI Gateway* " and all others to the "*Standard Gateway* ."

The user experience will be as follows:

1. The user connects to the single portal, authenticating on the Standard Gateway (without MFA).
2. They see all their applications, both PCI and non-PCI.
3. If they launch a non-PCI app, the session starts immediately.
4. If they launch a PCI app, the request is redirected to the PCI Gateway. At this point, the user will be presented with a **new authentication prompt** , this time with MFA. Once passed, the application launches.

For the "PCI Gateway" that requires MFA, integration with Okta can be done in two ways:

* **RADIUS:** The ADC sends an authentication request to an on-premises Okta RADIUS Agent, which contacts Okta for MFA validation. There are some limitations about which MFA can be used (i.e., FIDO2 and FastPass are not compatible with RADIUS).
* **SAML:** This is a more modern alternative that allows for a better user experience, including the ability to use Okta FastPass for passwordless access. The ADC redirects the user's browser directly to Okta. This architecture mandatorily requires the implementation of the **Citrix Federated Authentication Service (FAS)** to ensure Single Sign-On (SSO) to applications.




**Documentation:**

* [Citrix - nFactor Authentication](https://community.citrix.com/tech-zone/learn/tech-briefs/citrix-nfactor-mfa/ "https://community.citrix.com/tech-zone/learn/tech-briefs/citrix-nfactor-mfa/") : tech brief describing how nFactor works.
* [**Configure Citrix Netscaler gateway | Okta Classic Engine**](https://help.okta.com/en-us/content/topics/integrations/citrix-netscaler-radius-int.htm)
* [**Setup SSO**](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-NetScaler-Gateway.html)
* [**Reference Architecture: Federated Authentication Service**](https://community.citrix.com/tech-zone/design/reference-architectures/federated-authentication-service/)
* [**Pass-through from Citrix Gateway | StoreFront Current Release**](https://docs.citrix.com/en-us/storefront/current-release/stores/authentication/gateway-pass-through.html)



I hope this information is useful.  We can involve our PS (Professional Services), who can provide the necessary expertise and support for your production environment.

### 1️⃣ – Dual StoreFront (No Citrix ADC)

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph TD
    U[User] -->|Access Standard Store URL| Okta_STD[Okta SAML App - No MFA]
    Okta_STD --> STD_AUTH[Auth Success - No MFA]
    STD_AUTH --> SF_STD[Citrix StoreFront - Standard Store]
    SF_STD --> LIST_STD[List non-PCI apps]
    LIST_STD --> LAUNCH_STD[Launch non-PCI app]
    LAUNCH_STD --> NONPCI[Non-PCI app session starts]

    U -->|Access PCI Store URL| Okta_PCI[Okta SAML App - MFA Required]
    Okta_PCI --> MFA[MFA Prompt]
    MFA --> MFA_OK[MFA Success]
    MFA_OK --> SF_PCI[Citrix StoreFront - PCI Store]
    SF_PCI --> LIST_PCI[List PCI apps]
    LIST_PCI --> LAUNCH_PCI[Launch PCI app]
    LAUNCH_PCI --> PCI[PCI app session starts]

{{< /mermaid >}}
</div>

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
sequenceDiagram
    participant U as User
    participant Okta_Std as Okta SAML App - No MFA
    participant SF_Std as Citrix StoreFront - Standard Store
    participant Okta_PCI as Okta SAML App - MFA Required
    participant SF_PCI as Citrix StoreFront - PCI Store

    %% Access to Standard Store
    U->>Okta_Std: Access Standard Store URL
    Okta_Std-->>U: Auth success - no MFA
    U->>SF_Std: Open Standard Store
    SF_Std-->>U: List non-PCI apps
    U->>SF_Std: Launch non-PCI app
    SF_Std-->>U: Non-PCI app session starts

    %% Access to PCI Store
    U->>Okta_PCI: Access PCI Store URL
    Okta_PCI-->>U: Prompt for MFA
    U->>Okta_PCI: Complete MFA
    Okta_PCI-->>U: Auth success - MFA
    U->>SF_PCI: Open PCI Store
    SF_PCI-->>U: List PCI apps
    U->>SF_PCI: Launch PCI app
    SF_PCI-->>U: PCI app session starts

{{< /mermaid >}}
</div>



### 2️⃣ – Model 1: MFA per Session
<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph TD
    U[User] --> ADC_STD[Citrix ADC - Standard Gateway - No MFA]
    ADC_STD --> Okta[Okta IdP]
    Okta --> SESS[Session Established]
    SESS --> SF[Citrix StoreFront - Single Store]
    SF --> LIST[List of all apps - PCI + non-PCI]

    %% Non-PCI path
    LIST -->|Launch non-PCI app| ADC_STD
    ADC_STD --> NONPCI[Non-PCI app session starts]

    %% PCI path
    LIST -->|Launch PCI app| ADC_PCI[Citrix ADC - PCI Gateway - nFactor + MFA]
    ADC_PCI --> MFA[MFA Prompt]
    MFA --> MFA_OK[MFA Success]
    MFA_OK --> PCI[PCI app session starts]

{{< /mermaid >}}
</div>


<div style="background-color:white; padding: 20px">
{{< mermaid >}}
sequenceDiagram
    participant U as User
    participant ADC as Citrix ADC - Single Gateway
    participant Okta as Okta IdP
    participant SF as Citrix StoreFront - Single Store

    %% Initial login
    U->>ADC: Login to single portal
    ADC->>Okta: Authenticate - SAML or AD/LDAP

    alt User in PCI group
        Okta-->>ADC: Prompt MFA
        U->>Okta: Complete MFA
        Okta-->>ADC: MFA success
    else User not in PCI group
        Okta-->>ADC: Auth success - no MFA)
    end

    ADC-->>U: Session established
    U->>SF: Access single Store
    SF-->>U: List all apps - PCI and non-PCI
    U->>SF: Launch any app
    SF-->>U: App session starts

{{< /mermaid >}}
</div>

### 2️⃣ – Model 1: MFA per Session

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph TD
    U[User] --> ADC_STD[Citrix ADC - Standard Gateway - No MFA]
    ADC_STD --> Okta[Okta IdP]
    Okta --> SESS[Session Established]
    SESS --> SF[Citrix StoreFront - Single Store]
    SF --> LIST[List of all apps - PCI + non-PCI]

    %% Non-PCI path
    LIST -->|Launch non-PCI app| ADC_STD
    ADC_STD --> NONPCI[Non-PCI app session starts]

    %% PCI path
    LIST -->|Launch PCI app| ADC_PCI[Citrix ADC - PCI Gateway - nFactor + MFA]
    ADC_PCI --> MFA[MFA Prompt]
    MFA --> MFA_OK[MFA Success]
    MFA_OK --> PCI[PCI app session starts]

{{< /mermaid >}}
</div>

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
sequenceDiagram
    participant U as User
    participant ADC_Std as Citrix ADC - Standard Gateway - No MFA
    participant SF as Citrix StoreFront - Single Store
    participant ADC_PCI as Citrix ADC - PCI Gateway - nFactor + MFA
    participant Okta as Okta IdP

    %% Initial login without MFA
    U->>ADC_Std: Login to single portal
    ADC_Std->>Okta: Authenticate - SAML or AD/LDAP
    Okta-->>ADC_Std: Auth success - no MFA
    ADC_Std-->>U: Session established
    U->>SF: Access single Store
    SF-->>U: List all apps - PCI and non-PCI

    alt Launch non-PCI app
        SF->>ADC_Std: Route to Standard Gateway
        ADC_Std-->>U: Non-PCI app session starts
    else Launch PCI app
        SF->>ADC_PCI: Route to PCI Gateway
        ADC_PCI->>Okta: MFA authentication - SAML or RADIUS
        Okta-->>ADC_PCI: MFA success
        ADC_PCI-->>U: PCI app session starts
    end

{{< /mermaid >}}
</div>




 