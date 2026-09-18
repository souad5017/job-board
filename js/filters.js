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
