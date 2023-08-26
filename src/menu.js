function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuItem('Cheese Pizza', ' simple, unadorned masterpiece on its own.')
  );
  menu.appendChild(
    createMenuItem(
      'Veggie Pizza',
      'When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping.'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Pepperoni Pizza',
      'Who doesn’t love biting into a crispy, salty round of pepperoni?'
    )
  );
  menu.appendChild(
    createMenuItem(
      'BBQ Chicken Pizza',
      'The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Hawaiian Pizza',
      'add in some ham and it creates an unexpectedly solid sweet and salty combination for this type of pizza.'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Supreme Pizza',
      'When you can’t decide which toppings to get, it’s time for the supreme pizza. '
    )
  );
  menu.appendChild(
    createMenuItem(
      'Works Pizza',
      'The “works” usually involves a wide variety of veggie toppings including onions, olives, and mushrooms, plus bacon and pepperoni.'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Greek Pizza',
      'hick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom.'
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;

  const foodImage = document.createElement('img');
  const finalName = name.split(' ').join('').toLowerCase();
  console.log(finalName);
  const imageName = `../assets/pizzacollection/${finalName}.jpg`;
  foodImage.src = `../assets/pizzacollection/${finalName}.jpg`;
  console.log(imageName);

  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
