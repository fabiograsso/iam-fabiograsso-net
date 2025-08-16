---
title: "Banks Under Siege, +45% Incidents. The Strategy: Identity Fabric"
date: 2025-08-01
draft: false
tags: [Okta, Cybersecurity, Financial Services, DORA, NIS2, IAM, CIAM, ZeroTrust, Banking Security, Identity Management, Zero Trust, Identity Fabric, Financial Services, Identity Governance, Strong Customer Authentication, HRI, High Regulated Identity]
summary: "Analysis of 2024 banking cyber incidents (+45%) according to Banca d'Italia report and the Identity Fabric strategy for operational resilience in the Italian and European financial sector."
---

## The 2024 Situation

The recent report **"Supervisory reporting framework for operational or security incidents - Cross-sectional analysis 2024"**[^1] by Banca d'Italia is not just a statistic, it's a strategic alarm bell for the entire Italian (and, by extension, European) financial sector. The data is clear and concerning: a **45% increase in reported operational and security incidents**, totaling **188 notifications**, the highest level ever recorded since 2020.


{{< chart >}}
type: 'bar',
data: {
    labels: ['2020','2021','2022','2023','2024'],
    datasets: [
        {
        label: 'Cyber incidents',
        data: [26, 20, 15, 37, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        borderRadius: 2
        },
        {
        label: 'Operational Incidents',
        data: [56, 76, 84, 93, 148],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 2
        },
        {
        label: 'Total incidents',
        type: 'line',
        data: [82, 96, 99, 130, 188],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 10,
        tension: 0.3,
        fill: false,
        }
    ]
},
options: {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    scales: {
        x: { stacked: true },
        y: {stacked: true, beginAtZero: true,       ticks: { precision: 0 } }
    },
    plugins: {
        title: {
        display: true,
        text: 'Evolution of Banking Incidents in Italy (2020-2024)'
        }
    }
}
{{< /chart >}}

But the most revealing data emerges from detailed analysis: **65% of all incidents involved an external service provider**, a huge leap from 45% in 2023. This, combined with an average service restoration time more than doubled (from 9 to 21 hours), tells us one thing clearly: the traditional security perimeter no longer exists. Risk is fragmented, interconnected, and increasingly resides in the management of identities and privileged access.

The threat landscape is also rapidly evolving. "Noisy" DDoS attacks have collapsed by 75% (from 16 in 2023 to 4 in 2024), making way for more silent and targeted threats like **malware (50% of cyber incidents), unauthorized access (45%), and social engineering (22.5%)**. The objective is no longer just to "bring down" a service, but to *infiltrate, steal credentials, and move laterally* through the interconnected digital infrastructure.[^1]

{{< chart >}}
type: 'bar',
data: {
    labels: ['Malware','Unauthorized Access','Social Engineering','DDoS','Other'],
    datasets: [
        {
        data: [20, 18, 9, 4, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(75, 192, 192, 0.7)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
        borderRadius: 3
        }
    ]
},
options: {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
        title: {
            display: true,
            text: 'Cyber incident types in the Italian banking sector (2020–2024)'
        }
    },
    scales: {
        x: { stacked: false },
        y: {stacked: false, beginAtZero: true, max: 25, ticks: { precision: 0 } }
    },
}
{{< /chart >}}

These Italian data reflect a broader European trend. The European Banking Authority (EBA) reports that over 58% of European banks suffered at least one cyberattack in the second half of 2024, with 24% recording at least one successful attack with significant impact[^2]. In parallel, ENISA identified 488 publicly reported cyber incidents in the European financial sector between January 2023 and June 2024, with banks as the primary target in 46% of cases[^3].

In this scenario, regulations like the **Digital Operational Resilience Act (DORA)** and **Network and Information Security (NIS) 2** are not merely bureaucratic burdens, but the logical and necessary response to this new reality. With DORA and NIS2 regulatory deadlines already in effect since January 2025, the urgency to adopt a new defense model is maximum[^4][^5].

The question is no longer *if* to adopt an identity-based security strategy, but *how* to build it in a way that is cohesive, scalable, and resilient in the face of increasingly sophisticated threats.

## The Strategic Response: Building a Resilient "Identity Fabric"

Addressing such diverse threats — internal fragility, targeted external attacks, and supply chain vulnerabilities — with a mosaic of isolated security solutions is a losing strategy. Each tool creates a new silo, increasing operational complexity and leaving dangerous blind spots that attackers can exploit.

The modern answer is a **unified platform approach**: the **[Identity Fabric](https://www.okta.com/identity-101/identity-fabric-the-future-of-identity-and-access-management/)** by Okta.

![Okta Identity Fabric](okta-identity-fabric.png)

**What is an Identity Fabric?** Identity Fabric is a unified identity security architecture that supports all identity use cases while being fully orchestrated and integrated. Think of it as an intelligent connective tissue that unifies the security of **all identities** (employees, customers, partners, APIs, AI agents, and service accounts) and **all resources** (applications, infrastructure, data). Instead of fragmented silos, it creates a single control plane that offers centralized visibility, policy orchestration, and coordinated threat response.

The **[Okta Platform](https://www.okta.com/products/okta-platform/)** represents the natural evolution of this vision, offering an end-to-end solution that brings Identity Fabric to real life. Composed of **[Okta Workforce Identity](https://www.okta.com/products/workforce-identity/)** and **[Okta Customer Identity](https://www.okta.com/products/okta-customer-identity/)**, the platform is designed with this architecture in mind, ensuring that the product ecosystem works together to reduce risk while organizations focus on delivering world-class digital experiences (see *[One Platform, Every Identity](https://www.okta.com/blog/2025/05/one-platform-every-identity-unifying-okta-customer-identity-with-okta-workforce/)*).

A fundamental concept of this approach is **technological neutrality**, which guarantees the freedom to choose the best technologies without being tied to a single proprietary ecosystem. This is particularly critical in a sector like banking, where integration with legacy systems and third-party providers is essential.

An effective Identity Fabric is founded on four strategic pillars that work in synergy.

### 1. Beyond MFA: Phishing-Resistant Authentication

With social engineering and credential theft as primary attack vectors (responsible for 22.5% of cyber incidents in 2024), traditional MFA (push notifications, OTP) is no longer sufficient. It's essential to neutralize phishing at the root with phishing-resistant methods.[^1]

**💡 Key Technologies:**

- **[Okta FastPass](https://www.okta.com/products/fastpass/)** uses open cryptographic standards like FIDO2 to cryptographically bind authentication to the device. Simply put, even if a user is tricked into entering their credentials on a fake site, these are useless to the attacker because they cannot be reused elsewhere thanks to public key cryptography.
- **[Okta Adaptive MFA](https://www.okta.com/products/adaptive-multi-factor-authentication/)**: This solution goes beyond static MFA, offering **risk-based dynamic authentication** that evaluates the context of each access attempt. The system analyzes factors like geographic location, device used, user behavior, and compromise indicators (such as proxy use or compromised passwords) to automatically determine the required authentication level. For high-risk transactions or access from non-compliant devices, it can require additional factors like WebAuthn or biometrics, while for low-risk scenarios it reduces user friction while maintaining security.

### 2. Total Governance: Managing the Lifecycle of *All* Identities

The 65% of incidents involving suppliers highlights a critical problem of access governance in the digital supply chain. This risk is amplified by the explosion of **Non-Human Identities (NHI)** — API keys, service accounts, system tokens, digital certificates — which today far outnumber human ones and are the connective tissue of the digital supply chain. The lack of governance of these identities with the same rigor as human ones represents a direct violation of DORA principles.[^1]

**💡 Key Technologies:**

- **[Okta Identity Governance (OIG)](https://www.okta.com/products/identity-governance/)** automates the entire access lifecycle through intelligent **JML (Joiner-Mover-Leaver)** workflows. The system ensures that every identity — human and non-human — is rigorously applied the **least privilege** principle through traceable request and approval workflows, automated periodic certification campaigns, and automatic de-provisioning when identities are no longer needed. For non-human identities, it implements automatic credential rotation and continuous usage monitoring.
- **[Okta Privileged Access](https://www.okta.com/products/privileged-access/)**: This cloud-native PAM solution eliminates permanent access (standing access) to servers, containers, and privileged SaaS applications. It implements the **Zero Standing Privileges** principle, requiring just-in-time approvals for access to critical resources. It includes a **cloud vault** for secure management of shared credentials, complete SSH/RDP session recording for compliance, and native integration with **Okta Access Requests** for multi-step approval workflows with business justification and limited time durations. Particularly important for banks, it also manages privileged access to **break-glass identities** and critical service accounts.

### 3. From Prevention to Continuous and Proactive Protection

Security cannot be a static control at login time. It must be a dynamic process that evaluates risk in real-time, throughout the session duration, continuously adapting to the evolving threat landscape.

**💡 Key Technologies:** Two complementary capabilities are needed here that work in synergy to offer 360-degree protection:

- **[Okta ISPM – Identity Security Posture Management](https://www.okta.com/products/identity-security-posture-management/)**: This is **proactive** defense. ISPM functions as a continuous "check-up" of your identity infrastructure, constantly scanning cloud systems (Azure AD, AWS, Google Workspace, Salesforce) to identify and correct misconfigurations, MFA gaps, excessive privileges, and security vulnerabilities *before* they are exploited by attackers. With the introduction of new 2025 capabilities, ISPM now also protects **AI agents and non-human identities**, automatically discovering service accounts, API keys, and other automated identities that often escape traditional governance.
- **[Okta ITP – Identity Threat Protection](https://www.okta.com/products/identity-threat-protection/)**: This is real-time **reactive** defense. Using open standards like **CAEP (Continuous Access Evaluation Protocol)** and **SSF (Shared Signals Framework)** to integrate risk signals from the entire security ecosystem (e.g., from an EDR like CrowdStrike), ITP actively monitors every session *after* initial login. If it detects an anomaly — like a suspicious IP change, an alert from a device security system, or unusual user behavior — it can automatically intervene by terminating the session, requiring re-authentication, or escalating the incident to the security team.

### 4. Don't Forget the Customer: CIAM for Highly Regulated Environments

Customer trust represents the most precious asset for every financial institution. Protecting customer accounts from fraud and account takeover requires the same level of rigor applied internally, but with particular attention to the balance between security and user experience. In the banking sector, where every friction can translate to customer abandonment, this balance is particularly delicate.

**💡 Key Technologies:**

- **[Auth0](https://www.auth0.com/)** with **[Highly Regulated Identity (HRI)](https://auth0.com/features/highly-regulated-identity)** represents the **Financial-Grade Identity** solution for sensitive customer operations. HRI is specifically designed to meet the highest security and regulatory compliance standards in the financial sector.

- **HRI implements three fundamental security pillars:**
    
    - **Strong Customer Authentication (SCA) with Dynamic Linking**: HRI implements SCA as defined by **PSD2 (Payment Services Directive 2)**, requiring at least two independent authentication factors. **Dynamic Linking** cryptographically binds transaction details to the SCA approval process, showing the user exactly what they are approving (e.g., `Authorize payment of €1,000 to Giovanni Rossi?`) and thus preventing *sophisticated fraud* through *transaction tampering*[^6].

    - **FAPI 1 Advanced Protocols**: HRI is a certified implementation of the **Financial-Grade API** standard by the OpenID Foundation, which includes[^7]:

        - **PAR (Pushed Authorization Requests)**: Moves sensitive transaction parameters from the front-channel (browser) to authenticated back-end calls, preventing interception
        - **JAR (JWT-Secured Authorization Request)**: Protects the integrity of the authorization request through digital signature  
        - **JWE (JSON Web Encryption)**: Encrypts access token payload to prevent application data breaches

    - **Strengthened Application Authentication**: Supports **Private Key JWT** and **mTLS (Mutual TLS)** as alternatives to client secrets, eliminating the transmission of secrets over the network. **Token Binding** ensures that only the application that requested an access token can use it, making tokens useless even if intercepted.

    - **Customization and User Experience**: Despite rigorous security controls, HRI maintains a smooth user experience through native integration with **Okta Actions** for custom authorization logic and new templates for **Universal Login** that allow customizing approval screens based on the type and details of the specific transaction (see *[Okta Blog](https://www.okta.com/blog/2024/07/highly-regulated-identity-the-key-to-easier-more-secure-customer-interactions/)*).

## From Regulatory Obligation to Strategic Advantage

The data from the Banca d'Italia report[^1], supported by European trends documented by EBA[^2] and ENISA[^3], clearly outline an increasingly complex and interconnected cyber battlefield. With 80% of incidents affecting payment services and 65% involving third-party suppliers, addressing these challenges with a fragmented approach is no longer sustainable or economically efficient.

The implementation of the **EU Systemic Cyber Incident Coordination Framework (EU-SCICF)** under **DORA** highlights how even regulators recognize that cyber resilience requires coordination and unified visibility at the systemic level. This same principle applies at the enterprise level: a unified **Identity Fabric** is needed[^8].

Building an **Identity Fabric** with the **Okta Platform** means moving from a fragmented reactive defense posture to one of **orchestrated proactive resilience**. It means unifying visibility across all identities (human and non-human), automating access governance, and orchestrating threat response on a coherent and scalable platform.

This approach not only allows for effectively responding to the stringent requirements of **DORA and NIS2**, but transforms security from an operational cost center to a true **strategic business enabler**. A unified and resilient identity platform not only protects the organization from increasingly sophisticated threats, but simultaneously strengthens customer and partner trust, accelerates onboarding of new digital services, and reduces operational costs through intelligent automation.

In the current landscape, where average restoration time has more than doubled and where threats become increasingly silent and persistent, Identity Fabric is no longer a futuristic option — it's an immediate strategic necessity for the digital survival of the financial sector.

## ✋ The Time to Act is Now

### 📊 Assess Your Current Position

Operational resilience always starts with an assessment of the current state. We suggest starting with:

- **Okta Secure Identity Discovery**: A free assessment that analyzes your current identity security risks through 12 targeted questions, providing specific recommendations from Okta experts for the Financial Services sector. [Contact me](/contacts) to learn more.

- **[Okta ROI Calculator](https://www.okta.com/roi/)**: Quantify the economic benefits of an Identity Fabric approach.

### 🎯 Start Your Identity Fabric

You don't need to revolutionize everything overnight. You can start with a gradual approach:

1. **Pilot anti-phishing protection**: Implement **[Okta FastPass](https://www.okta.com/products/fastpass/)** on a group of users to test the effectiveness of phishing-resistant authentication
2. **Manage human and non-human identities**: Use **[Okta ISPM](https://www.okta.com/products/identity-security-posture-management/)** to map all identities, including service accounts and API keys that often escape traditional controls. 💡 *You can use it even if you don't use Okta as IAM!*
3. **Protect customers**: Experiment with **[Auth0 HRI](https://auth0.com/features/highly-regulated-identity)** to implement PSD2-compliant Strong Customer Authentication while maintaining optimal UX

### 🚀 Immediate Resources

- **[Okta for Financial Services](https://www.okta.com/solutions/financial-services/)**: Specific solutions for banks and financial institutions
- **[5 key DORA requirements](https://www.okta.com/uk/resources/infographic-5-key-dora-requirements/)**: useful infographic on DORA regulation
- **[A Guide to DORA Compliance with Okta](https://sec.okta.com/articles/2025/05/a-guide-to-dora-compliance-with-okta/)**: Okta blog article
- **[PCI DSS 4.0: What financial service providers need to know about new regulatory requirements](https://www.okta.com/blog/2024/11/pci-dss-4-0-what-financial-service-providers-need-to-know-about-new-regulatory/)**

### 🤝 Let's Discuss Your Strategy

The financial sector has unique challenges that require specialized expertise:

📞 **[Personalized consultation](/contacts)**: As a Solutions Engineer specialized in the Italian market, I can help you define an Identity Fabric roadmap specific to your organization, considering legacy systems, regulatory constraints, and business objectives.

💬 **Share your experience**: How is your identity security strategy evolving? What are the biggest challenges you face in managing human and non-human identities in the DORA/NIS2 context? Let's discuss in the comments.

📰 **[Follow me on LinkedIn](https://linkedin.com/in/fabiograsso82)** for regular insights on Identity Fabric, regulatory compliance, and best practices for the Financial Services sector.

[^1]: [Framework segnaletico di Vigilanza degli incidenti operativi o di sicurezza - Analisi orizzontale 2024](https://www.bancaditalia.it/compiti/vigilanza/analisi-sistema/approfondimenti-banche-int/Framework-segnaletico-di-Vigilanza-degli-incidenti-operativi-o-di-sicurezza-Analisi-orizzontale-2024.pdf), Banca d'Italia, July 2025

[^2]: [EBA Risk Assessment Report - Autumn 2024](https://www.eba.europa.eu/publications-and-media/press-releases/eu-banks-continue-be-robust-although-risks-geopolitical-tensions-and-cyber-threats-remain), European Banking Authority, November 2024

[^3]: [ENISA Threat Landscape: Finance Sector](https://www.enisa.europa.eu/publications/enisa-threat-landscape-finance-sector), European Union Agency for Cybersecurity, February 2025

[^4]: [Digital Operational Resilience Act (DORA)](https://www.digital-operational-resilience-act.com/), EU Regulation 2022/2554, applicable from January 17, 2025

[^5]: [Network and Information Security (NIS) 2 Directive](https://www.nis-2-directive.com/), EU Directive 2022/2555

[^6]: [Implementing and delegated acts - PSD 2](https://finance.ec.europa.eu/regulation-and-supervision/financial-services-legislation/implementing-and-delegated-acts/payment-services-directive_en)

[^7]: [Financial-Grade API Security Profile](https://curity.io/resources/learn/what-is-financial-grade/), Curity, 2023

[^8]: [EU Systemic Cyber Incident Coordination Framework](https://www.eu-scicf.com/), ESRB Recommendation, implemented with DORA 2025
