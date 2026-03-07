
import { database } from './aquariumData.js'


  // Generate an HTML representation of each fish

export const makeFishHtml = () => {
        let fishHTML = '';

        for (const fish of database.fish) {
            fishHTML += 
        `<article class="fishOfTheSea">
            <img src="${fish.image}" alt="${fish.name} fishName" class="fish_card">
            
            <div class="fish_details">
            <p id="fish_title">${fish.name} </p> 
            <ul>
              <li class="fish_species">${fish.species}</li> 
              <li class="fish_length">${fish.length} inches</li> 
              <li class="fish_location">${fish.location}</li> 
              <li class="fish_diet">${fish.diet}</li> 
            </ul>
              </div>
        </article>`;
        }
    
        return fishHTML
}

export const renderFishToDom = (fishHTML) => {
    const listOfFish = document.getElementById
    ('fish-list');
    if (listOfFish) {
        listOfFish.innerHTML = fishHTML; }     
    else {
        console.error ('Could not find element with id "fish-list"')
    }

};
