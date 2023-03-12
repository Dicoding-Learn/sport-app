import './sport-item.js';
 
class SportList extends HTMLElement {
 
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
   set sports(sports) {
       this._sports = sports;
       this.render();
   }
 
   renderError(message) {
       this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
   render() {
       this.shadowDOM.innerHTML = "" ;
       this._sports.forEach(sport => {
           const sportItemElement = document.createElement("sport-item");
           sportItemElement.sport = sport;
           this.shadowDOM.appendChild(sportItemElement);
       })
   }
}
 
customElements.define("sport-list", SportList);