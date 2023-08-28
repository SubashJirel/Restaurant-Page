import createRestaurantPage from './restaurant';
import createTabs from './tabs';
import insertFooter from './footer';
function initialLoad() {
  createTabs();
  createRestaurantPage();
  insertFooter();
}

export default initialLoad;
