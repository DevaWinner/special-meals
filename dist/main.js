/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Belanosima&family=Lobster&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

.popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.popup-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: antiquewhite;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 5em;
}

.popup-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 40%;
}

.popup-heading img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 10px 10px;
}

.popup-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
}

.instruction-container {
  height: 130px;
  overflow: auto;
  border-radius: 0.5em;
}

.meal-instructions {
  font-size: 1.2em;
  line-height: 1.5em;
  text-align: justify;
  font-weight: 300;
  padding: 0.5em 1em;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 2em;
  height: 2em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
}

/* =========== Comment Styling =========== */

.comments-container {
  margin-top: 0.5em;
  align-self: start;
  display: flex;
  gap: 1em;
}

.comment-box {
  display: flex;
  flex-direction: column;
  width: 25em;
  margin-top: 0.5em;
  height: 21em;
  gap: 1em;
}

.comment-box h3 {
  font-size: 1.7em;
  font-weight: 400;
}

.comment-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  height: 260px;
  overflow: auto;
  overflow-x: hidden;
  padding: 0 0.5em;
}

.comment-list li {
  list-style: none;
  width: 360px;
  height: 100%;
  border-radius: 0.5em;
  background-color: #f5f5f5;
  padding: 0.8em 0.4em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 1rem;
}

.user-box {
  display: flex;
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/styles/popup.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,8BAA8B;EAC9B,kBAAkB;EAClB,wCAAwC;EACxC,UAAU;EACV,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,UAAU;EACV,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA,4CAA4C;;AAE5C;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,yBAAyB;EACzB,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Lobster&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.popup {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.popup-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: antiquewhite;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  width: 50%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 3em 5em;\n}\n\n.popup-heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40%;\n  height: 40%;\n}\n\n.popup-heading img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px 8px 10px 10px;\n}\n\n.popup-description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 1em;\n}\n\n.instruction-container {\n  height: 130px;\n  overflow: auto;\n  border-radius: 0.5em;\n}\n\n.meal-instructions {\n  font-size: 1.2em;\n  line-height: 1.5em;\n  text-align: justify;\n  font-weight: 300;\n  padding: 0.5em 1em;\n}\n\n.close-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 2em;\n  height: 2em;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 2rem;\n}\n\n/* =========== Comment Styling =========== */\n\n.comments-container {\n  margin-top: 0.5em;\n  align-self: start;\n  display: flex;\n  gap: 1em;\n}\n\n.comment-box {\n  display: flex;\n  flex-direction: column;\n  width: 25em;\n  margin-top: 0.5em;\n  height: 21em;\n  gap: 1em;\n}\n\n.comment-box h3 {\n  font-size: 1.7em;\n  font-weight: 400;\n}\n\n.comment-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5em;\n  height: 260px;\n  overflow: auto;\n  overflow-x: hidden;\n  padding: 0 0.5em;\n}\n\n.comment-list li {\n  list-style: none;\n  width: 360px;\n  height: 100%;\n  border-radius: 0.5em;\n  background-color: #f5f5f5;\n  padding: 0.8em 0.4em;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  font-size: 1rem;\n}\n\n.user-box {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Belanosima&family=Lobster&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

:root {
  --main: #f44336;
  --second: #f9f9f9;
  --background: antiquewhite;
}

body {
  font-family: 'Belanosima', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  height: 100vh;
}

/* ========= Header Styling ========== */

header,
footer {
  display: flex;
  background-color: var(--second);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 80px;
  width: 95%;
  align-items: center;
  position: relative;
  margin: 1.5em 5em;
  gap: 1em;
  padding: 0 1em;
}

.logo {
  padding-left: 5%;
  width: 90px;
  height: 90px;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 10px 10px;
}

.nav-links {
  display: flex;
  gap: 2em;
  list-style-type: none;
  width: 100%;
}

.nav-links a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.nav-links li {
  border-right: 3.5px solid var(--main);
  padding: 0 1em;
}

.nav-links a:hover {
  color: var(--main);
}

p {
  font-family: 'Belanosima', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
}

/* ======== Items display styling ======= */
main {
  height: calc(85vh);
  overflow: auto;
  border-radius: 0.5em;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 4.5em;
  width: 75%;
  margin: 1.5em 5em;
}

.meal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--second);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 480px;
  width: 400px;
  gap: 1em;
  transition: transform 0.1s ease-in-out;
}

.meal-card:hover {
  transform: scale(1.03);
}

.meal-card img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 8px 8px 10px 10px;
}

.title {
  position: relative;
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
}

.meal-card-title {
  font-size: 1.6rem;
}

.title button {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
}

.icon {
  font-size: 1.6rem;
  color: var(--main);
}

.buttons button {
  padding: 0.7em 2em;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.2s;
}

.title button:hover {
  transform: scale(1.3);
}

.likes-counter {
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  width: 90%;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2em;
  width: 100%;
  margin-top: 3.5em;
}

.buttons button:first-child {
  background-color: var(--main);
  color: var(--second);
  border: 2px solid #f44336;
}

.buttons button:last-child {
  background-color: #f9f9f9;
  color: #f44336;
  border: 2px solid #f44336;
}

.buttons button:hover {
  transform: scale(1.1);
}

/* ============== Footer ============ */

.license {
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0 5%;
}

