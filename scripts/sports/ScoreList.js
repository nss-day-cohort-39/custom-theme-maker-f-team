import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"

const eventHub = document.querySelector("#container")

export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}

const render = scoreCollection => {
    return `
        <article class="container__panel scores">
            ${scoreCollection.map(score => Score(score)).join("")}
        </article>
    `
}

eventHub.addEventListener("sizeSelected", event => {
    const size = event.detail.size

    const contentTarget = document.querySelector(".scores")

    contentTarget.classList = "container__panel scores"
    contentTarget.classList.add(size)
})