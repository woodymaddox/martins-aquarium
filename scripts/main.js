
import { renderFishToDom, makeFishHtml } from './fishList.js'
import { renderTipsToDom, makeTipHTML } from './tipList.js'

//import { tipList } from './tipList.js'
//import { locationList } from './locationList.js'





// Generate the fish list
const fishHTML = makeFishHtml();
renderFishToDom(fishHTML)

// Generate the care tips
const tipHTML = makeTipHTML();
renderTipsToDom(tipHTML)

// Generate the location list
//const locationHTML = locationList()

// Render each HTML string to the correct DOM element