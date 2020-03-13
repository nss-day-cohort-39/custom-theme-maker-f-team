import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

const eventHub = document.querySelector("#container")

export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = newsCollection => {
    return `
        <article class="container__panel news">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}

eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    const contentTarget = document.querySelector(".news")

    contentTarget.classList = "container__panel news"
    contentTarget.classList.add(color)
})

eventHub.addEventListener("sizeSelected", event => {
    const size = event.detail.size

    const contentTarget = document.querySelector(".news")

    contentTarget.classList = "container__panel news"
    contentTarget.classList.add(size)
})