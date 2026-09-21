export function searchOffers(offers, search) {
  if(search.trim() === ""){
    return offers
  }
  return offers.filter(offer => {
   const result = offer.titre.toLowerCase().includes(search.trim().toLowerCase()) 
   || offer.entreprise.toLowerCase().includes(search.trim().toLowerCase()) 
   || offer.description.toLowerCase().includes(search.trim().toLowerCase()) 

   return result

  })
}

export function typeFilterOffers(offers , type){
  if(type.trim() ===  ''){
    return offers
  }

  return offers.filter(offer => offer.typeContrat.includes(type))
}



export function cityFilterOffers(offers, city) {
    if (city === "") {
        return offers;
    }

    return offers.filter(offer => offer.ville === city);
}


export function techFilterOffers(offers, tech) {
    if (tech === "") {
        return offers;
    }

    return offers.filter(offer =>
        offer.technologies.includes(tech)
    );
}