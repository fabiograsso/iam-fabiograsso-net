---
title: "Quis Custodiet Ipsos Custodes : pourquoi un IAM indépendant est essentiel pour la sécurité"
date: 2025-08-13
tags: ["IAM", "Zero Trust", "Identity Fabric", "Okta", "Cybersecurity", "Vendor Lock-in", "Identity Governance", "MFA", "SAML", "OIDC", "Digital Identity", "Enterprise Security", "IPSIE", "OpenID Foundation"]
summary: "Qui contrôle les contrôleurs ? Une analyse critique des risques du vendor lock-in dans l'IAM et les avantages d'une approche agnostique basée sur Identity Fabric et les standards ouverts."
showTaxonomies: true
---

## Qui surveille les surveillants à l'ère de l'identité numérique ?

> «Pone seram, cohibe, sed quis custodiet ipsos custodes? Cauta est et ab illis incipit uxor.»
>
> **Decimus Iunius Iuvenalis, Satires**

*«Ferme la porte à clé, empêche-la de sortir, mais **qui surveillera les surveillants ?** La femme est rusée et commencera par eux.»*

Originalement référée à la difficulté de contrôler l'infidélité conjugale, cette fameuse *expression latine* du poète romain *Juvénal* est devenue une maxime intemporelle sur la nature du pouvoir, de la confiance et de la vigilance. La question "_Quis custodiet ipsos custodes?_" — _Qui surveille les surveillants ?_ — résonne aujourd'hui avec force dans le monde de la **cybersécurité**, nous poussant à nous interroger sur qui protège les systèmes qui, à leur tour, nous protègent.

À une époque où le périmètre de sécurité n'est plus physique mais virtuel, l'identité numérique est devenue le nouveau bastion à protéger. Cela nous amène à un paradoxe crucial : pouvons-nous vraiment confier la gestion des identités au même fournisseur qui héberge notre infrastructure et nos services ?

Récemment, un client m'a posé une question volontairement provocatrice : *"À quoi sert Okta ? Mon fournisseur actuel peut déjà me donner tout : infrastructure, email, stockage, Business Intelligence, protection des devices... et même la gestion des identités. Pourquoi devrais-je dépenser plus d'argent pour Okta quand je peux avoir tout pratiquement gratuit et intégré avec ce que j'ai déjà ?"* Cette affirmation, apparemment logique et innocente, révèle une perception répandue : que l'**IAM (Identity and Access Management)** est une simple fonctionnalité intégrée, pas un choix stratégique. Le débat n'est pas entre deux produits, mais entre un modèle centralisé et une architecture indépendante et agnostique.

---

## Le modèle Zero Trust

Le modèle de sécurité traditionnel, basé sur le concept de "trusted perimeter", est maintenant dépassé. Dans un monde où on travaille à distance, on accède aux ressources SaaS et on interagit avec des API, la confiance implicite est une vulnérabilité. La réponse à ce défi est le modèle Zero Trust, dont la philosophie principale est "ne jamais faire confiance, toujours vérifier".

