const eventHub = document.querySelector("#container")


// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

  
    if (clickEvent.target.value.includes("pixel")) {


        const chosenSize = clickEvent.target.value

        
        const sizeChosenEvent = new CustomEvent("sizeChosen", {
            detail: {
                size: chosenSize
            }
        })

        eventHub.dispatchEvent(sizeChosenEvent)
    }
})





export const BorderButtons = () => {
    return `
        <article class="borderSizes">
            <fieldset>
                <legend>Border Sizes</legend>

                <label for="onepixel">1px</label>
                <input class="classList" type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input class="classList" type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input class="classList" type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}
