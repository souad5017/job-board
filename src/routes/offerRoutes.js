import express from "express"
import { getOffers, getOfferById } from "../repositories/offerRepository.js"
import { getTechnologies } from "../repositories/technologyRepository.js"

const router = express.Router()

router.get("/offers", async (request, response) => {
    try {
        const { search, type, city,  tech } = request.query
        const offers = await getOffers({ search, type, city , tech})
         const technologies = await getTechnologies()

        response.render("pages/offers", { offers , search, type, city ,  tech , technologies })
    }
    catch (error) {
        console.error(error)
    }
})
router.get("/offers/:id", async (request, response) => {
    try {
        const offer = await getOfferById(request.params.id);

        if (!offer) {
            return response.status(404).send("not found")
        }
        response.render("pages/offer-detail", { offer })
    } catch (error) {
        console.error(error)
    }

})
router.get("/offres-suivies", async (request, response) => {

    try {

        const offers = await getOffers()

        response.render("pages/followed-offers", {
            offers
        })

    } catch (error) {

        console.error(error)
    }
})

export default router