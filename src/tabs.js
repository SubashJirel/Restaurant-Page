import createRestaurantPage from './restaurant';
import loadMenu from './menu';
import loadContact from './contact';

const createTabs = () => {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
};
function createHeader() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = `Jirel's Diner`;

  header.appendChild(h1);
  header.appendChild(createNav());
  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('button-nav');
  homeButton.setAttribute('id', 'home-button');
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('button');
  menuButton.classList.add('button-nav');
  menuButton.setAttribute('id', 'menu-button');

  menuButton.textContent = 'Menu';

  const contactButton = document.createElement('button');
  contactButton.classList.add('button-nav');
  contactButton.setAttribute('id', 'contact-button');

  contactButton.textContent = 'Contact';

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  homeButton.addEventListener('click', () => {
    console.log('Home button clicked');

    createRestaurantPage();
  });
  menuButton.addEventListener('click', () => {
    console.log('menu button clicked');
    loadMenu();
  });
  contactButton.addEventListener('click', () => {
    console.log('contact button clicked');

    loadContact();
  });

  return nav;
}
export default createTabs;
