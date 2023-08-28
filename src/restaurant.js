import loadHome from './home';
const createRestaurantPage = () => {
  const content = document.querySelector('#content');

  content.appendChild(createMain());

  loadHome();
};

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

export default createRestaurantPage;
