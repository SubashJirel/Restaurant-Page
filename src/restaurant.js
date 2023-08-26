const createRestaurantPage = () => {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
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
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('button');
  menuButton.classList.add('button-nav');
  menuButton.textContent = 'Menu';

  const contactButton = document.createElement('button');
  contactButton.classList.add('button-nav');
  contactButton.textContent = 'Contact';

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const p = document.createElement('p');
  p.textContent = `Copyright © 2023 Subash Jirel`;

  footer.appendChild(p);

  return footer;
}
export default createRestaurantPage;
