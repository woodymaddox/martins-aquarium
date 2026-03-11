import { renderFishToDom, makeFishHtml } from "./fishList.js";
import { renderTipsToDom, makeTipHTML } from "./tipList.js";
import { makeLocationHtml, renderLocationToDom } from "./locationList.js";

//**FUNCTION CALLS */

const fishHTML = makeFishHtml(); //Runs the makeFishHtml function and save the string it hands back into the fishHTML variable."

renderFishToDom(fishHTML); //Calls the renderFishToDom function which takes the string you just made and physically "push" it onto your webpage using document.getElementById

const tipHTML = makeTipHTML();
renderTipsToDom(tipHTML);

const locationHTML = makeLocationHtml();
renderLocationToDom(locationHTML);
