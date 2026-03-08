import { locationBase } from './locationData.js'

export const makeLocationHtml = () => {
        let locationHTML = '';

        for (const location of locationBase.locations) {
            locationHTML += 
        `
        <div class="card-container">
        <div class="locationContainer">
            <img src="${location.image}" class="location-image">
        </div>
    <div class="card">
        
        <div class="card-content"> 
            <div class="location_title">${location.name}</div>
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