![CISA's Zero Trust Maturity Model (ZTMM)](model-zero-trust.png "CISA's Zero Trust Maturity Model (ZTMM)")

### L'identité comme pilier de la sécurité

Le [CISA's Zero Trust Maturity Model (ZTMM)](https://www.cisa.gov/zero-trust-maturity-model), un framework reconnu globalement, identifie l'**Identité** comme **le premier des piliers fondamentaux** de cette architecture. L'identité n'est pas seulement un composant, mais le point de contrôle primaire sur lequel se fonde toute la stratégie de sécurité. Pour implémenter avec succès ce modèle, une organisation a besoin d'un système IAM robuste capable de :

- **Appliquer des politiques adaptatives :** Adapter dynamiquement les politiques d'accès selon le contexte (utilisateur, device, localisation, heure).
- **Utiliser une authentification forte :** Implémenter une authentification multi-facteurs (MFA) intelligente, adaptive et résistante au phishing.

Des outils comme **[FastPass](https://www.okta.com/fastpass/)**, **[Adaptive MFA](https://www.okta.com/multi-factor-authentication/)** et **[Identity Threat Protection (ITP)](https://www.okta.com/products/identity-threat-protection/)** deviennent essentiels pour réaliser ces objectifs, garantissant que seuls les utilisateurs et devices légitimes peuvent interagir avec les ressources d'entreprise.

### Les fondations

Si nous analysons ensuite les **fondations**, nous trouvons :

**Governance** : définit les règles et politiques qui guident toute la stratégie de sécurité. Il ne suffit pas d'implémenter les bons outils, il est crucial d'établir qui peut accéder à quoi, dans quelles conditions et pour combien de temps.
  Des solutions comme **[Okta Identity Governance](https://www.okta.com/identity-governance/)** deviennent vitales dans ce contexte, car elles permettent de s'assurer que les accès sont toujours conformes aux politiques d'entreprise et qu'ils sont révoqués de manière opportune quand ils ne sont plus nécessaires. Cette approche ne renforce pas seulement la sécurité, mais garantit aussi la conformité réglementaire.

**Automation and Orchestration** : L'efficacité d'un modèle Zero Trust dépend de sa capacité à réagir rapidement aux changements de contexte. Gérer manuellement chaque demande d'accès ou chaque changement d'état des devices serait impossible. Des outils comme **[Okta Workflows](https://www.okta.com/workflows/)** permettent d'automatiser les processus de gestion des identités et des accès, éliminant le besoin d'interventions manuelles, réduisant les erreurs humaines et améliorant considérablement l'efficacité opérationnelle. L'automation permet au système de s'adapter en temps réel, appliquant la philosophie "ne jamais faire confiance, toujours vérifier" de manière scalable.

**Visibility and Analytics** : Pour pouvoir prendre des décisions informées et réagir aux menaces, une organisation doit avoir une vision claire et constante de ce qui se passe dans son écosystème. Des plateformes comme **[Okta ISPM (Identity Security Posture Management)](https://www.okta.com/identity-security-posture-management/)** sont conçues pour analyser continuellement la santé de la sécurité des identités, fournissant des données précieuses et des insights qui aident à identifier et mitiger les risques avant qu'ils puissent devenir des problèmes sérieux. La capacité d'analyser les données et visualiser les patterns d'accès est le pivot sur lequel se base la capacité de réaction proactive du modèle Zero Trust.

### Better together : les autres piliers

**Device** : Le device représente le premier point de contact et une vulnérabilité potentielle. L'intégration de l'IAM avec le Device Management assure que seuls les devices de confiance, conformes aux politiques de sécurité, peuvent accéder aux applications et données. Okta utilise des technologies standard, comme SCEP (Simple Certificate Enrollment Protocol), pour s'intégrer avec les Device Managers les plus répandus.
Cette protection est encore renforcée par les intégrations avec des outils tiers comme les **EDR** (**Endpoint Detection and Response**) comme par exemple **[CrowdStrike](https://www.crowdstrike.com/)**, qui surveillent constamment l'état de sécurité du device et signalent les anomalies, bloquant l'accès en cas de menaces détectées.
En plus, **[Okta Desktop Access (ODA)](https://www.okta.com/desktop-access/)** permet d'implémenter une authentification multi-facteurs directement depuis le desktop, bloquant l'accès du système d'exploitation.

**Networks** : Le périmètre du réseau traditionnel n'existe plus. Avec l'adoption du cloud et du travail hybride, l'accès aux ressources se fait depuis des réseaux non contrôlés. L'authentification et l'autorisation basées sur l'identité s'étendent aux outils comme les VPN et, de manière plus évoluée, aux systèmes **ZTA (Zero Trust Architecture)**, comme par exemple **[Zscaler](https://www.zscaler.com/)**. Cette approche garantit que l'accès aux ressources réseau spécifiques ne soit pas basé seulement sur la position géographique ou le réseau d'origine, mais sur la validité de l'identité de l'utilisateur, de son device et du contexte de la demande.

**Application & Workloads** : Les applications sont le cœur battant de l'activité business et représentent un objectif primaire pour les attaquants. La protection de ce pilier se base sur l'extension de l'IAM aux applications elles-mêmes, garantissant que chaque accès et opération soit traçable, vérifié et conforme aux politiques. Les mécanismes de **Single Sign-On (SSO)** et **Multi-Factor Authentication (MFA)** pour les applications sont fondamentaux pour réduire la surface d'attaque. La standardisation à travers des protocoles comme **SAML** et **OIDC (OpenID Connect)** permet de centraliser la gestion des identités sur toutes les applications, internes et externes, et de contrôler les autorisations à un niveau granulaire.

![Okta + Zscaler + Crowdstrike](okta-crowdstrike-zscaler.png "[*Better Together* : **Okta** s'intègre parfaitement avec des outils comme **Zscaler** et **Crowdstrike** pour partager des signaux et augmenter la sécurité](https://www.okta.com/partners/crowdstrike-and-zscaler/)")

Cela ne signifie pas que chaque organisation doive immédiatement implémenter tous les piliers - une approche graduelle est souvent plus réaliste.

### ABAC, ReBAC, DLP

**Data** : Le pilier final reconnaît que protéger le périmètre ne suffit pas : il faut protéger les *données* elles-mêmes. Dans ce contexte, l'IAM évolue d'un simple "gardien de la porte" à un **contrôleur intelligent des contenus**.

À travers des technologies comme l'**Attribute-Based Access Control (ABAC)** et des solutions de **Fine-Grained Authorization** comme **[Okta/Auth0 FGA](https://www.okta.com/products/fine-grained-authorization/)** (et sa version ouverte **[OpenFGA](https://openfga.dev/)**), l'IAM moderne peut appliquer des politiques d'autorisation granulaires qui vont au-delà de la simple authentification.
Le modèle d'autorisation flexible de **FGA**, basé sur **Relationship-Based Access Control (ReBAC)**, rend possible l'implémentation de politiques d'accès aux données qui reflètent exactement la structure organisationnelle et les processus business.

L'intégration avec les systèmes **DLP (Data Loss Prevention)** permet de bloquer en temps réel les opérations non conformes, tandis que l'**Identity Governance** assure que les droits d'accès soient révoqués automatiquement quand les conditions changent (changement de rôle, fin de contrat, modifications organisationnelles).

![Exemple de modèle Okta FGA](okta-fga.png "Exemple de modèle Okta FGA")

---

## Identity Fabric : L'architecture qui unit les identités

Tandis que le modèle Zero Trust définit clairement **quoi** protéger et **comment** approcher la sécurité, il ne résout pas automatiquement le problème de **coordination** entre tous les systèmes impliqués. Sans une architecture unifiante, on risque d'avoir un modèle Zero Trust théoriquement solide mais pratiquement fragmenté, où chaque composant opère en isolation.

Pour surmonter la fragmentation de ces écosystèmes, le concept d'**Identity Fabric** émerge comme l'approche architecturale la plus efficace. L'Identity Fabric n'est pas un seul produit, mais un framework complet qui intègre et orchestre tous les systèmes IAM disparates pour fonctionner comme un seul système unifié. Cette approche crée un "tissu" de sécurité cohérent qui s'étend sur toute l'infrastructure IT d'entreprise, éliminant les silos et les points aveugles de sécurité qui émergent d'une implémentation fragmentée du Zero Trust.

![Identity Fabric Model for Zero Trust Maturity](model-identity-fabric.png "Identity Fabric Model, évolution du Zero Trust Maturity Model")

**Okta est conçue pour servir d'orchestrateur central dans cette Identity Fabric.** Grâce à ses vastes capacités d'intégration, Okta connecte et gère toutes les identités, applications et infrastructures (IaaS, on-prem, multi-cloud), indépendamment du fournisseur. Cette approche *vendor-agnostic* ne garantit pas seulement une visibilité complète et un contrôle centralisé, mais permet aussi d'appliquer des politiques de sécurité cohérentes à toutes les entités numériques, humaines et non humaines. En pratique, elle permet d'orchestrer identités et accès de manière agile, scalable et sécurisée, s'adaptant à une réalité cloud-first et API-driven, portant les principes Zero Trust à un niveau d'implémentation plus large et cohésif.

![Okta Identity Fabric](okta-identity-fabric.png)

### IPSIE : L'importance des standards ouverts

La vraie force d'une Identity Fabric ne réside pas seulement dans la capacité d'un seul vendor d'orchestrer tous les composants, mais dans son **interopérabilité intrinsèque** basée sur des standards ouverts. Ce principe est fondamental pour garantir que l'architecture reste flexible et que les organisations maintiennent la liberté de choisir les meilleures solutions pour chaque besoin spécifique, sans être liées à un seul écosystème propriétaire.

**Okta soutient activement cette philosophie à travers l'adoption de protocoles standard** comme SAML, OIDC, OAuth 2.0 et SCIM, et participe activement à l'initiative **[IPSIE (Identity Provider Security and Integration Ecosystem)](https://www.okta.com/blog/2024/10/oktas-mission-to-standardize-identity-security/)** de la **OpenID Foundation[^2]**. Ce projet vise à créer le premier standard de sécurité unifié pour les identités d'entreprise, garantissant que différentes solutions IAM et autres produits de sécurité puissent communiquer et collaborer sans compromettre la sécurité.

![IPSIE (Identity Provider Security and Integration Ecosystem)](okta-ipsie.png)

L'approche basée sur des standards ouverts signifie qu'une organisation peut, par exemple, utiliser **Okta** pour l'**Identity Governance** tout en maintenant une solution différente pour l'**Access Management**, ou échanger des signaux avec des outils de sécurité tiers comme EDR, Antispam, ZTNA. Cette flexibilité **démocratise la sécurité des identités**, permettant à chaque organisation de construire sa propre Identity Fabric sur mesure, combinant les meilleures solutions disponibles sur le marché dans un écosystème cohérent et sécurisé.

---

## Le risque caché du fournisseur intégré

Choisir une solution IAM fournie par le même vendor qui gère votre infrastructure et vos données dans le cloud peut sembler pratique et économiquement avantageux, mais présente des risques significatifs. Voyons-les en détail.

![Vendor Lock-in](vendor-lock.png)

La profonde intégration avec l'écosystème propriétaire d'un seul fournisseur peut piéger les entreprises dans un **Vendor Lock-in** presque irréversible. La migration devient un processus prohibitivement coûteux et chronophage, limitant drastiquement la flexibilité d'adopter de nouvelles technologies ou de négocier des conditions économiques plus avantageuses.

De plus, quand un fournisseur contrôle à la fois les services et l'infrastructure et le mécanisme de sécurité, émerge un **conflit d'intérêts intrinsèque**.
Ses priorités pourraient ne pas être la sécurité ou l'interopérabilité universelle, mais l'intégration profonde avec son propre écosystème. Cela peut conduire à des compromis, des raccourcis dans la protection et, en fin de compte, à un **manque de transparence et d'impartialité**.

Souvent, les clients découvrent les limitations des solutions intégrées seulement quand il est trop tard et que changer devient très coûteux.

---

## Les avantages d'un IAM indépendant

Une solution **IAM indépendante**, comme **Okta**, est conçue pour être neutre, interopérable et modulaire. Choisir une plateforme indépendante offre les avantages suivants :

- **Flexibilité et Agilité** : Avec un vaste catalogue d'intégrations, une solution *vendor-agnostic* permet aux entreprises d'adopter une stratégie "best-of-breed", choisissant les meilleurs outils pour chaque fonction business et unifiant la gestion des identités dans une seule plateforme sécurisée.
  Par exemple, il est possible de choisir des solutions de différents fournisseurs pour : Infrastructure (IaaS), Collaboration (email, fichiers, instant messaging), EDR, Antispam, etc.

- **Neutralité et Standards Ouverts** : Les solutions comme Okta se basent sur des standards ouverts (OAuth 2.0, OIDC, SAML, SCIM), évitant les logiques propriétaires. Cette neutralité favorise la portabilité, la compliance et l'interopérabilité entre différents écosystèmes.
  Cet engagement se manifeste dans l'initiative **[IPSIE](#ipsie-limportance-des-standards-ouverts)**, dont nous avons parlé tout à l'heure.

- **Aucune dépendance aux logiques propriétaires** : Cette approche élimine complètement toute dépendance aux logiques propriétaires, garantissant que le système soit flexible, interopérable et à l'épreuve du futur. L'indépendance des solutions contraignantes permet aux organisations de choisir les technologies les plus adaptées à leurs besoins sans être limitées par les décisions d'un seul fournisseur. Cela favorise l'innovation et la capacité d'adaptation dans un paysage technologique en évolution continue.

- **Résilience et Governance Renforcée** : Un IAM indépendant ne se limite pas au login. Il offre des outils d'Identity Governance (IGA) pour gérer le cycle de vie des identités, le Privileged Access Management (PAM) pour protéger les comptes sensibles et l'Identity Security Posture Management (ISPM) pour un monitoring continu.

Okta s'engage dans un processus continu d'amélioration de la sécurité à travers des investissements en innovation, contrôles et transparence. Cela se concrétise dans l'**[Okta Secure Identity Commitment](https://www.okta.com/secure-identity-commitment/)**, une initiative stratégique à long terme pour guider l'industrie dans la lutte contre les attaques aux identités. Elle s'articule autour de quatre principes : **fournir des produits sécurisés à la pointe**, **promouvoir les meilleures pratiques parmi les clients**, **renforcer continuellement l'infrastructure d'entreprise interne**, et **élever les standards de toute l'industrie** (par exemple avec [IPSIE](#ipsie-limportance-des-standards-ouverts)).

### ROI Tangible et Bénéfices Mesurables

Les avantages d'une approche IAM basée sur *Identity Fabric* ne sont pas seulement théoriques. Selon une étude récente de **Forrester Consulting**[^1], les organisations qui implémentent **[Okta Identity Governance](https://www.okta.com/identity-governance/)** obtiennent un **ROI de 211%** en trois ans. Les bénéfices incluent :

- **Réduction des coûts opérationnels** : Automation des activités de provisioning et deprovisioning avec une réduction de 75% du temps nécessaire pour gérer les accès utilisateur
- **Amélioration de la productivité** : Les utilisateurs récupèrent en moyenne 30 minutes par jour grâce au SSO et à la réduction des frictions d'accès
- **Réduction des risques de compliance** : Diminution de 60% du temps nécessaire pour les audits et vérifications de conformité
- **Prévention de violations** : Le coût évité d'une seule violation peut largement dépasser l'investissement dans toute la plateforme IAM

Pour explorer le potentiel ROI spécifique pour votre organisation, Okta met à disposition un [calculateur dédié](https://www.okta.com/roi/) qui considère les dimensions et caractéristiques spécifiques de l'entreprise.

![The Okta Platform](okta-platform-identity-security-fabric.png)

### Évaluation de la maturité IAM : où vous situez-vous ?

Avant d'entreprendre la transformation, il est essentiel d'évaluer l'état actuel. Le **[modèle de maturité IAM d'Okta](https://www.okta.com/resources/whitepaper-a-comprehensive-guide-for-your-identity-maturity-journey/)** identifie quatre niveaux progressifs qui définissent comment les capacités d'Identity peuvent contribuer à l'atteinte des objectifs business et à la valeur organisationnelle :

1. **Fundamental** : Gestion manuelle des accès, mots de passe partagés, aucune visibilité centralisée
2. **Scaling** : Automation de base des processus, implémentation de SSO et MFA sur plusieurs applications
3. **Advanced** : Politiques centralisées, Governance structurée, Automation avancée, monitoring des accès et intégration avec d'autres systèmes. L'Identity s'intègre avec le broader technology stack pour améliorer l'efficacité pour une gestion proactive de la sécurité, avec des expériences utilisateur optimisées
4. **Strategic** : L'identité est stratégique : Automation complète, analytics prédictifs, Zero Trust implémenté, AI pour insights et recommandations. L'Identity devient le plan de contrôle primaire pour l'administration des accès et élément clé de la stratégie de cybersécurité

La majorité des organisations se trouve entre le Stage 1 et 2, avec d'importantes opportunités d'amélioration à travers l'adoption d'une plateforme IAM moderne.

![Okta Identity Maturity Model](okta-identity-maturity-model.png "[Okta Identity Maturity Model](https://www.okta.com/resources/whitepaper-a-comprehensive-guide-for-your-identity-maturity-journey/)")

---

## Une évaluation équilibrée

Bien que les avantages d'un **Identity Fabric** soient significatifs, il est important de reconnaître quelques défis que les organisations pourraient rencontrer :

- **Complexité initiale de setup** : L'implémentation d'une solution indépendante requiert une plus grande planification initiale par rapport à l'activation d'une fonctionnalité déjà intégrée. Cependant, cette complexité initiale se traduit en plus grande flexibilité et contrôle à long terme.

- **Investissement en compétences** : L'équipe IT doit acquérir une familiarité avec les protocoles d'intégration (SAML, OIDC, SCIM) et les best practices IAM. Okta mitigue ce défi à travers plus de 8000 intégrations out-of-the-box dans le catalogue [OIN - Okta Integration Network](https://www.okta.com/integrations/), [documentation extensive](https://help.okta.com/en-us/content/index.htm), [trainings gratuits](https://learning.okta.com/) et support dédié pendant l'onboarding.

- **Coûts de licensing additionnels** : Contrairement aux solutions "*gratuites*" intégrées, une plateforme IAM spécialisée a un coût de licence. Cependant, comme démontré par les données ROI, cet investissement se rembourse rapidement à travers efficacité opérationnelle et réduction des risques.

La clé est de reconnaître que ces défis sont **temporaires et mitigeables**, tandis que les avantages d'un IAM agnostique, basé sur une architecture Identity Fabric, sont **structurels et durables**.

### Pour les petites et moyennes entreprises

Même si l'approche intégrée peut sembler attrayante pour réduire coûts et complexité initiaux, l'expérience démontre qu'à long terme cela ne paie pas, surtout en termes de ROI et risque de violations. Les petites entreprises sont souvent les cibles les plus vulnérables précisément parce qu'elles perçoivent la sécurité comme un coût plutôt que comme un investissement.

Okta offre [des solutions spécifiques pour les small business](https://www.okta.com/solutions/small-business/) qui rendent l'IAM enterprise accessible même aux organisations plus petites.

Okta a un **modèle de pricing scalable** qui grandit avec l'entreprise, permettant de commencer avec les fonctionnalités essentielles et de les étendre dans le futur.

Cette approche permet aux PME d'implémenter des best practices de sécurité enterprise dès le début, évitant des migrations coûteuses futures et se protégeant de menaces toujours plus sophistiquées qui ne font pas de distinction entre grandes et petites organisations.

---

## Conclusions : l'identité comme arbitre impartial

Dans le paysage numérique d'aujourd'hui, l'identité est le nouveau périmètre de sécurité. Le choix d'une plateforme IAM n'est pas simplement une décision technique, mais un choix stratégique fondamental. Se confier à un seul fournisseur pour infrastructure, données et identité peut apparaître apparemment avantageux, mais la vraie sécurité se fonde sur la séparation des pouvoirs, la transparence et la liberté de choix.

![](mfa.png)

Adopter une solution **IAM indépendante**, qui se configure comme un vraitable **Identity Fabric**, signifie implémenter une architecture qui assure une gestion des identités unifiée et sécurisée. Cette approche réduit les risques, augmente la flexibilité et supporte pleinement une stratégie Zero Trust.

Comme nous avons cité au début : *"Qui surveille les surveillants ?"*. **L'IAM doit opérer comme un arbitre impartial, pas comme un joueur sur le terrain.**

La sécurité authentique dérive de la séparation des pouvoirs : **ceux qui sont chargés de la protection ne peuvent pas être ceux qui contrôlent chaque aspect de l'infrastructure et des données.** Une **architecture IAM indépendante** n'est pas seulement plus sécurisée, mais elle est aussi intrinsèquement plus **résiliente, scalable et libre**.

Comme **Solutions Engineer Okta**, je vois quotidiennement les bénéfices de cette approche. C'est pourquoi je crois qu'**Okta** représente la meilleure implémentation de cette philosophie.

---

## ✋ Votre expérience compte

📊 **Évaluez votre état actuel** : Avant d'entreprendre une transformation IAM, il est essentiel de faire le point de la situation. Okta offre un **Secure Identity Discovery Assessment** gratuit qui analyse vos risques actuels de sécurité des identités à travers *12 questions clés*, fournissant des recommandations ciblées de la part des experts Okta. [Contactez-moi](/contacts) pour en savoir plus.

📈 **Calculez votre ROI** : Utilisez le **[calculateur ROI d'Okta](https://www.okta.com/roi/)** pour évaluer les bénéfices économiques spécifiques pour votre organisation. En moyenne, les clients Okta réduisent de 60% les coûts de maintenance et développement.

📣 **Partagez votre expérience dans les commentaires** : Quelle est votre approche aux solutions IAM ? Avez-vous déjà affronté le dilemme entre solution intégrée et indépendante ?

🤝 **Découvrez l'Identity Fabric** : Si vous êtes intéressé à comprendre comment il peut protéger votre entreprise, [contactez-moi](/contacts) pour une consultation personnalisée.

[^1]: [The Total Economic Impact™ Of Okta Identity Governance](https://www.okta.com/blog/2025/07/new-forrester-study-reveals-okta-identity-governance-can-result-in-211-roi/), Forrester, 2025
[^2]: [The Interoperability Profiling for Secure Identity in the Enterprise (IPSIE) Work Group](https://openid.net/wg/ipsie/), OpenID Foundation, 2024
