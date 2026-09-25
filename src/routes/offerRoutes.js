import express, { request, response } from "express"
import { getOffers } from "../repositories/offerRepository.js"

const router = express.Router()

router.get("/offers" , async (request , response) => {
    try{
        const offers = await getOffers()
        
        response.render("pages/offers", {offers})
    }
    catch (error) {
        console.error(error)
    }
})

export default router