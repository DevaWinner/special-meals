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
`, "",{"version":3,"sources":["webpack://./src/styles/popup.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,8BAA8B;EAC9B,kBAAkB;EAClB,wCAAwC;EACxC,UAAU;EACV,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,UAAU;EACV,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA,4CAA4C;;AAE5C;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,yBAAyB;EACzB,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Lobster&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.popup {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 999;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.popup-content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: antiquewhite;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  width: 50%;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 3em 5em;\r\n}\r\n\r\n.popup-heading {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 40%;\r\n  height: 40%;\r\n}\r\n\r\n.popup-heading img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 8px 8px 10px 10px;\r\n}\r\n\r\n.popup-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1em;\r\n}\r\n\r\n.instruction-container {\r\n  height: 130px;\r\n  overflow: auto;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.meal-instructions {\r\n  font-size: 1.2em;\r\n  line-height: 1.5em;\r\n  text-align: justify;\r\n  font-weight: 300;\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n.close-button {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 2em;\r\n  height: 2em;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n}\r\n\r\n/* =========== Comment Styling =========== */\r\n\r\n.comments-container {\r\n  margin-top: 0.5em;\r\n  align-self: start;\r\n  display: flex;\r\n  gap: 1em;\r\n}\r\n\r\n.comment-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 25em;\r\n  margin-top: 0.5em;\r\n  height: 21em;\r\n  gap: 1em;\r\n}\r\n\r\n.comment-box h3 {\r\n  font-size: 1.7em;\r\n  font-weight: 400;\r\n}\r\n\r\n.comment-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 0.5em;\r\n  height: 260px;\r\n  overflow: auto;\r\n  overflow-x: hidden;\r\n  padding: 0 0.5em;\r\n}\r\n\r\n.comment-list li {\r\n  list-style: none;\r\n  width: 360px;\r\n  height: 100%;\r\n  border-radius: 0.5em;\r\n  background-color: #f5f5f5;\r\n  padding: 0.8em 0.4em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  font-size: 1rem;\r\n}\r\n\r\n.user-box {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n"],"sourceRoot":""}]);
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
  grid-gap: 5em;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mCAAmC;EACnC,aAAa;AACf;;AAEA,wCAAwC;;AAExC;;EAEE,aAAa;EACb,+BAA+B;EAC/B,kBAAkB;EAClB,wCAAwC;EACxC,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,QAAQ;EACR,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,qCAAqC;EACrC,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,2CAA2C;AAC3C;EACE,kBAAkB;EAClB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,aAAa;EACb,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;EACb,YAAY;EACZ,QAAQ;EACR,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,uCAAuC;;AAEvC;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,UAAU;AACZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Lobster&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n:root {\r\n  --main: #f44336;\r\n  --second: #f9f9f9;\r\n  --background: antiquewhite;\r\n}\r\n\r\nbody {\r\n  font-family: 'Belanosima', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--background);\r\n  height: 100vh;\r\n}\r\n\r\n/* ========= Header Styling ========== */\r\n\r\nheader,\r\nfooter {\r\n  display: flex;\r\n  background-color: var(--second);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  height: 80px;\r\n  width: 95%;\r\n  align-items: center;\r\n  position: relative;\r\n  margin: 1.5em 5em;\r\n  gap: 1em;\r\n  padding: 0 1em;\r\n}\r\n\r\n.logo {\r\n  padding-left: 5%;\r\n  width: 90px;\r\n  height: 90px;\r\n}\r\n\r\n.logo img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 8px 8px 10px 10px;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  gap: 2em;\r\n  list-style-type: none;\r\n  width: 100%;\r\n}\r\n\r\n.nav-links a {\r\n  text-decoration: none;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.nav-links li {\r\n  border-right: 3.5px solid var(--main);\r\n  padding: 0 1em;\r\n}\r\n\r\n.nav-links a:hover {\r\n  color: var(--main);\r\n}\r\n\r\np {\r\n  font-family: 'Belanosima', sans-serif;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n}\r\n\r\n/* ======== Items display styling ======= */\r\nmain {\r\n  height: calc(85vh);\r\n  overflow: auto;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, auto);\r\n  grid-gap: 5em;\r\n  width: 75%;\r\n  margin: 1.5em 5em;\r\n}\r\n\r\n.meal-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: var(--second);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  height: 480px;\r\n  width: 400px;\r\n  gap: 1em;\r\n  transition: transform 0.1s ease-in-out;\r\n}\r\n\r\n.meal-card:hover {\r\n  transform: scale(1.03);\r\n}\r\n\r\n.meal-card img {\r\n  width: 100%;\r\n  height: 50%;\r\n  object-fit: cover;\r\n  border-radius: 8px 8px 10px 10px;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  display: flex;\r\n  width: 90%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 1em;\r\n}\r\n\r\n.meal-card-title {\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.title button {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: transform 0.1s ease-in-out;\r\n}\r\n\r\n.icon {\r\n  font-size: 1.6rem;\r\n  color: var(--main);\r\n}\r\n\r\n.buttons button {\r\n  padding: 0.7em 2em;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  border-radius: 8px;\r\n  font-weight: bold;\r\n  transition: transform 0.2s;\r\n}\r\n\r\n.title button:hover {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes-counter {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  font-size: 1.2rem;\r\n  width: 90%;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.2em;\r\n  width: 100%;\r\n  margin-top: 3.5em;\r\n}\r\n\r\n.buttons button:first-child {\r\n  background-color: var(--main);\r\n  color: var(--second);\r\n  border: 2px solid #f44336;\r\n}\r\n\r\n.buttons button:last-child {\r\n  background-color: #f9f9f9;\r\n  color: #f44336;\r\n  border: 2px solid #f44336;\r\n}\r\n\r\n.buttons button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* ============== Footer ============ */\r\n\r\n.license {\r\n  font-size: 1.4rem;\r\n  font-weight: 600;\r\n  padding: 0 5%;\r\n}\r\n\r\n.footer {\r\n  width: 98%;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounter = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' );
    const data = await response.json();
    return data.meals.length;
  };
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

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
/* harmony import */ var _getlikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getlikes.js */ "./src/modules/getlikes.js");


const createMealCard = (meal, truncateTitle) => {
  const mealCard = document.createElement('div');
  mealCard.className = 'meal-card';

  // Assign the meal ID to the meal card
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

  (0,_getlikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    .then((likes) => {
      if (likes.length === 0) {
        likesSpan.textContent = '0 likes';
      } else {
        likesSpan.innerHTML = `${likes.length} likes`;
      }
    })
    .catch((error) => {
      console.error('Error fetching likes:', error);
      likesSpan.textContent = 'N/A';
    });

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
const getLikes = async (itemId) => {
  try {
    const appId = 'KfZAQJtzqeC2UIXf6vLd';
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes?item_id=${itemId}`,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);


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


