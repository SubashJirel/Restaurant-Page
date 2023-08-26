/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n  const contact = document.createElement('div');\r\n  contact.classList.add('contact');\r\n\r\n  const phoneNumber = document.createElement('p');\r\n  phoneNumber.textContent = '📞 123 456 789';\r\n\r\n  const address = document.createElement('p');\r\n  address.textContent = '🏠 Basundhara, Kathmandu, Nepal';\r\n\r\n  const restaurantLocation = document.createElement('img');\r\n  restaurantLocation.src = '../assets/location.png';\r\n  restaurantLocation.alt = 'Mozzafiato restaurant location';\r\n\r\n  contact.appendChild(phoneNumber);\r\n  contact.appendChild(address);\r\n  contact.appendChild(restaurantLocation);\r\n\r\n  return contact;\r\n}\r\n\r\nfunction loadContact() {\r\n  const main = document.getElementById('main');\r\n  main.textContent = '';\r\n  main.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\r\n  const home = document.createElement('div');\r\n  home.classList.add('home');\r\n\r\n  const mainImage = document.createElement('img');\r\n  mainImage.src = '../assets/pizzas.jpg';\r\n  mainImage.alt = 'Pizzas';\r\n  mainImage.height = '500';\r\n\r\n  home.appendChild(createParagraph('Best pizzas and Burgers'));\r\n  home.appendChild(createParagraph('Best taste and quality'));\r\n  home.appendChild(mainImage);\r\n  home.appendChild(createParagraph('Order online or visit us!'));\r\n\r\n  return home;\r\n}\r\n\r\nfunction createParagraph(text) {\r\n  const paragraph = document.createElement('p');\r\n  paragraph.textContent = text;\r\n  return paragraph;\r\n}\r\n\r\nfunction loadHome() {\r\n  const main = document.getElementById('main');\r\n  main.textContent = '';\r\n  main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\r\n//page load\r\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n  const menu = document.createElement('div');\r\n  menu.classList.add('menu');\r\n\r\n  menu.appendChild(\r\n    createMenuItem('Cheese Pizza', ' simple, unadorned masterpiece on its own.')\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      'Veggie Pizza',\r\n      'When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping.'\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      'Pepperoni Pizza',\r\n      'Who doesn’t love biting into a crispy, salty round of pepperoni?'\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      'BBQ Chicken Pizza',\r\n      'The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.'\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      'Hawaiian Pizza',\r\n      'add in some ham and it creates an unexpectedly solid sweet and salty combination for this type of pizza.'\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      'Supreme Pizza',\r\n      'When you can’t decide which toppings to get, it’s time for the supreme pizza. '\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      'Works Pizza',\r\n      'The “works” usually involves a wide variety of veggie toppings including onions, olives, and mushrooms, plus bacon and pepperoni.'\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      'Greek Pizza',\r\n      'hick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom.'\r\n    )\r\n  );\r\n\r\n  return menu;\r\n}\r\n\r\nfunction createMenuItem(name, description) {\r\n  const menuItem = document.createElement('div');\r\n  menuItem.classList.add('menu-item');\r\n\r\n  const foodName = document.createElement('h2');\r\n  foodName.textContent = name;\r\n\r\n  const foodDescription = document.createElement('p');\r\n  foodDescription.textContent = description;\r\n\r\n  const foodImage = document.createElement('img');\r\n  const finalName = name.split(' ').join('').toLowerCase();\r\n  //   console.log(finalName);\r\n  //   const imageName = `../assets/pizzacollection/${finalName}.jpg`;\r\n  foodImage.src = `../assets/pizzacollection/${finalName}.png`;\r\n  //   console.log(imageName);\r\n\r\n  foodImage.alt = `${name}`;\r\n\r\n  menuItem.appendChild(foodImage);\r\n  menuItem.appendChild(foodName);\r\n  menuItem.appendChild(foodDescription);\r\n\r\n  return menuItem;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const main = document.getElementById('main');\r\n  main.textContent = '';\r\n  main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\r\n\r\nfunction initialLoad() {\r\n  (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\nconst createRestaurantPage = () => {\r\n  const content = document.querySelector('#content');\r\n\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\nfunction createMain() {\r\n  const main = document.createElement('main');\r\n  main.classList.add('main');\r\n  main.setAttribute('id', 'main');\r\n  return main;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement('footer');\r\n  footer.classList.add('footer');\r\n\r\n  const p = document.createElement('p');\r\n  p.textContent = `Copyright © 2023 Subash Jirel`;\r\n\r\n  footer.appendChild(p);\r\n\r\n  return footer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantPage);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst createTabs = () => {\r\n  const content = document.querySelector('#content');\r\n\r\n  content.appendChild(createHeader());\r\n};\r\nfunction createHeader() {\r\n  const header = document.createElement('header');\r\n  const h1 = document.createElement('h1');\r\n  h1.textContent = `Jirel's Diner`;\r\n\r\n  header.appendChild(h1);\r\n  header.appendChild(createNav());\r\n  return header;\r\n}\r\n\r\nfunction createNav() {\r\n  const nav = document.createElement('nav');\r\n\r\n  const homeButton = document.createElement('button');\r\n  homeButton.classList.add('button-nav');\r\n  homeButton.setAttribute('id', 'home-button');\r\n  homeButton.textContent = 'Home';\r\n\r\n  const menuButton = document.createElement('button');\r\n  menuButton.classList.add('button-nav');\r\n  menuButton.setAttribute('id', 'menu-button');\r\n\r\n  menuButton.textContent = 'Menu';\r\n\r\n  const contactButton = document.createElement('button');\r\n  contactButton.classList.add('button-nav');\r\n  contactButton.setAttribute('id', 'contact-button');\r\n\r\n  contactButton.textContent = 'Contact';\r\n\r\n  nav.appendChild(homeButton);\r\n  nav.appendChild(menuButton);\r\n  nav.appendChild(contactButton);\r\n\r\n  homeButton.addEventListener('click', () => {\r\n    console.log('Home button clicked');\r\n\r\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n  menuButton.addEventListener('click', () => {\r\n    console.log('menu button clicked');\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n  contactButton.addEventListener('click', () => {\r\n    console.log('contact button clicked');\r\n\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n\r\n  return nav;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;