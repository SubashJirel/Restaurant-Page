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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createTabs = () => {\r\n  const content = document.querySelector('#content');\r\n\r\n  content.appendChild(createHeader());\r\n};\r\nfunction createHeader() {\r\n  const header = document.createElement('header');\r\n  const h1 = document.createElement('h1');\r\n  h1.textContent = `Jirel's Diner`;\r\n\r\n  header.appendChild(h1);\r\n  header.appendChild(createNav());\r\n  return header;\r\n}\r\n\r\nfunction createNav() {\r\n  const nav = document.createElement('nav');\r\n\r\n  const homeButton = document.createElement('button');\r\n  homeButton.classList.add('button-nav');\r\n  homeButton.setAttribute('id', 'home-button');\r\n  homeButton.textContent = 'Home';\r\n\r\n  const menuButton = document.createElement('button');\r\n  menuButton.classList.add('button-nav');\r\n  menuButton.setAttribute('id', 'menu-button');\r\n\r\n  menuButton.textContent = 'Menu';\r\n\r\n  const contactButton = document.createElement('button');\r\n  contactButton.classList.add('button-nav');\r\n  contactButton.setAttribute('id', 'contact-button');\r\n\r\n  contactButton.textContent = 'Contact';\r\n\r\n  nav.appendChild(homeButton);\r\n  nav.appendChild(menuButton);\r\n  nav.appendChild(contactButton);\r\n\r\n  return nav;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/tabs.js?");

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