import db from "../config/db.js";


export async function getOffers() {
    const [offers] = await db.execute(`
 SELECT offre.* ,entreprise.id AS entreprise_id, entreprise.nom AS entreprise_nom, entreprise.ville AS entreprise_ville, entreprise.description AS entreprise_description
          FROM offre 
              JOIN entreprise ON 
entreprise.id = offre.entreprise_id
ORDER BY offre.date_publication desc

`)
    for (const offer of offers) {
        const [technologies] = await db.execute(`
            SELECT * FROM  technologie
inner JOIN offre_technologie 
ON technologie.id = offre_technologie.technologie_id
WHERE offre_technologie.offre_id = ?

            `, [offer.id])
        offer.technologies = technologies.map(technologie => technologie.nom)
    }


    //  console.log(offers[0].technologies)
    return offers
}


// getOffers();

export async function getOfferById(id) {
    const [offers] = await db.execute(`
        SELECT offre.* ,entreprise.nom AS entreprise_nom, entreprise.ville AS entreprise_ville, entreprise.description AS entreprise_description
          FROM offre 

        JOIN entreprise ON entreprise.id = offre.entreprise_id
        WHERE offre.id = ?
        `, [id])


    if (offers.length === 0) {
        return null
    }

    const offer = offers[0]


    const [technologies] = await db.execute(`
          SELECT * FROM technologie 

        JOIN offre_technologie ON 
        offre_technologie.technologie_id = technologie.id
      
        WHERE offre_technologie.offre_id = ?
        
        `, [id])

    offer.technologies = technologies.map(technologie => technologie.nom)


    // console.log(offer)
    return offer
}

// getOfferById(5)
