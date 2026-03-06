
import { fishList,renderFishToDom, makeFishHtml } from './fishList.js'

import { tipList } from './tipList.js'
import { locationList } from './locationList.js'





// Generate the fish list
const fishHTML = makeFishHtml();
renderFishToDom(fishHTML)

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element