import db from "../src/config/db.js"


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


console.log("Seed démarré !")