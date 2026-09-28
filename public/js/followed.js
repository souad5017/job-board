const STORAGE_KEY = "followed_offers_ids"


function getFollowedIds() {

    const data = localStorage.getItem(STORAGE_KEY)

    return data
        ? JSON.parse(data).map(id => Number(id))
        : []
}


function toggleFollowed(id) {

    const followedIds = getFollowedIds()

    const index = followedIds.indexOf(id)

    if (index === -1) {
        followedIds.push(id)
    } else {
        followedIds.splice(index, 1)
    }

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(followedIds)
    )
}


function updateStars() {

    const followedIds = getFollowedIds()

    document.querySelectorAll(".star-btn").forEach(button => {

        const id = Number(button.dataset.id)

        if (followedIds.includes(id)) {

            button.textContent = "★"
            button.classList.add("active")

        } else {

            button.textContent = "☆"
            button.classList.remove("active")

        }

    })
}


function updateFollowedPage() {

    const followedIds = getFollowedIds()

    const offers = document.querySelectorAll(".followed-offer")

    let count = 0

    offers.forEach(offer => {

        const id = Number(offer.dataset.id)

        if (followedIds.includes(id)) {

            offer.style.display = "block"
            count++

        } else {

            offer.style.display = "none"

        }

    })

    const countText = document.querySelector("#suivies-count")

    if (countText) {

        countText.textContent =
            `${count} offre${count > 1 ? "s" : ""} enregistrée${count > 1 ? "s" : ""} dans ce navigateur`
    }

    const emptyMessage =
        document.querySelector("#empty-followed")

    if (emptyMessage) {

        emptyMessage.style.display =
            count === 0 ? "block" : "none"
    }
}


document.addEventListener("DOMContentLoaded", () => {

    updateStars()
    updateFollowedPage()

    document.querySelectorAll(".star-btn").forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id)

            toggleFollowed(id)

            updateStars()
            updateFollowedPage()

        })

    })

})