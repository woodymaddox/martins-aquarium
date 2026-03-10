import { renderFishToDom, makeFishHtml } from "./fishList.js";
import { renderTipsToDom, makeTipHTML } from "./tipList.js";
import { makeLocationHtml, renderLocationToDom } from "./locationList.js";

const fishHTML = makeFishHtml();
renderFishToDom(fishHTML);

const tipHTML = makeTipHTML();
renderTipsToDom(tipHTML);

const locationHTML = makeLocationHtml();
renderLocationToDom(locationHTML);