.footer {
  width: 98%;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mCAAmC;EACnC,aAAa;AACf;;AAEA,wCAAwC;;AAExC;;EAEE,aAAa;EACb,+BAA+B;EAC/B,kBAAkB;EAClB,wCAAwC;EACxC,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,QAAQ;EACR,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,qCAAqC;EACrC,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,2CAA2C;AAC3C;EACE,kBAAkB;EAClB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,eAAe;EACf,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;EACb,YAAY;EACZ,QAAQ;EACR,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,uCAAuC;;AAEvC;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,UAAU;AACZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Lobster&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --main: #f44336;\n  --second: #f9f9f9;\n  --background: antiquewhite;\n}\n\nbody {\n  font-family: 'Belanosima', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--background);\n  height: 100vh;\n}\n\n/* ========= Header Styling ========== */\n\nheader,\nfooter {\n  display: flex;\n  background-color: var(--second);\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  height: 80px;\n  width: 95%;\n  align-items: center;\n  position: relative;\n  margin: 1.5em 5em;\n  gap: 1em;\n  padding: 0 1em;\n}\n\n.logo {\n  padding-left: 5%;\n  width: 90px;\n  height: 90px;\n}\n\n.logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px 8px 10px 10px;\n}\n\n.nav-links {\n  display: flex;\n  gap: 2em;\n  list-style-type: none;\n  width: 100%;\n}\n\n.nav-links a {\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n}\n\n.nav-links li {\n  border-right: 3.5px solid var(--main);\n  padding: 0 1em;\n}\n\n.nav-links a:hover {\n  color: var(--main);\n}\n\np {\n  font-family: 'Belanosima', sans-serif;\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n\n/* ======== Items display styling ======= */\nmain {\n  height: calc(85vh);\n  overflow: auto;\n  border-radius: 0.5em;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 4.5em;\n  width: 75%;\n  margin: 1.5em 5em;\n}\n\n.meal-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--second);\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  height: 480px;\n  width: 400px;\n  gap: 1em;\n  transition: transform 0.1s ease-in-out;\n}\n\n.meal-card:hover {\n  transform: scale(1.03);\n}\n\n.meal-card img {\n  width: 100%;\n  height: 50%;\n  object-fit: cover;\n  border-radius: 8px 8px 10px 10px;\n}\n\n.title {\n  position: relative;\n  display: flex;\n  width: 90%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1em;\n}\n\n.meal-card-title {\n  font-size: 1.6rem;\n}\n\n.title button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: transform 0.1s ease-in-out;\n}\n\n.icon {\n  font-size: 1.6rem;\n  color: var(--main);\n}\n\n.buttons button {\n  padding: 0.7em 2em;\n  cursor: pointer;\n  font-size: 1rem;\n  border-radius: 8px;\n  font-weight: bold;\n  transition: transform 0.2s;\n}\n\n.title button:hover {\n  transform: scale(1.3);\n}\n\n.likes-counter {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 1.2rem;\n  width: 90%;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.2em;\n  width: 100%;\n  margin-top: 3.5em;\n}\n\n.buttons button:first-child {\n  background-color: var(--main);\n  color: var(--second);\n  border: 2px solid #f44336;\n}\n\n.buttons button:last-child {\n  background-color: #f9f9f9;\n  color: #f44336;\n  border: 2px solid #f44336;\n}\n\n.buttons button:hover {\n  transform: scale(1.1);\n}\n\n/* ============== Footer ============ */\n\n.license {\n  font-size: 1.4rem;\n  font-weight: 600;\n  padding: 0 5%;\n}\n\n.footer {\n  width: 98%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/popup.css":
/*!******************************!*\
  !*** ./src/styles/popup.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/fetchcomments.js":
/*!**********************************!*\
  !*** ./src/api/fetchcomments.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchComments = async (itemId) => {
  try {
    const appId = 'KfZAQJtzqeC2UIXf6vLd';
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comments.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);

/***/ }),

/***/ "./src/api/fetchmeals.js":
/*!*******************************!*\
  !*** ./src/api/fetchmeals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchMeals = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    if (!response.ok) {
      throw new Error('Failed to fetch meals.');
    }
    const data = await response.json();

    const mealsWithId = data.meals.map((meal, index) => ({
      ...meal,
      id: index + 1,
    }));
    return mealsWithId;
  } catch (error) {
    return [];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeals);


/***/ }),

/***/ "./src/modules/commentcounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentcounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateCommentCounter = () => {
  const commentsCounter = document.getElementById('comment-counter');
  const commentsList = document.getElementById('comments-list');

  if (commentsCounter && commentsList) {
    const commentElements = commentsList.getElementsByClassName('comment-element');
    const commentCount = commentElements.length;
    commentsCounter.textContent = `(${commentCount})`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCommentCounter);


