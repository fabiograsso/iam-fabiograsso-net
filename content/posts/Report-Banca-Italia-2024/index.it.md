---
title: "Banche Sotto Assedio: +45% di Incidenti. Oltre l'Allarme, la Strategia: l'Identity Fabric."
date: 2025-08-01
draft: false
tags: [Cybersecurity, Sicurezza Informatica, Financial Services, DORA, NIS2, IdentityManagement, IAM, CIAM, ZeroTrust, Okta]
description: "A brief description."
categories: ["blog"]
cover:
    image: "cover.jpeg"
#    alt: "<alt text>" # alt text
#    caption: "<text>" # display caption under cover
    relative: true # when using page bundles set this to true
#    hidden: true # only hide on current single page
 
---

Il recente report 2024 della Banca d'Italia[^1] non è solo una statistica, è un campanello d'allarme strategico per l'intero settore finanziario italiano (e, per estensione, europeo). I dati sono netti: un **aumento del 45% degli incidenti operativi e di sicurezza segnalati**, per un totale di 188 notifiche.

[^1]:[Framework segnaletico di Vigilanza degli incidenti operativi o di sicurezza - Analisi orizzontale 2024](https://www.bancaditalia.it/compiti/vigilanza/analisi-sistema/approfondimenti-banche-int/Framework-segnaletico-di-Vigilanza-degli-incidenti-operativi-o-di-sicurezza-Analisi-orizzontale-2024.pdf), 4 luglio 2025

Ma il dato più rivelatore è un altro: il **65% di tutti gli incidenti ha coinvolto un fornitore di servizi esterno** , un balzo enorme rispetto al 45% del 2023. Questo, unito a un tempo medio di ripristino dei servizi più che raddoppiato (da 9 a 21 ore), ci dice una cosa chiara: il perimetro di sicurezza tradizionale non esiste più. Il rischio è frammentato, interconnesso e risiede sempre più nella gestione delle identità.

Gli aggressori si stanno evolvendo. Gli attacchi DDoS "rumorosi" sono crollati del 75%, lasciando spazio a minacce più silenziose e mirate come **malware, accessi non autorizzati e social engineering**. L'obiettivo non è più solo "buttare giù" un servizio, ma *infiltrarsi, rubare credenziali e muoversi lateralmente*.

In questo scenario, normative come il **[Digital Operational Resilience Act (DORA)](https://www.digital-operational-resilience-act.com/)**  e la **[Network and Information Security (NIS) 2](https://www.nis-2-directive.com/)** non sono un mero onere burocratico, ma la risposta logica a questa nuova realtà. Con le scadenze normative di DORA e NIS2 imminenti (e, in alcuni casi, già passate), l'urgenza di adottare un nuovo modello di difesa è massima.

La domanda non è più *se* adottare una strategia di sicurezza basata sull'identità, ma *come* costruirla in modo che sia coesa, scalabile e resiliente.

---

## La risposta strategica: costruire un "Identity Fabric" resiliente

Affrontare minacce così diverse — fragilità interna, attacchi esterni mirati e vulnerabilità della supply chain — con un mosaico di soluzioni di sicurezza isolate è una strategia perdente. Ogni strumento crea un nuovo silo, aumentando la complessità e lasciando pericolose zone d'ombra.

La risposta moderna è un approccio di piattaforma, un **Identity Fabric** .

**Cos'è un Identity Fabric?** Immaginatelo come un tessuto connettivo intelligente che unifica la sicurezza di **tutte le identità** (dipendenti, clienti, partner, API, agenti AI e service account) e di **tutte le risorse** (applicazioni, infrastrutture, dati). Invece di silos, crea un unico piano di controllo che offre visibilità centralizzata, orchestrazione delle policy e risposta coordinata alle minacce. Un concetto fondamentale di questo approccio è la neutralità, che garantisce la libertà di scegliere le migliori tecnologie senza essere vincolati a un unico ecosistema.

![alt text](okta-identity-fabric.png)

Un Identity Fabric efficace si fonda su quattro pilastri strategici.

### 1. Oltre l'MFA: autenticazione a prova di phishing

Con il social engineering e il furto di credenziali come vettori d'attacco primari , l'MFA tradizionale (notifiche push, OTP) non è più sufficiente. È essenziale neutralizzare il phishing alla radice.

**La tecnologie chiave:**

- **[Okta FastPass](https://www.okta.com/products/fastpass/)** utilizza standard crittografici (come FIDO2) per legare l'autenticazione al dispositivo. In parole semplici, anche se un utente viene ingannato e inserisce le proprie credenziali su un sito falso, queste sono inutili per l'attaccante perché non possono essere riutilizzate altrove.

- **Okta Adaptive MFA**:

### 2. Governance Totale: gestire il ciclo di Vita di *Tutte* le identità

Il 65% degli incidenti che coinvolge fornitori  è un problema di governance degli accessi. Questo rischio è amplificato dall'esplosione delle **Identità Non Umane (NHI)** — API key, service account, token — che oggi superano di gran lunga quelle umane  e sono il tessuto connettivo della supply chain digitale. Governarle con lo stesso rigore di quelle umane è un imperativo di DORA.

**La tecnologie chiave:**

- Piattaforme come **[Okta Identity Governance (OIG)](https://www.okta.com/products/identity-governance/)** automatizzano l'intero ciclo di vita dell'accesso (JML: Joiner-Mover-Leaver). Garantiscono che a ogni identità (umana e non) venga applicato il principio del minimo privilegio (least privilege) attraverso flussi di richiesta e approvazione tracciabili e campagne di certificazione periodiche.

- **[Okta Privileged Access](https://www.okta.com/products/privileged-access/)**:

### 3. Dalla prevenzione alla protezione continua e proattiva

La sicurezza non può essere un controllo statico al momento del login. Deve essere un processo dinamico che valuta il rischio in tempo reale, per tutta la durata della sessione.

**Le tecnologie chiave:** Qui servono due capacità complementari che lavorano in sinergia:

- **[Okta ISPM - Identity Security Posture Management/](https://www.okta.com/products/identity-security-posture-management/)**: È la difesa proattiva. Pensa a ISPM come a un "check-up" continuo della tua infrastruttura di identità. Scansiona costantemente i tuoi sistemi (come Azure AD, AWS, Salesforce) per trovare e correggere configurazioni errate, falle nell'MFA o privilegi eccessivi *prima* che vengano sfruttati.

- **[Okta ITP - Identity Threat Protection/](https://www.okta.com/products/identity-threat-protection/)** : È la difesa reattiva in tempo reale. Utilizzando standard aperti come CAEP e SSF per integrare segnali di rischio dall'intero ecosistema di sicurezza (es. da un EDR come CrowdStrike) , ITP monitora la sessione *dopo* il login. Se rileva un'anomalia (es. un cambio di IP sospetto o un alert dal dispositivo), può intervenire automaticamente, terminando la sessione o richiedendo un'ulteriore verifica.

## 4. Non dimenticare il Cliente: CIAM per ambienti altamente regolamentati

La fiducia del cliente è l'asset più prezioso. Proteggere gli account dei clienti da frodi e acquisizioni richiede lo stesso livello di rigore applicato internamente, bilanciando sicurezza e user experience.

**La tecnologia chiave:** [Auth0 by Okta](https://auth0.com/) offre moduli specializzati come **[(HRI - Highly Regulated Identity)](https://auth0.com/features/highly-regulated-identity)**. HRI è progettata per soddisfare i più alti standard di sicurezza e conformità (es. **FAPI, Financial-Grade API**). Implementa controlli essenziali come la **Strong Customer Authentication (SCA)** e il **Dynamic Linking**, che lega l'autenticazione ai dettagli specifici di una transazione, mostrando all'utente esattamente cosa sta approvando e prevenendo così le frodi.

---

## Conclusione: da obbligo normativo a vantaggio strategico

Il report della Banca d'Italia[^1] è un'istantanea di un campo di battaglia complesso e interconnesso. Affrontarlo con un approccio frammentato non è più sostenibile.

Costruire un **Identity Fabric** significa passare da una postura di difesa reattiva a una di resilienza proattiva. Significa unificare la visibilità, automatizzare la governance e orchestrare la risposta alle minacce su un'unica piattaforma. Questo non solo permette di rispondere ai requisiti di DORA e NIS2, ma trasforma la sicurezza da un centro di costo a un vero e proprio abilitatore di business, capace di proteggere l'organizzazione e, al contempo, di rafforzare la fiducia di clienti e partner.

*La vostra organizzazione sta ancora gestendo le identità in silos o sta già costruendo un approccio di piattaforma unificato? Quali sono le maggiori sfide che vedete all'orizzonte?*
