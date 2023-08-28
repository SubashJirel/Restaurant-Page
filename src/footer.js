function insertFooter() {
  const content = document.querySelector('#content');
  return content.appendChild(createFooter9);
}
function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const p = document.createElement('p');
  p.textContent = `Copyright © 2023 Subash Jirel`;

  footer.appendChild(p);

  return footer;
}

export default insertFooter;
