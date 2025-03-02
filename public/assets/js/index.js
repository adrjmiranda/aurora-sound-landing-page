/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("/**\n * Toogle Menu\n */\nvar navbar = document.getElementById('navbar');\nvar toggleMenu = document.getElementById('toggle-menu');\nvar navbarMenu = document.querySelector('.navbar-menu');\ntoggleMenu === null || toggleMenu === void 0 ? void 0 : toggleMenu.addEventListener('click', function () {\n    navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.toggle('show');\n    var isAlreadyActive = navbar === null || navbar === void 0 ? void 0 : navbar.classList.contains('active');\n    if (isAlreadyActive && window.scrollY === 0) {\n        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('active');\n    }\n    else if (window.scrollY === 0) {\n        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('active');\n    }\n    toggleMenu === null || toggleMenu === void 0 ? void 0 : toggleMenu.querySelectorAll('i').forEach(function (icon) {\n        icon === null || icon === void 0 ? void 0 : icon.classList.toggle('hidden');\n    });\n});\nwindow.onscroll = function () {\n    if (window.scrollY > 98) {\n        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('active');\n    }\n    else {\n        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('active');\n    }\n};\n\n\n//# sourceURL=webpack://aurora-sound-landing-page/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;