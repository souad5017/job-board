export async function getData() {
    try{
    const response = await fetch('./data/offres.json');

    const offers = await response.json();

    return offers;
    }
    catch(error){
        console.error(error)
    }
}