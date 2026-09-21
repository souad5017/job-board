import { getData } from "./data.js"
import { renderOffers, renderOfferDetail, renderFilter } from "./render.js"
import { searchOffers, typeFilterOffers, cityFilterOffers, techFilterOffers } from "./filters.js"


const offres = await getData()
async function init() {
    try {
        renderOffers(offres)
        renderFilter(offres)
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
const typeFilter = document.getElementById('type-filter')
const cityFilter = document.getElementById('city-filter')
const techFilter = document.getElementById('tech-filter')

function applyFilters() {

    let result = offres;

    const search = searchInput.value;
    const type = typeFilter.value;
    const city = cityFilter.value;
    const tech = techFilter.value;


    result = searchOffers(result, search);
    result = typeFilterOffers(result, type);
    result = cityFilterOffers(result, city);
    result = techFilterOffers(result, tech);


    renderOffers(result);

    console.log(result);
}
if (searchInput && typeFilter && cityFilter && techFilter) {
    searchInput.addEventListener("input", applyFilters);
    typeFilter.addEventListener("change", applyFilters);
    cityFilter.addEventListener("change", applyFilters);
    techFilter.addEventListener("change", applyFilters);
}


const detailContainer = document.getElementById('offer-detail');
if (detailContainer) {
    initDetail()
} else {
    init()
}
