import '../component/sport-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const sportListElement = document.querySelector("sport-list");
 
   const onButtonSearchClicked = async () => {
       try {
           const result = await DataSource.searchClub(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       sportListElement.sports = results;
   };
 
   const fallbackResult = message => {
       sportListElement.renderError(message);
   };
 
   searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;