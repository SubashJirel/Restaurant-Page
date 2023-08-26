function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const mainImage = document.createElement('img');
  mainImage.src = '../assets/pizzas.jpg';
  mainImage.alt = 'Pizzas';
  mainImage.height = '500';

  home.appendChild(createParagraph('Best pizzas and Burgers'));
  home.appendChild(createParagraph('Best taste and quality'));
  home.appendChild(mainImage);
  home.appendChild(createParagraph('Order online or visit us!'));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;
