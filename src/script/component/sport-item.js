class SportItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set sport(sport) {
        this._sport = sport;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
               
                .fan-art-sport {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
               
                .sport-info {
                    padding: 24px;
                }
               
                .sport-info > h2 {
                    font-weight: lighter;
                }
               
                .sport-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>
            <img class="fan-art-sport" src="${this._sport.strSportThumb}" alt="Fan Art">
            <div class="sport-info">
                <h2>${this._sport.strSport}</h2>
                <p>${this._sport.strFormat}</p>
                <img class="fan-art-sport" src="${this._sport.strSportIconGreen}" alt="Fan Art">
                <p>${this._sport.strSportDescription}</p>
            </div>`;
    }
 }
  
 customElements.define("sport-item", SportItem);