export function renderOffers(offers) {

    const listings = document.getElementById('listings');
    listings.innerHTML = ''
    // console.log(offers)

    if (offers.lenght === 0) {
        listings.innerHTML = `
         <p class="empty-message">Aucune offre disponible.</p>
        `
    }


    offers.forEach(offer => {
        const date = new Date(offer.datePublication);
        const dateForm = date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: 'numeric'
        })

        listings.innerHTML += `
      <article class="job-card">
            <div class="card-top">
                <span class="tag stage">${offer.typeContrat}</span>
                <button class="star-btn">☆</button>
            </div>
            <h3 class="job-title">${offer.titre}</h3>
            <p class="job-company">${offer.ville}</p>
            <p class="job-desc">${offer.description}</p>
            <div class="skill-tags">
                ${offer.technologies.map(tech =>
            ` 
                   <span class="skill-tag"> ${tech} </span>
                   `
        ).join("")}
            </div>
            <div class="card-bottom">
                <span class="job-date">${dateForm}</span>
                <a href="../offre-detail.html?id=${offer.id}" class="job-link">Voir l'offre →</a>
            </div>
        </article>
    `
    });


}
export function renderOfferDetail(offer) {
    const offerDetail = document.getElementById('offer-detail');

    const date = new Date(offer.datePublication);
    const dateForm = date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
        year: 'numeric'
    })


    console.log(offer)
    offerDetail.innerHTML = `
      <section class="offer-hero">
      <div>
        <div class="offer-hero-meta">
          <span class="tag stage">${offer.typeContrat ?? ""}</span>
          <span>${dateForm}</span>
        </div>
        <h1>${offer.titre}</h1>
        <p class="company">${offer.entreprise} • ${offer.ville}</p>
      </div>
      <button class="follow-btn">☆ Suivre</button>
    </section>

    <div class="content-grid">
      <div class="stack">
        <div class="panel">
          <h2>Mission</h2>
          <p>${offer.description}</p>
        </div>
        <div class="panel">
          <h2>Profil recherché</h2>
          <p>${offer.profil}</p>
        </div>
      </div>

      <div class="stack">
        <div class="panel">
          <h2>Technologies</h2>
          <div class="skill-tags">
        ${offer.technologies.map(element => {
        return `<span class="skill-tag">${element}</span>`;
    }).join(" ")}
        </div>

        <div class="panel">
          <h2>Entreprise</h2>
          <p class="company-name">${offer.entreprise ?? ""}</p>
          <p class="company-tagline">${offer.sloganEntreprise ?? ""}</p>
          <a href="${offer.lienEntreprise ?? '#'}" class="company-link">${offer.lienEntreprise ? offer.lienEntreprise + ' ↗' : ''}</a>
        </div>

        <div class="panel candidature-panel">
          <h2>Candidature</h2>
          <a href="${offer.contact ?? "#"}">${offer.contact ?? ""}</a>
        </div>
      </div>
    </div>
    `
}

export function renderFilter(offres) {
    const typeFilter = document.getElementById('type-filter')
    const cityFilter = document.getElementById('city-filter')
    const techFilter = document.getElementById('tech-filter')


    const typeFilterArr = [...new Set(offres.map(offre => offre.typeContrat))]
    const cityFilterArr = [...new Set(offres.map(offer => offer.ville))]
    const techFilterArr = []

    offres.forEach(offer => {
        offer.technologies.forEach(tech => {
            if (!techFilterArr.includes(tech)) {
                techFilterArr.push(tech)
            }
        })
    })
    // console.log(techFilterArr)

    typeFilter.innerHTML = `
    <option value="">Tout type</option>
    ${typeFilterArr.map(tech => `
        <option value="${tech}">${tech}</option>
        `)}

    `
    cityFilter.innerHTML = `
    <option value="">Toutes villes</option>
    ${cityFilterArr.map(city =>`
        <option value="${city}">${city}</option>
        `)}
    `
    techFilter.innerHTML = `
    <option value="">Toutes techs</option>
    ${techFilterArr.map(tech => `
        <option value="${tech}">${tech}</option>
        `)}
    `
}
