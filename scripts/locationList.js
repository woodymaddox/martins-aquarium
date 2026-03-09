import { locationBase } from './locationData.js'

export const makeLocationHtml = () => {
        let locationHTML = '';

        for (const location of locationBase.locations) {
            locationHTML += 
           
        `
         
<div class="card-container">
       
    <div class="card"> 

        <img src="${location.image}" class="location-image"> 

        <div class="card-content">

            <h4 class="location_title">${location.name}</h4>
             <ul>
                
                <li >${location.country} </li> 
                <li >${location.description}</li> 
            
            </ul>

            </div>
       </div>
 </div>`;
        }
    
        return locationHTML
}

export const renderLocationToDom = (locationHTML) => {
    const listOfLocations = document.getElementById
    ('location-list');
    if (listOfLocations) {
        listOfLocations.innerHTML = locationHTML; }     
    else {
        console.error ('Could not find element with id "location-list"')
    }

};
