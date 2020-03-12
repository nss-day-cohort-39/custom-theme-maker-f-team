import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

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

const eventHub = document.querySelector("#container")

eventHub.addEventListener("sizeChosen", event => {
    const size = event.detail.size

    const contentTarget = document.querySelectorAll(".new")

    contentTarget.classList = "new"
    contentTarget.classList.add(size)
})