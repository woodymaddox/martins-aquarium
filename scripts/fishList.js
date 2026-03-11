import { database } from "./aquariumData.js";

//makeFishHtml is a function to loop through the aquariumData and output it as a string.
//The first loop checks to see if the .length property of each object is a multiple of 3 but not 5 if so it adds it to the createFishCard function (below) that creates the html for the holy fish.
//
//The second loop checks to see if the object is a multiple of 5 & not a multiple of 3.
// if it is it adds it to the createFishCardSoldier function (below) that creates the html for the soldier fish.
// The third loop goes through and locates the remaining fish that are not multiples of 3 and 5.

export const makeFishHtml = () => {
  let fishHTML = "";
  for (const fish of database.fish) {
    if (fish.length % 3 === 0) {
      fishHTML += createFishCardHoly(fish);
    }
  }
  for (const fish of database.fish) {
    if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
      fishHTML += createFishCardSoldier(fish);
    }
  }
  for (const fish of database.fish) {
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
      fishHTML += createFishCardRegular(fish);
    }
  }
  return fishHTML;
};

// These three functions take the fish object made above convert it to a html "card" string

const createFishCardHoly = (fish) => {
  return `
    <div class="card-container">
        <div class="card">
          <h4 class="fish_holy">Holy Fish</h4>
            <img src="${fish.image}" class="fish-image">
            <div class="card-content">
                <h4 class="fish_title">${fish.name}</h4>
                <ul>
                    <li>${fish.species}</li> 
                    <li>${fish.length} inches</li> 
                    <li>${fish.location}</li> 
                    <li>${fish.diet}</li> 
                </ul>
            </div>
        </div>
    </div>`;
};
const createFishCardSoldier = (fish) => {
  return `
    <div class="card-container">
        <div class="card">
          <h4 class="fish_sol">Soldier Fish</h4>
            <img src="${fish.image}" class="fish-image">
            <div class="card-content">
                <h4 class="fish_title">${fish.name}</h4>
                <ul>
                    <li>${fish.species}</li> 
                    <li>${fish.length} inches</li> 
                    <li>${fish.location}</li> 
                    <li>${fish.diet}</li> 
                </ul>
            </div>
        </div>
    </div>`;
};

const createFishCardRegular = (fish) => {
  return `
    <div class="card-container">
        <div class="card">
          <h4 class="fish_reg">Regular Fish</h4>
            <img src="${fish.image}" class="fish-image">
            <div class="card-content">
                <h4 class="fish_title">${fish.name}</h4>
                <ul>
                    <li>${fish.species}</li> 
                    <li>${fish.length} inches</li> 
                    <li>${fish.location}</li> 
                    <li>${fish.diet}</li> 
                </ul>
            </div>
        </div>
    </div>`;
};

//renderFishToDom function //(fishHTML) string is passed in //  document.getElementById searches index.html for id="fish-list" and stores it in the listOfFish variable
// if (listOfFish) checks to see if the element id="fish-list" exists if so it takes (fishHTML) string and places it inside the listOfFish element. *** This is what makes the fish cards appear on the screen.
// else if document.getElementById failed to find the element it console logs the error message.

export const renderFishToDom = (fishHTML) => {
  const listOfFish = document.getElementById("fish-list");
  if (listOfFish) {
    listOfFish.innerHTML = fishHTML; //.innerHTML Takes the HTML container named listOfFish and replace everything inside it with the HTML code stored in fishHTML."
  } else {
    console.error('Could not find element with id "fish-list"');
  }
};