/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateMealCounter = () => {
  const mealContainer = document.getElementById('mealContainer');
  const mealCounter = document.getElementById('count');
  const mealElements = mealContainer.getElementsByClassName('meal-card');
  const mealCount = mealElements.length;

  mealCounter.textContent = `(${mealCount})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateMealCounter);

/***/ }),

/***/ "./src/modules/createmeals.js":
/*!************************************!*\
  !*** ./src/modules/createmeals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line no-console

const createMealCard = (meal, truncateTitle, postLike, fetchLikes) => {
  const appId = 'KfZAQJtzqeC2UIXf6vLd';

  const mealCard = document.createElement('div');
  mealCard.className = 'meal-card';
  mealCard.id = `meal-${meal.id}`;

  const mealImage = document.createElement('img');
  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  mealCard.appendChild(mealImage);

  const titleContainer = document.createElement('div');
  titleContainer.className = 'title';

  const mealTitle = document.createElement('p');
  mealTitle.className = 'meal-card-title';
  mealTitle.textContent = truncateTitle(meal.strMeal, 3);
  titleContainer.appendChild(mealTitle);

  const favoriteButton = document.createElement('button');
  favoriteButton.innerHTML = '<i class="fa-regular fa-heart icon"></i>';
  titleContainer.appendChild(favoriteButton);

  mealCard.appendChild(titleContainer);

  const likesCounter = document.createElement('div');
  likesCounter.className = 'likes-counter';
  const likesSpan = document.createElement('span');
  likesSpan.textContent = 'Loading...';
  likesCounter.appendChild(likesSpan);
  mealCard.appendChild(likesCounter);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons';

  const commentsButton = document.createElement('button');
  commentsButton.textContent = 'Comments';
  commentsButton.className = 'comments-button';
  buttonsContainer.appendChild(commentsButton);

  const reservationsButton = document.createElement('button');
  reservationsButton.textContent = 'Reservations';
  buttonsContainer.appendChild(reservationsButton);

  mealCard.appendChild(buttonsContainer);

  const updateLikesCounter = async () => {
    try {
      const likes = await fetchLikes(appId);
      const mealLikes = likes.filter((like) => like.item_id === meal.id);
      likesSpan.textContent = mealLikes.length > 0 ? mealLikes[0].likes : 0;
    } catch (error) {
      console.error('Failed to get likes:', error);
    }
  };

  favoriteButton.addEventListener('click', async () => {
    try {
      await postLike(appId, meal.id);
      await updateLikesCounter();
    } catch (error) {
      console.error('Failed to post like:', error);
    }
  });

  updateLikesCounter();

  return mealCard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMealCard);

/***/ }),

/***/ "./src/modules/getlikes.js":
/*!*********************************!*\
  !*** ./src/modules/getlikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchLikes = async (appId) => {
  try {
    const involvementLikeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

    const response = await fetch(involvementLikeUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to fetch likes');
  } catch (error) {
    console.error('Failed to fetch likes:', error);
    return [];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_fetchcomments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/fetchcomments.js */ "./src/api/fetchcomments.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/modules/utils.js");
/* harmony import */ var _commentcounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentcounter.js */ "./src/modules/commentcounter.js");
// eslint-disable-next-line no-console
// eslint-disable-next-line no-alert





const createCommentElement = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.className = 'comment-element';

  const userBox = document.createElement('span');
  userBox.className = 'user-box';

  const commentUser = document.createElement('span');
  commentUser.className = 'comment-user';
  commentUser.textContent = comment.username;
  userBox.appendChild(commentUser);

  const commentDate = document.createElement('span');
  commentDate.className = 'comment-date';
  commentDate.textContent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.formatDate)(comment.creation_date);
  userBox.appendChild(commentDate);

  commentElement.appendChild(userBox);

  const commentContent = document.createElement('span');
  commentContent.innerHTML = `- ${comment.comment}`;
  commentElement.appendChild(commentContent);

  return commentElement;
};

const showPopup = async (meal) => {
  const appId = 'KfZAQJtzqeC2UIXf6vLd';
  const popup = document.getElementById('popup');
  const mealImage = document.getElementById('popup-img');
  const mealTitle = document.getElementById('meal-title');
  const mealInstructions = document.getElementById('meal-instructions');
  const commentsList = document.getElementById('comments-list');
  const commentUserInput = document.getElementById('comment-user');
  const commentInput = document.getElementById('comment-input');
  const commentForm = document.getElementById('comment-form');
  const commentsCounter = document.getElementById('comment-counter');

  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  mealTitle.textContent = meal.strMeal;
  mealInstructions.textContent = meal.strInstructions;

  popup.style.display = 'block';

  const closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  commentsList.innerHTML = '';
  commentsCounter.textContent = '';

  try {
    const comments = await (0,_api_fetchcomments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(meal.id);

    comments.forEach((comment) => {
      const commentElement = createCommentElement(comment);
      commentsList.appendChild(commentElement);
    });

    (0,_commentcounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(comments.length);

    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = commentUserInput.value;
      const commentText = commentInput.value;

      if (username && commentText) {
        try {
          const response = await fetch(
            `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                item_id: meal.id,
                username,
                comment: commentText,
              }),
            },
          );

          if (response.ok) {
            const newComment = {
              username,
              comment: commentText,
              creation_date: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.formatDate)(Date.now()),
            };
            comments.push(newComment);
            commentsList.innerHTML = '';

            comments.forEach((comment) => {
              const commentElement = createCommentElement(comment);
              commentsList.appendChild(commentElement);
            });

            (0,_commentcounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(comments.length);

            commentUserInput.value = '';
            commentInput.value = '';
          } else {
            throw new Error('Failed to post comment');
          }
        } catch (error) {
          console.error(error);
          alert('Error posting comment');
        }
      }

      (0,_commentcounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
  } catch (error) {
    console.error(error);
    alert('Error fetching comments');
  }

  // Clear form inputs
  commentUserInput.value = '';
  commentInput.value = '';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);


