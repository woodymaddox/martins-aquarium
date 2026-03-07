import { tipBase } from './tipData.js'

export const makeTipHTML = () => {
      let tipHTML = '';

      for (const tip of tipBase.tips) {
            tipHTML += 
            ` <div class="card-container">
                 <div class="card">   
            
                <img src=${tip.image} class="tip-image">
              
               
                <div class="card-content">
                        <ul>
                        <li class="topic">${tip.topic} </li>
                        <li class="text">${tip.text}</li>
                         </ul>
                 </div>
                </div>
             </div>
    `;

      }

 return tipHTML
}

export const renderTipsToDom = (tipHTML) => {
    const listOfTips = document.getElementById
    ('tip-List');
    if (listOfTips) {
        listOfTips.innerHTML = tipHTML; }     
    else {
        console.error ('Could not find element with id "tip-List"')
    }

};