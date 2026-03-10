import { database } from "./aquariumData.js";

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

export const renderFishToDom = (fishHTML) => {
  const listOfFish = document.getElementById("fish-list");
  if (listOfFish) {
    listOfFish.innerHTML = fishHTML;
  } else {
    console.error('Could not find element with id "fish-list"');
  }
};
