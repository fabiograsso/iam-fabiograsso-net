---
title: "Banques sous Siège, +45% d'incidents. La stratégie : Identity Fabric"
date: 2025-08-01
draft: false
tags: [Okta, Cybersecurity, Financial Services, DORA, NIS2, IAM, CIAM, ZeroTrust, Banking Security, Identity Management, Zero Trust, Identity Fabric, Financial Services, Identity Governance, Strong Customer Authentication, HRI, High Regulated Identity]
summary: "Analyse des incidents cyber bancaires 2024 (+45%) selon le rapport de la Banca d'Italia et la stratégie Identity Fabric pour la résilience opérationnelle dans le secteur financier italien et européen."
---

## La situation en 2024

Le récent rapport **"Framework segnaletico di Vigilanza degli incidenti operativi o di sicurezza - Analisi orizzontale 2024"**[^1] de la Banca d'Italia n'est pas seulement une statistique, c'est une alarme stratégique pour tout le secteur financier italien (et, par extension, européen). Les données sont nettes et préoccupantes : une **augmentation de 45% des incidents opérationnels et de sécurité signalés**, pour un total de **188 notifications**, le niveau le plus élevé jamais enregistré depuis 2020.

![Évolution des Incidents Bancaires en Italie (2020-2024) : +45% en 2024](https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/b4b226b87471aaf64181da4b746f216e/5767c06c-b65c-4e16-abb3-caa643ee6840/397a6093.png)
Évolution des Incidents Bancaires en Italie (2020-2024) : +45% en 2024
TODO: Image - graphique

Mais la donnée la plus révélatrice émerge de l'analyse détaillée : **65% de tous les incidents ont impliqué un fournisseur de services externe**, un énorme bond par rapport aux 45% de 2023. Cela, uni à un temps moyen de restauration des services plus que doublé (de 9 à 21 heures), nous dit une chose clairement : le périmètre de sécurité traditionnel n'existe plus. Le risque est fragmenté, interconnecté et réside de plus en plus dans la gestion des identités et des accès privilégiés.

Le panorama des menaces évolue aussi rapidement. Les attaques DDoS "bruyantes" ont chuté de 75% (de 16 en 2023 à 4 en 2024), laissant place à des menaces plus silencieuses et ciblées comme **malware (50% des incidents cyber), accès non autorisés (45%) et social engineering (22,5%)**. L'objectif n'est plus seulement de "faire tomber" un service, mais d'*infiltrer, voler les credentials et se déplacer latéralement* à travers l'infrastructure numérique interconnectée.[^1]

Ces données italiennes reflètent une tendance européenne plus large. L'European Banking Authority (EBA) rapporte que plus de 58% des banques européennes ont subi au moins une cyberattaque au second semestre 2024, avec 24% qui ont enregistré au moins une attaque réussie avec impact significatif[^2]. En parallèle, l'ENISA a identifié 488 incidents cyber publiquement rapportés dans le secteur financier européen entre janvier 2023 et juin 2024, avec les banques comme objectif primaire dans 46% des cas[^3].

Dans ce scénario, les réglementations comme le **Digital Operational Resilience Act (DORA)** et **Network and Information Security (NIS) 2** ne sont pas un simple fardeau bureaucratique, mais la réponse logique et nécessaire à cette nouvelle réalité. Avec les échéances réglementaires de DORA et NIS2 déjà en vigueur depuis janvier 2025, l'urgence d'adopter un nouveau modèle de défense est maximale[^4][^5].

La question n'est plus *si* adopter une stratégie de sécurité basée sur l'identité, mais *comment* la construire de manière cohésive, scalable et résiliente face à des menaces toujours plus sophistiquées.

## La réponse stratégique : construire un "Identity Fabric" résilient

Affronter des menaces si diverses — fragilité interne, attaques externes ciblées et vulnérabilités de la supply chain — avec une mosaïque de solutions de sécurité isolées est une stratégie perdante. Chaque outil crée un nouveau silo, augmentant la complexité opérationnelle et laissant de dangereuses zones d'ombre que les attaquants peuvent exploiter.

La réponse moderne est une approche de **plateforme unifiée** : l'**[Identity Fabric](https://www.okta.com/identity-101/identity-fabric-the-future-of-identity-and-access-management/)** d'Okta.

