import db from "../src/config/db.js"
import fs from "fs/promises"


await db.execute(
    `INSERT INTO entreprise (nom, ville, description)
     VALUES (?, ?, ?)`,
    [
        "Tech Solutions",
        "Casablanca",
        "Entreprise spécialisée dans le développement web."
    ]
)

await db.execute(
    `INSERT INTO entreprise (nom, ville, description)
     VALUES (?, ?, ?)`,
    [
        "Digital Factory",
        "Rabat",
        "Agence spécialisée dans les solutions digitales."
    ]
)

await db.execute(
    `INSERT INTO entreprise (nom, ville, description)
     VALUES (?, ?, ?)`,
    [
        "Web Innov",
        "Marrakech",
        "Entreprise spécialisée dans les applications web."
    ]
)

await db.execute(
    `INSERT INTO entreprise (nom, ville, description)
     VALUES (?, ?, ?)`,
    [
        "CodeLab",
        "Tanger",
        "Startup spécialisée dans les technologies modernes."
    ]
)

await db.execute(
    `INSERT INTO entreprise (nom, ville, description)
     VALUES (?, ?, ?)`,
    [
        "Morocco Tech",
        "Agadir",
        "Entreprise spécialisée dans les services informatiques."
    ]
)


const technologies = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
    "MySQL",
    "HTML/CSS"
]

for (const technologie of technologies) {
    await db.execute(
        `INSERT INTO technologie (nom)
         VALUES (?)`,
        [technologie]
    )
}


const offres = [
    [
        "Développeur Front-End React",
        "Développement et maintenance d'interfaces web modernes avec React.",
        "Casablanca",
        "Stage",
        "2026-09-01",
        1
    ],
    [
        "Développeur Back-End Node.js",
        "Développement d'API et de services backend avec Node.js.",
        "Casablanca",
        "CDI",
        "2026-09-02",
        1
    ],
    [
        "Développeur Full Stack",
        "Participation au développement d'applications web full stack.",
        "Rabat",
        "Stage",
        "2026-09-03",
        2
    ],
    [
        "Développeur JavaScript",
        "Développement de fonctionnalités web en JavaScript.",
        "Rabat",
        "CDD",
        "2026-09-04",
        2
    ],
    [
        "Développeur Front-End",
        "Création d'interfaces web responsives et accessibles.",
        "Marrakech",
        "Stage",
        "2026-09-05",
        3
    ],
    [
        "Développeur Laravel",
        "Développement d'applications web avec Laravel.",
        "Marrakech",
        "CDI",
        "2026-09-06",
        3
    ],
    [
        "Développeur Node.js",
        "Création et maintenance d'API REST avec Node.js et Express.",
        "Tanger",
        "Stage",
        "2026-09-07",
        4
    ],
    [
        "Développeur PHP",
        "Développement de solutions web avec PHP.",
        "Tanger",
        "CDI",
        "2026-09-08",
        4
    ],
    [
        "Développeur MySQL",
        "Conception et gestion de bases de données relationnelles.",
        "Agadir",
        "CDD",
        "2026-09-09",
        5
    ],
    [
        "Développeur Full Stack JavaScript",
        "Développement d'applications web avec JavaScript côté client et serveur.",
        "Agadir",
        "CDI",
        "2026-09-10",
        5
    ],
    [
        "Développeur React Junior",
        "Développement d'interfaces dynamiques avec React.",
        "Casablanca",
        "Stage",
        "2026-09-11",
        1
    ],
    [
        "Développeur Web",
        "Participation au développement et à la maintenance de sites web.",
        "Rabat",
        "Stage",
        "2026-09-12",
        2
    ]
]

for (const offre of offres) {
    await db.execute(
        `INSERT INTO offre
        (titre, description, ville, type_contrat, date_publication, entreprise_id)
        VALUES (?, ?, ?, ?, ?, ?)`,
        offre
    )
}


const associations = [
    [1, 2],
    [1, 1],
    [2, 3],
    [2, 4],
    [2, 7],
    [3, 1],
    [3, 2],
    [3, 3],
    [4, 1],
    [4, 7],
    [5, 1],
    [5, 8],
    [6, 5],
    [6, 6],
    [6, 7],
    [7, 3],
    [7, 4],
    [7, 1],
    [8, 5],
    [8, 7],
    [9, 7],
    [10, 1],
    [10, 3],
    [10, 4],
    [11, 1],
    [11, 2],
    [12, 1],
    [12, 8]
]

for (const [offreId, technologieId] of associations) {
    await db.execute(
        `INSERT INTO offre_technologie (offre_id, technologie_id)
         VALUES (?, ?)`,
        [offreId, technologieId]
    )
}


await db.end()

console.log("termine avec succes")