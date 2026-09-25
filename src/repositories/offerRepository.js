import db from "../config/db.js";


export async function getOffers() {
    const [offers] = await db.execute(`
         SELECT * FROM offre 
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
