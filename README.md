# Portail Stages & Alternances

## Description

Portail web interne permettant de centraliser les offres de stages et d'alternances pour les apprenants.

L'objectif est de faciliter la consultation des offres, la recherche, le filtrage, l'accès aux détails d'une offre et le suivi des opportunités intéressantes.

Le projet est réalisé dans le cadre de la formation **Développeur MERN 2026/2027**.

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
* gérer les offres depuis une interface d'administration ;
* créer, modifier et supprimer des offres ;
* associer plusieurs technologies à une offre.

---

## Utilisateurs

### Visiteur / Apprenant

Le visiteur peut :

* consulter les offres ;
* rechercher une offre ;
* filtrer les offres ;
* combiner plusieurs filtres ;
* consulter le détail d'une offre ;
* suivre ou retirer une offre suivie.

Les offres suivies sont conservées localement dans le navigateur avec `localStorage`.

### Administrateur

L'administrateur peut :

* consulter les offres ;
* ajouter une offre ;
* modifier une offre ;
* supprimer une offre ;
* sélectionner une entreprise ;
* associer plusieurs technologies à une offre.

> L'authentification et la gestion avancée des comptes ne font pas partie du périmètre actuel.

---

## Pages

### Partie publique

* `/offers` — Liste des offres
* `/offers/:id` — Détail d'une offre
* `/offres-suivies` — Offres suivies
* `/deposer-offre` — Dépôt d'une offre

### Partie administration

* `/admin` — Tableau de bord
* `/admin/offers/new` — Ajouter une offre
* `/admin/offers/:id/edit` — Modifier une offre

---

## Fonctionnalités

### Liste des offres

Les offres sont récupérées depuis la base de données MySQL.

Chaque offre affiche notamment :

* titre ;
* entreprise ;
* ville ;
* type de contrat ;
* description ;
* technologies ;
* date de publication.

Les offres sont triées par date de publication décroissante.

### Recherche

La recherche permet de rechercher une offre par mot-clé dans :

* le titre ;
* la description ;
* le nom de l'entreprise.

Exemple :

```text
/offers?search=React
```

### Filtres

Les offres peuvent être filtrées par :

* type de contrat ;
* ville ;
* technologie.

Les filtres sont combinables.

Exemple :

```text
/offers?type=Stage&city=Casablanca&tech=2
```

La recherche peut également être combinée avec les filtres :

```text
/offers?search=React&type=Stage&city=Casablanca&tech=2
```

Les filtres sont appliqués côté serveur avec des requêtes SQL préparées.

### Détail d'une offre

Chaque offre possède une page de détail accessible depuis la liste.

Exemple :

```text
/offers/1
```

### Offres suivies

L'utilisateur peut suivre une offre grâce à l'icône étoile.

Les identifiants des offres suivies sont conservés dans le navigateur avec :

```text
localStorage
```

Clé utilisée :

```text
followed_offers_ids
```

Cette fonctionnalité ne nécessite pas de compte utilisateur.

---

## Administration

L'espace d'administration permet de gérer les offres.

### Ajouter une offre

L'administrateur peut renseigner :

* titre ;
* description ;
* ville ;
* type de contrat ;
* entreprise ;
* technologies.

### Modifier une offre

Une offre existante peut être modifiée.

Les technologies associées sont également mises à jour.

### Supprimer une offre

Une offre peut être supprimée depuis l'espace d'administration.

Les relations associées dans la table `offre_technologie` sont automatiquement supprimées grâce aux contraintes de clé étrangère.

---

## Base de données

Le projet utilise **MySQL**.

### Tables principales

```text
entreprise
    │
    │ 1
    │
    │ N
   offre
    │
    │ N
    │
    │ N
offre_technologie
    │
    │ N
    │
    │ 1
technologie
```

### Tables

#### `entreprise`

Stocke les entreprises proposant des offres.

Principales colonnes :

* `id`
* `nom`
* `ville`
* `description`

#### `offre`

Stocke les offres de stage et d'alternance.

Principales colonnes :

* `id`
* `titre`
* `description`
* `ville`
* `type_contrat`
* `date_publication`
* `entreprise_id`

#### `technologie`

Stocke les technologies utilisées dans les offres.

Principales colonnes :

* `id`
* `nom`

#### `offre_technologie`

Table d'association entre les offres et les technologies.

Elle permet une relation **many-to-many** :

```text
Une offre → plusieurs technologies
Une technologie → plusieurs offres
```

---

## Structure du projet

```text
job-board/
│
├── database/
│   ├── schema.sql
│   ├── seed.js
│   └── reset.js
│
├── docs/
│   ├── analyse-cahier-des-charges.md
│   ├── class-diagram.md
│   ├── class-diagram.png
│   ├── data-dictionary.md
│   ├── relational-model.md
│   ├── relational-model.png
│   ├── use-case-diagram.md
│   ├── use-case-diagram.png
│   ├── figma-link.md
│   └── jira-export.md
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── followed.js
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── repositories/
│   │   ├── offerRepository.js
│   │   ├── companyRepository.js
│   │   └── technologyRepository.js
│   │
│   ├── routes/
│   │   ├── offerRoutes.js
│   │   └── adminRoutes.js
│   │
│   └── views/
│       ├── pages/
│       │   ├── offers.ejs
│       │   ├── offer-detail.ejs
│       │   ├── followed-offers.ejs
│       │   │
│       │   └── admin/
│       │       ├── dashboard.ejs
│       │       ├── add-offer.ejs
│       │       └── edit-offer.ejs
│       │
│       └── partials/
│           ├── header.ejs
│           ├── footer.ejs
│           └── offer-card.ejs
│
├── app.js
├── package.json
├── package-lock.json
├── .env
├── .env.example
├── .gitignore
└── README.md
```

