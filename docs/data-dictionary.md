# Dictionnaire de données

## Présentation

Le dictionnaire de données décrit les champs utilisés dans les tables de la base de données du Job Board, ainsi que leurs types, tailles, nullabilité et contraintes.

## Table `entreprise`

| Champ         | Type    | Taille | Nullabilité | Contrainte         |
| ------------- | ------- | -----: | ----------- | ------------------ |
| `id`          | INT     |      — | NOT NULL    | PK, AUTO_INCREMENT |
| `nom`         | VARCHAR |    150 | NOT NULL    | —                  |
| `description` | TEXT    |      — | NULL        | —                  |
| `ville`       | VARCHAR |    100 | NOT NULL    | —                  |
| `site_web`    | VARCHAR |    255 | NULL        | —                  |

## Table `offre`

| Champ              | Type    | Taille | Nullabilité | Contrainte           |
| ------------------ | ------- | -----: | ----------- | -------------------- |
| `id`               | INT     |      — | NOT NULL    | PK, AUTO_INCREMENT   |
| `titre`            | VARCHAR |    150 | NOT NULL    | —                    |
| `description`      | TEXT    |      — | NOT NULL    | —                    |
| `type`             | VARCHAR |     50 | NOT NULL    | —                    |
| `ville`            | VARCHAR |    100 | NOT NULL    | —                    |
| `date_publication` | DATE    |      — | NOT NULL    | —                    |
| `entreprise_id`    | INT     |      — | NOT NULL    | FK → `entreprise.id` |

## Table `technologie`

| Champ | Type    | Taille | Nullabilité | Contrainte         |
| ----- | ------- | -----: | ----------- | ------------------ |
| `id`  | INT     |      — | NOT NULL    | PK, AUTO_INCREMENT |
| `nom` | VARCHAR |    100 | NOT NULL    | UNIQUE             |

## Table `offre_technologie`

| Champ            | Type | Taille | Nullabilité | Contrainte                |
| ---------------- | ---- | -----: | ----------- | ------------------------- |
| `offre_id`       | INT  |      — | NOT NULL    | PK, FK → `offre.id`       |
| `technologie_id` | INT  |      — | NOT NULL    | PK, FK → `technologie.id` |

## Clé primaire composée

La table `offre_technologie` utilise une clé primaire composée de `offre_id` et `technologie_id`.

```sql
PRIMARY KEY (offre_id, technologie_id)
```
