# Portail Stages & Alternances

## Description

Portail web interne permettant de centraliser les offres de stages et d'alternances pour les apprenants.

L'objectif est de faciliter la consultation des offres, la recherche, le filtrage, l'accès aux détails d'une offre et le suivi des opportunités intéressantes.

Ce projet est réalisé dans le cadre de la formation **Développeur MERN 2026/2027**.

---

## Objectifs

Le portail permet de :

* consulter une liste d'offres ;
* rechercher une offre par mot-clé ;
* filtrer les offres par ville, technologie et type de contrat ;
* combiner plusieurs filtres ;
* trier les offres par date de publication ;
* consulter le détail d'une offre ;
* suivre ou retirer une offre suivie ;
* conserver les offres suivies avec `localStorage` ;
* gérer les états de chargement, d'erreur et d'absence de résultats.

---

## Utilisateurs

### Apprenant

L'apprenant peut :

* consulter les offres ;
* rechercher et filtrer les offres ;
* combiner plusieurs filtres ;
* consulter le détail d'une offre ;
* suivre ou retirer une offre suivie.

### Visiteur

Le visiteur peut consulter les offres publiques.


---

## Pages

### Pages principales

* `index.html` — Liste des offres
* `offre-detail.html` — Détail d'une offre
* `deposer-offre.html` — Dépôt d'une offre
* `offres-suivies.html` — Offres suivies

---

## Structure du projet

```text
job-board/
│
├── index.html
├── offre-detail.html
├── deposer-offre.html
├── offres-suivies.html
│
├── data/
│   └── offres.json
│
├── js/
│   ├── app.js
│   ├── data.js
│   ├── filters.js
│   ├── render.js
│   └── storage.js
│
├── css/
│   └── style.css
│
├── docs/
│   ├── analyse-cahier-des-charges.md
│   ├── jira-export.md
│   └── figma-link.md
│
└── README.md
```

---

## Fonctionnalités du Brief 2

### Chargement des données

Les offres sont stockées dans un fichier JSON :

```text
data/offres.json
```

Les données sont récupérées avec :

* `fetch()`
* `async/await`

### Recherche

La recherche permet de rechercher une offre par :

* titre ;
* entreprise ;
* description.

### Filtres

Les offres peuvent être filtrées par :

* type de contrat ;
* ville ;
* technologie.

Les filtres sont combinables.

Par exemple :

```text
Type : Stage
Ville : Rabat
Technologie : React
```

Les résultats sont mis à jour dynamiquement.

### Détail d'une offre

Chaque offre possède une page de détail accessible depuis la liste des offres.

L'identifiant de l'offre est transmis dans l'URL :

```text
offre-detail.html?id=1
```

### Offres suivies

Les offres peuvent être suivies par l'utilisateur.

Les offres suivies sont conservées dans le navigateur avec :

```text
localStorage
```

---

## Technologies

Cette version utilise :

* HTML5
* CSS3
* JavaScript Vanilla
* JSON
* Fetch API
* Async/Await
* DOM
* LocalStorage
* Git
* GitHub

Aucun framework JavaScript n'est utilisé dans cette version.

Le backend, la base de données et l'API REST seront développés dans les briefs suivants.

---

## Conception

Les maquettes du portail sont réalisées avec **Figma**.

Les écrans prévus comprennent :

* liste des offres ;
* détail d'une offre ;
* dépôt d'une offre ;
* offres suivies ;
* administration des offres ;
* versions desktop et mobile ;
* composants réutilisables.

### Figma

Lien vers la maquette :

https://www.figma.com/design/5ETwMnUKqQr5G0h5Rgz70i/Untitled?node-id=19-794&m=dev&t=MXrSpfF6Mk7H6gwT-1

---

## Gestion du projet

Le projet est organisé avec **Jira**.

Le backlog contient notamment :

* Epics ;
* User Stories ;
* critères d'acceptation ;
* tâches techniques ;
* statuts.

### Jira

Lien vers le projet Jira :

https://outergamoustafa-1764845699446.atlassian.net/jira/software/projects/PJB/boards/368?filter=&groupBy=none

---

## Responsive Design

L'interface est conçue pour être utilisable sur :

*  Mobile
*  Tablette
*  Desktop

L'objectif est de conserver une interface claire, lisible et cohérente sur les différentes tailles d'écran.

---

## Hors périmètre du Brief 2

Cette version n'intègre pas encore :

* authentification ;
* création de compte ;
* gestion de mot de passe ;
* rôles et permissions avancés ;
* backend ;
* base de données ;
* API REST ;
* candidature en ligne complète ;
* upload de CV ;
* envoi automatique d'emails ;
* messagerie ;
* paiement ;
* statistiques avancées ;
* moteur de recommandation ;
* espace entreprise complet.

---

## Évolution prévue

Les prochaines versions pourront intégrer :

* backend Express/EJS ;
* MySQL ;
* API REST ;
* authentification ;
* gestion complète des offres ;
* interface d'administration fonctionnelle ;
* gestion des utilisateurs ;
* gestion des candidatures.

---

## Installation et lancement

Cloner le projet :

```bash
git clone https://github.com/souad5017/job-board.git
```

Se placer dans le projet :

```bash
cd job-board
```

L'application doit être lancée avec un serveur local afin de permettre le chargement du fichier JSON avec `fetch()`.

Par exemple, avec l'extension **Live Server** de VS Code.

---

## Git

Le projet utilise Git pour le suivi des versions.

Les fonctionnalités sont développées sur des branches dédiées, puis intégrées dans la branche principale.

Exemples de branches :

```text
brief-2/json-data
brief-2/dynamic-rendering
brief-2/filters-search
brief-2/followed-offers
```
