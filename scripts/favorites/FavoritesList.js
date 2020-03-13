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

eventHub.addEventListener("sizeChosen", event => {
    const size = event.detail.size

 
    const scoreNodeList = document.querySelectorAll(".favoriteItem")

    const scoreArray = Array.from(scoreNodeList)
    const sizeClasses = ["xsmall", "small", "large", "xlarge"]
    scoreArray.map(object => {
        sizeClasses.map(sizeClass => object.classList.remove(sizeClass))
        object.classList.add(size)
    })
})

eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color
    const contentTarget = document.querySelector(".favorites")
    const colorClassValueList = ["red", "purple", "blue", "green"]
    colorClassValueList.map(colorClass => contentTarget.classList.remove(colorClass))
    contentTarget.classList.add(color)
})



eventHub.addEventListener("sizeSelected", event => {
    const size = event.detail.size

    const contentTarget = document.querySelector(".favorites")
    const sizeClasses = ["onepixel", "threepixels", "fivepixels"]
    sizeClasses.map(sizeClass => contentTarget.classList.remove(sizeClass))
    contentTarget.classList.add(size)
})