/***/ }),

/***/ "./src/modules/postlikes.js":
/*!**********************************!*\
  !*** ./src/modules/postlikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postLike = async (appId, itemId) => {
  try {
    const involvementLikeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

    const response = await fetch(involvementLikeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    });

    if (response.ok) {
      return true;
    }
    throw new Error('Failed to post like');
  } catch (error) {
    console.error('Failed to post like:', error);
    throw error;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);


/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   truncateTitle: () => (/* binding */ truncateTitle)
/* harmony export */ });
const truncateTitle = (title, maxWords) => {
  const words = title.split(' ');
  if (words.length > maxWords) {
    return `${words.slice(0, maxWords).join(' ')}...`;
  }
  return title;
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01ca3b2acf62110c61db.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/popup.css */ "./src/styles/popup.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _api_fetchmeals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/fetchmeals.js */ "./src/api/fetchmeals.js");
/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/utils.js */ "./src/modules/utils.js");
/* harmony import */ var _modules_createmeals_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/createmeals.js */ "./src/modules/createmeals.js");
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/popup.js */ "./src/modules/popup.js");
/* harmony import */ var _modules_counter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/counter.js */ "./src/modules/counter.js");
/* harmony import */ var _modules_getlikes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/getlikes.js */ "./src/modules/getlikes.js");
/* harmony import */ var _modules_postlikes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/postlikes.js */ "./src/modules/postlikes.js");











