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



eventHub.addEventListener("sizeChosen", event => {
    const size = event.detail.size

 
    const scoreNodeList = document.querySelectorAll(".newsItem")

    const scoreArray = Array.from(scoreNodeList)
    const sizeClasses = ["onepixel", "threepixels", "fivepixels"]
    scoreArray.map(object => {
        sizeClasses.map(sizeClass => object.classList.remove(sizeClass))
        object.classList.add(size)
    })
}
)


eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    const contentTarget = document.querySelector(".news")
    const colorClassValueList = ["red", "purple", "blue", "green"]
    colorClassValueList.map(colorClass => contentTarget.classList.remove(colorClass))
    contentTarget.classList.add(color)
})

eventHub.addEventListener("sizeSelected", event => {
    const size = event.detail.size

    const contentTarget = document.querySelector(".news")

    contentTarget.classList = "new"
    contentTarget.classList.add(size)
})