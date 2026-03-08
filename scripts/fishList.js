
import { database } from './aquariumData.js'


  // Generate an HTML representation of each fish

export const makeFishHtml = () => {
        let fishHTML = '';

        for (const fish of database.fish) {
            fishHTML += 
        `
        <div class="container-one">
        <div class="card-container">
        <div class="fishContainer">
            <img src="${fish.image}" class="fish-image" alt="${fish.name}">
        </div>
    <div class="card">
        
        <div class="card-content"> 
            <div class="fish_title">${fish.name}</div>
            <ul>
                <li class="fish_species">${fish.species}</li> 
                <li class="fish_length">${fish.length} inches</li> 
                <li class="fish_location">${fish.location}</li> 
                <li class="fish_diet">${fish.diet}</li> 
            </ul>
        </div>
    </div>
</div>
</div>`;
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