document.addEventListener('DOMContentLoaded', async () => {
  const mealContainer = document.getElementById('mealContainer');

  try {
    const meals = await (0,_api_fetchmeals_js__WEBPACK_IMPORTED_MODULE_3__["default"])('Seafood');

    meals.forEach((meal, index) => {
      const mealCard = (0,_modules_createmeals_js__WEBPACK_IMPORTED_MODULE_5__["default"])(meal, _modules_utils_js__WEBPACK_IMPORTED_MODULE_4__.truncateTitle, _modules_postlikes_js__WEBPACK_IMPORTED_MODULE_9__["default"], _modules_getlikes_js__WEBPACK_IMPORTED_MODULE_8__["default"]);

      mealCard.id = `mealCard-${index + 1}`;

      const commentButton = mealCard.querySelector('.comments-button');
      commentButton.addEventListener('click', () => {
        (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_6__["default"])(meal);
      });

      mealContainer.appendChild(mealCard);
      (0,_modules_counter_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    });
  } catch (error) {
    mealContainer.innerHTML = 'Failed to fetch meals.';
  }
});

const logoImage = document.getElementById('logo');
logoImage.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxhQUFhLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdB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dUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDQTtBQUNTO0FBQ1E7QUFDTTtBQUNHO0FBQ1g7QUFDVTtBQUNOO0FBQ0Q7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsOERBQVU7O0FBRWxDO0FBQ0EsdUJBQXVCLG1FQUFjLE9BQU8sNERBQWEsRUFBRSw2REFBUSxFQUFFLDREQUFVOztBQUUvRSxnQ0FBZ0MsVUFBVTs7QUFFMUM7QUFDQTtBQUNBLFFBQVEsNkRBQVM7QUFDakIsT0FBTzs7QUFFUDtBQUNBLE1BQU0sK0RBQWlCO0FBQ3ZCLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxnQkFBZ0IsNkNBQUksQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvc3R5bGVzL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvc3R5bGVzL3BvcHVwLmNzcz81MWUwIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL3NyYy9hcGkvZmV0Y2hjb21tZW50cy5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL2FwaS9mZXRjaG1lYWxzLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvbW9kdWxlcy9jb21tZW50Y291bnRlci5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL21vZHVsZXMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL21vZHVsZXMvY3JlYXRlbWVhbHMuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL3NyYy9tb2R1bGVzL2dldGxpa2VzLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvbW9kdWxlcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL21vZHVsZXMvcG9zdGxpa2VzLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVsYW5vc2ltYSZmYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNlbSA1ZW07XG59XG5cbi5wb3B1cC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDAlO1xufVxuXG4ucG9wdXAtaGVhZGluZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAxMHB4IDEwcHg7XG59XG5cbi5wb3B1cC1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmluc3RydWN0aW9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTMwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLm1lYWwtaW5zdHJ1Y3Rpb25zIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLyogPT09PT09PT09PT0gQ29tbWVudCBTdHlsaW5nID09PT09PT09PT09ICovXG5cbi5jb21tZW50cy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMWVtO1xufVxuXG4uY29tbWVudC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjVlbTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIGhlaWdodDogMjFlbTtcbiAgZ2FwOiAxZW07XG59XG5cbi5jb21tZW50LWJveCBoMyB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jb21tZW50LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjVlbTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAwLjVlbTtcbn1cblxuLmNvbW1lbnQtbGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMC44ZW0gMC40ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41ZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnVzZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUEsNENBQTRDOztBQUU1QztFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWxhbm9zaW1hJmZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogOTk5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5wb3B1cC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogM2VtIDVlbTtcXG59XFxuXFxuLnBvcHVwLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG59XFxuXFxuLnBvcHVwLWhlYWRpbmcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDEwcHggMTBweDtcXG59XFxuXFxuLnBvcHVwLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuLmluc3RydWN0aW9uLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuXFxuLm1lYWwtaW5zdHJ1Y3Rpb25zIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PSBDb21tZW50IFN0eWxpbmcgPT09PT09PT09PT0gKi9cXG5cXG4uY29tbWVudHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5jb21tZW50LWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNWVtO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBoZWlnaHQ6IDIxZW07XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmNvbW1lbnQtYm94IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY29tbWVudC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNWVtO1xcbiAgaGVpZ2h0OiAyNjBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgcGFkZGluZzogMCAwLjVlbTtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgcGFkZGluZzogMC44ZW0gMC40ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41ZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi51c2VyLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWxhbm9zaW1hJmZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuOnJvb3Qge1xuICAtLW1haW46ICNmNDQzMzY7XG4gIC0tc2Vjb25kOiAjZjlmOWY5O1xuICAtLWJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnQmVsYW5vc2ltYScsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogPT09PT09PT09IEhlYWRlciBTdHlsaW5nID09PT09PT09PT0gKi9cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxLjVlbSA1ZW07XG4gIGdhcDogMWVtO1xuICBwYWRkaW5nOiAwIDFlbTtcbn1cblxuLmxvZ28ge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4ubG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAxMHB4IDEwcHg7XG59XG5cbi5uYXYtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1saW5rcyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2LWxpbmtzIGxpIHtcbiAgYm9yZGVyLXJpZ2h0OiAzLjVweCBzb2xpZCB2YXIoLS1tYWluKTtcbiAgcGFkZGluZzogMCAxZW07XG59XG5cbi5uYXYtbGlua3MgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1tYWluKTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnQmVsYW5vc2ltYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiA9PT09PT09PSBJdGVtcyBkaXNwbGF5IHN0eWxpbmcgPT09PT09PSAqL1xubWFpbiB7XG4gIGhlaWdodDogY2FsYyg4NXZoKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XG4gIGdyaWQtZ2FwOiA0LjVlbTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAxLjVlbSA1ZW07XG59XG5cbi5tZWFsLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGhlaWdodDogNDgwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgZ2FwOiAxZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVhbC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLm1lYWwtY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDEwcHggMTBweDtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMWVtO1xufVxuXG4ubWVhbC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi50aXRsZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiB2YXIoLS1tYWluKTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgcGFkZGluZzogMC43ZW0gMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi50aXRsZSBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5saWtlcy1jb3VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS4yZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzLjVlbTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjQ0MzM2O1xufVxuXG4uYnV0dG9ucyBidXR0b246bGFzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjQ0MzM2O1xufVxuXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi8qID09PT09PT09PT09PT09IEZvb3RlciA9PT09PT09PT09PT0gKi9cblxuLmxpY2Vuc2Uge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMCA1JTtcbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiA5OCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsYUFBYTtBQUNmOztBQUVBLHdDQUF3Qzs7QUFFeEM7O0VBRUUsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFFBQVE7RUFDUixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsdUNBQXVDOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlbGFub3NpbWEmZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW46ICNmNDQzMzY7XFxuICAtLXNlY29uZDogI2Y5ZjlmOTtcXG4gIC0tYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnQmVsYW5vc2ltYScsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogPT09PT09PT09IEhlYWRlciBTdHlsaW5nID09PT09PT09PT0gKi9cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA5NSU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxLjVlbSA1ZW07XFxuICBnYXA6IDFlbTtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgd2lkdGg6IDkwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAxMHB4IDEwcHg7XFxufVxcblxcbi5uYXYtbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXYtbGlua3MgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5hdi1saW5rcyBsaSB7XFxuICBib3JkZXItcmlnaHQ6IDMuNXB4IHNvbGlkIHZhcigtLW1haW4pO1xcbiAgcGFkZGluZzogMCAxZW07XFxufVxcblxcbi5uYXYtbGlua3MgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcblxcbnAge1xcbiAgZm9udC1mYW1pbHk6ICdCZWxhbm9zaW1hJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogPT09PT09PT0gSXRlbXMgZGlzcGxheSBzdHlsaW5nID09PT09PT0gKi9cXG5tYWluIHtcXG4gIGhlaWdodDogY2FsYyg4NXZoKTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcbiAgZ3JpZC1nYXA6IDQuNWVtO1xcbiAgd2lkdGg6IDc1JTtcXG4gIG1hcmdpbjogMS41ZW0gNWVtO1xcbn1cXG5cXG4ubWVhbC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgaGVpZ2h0OiA0ODBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGdhcDogMWVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZWFsLWNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLm1lYWwtY2FyZCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAxMHB4IDEwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFlbTtcXG59XFxuXFxuLm1lYWwtY2FyZC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnRpdGxlIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgcGFkZGluZzogMC43ZW0gMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG59XFxuXFxuLnRpdGxlIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi5saWtlcy1jb3VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMy41ZW07XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2Y0NDMzNjtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIGNvbG9yOiAjZjQ0MzM2O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2Y0NDMzNjtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT0gRm9vdGVyID09PT09PT09PT09PSAqL1xcblxcbi5saWNlbnNlIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDAgNSU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDk4JTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGZldGNoQ29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXBwSWQgPSAnS2ZaQVFKdHpxZUMyVUlYZjZ2TGQnO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gLFxuICAgICk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY29tbWVudHMuJyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaENvbW1lbnRzOyIsImNvbnN0IGZldGNoTWVhbHMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/cz0nKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBtZWFscy4nKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IG1lYWxzV2l0aElkID0gZGF0YS5tZWFscy5tYXAoKG1lYWwsIGluZGV4KSA9PiAoe1xuICAgICAgLi4ubWVhbCxcbiAgICAgIGlkOiBpbmRleCArIDEsXG4gICAgfSkpO1xuICAgIHJldHVybiBtZWFsc1dpdGhJZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoTWVhbHM7XG4iLCJjb25zdCB1cGRhdGVDb21tZW50Q291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgY29tbWVudHNDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtY291bnRlcicpO1xuICBjb25zdCBjb21tZW50c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMtbGlzdCcpO1xuXG4gIGlmIChjb21tZW50c0NvdW50ZXIgJiYgY29tbWVudHNMaXN0KSB7XG4gICAgY29uc3QgY29tbWVudEVsZW1lbnRzID0gY29tbWVudHNMaXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbW1lbnQtZWxlbWVudCcpO1xuICAgIGNvbnN0IGNvbW1lbnRDb3VudCA9IGNvbW1lbnRFbGVtZW50cy5sZW5ndGg7XG4gICAgY29tbWVudHNDb3VudGVyLnRleHRDb250ZW50ID0gYCgke2NvbW1lbnRDb3VudH0pYDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQ29tbWVudENvdW50ZXI7XG4iLCJjb25zdCB1cGRhdGVNZWFsQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgbWVhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsQ29udGFpbmVyJyk7XG4gIGNvbnN0IG1lYWxDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XG4gIGNvbnN0IG1lYWxFbGVtZW50cyA9IG1lYWxDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVhbC1jYXJkJyk7XG4gIGNvbnN0IG1lYWxDb3VudCA9IG1lYWxFbGVtZW50cy5sZW5ndGg7XG5cbiAgbWVhbENvdW50ZXIudGV4dENvbnRlbnQgPSBgKCR7bWVhbENvdW50fSlgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTWVhbENvdW50ZXI7IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuY29uc3QgY3JlYXRlTWVhbENhcmQgPSAobWVhbCwgdHJ1bmNhdGVUaXRsZSwgcG9zdExpa2UsIGZldGNoTGlrZXMpID0+IHtcbiAgY29uc3QgYXBwSWQgPSAnS2ZaQVFKdHpxZUMyVUlYZjZ2TGQnO1xuXG4gIGNvbnN0IG1lYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lYWxDYXJkLmNsYXNzTmFtZSA9ICdtZWFsLWNhcmQnO1xuICBtZWFsQ2FyZC5pZCA9IGBtZWFsLSR7bWVhbC5pZH1gO1xuXG4gIGNvbnN0IG1lYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZWFsSW1hZ2Uuc3JjID0gbWVhbC5zdHJNZWFsVGh1bWI7XG4gIG1lYWxJbWFnZS5hbHQgPSBtZWFsLnN0ck1lYWw7XG4gIG1lYWxDYXJkLmFwcGVuZENoaWxkKG1lYWxJbWFnZSk7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NOYW1lID0gJ3RpdGxlJztcblxuICBjb25zdCBtZWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lYWxUaXRsZS5jbGFzc05hbWUgPSAnbWVhbC1jYXJkLXRpdGxlJztcbiAgbWVhbFRpdGxlLnRleHRDb250ZW50ID0gdHJ1bmNhdGVUaXRsZShtZWFsLnN0ck1lYWwsIDMpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsVGl0bGUpO1xuXG4gIGNvbnN0IGZhdm9yaXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZhdm9yaXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnQgaWNvblwiPjwvaT4nO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmYXZvcml0ZUJ1dHRvbik7XG5cbiAgbWVhbENhcmQuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gIGNvbnN0IGxpa2VzQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaWtlc0NvdW50ZXIuY2xhc3NOYW1lID0gJ2xpa2VzLWNvdW50ZXInO1xuICBjb25zdCBsaWtlc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxpa2VzU3Bhbi50ZXh0Q29udGVudCA9ICdMb2FkaW5nLi4uJztcbiAgbGlrZXNDb3VudGVyLmFwcGVuZENoaWxkKGxpa2VzU3Bhbik7XG4gIG1lYWxDYXJkLmFwcGVuZENoaWxkKGxpa2VzQ291bnRlcik7XG5cbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdidXR0b25zJztcblxuICBjb25zdCBjb21tZW50c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb21tZW50c0J1dHRvbi50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gIGNvbW1lbnRzQnV0dG9uLmNsYXNzTmFtZSA9ICdjb21tZW50cy1idXR0b24nO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRzQnV0dG9uKTtcblxuICBjb25zdCByZXNlcnZhdGlvbnNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXJ2YXRpb25zQnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyc7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zQnV0dG9uKTtcblxuICBtZWFsQ2FyZC5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcblxuICBjb25zdCB1cGRhdGVMaWtlc0NvdW50ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxpa2VzID0gYXdhaXQgZmV0Y2hMaWtlcyhhcHBJZCk7XG4gICAgICBjb25zdCBtZWFsTGlrZXMgPSBsaWtlcy5maWx0ZXIoKGxpa2UpID0+IGxpa2UuaXRlbV9pZCA9PT0gbWVhbC5pZCk7XG4gICAgICBsaWtlc1NwYW4udGV4dENvbnRlbnQgPSBtZWFsTGlrZXMubGVuZ3RoID4gMCA/IG1lYWxMaWtlc1swXS5saWtlcyA6IDA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgbGlrZXM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBmYXZvcml0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9zdExpa2UoYXBwSWQsIG1lYWwuaWQpO1xuICAgICAgYXdhaXQgdXBkYXRlTGlrZXNDb3VudGVyKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBwb3N0IGxpa2U6JywgZXJyb3IpO1xuICAgIH1cbiAgfSk7XG5cbiAgdXBkYXRlTGlrZXNDb3VudGVyKCk7XG5cbiAgcmV0dXJuIG1lYWxDYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVhbENhcmQ7IiwiY29uc3QgZmV0Y2hMaWtlcyA9IGFzeW5jIChhcHBJZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGludm9sdmVtZW50TGlrZVVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9saWtlc2A7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGludm9sdmVtZW50TGlrZVVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbGlrZXMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbGlrZXM6JywgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hMaWtlczsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG5cbmltcG9ydCBmZXRjaENvbW1lbnRzIGZyb20gJy4uL2FwaS9mZXRjaGNvbW1lbnRzLmpzJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB1cGRhdGVDb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnRjb3VudGVyLmpzJztcblxuY29uc3QgY3JlYXRlQ29tbWVudEVsZW1lbnQgPSAoY29tbWVudCkgPT4ge1xuICBjb25zdCBjb21tZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9ICdjb21tZW50LWVsZW1lbnQnO1xuXG4gIGNvbnN0IHVzZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHVzZXJCb3guY2xhc3NOYW1lID0gJ3VzZXItYm94JztcblxuICBjb25zdCBjb21tZW50VXNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29tbWVudFVzZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnQtdXNlcic7XG4gIGNvbW1lbnRVc2VyLnRleHRDb250ZW50ID0gY29tbWVudC51c2VybmFtZTtcbiAgdXNlckJveC5hcHBlbmRDaGlsZChjb21tZW50VXNlcik7XG5cbiAgY29uc3QgY29tbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbW1lbnREYXRlLmNsYXNzTmFtZSA9ICdjb21tZW50LWRhdGUnO1xuICBjb21tZW50RGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoY29tbWVudC5jcmVhdGlvbl9kYXRlKTtcbiAgdXNlckJveC5hcHBlbmRDaGlsZChjb21tZW50RGF0ZSk7XG5cbiAgY29tbWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodXNlckJveCk7XG5cbiAgY29uc3QgY29tbWVudENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbW1lbnRDb250ZW50LmlubmVySFRNTCA9IGAtICR7Y29tbWVudC5jb21tZW50fWA7XG4gIGNvbW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbW1lbnRDb250ZW50KTtcblxuICByZXR1cm4gY29tbWVudEVsZW1lbnQ7XG59O1xuXG5jb25zdCBzaG93UG9wdXAgPSBhc3luYyAobWVhbCkgPT4ge1xuICBjb25zdCBhcHBJZCA9ICdLZlpBUUp0enFlQzJVSVhmNnZMZCc7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XG4gIGNvbnN0IG1lYWxJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1pbWcnKTtcbiAgY29uc3QgbWVhbFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWwtdGl0bGUnKTtcbiAgY29uc3QgbWVhbEluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsLWluc3RydWN0aW9ucycpO1xuICBjb25zdCBjb21tZW50c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMtbGlzdCcpO1xuICBjb25zdCBjb21tZW50VXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtdXNlcicpO1xuICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC1pbnB1dCcpO1xuICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWZvcm0nKTtcbiAgY29uc3QgY29tbWVudHNDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtY291bnRlcicpO1xuXG4gIG1lYWxJbWFnZS5zcmMgPSBtZWFsLnN0ck1lYWxUaHVtYjtcbiAgbWVhbEltYWdlLmFsdCA9IG1lYWwuc3RyTWVhbDtcbiAgbWVhbFRpdGxlLnRleHRDb250ZW50ID0gbWVhbC5zdHJNZWFsO1xuICBtZWFsSW5zdHJ1Y3Rpb25zLnRleHRDb250ZW50ID0gbWVhbC5zdHJJbnN0cnVjdGlvbnM7XG5cbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgY29uc3QgY2xvc2VQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1wb3B1cCcpO1xuICBjbG9zZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGNvbW1lbnRzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgY29tbWVudHNDb3VudGVyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoQ29tbWVudHMobWVhbC5pZCk7XG5cbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50RWxlbWVudCA9IGNyZWF0ZUNvbW1lbnRFbGVtZW50KGNvbW1lbnQpO1xuICAgICAgY29tbWVudHNMaXN0LmFwcGVuZENoaWxkKGNvbW1lbnRFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZUNvbW1lbnRDb3VudGVyKGNvbW1lbnRzLmxlbmd0aCk7XG5cbiAgICBjb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IGNvbW1lbnRVc2VySW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBjb21tZW50VGV4dCA9IGNvbW1lbnRJbnB1dC52YWx1ZTtcblxuICAgICAgaWYgKHVzZXJuYW1lICYmIGNvbW1lbnRUZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9jb21tZW50c2AsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGl0ZW1faWQ6IG1lYWwuaWQsXG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgY29tbWVudDogY29tbWVudFRleHQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb21tZW50ID0ge1xuICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgY29tbWVudDogY29tbWVudFRleHQsXG4gICAgICAgICAgICAgIGNyZWF0aW9uX2RhdGU6IGZvcm1hdERhdGUoRGF0ZS5ub3coKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29tbWVudHMucHVzaChuZXdDb21tZW50KTtcbiAgICAgICAgICAgIGNvbW1lbnRzTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb21tZW50RWxlbWVudCA9IGNyZWF0ZUNvbW1lbnRFbGVtZW50KGNvbW1lbnQpO1xuICAgICAgICAgICAgICBjb21tZW50c0xpc3QuYXBwZW5kQ2hpbGQoY29tbWVudEVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnRDb3VudGVyKGNvbW1lbnRzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGNvbW1lbnRVc2VySW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBwb3N0IGNvbW1lbnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgYWxlcnQoJ0Vycm9yIHBvc3RpbmcgY29tbWVudCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZUNvbW1lbnRDb3VudGVyKCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgYWxlcnQoJ0Vycm9yIGZldGNoaW5nIGNvbW1lbnRzJyk7XG4gIH1cblxuICAvLyBDbGVhciBmb3JtIGlucHV0c1xuICBjb21tZW50VXNlcklucHV0LnZhbHVlID0gJyc7XG4gIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd1BvcHVwO1xuIiwiY29uc3QgcG9zdExpa2UgPSBhc3luYyAoYXBwSWQsIGl0ZW1JZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGludm9sdmVtZW50TGlrZVVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9saWtlc2A7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGludm9sdmVtZW50TGlrZVVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHBvc3QgbGlrZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBwb3N0IGxpa2U6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0TGlrZTtcbiIsImV4cG9ydCBjb25zdCB0cnVuY2F0ZVRpdGxlID0gKHRpdGxlLCBtYXhXb3JkcykgPT4ge1xuICBjb25zdCB3b3JkcyA9IHRpdGxlLnNwbGl0KCcgJyk7XG4gIGlmICh3b3Jkcy5sZW5ndGggPiBtYXhXb3Jkcykge1xuICAgIHJldHVybiBgJHt3b3Jkcy5zbGljZSgwLCBtYXhXb3Jkcykuam9pbignICcpfS4uLmA7XG4gIH1cbiAgcmV0dXJuIHRpdGxlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0geyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9O1xuICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9wb3B1cC5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvbG9nby5wbmcnO1xuaW1wb3J0IGZldGNoTWVhbHMgZnJvbSAnLi9hcGkvZmV0Y2htZWFscy5qcyc7XG5pbXBvcnQgeyB0cnVuY2F0ZVRpdGxlIH0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzLmpzJztcbmltcG9ydCBjcmVhdGVNZWFsQ2FyZCBmcm9tICcuL21vZHVsZXMvY3JlYXRlbWVhbHMuanMnO1xuaW1wb3J0IHNob3dQb3B1cCBmcm9tICcuL21vZHVsZXMvcG9wdXAuanMnO1xuaW1wb3J0IHVwZGF0ZU1lYWxDb3VudGVyIGZyb20gJy4vbW9kdWxlcy9jb3VudGVyLmpzJztcbmltcG9ydCBmZXRjaExpa2VzIGZyb20gJy4vbW9kdWxlcy9nZXRsaWtlcy5qcyc7XG5pbXBvcnQgcG9zdExpa2UgZnJvbSAnLi9tb2R1bGVzL3Bvc3RsaWtlcy5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1lYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbENvbnRhaW5lcicpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbWVhbHMgPSBhd2FpdCBmZXRjaE1lYWxzKCdTZWFmb29kJyk7XG5cbiAgICBtZWFscy5mb3JFYWNoKChtZWFsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbWVhbENhcmQgPSBjcmVhdGVNZWFsQ2FyZChtZWFsLCB0cnVuY2F0ZVRpdGxlLCBwb3N0TGlrZSwgZmV0Y2hMaWtlcyk7XG5cbiAgICAgIG1lYWxDYXJkLmlkID0gYG1lYWxDYXJkLSR7aW5kZXggKyAxfWA7XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBtZWFsQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtYnV0dG9uJyk7XG4gICAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93UG9wdXAobWVhbCk7XG4gICAgICB9KTtcblxuICAgICAgbWVhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsQ2FyZCk7XG4gICAgICB1cGRhdGVNZWFsQ291bnRlcigpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG1lYWxDb250YWluZXIuaW5uZXJIVE1MID0gJ0ZhaWxlZCB0byBmZXRjaCBtZWFscy4nO1xuICB9XG59KTtcblxuY29uc3QgbG9nb0ltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcbmxvZ29JbWFnZS5zcmMgPSBsb2dvOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==