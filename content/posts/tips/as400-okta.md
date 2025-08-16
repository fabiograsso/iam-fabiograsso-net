---
title: AS/400 (IBM iSeries) MFA by Precisely
date: 2025-06-27
tags: [Okta, MFA, "AS/400", "iSeries"]
description: abc
ShowToc: false
draft: true
---

## MFA

I want to share with the team what we proposed to this customer.As mentioned, **Precisely** has a solution called "**Assure Security** " that is installed directly on the IBM iSeries server, and it's able to intercept all the logins using any protocol (terminal, telnet, ssh, file transfer, etc.).

In the suite, they provide MFA but also encryption, send logs to an external SIEM, and other useful security features for iSeries. The very nice thing is that customers don't need to change anything in their AS/400 applications.


On the Okta side, then Precisely rely on our RADIUS server in order to challenge the user with the MFA. Another nice thing is that they provide a function that iSeries developers can use to easily implement **step-up MFA** in their applications.

The solution's pricing is based on CPU. For my customer, who has two iSeries (EPGR P10 4 ACTIVE CORE 1 LPAR + EP11 P10 2 ACTIVE CORE 1 LPAR), [...]

modules System Access Manager and  Elevated Authority Manage.

[TODO: Screenshot]

I hope that this information will be useful if you need an MFA solution to protect IBM iSeries AS/400. I know that this topic is also coming up due to the **NIS2** , and maybe you'll receive some requests from customers.

Of course, it is not mandatory to use a third party, and developers can change their RPG programs to use our Authentication API for the MFA. However, this is a complex operation, and very often, the RPGs are not well maintained, so it becomes complicated to change the code. The solution from Precisely solves this issue as it works directly on the OS level.

I also attach the documentation and the product brochure:

* Assure Security MFA RADIUS server.pdf
* Precisely_Datasheet_Assure_Security_ENG.pdf


[TODO: LINK]



## LCM


### Notes

This is actually a **SCIM proxy** that performs **CRUD operations** (via the internet or a local agent) on **AS/400** (and hundreds of other legacy/on-premise applications). The connector supports **DB or OS400 as a user base** , and also allows for **entitlement management with OIG** .

The platform is **cloud-based (SaaS)** and the price based on the number of AS/400 connector (with discount for subsequent ones for developmentand /test environments).


#### Pricing Model

* Licensing for Aquera is subscription-based (SaaS). The pricing for an annual subscription is tied to the value that Aquera drives within an organization with automated user management; as such, there are three key items we use to determine the annual subscription cost:
  * Total number of users (that we will synchronize between systems; typically aligns with active users in the directory or HRIS)
  * Total number of connected applications/orchestrations
  * Specific applications that we are connecting into (with a premium for those that are more difficult to build/maintain; I.e. a connection to AS/400 is more expensive than a connection to Slack)


### AS/400 

There are two components that need to be purchased to enable the Okta<-->AS/400 integration we discussed earlier today:

* **Aquera SCIM Gateway (platform) **
* **AS/400**
  * **1st Prod LPAR:  **
  * **Additional Prod LPAR: **
  * **Additional non-Prod LPAR:  **


#### Useful links

* [**IBM OS/400 on AS/400 (IBM i on Power Systems) by Aquera | Okta**](https://www.okta.com/integrations/ibm-os400-on-as400-ibm-i-on-power-systems-by-aquera/)
* [**Applications | Aquera**](https://aquera.com/applications-provisioning?appName=IBM%20OS/400%20on%20AS/400%20%28IBM%20i%20on%20Power%20Systems%29&imageName=ibmos400)
* [https://aquera.com/okta/oin?fileName=as400](https://aquera.com/okta/oin?fileName=as400 "https://aquera.com/okta/oin?fileName=as400")
