import { getData } from "./data.js"
import { renderOffers, renderOfferDetail } from "./render.js"
import { searchOffers } from "./filters.js"


const offres = await getData()
async function init() {
    try {
        renderOffers(offres)
    }
    catch (error) {
        console.error(error)
    }
}

async function initDetail() {
    try {
        const url = new URLSearchParams(window.location.search)
        const id = url.get('id')
        // console.log(id)
        const offre = offres.find(offre => offre.id == id)


        renderOfferDetail(offre);
    }
    catch (error) {
        console.error(error)
    }
}

const searchInput = document.getElementById('searchInput');


searchInput.addEventListener('input', () => {
    const search = searchInput.value
    // console.log(search)
    const result = searchOffers(offres, search)
    renderOffers(result)

    console.log(result)
})

const detailContainer = document.getElementById('offer-detail');
if (detailContainer) {
    initDetail()
} else {
    init()
}