![Okta Identity Fabric](okta-identity-fabric.png)

**Qu'est-ce qu'un Identity Fabric ?** L'Identity Fabric est une architecture de sécurité des identités unifiée qui supporte tous les cas d'usage de l'identité en étant complètement orchestrée et intégrée. Imaginez-le comme un tissu connectif intelligent qui unifie la sécurité de **toutes les identités** (employés, clients, partenaires, API, agents AI et service accounts) et de **toutes les ressources** (applications, infrastructure, données). Au lieu de silos fragmentés, il crée un plan de contrôle unique qui offre visibilité centralisée, orchestration des politiques et réponse coordonnée aux menaces.

La **[Okta Platform](https://www.okta.com/products/okta-platform/)** représente l'évolution naturelle de cette vision, offrant une solution end-to-end qui porte l'Identity Fabric à la vie réelle. Composée d'**[Okta Workforce Identity](https://www.okta.com/products/workforce-identity/)** et **[Okta Customer Identity](https://www.okta.com/products/okta-customer-identity/)**, la plateforme est conçue avec cette architecture en tête, garantissant que l'écosystème de produits travaille ensemble pour réduire le risque tandis que les organisations se concentrent sur offrir des expériences numériques de premier plan (cf. *[One Platform, Every Identity](https://www.okta.com/blog/2025/05/one-platform-every-identity-unifying-okta-customer-identity-with-okta-workforce/)*).

Un concept fondamental de cette approche est la **neutralité technologique**, qui garantit la liberté de choisir les meilleures technologies sans être liées à un seul écosystème propriétaire. Ceci est particulièrement critique dans un secteur comme celui bancaire, où l'intégration avec des systèmes legacy et des fournisseurs tiers est essentielle.

Un Identity Fabric efficace se fonde sur quatre piliers stratégiques qui travaillent en synergie.

### 1. Au-delà de l'MFA : authentification à l'épreuve du phishing

Avec le social engineering et le vol de credentials comme vecteurs d'attaque primaires (responsables de 22,5% des incidents cyber en 2024), l'MFA traditionnel (notifications push, OTP) ne suffit plus. Il est essentiel de neutraliser le phishing à la racine avec des méthodes phishing-resistant.[^1]

**💡 Technologies clés :**

- **[Okta FastPass](https://www.okta.com/products/fastpass/)** utilise des standards cryptographiques ouverts comme FIDO2 pour lier l'authentification cryptographiquement au device. En termes simples, même si un utilisateur est trompé et insère ses credentials sur un site faux, ceux-ci sont inutiles pour l'attaquant car ils ne peuvent pas être réutilisés ailleurs grâce à la cryptographie à clé publique.
- **[Okta Adaptive MFA](https://www.okta.com/products/adaptive-multi-factor-authentication/)** : Cette solution va au-delà de l'MFA statique, offrant une **authentification dynamique basée sur le risque** qui évalue le contexte de chaque tentative d'accès. Le système analyse des facteurs comme la location géographique, le device utilisé, le comportement utilisateur et les indicateurs de compromission (comme l'usage de proxy ou passwords compromis) pour déterminer automatiquement le niveau d'authentification requis. Pour les transactions à haut risque ou accès depuis des devices non conformes, il peut requérir des facteurs additionnels comme WebAuthn ou biométrie, tandis que pour les scénarios à bas risque il réduit la friction pour l'utilisateur en maintenant la sécurité.

### 2. Governance Totale : gérer le cycle de vie de *toutes* les identités

La donnée de 65% des incidents qui implique des fournisseurs souligne un problème critique de governance des accès dans la supply chain digitale. Ce risque est amplifié par l'explosion des **Identités Non Humaines (NHI)** — API key, service account, token de système, certificats digitaux — qui aujourd'hui dépassent numériquement de loin celles humaines et sont le tissu connectif de la supply chain digitale. Le manque de governance de ces identités avec la même rigueur que celles humaines représente une violation directe des principes DORA.[^1]

**💡 Technologies clés :**

- **[Okta Identity Governance (OIG)](https://www.okta.com/products/identity-governance/)** automatise tout le cycle de vie de l'accès à travers des flux **JML (Joiner-Mover-Leaver)** intelligents. Le système garantit qu'à chaque identité — humaine et non — soit appliqué rigoureusement le principe du **least privilege** à travers des flux de demande et approbation traçables, des campagnes de certification périodiques automatisées et le de-provisioning automatique quand les identités ne sont plus nécessaires. Pour les identités non humaines, il implémente la rotation automatique des credentials et le monitoring continu de l'utilisation.
- **[Okta Privileged Access](https://www.okta.com/products/privileged-access/)** : Cette solution PAM native cloud élimine l'accès permanent (standing access) aux serveurs, containers et applications SaaS privilégiées. Elle implémente le principe **Zero Standing Privileges**, requérant des approbations just-in-time pour l'accès aux ressources critiques. Elle inclut un **vault cloud** pour la gestion sécurisée de credentials partagés, enregistrement complet des sessions SSH/RDP pour compliance, et intégration native avec **Okta Access Requests** pour des flux d'approbation multi-step avec justification business et durées temporelles limitées. Particulièrement important pour les banques, elle gère aussi l'accès privilégié aux **identités de break-glass** et aux service accounts critiques.

### 3. De la prévention à la protection continue et proactive

La sécurité ne peut pas être un contrôle statique au moment du login. Elle doit être un processus dynamique qui évalue le risque en temps réel, pour toute la durée de la session, s'adaptant continuellement au panorama des menaces en évolution.

**💡 Technologies clés :** Ici sont nécessaires deux capacités complémentaires qui travaillent en synergie pour offrir une protection à 360 degrés :

- **[Okta ISPM – Identity Security Posture Management](https://www.okta.com/products/identity-security-posture-management/)** : C'est la défense **proactive**. ISPM fonctionne comme un "check-up" continu de votre infrastructure d'identité, scannant constamment les systèmes cloud (Azure AD, AWS, Google Workspace, Salesforce) pour identifier et corriger les configurations erronées, lacunes dans l'MFA, privilèges excessifs et vulnérabilités de sécurité *avant* qu'elles soient exploitées par les attaquants. Avec l'introduction des nouvelles capacités 2025, ISPM protège maintenant aussi les **agents AI et identités non humaines**, découvrant automatiquement service accounts, API key et autres identités automatisées qui échappent souvent à la governance traditionnelle.
- **[Okta ITP – Identity Threat Protection](https://www.okta.com/products/identity-threat-protection/)** : C'est la défense **réactive** en temps réel. Utilisant des standards ouverts comme **CAEP (Continuous Access Evaluation Protocol)** et **SSF (Shared Signals Framework)** pour intégrer des signaux de risque de tout l'écosystème de sécurité (par exemple d'un EDR comme CrowdStrike), ITP surveille activement chaque session *après* le login initial. S'il détecte une anomalie — comme un changement d'IP suspect, une alerte d'un système de sécurité du device, ou un comportement utilisateur inhabituel — il peut intervenir automatiquement en terminant la session, requérant une réauthentification, ou escaladant l'incident à l'équipe de sécurité.

### 4. N'oubliez pas le Client : CIAM pour environnements hautement réglementés

La confiance du client représente l'asset le plus précieux pour chaque institution financière. Protéger les comptes des clients des fraudes et account takeover requiert le même niveau de rigueur appliqué en interne, mais avec une attention particulière à l'équilibre entre sécurité et user experience. Dans le secteur bancaire, où chaque friction peut se traduire en abandon du client, cet équilibre est particulièrement délicat.

**💡 Technologies clés :**

- **[Auth0](https://www.auth0.com/)** avec **[Highly Regulated Identity (HRI)](https://auth0.com/features/highly-regulated-identity)** représente la solution **Financial-Grade Identity** pour les opérations client sensibles. HRI est conçue spécifiquement pour satisfaire les plus hauts standards de sécurité et conformité réglementaire dans le secteur financier.

- **HRI implémente trois piliers de sécurité fondamentaux :**
    
    - **Strong Customer Authentication (SCA) avec Dynamic Linking** : HRI implémente le SCA comme défini par **PSD2 (Payment Services Directive 2)**, requérant au moins deux facteurs d'authentification indépendants. Le **Dynamic Linking** lie cryptographiquement les détails de la transaction au processus d'approbation SCA, montrant à l'utilisateur exactement ce qu'il approuve (ex. `Autoriser paiement de €1.000 à Giovanni Rossi?`) et prévenant ainsi les *sophisticated fraud* via *transaction tampering*[^6].

    - **Protocoles FAPI 1 Advanced** : HRI est une implémentation certifiée du standard **Financial-Grade API** de l'OpenID Foundation, qui inclut[^7] :

        - **PAR (Pushed Authorization Requests)** : Déplace les paramètres sensibles de la transaction du front-channel (navigateur) vers des appels back-end authentifiés, empêchant l'interception
        - **JAR (JWT-Secured Authorization Request)** : Protège l'intégrité de la requête d'autorisation via signature digitale  
        - **JWE (JSON Web Encryption)** : Chiffre le payload des access token pour prévenir les data breach applicatifs

    - **Authentification applicative renforcée** : Supporte **Private Key JWT** et **mTLS (Mutual TLS)** comme alternatives aux client secrets, éliminant la transmission de secrets sur le réseau. Le **Token Binding** garantit que seule l'application qui a demandé un access token peut l'utiliser, rendant les token inutiles même s'ils sont interceptés.

    - **Personnalisation et User Experience** : Malgré les contrôles de sécurité rigoureux, HRI maintient une expérience utilisateur fluide à travers l'intégration native avec **Okta Actions** pour des logiques d'autorisation personnalisées et de nouveaux templates pour **Universal Login** qui permettent de customiser les écrans d'approbation basés sur le type et les détails de la transaction spécifique (voir *[Okta Blog](https://www.okta.com/blog/2024/07/highly-regulated-identity-the-key-to-easier-more-secure-customer-interactions/)*).

## D'obligation réglementaire à avantage stratégique

Les données du rapport de la Banca d'Italia[^1], supportées par les trends européens documentés par EBA[^2] et ENISA[^3], dessinent clairement un champ de bataille cyber toujours plus complexe et interconnecté. Avec 80% des incidents qui touchent les services de paiement et 65% qui impliquent des fournisseurs tiers, affronter ces défis avec une approche fragmentée n'est plus soutenable ni économiquement efficace.

L'implémentation de l'**EU Systemic Cyber Incident Coordination Framework (EU-SCICF)** sous **DORA** souligne comment même les régulateurs reconnaissent que la résilience cyber requiert coordination et visibilité unifiée au niveau systémique. Ce même principe s'applique au niveau d'entreprise : un **Identity Fabric** unifié est nécessaire[^8].

Construire un **Identity Fabric** avec la **Okta Platform** signifie passer d'une posture de défense réactive fragmentée à une de **résilience proactive orchestrée**. Cela signifie unifier la visibilité sur toutes les identités (humaines et non), automatiser la governance des accès et orchestrer la réponse aux menaces sur une plateforme cohérente et scalable.

Cette approche permet non seulement de répondre efficacement aux exigences strictes de **DORA et NIS2**, mais transforme la sécurité d'un centre de coût opérationnel en un vrai **facilitateur stratégique de business**. Une plateforme d'identité unifiée et résiliente ne protège pas seulement l'organisation de menaces toujours plus sophistiquées, mais renforce simultanément la confiance de clients et partenaires, accélère l'onboarding de nouveaux services digitaux et réduit les coûts opérationnels à travers l'automation intelligente.

Dans le panorama actuel, où le temps moyen de restauration a plus que doublé et où les menaces deviennent toujours plus silencieuses et persistantes, l'Identity Fabric n'est plus une option futuriste — c'est une nécessité stratégique immédiate pour la survie digitale du secteur financier.

## ✋ Le moment d'agir est maintenant

### 📊 Évaluez votre position actuelle

La résilience opérationnelle commence toujours par un assessment de l'état actuel. Nous suggérons de commencer avec :

- **Okta Secure Identity Discovery** : Un assessment gratuit qui analyse vos risques actuels de sécurité des identités à travers 12 questions ciblées, fournissant des recommandations spécifiques des experts Okta pour le secteur Financial Services. [Contactez-moi](/contacts) pour en savoir plus.

- **[Calculateur ROI d'Okta](https://www.okta.com/roi/)** : Quantifiez les bénéfices économiques d'une approche Identity Fabric.

### 🎯 Commencez votre Identity Fabric

Il n'est pas nécessaire de révolutionner tout du jour au lendemain. Vous pouvez commencer avec une approche graduelle :

1. **Pilotez la protection anti-phishing** : Implémentez **[Okta FastPass](https://www.okta.com/products/fastpass/)** sur un groupe d'utilisateurs pour tester l'efficacité de l'authentification phishing-resistant
2. **Gérez les identités humaines et non** : Utilisez **[Okta ISPM](https://www.okta.com/products/identity-security-posture-management/)** pour mapper toutes les identités, y compris service accounts et API key qui échappent souvent aux contrôles traditionnels. 💡 *Vous pouvez l'utiliser même si vous n'utilisez pas Okta comme IAM !*
3. **Protégez les clients** : Expérimentez **[Auth0 HRI](https://auth0.com/features/highly-regulated-identity)** pour implémenter Strong Customer Authentication conforme PSD2 en maintenant une UX optimale

### 🚀 Ressources immédiates

- **[Okta for Financial Services](https://www.okta.com/solutions/financial-services/)** : Solutions spécifiques pour banques et institutions financières
- **[5 key DORA requirements](https://www.okta.com/uk/resources/infographic-5-key-dora-requirements/)** : infographie utile sur la réglementation DORA
- **[A Guide to DORA Compliance with Okta](https://sec.okta.com/articles/2025/05/a-guide-to-dora-compliance-with-okta/)** : article du blog d'Okta
- **[PCI DSS 4.0: What financial service providers need to know about new regulatory requirements](https://www.okta.com/blog/2024/11/pci-dss-4-0-what-financial-service-providers-need-to-know-about-new-regulatory/)**

### 🤝 Confrontons-nous sur votre stratégie

Le secteur financier a des défis uniques qui requièrent des compétences spécialisées :

📞 **[Consultation personnalisée](/contacts)** : Comme Solutions Engineer spécialisé dans le marché italien, je peux vous aider à définir une roadmap Identity Fabric spécifique pour votre organisation, considérant legacy systems, contraintes normatives et objectifs business.

💬 **Partagez votre expérience** : Comment évolue votre stratégie de sécurité des identités ? Quels sont les plus grands défis que vous affrontez dans la gestion d'identités humaines et non humaines dans le contexte DORA/NIS2 ? Parlons-en dans les commentaires.

📰 **[Suivez-moi sur LinkedIn](https://linkedin.com/in/fabiograsso82)** pour des insights réguliers sur Identity Fabric, compliance normative et best practices pour le secteur Financial Services.

[^1]: [Framework segnaletico di Vigilanza degli incidenti operativi o di sicurezza - Analisi orizzontale 2024](https://www.bancaditalia.it/compiti/vigilanza/analisi-sistema/approfondimenti-banche-int/Framework-segnaletico-di-Vigilanza-degli-incidenti-operativi-o-di-sicurezza-Analisi-orizzontale-2024.pdf), Banca d'Italia, Juillet 2025

[^2]: [EBA Risk Assessment Report - Autumn 2024](https://www.eba.europa.eu/publications-and-media/press-releases/eu-banks-continue-be-robust-although-risks-geopolitical-tensions-and-cyber-threats-remain), European Banking Authority, Novembre 2024

[^3]: [ENISA Threat Landscape: Finance Sector](https://www.enisa.europa.eu/publications/enisa-threat-landscape-finance-sector), European Union Agency for Cybersecurity, Février 2025

[^4]: [Digital Operational Resilience Act (DORA)](https://www.digital-operational-resilience-act.com/), Règlement UE 2022/2554, applicable du 17 janvier 2025

[^5]: [Network and Information Security (NIS) 2 Directive](https://www.nis-2-directive.com/), Directive UE 2022/2555

[^6]: [Implementing and delegated acts - PSD 2](https://finance.ec.europa.eu/regulation-and-supervision/financial-services-legislation/implementing-and-delegated-acts/payment-services-directive_en)

[^7]: [Financial-Grade API Security Profile](https://curity.io/resources/learn/what-is-financial-grade/), Curity, 2023

[^8]: [EU Systemic Cyber Incident Coordination Framework](https://www.eu-scicf.com/), ESRB Recommendation, implémenté avec DORA 2025