const showPopup = async (meal) => {
  const popup = document.getElementById('popup');
  const mealImage = document.getElementById('popup-img');
  const mealTitle = document.getElementById('meal-title');
  const mealInstructions = document.getElementById('meal-instructions');

  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  mealTitle.textContent = meal.strMeal;
  mealInstructions.textContent = meal.strInstructions;

  popup.style.display = 'block';

  const closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = ''; // Clear previously fetched comments

  const comments = await (0,_api_fetchcomments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(meal.id);
  comments.forEach((comment) => {
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
    commentDate.textContent = comment.creation_date;
    userBox.appendChild(commentDate);

    commentElement.appendChild(userBox);

    const commentText = document.createElement('span');
    commentText.innerHTML = `- ${comment.comment}`;
    commentElement.appendChild(commentText);

    commentsList.appendChild(commentElement);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);

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








document.addEventListener('DOMContentLoaded', async () => {
  const mealContainer = document.getElementById('mealContainer');
  try {
    const meals = await (0,_api_fetchmeals_js__WEBPACK_IMPORTED_MODULE_3__["default"])('Seafood');
    const counter = document.documentElement('count');
    const countnum = await (0,_modules_counter_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
      counter.textContent = `(${countnum})meals`;
    meals.forEach((meal, index) => {
      const mealCard = (0,_modules_createmeals_js__WEBPACK_IMPORTED_MODULE_5__["default"])(meal, _modules_utils_js__WEBPACK_IMPORTED_MODULE_4__.truncateTitle);

      mealCard.id = `mealCard-${index + 1}`;
      

      const commentButton = mealCard.querySelector('.comments-button');
      commentButton.addEventListener('click', () => {
        (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_6__["default"])(meal);
      });
      
      mealContainer.appendChild(mealCard);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlB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L3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvc3R5bGVzL3BvcHVwLmNzcz81MWUwIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL3NyYy9hcGkvZmV0Y2hjb21tZW50cy5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL2FwaS9mZXRjaG1lYWxzLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvbW9kdWxlcy9jb3VudGVyLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvbW9kdWxlcy9jcmVhdGVtZWFscy5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL21vZHVsZXMvZ2V0bGlrZXMuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVsYW5vc2ltYSZmYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucG9wdXAge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4ucG9wdXAtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzZW0gNWVtO1xyXG59XHJcblxyXG4ucG9wdXAtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5wb3B1cC1oZWFkaW5nIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4ucG9wdXAtZGVzY3JpcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuLmluc3RydWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxufVxyXG5cclxuLm1lYWwtaW5zdHJ1Y3Rpb25zIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09IENvbW1lbnQgU3R5bGluZyA9PT09PT09PT09PSAqL1xyXG5cclxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFlbTtcclxufVxyXG5cclxuLmNvbW1lbnQtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDI1ZW07XHJcbiAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgaGVpZ2h0OiAyMWVtO1xyXG4gIGdhcDogMWVtO1xyXG59XHJcblxyXG4uY29tbWVudC1ib3ggaDMge1xyXG4gIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMC41ZW07XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMCAwLjVlbTtcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB3aWR0aDogMzYwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMC44ZW0gMC40ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41ZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udXNlci1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBLDRDQUE0Qzs7QUFFNUM7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVsYW5vc2ltYSZmYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNlbSA1ZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgaGVpZ2h0OiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkaW5nIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAxMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbi1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMzBweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWluc3RydWN0aW9ucyB7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT0gQ29tbWVudCBTdHlsaW5nID09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXHJcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMjVlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcclxcbiAgaGVpZ2h0OiAyMWVtO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJveCBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuN2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAwLjVlbTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3QgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAzNjBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG4gIHBhZGRpbmc6IDAuOGVtIDAuNGVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1ib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVsYW5vc2ltYSZmYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1tYWluOiAjZjQ0MzM2O1xyXG4gIC0tc2Vjb25kOiAjZjlmOWY5O1xyXG4gIC0tYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ0JlbGFub3NpbWEnLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PSBIZWFkZXIgU3R5bGluZyA9PT09PT09PT09ICovXHJcblxyXG5oZWFkZXIsXHJcbmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMS41ZW0gNWVtO1xyXG4gIGdhcDogMWVtO1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMmVtO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdi1saW5rcyBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIGxpIHtcclxuICBib3JkZXItcmlnaHQ6IDMuNXB4IHNvbGlkIHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluKTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdCZWxhbm9zaW1hJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiA9PT09PT09PSBJdGVtcyBkaXNwbGF5IHN0eWxpbmcgPT09PT09PSAqL1xyXG5tYWluIHtcclxuICBoZWlnaHQ6IGNhbGMoODV2aCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XHJcbiAgZ3JpZC1nYXA6IDVlbTtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogMS41ZW0gNWVtO1xyXG59XHJcblxyXG4ubWVhbC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGdhcDogMWVtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubWVhbC1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG59XHJcblxyXG4ubWVhbC1jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuLm1lYWwtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbi50aXRsZSBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluKTtcclxufVxyXG5cclxuLmJ1dHRvbnMgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjdlbSAyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbn1cclxuXHJcbi50aXRsZSBidXR0b246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuLmxpa2VzLWNvdW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMS4yZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMy41ZW07XHJcbn1cclxuXHJcbi5idXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y0NDMzNjtcclxufVxyXG5cclxuLmJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y0NDMzNjtcclxufVxyXG5cclxuLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09IEZvb3RlciA9PT09PT09PT09PT0gKi9cclxuXHJcbi5saWNlbnNlIHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAgNSU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHdpZHRoOiA5OCU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLGFBQWE7QUFDZjs7QUFFQSx3Q0FBd0M7O0FBRXhDOztFQUVFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLFlBQVk7RUFDWixRQUFRO0VBQ1Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLHVDQUF1Qzs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWxhbm9zaW1hJmZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1tYWluOiAjZjQ0MzM2O1xcclxcbiAgLS1zZWNvbmQ6ICNmOWY5Zjk7XFxyXFxuICAtLWJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0JlbGFub3NpbWEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PSBIZWFkZXIgU3R5bGluZyA9PT09PT09PT09ICovXFxyXFxuXFxyXFxuaGVhZGVyLFxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbjogMS41ZW0gNWVtO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXHJcXG4gIHdpZHRoOiA5MHB4O1xcclxcbiAgaGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMTBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAzLjVweCBzb2xpZCB2YXIoLS1tYWluKTtcXHJcXG4gIHBhZGRpbmc6IDAgMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4pO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmVsYW5vc2ltYScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09IEl0ZW1zIGRpc3BsYXkgc3R5bGluZyA9PT09PT09ICovXFxyXFxubWFpbiB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoODV2aCk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXHJcXG4gIGdyaWQtZ2FwOiA1ZW07XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luOiAxLjVlbSA1ZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBoZWlnaHQ6IDQ4MHB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbik7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjdlbSAyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvdW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuMmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAzLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjQ0MzM2O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucyBidXR0b246bGFzdC1jaGlsZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcclxcbiAgY29sb3I6ICNmNDQzMzY7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjQ0MzM2O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PSBGb290ZXIgPT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLmxpY2Vuc2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMCA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICB3aWR0aDogOTglO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZmV0Y2hDb21tZW50cyA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhcHBJZCA9ICdLZlpBUUp0enFlQzJVSVhmNnZMZCc7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWAsXG4gICAgKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjb21tZW50cy4nKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQ29tbWVudHM7IiwiY29uc3QgZmV0Y2hNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9zPScpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIG1lYWxzLicpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgbWVhbHNXaXRoSWQgPSBkYXRhLm1lYWxzLm1hcCgobWVhbCwgaW5kZXgpID0+ICh7XG4gICAgICAuLi5tZWFsLFxuICAgICAgaWQ6IGluZGV4ICsgMSxcbiAgICB9KSk7XG4gICAgcmV0dXJuIG1lYWxzV2l0aElkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hNZWFscztcbiIsImNvbnN0IGl0ZW1Db3VudGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/cz0nICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGEubWVhbHMubGVuZ3RoO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgaXRlbUNvdW50ZXI7IiwiaW1wb3J0IGdldExpa2VzIGZyb20gJy4vZ2V0bGlrZXMuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlTWVhbENhcmQgPSAobWVhbCwgdHJ1bmNhdGVUaXRsZSkgPT4ge1xyXG4gIGNvbnN0IG1lYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbENhcmQuY2xhc3NOYW1lID0gJ21lYWwtY2FyZCc7XHJcblxyXG4gIC8vIEFzc2lnbiB0aGUgbWVhbCBJRCB0byB0aGUgbWVhbCBjYXJkXHJcbiAgbWVhbENhcmQuaWQgPSBgbWVhbC0ke21lYWwuaWR9YDtcclxuXHJcbiAgY29uc3QgbWVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbWVhbEltYWdlLnNyYyA9IG1lYWwuc3RyTWVhbFRodW1iO1xyXG4gIG1lYWxJbWFnZS5hbHQgPSBtZWFsLnN0ck1lYWw7XHJcbiAgbWVhbENhcmQuYXBwZW5kQ2hpbGQobWVhbEltYWdlKTtcclxuXHJcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSAndGl0bGUnO1xyXG5cclxuICBjb25zdCBtZWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVhbFRpdGxlLmNsYXNzTmFtZSA9ICdtZWFsLWNhcmQtdGl0bGUnO1xyXG4gIG1lYWxUaXRsZS50ZXh0Q29udGVudCA9IHRydW5jYXRlVGl0bGUobWVhbC5zdHJNZWFsLCAzKTtcclxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsVGl0bGUpO1xyXG5cclxuICBjb25zdCBmYXZvcml0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGZhdm9yaXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnQgaWNvblwiPjwvaT4nO1xyXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZhdm9yaXRlQnV0dG9uKTtcclxuXHJcbiAgbWVhbENhcmQuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBsaWtlc0NvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsaWtlc0NvdW50ZXIuY2xhc3NOYW1lID0gJ2xpa2VzLWNvdW50ZXInO1xyXG4gIGNvbnN0IGxpa2VzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsaWtlc1NwYW4udGV4dENvbnRlbnQgPSAnTG9hZGluZy4uLic7XHJcbiAgbGlrZXNDb3VudGVyLmFwcGVuZENoaWxkKGxpa2VzU3Bhbik7XHJcbiAgbWVhbENhcmQuYXBwZW5kQ2hpbGQobGlrZXNDb3VudGVyKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NOYW1lID0gJ2J1dHRvbnMnO1xyXG5cclxuICBjb25zdCBjb21tZW50c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbW1lbnRzQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcclxuICBjb21tZW50c0J1dHRvbi5jbGFzc05hbWUgPSAnY29tbWVudHMtYnV0dG9uJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRzQnV0dG9uKTtcclxuXHJcbiAgY29uc3QgcmVzZXJ2YXRpb25zQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVzZXJ2YXRpb25zQnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyc7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbnNCdXR0b24pO1xyXG5cclxuICBtZWFsQ2FyZC5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgZ2V0TGlrZXMoKVxyXG4gICAgLnRoZW4oKGxpa2VzKSA9PiB7XHJcbiAgICAgIGlmIChsaWtlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBsaWtlc1NwYW4udGV4dENvbnRlbnQgPSAnMCBsaWtlcyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlrZXNTcGFuLmlubmVySFRNTCA9IGAke2xpa2VzLmxlbmd0aH0gbGlrZXNgO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBsaWtlczonLCBlcnJvcik7XHJcbiAgICAgIGxpa2VzU3Bhbi50ZXh0Q29udGVudCA9ICdOL0EnO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiBtZWFsQ2FyZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lYWxDYXJkOyIsImNvbnN0IGdldExpa2VzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhcHBJZCA9ICdLZlpBUUp0enFlQzJVSVhmNnZMZCc7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBJZH0vbGlrZXM/aXRlbV9pZD0ke2l0ZW1JZH1gLFxyXG4gICAgKTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY29tbWVudHMuJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRMaWtlcztcclxuIiwiaW1wb3J0IGZldGNoQ29tbWVudHMgZnJvbSAnLi4vYXBpL2ZldGNoY29tbWVudHMuanMnO1xuXG5jb25zdCBzaG93UG9wdXAgPSBhc3luYyAobWVhbCkgPT4ge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuICBjb25zdCBtZWFsSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtaW1nJyk7XG4gIGNvbnN0IG1lYWxUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsLXRpdGxlJyk7XG4gIGNvbnN0IG1lYWxJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbC1pbnN0cnVjdGlvbnMnKTtcblxuICBtZWFsSW1hZ2Uuc3JjID0gbWVhbC5zdHJNZWFsVGh1bWI7XG4gIG1lYWxJbWFnZS5hbHQgPSBtZWFsLnN0ck1lYWw7XG4gIG1lYWxUaXRsZS50ZXh0Q29udGVudCA9IG1lYWwuc3RyTWVhbDtcbiAgbWVhbEluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9IG1lYWwuc3RySW5zdHJ1Y3Rpb25zO1xuXG4gIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtcG9wdXAnKTtcbiAgY2xvc2VQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICBjb25zdCBjb21tZW50c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMtbGlzdCcpO1xuICBjb21tZW50c0xpc3QuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIHByZXZpb3VzbHkgZmV0Y2hlZCBjb21tZW50c1xuXG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2hDb21tZW50cyhtZWFsLmlkKTtcbiAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb21tZW50RWxlbWVudC5jbGFzc05hbWUgPSAnY29tbWVudC1lbGVtZW50JztcblxuICAgIGNvbnN0IHVzZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdXNlckJveC5jbGFzc05hbWUgPSAndXNlci1ib3gnO1xuXG4gICAgY29uc3QgY29tbWVudFVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29tbWVudFVzZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnQtdXNlcic7XG4gICAgY29tbWVudFVzZXIudGV4dENvbnRlbnQgPSBjb21tZW50LnVzZXJuYW1lO1xuICAgIHVzZXJCb3guYXBwZW5kQ2hpbGQoY29tbWVudFVzZXIpO1xuXG4gICAgY29uc3QgY29tbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29tbWVudERhdGUuY2xhc3NOYW1lID0gJ2NvbW1lbnQtZGF0ZSc7XG4gICAgY29tbWVudERhdGUudGV4dENvbnRlbnQgPSBjb21tZW50LmNyZWF0aW9uX2RhdGU7XG4gICAgdXNlckJveC5hcHBlbmRDaGlsZChjb21tZW50RGF0ZSk7XG5cbiAgICBjb21tZW50RWxlbWVudC5hcHBlbmRDaGlsZCh1c2VyQm94KTtcblxuICAgIGNvbnN0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbW1lbnRUZXh0LmlubmVySFRNTCA9IGAtICR7Y29tbWVudC5jb21tZW50fWA7XG4gICAgY29tbWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29tbWVudFRleHQpO1xuXG4gICAgY29tbWVudHNMaXN0LmFwcGVuZENoaWxkKGNvbW1lbnRFbGVtZW50KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93UG9wdXA7IiwiZXhwb3J0IGNvbnN0IHRydW5jYXRlVGl0bGUgPSAodGl0bGUsIG1heFdvcmRzKSA9PiB7XG4gIGNvbnN0IHdvcmRzID0gdGl0bGUuc3BsaXQoJyAnKTtcbiAgaWYgKHdvcmRzLmxlbmd0aCA+IG1heFdvcmRzKSB7XG4gICAgcmV0dXJuIGAke3dvcmRzLnNsaWNlKDAsIG1heFdvcmRzKS5qb2luKCcgJyl9Li4uYDtcbiAgfVxuICByZXR1cm4gdGl0bGU7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH07XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvcG9wdXAuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vYXNzZXRzL2xvZ28ucG5nJztcbmltcG9ydCBmZXRjaE1lYWxzIGZyb20gJy4vYXBpL2ZldGNobWVhbHMuanMnO1xuaW1wb3J0IHsgdHJ1bmNhdGVUaXRsZSB9IGZyb20gJy4vbW9kdWxlcy91dGlscy5qcyc7XG5pbXBvcnQgY3JlYXRlTWVhbENhcmQgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZW1lYWxzLmpzJztcbmltcG9ydCBzaG93UG9wdXAgZnJvbSAnLi9tb2R1bGVzL3BvcHVwLmpzJztcbmltcG9ydCBpdGVtQ291bnRlciBmcm9tICcuL21vZHVsZXMvY291bnRlci5qcyc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWxDb250YWluZXInKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBtZWFscyA9IGF3YWl0IGZldGNoTWVhbHMoJ1NlYWZvb2QnKTtcbiAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KCdjb3VudCcpO1xuICAgIGNvbnN0IGNvdW50bnVtID0gYXdhaXQgaXRlbUNvdW50ZXIoKTtcbiAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSBgKCR7Y291bnRudW19KW1lYWxzYDtcbiAgICBtZWFscy5mb3JFYWNoKChtZWFsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbWVhbENhcmQgPSBjcmVhdGVNZWFsQ2FyZChtZWFsLCB0cnVuY2F0ZVRpdGxlKTtcblxuICAgICAgbWVhbENhcmQuaWQgPSBgbWVhbENhcmQtJHtpbmRleCArIDF9YDtcbiAgICAgIFxuXG4gICAgICBjb25zdCBjb21tZW50QnV0dG9uID0gbWVhbENhcmQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWJ1dHRvbicpO1xuICAgICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd1BvcHVwKG1lYWwpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIG1lYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobWVhbENhcmQpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG1lYWxDb250YWluZXIuaW5uZXJIVE1MID0gJ0ZhaWxlZCB0byBmZXRjaCBtZWFscy4nO1xuICB9XG59KTtcblxuY29uc3QgbG9nb0ltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcbmxvZ29JbWFnZS5zcmMgPSBsb2dvOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==