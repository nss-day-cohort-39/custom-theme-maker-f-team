import { Dashboard } from "./Dashboard.js"
import { BorderButtons } from "./theme/BorderButtons.js"

BorderButtons()
/*
    1. Sort scores by date
    2. Display scores in YY/MM/DD format
*/

document.querySelector("#container").innerHTML = Dashboard()

