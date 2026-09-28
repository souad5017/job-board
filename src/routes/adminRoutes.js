import express, { request, response } from "express"
import { getOffers, createOffer, updateOffer, getOfferById, deleteOffer } from "../repositories/offerRepository.js"
import { getCompanies } from "../repositories/companyRepository.js"
import { getTechnologies, getTechnologiesByOfferId } from "../repositories/technologyRepository.js"

const router = express.Router()

router.get("/admin", async (request, response) => {
    try {
        const offers = await getOffers()

        response.render("pages/admin/dashboard", { offers })
    } catch (error) {
        console.error(error)
    }
})

router.get("/admin/offers/new", async (request, response) => {

    try {

        const companies = await getCompanies();
        const technologies = await getTechnologies();

        response.render("pages/admin/add-offer", { companies, technologies })

    } catch (error) {
        console.error(error)

    }
})

router.post("/admin/offers", async (request, response) => {
    try {
        const {
            titre, description, ville, type_contrat, entreprise_id
        } = request.body
        const technologies = request.body.technologies
            ? Array.isArray(request.body.technologies)
                ? request.body.technologies
                : [request.body.technologies]
            : []

        await createOffer({
            titre, description, ville, type_contrat, entreprise_id, technologies

        })
        response.redirect("/admin")
    }
    catch (error) {
        console.error(error)
    }
})

router.get("/admin/offers/:id/edit", async (request, response) => {

    try {

        const offer = await getOfferById(request.params.id)

        if (!offer) {
            return response.status(404).send("not found")
        }

        const companies = await getCompanies()
        const technologies = await getTechnologies()
        const selectedTechnologies = await getTechnologiesByOfferId(request.params.id)

        console.log(technologies)

        response.render("pages/admin/edit-offer", {
            offer, companies, technologies,selectedTechnologies
        })

    } catch (error) {

        console.error(error)
    }
})
router.post("/admin/offers/:id", async (request, response) => {
    try {
        const {
            titre, description, ville, type_contrat, entreprise_id
        } = request.body
        const technologies = request.body.technologies
            ? Array.isArray(request.body.technologies)
                ? request.body.technologies
                : [request.body.technologies]
            : []

        await updateOffer(request.params.id, {
            titre, description, ville, type_contrat, entreprise_id, technologies
        })
        response.redirect("/admin")
    }
    catch (error) {
        console.error(error)
    }


})

router.post("/admin/offers/:id/delete", async (request, response) => {

    try {
        await deleteOffer(request.params.id)

        response.redirect("/admin")

    } catch (error) {

        console.error(error)
    }
})

export default router