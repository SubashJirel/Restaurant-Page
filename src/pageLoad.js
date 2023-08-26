import createRestaurantPage from './restaurant';
import createTabs from './tabs';
function initialLoad() {
  createTabs();
  createRestaurantPage();
}

export default initialLoad;
