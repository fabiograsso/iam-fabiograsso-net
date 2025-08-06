---
title: Who Watches the Watchmen?
date: 2025-08-05
draft: false
tags:
  - IAM
  - Zero
  - Trust
  - Identity
  - Fabric
  - Okta
description: In the digital era, where identity is the new security perimeter, the Latin phrase "Quis custodiet ipsos custodes?" is more relevant than ever. This article explores the paradox of entrusting identity management to the same provider as your infrastructure, creating risks like single points of failure and vendor lock-in. We advocate for an independent, agnostic IAM strategy based on open standards, enabling a resilient, unified Identity Fabric. A neutral IAM is essential for effectively implementing Zero Trust and protecting a company's entire digital ecosystem.
categories:
  - blog
cover:
  image: cover.png
  relative: true
---

## Who watches the watchmen in the age of digital identity?

> "Lock the door, keep her in, but who watches the watchmen themselves? The wife is clever and will start with them."  
> — Juvenal, Satires, VI, lines 31–32

Originally about the difficulty of controlling marital infidelity, this quote has become a timeless reflection on power, trust, and oversight. The question "_Quis custodiet ipsos custodes?_" — _Who watches the watchmen?_ — resonates strongly today in **cybersecurity**, prompting us to consider: who protects the systems that protect us?

In a world where security is virtual, **digital identity** is the new perimeter. But can we really trust the same provider who hosts our infrastructure to also manage our identities?

A customer recently asked provocatively: _“Why should I use Okta? My provider already gives me infrastructure, email, storage, BI, device protection... even identity management. Why pay more for something I already have?”_  
This reveals a misconception: that **IAM** is just a feature, not a strategic choice. The debate isn’t between products, but between a centralized vs. an independent, agnostic architecture.

## Zero Trust: Identity as the security foundation

The "trusted perimeter" model no longer works. With remote work, SaaS, and APIs, implicit trust is a liability. The Zero Trust model, built on “never trust, always verify,” makes **identity** the key control point.

![Zero Trust Model](model-zero-trust.png)

The [CISA Zero Trust Maturity Model](https://www.cisa.gov/zero-trust-maturity-model) defines identity as the first pillar. A robust IAM system must:

- **Apply adaptive policies** based on user, device, location, time.
- **Use strong authentication**, such as phishing-resistant, adaptive MFA.

Tools like **FastPass**, **Adaptive MFA**, and **Identity Threat Protection (ITP)** help secure access only for legitimate users and devices.

Foundations include:

- **Governance**: Who accesses what, when, and why. Tools like **Okta Identity Governance** enforce compliance and timely deprovisioning.
- **Automation & Orchestration**: Tools like **Okta Workflows** automate identity processes, reducing errors and boosting response speed.
- **Visibility & Analytics**: Platforms like **Okta ISPM** analyze identity security posture, enabling early detection of threats.

Other pillars:

- **Device**: IAM and **Device Management** ensure only secure, compliant devices can access resources. **Okta Desktop Access (ODA)** binds identity to the device. Integrations with **EDR** tools like **CrowdStrike** block threats.
- **Network**: Legacy network perimeters are gone. IAM integrates with VPN and **ZTA** solutions (e.g., **Zscaler**) for identity-based network access.
- **Application & Workloads**: Protect apps via **SSO** and **MFA**. Standards like **SAML** and **OIDC** enable centralized identity across internal and external apps.
- **Data**: IAM enforces identity-based access to data, supports **DLP**, and prevents leaks—intentional or accidental.

## Identity Fabric: Unifying identity architecture

![Identity Fabric Model](model-identity-fabric.png)

**Identity Fabric** is a holistic architectural model that integrates disparate IAM systems into one unified framework.

**Okta acts as the central orchestrator**, connecting identities, apps, and infrastructure across vendors (on-prem, IaaS, multi-cloud). This agnostic approach enables consistent policies and control for both human and machine identities.

![Okta Identity Fabric](okta-identity-fabric.png)

## The hidden risks of integrated IAM

Choosing IAM from your infrastructure provider seems easy and cheap. But it comes with major risks:

![Vendor Lock-in](vendor-lock.jpg)

1. **Single Point of Failure**: If your provider is breached, they gain control over identities, apps, data—everything.
2. **Vendor Lock-in**: Deep integration traps companies, making migration costly and reducing flexibility.
3. **Conflicts of Interest**: A provider controlling both service and security may prioritize integration over openness and transparency.

## The case for agnostic IAM

An **agnostic IAM** like **Okta** is modular, neutral, and interoperable.

- **Flexibility**: Use best-of-breed tools and centralize identity.
- **Open Standards**: Protocols like OAuth2, OIDC, SAML, SCIM ensure interoperability.
- **No proprietary traps**: Freedom to switch tools, evolve securely, and innovate.
- **Stronger Governance**: Includes IGA, PAM, and ISPM for identity lifecycle, privileged access, and posture management.

Okta continuously invests in innovation, security, and transparency.

![The Okta Platform](okta-identity-fabric.png)

## Conclusion: Identity as a neutral arbiter

Identity is the new security perimeter. Choosing an IAM is a strategic decision.

Trusting a single provider for infrastructure, data, and identity may seem simple—but real security comes from **separation of duties**, **transparency**, and **freedom of choice**.

As Juvenal asked: **"Who watches the watchmen?"** IAM must be the impartial referee—not a player on the field.

![Rome](rome.png)

Adopting an **agnostic IAM**, acting as an **Identity Fabric**, enables unified and secure identity management. It reduces risk, increases agility, and fully supports Zero Trust.

True security means: **those who protect cannot control everything.**  
An **independent IAM** architecture is not only safer, but inherently **resilient, scalable, and free**.

## ✋ And you?

📣 What’s your experience with IAM solutions? Have you faced the dilemma between integrated vs. independent IAM?

💬 Share your thoughts in the comments — or reach out directly to explore how Identity Fabric can secure your business.