---

## Architecture

Le projet utilise une architecture simple basée sur :

```text
Route
   ↓
Repository
   ↓
MySQL
   ↓
EJS
```

### Routes

Les routes reçoivent les requêtes HTTP et préparent les données nécessaires aux vues.

### Repositories

Les repositories contiennent les requêtes SQL permettant d'accéder à la base de données.

Exemples :

```text
offerRepository.js
companyRepository.js
technologyRepository.js
```

### EJS

Les vues EJS permettent de générer les pages HTML côté serveur.

Des partials sont utilisés pour éviter de répéter les composants communs :

```text
header.ejs
footer.ejs
offer-card.ejs
```

---

## Technologies

Cette version utilise :

* Node.js
* Express.js
* EJS
* MySQL
* mysql2
* JavaScript
* HTML5
* CSS3
* `localStorage`
* Git
* GitHub

### Packages principaux

```text
express
ejs
mysql2
dotenv
```

---

## Gestion des données

Les requêtes SQL utilisent des paramètres préparés avec `?`.

Exemple :

```js
const [offers] = await db.execute(`
    SELECT *
    FROM offre
    WHERE ville = ?
`, [city])
```

Cela permet de séparer les données utilisateur de la requête SQL.

---

## Seed et base de données

Le projet contient des scripts pour préparer les données de développement.

### Création du schéma

Le fichier :

```text
database/schema.sql
```

contient la structure de la base de données.

### Données de test

Le fichier :

```text
database/seed.js
```

permet d'insérer les données de démonstration.

### Réinitialisation

Le fichier :

```text
database/reset.js
```

permet de réinitialiser les données selon la configuration du projet.

---

## Conception

Les documents de conception sont disponibles dans le dossier `docs/`.

Ils comprennent notamment :

* analyse du cahier des charges ;
* diagramme de classes ;
* diagramme de cas d'utilisation ;
* modèle relationnel ;
* dictionnaire de données ;
* lien vers la maquette Figma ;
* export du projet Jira.

### Figma

Lien vers la maquette :

[Maquette Figma](https://www.figma.com/design/5ETwMnUKqQr5G0h5Rgz70i/Untitled?node-id=19-794&m=dev&t=MXrSpfF6Mk7H6gwT-1&utm_source=chatgpt.com)

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

[Projet Jira PJB](https://outergamoustafa-1764845699446.atlassian.net/jira/software/projects/PJB/boards/368?filter=&groupBy=none&utm_source=chatgpt.com)

---

## Responsive Design

L'interface est conçue pour être utilisable sur :

* Mobile ;
* Tablette ;
* Desktop.

L'objectif est de conserver une interface claire, lisible et cohérente sur les différentes tailles d'écran.

---

## Hors périmètre actuel

Cette version n'intègre pas :

* authentification ;
* création de compte ;
* gestion de mot de passe ;
* rôles et permissions avancés ;
* candidature en ligne complète ;
* upload de CV ;
* envoi automatique d'emails ;
* messagerie ;
* paiement ;
* statistiques avancées ;
* moteur de recommandation ;
* espace entreprise complet.

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/souad5017/job-board.git
```

### 2. Se placer dans le projet

```bash
cd job-board
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Configurer les variables d'environnement

Créer un fichier `.env` :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=job_board
DB_PORT=3306
```

### 5. Créer la base de données

Exécuter le fichier :

```text
database/schema.sql
```

dans MySQL.

### 6. Insérer les données de test

```bash
npm run db:seed
```

### 7. Lancer le serveur

```bash
node app.js
```

Puis ouvrir :

```text
http://localhost:3000
```

---

## Git

Le projet utilise Git pour le suivi des versions.

Les fonctionnalités sont développées sur des branches dédiées.

Branches principales du projet :

```text
brief-3/database-design
brief-3/database
brief-3/express-setup
brief-3/public-offers
brief-3/search-filters
brief-3/admin-crud
brief-3/followed-offers
brief-3/documentation
```

Les commits suivent une convention simple :

```text
feat: nouvelle fonctionnalité
fix: correction d'un bug
docs: modification de la documentation
chore: nettoyage ou maintenance du projet
```

Exemple :

```bash
git commit -m "feat: add search and filters"
```

---

## Évolution du projet

### Brief 2

La première version utilisait :

```text
HTML
CSS
JavaScript Vanilla
JSON
Fetch API
localStorage
```

Les données étaient stockées dans un fichier JSON.

### Brief 3

La version actuelle utilise :

```text
Node.js
Express.js
EJS
MySQL
mysql2
dotenv
```

Les données sont maintenant stockées dans une base de données relationnelle.

La recherche et les filtres sont exécutés côté serveur avec SQL.

L'administration permet également de gérer les offres.

---

## Auteur

**Souad El Barjiji**

Projet réalisé dans le cadre de la formation **Développeur MERN 2026/2027**.
