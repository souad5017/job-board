import db from "../config/db.js"

export async function getCompanies() {

    const [companies] = await db.execute(`
        SELECT * FROM entreprise
        ORDER BY nom
    `)

    return companies
}