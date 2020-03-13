const eventHub = document.querySelector("#container")


export const FontButtons = () => {
    return `
        <article class="fonts">
            <fieldset>
                <legend>Font Sizes</legend>

                <button id="btnFont--xsmall">Extra Small</button>
                <button id="btnFont--small">Small</button>
                <button id="btnFont--large">Large</button>
                <button id="btnFont--xlarge">Extra Large</button>
            </fieldset>
        </article>
    `
}

eventHub.addEventListener("click", clickEvent => {
    const idOfClickedElement = clickEvent.target.id

    if(clickEvent.target.id.startsWith('btnFont--')) {
        const [prefix, sizeChosen] = idOfClickedElement.split("--")

        const message = new CustomEvent("sizeSelected", {
            detail: {
                size: sizeChosen
            }
        })

        eventHub.dispatchEvent(message)
    }
})