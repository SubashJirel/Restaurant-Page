const createRestaurantPage = () => {
  const content = document.querySelector('#content');

  content.appendChild(createMain());
  content.appendChild(createFooter());
};

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
