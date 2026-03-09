
import { database } from './aquariumData.js'


  // Generate an HTML representation of each fish

export const makeFishHtml = () => {
        let fishHTML = '';

        for (const fish of database.fish) {
            fishHTML += 
        `
        
    <div class="card-container">
  
           
    <div class="card"> 
    
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
