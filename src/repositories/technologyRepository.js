import db from "../config/db.js"

export async function getTechnologies() {

    const [technologies] = await db.execute(`
        SELECT *
        FROM technologie
        ORDER BY nom
    `)

    return technologies
}

export async function getTechnologiesByOfferId(offerId) {

    const [technologies] = await db.execute(`
        SELECT technologie.id
        FROM technologie
        INNER JOIN offre_technologie
            ON technologie.id = offre_technologie.technologie_id
        WHERE offre_technologie.offre_id = ?
    `, [offerId])

    return technologies
}