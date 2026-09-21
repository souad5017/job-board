import { getFollowedIds, toggleFollowedId } from './storage.js';

export function renderOffers(offers, onToggleCallback = null) {
    const listings = document.getElementById('listings');
    if (!listings) return;

    listings.innerHTML = '';
    
    if (!offers || offers.length === 0) {
        listings.innerHTML = `
            <p class="empty-message">Aucune offre disponible.</p>
        `;
        return;
    }
    const followedIds = getFollowedIds().map(id => Number(id));

    offers.forEach(offer => {
        const isSuivie = followedIds.includes(Number(offer.id));
        const date = new Date(offer.datePublication);
        const dateForm = date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: 'numeric'
        });

        listings.innerHTML += `
            <article class="job-card">
                <div class="card-top">
                    <span class="tag stage">${offer.typeContrat ?? ''}</span>
                    <button class="star-btn ${isSuivie ? 'active' : ''}" data-id="${offer.id}">
                        ${isSuivie ? '★' : '☆'}
                    </button>
                </div>
                <h3 class="job-title">${offer.titre}</h3>
                <p class="job-company">${offer.ville}</p>
                <p class="job-desc">${offer.description}</p>
                <div class="skill-tags">
                    ${offer.technologies ? offer.technologies.map(tech => `
                        <span class="skill-tag">${tech}</span>
                    `).join("") : ''}
                </div>
                <div class="card-bottom">
                    <span class="job-date">${dateForm}</span>
                    <a href="./offre-detail.html?id=${offer.id}" class="job-link">Voir l'offre →</a>
                </div>
            </article>
        `;
    });

    const starButtons = listings.querySelectorAll('.star-btn');
    starButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = Number(e.currentTarget.getAttribute('data-id'));
            const isNowSuivie = toggleFollowedId(id);
            
            e.currentTarget.textContent = isNowSuivie ? '★' : '☆';
            e.currentTarget.classList.toggle('active', isNowSuivie);

            if (typeof onToggleCallback === 'function') {
                onToggleCallback();
            }
        });
    });
}

export function renderOfferDetail(offer) {
    const offerDetail = document.getElementById('offer-detail');
    if (!offerDetail || !offer) return;

    const followedIds = getFollowedIds().map(id => Number(id));
    const isSuivie = followedIds.includes(Number(offer.id));

    const date = new Date(offer.datePublication);
    const dateForm = date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
        year: 'numeric'
    });

    offerDetail.innerHTML = `
      <section class="offer-hero">
        <div>
          <div class="offer-hero-meta">
            <span class="tag stage">${offer.typeContrat ?? ""}</span>
            <span>${dateForm}</span>
          </div>
          <h1>${offer.titre}</h1>
          <p class="company">${offer.entreprise ?? ""} • ${offer.ville ?? ""}</p>
        </div>
        <button class="follow-btn ${isSuivie ? 'active' : ''}" id="detail-follow-btn" data-id="${offer.id}">
          ${isSuivie ? '★ Suivi' : '☆ Suivre'}
        </button>
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
              ${offer.technologies ? offer.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join(" ") : ''}
            </div>
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
    `;

    const followBtn = document.getElementById('detail-follow-btn');
    if (followBtn) {
        followBtn.addEventListener('click', () => {
            const isNowSuivie = toggleFollowedId(Number(offer.id));
            followBtn.textContent = isNowSuivie ? '★ Suivi' : '☆ Suivre';
            followBtn.classList.toggle('active', isNowSuivie);
        });
    }
}

export function renderFilter(offres) {
    const typeFilter = document.getElementById('type-filter');
    const cityFilter = document.getElementById('city-filter');
    const techFilter = document.getElementById('tech-filter');

    if (!typeFilter || !cityFilter || !techFilter) return;

    const typeFilterArr = [...new Set(offres.map(offre => offre.typeContrat).filter(Boolean))];
    const cityFilterArr = [...new Set(offres.map(offer => offer.ville).filter(Boolean))];
    const techFilterArr = [];

    offres.forEach(offer => {
        if (offer.technologies) {
            offer.technologies.forEach(tech => {
                if (!techFilterArr.includes(tech)) {
                    techFilterArr.push(tech);
                }
            });
        }
    });

    typeFilter.innerHTML = `
        <option value="">Tout type</option>
        ${typeFilterArr.map(type => `<option value="${type}">${type}</option>`).join('')}
    `;
    cityFilter.innerHTML = `
        <option value="">Toutes villes</option>
        ${cityFilterArr.map(city => `<option value="${city}">${city}</option>`).join('')}
    `;
    techFilter.innerHTML = `
        <option value="">Toutes techs</option>
        ${techFilterArr.map(tech => `<option value="${tech}">${tech}</option>`).join('')}
    `;
}