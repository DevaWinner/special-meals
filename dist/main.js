/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  font-size: 1.1em;
  line-height: 1.5em;
  text-align: justify;
  font-weight: 300;
  padding: 1em;
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
`, "",{"version":3,"sources":["webpack://./src/styles/popup.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,8BAA8B;EAC9B,kBAAkB;EAClB,wCAAwC;EACxC,UAAU;EACV,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,UAAU;EACV,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Lobster&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 999;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.popup-content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: antiquewhite;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  width: 50%;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 3em 5em;\r\n}\r\n\r\n.popup-heading {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 40%;\r\n  height: 40%;\r\n}\r\n\r\n.popup-heading img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 8px 8px 10px 10px;\r\n}\r\n\r\n.popup-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1em;\r\n}\r\n\r\n.instruction-container {\r\n  height: 130px;\r\n  overflow: auto;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.meal-instructions {\r\n  font-size: 1.1em;\r\n  line-height: 1.5em;\r\n  text-align: justify;\r\n  font-weight: 300;\r\n  padding: 1em;\r\n}\r\n\r\n.close-button {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 2em;\r\n  height: 2em;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

body {
  font-family: 'Belanosima', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
  height: 100vh;
}

/* ========= Header Styling ========== */

header,
footer {
  display: flex;
  background-color: #f9f9f9;
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
  border-right: 3.5px solid #f44336;
  padding: 0 1em;
}

.nav-links a:hover {
  color: #f44336;
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
  background-color: #f9f9f9;
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
  color: #f44336;
}

.buttons button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.7em 5em;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
  background-color: #f44336;
  color: white;
  font-weight: bold;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1em;
}

.buttons button:hover {
  background-color: #f31505;
  color: white;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,8BAA8B;EAC9B,aAAa;AACf;;AAEA,wCAAwC;;AAExC;;EAEE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,wCAAwC;EACxC,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,QAAQ;EACR,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;EACjC,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,2CAA2C;AAC3C;EACE,kBAAkB;EAClB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,aAAa;EACb,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;EACb,YAAY;EACZ,QAAQ;EACR,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA,uCAAuC;;AAEvC;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,UAAU;AACZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Lobster&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Belanosima', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: antiquewhite;\r\n  height: 100vh;\r\n}\r\n\r\n/* ========= Header Styling ========== */\r\n\r\nheader,\r\nfooter {\r\n  display: flex;\r\n  background-color: #f9f9f9;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  height: 80px;\r\n  width: 95%;\r\n  align-items: center;\r\n  position: relative;\r\n  margin: 1.5em 5em;\r\n  gap: 1em;\r\n  padding: 0 1em;\r\n}\r\n\r\n.logo {\r\n  padding-left: 5%;\r\n  width: 90px;\r\n  height: 90px;\r\n}\r\n\r\n.logo img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 8px 8px 10px 10px;\r\n}\r\n\r\n.nav-links {\r\n  display: flex;\r\n  gap: 2em;\r\n  list-style-type: none;\r\n  width: 100%;\r\n}\r\n\r\n.nav-links a {\r\n  text-decoration: none;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.nav-links li {\r\n  border-right: 3.5px solid #f44336;\r\n  padding: 0 1em;\r\n}\r\n\r\n.nav-links a:hover {\r\n  color: #f44336;\r\n}\r\n\r\np {\r\n  font-family: 'Belanosima', sans-serif;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n}\r\n\r\n/* ======== Items display styling ======= */\r\nmain {\r\n  height: calc(85vh);\r\n  overflow: auto;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, auto);\r\n  grid-gap: 5em;\r\n  width: 75%;\r\n  margin: 1.5em 5em;\r\n}\r\n\r\n.meal-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #f9f9f9;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  height: 480px;\r\n  width: 400px;\r\n  gap: 1em;\r\n  transition: transform 0.1s ease-in-out;\r\n}\r\n\r\n.meal-card:hover {\r\n  transform: scale(1.03);\r\n}\r\n\r\n.meal-card img {\r\n  width: 100%;\r\n  height: 50%;\r\n  object-fit: cover;\r\n  border-radius: 8px 8px 10px 10px;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  display: flex;\r\n  width: 90%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 1em;\r\n}\r\n\r\n.meal-card-title {\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.title button {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: transform 0.1s ease-in-out;\r\n}\r\n\r\n.icon {\r\n  font-size: 1.6rem;\r\n  color: #f44336;\r\n}\r\n\r\n.buttons button {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  padding: 0.7em 5em;\r\n  cursor: pointer;\r\n  font-size: 1.2rem;\r\n  border-radius: 8px;\r\n  border: none;\r\n  background-color: #f44336;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.title button:hover {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes-counter {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  font-size: 1.2rem;\r\n  width: 90%;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 1em;\r\n}\r\n\r\n.buttons button:hover {\r\n  background-color: #f31505;\r\n  color: white;\r\n}\r\n\r\n/* ============== Footer ============ */\r\n\r\n.license {\r\n  font-size: 1.4rem;\r\n  font-weight: 600;\r\n  padding: 0 5%;\r\n}\r\n\r\n.footer {\r\n  width: 98%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/prelude-ls/lib/Func.js":
/*!*********************************************!*\
  !*** ./node_modules/prelude-ls/lib/Func.js ***!
  \*********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var apply, curry, flip, fix, over, memoize, toString$ = {}.toString;
apply = curry$(function(f, list){
  return f.apply(null, list);
});
curry = function(f){
  return curry$(f);
};
flip = curry$(function(f, x, y){
  return f(y, x);
});
fix = function(f){
  return function(g){
    return function(){
      return f(g(g)).apply(null, arguments);
    };
  }(function(g){
    return function(){
      return f(g(g)).apply(null, arguments);
    };
  });
};
over = curry$(function(f, g, x, y){
  return f(g(x), g(y));
});
memoize = function(f){
  var memo;
  memo = {};
  return function(){
    var args, res$, i$, to$, key, arg;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    key = (function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = args).length; i$ < len$; ++i$) {
        arg = ref$[i$];
        results$.push(arg + toString$.call(arg).slice(8, -1));
      }
      return results$;
    }()).join('');
    return memo[key] = key in memo
      ? memo[key]
      : f.apply(null, args);
  };
};
module.exports = {
  curry: curry,
  flip: flip,
  fix: fix,
  apply: apply,
  over: over,
  memoize: memoize
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./node_modules/prelude-ls/lib/List.js":
/*!*********************************************!*\
  !*** ./node_modules/prelude-ls/lib/List.js ***!
  \*********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var each, map, compact, filter, reject, remove, partition, find, head, first, tail, last, initial, empty, reverse, unique, uniqueBy, fold, foldl, fold1, foldl1, foldr, foldr1, unfoldr, concat, concatMap, flatten, difference, intersection, union, countBy, groupBy, andList, orList, any, all, sort, sortWith, sortBy, sum, product, mean, average, maximum, minimum, maximumBy, minimumBy, scan, scanl, scan1, scanl1, scanr, scanr1, slice, take, drop, splitAt, takeWhile, dropWhile, span, breakList, zip, zipWith, zipAll, zipAllWith, at, elemIndex, elemIndices, findIndex, findIndices, toString$ = {}.toString;
each = curry$(function(f, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    f(x);
  }
  return xs;
});
map = curry$(function(f, xs){
  var i$, len$, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    results$.push(f(x));
  }
  return results$;
});
compact = function(xs){
  var i$, len$, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (x) {
      results$.push(x);
    }
  }
  return results$;
};
filter = curry$(function(f, xs){
  var i$, len$, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (f(x)) {
      results$.push(x);
    }
  }
  return results$;
});
reject = curry$(function(f, xs){
  var i$, len$, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!f(x)) {
      results$.push(x);
    }
  }
  return results$;
});
remove = curry$(function(el, xs){
  var i, x$;
  i = elemIndex(el, xs);
  x$ = xs.slice();
  if (i != null) {
    x$.splice(i, 1);
  }
  return x$;
});
partition = curry$(function(f, xs){
  var passed, failed, i$, len$, x;
  passed = [];
  failed = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    (f(x) ? passed : failed).push(x);
  }
  return [passed, failed];
});
find = curry$(function(f, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (f(x)) {
      return x;
    }
  }
});
head = first = function(xs){
  return xs[0];
};
tail = function(xs){
  if (!xs.length) {
    return;
  }
  return xs.slice(1);
};
last = function(xs){
  return xs[xs.length - 1];
};
initial = function(xs){
  if (!xs.length) {
    return;
  }
  return xs.slice(0, -1);
};
empty = function(xs){
  return !xs.length;
};
reverse = function(xs){
  return xs.concat().reverse();
};
unique = function(xs){
  var result, i$, len$, x;
  result = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!in$(x, result)) {
      result.push(x);
    }
  }
  return result;
};
uniqueBy = curry$(function(f, xs){
  var seen, i$, len$, x, val, results$ = [];
  seen = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    val = f(x);
    if (in$(val, seen)) {
      continue;
    }
    seen.push(val);
    results$.push(x);
  }
  return results$;
});
fold = foldl = curry$(function(f, memo, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    memo = f(memo, x);
  }
  return memo;
});
fold1 = foldl1 = curry$(function(f, xs){
  return fold(f, xs[0], xs.slice(1));
});
foldr = curry$(function(f, memo, xs){
  var i$, x;
  for (i$ = xs.length - 1; i$ >= 0; --i$) {
    x = xs[i$];
    memo = f(x, memo);
  }
  return memo;
});
foldr1 = curry$(function(f, xs){
  return foldr(f, xs[xs.length - 1], xs.slice(0, -1));
});
unfoldr = curry$(function(f, b){
  var result, x, that;
  result = [];
  x = b;
  while ((that = f(x)) != null) {
    result.push(that[0]);
    x = that[1];
  }
  return result;
});
concat = function(xss){
  return [].concat.apply([], xss);
};
concatMap = curry$(function(f, xs){
  var x;
  return [].concat.apply([], (function(){
    var i$, ref$, len$, results$ = [];
    for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
      x = ref$[i$];
      results$.push(f(x));
    }
    return results$;
  }()));
});
flatten = function(xs){
  var x;
  return [].concat.apply([], (function(){
    var i$, ref$, len$, results$ = [];
    for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
      x = ref$[i$];
      if (toString$.call(x).slice(8, -1) === 'Array') {
        results$.push(flatten(x));
      } else {
        results$.push(x);
      }
    }
    return results$;
  }()));
};
difference = function(xs){
  var yss, res$, i$, to$, results, len$, x, j$, len1$, ys;
  res$ = [];
  for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  yss = res$;
  results = [];
  outer: for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    for (j$ = 0, len1$ = yss.length; j$ < len1$; ++j$) {
      ys = yss[j$];
      if (in$(x, ys)) {
        continue outer;
      }
    }
    results.push(x);
  }
  return results;
};
intersection = function(xs){
  var yss, res$, i$, to$, results, len$, x, j$, len1$, ys;
  res$ = [];
  for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  yss = res$;
  results = [];
  outer: for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    for (j$ = 0, len1$ = yss.length; j$ < len1$; ++j$) {
      ys = yss[j$];
      if (!in$(x, ys)) {
        continue outer;
      }
    }
    results.push(x);
  }
  return results;
};
union = function(){
  var xss, res$, i$, to$, results, len$, xs, j$, len1$, x;
  res$ = [];
  for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  xss = res$;
  results = [];
  for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
    xs = xss[i$];
    for (j$ = 0, len1$ = xs.length; j$ < len1$; ++j$) {
      x = xs[j$];
      if (!in$(x, results)) {
        results.push(x);
      }
    }
  }
  return results;
};
countBy = curry$(function(f, xs){
  var results, i$, len$, x, key;
  results = {};
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    key = f(x);
    if (key in results) {
      results[key] += 1;
    } else {
      results[key] = 1;
    }
  }
  return results;
});
groupBy = curry$(function(f, xs){
  var results, i$, len$, x, key;
  results = {};
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    key = f(x);
    if (key in results) {
      results[key].push(x);
    } else {
      results[key] = [x];
    }
  }
  return results;
});
andList = function(xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!x) {
      return false;
    }
  }
  return true;
};
orList = function(xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (x) {
      return true;
    }
  }
  return false;
};
any = curry$(function(f, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (f(x)) {
      return true;
    }
  }
  return false;
});
all = curry$(function(f, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!f(x)) {
      return false;
    }
  }
  return true;
});
sort = function(xs){
  return xs.concat().sort(function(x, y){
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  });
};
sortWith = curry$(function(f, xs){
  return xs.concat().sort(f);
});
sortBy = curry$(function(f, xs){
  return xs.concat().sort(function(x, y){
    if (f(x) > f(y)) {
      return 1;
    } else if (f(x) < f(y)) {
      return -1;
    } else {
      return 0;
    }
  });
});
sum = function(xs){
  var result, i$, len$, x;
  result = 0;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    result += x;
  }
  return result;
};
product = function(xs){
  var result, i$, len$, x;
  result = 1;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    result *= x;
  }
  return result;
};
mean = average = function(xs){
  var sum, i$, len$, x;
  sum = 0;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    sum += x;
  }
  return sum / xs.length;
};
maximum = function(xs){
  var max, i$, ref$, len$, x;
  max = xs[0];
  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
    x = ref$[i$];
    if (x > max) {
      max = x;
    }
  }
  return max;
};
minimum = function(xs){
  var min, i$, ref$, len$, x;
  min = xs[0];
  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
    x = ref$[i$];
    if (x < min) {
      min = x;
    }
  }
  return min;
};
maximumBy = curry$(function(f, xs){
  var max, i$, ref$, len$, x;
  max = xs[0];
  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
    x = ref$[i$];
    if (f(x) > f(max)) {
      max = x;
    }
  }
  return max;
});
minimumBy = curry$(function(f, xs){
  var min, i$, ref$, len$, x;
  min = xs[0];
  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
    x = ref$[i$];
    if (f(x) < f(min)) {
      min = x;
    }
  }
  return min;
});
scan = scanl = curry$(function(f, memo, xs){
  var last, x;
  last = memo;
  return [memo].concat((function(){
    var i$, ref$, len$, results$ = [];
    for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
      x = ref$[i$];
      results$.push(last = f(last, x));
    }
    return results$;
  }()));
});
scan1 = scanl1 = curry$(function(f, xs){
  if (!xs.length) {
    return;
  }
  return scan(f, xs[0], xs.slice(1));
});
scanr = curry$(function(f, memo, xs){
  xs = xs.concat().reverse();
  return scan(f, memo, xs).reverse();
});
scanr1 = curry$(function(f, xs){
  if (!xs.length) {
    return;
  }
  xs = xs.concat().reverse();
  return scan(f, xs[0], xs.slice(1)).reverse();
});
slice = curry$(function(x, y, xs){
  return xs.slice(x, y);
});
take = curry$(function(n, xs){
  if (n <= 0) {
    return xs.slice(0, 0);
  } else {
    return xs.slice(0, n);
  }
});
drop = curry$(function(n, xs){
  if (n <= 0) {
    return xs;
  } else {
    return xs.slice(n);
  }
});
splitAt = curry$(function(n, xs){
  return [take(n, xs), drop(n, xs)];
});
takeWhile = curry$(function(p, xs){
  var len, i;
  len = xs.length;
  if (!len) {
    return xs;
  }
  i = 0;
  while (i < len && p(xs[i])) {
    i += 1;
  }
  return xs.slice(0, i);
});
dropWhile = curry$(function(p, xs){
  var len, i;
  len = xs.length;
  if (!len) {
    return xs;
  }
  i = 0;
  while (i < len && p(xs[i])) {
    i += 1;
  }
  return xs.slice(i);
});
span = curry$(function(p, xs){
  return [takeWhile(p, xs), dropWhile(p, xs)];
});
breakList = curry$(function(p, xs){
  return span(compose$(p, not$), xs);
});
zip = curry$(function(xs, ys){
  var result, len, i$, len$, i, x;
  result = [];
  len = ys.length;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (i === len) {
      break;
    }
    result.push([x, ys[i]]);
  }
  return result;
});
zipWith = curry$(function(f, xs, ys){
  var result, len, i$, len$, i, x;
  result = [];
  len = ys.length;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (i === len) {
      break;
    }
    result.push(f(x, ys[i]));
  }
  return result;
});
zipAll = function(){
  var xss, res$, i$, to$, minLength, len$, xs, ref$, i, lresult$, j$, results$ = [];
  res$ = [];
  for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  xss = res$;
  minLength = undefined;
  for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
    xs = xss[i$];
    minLength <= (ref$ = xs.length) || (minLength = ref$);
  }
  for (i$ = 0; i$ < minLength; ++i$) {
    i = i$;
    lresult$ = [];
    for (j$ = 0, len$ = xss.length; j$ < len$; ++j$) {
      xs = xss[j$];
      lresult$.push(xs[i]);
    }
    results$.push(lresult$);
  }
  return results$;
};
zipAllWith = function(f){
  var xss, res$, i$, to$, minLength, len$, xs, ref$, i, results$ = [];
  res$ = [];
  for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  xss = res$;
  minLength = undefined;
  for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
    xs = xss[i$];
    minLength <= (ref$ = xs.length) || (minLength = ref$);
  }
  for (i$ = 0; i$ < minLength; ++i$) {
    i = i$;
    results$.push(f.apply(null, (fn$())));
  }
  return results$;
  function fn$(){
    var i$, ref$, len$, results$ = [];
    for (i$ = 0, len$ = (ref$ = xss).length; i$ < len$; ++i$) {
      xs = ref$[i$];
      results$.push(xs[i]);
    }
    return results$;
  }
};
at = curry$(function(n, xs){
  if (n < 0) {
    return xs[xs.length + n];
  } else {
    return xs[n];
  }
});
elemIndex = curry$(function(el, xs){
  var i$, len$, i, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (x === el) {
      return i;
    }
  }
});
elemIndices = curry$(function(el, xs){
  var i$, len$, i, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (x === el) {
      results$.push(i);
    }
  }
  return results$;
});
findIndex = curry$(function(f, xs){
  var i$, len$, i, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (f(x)) {
      return i;
    }
  }
});
findIndices = curry$(function(f, xs){
  var i$, len$, i, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (f(x)) {
      results$.push(i);
    }
  }
  return results$;
});
module.exports = {
  each: each,
  map: map,
  filter: filter,
  compact: compact,
  reject: reject,
  remove: remove,
  partition: partition,
  find: find,
  head: head,
  first: first,
  tail: tail,
  last: last,
  initial: initial,
  empty: empty,
  reverse: reverse,
  difference: difference,
  intersection: intersection,
  union: union,
  countBy: countBy,
  groupBy: groupBy,
  fold: fold,
  fold1: fold1,
  foldl: foldl,
  foldl1: foldl1,
  foldr: foldr,
  foldr1: foldr1,
  unfoldr: unfoldr,
  andList: andList,
  orList: orList,
  any: any,
  all: all,
  unique: unique,
  uniqueBy: uniqueBy,
  sort: sort,
  sortWith: sortWith,
  sortBy: sortBy,
  sum: sum,
  product: product,
  mean: mean,
  average: average,
  concat: concat,
  concatMap: concatMap,
  flatten: flatten,
  maximum: maximum,
  minimum: minimum,
  maximumBy: maximumBy,
  minimumBy: minimumBy,
  scan: scan,
  scan1: scan1,
  scanl: scanl,
  scanl1: scanl1,
  scanr: scanr,
  scanr1: scanr1,
  slice: slice,
  take: take,
  drop: drop,
  splitAt: splitAt,
  takeWhile: takeWhile,
  dropWhile: dropWhile,
  span: span,
  breakList: breakList,
  zip: zip,
  zipWith: zipWith,
  zipAll: zipAll,
  zipAllWith: zipAllWith,
  at: at,
  elemIndex: elemIndex,
  elemIndices: elemIndices,
  findIndex: findIndex,
  findIndices: findIndices
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}
function compose$() {
  var functions = arguments;
  return function() {
    var i, result;
    result = functions[0].apply(this, arguments);
    for (i = 1; i < functions.length; ++i) {
      result = functions[i](result);
    }
    return result;
  };
}
function not$(x){ return !x; }

/***/ }),

/***/ "./node_modules/prelude-ls/lib/Num.js":
/*!********************************************!*\
  !*** ./node_modules/prelude-ls/lib/Num.js ***!
  \********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var max, min, negate, abs, signum, quot, rem, div, mod, recip, pi, tau, exp, sqrt, ln, pow, sin, tan, cos, asin, acos, atan, atan2, truncate, round, ceiling, floor, isItNaN, even, odd, gcd, lcm;
max = curry$(function(x$, y$){
  return x$ > y$ ? x$ : y$;
});
min = curry$(function(x$, y$){
  return x$ < y$ ? x$ : y$;
});
negate = function(x){
  return -x;
};
abs = Math.abs;
signum = function(x){
  if (x < 0) {
    return -1;
  } else if (x > 0) {
    return 1;
  } else {
    return 0;
  }
};
quot = curry$(function(x, y){
  return ~~(x / y);
});
rem = curry$(function(x$, y$){
  return x$ % y$;
});
div = curry$(function(x, y){
  return Math.floor(x / y);
});
mod = curry$(function(x$, y$){
  var ref$;
  return ((x$) % (ref$ = y$) + ref$) % ref$;
});
recip = (function(it){
  return 1 / it;
});
pi = Math.PI;
tau = pi * 2;
exp = Math.exp;
sqrt = Math.sqrt;
ln = Math.log;
pow = curry$(function(x$, y$){
  return Math.pow(x$, y$);
});
sin = Math.sin;
tan = Math.tan;
cos = Math.cos;
asin = Math.asin;
acos = Math.acos;
atan = Math.atan;
atan2 = curry$(function(x, y){
  return Math.atan2(x, y);
});
truncate = function(x){
  return ~~x;
};
round = Math.round;
ceiling = Math.ceil;
floor = Math.floor;
isItNaN = function(x){
  return x !== x;
};
even = function(x){
  return x % 2 === 0;
};
odd = function(x){
  return x % 2 !== 0;
};
gcd = curry$(function(x, y){
  var z;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y !== 0) {
    z = x % y;
    x = y;
    y = z;
  }
  return x;
});
lcm = curry$(function(x, y){
  return Math.abs(Math.floor(x / gcd(x, y) * y));
});
module.exports = {
  max: max,
  min: min,
  negate: negate,
  abs: abs,
  signum: signum,
  quot: quot,
  rem: rem,
  div: div,
  mod: mod,
  recip: recip,
  pi: pi,
  tau: tau,
  exp: exp,
  sqrt: sqrt,
  ln: ln,
  pow: pow,
  sin: sin,
  tan: tan,
  cos: cos,
  acos: acos,
  asin: asin,
  atan: atan,
  atan2: atan2,
  truncate: truncate,
  round: round,
  ceiling: ceiling,
  floor: floor,
  isItNaN: isItNaN,
  even: even,
  odd: odd,
  gcd: gcd,
  lcm: lcm
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./node_modules/prelude-ls/lib/Obj.js":
/*!********************************************!*\
  !*** ./node_modules/prelude-ls/lib/Obj.js ***!
  \********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var values, keys, pairsToObj, objToPairs, listsToObj, objToLists, empty, each, map, compact, filter, reject, partition, find;
values = function(object){
  var i$, x, results$ = [];
  for (i$ in object) {
    x = object[i$];
    results$.push(x);
  }
  return results$;
};
keys = function(object){
  var x, results$ = [];
  for (x in object) {
    results$.push(x);
  }
  return results$;
};
pairsToObj = function(object){
  var i$, len$, x, resultObj$ = {};
  for (i$ = 0, len$ = object.length; i$ < len$; ++i$) {
    x = object[i$];
    resultObj$[x[0]] = x[1];
  }
  return resultObj$;
};
objToPairs = function(object){
  var key, value, results$ = [];
  for (key in object) {
    value = object[key];
    results$.push([key, value]);
  }
  return results$;
};
listsToObj = curry$(function(keys, values){
  var i$, len$, i, key, resultObj$ = {};
  for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
    i = i$;
    key = keys[i$];
    resultObj$[key] = values[i];
  }
  return resultObj$;
});
objToLists = function(object){
  var keys, values, key, value;
  keys = [];
  values = [];
  for (key in object) {
    value = object[key];
    keys.push(key);
    values.push(value);
  }
  return [keys, values];
};
empty = function(object){
  var x;
  for (x in object) {
    return false;
  }
  return true;
};
each = curry$(function(f, object){
  var i$, x;
  for (i$ in object) {
    x = object[i$];
    f(x);
  }
  return object;
});
map = curry$(function(f, object){
  var k, x, resultObj$ = {};
  for (k in object) {
    x = object[k];
    resultObj$[k] = f(x);
  }
  return resultObj$;
});
compact = function(object){
  var k, x, resultObj$ = {};
  for (k in object) {
    x = object[k];
    if (x) {
      resultObj$[k] = x;
    }
  }
  return resultObj$;
};
filter = curry$(function(f, object){
  var k, x, resultObj$ = {};
  for (k in object) {
    x = object[k];
    if (f(x)) {
      resultObj$[k] = x;
    }
  }
  return resultObj$;
});
reject = curry$(function(f, object){
  var k, x, resultObj$ = {};
  for (k in object) {
    x = object[k];
    if (!f(x)) {
      resultObj$[k] = x;
    }
  }
  return resultObj$;
});
partition = curry$(function(f, object){
  var passed, failed, k, x;
  passed = {};
  failed = {};
  for (k in object) {
    x = object[k];
    (f(x) ? passed : failed)[k] = x;
  }
  return [passed, failed];
});
find = curry$(function(f, object){
  var i$, x;
  for (i$ in object) {
    x = object[i$];
    if (f(x)) {
      return x;
    }
  }
});
module.exports = {
  values: values,
  keys: keys,
  pairsToObj: pairsToObj,
  objToPairs: objToPairs,
  listsToObj: listsToObj,
  objToLists: objToLists,
  empty: empty,
  each: each,
  map: map,
  filter: filter,
  compact: compact,
  reject: reject,
  partition: partition,
  find: find
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./node_modules/prelude-ls/lib/Str.js":
/*!********************************************!*\
  !*** ./node_modules/prelude-ls/lib/Str.js ***!
  \********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var split, join, lines, unlines, words, unwords, chars, unchars, reverse, repeat, capitalize, camelize, dasherize;
split = curry$(function(sep, str){
  return str.split(sep);
});
join = curry$(function(sep, xs){
  return xs.join(sep);
});
lines = function(str){
  if (!str.length) {
    return [];
  }
  return str.split('\n');
};
unlines = function(it){
  return it.join('\n');
};
words = function(str){
  if (!str.length) {
    return [];
  }
  return str.split(/[ ]+/);
};
unwords = function(it){
  return it.join(' ');
};
chars = function(it){
  return it.split('');
};
unchars = function(it){
  return it.join('');
};
reverse = function(str){
  return str.split('').reverse().join('');
};
repeat = curry$(function(n, str){
  var result, i$;
  result = '';
  for (i$ = 0; i$ < n; ++i$) {
    result += str;
  }
  return result;
});
capitalize = function(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};
camelize = function(it){
  return it.replace(/[-_]+(.)?/g, function(arg$, c){
    return (c != null ? c : '').toUpperCase();
  });
};
dasherize = function(str){
  return str.replace(/([^-A-Z])([A-Z]+)/g, function(arg$, lower, upper){
    return lower + "-" + (upper.length > 1
      ? upper
      : upper.toLowerCase());
  }).replace(/^([A-Z]+)/, function(arg$, upper){
    if (upper.length > 1) {
      return upper + "-";
    } else {
      return upper.toLowerCase();
    }
  });
};
module.exports = {
  split: split,
  join: join,
  lines: lines,
  unlines: unlines,
  words: words,
  unwords: unwords,
  chars: chars,
  unchars: unchars,
  reverse: reverse,
  repeat: repeat,
  capitalize: capitalize,
  camelize: camelize,
  dasherize: dasherize
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./node_modules/prelude-ls/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/prelude-ls/lib/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Generated by LiveScript 1.6.0
var Func, List, Obj, Str, Num, id, isType, replicate, prelude, toString$ = {}.toString;
Func = __webpack_require__(/*! ./Func.js */ "./node_modules/prelude-ls/lib/Func.js");
List = __webpack_require__(/*! ./List.js */ "./node_modules/prelude-ls/lib/List.js");
Obj = __webpack_require__(/*! ./Obj.js */ "./node_modules/prelude-ls/lib/Obj.js");
Str = __webpack_require__(/*! ./Str.js */ "./node_modules/prelude-ls/lib/Str.js");
Num = __webpack_require__(/*! ./Num.js */ "./node_modules/prelude-ls/lib/Num.js");
id = function(x){
  return x;
};
isType = curry$(function(type, x){
  return toString$.call(x).slice(8, -1) === type;
});
replicate = curry$(function(n, x){
  var i$, results$ = [];
  for (i$ = 0; i$ < n; ++i$) {
    results$.push(x);
  }
  return results$;
});
Str.empty = List.empty;
Str.slice = List.slice;
Str.take = List.take;
Str.drop = List.drop;
Str.splitAt = List.splitAt;
Str.takeWhile = List.takeWhile;
Str.dropWhile = List.dropWhile;
Str.span = List.span;
Str.breakStr = List.breakList;
prelude = {
  Func: Func,
  List: List,
  Obj: Obj,
  Str: Str,
  Num: Num,
  id: id,
  isType: isType,
  replicate: replicate
};
prelude.each = List.each;
prelude.map = List.map;
prelude.filter = List.filter;
prelude.compact = List.compact;
prelude.reject = List.reject;
prelude.partition = List.partition;
prelude.find = List.find;
prelude.head = List.head;
prelude.first = List.first;
prelude.tail = List.tail;
prelude.last = List.last;
prelude.initial = List.initial;
prelude.empty = List.empty;
prelude.reverse = List.reverse;
prelude.difference = List.difference;
prelude.intersection = List.intersection;
prelude.union = List.union;
prelude.countBy = List.countBy;
prelude.groupBy = List.groupBy;
prelude.fold = List.fold;
prelude.foldl = List.foldl;
prelude.fold1 = List.fold1;
prelude.foldl1 = List.foldl1;
prelude.foldr = List.foldr;
prelude.foldr1 = List.foldr1;
prelude.unfoldr = List.unfoldr;
prelude.andList = List.andList;
prelude.orList = List.orList;
prelude.any = List.any;
prelude.all = List.all;
prelude.unique = List.unique;
prelude.uniqueBy = List.uniqueBy;
prelude.sort = List.sort;
prelude.sortWith = List.sortWith;
prelude.sortBy = List.sortBy;
prelude.sum = List.sum;
prelude.product = List.product;
prelude.mean = List.mean;
prelude.average = List.average;
prelude.concat = List.concat;
prelude.concatMap = List.concatMap;
prelude.flatten = List.flatten;
prelude.maximum = List.maximum;
prelude.minimum = List.minimum;
prelude.maximumBy = List.maximumBy;
prelude.minimumBy = List.minimumBy;
prelude.scan = List.scan;
prelude.scanl = List.scanl;
prelude.scan1 = List.scan1;
prelude.scanl1 = List.scanl1;
prelude.scanr = List.scanr;
prelude.scanr1 = List.scanr1;
prelude.slice = List.slice;
prelude.take = List.take;
prelude.drop = List.drop;
prelude.splitAt = List.splitAt;
prelude.takeWhile = List.takeWhile;
prelude.dropWhile = List.dropWhile;
prelude.span = List.span;
prelude.breakList = List.breakList;
prelude.zip = List.zip;
prelude.zipWith = List.zipWith;
prelude.zipAll = List.zipAll;
prelude.zipAllWith = List.zipAllWith;
prelude.at = List.at;
prelude.elemIndex = List.elemIndex;
prelude.elemIndices = List.elemIndices;
prelude.findIndex = List.findIndex;
prelude.findIndices = List.findIndices;
prelude.apply = Func.apply;
prelude.curry = Func.curry;
prelude.flip = Func.flip;
prelude.fix = Func.fix;
prelude.over = Func.over;
prelude.split = Str.split;
prelude.join = Str.join;
prelude.lines = Str.lines;
prelude.unlines = Str.unlines;
prelude.words = Str.words;
prelude.unwords = Str.unwords;
prelude.chars = Str.chars;
prelude.unchars = Str.unchars;
prelude.repeat = Str.repeat;
prelude.capitalize = Str.capitalize;
prelude.camelize = Str.camelize;
prelude.dasherize = Str.dasherize;
prelude.values = Obj.values;
prelude.keys = Obj.keys;
prelude.pairsToObj = Obj.pairsToObj;
prelude.objToPairs = Obj.objToPairs;
prelude.listsToObj = Obj.listsToObj;
prelude.objToLists = Obj.objToLists;
prelude.max = Num.max;
prelude.min = Num.min;
prelude.negate = Num.negate;
prelude.abs = Num.abs;
prelude.signum = Num.signum;
prelude.quot = Num.quot;
prelude.rem = Num.rem;
prelude.div = Num.div;
prelude.mod = Num.mod;
prelude.recip = Num.recip;
prelude.pi = Num.pi;
prelude.tau = Num.tau;
prelude.exp = Num.exp;
prelude.sqrt = Num.sqrt;
prelude.ln = Num.ln;
prelude.pow = Num.pow;
prelude.sin = Num.sin;
prelude.tan = Num.tan;
prelude.cos = Num.cos;
prelude.acos = Num.acos;
prelude.asin = Num.asin;
prelude.atan = Num.atan;
prelude.atan2 = Num.atan2;
prelude.truncate = Num.truncate;
prelude.round = Num.round;
prelude.ceiling = Num.ceiling;
prelude.floor = Num.floor;
prelude.isItNaN = Num.isItNaN;
prelude.even = Num.even;
prelude.odd = Num.odd;
prelude.gcd = Num.gcd;
prelude.lcm = Num.lcm;
prelude.VERSION = '1.2.1';
module.exports = prelude;
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./src/styles/popup.css":
/*!******************************!*\
  !*** ./src/styles/popup.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/api/apidata.js":
/*!****************************!*\
  !*** ./src/api/apidata.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   likeurl: () => (/* binding */ likeurl)
/* harmony export */ });
const likeurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CzLXALYVYcBVao4XhyQE/likes/';


/***/ }),

/***/ "./src/api/fetchmeals.js":
/*!*******************************!*\
  !*** ./src/api/fetchmeals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    return data.meals;
  } catch (error) {
    return [];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeals);

/***/ }),

/***/ "./src/modules/getlikes.js":
/*!*********************************!*\
  !*** ./src/modules/getlikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_apidata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/apidata.js */ "./src/api/apidata.js");


const getlikes = async ()=>{
    try{
    const response = await fetch(_api_apidata_js__WEBPACK_IMPORTED_MODULE_0__.likeurl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data.result;
}
catch (error){
    return [];
}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getlikes);

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showPopup = (meal) => {
  const popup = document.createElement('div');
  popup.className = 'popup';

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const popupHeading = document.createElement('div');
  popupHeading.className = 'popup-heading';

  const mealImage = document.createElement('img');
  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  popupHeading.appendChild(mealImage);

  const closePopupButton = document.createElement('button');
  closePopupButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  closePopupButton.className = 'close-popup-button';
  closePopupButton.classList.add('close-button');
  popupHeading.appendChild(closePopupButton);

  popupContent.appendChild(popupHeading);

  const popupDescription = document.createElement('div');
  popupDescription.className = 'popup-description';

  const mealTitle = document.createElement('h2');
  mealTitle.textContent = meal.strMeal;
  mealTitle.className = 'meal-title';
  popupDescription.appendChild(mealTitle);

  const instructionContainer = document.createElement('div');
  instructionContainer.className = 'instruction-container';

  const mealInstructions = document.createElement('p');
  mealInstructions.textContent = meal.strInstructions;
  mealInstructions.className = 'meal-instructions';
  instructionContainer.appendChild(mealInstructions);

  popupDescription.appendChild(instructionContainer);

  popupContent.appendChild(popupDescription);

  closePopupButton.addEventListener('click', () => {
    popup.remove();
  });

  popup.appendChild(popupContent);
  document.body.appendChild(popup);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMealCard: () => (/* binding */ createMealCard),
/* harmony export */   truncateTitle: () => (/* binding */ truncateTitle)
/* harmony export */ });
/* harmony import */ var prelude_ls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prelude-ls */ "./node_modules/prelude-ls/lib/index.js");
/* harmony import */ var prelude_ls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prelude_ls__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getlikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getlikes.js */ "./src/modules/getlikes.js");


const createMealCard = async (meal, truncateTitle) => {
  const mealCard = document.createElement('div');
  mealCard.className = 'meal-card';

  const mealImage = document.createElement('img');
  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  mealImage.id = `image${meal.idMeal}`;
  mealCard.appendChild(mealImage);

  const titleContainer = document.createElement('div');
  titleContainer.className = 'title';

  const mealTitle = document.createElement('p');
  mealTitle.className = 'meal-card-title';
  mealTitle.textContent = truncateTitle(meal.strMeal, 3);
  titleContainer.appendChild(mealTitle);
  
  const likedata = await (0,_getlikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const favoriteButton = document.createElement('button');
  favoriteButton.innerHTML = '<i class="fa-regular fa-heart icon"></i>';
  titleContainer.appendChild(favoriteButton);

  mealCard.appendChild(titleContainer);
  let counter = 0;
  const like = likedata.find((like)=> like.item_id === prelude_ls__WEBPACK_IMPORTED_MODULE_0__.id);
 
  const likesCounter = document.createElement('div');
  likesCounter.className = 'likes-counter';
  if(like){
    counter = like.likes;
  }

  likesCounter.innerHTML = `<span>${counter}Likes</span>`;
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

  return mealCard;
};

const truncateTitle = (title, maxWords) => {
  const words = title.split(' ');
  if (words.length > maxWords) {
    return `${words.slice(0, maxWords).join(' ')}...`;
  }
  return title;
};

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/popup.css */ "./src/styles/popup.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _api_fetchmeals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/fetchmeals.js */ "./src/api/fetchmeals.js");
/* harmony import */ var _modules_getlikes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getlikes.js */ "./src/modules/getlikes.js");
/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/utils.js */ "./src/modules/utils.js");
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/popup.js */ "./src/modules/popup.js");








document.addEventListener('DOMContentLoaded', async () => {
  const mealContainer = document.getElementById('mealContainer');
  try {
    const meals = await (0,_api_fetchmeals_js__WEBPACK_IMPORTED_MODULE_3__["default"])('Seafood');
    meals.forEach((meal) => {
      const mealCard = (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_5__.createMealCard)(meal, _modules_utils_js__WEBPACK_IMPORTED_MODULE_5__.truncateTitle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxhQUFhLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUss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QUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFVBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxVQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsVUFBVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0Esb0NBQW9DLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsV0FBVztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxXQUFXO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxXQUFXO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxVQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBLG9DQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFVBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7QUMzc0JsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNBO0FBQ1M7QUFDUTtBQUNBO0FBQ3NCO0FBQ3JCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFVO0FBQ2xDO0FBQ0EsdUJBQXVCLGlFQUFjLE9BQU8sNERBQWE7QUFDekQ7QUFDQTtBQUNBLFFBQVEsNkRBQVk7QUFDcEIsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQUksQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvc3R5bGVzL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9ub2RlX21vZHVsZXMvcHJlbHVkZS1scy9saWIvRnVuYy5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vbm9kZV9tb2R1bGVzL3ByZWx1ZGUtbHMvbGliL0xpc3QuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9wcmVsdWRlLWxzL2xpYi9OdW0uanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9wcmVsdWRlLWxzL2xpYi9PYmouanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9wcmVsdWRlLWxzL2xpYi9TdHIuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9wcmVsdWRlLWxzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3M/NTFlMCIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvYXBpL2FwaWRhdGEuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL3NyYy9hcGkvZmV0Y2htZWFscy5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL21vZHVsZXMvZ2V0bGlrZXMuanMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvLi9zcmMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NwZWNpYWwtbWVhbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BlY2lhbC1tZWFscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zcGVjaWFsLW1lYWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVsYW5vc2ltYSZmYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucG9wdXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLnBvcHVwLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogM2VtIDVlbTtcclxufVxyXG5cclxuLnBvcHVwLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG4ucG9wdXAtaGVhZGluZyBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnBvcHVwLWRlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbn1cclxuXHJcbi5tZWFsLWluc3RydWN0aW9ucyB7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMmVtO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVsYW5vc2ltYSZmYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM2VtIDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRpbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBoZWlnaHQ6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRpbmcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3RydWN0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW5zdHJ1Y3Rpb25zIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAyZW07XFxyXFxuICBoZWlnaHQ6IDJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWxhbm9zaW1hJmZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnQmVsYW5vc2ltYScsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PSBIZWFkZXIgU3R5bGluZyA9PT09PT09PT09ICovXHJcblxyXG5oZWFkZXIsXHJcbmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMS41ZW0gNWVtO1xyXG4gIGdhcDogMWVtO1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMmVtO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdi1saW5rcyBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIGxpIHtcclxuICBib3JkZXItcmlnaHQ6IDMuNXB4IHNvbGlkICNmNDQzMzY7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5uYXYtbGlua3MgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiAnQmVsYW5vc2ltYScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogPT09PT09PT0gSXRlbXMgZGlzcGxheSBzdHlsaW5nID09PT09PT0gKi9cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiBjYWxjKDg1dmgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xyXG4gIGdyaWQtZ2FwOiA1ZW07XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDEuNWVtIDVlbTtcclxufVxyXG5cclxuLm1lYWwtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBnYXA6IDFlbTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1lYWwtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxufVxyXG5cclxuLm1lYWwtY2FyZCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5tZWFsLWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4udGl0bGUgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLmJ1dHRvbnMgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgcGFkZGluZzogMC43ZW0gNWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGl0bGUgYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuXHJcbi5saWtlcy1jb3VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdhcDogMWVtO1xyXG59XHJcblxyXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzE1MDU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PSBGb290ZXIgPT09PT09PT09PT09ICovXHJcblxyXG4ubGljZW5zZSB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwIDUlO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICB3aWR0aDogOTglO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBLHdDQUF3Qzs7QUFFeEM7O0VBRUUsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLFlBQVk7RUFDWixRQUFRO0VBQ1Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBLHVDQUF1Qzs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWxhbm9zaW1hJmZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0JlbGFub3NpbWEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT0gSGVhZGVyIFN0eWxpbmcgPT09PT09PT09PSAqL1xcclxcblxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW46IDEuNWVtIDVlbTtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxyXFxuICB3aWR0aDogOTBweDtcXHJcXG4gIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyZW07XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rcyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGxpIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMy41cHggc29saWQgI2Y0NDMzNjtcXHJcXG4gIHBhZGRpbmc6IDAgMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmNDQzMzY7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1mYW1pbHk6ICdCZWxhbm9zaW1hJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT0gSXRlbXMgZGlzcGxheSBzdHlsaW5nID09PT09PT0gKi9cXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogY2FsYyg4NXZoKTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcclxcbiAgZ3JpZC1nYXA6IDVlbTtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBtYXJnaW46IDEuNWVtIDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIGhlaWdodDogNDgwcHg7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jYXJkOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNhcmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMTBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGNvbG9yOiAjZjQ0MzM2O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucyBidXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBhZGRpbmc6IDAuN2VtIDVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvdW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzE1MDU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09IEZvb3RlciA9PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4ubGljZW5zZSB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAwIDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiA5OCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gR2VuZXJhdGVkIGJ5IExpdmVTY3JpcHQgMS42LjBcbnZhciBhcHBseSwgY3VycnksIGZsaXAsIGZpeCwgb3ZlciwgbWVtb2l6ZSwgdG9TdHJpbmckID0ge30udG9TdHJpbmc7XG5hcHBseSA9IGN1cnJ5JChmdW5jdGlvbihmLCBsaXN0KXtcbiAgcmV0dXJuIGYuYXBwbHkobnVsbCwgbGlzdCk7XG59KTtcbmN1cnJ5ID0gZnVuY3Rpb24oZil7XG4gIHJldHVybiBjdXJyeSQoZik7XG59O1xuZmxpcCA9IGN1cnJ5JChmdW5jdGlvbihmLCB4LCB5KXtcbiAgcmV0dXJuIGYoeSwgeCk7XG59KTtcbmZpeCA9IGZ1bmN0aW9uKGYpe1xuICByZXR1cm4gZnVuY3Rpb24oZyl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gZihnKGcpKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0oZnVuY3Rpb24oZyl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gZihnKGcpKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0pO1xufTtcbm92ZXIgPSBjdXJyeSQoZnVuY3Rpb24oZiwgZywgeCwgeSl7XG4gIHJldHVybiBmKGcoeCksIGcoeSkpO1xufSk7XG5tZW1vaXplID0gZnVuY3Rpb24oZil7XG4gIHZhciBtZW1vO1xuICBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHZhciBhcmdzLCByZXMkLCBpJCwgdG8kLCBrZXksIGFyZztcbiAgICByZXMkID0gW107XG4gICAgZm9yIChpJCA9IDAsIHRvJCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkkIDwgdG8kOyArK2kkKSB7XG4gICAgICByZXMkLnB1c2goYXJndW1lbnRzW2kkXSk7XG4gICAgfVxuICAgIGFyZ3MgPSByZXMkO1xuICAgIGtleSA9IChmdW5jdGlvbigpe1xuICAgICAgdmFyIGkkLCByZWYkLCBsZW4kLCByZXN1bHRzJCA9IFtdO1xuICAgICAgZm9yIChpJCA9IDAsIGxlbiQgPSAocmVmJCA9IGFyZ3MpLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgICAgIGFyZyA9IHJlZiRbaSRdO1xuICAgICAgICByZXN1bHRzJC5wdXNoKGFyZyArIHRvU3RyaW5nJC5jYWxsKGFyZykuc2xpY2UoOCwgLTEpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzJDtcbiAgICB9KCkpLmpvaW4oJycpO1xuICAgIHJldHVybiBtZW1vW2tleV0gPSBrZXkgaW4gbWVtb1xuICAgICAgPyBtZW1vW2tleV1cbiAgICAgIDogZi5hcHBseShudWxsLCBhcmdzKTtcbiAgfTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3Vycnk6IGN1cnJ5LFxuICBmbGlwOiBmbGlwLFxuICBmaXg6IGZpeCxcbiAgYXBwbHk6IGFwcGx5LFxuICBvdmVyOiBvdmVyLFxuICBtZW1vaXplOiBtZW1vaXplXG59O1xuZnVuY3Rpb24gY3VycnkkKGYsIGJvdW5kKXtcbiAgdmFyIGNvbnRleHQsXG4gIF9jdXJyeSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gZi5sZW5ndGggPiAxID8gZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmdzID8gYXJncy5jb25jYXQoKSA6IFtdO1xuICAgICAgY29udGV4dCA9IGJvdW5kID8gY29udGV4dCB8fCB0aGlzIDogdGhpcztcbiAgICAgIHJldHVybiBwYXJhbXMucHVzaC5hcHBseShwYXJhbXMsIGFyZ3VtZW50cykgPFxuICAgICAgICAgIGYubGVuZ3RoICYmIGFyZ3VtZW50cy5sZW5ndGggP1xuICAgICAgICBfY3VycnkuY2FsbChjb250ZXh0LCBwYXJhbXMpIDogZi5hcHBseShjb250ZXh0LCBwYXJhbXMpO1xuICAgIH0gOiBmO1xuICB9O1xuICByZXR1cm4gX2N1cnJ5KCk7XG59IiwiLy8gR2VuZXJhdGVkIGJ5IExpdmVTY3JpcHQgMS42LjBcbnZhciBlYWNoLCBtYXAsIGNvbXBhY3QsIGZpbHRlciwgcmVqZWN0LCByZW1vdmUsIHBhcnRpdGlvbiwgZmluZCwgaGVhZCwgZmlyc3QsIHRhaWwsIGxhc3QsIGluaXRpYWwsIGVtcHR5LCByZXZlcnNlLCB1bmlxdWUsIHVuaXF1ZUJ5LCBmb2xkLCBmb2xkbCwgZm9sZDEsIGZvbGRsMSwgZm9sZHIsIGZvbGRyMSwgdW5mb2xkciwgY29uY2F0LCBjb25jYXRNYXAsIGZsYXR0ZW4sIGRpZmZlcmVuY2UsIGludGVyc2VjdGlvbiwgdW5pb24sIGNvdW50QnksIGdyb3VwQnksIGFuZExpc3QsIG9yTGlzdCwgYW55LCBhbGwsIHNvcnQsIHNvcnRXaXRoLCBzb3J0QnksIHN1bSwgcHJvZHVjdCwgbWVhbiwgYXZlcmFnZSwgbWF4aW11bSwgbWluaW11bSwgbWF4aW11bUJ5LCBtaW5pbXVtQnksIHNjYW4sIHNjYW5sLCBzY2FuMSwgc2NhbmwxLCBzY2Fuciwgc2NhbnIxLCBzbGljZSwgdGFrZSwgZHJvcCwgc3BsaXRBdCwgdGFrZVdoaWxlLCBkcm9wV2hpbGUsIHNwYW4sIGJyZWFrTGlzdCwgemlwLCB6aXBXaXRoLCB6aXBBbGwsIHppcEFsbFdpdGgsIGF0LCBlbGVtSW5kZXgsIGVsZW1JbmRpY2VzLCBmaW5kSW5kZXgsIGZpbmRJbmRpY2VzLCB0b1N0cmluZyQgPSB7fS50b1N0cmluZztcbmVhY2ggPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgaSQsIGxlbiQsIHg7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGYoeCk7XG4gIH1cbiAgcmV0dXJuIHhzO1xufSk7XG5tYXAgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgaSQsIGxlbiQsIHgsIHJlc3VsdHMkID0gW107XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIHJlc3VsdHMkLnB1c2goZih4KSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufSk7XG5jb21wYWN0ID0gZnVuY3Rpb24oeHMpe1xuICB2YXIgaSQsIGxlbiQsIHgsIHJlc3VsdHMkID0gW107XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmICh4KSB7XG4gICAgICByZXN1bHRzJC5wdXNoKHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59O1xuZmlsdGVyID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoZih4KSkge1xuICAgICAgcmVzdWx0cyQucHVzaCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufSk7XG5yZWplY3QgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgaSQsIGxlbiQsIHgsIHJlc3VsdHMkID0gW107XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmICghZih4KSkge1xuICAgICAgcmVzdWx0cyQucHVzaCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufSk7XG5yZW1vdmUgPSBjdXJyeSQoZnVuY3Rpb24oZWwsIHhzKXtcbiAgdmFyIGksIHgkO1xuICBpID0gZWxlbUluZGV4KGVsLCB4cyk7XG4gIHgkID0geHMuc2xpY2UoKTtcbiAgaWYgKGkgIT0gbnVsbCkge1xuICAgIHgkLnNwbGljZShpLCAxKTtcbiAgfVxuICByZXR1cm4geCQ7XG59KTtcbnBhcnRpdGlvbiA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciBwYXNzZWQsIGZhaWxlZCwgaSQsIGxlbiQsIHg7XG4gIHBhc3NlZCA9IFtdO1xuICBmYWlsZWQgPSBbXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgKGYoeCkgPyBwYXNzZWQgOiBmYWlsZWQpLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIFtwYXNzZWQsIGZhaWxlZF07XG59KTtcbmZpbmQgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgaSQsIGxlbiQsIHg7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmIChmKHgpKSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9XG4gIH1cbn0pO1xuaGVhZCA9IGZpcnN0ID0gZnVuY3Rpb24oeHMpe1xuICByZXR1cm4geHNbMF07XG59O1xudGFpbCA9IGZ1bmN0aW9uKHhzKXtcbiAgaWYgKCF4cy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIHhzLnNsaWNlKDEpO1xufTtcbmxhc3QgPSBmdW5jdGlvbih4cyl7XG4gIHJldHVybiB4c1t4cy5sZW5ndGggLSAxXTtcbn07XG5pbml0aWFsID0gZnVuY3Rpb24oeHMpe1xuICBpZiAoIXhzLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4geHMuc2xpY2UoMCwgLTEpO1xufTtcbmVtcHR5ID0gZnVuY3Rpb24oeHMpe1xuICByZXR1cm4gIXhzLmxlbmd0aDtcbn07XG5yZXZlcnNlID0gZnVuY3Rpb24oeHMpe1xuICByZXR1cm4geHMuY29uY2F0KCkucmV2ZXJzZSgpO1xufTtcbnVuaXF1ZSA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIHJlc3VsdCwgaSQsIGxlbiQsIHg7XG4gIHJlc3VsdCA9IFtdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoIWluJCh4LCByZXN1bHQpKSB7XG4gICAgICByZXN1bHQucHVzaCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG51bmlxdWVCeSA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciBzZWVuLCBpJCwgbGVuJCwgeCwgdmFsLCByZXN1bHRzJCA9IFtdO1xuICBzZWVuID0gW107XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIHZhbCA9IGYoeCk7XG4gICAgaWYgKGluJCh2YWwsIHNlZW4pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgc2Vlbi5wdXNoKHZhbCk7XG4gICAgcmVzdWx0cyQucHVzaCh4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59KTtcbmZvbGQgPSBmb2xkbCA9IGN1cnJ5JChmdW5jdGlvbihmLCBtZW1vLCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgeDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgbWVtbyA9IGYobWVtbywgeCk7XG4gIH1cbiAgcmV0dXJuIG1lbW87XG59KTtcbmZvbGQxID0gZm9sZGwxID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgcmV0dXJuIGZvbGQoZiwgeHNbMF0sIHhzLnNsaWNlKDEpKTtcbn0pO1xuZm9sZHIgPSBjdXJyeSQoZnVuY3Rpb24oZiwgbWVtbywgeHMpe1xuICB2YXIgaSQsIHg7XG4gIGZvciAoaSQgPSB4cy5sZW5ndGggLSAxOyBpJCA+PSAwOyAtLWkkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBtZW1vID0gZih4LCBtZW1vKTtcbiAgfVxuICByZXR1cm4gbWVtbztcbn0pO1xuZm9sZHIxID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgcmV0dXJuIGZvbGRyKGYsIHhzW3hzLmxlbmd0aCAtIDFdLCB4cy5zbGljZSgwLCAtMSkpO1xufSk7XG51bmZvbGRyID0gY3VycnkkKGZ1bmN0aW9uKGYsIGIpe1xuICB2YXIgcmVzdWx0LCB4LCB0aGF0O1xuICByZXN1bHQgPSBbXTtcbiAgeCA9IGI7XG4gIHdoaWxlICgodGhhdCA9IGYoeCkpICE9IG51bGwpIHtcbiAgICByZXN1bHQucHVzaCh0aGF0WzBdKTtcbiAgICB4ID0gdGhhdFsxXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5jb25jYXQgPSBmdW5jdGlvbih4c3Mpe1xuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCB4c3MpO1xufTtcbmNvbmNhdE1hcCA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciB4O1xuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCAoZnVuY3Rpb24oKXtcbiAgICB2YXIgaSQsIHJlZiQsIGxlbiQsIHJlc3VsdHMkID0gW107XG4gICAgZm9yIChpJCA9IDAsIGxlbiQgPSAocmVmJCA9IHhzKS5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgICAgeCA9IHJlZiRbaSRdO1xuICAgICAgcmVzdWx0cyQucHVzaChmKHgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMkO1xuICB9KCkpKTtcbn0pO1xuZmxhdHRlbiA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIHg7XG4gIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIChmdW5jdGlvbigpe1xuICAgIHZhciBpJCwgcmVmJCwgbGVuJCwgcmVzdWx0cyQgPSBbXTtcbiAgICBmb3IgKGkkID0gMCwgbGVuJCA9IChyZWYkID0geHMpLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgICB4ID0gcmVmJFtpJF07XG4gICAgICBpZiAodG9TdHJpbmckLmNhbGwoeCkuc2xpY2UoOCwgLTEpID09PSAnQXJyYXknKSB7XG4gICAgICAgIHJlc3VsdHMkLnB1c2goZmxhdHRlbih4KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzJC5wdXNoKHgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cyQ7XG4gIH0oKSkpO1xufTtcbmRpZmZlcmVuY2UgPSBmdW5jdGlvbih4cyl7XG4gIHZhciB5c3MsIHJlcyQsIGkkLCB0byQsIHJlc3VsdHMsIGxlbiQsIHgsIGokLCBsZW4xJCwgeXM7XG4gIHJlcyQgPSBbXTtcbiAgZm9yIChpJCA9IDEsIHRvJCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkkIDwgdG8kOyArK2kkKSB7XG4gICAgcmVzJC5wdXNoKGFyZ3VtZW50c1tpJF0pO1xuICB9XG4gIHlzcyA9IHJlcyQ7XG4gIHJlc3VsdHMgPSBbXTtcbiAgb3V0ZXI6IGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGZvciAoaiQgPSAwLCBsZW4xJCA9IHlzcy5sZW5ndGg7IGokIDwgbGVuMSQ7ICsraiQpIHtcbiAgICAgIHlzID0geXNzW2okXTtcbiAgICAgIGlmIChpbiQoeCwgeXMpKSB7XG4gICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHRzLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59O1xuaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oeHMpe1xuICB2YXIgeXNzLCByZXMkLCBpJCwgdG8kLCByZXN1bHRzLCBsZW4kLCB4LCBqJCwgbGVuMSQsIHlzO1xuICByZXMkID0gW107XG4gIGZvciAoaSQgPSAxLCB0byQgPSBhcmd1bWVudHMubGVuZ3RoOyBpJCA8IHRvJDsgKytpJCkge1xuICAgIHJlcyQucHVzaChhcmd1bWVudHNbaSRdKTtcbiAgfVxuICB5c3MgPSByZXMkO1xuICByZXN1bHRzID0gW107XG4gIG91dGVyOiBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBmb3IgKGokID0gMCwgbGVuMSQgPSB5c3MubGVuZ3RoOyBqJCA8IGxlbjEkOyArK2okKSB7XG4gICAgICB5cyA9IHlzc1tqJF07XG4gICAgICBpZiAoIWluJCh4LCB5cykpIHtcbiAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdHMucHVzaCh4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn07XG51bmlvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciB4c3MsIHJlcyQsIGkkLCB0byQsIHJlc3VsdHMsIGxlbiQsIHhzLCBqJCwgbGVuMSQsIHg7XG4gIHJlcyQgPSBbXTtcbiAgZm9yIChpJCA9IDAsIHRvJCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkkIDwgdG8kOyArK2kkKSB7XG4gICAgcmVzJC5wdXNoKGFyZ3VtZW50c1tpJF0pO1xuICB9XG4gIHhzcyA9IHJlcyQ7XG4gIHJlc3VsdHMgPSBbXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4c3MubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4cyA9IHhzc1tpJF07XG4gICAgZm9yIChqJCA9IDAsIGxlbjEkID0geHMubGVuZ3RoOyBqJCA8IGxlbjEkOyArK2okKSB7XG4gICAgICB4ID0geHNbaiRdO1xuICAgICAgaWYgKCFpbiQoeCwgcmVzdWx0cykpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn07XG5jb3VudEJ5ID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgdmFyIHJlc3VsdHMsIGkkLCBsZW4kLCB4LCBrZXk7XG4gIHJlc3VsdHMgPSB7fTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAga2V5ID0gZih4KTtcbiAgICBpZiAoa2V5IGluIHJlc3VsdHMpIHtcbiAgICAgIHJlc3VsdHNba2V5XSArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRzW2tleV0gPSAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn0pO1xuZ3JvdXBCeSA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciByZXN1bHRzLCBpJCwgbGVuJCwgeCwga2V5O1xuICByZXN1bHRzID0ge307XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGtleSA9IGYoeCk7XG4gICAgaWYgKGtleSBpbiByZXN1bHRzKSB7XG4gICAgICByZXN1bHRzW2tleV0ucHVzaCh4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0c1trZXldID0gW3hdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn0pO1xuYW5kTGlzdCA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoIXgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xub3JMaXN0ID0gZnVuY3Rpb24oeHMpe1xuICB2YXIgaSQsIGxlbiQsIHg7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmICh4KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbmFueSA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgeDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgaWYgKGYoeCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KTtcbmFsbCA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgeDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgaWYgKCFmKHgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5zb3J0ID0gZnVuY3Rpb24oeHMpe1xuICByZXR1cm4geHMuY29uY2F0KCkuc29ydChmdW5jdGlvbih4LCB5KXtcbiAgICBpZiAoeCA+IHkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoeCA8IHkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn07XG5zb3J0V2l0aCA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHJldHVybiB4cy5jb25jYXQoKS5zb3J0KGYpO1xufSk7XG5zb3J0QnkgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICByZXR1cm4geHMuY29uY2F0KCkuc29ydChmdW5jdGlvbih4LCB5KXtcbiAgICBpZiAoZih4KSA+IGYoeSkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZih4KSA8IGYoeSkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn0pO1xuc3VtID0gZnVuY3Rpb24oeHMpe1xuICB2YXIgcmVzdWx0LCBpJCwgbGVuJCwgeDtcbiAgcmVzdWx0ID0gMDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgcmVzdWx0ICs9IHg7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5wcm9kdWN0ID0gZnVuY3Rpb24oeHMpe1xuICB2YXIgcmVzdWx0LCBpJCwgbGVuJCwgeDtcbiAgcmVzdWx0ID0gMTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgcmVzdWx0ICo9IHg7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5tZWFuID0gYXZlcmFnZSA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIHN1bSwgaSQsIGxlbiQsIHg7XG4gIHN1bSA9IDA7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIHN1bSArPSB4O1xuICB9XG4gIHJldHVybiBzdW0gLyB4cy5sZW5ndGg7XG59O1xubWF4aW11bSA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIG1heCwgaSQsIHJlZiQsIGxlbiQsIHg7XG4gIG1heCA9IHhzWzBdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IChyZWYkID0geHMuc2xpY2UoMSkpLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHJlZiRbaSRdO1xuICAgIGlmICh4ID4gbWF4KSB7XG4gICAgICBtYXggPSB4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF4O1xufTtcbm1pbmltdW0gPSBmdW5jdGlvbih4cyl7XG4gIHZhciBtaW4sIGkkLCByZWYkLCBsZW4kLCB4O1xuICBtaW4gPSB4c1swXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSAocmVmJCA9IHhzLnNsaWNlKDEpKS5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSByZWYkW2kkXTtcbiAgICBpZiAoeCA8IG1pbikge1xuICAgICAgbWluID0geDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbjtcbn07XG5tYXhpbXVtQnkgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgbWF4LCBpJCwgcmVmJCwgbGVuJCwgeDtcbiAgbWF4ID0geHNbMF07XG4gIGZvciAoaSQgPSAwLCBsZW4kID0gKHJlZiQgPSB4cy5zbGljZSgxKSkubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0gcmVmJFtpJF07XG4gICAgaWYgKGYoeCkgPiBmKG1heCkpIHtcbiAgICAgIG1heCA9IHg7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXg7XG59KTtcbm1pbmltdW1CeSA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciBtaW4sIGkkLCByZWYkLCBsZW4kLCB4O1xuICBtaW4gPSB4c1swXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSAocmVmJCA9IHhzLnNsaWNlKDEpKS5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSByZWYkW2kkXTtcbiAgICBpZiAoZih4KSA8IGYobWluKSkge1xuICAgICAgbWluID0geDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbjtcbn0pO1xuc2NhbiA9IHNjYW5sID0gY3VycnkkKGZ1bmN0aW9uKGYsIG1lbW8sIHhzKXtcbiAgdmFyIGxhc3QsIHg7XG4gIGxhc3QgPSBtZW1vO1xuICByZXR1cm4gW21lbW9dLmNvbmNhdCgoZnVuY3Rpb24oKXtcbiAgICB2YXIgaSQsIHJlZiQsIGxlbiQsIHJlc3VsdHMkID0gW107XG4gICAgZm9yIChpJCA9IDAsIGxlbiQgPSAocmVmJCA9IHhzKS5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgICAgeCA9IHJlZiRbaSRdO1xuICAgICAgcmVzdWx0cyQucHVzaChsYXN0ID0gZihsYXN0LCB4KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzJDtcbiAgfSgpKSk7XG59KTtcbnNjYW4xID0gc2NhbmwxID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgaWYgKCF4cy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIHNjYW4oZiwgeHNbMF0sIHhzLnNsaWNlKDEpKTtcbn0pO1xuc2NhbnIgPSBjdXJyeSQoZnVuY3Rpb24oZiwgbWVtbywgeHMpe1xuICB4cyA9IHhzLmNvbmNhdCgpLnJldmVyc2UoKTtcbiAgcmV0dXJuIHNjYW4oZiwgbWVtbywgeHMpLnJldmVyc2UoKTtcbn0pO1xuc2NhbnIxID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgaWYgKCF4cy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgeHMgPSB4cy5jb25jYXQoKS5yZXZlcnNlKCk7XG4gIHJldHVybiBzY2FuKGYsIHhzWzBdLCB4cy5zbGljZSgxKSkucmV2ZXJzZSgpO1xufSk7XG5zbGljZSA9IGN1cnJ5JChmdW5jdGlvbih4LCB5LCB4cyl7XG4gIHJldHVybiB4cy5zbGljZSh4LCB5KTtcbn0pO1xudGFrZSA9IGN1cnJ5JChmdW5jdGlvbihuLCB4cyl7XG4gIGlmIChuIDw9IDApIHtcbiAgICByZXR1cm4geHMuc2xpY2UoMCwgMCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHhzLnNsaWNlKDAsIG4pO1xuICB9XG59KTtcbmRyb3AgPSBjdXJyeSQoZnVuY3Rpb24obiwgeHMpe1xuICBpZiAobiA8PSAwKSB7XG4gICAgcmV0dXJuIHhzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4cy5zbGljZShuKTtcbiAgfVxufSk7XG5zcGxpdEF0ID0gY3VycnkkKGZ1bmN0aW9uKG4sIHhzKXtcbiAgcmV0dXJuIFt0YWtlKG4sIHhzKSwgZHJvcChuLCB4cyldO1xufSk7XG50YWtlV2hpbGUgPSBjdXJyeSQoZnVuY3Rpb24ocCwgeHMpe1xuICB2YXIgbGVuLCBpO1xuICBsZW4gPSB4cy5sZW5ndGg7XG4gIGlmICghbGVuKSB7XG4gICAgcmV0dXJuIHhzO1xuICB9XG4gIGkgPSAwO1xuICB3aGlsZSAoaSA8IGxlbiAmJiBwKHhzW2ldKSkge1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4geHMuc2xpY2UoMCwgaSk7XG59KTtcbmRyb3BXaGlsZSA9IGN1cnJ5JChmdW5jdGlvbihwLCB4cyl7XG4gIHZhciBsZW4sIGk7XG4gIGxlbiA9IHhzLmxlbmd0aDtcbiAgaWYgKCFsZW4pIHtcbiAgICByZXR1cm4geHM7XG4gIH1cbiAgaSA9IDA7XG4gIHdoaWxlIChpIDwgbGVuICYmIHAoeHNbaV0pKSB7XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiB4cy5zbGljZShpKTtcbn0pO1xuc3BhbiA9IGN1cnJ5JChmdW5jdGlvbihwLCB4cyl7XG4gIHJldHVybiBbdGFrZVdoaWxlKHAsIHhzKSwgZHJvcFdoaWxlKHAsIHhzKV07XG59KTtcbmJyZWFrTGlzdCA9IGN1cnJ5JChmdW5jdGlvbihwLCB4cyl7XG4gIHJldHVybiBzcGFuKGNvbXBvc2UkKHAsIG5vdCQpLCB4cyk7XG59KTtcbnppcCA9IGN1cnJ5JChmdW5jdGlvbih4cywgeXMpe1xuICB2YXIgcmVzdWx0LCBsZW4sIGkkLCBsZW4kLCBpLCB4O1xuICByZXN1bHQgPSBbXTtcbiAgbGVuID0geXMubGVuZ3RoO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgaSA9IGkkO1xuICAgIHggPSB4c1tpJF07XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKFt4LCB5c1tpXV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbnppcFdpdGggPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMsIHlzKXtcbiAgdmFyIHJlc3VsdCwgbGVuLCBpJCwgbGVuJCwgaSwgeDtcbiAgcmVzdWx0ID0gW107XG4gIGxlbiA9IHlzLmxlbmd0aDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIGkgPSBpJDtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmIChpID09PSBsZW4pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChmKHgsIHlzW2ldKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuemlwQWxsID0gZnVuY3Rpb24oKXtcbiAgdmFyIHhzcywgcmVzJCwgaSQsIHRvJCwgbWluTGVuZ3RoLCBsZW4kLCB4cywgcmVmJCwgaSwgbHJlc3VsdCQsIGokLCByZXN1bHRzJCA9IFtdO1xuICByZXMkID0gW107XG4gIGZvciAoaSQgPSAwLCB0byQgPSBhcmd1bWVudHMubGVuZ3RoOyBpJCA8IHRvJDsgKytpJCkge1xuICAgIHJlcyQucHVzaChhcmd1bWVudHNbaSRdKTtcbiAgfVxuICB4c3MgPSByZXMkO1xuICBtaW5MZW5ndGggPSB1bmRlZmluZWQ7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHNzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeHMgPSB4c3NbaSRdO1xuICAgIG1pbkxlbmd0aCA8PSAocmVmJCA9IHhzLmxlbmd0aCkgfHwgKG1pbkxlbmd0aCA9IHJlZiQpO1xuICB9XG4gIGZvciAoaSQgPSAwOyBpJCA8IG1pbkxlbmd0aDsgKytpJCkge1xuICAgIGkgPSBpJDtcbiAgICBscmVzdWx0JCA9IFtdO1xuICAgIGZvciAoaiQgPSAwLCBsZW4kID0geHNzLmxlbmd0aDsgaiQgPCBsZW4kOyArK2okKSB7XG4gICAgICB4cyA9IHhzc1tqJF07XG4gICAgICBscmVzdWx0JC5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmVzdWx0cyQucHVzaChscmVzdWx0JCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufTtcbnppcEFsbFdpdGggPSBmdW5jdGlvbihmKXtcbiAgdmFyIHhzcywgcmVzJCwgaSQsIHRvJCwgbWluTGVuZ3RoLCBsZW4kLCB4cywgcmVmJCwgaSwgcmVzdWx0cyQgPSBbXTtcbiAgcmVzJCA9IFtdO1xuICBmb3IgKGkkID0gMSwgdG8kID0gYXJndW1lbnRzLmxlbmd0aDsgaSQgPCB0byQ7ICsraSQpIHtcbiAgICByZXMkLnB1c2goYXJndW1lbnRzW2kkXSk7XG4gIH1cbiAgeHNzID0gcmVzJDtcbiAgbWluTGVuZ3RoID0gdW5kZWZpbmVkO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzcy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHhzID0geHNzW2kkXTtcbiAgICBtaW5MZW5ndGggPD0gKHJlZiQgPSB4cy5sZW5ndGgpIHx8IChtaW5MZW5ndGggPSByZWYkKTtcbiAgfVxuICBmb3IgKGkkID0gMDsgaSQgPCBtaW5MZW5ndGg7ICsraSQpIHtcbiAgICBpID0gaSQ7XG4gICAgcmVzdWx0cyQucHVzaChmLmFwcGx5KG51bGwsIChmbiQoKSkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG4gIGZ1bmN0aW9uIGZuJCgpe1xuICAgIHZhciBpJCwgcmVmJCwgbGVuJCwgcmVzdWx0cyQgPSBbXTtcbiAgICBmb3IgKGkkID0gMCwgbGVuJCA9IChyZWYkID0geHNzKS5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgICAgeHMgPSByZWYkW2kkXTtcbiAgICAgIHJlc3VsdHMkLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cyQ7XG4gIH1cbn07XG5hdCA9IGN1cnJ5JChmdW5jdGlvbihuLCB4cyl7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiB4c1t4cy5sZW5ndGggKyBuXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geHNbbl07XG4gIH1cbn0pO1xuZWxlbUluZGV4ID0gY3VycnkkKGZ1bmN0aW9uKGVsLCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgaSwgeDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIGkgPSBpJDtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmICh4ID09PSBlbCkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59KTtcbmVsZW1JbmRpY2VzID0gY3VycnkkKGZ1bmN0aW9uKGVsLCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgaSwgeCwgcmVzdWx0cyQgPSBbXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIGkgPSBpJDtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmICh4ID09PSBlbCkge1xuICAgICAgcmVzdWx0cyQucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufSk7XG5maW5kSW5kZXggPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgaSQsIGxlbiQsIGksIHg7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICBpID0gaSQ7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoZih4KSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59KTtcbmZpbmRJbmRpY2VzID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgdmFyIGkkLCBsZW4kLCBpLCB4LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgaSA9IGkkO1xuICAgIHggPSB4c1tpJF07XG4gICAgaWYgKGYoeCkpIHtcbiAgICAgIHJlc3VsdHMkLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVhY2g6IGVhY2gsXG4gIG1hcDogbWFwLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgY29tcGFjdDogY29tcGFjdCxcbiAgcmVqZWN0OiByZWplY3QsXG4gIHJlbW92ZTogcmVtb3ZlLFxuICBwYXJ0aXRpb246IHBhcnRpdGlvbixcbiAgZmluZDogZmluZCxcbiAgaGVhZDogaGVhZCxcbiAgZmlyc3Q6IGZpcnN0LFxuICB0YWlsOiB0YWlsLFxuICBsYXN0OiBsYXN0LFxuICBpbml0aWFsOiBpbml0aWFsLFxuICBlbXB0eTogZW1wdHksXG4gIHJldmVyc2U6IHJldmVyc2UsXG4gIGRpZmZlcmVuY2U6IGRpZmZlcmVuY2UsXG4gIGludGVyc2VjdGlvbjogaW50ZXJzZWN0aW9uLFxuICB1bmlvbjogdW5pb24sXG4gIGNvdW50Qnk6IGNvdW50QnksXG4gIGdyb3VwQnk6IGdyb3VwQnksXG4gIGZvbGQ6IGZvbGQsXG4gIGZvbGQxOiBmb2xkMSxcbiAgZm9sZGw6IGZvbGRsLFxuICBmb2xkbDE6IGZvbGRsMSxcbiAgZm9sZHI6IGZvbGRyLFxuICBmb2xkcjE6IGZvbGRyMSxcbiAgdW5mb2xkcjogdW5mb2xkcixcbiAgYW5kTGlzdDogYW5kTGlzdCxcbiAgb3JMaXN0OiBvckxpc3QsXG4gIGFueTogYW55LFxuICBhbGw6IGFsbCxcbiAgdW5pcXVlOiB1bmlxdWUsXG4gIHVuaXF1ZUJ5OiB1bmlxdWVCeSxcbiAgc29ydDogc29ydCxcbiAgc29ydFdpdGg6IHNvcnRXaXRoLFxuICBzb3J0Qnk6IHNvcnRCeSxcbiAgc3VtOiBzdW0sXG4gIHByb2R1Y3Q6IHByb2R1Y3QsXG4gIG1lYW46IG1lYW4sXG4gIGF2ZXJhZ2U6IGF2ZXJhZ2UsXG4gIGNvbmNhdDogY29uY2F0LFxuICBjb25jYXRNYXA6IGNvbmNhdE1hcCxcbiAgZmxhdHRlbjogZmxhdHRlbixcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWF4aW11bUJ5OiBtYXhpbXVtQnksXG4gIG1pbmltdW1CeTogbWluaW11bUJ5LFxuICBzY2FuOiBzY2FuLFxuICBzY2FuMTogc2NhbjEsXG4gIHNjYW5sOiBzY2FubCxcbiAgc2NhbmwxOiBzY2FubDEsXG4gIHNjYW5yOiBzY2FucixcbiAgc2NhbnIxOiBzY2FucjEsXG4gIHNsaWNlOiBzbGljZSxcbiAgdGFrZTogdGFrZSxcbiAgZHJvcDogZHJvcCxcbiAgc3BsaXRBdDogc3BsaXRBdCxcbiAgdGFrZVdoaWxlOiB0YWtlV2hpbGUsXG4gIGRyb3BXaGlsZTogZHJvcFdoaWxlLFxuICBzcGFuOiBzcGFuLFxuICBicmVha0xpc3Q6IGJyZWFrTGlzdCxcbiAgemlwOiB6aXAsXG4gIHppcFdpdGg6IHppcFdpdGgsXG4gIHppcEFsbDogemlwQWxsLFxuICB6aXBBbGxXaXRoOiB6aXBBbGxXaXRoLFxuICBhdDogYXQsXG4gIGVsZW1JbmRleDogZWxlbUluZGV4LFxuICBlbGVtSW5kaWNlczogZWxlbUluZGljZXMsXG4gIGZpbmRJbmRleDogZmluZEluZGV4LFxuICBmaW5kSW5kaWNlczogZmluZEluZGljZXNcbn07XG5mdW5jdGlvbiBjdXJyeSQoZiwgYm91bmQpe1xuICB2YXIgY29udGV4dCxcbiAgX2N1cnJ5ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHJldHVybiBmLmxlbmd0aCA+IDEgPyBmdW5jdGlvbigpe1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3MgPyBhcmdzLmNvbmNhdCgpIDogW107XG4gICAgICBjb250ZXh0ID0gYm91bmQgPyBjb250ZXh0IHx8IHRoaXMgOiB0aGlzO1xuICAgICAgcmV0dXJuIHBhcmFtcy5wdXNoLmFwcGx5KHBhcmFtcywgYXJndW1lbnRzKSA8XG4gICAgICAgICAgZi5sZW5ndGggJiYgYXJndW1lbnRzLmxlbmd0aCA/XG4gICAgICAgIF9jdXJyeS5jYWxsKGNvbnRleHQsIHBhcmFtcykgOiBmLmFwcGx5KGNvbnRleHQsIHBhcmFtcyk7XG4gICAgfSA6IGY7XG4gIH07XG4gIHJldHVybiBfY3VycnkoKTtcbn1cbmZ1bmN0aW9uIGluJCh4LCB4cyl7XG4gIHZhciBpID0gLTEsIGwgPSB4cy5sZW5ndGggPj4+IDA7XG4gIHdoaWxlICgrK2kgPCBsKSBpZiAoeCA9PT0geHNbaV0pIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBjb21wb3NlJCgpIHtcbiAgdmFyIGZ1bmN0aW9ucyA9IGFyZ3VtZW50cztcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBpLCByZXN1bHQ7XG4gICAgcmVzdWx0ID0gZnVuY3Rpb25zWzBdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgZm9yIChpID0gMTsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgcmVzdWx0ID0gZnVuY3Rpb25zW2ldKHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5mdW5jdGlvbiBub3QkKHgpeyByZXR1cm4gIXg7IH0iLCIvLyBHZW5lcmF0ZWQgYnkgTGl2ZVNjcmlwdCAxLjYuMFxudmFyIG1heCwgbWluLCBuZWdhdGUsIGFicywgc2lnbnVtLCBxdW90LCByZW0sIGRpdiwgbW9kLCByZWNpcCwgcGksIHRhdSwgZXhwLCBzcXJ0LCBsbiwgcG93LCBzaW4sIHRhbiwgY29zLCBhc2luLCBhY29zLCBhdGFuLCBhdGFuMiwgdHJ1bmNhdGUsIHJvdW5kLCBjZWlsaW5nLCBmbG9vciwgaXNJdE5hTiwgZXZlbiwgb2RkLCBnY2QsIGxjbTtcbm1heCA9IGN1cnJ5JChmdW5jdGlvbih4JCwgeSQpe1xuICByZXR1cm4geCQgPiB5JCA/IHgkIDogeSQ7XG59KTtcbm1pbiA9IGN1cnJ5JChmdW5jdGlvbih4JCwgeSQpe1xuICByZXR1cm4geCQgPCB5JCA/IHgkIDogeSQ7XG59KTtcbm5lZ2F0ZSA9IGZ1bmN0aW9uKHgpe1xuICByZXR1cm4gLXg7XG59O1xuYWJzID0gTWF0aC5hYnM7XG5zaWdudW0gPSBmdW5jdGlvbih4KXtcbiAgaWYgKHggPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKHggPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5xdW90ID0gY3VycnkkKGZ1bmN0aW9uKHgsIHkpe1xuICByZXR1cm4gfn4oeCAvIHkpO1xufSk7XG5yZW0gPSBjdXJyeSQoZnVuY3Rpb24oeCQsIHkkKXtcbiAgcmV0dXJuIHgkICUgeSQ7XG59KTtcbmRpdiA9IGN1cnJ5JChmdW5jdGlvbih4LCB5KXtcbiAgcmV0dXJuIE1hdGguZmxvb3IoeCAvIHkpO1xufSk7XG5tb2QgPSBjdXJyeSQoZnVuY3Rpb24oeCQsIHkkKXtcbiAgdmFyIHJlZiQ7XG4gIHJldHVybiAoKHgkKSAlIChyZWYkID0geSQpICsgcmVmJCkgJSByZWYkO1xufSk7XG5yZWNpcCA9IChmdW5jdGlvbihpdCl7XG4gIHJldHVybiAxIC8gaXQ7XG59KTtcbnBpID0gTWF0aC5QSTtcbnRhdSA9IHBpICogMjtcbmV4cCA9IE1hdGguZXhwO1xuc3FydCA9IE1hdGguc3FydDtcbmxuID0gTWF0aC5sb2c7XG5wb3cgPSBjdXJyeSQoZnVuY3Rpb24oeCQsIHkkKXtcbiAgcmV0dXJuIE1hdGgucG93KHgkLCB5JCk7XG59KTtcbnNpbiA9IE1hdGguc2luO1xudGFuID0gTWF0aC50YW47XG5jb3MgPSBNYXRoLmNvcztcbmFzaW4gPSBNYXRoLmFzaW47XG5hY29zID0gTWF0aC5hY29zO1xuYXRhbiA9IE1hdGguYXRhbjtcbmF0YW4yID0gY3VycnkkKGZ1bmN0aW9uKHgsIHkpe1xuICByZXR1cm4gTWF0aC5hdGFuMih4LCB5KTtcbn0pO1xudHJ1bmNhdGUgPSBmdW5jdGlvbih4KXtcbiAgcmV0dXJuIH5+eDtcbn07XG5yb3VuZCA9IE1hdGgucm91bmQ7XG5jZWlsaW5nID0gTWF0aC5jZWlsO1xuZmxvb3IgPSBNYXRoLmZsb29yO1xuaXNJdE5hTiA9IGZ1bmN0aW9uKHgpe1xuICByZXR1cm4geCAhPT0geDtcbn07XG5ldmVuID0gZnVuY3Rpb24oeCl7XG4gIHJldHVybiB4ICUgMiA9PT0gMDtcbn07XG5vZGQgPSBmdW5jdGlvbih4KXtcbiAgcmV0dXJuIHggJSAyICE9PSAwO1xufTtcbmdjZCA9IGN1cnJ5JChmdW5jdGlvbih4LCB5KXtcbiAgdmFyIHo7XG4gIHggPSBNYXRoLmFicyh4KTtcbiAgeSA9IE1hdGguYWJzKHkpO1xuICB3aGlsZSAoeSAhPT0gMCkge1xuICAgIHogPSB4ICUgeTtcbiAgICB4ID0geTtcbiAgICB5ID0gejtcbiAgfVxuICByZXR1cm4geDtcbn0pO1xubGNtID0gY3VycnkkKGZ1bmN0aW9uKHgsIHkpe1xuICByZXR1cm4gTWF0aC5hYnMoTWF0aC5mbG9vcih4IC8gZ2NkKHgsIHkpICogeSkpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWF4OiBtYXgsXG4gIG1pbjogbWluLFxuICBuZWdhdGU6IG5lZ2F0ZSxcbiAgYWJzOiBhYnMsXG4gIHNpZ251bTogc2lnbnVtLFxuICBxdW90OiBxdW90LFxuICByZW06IHJlbSxcbiAgZGl2OiBkaXYsXG4gIG1vZDogbW9kLFxuICByZWNpcDogcmVjaXAsXG4gIHBpOiBwaSxcbiAgdGF1OiB0YXUsXG4gIGV4cDogZXhwLFxuICBzcXJ0OiBzcXJ0LFxuICBsbjogbG4sXG4gIHBvdzogcG93LFxuICBzaW46IHNpbixcbiAgdGFuOiB0YW4sXG4gIGNvczogY29zLFxuICBhY29zOiBhY29zLFxuICBhc2luOiBhc2luLFxuICBhdGFuOiBhdGFuLFxuICBhdGFuMjogYXRhbjIsXG4gIHRydW5jYXRlOiB0cnVuY2F0ZSxcbiAgcm91bmQ6IHJvdW5kLFxuICBjZWlsaW5nOiBjZWlsaW5nLFxuICBmbG9vcjogZmxvb3IsXG4gIGlzSXROYU46IGlzSXROYU4sXG4gIGV2ZW46IGV2ZW4sXG4gIG9kZDogb2RkLFxuICBnY2Q6IGdjZCxcbiAgbGNtOiBsY21cbn07XG5mdW5jdGlvbiBjdXJyeSQoZiwgYm91bmQpe1xuICB2YXIgY29udGV4dCxcbiAgX2N1cnJ5ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHJldHVybiBmLmxlbmd0aCA+IDEgPyBmdW5jdGlvbigpe1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3MgPyBhcmdzLmNvbmNhdCgpIDogW107XG4gICAgICBjb250ZXh0ID0gYm91bmQgPyBjb250ZXh0IHx8IHRoaXMgOiB0aGlzO1xuICAgICAgcmV0dXJuIHBhcmFtcy5wdXNoLmFwcGx5KHBhcmFtcywgYXJndW1lbnRzKSA8XG4gICAgICAgICAgZi5sZW5ndGggJiYgYXJndW1lbnRzLmxlbmd0aCA/XG4gICAgICAgIF9jdXJyeS5jYWxsKGNvbnRleHQsIHBhcmFtcykgOiBmLmFwcGx5KGNvbnRleHQsIHBhcmFtcyk7XG4gICAgfSA6IGY7XG4gIH07XG4gIHJldHVybiBfY3VycnkoKTtcbn0iLCIvLyBHZW5lcmF0ZWQgYnkgTGl2ZVNjcmlwdCAxLjYuMFxudmFyIHZhbHVlcywga2V5cywgcGFpcnNUb09iaiwgb2JqVG9QYWlycywgbGlzdHNUb09iaiwgb2JqVG9MaXN0cywgZW1wdHksIGVhY2gsIG1hcCwgY29tcGFjdCwgZmlsdGVyLCByZWplY3QsIHBhcnRpdGlvbiwgZmluZDtcbnZhbHVlcyA9IGZ1bmN0aW9uKG9iamVjdCl7XG4gIHZhciBpJCwgeCwgcmVzdWx0cyQgPSBbXTtcbiAgZm9yIChpJCBpbiBvYmplY3QpIHtcbiAgICB4ID0gb2JqZWN0W2kkXTtcbiAgICByZXN1bHRzJC5wdXNoKHgpO1xuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn07XG5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KXtcbiAgdmFyIHgsIHJlc3VsdHMkID0gW107XG4gIGZvciAoeCBpbiBvYmplY3QpIHtcbiAgICByZXN1bHRzJC5wdXNoKHgpO1xuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn07XG5wYWlyc1RvT2JqID0gZnVuY3Rpb24ob2JqZWN0KXtcbiAgdmFyIGkkLCBsZW4kLCB4LCByZXN1bHRPYmokID0ge307XG4gIGZvciAoaSQgPSAwLCBsZW4kID0gb2JqZWN0Lmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IG9iamVjdFtpJF07XG4gICAgcmVzdWx0T2JqJFt4WzBdXSA9IHhbMV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdE9iaiQ7XG59O1xub2JqVG9QYWlycyA9IGZ1bmN0aW9uKG9iamVjdCl7XG4gIHZhciBrZXksIHZhbHVlLCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICAgIHJlc3VsdHMkLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59O1xubGlzdHNUb09iaiA9IGN1cnJ5JChmdW5jdGlvbihrZXlzLCB2YWx1ZXMpe1xuICB2YXIgaSQsIGxlbiQsIGksIGtleSwgcmVzdWx0T2JqJCA9IHt9O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IGtleXMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICBpID0gaSQ7XG4gICAga2V5ID0ga2V5c1tpJF07XG4gICAgcmVzdWx0T2JqJFtrZXldID0gdmFsdWVzW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHRPYmokO1xufSk7XG5vYmpUb0xpc3RzID0gZnVuY3Rpb24ob2JqZWN0KXtcbiAgdmFyIGtleXMsIHZhbHVlcywga2V5LCB2YWx1ZTtcbiAga2V5cyA9IFtdO1xuICB2YWx1ZXMgPSBbXTtcbiAgZm9yIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIFtrZXlzLCB2YWx1ZXNdO1xufTtcbmVtcHR5ID0gZnVuY3Rpb24ob2JqZWN0KXtcbiAgdmFyIHg7XG4gIGZvciAoeCBpbiBvYmplY3QpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuZWFjaCA9IGN1cnJ5JChmdW5jdGlvbihmLCBvYmplY3Qpe1xuICB2YXIgaSQsIHg7XG4gIGZvciAoaSQgaW4gb2JqZWN0KSB7XG4gICAgeCA9IG9iamVjdFtpJF07XG4gICAgZih4KTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufSk7XG5tYXAgPSBjdXJyeSQoZnVuY3Rpb24oZiwgb2JqZWN0KXtcbiAgdmFyIGssIHgsIHJlc3VsdE9iaiQgPSB7fTtcbiAgZm9yIChrIGluIG9iamVjdCkge1xuICAgIHggPSBvYmplY3Rba107XG4gICAgcmVzdWx0T2JqJFtrXSA9IGYoeCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdE9iaiQ7XG59KTtcbmNvbXBhY3QgPSBmdW5jdGlvbihvYmplY3Qpe1xuICB2YXIgaywgeCwgcmVzdWx0T2JqJCA9IHt9O1xuICBmb3IgKGsgaW4gb2JqZWN0KSB7XG4gICAgeCA9IG9iamVjdFtrXTtcbiAgICBpZiAoeCkge1xuICAgICAgcmVzdWx0T2JqJFtrXSA9IHg7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRPYmokO1xufTtcbmZpbHRlciA9IGN1cnJ5JChmdW5jdGlvbihmLCBvYmplY3Qpe1xuICB2YXIgaywgeCwgcmVzdWx0T2JqJCA9IHt9O1xuICBmb3IgKGsgaW4gb2JqZWN0KSB7XG4gICAgeCA9IG9iamVjdFtrXTtcbiAgICBpZiAoZih4KSkge1xuICAgICAgcmVzdWx0T2JqJFtrXSA9IHg7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRPYmokO1xufSk7XG5yZWplY3QgPSBjdXJyeSQoZnVuY3Rpb24oZiwgb2JqZWN0KXtcbiAgdmFyIGssIHgsIHJlc3VsdE9iaiQgPSB7fTtcbiAgZm9yIChrIGluIG9iamVjdCkge1xuICAgIHggPSBvYmplY3Rba107XG4gICAgaWYgKCFmKHgpKSB7XG4gICAgICByZXN1bHRPYmokW2tdID0geDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdE9iaiQ7XG59KTtcbnBhcnRpdGlvbiA9IGN1cnJ5JChmdW5jdGlvbihmLCBvYmplY3Qpe1xuICB2YXIgcGFzc2VkLCBmYWlsZWQsIGssIHg7XG4gIHBhc3NlZCA9IHt9O1xuICBmYWlsZWQgPSB7fTtcbiAgZm9yIChrIGluIG9iamVjdCkge1xuICAgIHggPSBvYmplY3Rba107XG4gICAgKGYoeCkgPyBwYXNzZWQgOiBmYWlsZWQpW2tdID0geDtcbiAgfVxuICByZXR1cm4gW3Bhc3NlZCwgZmFpbGVkXTtcbn0pO1xuZmluZCA9IGN1cnJ5JChmdW5jdGlvbihmLCBvYmplY3Qpe1xuICB2YXIgaSQsIHg7XG4gIGZvciAoaSQgaW4gb2JqZWN0KSB7XG4gICAgeCA9IG9iamVjdFtpJF07XG4gICAgaWYgKGYoeCkpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmFsdWVzOiB2YWx1ZXMsXG4gIGtleXM6IGtleXMsXG4gIHBhaXJzVG9PYmo6IHBhaXJzVG9PYmosXG4gIG9ialRvUGFpcnM6IG9ialRvUGFpcnMsXG4gIGxpc3RzVG9PYmo6IGxpc3RzVG9PYmosXG4gIG9ialRvTGlzdHM6IG9ialRvTGlzdHMsXG4gIGVtcHR5OiBlbXB0eSxcbiAgZWFjaDogZWFjaCxcbiAgbWFwOiBtYXAsXG4gIGZpbHRlcjogZmlsdGVyLFxuICBjb21wYWN0OiBjb21wYWN0LFxuICByZWplY3Q6IHJlamVjdCxcbiAgcGFydGl0aW9uOiBwYXJ0aXRpb24sXG4gIGZpbmQ6IGZpbmRcbn07XG5mdW5jdGlvbiBjdXJyeSQoZiwgYm91bmQpe1xuICB2YXIgY29udGV4dCxcbiAgX2N1cnJ5ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHJldHVybiBmLmxlbmd0aCA+IDEgPyBmdW5jdGlvbigpe1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3MgPyBhcmdzLmNvbmNhdCgpIDogW107XG4gICAgICBjb250ZXh0ID0gYm91bmQgPyBjb250ZXh0IHx8IHRoaXMgOiB0aGlzO1xuICAgICAgcmV0dXJuIHBhcmFtcy5wdXNoLmFwcGx5KHBhcmFtcywgYXJndW1lbnRzKSA8XG4gICAgICAgICAgZi5sZW5ndGggJiYgYXJndW1lbnRzLmxlbmd0aCA/XG4gICAgICAgIF9jdXJyeS5jYWxsKGNvbnRleHQsIHBhcmFtcykgOiBmLmFwcGx5KGNvbnRleHQsIHBhcmFtcyk7XG4gICAgfSA6IGY7XG4gIH07XG4gIHJldHVybiBfY3VycnkoKTtcbn0iLCIvLyBHZW5lcmF0ZWQgYnkgTGl2ZVNjcmlwdCAxLjYuMFxudmFyIHNwbGl0LCBqb2luLCBsaW5lcywgdW5saW5lcywgd29yZHMsIHVud29yZHMsIGNoYXJzLCB1bmNoYXJzLCByZXZlcnNlLCByZXBlYXQsIGNhcGl0YWxpemUsIGNhbWVsaXplLCBkYXNoZXJpemU7XG5zcGxpdCA9IGN1cnJ5JChmdW5jdGlvbihzZXAsIHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoc2VwKTtcbn0pO1xuam9pbiA9IGN1cnJ5JChmdW5jdGlvbihzZXAsIHhzKXtcbiAgcmV0dXJuIHhzLmpvaW4oc2VwKTtcbn0pO1xubGluZXMgPSBmdW5jdGlvbihzdHIpe1xuICBpZiAoIXN0ci5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIHN0ci5zcGxpdCgnXFxuJyk7XG59O1xudW5saW5lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0LmpvaW4oJ1xcbicpO1xufTtcbndvcmRzID0gZnVuY3Rpb24oc3RyKXtcbiAgaWYgKCFzdHIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBzdHIuc3BsaXQoL1sgXSsvKTtcbn07XG51bndvcmRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQuam9pbignICcpO1xufTtcbmNoYXJzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQuc3BsaXQoJycpO1xufTtcbnVuY2hhcnMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdC5qb2luKCcnKTtcbn07XG5yZXZlcnNlID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xufTtcbnJlcGVhdCA9IGN1cnJ5JChmdW5jdGlvbihuLCBzdHIpe1xuICB2YXIgcmVzdWx0LCBpJDtcbiAgcmVzdWx0ID0gJyc7XG4gIGZvciAoaSQgPSAwOyBpJCA8IG47ICsraSQpIHtcbiAgICByZXN1bHQgKz0gc3RyO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcbmNhbWVsaXplID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQucmVwbGFjZSgvWy1fXSsoLik/L2csIGZ1bmN0aW9uKGFyZyQsIGMpe1xuICAgIHJldHVybiAoYyAhPSBudWxsID8gYyA6ICcnKS50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn07XG5kYXNoZXJpemUgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbXi1BLVpdKShbQS1aXSspL2csIGZ1bmN0aW9uKGFyZyQsIGxvd2VyLCB1cHBlcil7XG4gICAgcmV0dXJuIGxvd2VyICsgXCItXCIgKyAodXBwZXIubGVuZ3RoID4gMVxuICAgICAgPyB1cHBlclxuICAgICAgOiB1cHBlci50b0xvd2VyQ2FzZSgpKTtcbiAgfSkucmVwbGFjZSgvXihbQS1aXSspLywgZnVuY3Rpb24oYXJnJCwgdXBwZXIpe1xuICAgIGlmICh1cHBlci5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdXBwZXIgKyBcIi1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVwcGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9KTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3BsaXQ6IHNwbGl0LFxuICBqb2luOiBqb2luLFxuICBsaW5lczogbGluZXMsXG4gIHVubGluZXM6IHVubGluZXMsXG4gIHdvcmRzOiB3b3JkcyxcbiAgdW53b3JkczogdW53b3JkcyxcbiAgY2hhcnM6IGNoYXJzLFxuICB1bmNoYXJzOiB1bmNoYXJzLFxuICByZXZlcnNlOiByZXZlcnNlLFxuICByZXBlYXQ6IHJlcGVhdCxcbiAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcbiAgY2FtZWxpemU6IGNhbWVsaXplLFxuICBkYXNoZXJpemU6IGRhc2hlcml6ZVxufTtcbmZ1bmN0aW9uIGN1cnJ5JChmLCBib3VuZCl7XG4gIHZhciBjb250ZXh0LFxuICBfY3VycnkgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgcmV0dXJuIGYubGVuZ3RoID4gMSA/IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgcGFyYW1zID0gYXJncyA/IGFyZ3MuY29uY2F0KCkgOiBbXTtcbiAgICAgIGNvbnRleHQgPSBib3VuZCA/IGNvbnRleHQgfHwgdGhpcyA6IHRoaXM7XG4gICAgICByZXR1cm4gcGFyYW1zLnB1c2guYXBwbHkocGFyYW1zLCBhcmd1bWVudHMpIDxcbiAgICAgICAgICBmLmxlbmd0aCAmJiBhcmd1bWVudHMubGVuZ3RoID9cbiAgICAgICAgX2N1cnJ5LmNhbGwoY29udGV4dCwgcGFyYW1zKSA6IGYuYXBwbHkoY29udGV4dCwgcGFyYW1zKTtcbiAgICB9IDogZjtcbiAgfTtcbiAgcmV0dXJuIF9jdXJyeSgpO1xufSIsIi8vIEdlbmVyYXRlZCBieSBMaXZlU2NyaXB0IDEuNi4wXG52YXIgRnVuYywgTGlzdCwgT2JqLCBTdHIsIE51bSwgaWQsIGlzVHlwZSwgcmVwbGljYXRlLCBwcmVsdWRlLCB0b1N0cmluZyQgPSB7fS50b1N0cmluZztcbkZ1bmMgPSByZXF1aXJlKCcuL0Z1bmMuanMnKTtcbkxpc3QgPSByZXF1aXJlKCcuL0xpc3QuanMnKTtcbk9iaiA9IHJlcXVpcmUoJy4vT2JqLmpzJyk7XG5TdHIgPSByZXF1aXJlKCcuL1N0ci5qcycpO1xuTnVtID0gcmVxdWlyZSgnLi9OdW0uanMnKTtcbmlkID0gZnVuY3Rpb24oeCl7XG4gIHJldHVybiB4O1xufTtcbmlzVHlwZSA9IGN1cnJ5JChmdW5jdGlvbih0eXBlLCB4KXtcbiAgcmV0dXJuIHRvU3RyaW5nJC5jYWxsKHgpLnNsaWNlKDgsIC0xKSA9PT0gdHlwZTtcbn0pO1xucmVwbGljYXRlID0gY3VycnkkKGZ1bmN0aW9uKG4sIHgpe1xuICB2YXIgaSQsIHJlc3VsdHMkID0gW107XG4gIGZvciAoaSQgPSAwOyBpJCA8IG47ICsraSQpIHtcbiAgICByZXN1bHRzJC5wdXNoKHgpO1xuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn0pO1xuU3RyLmVtcHR5ID0gTGlzdC5lbXB0eTtcblN0ci5zbGljZSA9IExpc3Quc2xpY2U7XG5TdHIudGFrZSA9IExpc3QudGFrZTtcblN0ci5kcm9wID0gTGlzdC5kcm9wO1xuU3RyLnNwbGl0QXQgPSBMaXN0LnNwbGl0QXQ7XG5TdHIudGFrZVdoaWxlID0gTGlzdC50YWtlV2hpbGU7XG5TdHIuZHJvcFdoaWxlID0gTGlzdC5kcm9wV2hpbGU7XG5TdHIuc3BhbiA9IExpc3Quc3BhbjtcblN0ci5icmVha1N0ciA9IExpc3QuYnJlYWtMaXN0O1xucHJlbHVkZSA9IHtcbiAgRnVuYzogRnVuYyxcbiAgTGlzdDogTGlzdCxcbiAgT2JqOiBPYmosXG4gIFN0cjogU3RyLFxuICBOdW06IE51bSxcbiAgaWQ6IGlkLFxuICBpc1R5cGU6IGlzVHlwZSxcbiAgcmVwbGljYXRlOiByZXBsaWNhdGVcbn07XG5wcmVsdWRlLmVhY2ggPSBMaXN0LmVhY2g7XG5wcmVsdWRlLm1hcCA9IExpc3QubWFwO1xucHJlbHVkZS5maWx0ZXIgPSBMaXN0LmZpbHRlcjtcbnByZWx1ZGUuY29tcGFjdCA9IExpc3QuY29tcGFjdDtcbnByZWx1ZGUucmVqZWN0ID0gTGlzdC5yZWplY3Q7XG5wcmVsdWRlLnBhcnRpdGlvbiA9IExpc3QucGFydGl0aW9uO1xucHJlbHVkZS5maW5kID0gTGlzdC5maW5kO1xucHJlbHVkZS5oZWFkID0gTGlzdC5oZWFkO1xucHJlbHVkZS5maXJzdCA9IExpc3QuZmlyc3Q7XG5wcmVsdWRlLnRhaWwgPSBMaXN0LnRhaWw7XG5wcmVsdWRlLmxhc3QgPSBMaXN0Lmxhc3Q7XG5wcmVsdWRlLmluaXRpYWwgPSBMaXN0LmluaXRpYWw7XG5wcmVsdWRlLmVtcHR5ID0gTGlzdC5lbXB0eTtcbnByZWx1ZGUucmV2ZXJzZSA9IExpc3QucmV2ZXJzZTtcbnByZWx1ZGUuZGlmZmVyZW5jZSA9IExpc3QuZGlmZmVyZW5jZTtcbnByZWx1ZGUuaW50ZXJzZWN0aW9uID0gTGlzdC5pbnRlcnNlY3Rpb247XG5wcmVsdWRlLnVuaW9uID0gTGlzdC51bmlvbjtcbnByZWx1ZGUuY291bnRCeSA9IExpc3QuY291bnRCeTtcbnByZWx1ZGUuZ3JvdXBCeSA9IExpc3QuZ3JvdXBCeTtcbnByZWx1ZGUuZm9sZCA9IExpc3QuZm9sZDtcbnByZWx1ZGUuZm9sZGwgPSBMaXN0LmZvbGRsO1xucHJlbHVkZS5mb2xkMSA9IExpc3QuZm9sZDE7XG5wcmVsdWRlLmZvbGRsMSA9IExpc3QuZm9sZGwxO1xucHJlbHVkZS5mb2xkciA9IExpc3QuZm9sZHI7XG5wcmVsdWRlLmZvbGRyMSA9IExpc3QuZm9sZHIxO1xucHJlbHVkZS51bmZvbGRyID0gTGlzdC51bmZvbGRyO1xucHJlbHVkZS5hbmRMaXN0ID0gTGlzdC5hbmRMaXN0O1xucHJlbHVkZS5vckxpc3QgPSBMaXN0Lm9yTGlzdDtcbnByZWx1ZGUuYW55ID0gTGlzdC5hbnk7XG5wcmVsdWRlLmFsbCA9IExpc3QuYWxsO1xucHJlbHVkZS51bmlxdWUgPSBMaXN0LnVuaXF1ZTtcbnByZWx1ZGUudW5pcXVlQnkgPSBMaXN0LnVuaXF1ZUJ5O1xucHJlbHVkZS5zb3J0ID0gTGlzdC5zb3J0O1xucHJlbHVkZS5zb3J0V2l0aCA9IExpc3Quc29ydFdpdGg7XG5wcmVsdWRlLnNvcnRCeSA9IExpc3Quc29ydEJ5O1xucHJlbHVkZS5zdW0gPSBMaXN0LnN1bTtcbnByZWx1ZGUucHJvZHVjdCA9IExpc3QucHJvZHVjdDtcbnByZWx1ZGUubWVhbiA9IExpc3QubWVhbjtcbnByZWx1ZGUuYXZlcmFnZSA9IExpc3QuYXZlcmFnZTtcbnByZWx1ZGUuY29uY2F0ID0gTGlzdC5jb25jYXQ7XG5wcmVsdWRlLmNvbmNhdE1hcCA9IExpc3QuY29uY2F0TWFwO1xucHJlbHVkZS5mbGF0dGVuID0gTGlzdC5mbGF0dGVuO1xucHJlbHVkZS5tYXhpbXVtID0gTGlzdC5tYXhpbXVtO1xucHJlbHVkZS5taW5pbXVtID0gTGlzdC5taW5pbXVtO1xucHJlbHVkZS5tYXhpbXVtQnkgPSBMaXN0Lm1heGltdW1CeTtcbnByZWx1ZGUubWluaW11bUJ5ID0gTGlzdC5taW5pbXVtQnk7XG5wcmVsdWRlLnNjYW4gPSBMaXN0LnNjYW47XG5wcmVsdWRlLnNjYW5sID0gTGlzdC5zY2FubDtcbnByZWx1ZGUuc2NhbjEgPSBMaXN0LnNjYW4xO1xucHJlbHVkZS5zY2FubDEgPSBMaXN0LnNjYW5sMTtcbnByZWx1ZGUuc2NhbnIgPSBMaXN0LnNjYW5yO1xucHJlbHVkZS5zY2FucjEgPSBMaXN0LnNjYW5yMTtcbnByZWx1ZGUuc2xpY2UgPSBMaXN0LnNsaWNlO1xucHJlbHVkZS50YWtlID0gTGlzdC50YWtlO1xucHJlbHVkZS5kcm9wID0gTGlzdC5kcm9wO1xucHJlbHVkZS5zcGxpdEF0ID0gTGlzdC5zcGxpdEF0O1xucHJlbHVkZS50YWtlV2hpbGUgPSBMaXN0LnRha2VXaGlsZTtcbnByZWx1ZGUuZHJvcFdoaWxlID0gTGlzdC5kcm9wV2hpbGU7XG5wcmVsdWRlLnNwYW4gPSBMaXN0LnNwYW47XG5wcmVsdWRlLmJyZWFrTGlzdCA9IExpc3QuYnJlYWtMaXN0O1xucHJlbHVkZS56aXAgPSBMaXN0LnppcDtcbnByZWx1ZGUuemlwV2l0aCA9IExpc3QuemlwV2l0aDtcbnByZWx1ZGUuemlwQWxsID0gTGlzdC56aXBBbGw7XG5wcmVsdWRlLnppcEFsbFdpdGggPSBMaXN0LnppcEFsbFdpdGg7XG5wcmVsdWRlLmF0ID0gTGlzdC5hdDtcbnByZWx1ZGUuZWxlbUluZGV4ID0gTGlzdC5lbGVtSW5kZXg7XG5wcmVsdWRlLmVsZW1JbmRpY2VzID0gTGlzdC5lbGVtSW5kaWNlcztcbnByZWx1ZGUuZmluZEluZGV4ID0gTGlzdC5maW5kSW5kZXg7XG5wcmVsdWRlLmZpbmRJbmRpY2VzID0gTGlzdC5maW5kSW5kaWNlcztcbnByZWx1ZGUuYXBwbHkgPSBGdW5jLmFwcGx5O1xucHJlbHVkZS5jdXJyeSA9IEZ1bmMuY3Vycnk7XG5wcmVsdWRlLmZsaXAgPSBGdW5jLmZsaXA7XG5wcmVsdWRlLmZpeCA9IEZ1bmMuZml4O1xucHJlbHVkZS5vdmVyID0gRnVuYy5vdmVyO1xucHJlbHVkZS5zcGxpdCA9IFN0ci5zcGxpdDtcbnByZWx1ZGUuam9pbiA9IFN0ci5qb2luO1xucHJlbHVkZS5saW5lcyA9IFN0ci5saW5lcztcbnByZWx1ZGUudW5saW5lcyA9IFN0ci51bmxpbmVzO1xucHJlbHVkZS53b3JkcyA9IFN0ci53b3JkcztcbnByZWx1ZGUudW53b3JkcyA9IFN0ci51bndvcmRzO1xucHJlbHVkZS5jaGFycyA9IFN0ci5jaGFycztcbnByZWx1ZGUudW5jaGFycyA9IFN0ci51bmNoYXJzO1xucHJlbHVkZS5yZXBlYXQgPSBTdHIucmVwZWF0O1xucHJlbHVkZS5jYXBpdGFsaXplID0gU3RyLmNhcGl0YWxpemU7XG5wcmVsdWRlLmNhbWVsaXplID0gU3RyLmNhbWVsaXplO1xucHJlbHVkZS5kYXNoZXJpemUgPSBTdHIuZGFzaGVyaXplO1xucHJlbHVkZS52YWx1ZXMgPSBPYmoudmFsdWVzO1xucHJlbHVkZS5rZXlzID0gT2JqLmtleXM7XG5wcmVsdWRlLnBhaXJzVG9PYmogPSBPYmoucGFpcnNUb09iajtcbnByZWx1ZGUub2JqVG9QYWlycyA9IE9iai5vYmpUb1BhaXJzO1xucHJlbHVkZS5saXN0c1RvT2JqID0gT2JqLmxpc3RzVG9PYmo7XG5wcmVsdWRlLm9ialRvTGlzdHMgPSBPYmoub2JqVG9MaXN0cztcbnByZWx1ZGUubWF4ID0gTnVtLm1heDtcbnByZWx1ZGUubWluID0gTnVtLm1pbjtcbnByZWx1ZGUubmVnYXRlID0gTnVtLm5lZ2F0ZTtcbnByZWx1ZGUuYWJzID0gTnVtLmFicztcbnByZWx1ZGUuc2lnbnVtID0gTnVtLnNpZ251bTtcbnByZWx1ZGUucXVvdCA9IE51bS5xdW90O1xucHJlbHVkZS5yZW0gPSBOdW0ucmVtO1xucHJlbHVkZS5kaXYgPSBOdW0uZGl2O1xucHJlbHVkZS5tb2QgPSBOdW0ubW9kO1xucHJlbHVkZS5yZWNpcCA9IE51bS5yZWNpcDtcbnByZWx1ZGUucGkgPSBOdW0ucGk7XG5wcmVsdWRlLnRhdSA9IE51bS50YXU7XG5wcmVsdWRlLmV4cCA9IE51bS5leHA7XG5wcmVsdWRlLnNxcnQgPSBOdW0uc3FydDtcbnByZWx1ZGUubG4gPSBOdW0ubG47XG5wcmVsdWRlLnBvdyA9IE51bS5wb3c7XG5wcmVsdWRlLnNpbiA9IE51bS5zaW47XG5wcmVsdWRlLnRhbiA9IE51bS50YW47XG5wcmVsdWRlLmNvcyA9IE51bS5jb3M7XG5wcmVsdWRlLmFjb3MgPSBOdW0uYWNvcztcbnByZWx1ZGUuYXNpbiA9IE51bS5hc2luO1xucHJlbHVkZS5hdGFuID0gTnVtLmF0YW47XG5wcmVsdWRlLmF0YW4yID0gTnVtLmF0YW4yO1xucHJlbHVkZS50cnVuY2F0ZSA9IE51bS50cnVuY2F0ZTtcbnByZWx1ZGUucm91bmQgPSBOdW0ucm91bmQ7XG5wcmVsdWRlLmNlaWxpbmcgPSBOdW0uY2VpbGluZztcbnByZWx1ZGUuZmxvb3IgPSBOdW0uZmxvb3I7XG5wcmVsdWRlLmlzSXROYU4gPSBOdW0uaXNJdE5hTjtcbnByZWx1ZGUuZXZlbiA9IE51bS5ldmVuO1xucHJlbHVkZS5vZGQgPSBOdW0ub2RkO1xucHJlbHVkZS5nY2QgPSBOdW0uZ2NkO1xucHJlbHVkZS5sY20gPSBOdW0ubGNtO1xucHJlbHVkZS5WRVJTSU9OID0gJzEuMi4xJztcbm1vZHVsZS5leHBvcnRzID0gcHJlbHVkZTtcbmZ1bmN0aW9uIGN1cnJ5JChmLCBib3VuZCl7XG4gIHZhciBjb250ZXh0LFxuICBfY3VycnkgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgcmV0dXJuIGYubGVuZ3RoID4gMSA/IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgcGFyYW1zID0gYXJncyA/IGFyZ3MuY29uY2F0KCkgOiBbXTtcbiAgICAgIGNvbnRleHQgPSBib3VuZCA/IGNvbnRleHQgfHwgdGhpcyA6IHRoaXM7XG4gICAgICByZXR1cm4gcGFyYW1zLnB1c2guYXBwbHkocGFyYW1zLCBhcmd1bWVudHMpIDxcbiAgICAgICAgICBmLmxlbmd0aCAmJiBhcmd1bWVudHMubGVuZ3RoID9cbiAgICAgICAgX2N1cnJ5LmNhbGwoY29udGV4dCwgcGFyYW1zKSA6IGYuYXBwbHkoY29udGV4dCwgcGFyYW1zKTtcbiAgICB9IDogZjtcbiAgfTtcbiAgcmV0dXJuIF9jdXJyeSgpO1xufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgbGlrZXVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9DekxYQUxZVlljQlZhbzRYaHlRRS9saWtlcy8nO1xyXG5leHBvcnQgeyBsaWtldXJsIH07IiwiY29uc3QgZmV0Y2hNZWFscyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/cz0nKTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbWVhbHMuJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGEubWVhbHM7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaE1lYWxzOyIsImltcG9ydCB7IGxpa2V1cmwgfSBmcm9tIFwiLi4vYXBpL2FwaWRhdGEuanNcIjtcclxuXHJcbmNvbnN0IGdldGxpa2VzID0gYXN5bmMgKCk9PntcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobGlrZXVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbn1cclxuY2F0Y2ggKGVycm9yKXtcclxuICAgIHJldHVybiBbXTtcclxufVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBnZXRsaWtlczsiLCJjb25zdCBzaG93UG9wdXAgPSAobWVhbCkgPT4ge1xyXG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9wdXAuY2xhc3NOYW1lID0gJ3BvcHVwJztcclxuXHJcbiAgY29uc3QgcG9wdXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9wdXBDb250ZW50LmNsYXNzTmFtZSA9ICdwb3B1cC1jb250ZW50JztcclxuXHJcbiAgY29uc3QgcG9wdXBIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9wdXBIZWFkaW5nLmNsYXNzTmFtZSA9ICdwb3B1cC1oZWFkaW5nJztcclxuXHJcbiAgY29uc3QgbWVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbWVhbEltYWdlLnNyYyA9IG1lYWwuc3RyTWVhbFRodW1iO1xyXG4gIG1lYWxJbWFnZS5hbHQgPSBtZWFsLnN0ck1lYWw7XHJcbiAgcG9wdXBIZWFkaW5nLmFwcGVuZENoaWxkKG1lYWxJbWFnZSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlUG9wdXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjbG9zZVBvcHVwQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPic7XHJcbiAgY2xvc2VQb3B1cEJ1dHRvbi5jbGFzc05hbWUgPSAnY2xvc2UtcG9wdXAtYnV0dG9uJztcclxuICBjbG9zZVBvcHVwQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpO1xyXG4gIHBvcHVwSGVhZGluZy5hcHBlbmRDaGlsZChjbG9zZVBvcHVwQnV0dG9uKTtcclxuXHJcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKHBvcHVwSGVhZGluZyk7XHJcblxyXG4gIGNvbnN0IHBvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3B1cERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdwb3B1cC1kZXNjcmlwdGlvbic7XHJcblxyXG4gIGNvbnN0IG1lYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbWVhbFRpdGxlLnRleHRDb250ZW50ID0gbWVhbC5zdHJNZWFsO1xyXG4gIG1lYWxUaXRsZS5jbGFzc05hbWUgPSAnbWVhbC10aXRsZSc7XHJcbiAgcG9wdXBEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChtZWFsVGl0bGUpO1xyXG5cclxuICBjb25zdCBpbnN0cnVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluc3RydWN0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbi1jb250YWluZXInO1xyXG5cclxuICBjb25zdCBtZWFsSW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG1lYWxJbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSBtZWFsLnN0ckluc3RydWN0aW9ucztcclxuICBtZWFsSW5zdHJ1Y3Rpb25zLmNsYXNzTmFtZSA9ICdtZWFsLWluc3RydWN0aW9ucyc7XHJcbiAgaW5zdHJ1Y3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobWVhbEluc3RydWN0aW9ucyk7XHJcblxyXG4gIHBvcHVwRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25Db250YWluZXIpO1xyXG5cclxuICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXBEZXNjcmlwdGlvbik7XHJcblxyXG4gIGNsb3NlUG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwb3B1cC5yZW1vdmUoKTtcclxuICB9KTtcclxuXHJcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBDb250ZW50KTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dQb3B1cDsiLCJpbXBvcnQgeyBpZCB9IGZyb20gXCJwcmVsdWRlLWxzXCI7XHJcbmltcG9ydCBnZXRsaWtlcyBmcm9tIFwiLi9nZXRsaWtlcy5qc1wiO1xyXG5leHBvcnQgY29uc3QgY3JlYXRlTWVhbENhcmQgPSBhc3luYyAobWVhbCwgdHJ1bmNhdGVUaXRsZSkgPT4ge1xyXG4gIGNvbnN0IG1lYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbENhcmQuY2xhc3NOYW1lID0gJ21lYWwtY2FyZCc7XHJcblxyXG4gIGNvbnN0IG1lYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIG1lYWxJbWFnZS5zcmMgPSBtZWFsLnN0ck1lYWxUaHVtYjtcclxuICBtZWFsSW1hZ2UuYWx0ID0gbWVhbC5zdHJNZWFsO1xyXG4gIG1lYWxJbWFnZS5pZCA9IGBpbWFnZSR7bWVhbC5pZE1lYWx9YDtcclxuICBtZWFsQ2FyZC5hcHBlbmRDaGlsZChtZWFsSW1hZ2UpO1xyXG5cclxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0aXRsZSc7XHJcblxyXG4gIGNvbnN0IG1lYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBtZWFsVGl0bGUuY2xhc3NOYW1lID0gJ21lYWwtY2FyZC10aXRsZSc7XHJcbiAgbWVhbFRpdGxlLnRleHRDb250ZW50ID0gdHJ1bmNhdGVUaXRsZShtZWFsLnN0ck1lYWwsIDMpO1xyXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lYWxUaXRsZSk7XHJcbiAgXHJcbiAgY29uc3QgbGlrZWRhdGEgPSBhd2FpdCBnZXRsaWtlcygpO1xyXG4gIGNvbnN0IGZhdm9yaXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZmF2b3JpdGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1oZWFydCBpY29uXCI+PC9pPic7XHJcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVCdXR0b24pO1xyXG5cclxuICBtZWFsQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gIGNvbnN0IGxpa2UgPSBsaWtlZGF0YS5maW5kKChsaWtlKT0+IGxpa2UuaXRlbV9pZCA9PT0gaWQpO1xyXG4gXHJcbiAgY29uc3QgbGlrZXNDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGlrZXNDb3VudGVyLmNsYXNzTmFtZSA9ICdsaWtlcy1jb3VudGVyJztcclxuICBpZihsaWtlKXtcclxuICAgIGNvdW50ZXIgPSBsaWtlLmxpa2VzO1xyXG4gIH1cclxuXHJcbiAgbGlrZXNDb3VudGVyLmlubmVySFRNTCA9IGA8c3Bhbj4ke2NvdW50ZXJ9TGlrZXM8L3NwYW4+YDtcclxuICBtZWFsQ2FyZC5hcHBlbmRDaGlsZChsaWtlc0NvdW50ZXIpO1xyXG5cclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnYnV0dG9ucyc7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29tbWVudHNCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xyXG4gIGNvbW1lbnRzQnV0dG9uLmNsYXNzTmFtZSA9ICdjb21tZW50cy1idXR0b24nO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudHNCdXR0b24pO1xyXG5cclxuICBjb25zdCByZXNlcnZhdGlvbnNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICByZXNlcnZhdGlvbnNCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzZXJ2YXRpb25zJztcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uc0J1dHRvbik7XHJcblxyXG4gIG1lYWxDYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gbWVhbENhcmQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVUaXRsZSA9ICh0aXRsZSwgbWF4V29yZHMpID0+IHtcclxuICBjb25zdCB3b3JkcyA9IHRpdGxlLnNwbGl0KCcgJyk7XHJcbiAgaWYgKHdvcmRzLmxlbmd0aCA+IG1heFdvcmRzKSB7XHJcbiAgICByZXR1cm4gYCR7d29yZHMuc2xpY2UoMCwgbWF4V29yZHMpLmpvaW4oJyAnKX0uLi5gO1xyXG4gIH1cclxuICByZXR1cm4gdGl0bGU7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvcG9wdXAuY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvbG9nby5wbmcnO1xyXG5pbXBvcnQgZmV0Y2hNZWFscyBmcm9tICcuL2FwaS9mZXRjaG1lYWxzLmpzJztcclxuaW1wb3J0IGdldGxpa2VzIGZyb20gJy4vbW9kdWxlcy9nZXRsaWtlcy5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lYWxDYXJkLCB0cnVuY2F0ZVRpdGxlIH0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzLmpzJztcclxuaW1wb3J0IGRpc3BsYXlQb3B1cCBmcm9tICcuL21vZHVsZXMvcG9wdXAuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcclxuICBjb25zdCBtZWFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWxDb250YWluZXInKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbWVhbHMgPSBhd2FpdCBmZXRjaE1lYWxzKCdTZWFmb29kJyk7XHJcbiAgICBtZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lYWxDYXJkID0gY3JlYXRlTWVhbENhcmQobWVhbCwgdHJ1bmNhdGVUaXRsZSk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBtZWFsQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtYnV0dG9uJyk7XHJcbiAgICAgIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheVBvcHVwKG1lYWwpO1xyXG4gICAgICB9KTtcclxuICAgICAgbWVhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsQ2FyZCk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbWVhbENvbnRhaW5lci5pbm5lckhUTUwgPSAnRmFpbGVkIHRvIGZldGNoIG1lYWxzLic7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XHJcbmxvZ29JbWFnZS5zcmMgPSBsb2dvOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==