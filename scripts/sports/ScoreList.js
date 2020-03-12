import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"

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

const eventHub = document.querySelector("#container")

eventHub.addEventListener("sizeChosen", event => {
    const size = event.detail.size

    const contentTarget = document.querySelectorAll(".score")

    contentTarget.classList = "score"
    contentTarget.classList.add(size)
})