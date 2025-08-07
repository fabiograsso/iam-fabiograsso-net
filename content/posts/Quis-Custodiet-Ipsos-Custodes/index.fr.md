---
title: Quis Custodiet Ipsos Custodes?
date: 2025-08-05
draft: false
tags:
  - IAM
  - Zero
  - Trust
  - Identity
  - Fabric
  - Okta
description: À l'ère numérique, où l'identité est le nouveau périmètre de sécurité, la maxime "Quis custodiet ipsos custodes ?" est plus pertinente que jamais. Cet article explore le paradoxe de confier la gestion des identités au même fournisseur que l'infrastructure, une approche qui crée des risques tels que les points uniques de défaillance et le vendor lock-in. Nous préconisons l'adoption d'une stratégie IAM indépendante et agnostique, basée sur des standards ouverts et favorisant un Identity Fabric résilient et unifié. Un IAM impartial est essentiel pour réussir l'implémentation du modèle Zero Trust et protéger tout l'écosystème numérique de l'entreprise.
categories:
  - blog
cover:
  image: cover.png
#  alt: alt text
#  caption: text
  relative: true
---
## Qui surveille les surveillants à l'ère de l'identité numérique ?

> «Pone seram, cohibe, sed quis custodiet ipsos custodes? Cauta est et ab illis incipit uxor.»
>
> *Decimus Junius Juvenalis, Satires, VI, O31-O32*

*«Barre la porte, empêche de sortir, mais **qui surveillera les surveillants ?** L'épouse est rusée et commencera par eux.»*

Originellement référée à la difficulté de contrôler l'infidélité conjugale, cette réflexion du poète romain Juvénal est devenue une maxime intemporelle sur la nature du pouvoir, de la confiance et de la vigilance. La question "_Quis custodiet ipsos custodes ?_" — _Qui surveille les surveillants ?_ — résonne aujourd'hui avec force dans le monde de la **cybersécurité**, nous poussant à nous interroger sur qui protège les systèmes qui, à leur tour, nous protègent.

À une époque où le périmètre de sécurité n'est plus physique mais virtuel, l'identité numérique est devenue le nouveau bastion à protéger. Cela nous amène à un paradoxe crucial : pouvons-nous vraiment confier la gestion des identités au même fournisseur qui héberge notre infrastructure et nos services ?

Récemment, un client m'a posé une question délibérément provocatrice : *"À quoi sert Okta ? Mon fournisseur actuel peut déjà me donner tout : infrastructure, courrier électronique, stockage, Business Intelligence, protection des appareils... et aussi la gestion des identités. Pourquoi devrais-je dépenser plus d'argent pour Okta quand je peux tout avoir pratiquement gratuitement et intégré dans ce que j'ai déjà ?".* Cette affirmation, apparemment logique et innocente, révèle une perception répandue : que l'**IAM (Identity and Access Management - gestion des identités et des accès)** soit une simple fonctionnalité intégrée, et non un choix stratégique. Le débat n'est pas entre deux produits, mais entre un modèle centralisé et une architecture indépendante et agnostique.

## Zero Trust : L'Identité comme pilier de la sécurité

Le modèle de sécurité traditionnel, basé sur le concept de "trusted perimeter" (périmètre de confiance), est maintenant dépassé. Dans un monde où l'on travaille à distance, où l'on accède aux ressources SaaS et où l'on interagit avec des API, la confiance implicite est une vulnérabilité. La réponse à ce défi est le modèle Zero Trust, dont la philosophie centrale est "ne jamais faire confiance, toujours vérifier".

![Ceci est la légende de votre image](model-zero-trust.png)

