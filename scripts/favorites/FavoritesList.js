import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"

const eventHub = document.querySelector("#container")

export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}

const render = favoriteCollection => {
    return `
        <article class="container__panel favorites">
            ${favoriteCollection.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}


eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    const contentTarget = document.querySelector(".favorites")

    contentTarget.classList = "container__panel favorites"
    contentTarget.classList.add(color)
})

eventHub.addEventListener("sizeSelected", event => {
    const size = event.detail.size

    const contentTarget = document.querySelector(".favorites")

    contentTarget.classList = "container__panel favorites"
    contentTarget.classList.add(size)
})