Le [CISA's Zero Trust Maturity Model (ZTMM)](https://www.cisa.gov/zero-trust-maturity-model), un framework reconnu mondialement, identifie l'**identité comme le premier des piliers fondamentaux** de cette architecture. L'identité n'est pas seulement un composant, mais le point de contrôle primaire sur lequel se fonde toute la stratégie de sécurité. Pour implémenter avec succès ce modèle, une organisation a besoin d'un système IAM robuste capable de :

- **Appliquer des politiques adaptatives :** Adapter dynamiquement les politiques d'accès en fonction du contexte (utilisateur, appareil, localisation, heure).
- **Utiliser une authentification forte :** Implémenter une authentification multi-facteur (MFA) intelligente, adaptative et résistante au phishing.

Des outils comme **FastPass**, **Adaptive MFA et Identity Threat Protection (ITP)** deviennent essentiels pour réaliser ces objectifs, garantissant que seuls les utilisateurs et appareils légitimes puissent interagir avec les ressources d'entreprise.

Si nous analysons ensuite les **fondations**, nous trouvons :

- **Governance (gouvernance)** : définit les règles et politiques qui guident toute la stratégie de sécurité. Il ne suffit pas d'implémenter les bons outils, il est crucial d'établir qui peut accéder à quoi, dans quelles conditions et pendant combien de temps.
  Des solutions comme **Okta Identity Governance** deviennent vitales dans ce contexte, car elles permettent d'assurer que les accès sont toujours conformes aux politiques d'entreprise et qu'ils sont révoqués en temps opportun quand ils ne sont plus nécessaires. Cette approche non seulement renforce la sécurité, mais garantit aussi la conformité réglementaire.
- **Automation and Orchestration (automatisation et orchestration)** : L'efficacité d'un modèle Zero Trust dépend de sa capacité à réagir rapidement aux changements de contexte. Gérer manuellement chaque demande d'accès ou chaque changement d'état des appareils serait impossible. Des outils comme **Okta Workflows** permettent d'automatiser les processus de gestion des identités et des accès, éliminant le besoin d'interventions manuelles, réduisant les erreurs humaines et améliorant considérablement l'efficacité opérationnelle. L'automatisation permet au système de s'adapter en temps réel, appliquant la philosophie "ne jamais faire confiance, toujours vérifier" de manière scalable.
- **Visibility and Analytics (visibilité et analyses)** : Pour pouvoir prendre des décisions informées et réagir aux menaces, une organisation doit avoir une vision claire et constante de ce qui se passe dans son écosystème. Des plateformes comme **Okta ISPM (Identity Security Posture Management)** sont conçues pour analyser continuellement la santé de la sécurité des identités, fournissant des données précieuses et des insights qui aident à identifier et atténuer les risques avant qu'ils ne puissent devenir des problèmes sérieux. La capacité d'analyser les données et de visualiser les patterns d'accès est le pivot sur lequel se base la capacité de réaction proactive du modèle Zero Trust.

Quant aux autres "piliers" :

- **Device (appareil)** : L'appareil depuis lequel un utilisateur tente d'accéder aux ressources d'entreprise représente le premier point de contact et une vulnérabilité potentielle. L'intégration de l'IAM avec le Device Management (gestion des appareils) assure que seuls les appareils fiables, conformes aux politiques de sécurité, puissent accéder aux applications et données. De plus, **Okta Desktop Access (ODA)** permet d'implémenter une authentification multi-facteur directement depuis le bureau, liant l'identité de l'utilisateur à l'appareil. Cette protection est ultérieurement renforcée par les intégrations avec des outils tiers comme les **EDR** (**Endpoint Detection and Response**) comme **CrowdStrike**, qui surveillent constamment l'état de sécurité de l'appareil et signalent les anomalies, bloquant l'accès en cas de menaces détectées.
- **Networks (réseaux)** : Le périmètre du réseau traditionnel n'existe plus. Avec l'adoption du cloud et du travail hybride, l'accès aux ressources s'effectue depuis des réseaux non contrôlés. L'intégration de l'IAM avec les systèmes de sécurité réseau est donc cruciale. L'authentification et l'autorisation basées sur l'identité s'étendent aux outils comme les VPN et, de manière plus évoluée, aux systèmes **ZTA (Zero Trust Architecture)**, comme **Zscaler**. Cette approche garantit que l'accès aux ressources réseau spécifiques ne soit pas basé sur la localisation géographique ou le réseau d'origine, mais sur la validité de l'identité de l'utilisateur, de son appareil et du contexte de la demande.
- **Application & Workloads (applications et charges de travail)** : Les applications et charges de travail sont le cœur battant de l'activité d'entreprise et représentent un objectif primaire pour les attaquants. La protection de ce pilier se base sur l'extension de l'IAM aux applications elles-mêmes, garantissant que chaque accès et opération soit traçable, vérifié et conforme aux politiques. Les mécanismes de **Single Sign-On (SSO)** et **Multi-Factor Authentication (MFA)** pour les applications sont fondamentaux pour réduire la surface d'attaque. L'intégration avec les outils tiers et la standardisation via des protocoles comme **SAML** et **OIDC (OpenID Connect)** permettent de centraliser la gestion des identités sur toutes les applications, internes et externes, et de contrôler les autorisations à un niveau granulaire.
- **Data (données)** : En définitive, le but de tous les piliers de sécurité est de protéger les données. L'intégration de l'IAM avec les politiques de protection des données (Data Protection Policy) et avec les outils de sécurité des données, comme les systèmes **DLP (Data Loss Prevention)**, permet d'appliquer les politiques d'accès basées sur l'identité directement aux données, indépendamment d'où elles se trouvent (au repos ou en transit). Elle garantit que seuls les utilisateurs autorisés puissent accéder aux données sensibles, avec des autorisations spécifiques basées sur leur rôle et le contexte. De plus, elle prévient la fuite de données, même involontaire, en bloquant les opérations non conformes aux politiques.

## Identity Fabric : L'architecture qui unit les identités

![Identity Fabric Model for Zero Trust Maturity](model-identity-fabric.png)

Pour surmonter la complexité et la fragmentation de ces écosystèmes, le concept d'**Identity Fabric** émerge comme l'approche architecturale la plus efficace. L'Identity Fabric n'est pas un produit unique, mais un framework complet qui intègre et orchestre tous les systèmes IAM disparates pour fonctionner comme un système unifié unique. Cette approche crée un "tissu" de sécurité cohérent qui s'étend sur toute l'infrastructure IT d'entreprise, éliminant les silos et les angles morts de sécurité.

**Okta est conçue pour agir comme orchestrateur central dans cet Identity Fabric.** Grâce à ses vastes capacités d'intégration, Okta connecte et gère toutes les identités, applications et infrastructures (IaaS, on-prem, multi-cloud), indépendamment du fournisseur. Cette approche agnostique non seulement garantit une visibilité complète et un contrôle centralisé, mais permet aussi d'appliquer des politiques de sécurité cohérentes à toutes les entités numériques, humaines et non humaines. En pratique, cela permet d'orchestrer identités et accès de manière agile, scalable et sécurisée, en s'adaptant à une réalité cloud-first et API-driven, apportant les principes Zero Trust à un niveau d'implémentation plus large et cohésif.

![Vendor Lock-in](okta-identity-fabric.png)

## Le risque caché du fournisseur intégré

Choisir une solution IAM fournie par le même vendor qui gère votre infrastructure et vos données dans le cloud peut sembler pratique et économiquement avantageux, mais présente des risques significatifs. Voyons-les en détail.

![Vendor Lock-in](vendor-lock.jpg)

1. **Single Point of Failure (SPoF - point unique de défaillance)** : Se fier à un unique fournisseur pour l'infrastructure IT et la gestion de l'identité expose à une dangereuse concentration de risque de sécurité. Si un attaquant réussit à compromettre le provider, tout le stack d'entreprise est à risque : les identités des utilisateurs et des assets, les accès relatifs, les applications et les données sensibles. La violation du système IAM (Identity and Access Management) intégré, en particulier, accorde à l'attaquant les "*clés du royaume*", lui permettant de se déplacer latéralement et d'accéder à toutes les ressources et informations critiques au sein de l'écosystème d'entreprise, avec des conséquences potentiellement dévastatrices en termes de vol de données, interruption des opérations et compromission de la réputation.
2. **Vendor Lock-in** : L'intégration profonde avec l'écosystème propriétaire d'un seul fournisseur peut piéger les entreprises dans un lock-in presque irréversible. La migration devient un processus prohibitivement coûteux et chronophage, limitant drastiquement la flexibilité d'adopter de nouvelles technologies ou de négocier des conditions économiques plus avantageuses.
3. **Conflit d'intérêts et manque d'impartialité** : Quand un fournisseur contrôle à la fois les services et le mécanisme de sécurité, un conflit d'intérêts intrinsèque émerge. Ses priorités pourraient ne pas être la sécurité ou l'interopérabilité universelle, mais l'intégration profonde avec son propre écosystème. Cela peut conduire à des compromis sur la sécurité, à des raccourcis dans la protection et, en fin de compte, à un manque de transparence.

## Les avantages de l'agnosticisme IAM

Une solution **IAM agnostique**, comme **Okta**, est conçue pour être neutre, interopérable et modulaire. Choisir une plateforme indépendante offre les avantages suivants :

- **Flexibilité et Agilité** : Avec un vaste catalogue d'intégrations, une solution agnostique permet aux entreprises d'adopter une stratégie "best-of-breed" (meilleur de sa catégorie), choisissant les meilleurs outils pour chaque fonction d'entreprise et unifiant la gestion des identités dans une seule plateforme sécurisée.
  Par exemple, il est possible de choisir des solutions de différents fournisseurs pour : Infrastructure (IaaS), Collaboration (e-mail, fichiers, messagerie instantanée), EDR, Anti-spam, etc.
- **Neutralité et Standards ouverts** : Les solutions agnostiques se basent sur des standards ouverts (OAuth 2.0, OIDC, SAML, SCIM), évitant les logiques propriétaires. Cette neutralité favorise la portabilité, la conformité et l'interopérabilité entre différents écosystèmes.
  Cet engagement se manifeste dans l'initiative IPSIE (Identity Provider Security and Integration Ecosystem) promue en collaboration avec l'OpenID Foundation. L'objectif est de créer le premier standard de sécurité unifié pour les identités d'entreprise, une initiative qui vise à démocratiser la sécurité et garantir l'interopérabilité au bénéfice de tout le secteur.
- **Aucune dépendance aux logiques propriétaires** : Cette approche élimine complètement toute dépendance aux logiques propriétaires, garantissant que le système soit flexible, interopérable et à l'épreuve du futur. L'indépendance des solutions contraignantes permet aux organisations de choisir les technologies les plus adaptées à leurs besoins sans être limitées par les décisions d'un seul fournisseur. Cela favorise l'innovation et la capacité d'adaptation dans un paysage technologique en constante évolution.
- **Résilience et Governance renforcée** : Un IAM agnostique ne se limite pas au login. Il offre des outils d'Identity Governance (IGA) pour gérer le cycle de vie des identités, le Privileged Access Management (PAM) pour protéger les comptes sensibles et l'Identity Security Posture Management (ISPM) pour un monitoring continu.

Okta s'engage dans un processus continu d'amélioration de la sécurité à travers des investissements en innovation, contrôles et transparence.

![The Okta Platform](okta-identity-fabric.png)

## Conclusions : l'identité comme arbitre impartial

Dans le paysage numérique d'aujourd'hui, l'identité est le nouveau périmètre de sécurité. Le choix d'une plateforme IAM n'est pas seulement une décision technique, mais un choix stratégique fondamental. Se fier à un unique fournisseur pour infrastructure, données et identité peut paraître apparemment avantageux, mais la vraie sécurité se fonde sur la séparation des pouvoirs, la transparence et la liberté de choix.

Comme nous l'avons cité au début : *"Qui surveille les surveillants ?"*. **L'IAM