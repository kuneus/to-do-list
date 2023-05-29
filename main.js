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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/bg.png */ \"./src/images/bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* \\nPartial reset taken from \\nhttp://meyerweb.com/eric/tools/css/reset/ \\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 16px;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n:root {\\n  --container-bg: rgba(231, 255, 250, 0.791);\\n}\\n\\nbody {\\n  display: grid;\\n  grid-template-areas:\\n    'sidebar header'\\n    'sidebar main'\\n    'footer main';\\n  grid-template-rows: auto 91vh auto;\\n  grid-template-columns: 1fr 4fr;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n}\\n\\n/* **** HEADER **** */\\n.header {\\n  font-size: 1.5rem;\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n  padding-left: 30px;\\n  grid-area: header;\\n\\n  /* background-color: rgba(231, 255, 250, 0.791); */\\n}\\n\\n.header div:first-child {\\n  font-size: 2rem;\\n}\\n\\n/* **** SIDEBAR **** */\\n.sidebar {\\n  grid-area: sidebar;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 40px;\\n  background-color: var(--container-bg);\\n  padding-top: 50px;\\n}\\n\\n/* Indent sidebar column */\\n.sb-columns {\\n  padding-left: 20px;\\n}\\n\\n/* headings for sidebar 'Home' and 'Projects' */\\n.sidebar > div > h2 {\\n  font-size: 1.5rem;\\n  margin-bottom: 10px;\\n  font-weight: 700;\\n  padding-top: 20px;\\n}\\n\\n/* Container for sidebar \\\"Home\\\" section */\\n.sb-home-container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n/* sidebar clicking elements */\\n.sb-btns {\\n  border: none;\\n  width: 100%;\\n  text-align: left;\\n  padding: 10px;\\n  background-color: transparent;\\n}\\n\\n.sb-btns:hover {\\n  cursor: pointer;\\n  background-color: #0000004b;\\n}\\n\\n.sb-btns:focus {\\n  background-color: #0000004b;\\n  outline: none;\\n}\\n\\nul {\\n  list-style-type: none;\\n}\\n\\n/* container for project list */\\n.sb-projects-container {\\n  height: 300px;\\n  overflow-y: scroll;\\n}\\n\\n/* container for new project buttons */\\n.project-btn-cont {\\n  display: flex;\\n  justify-content: center;\\n  position: relative;\\n}\\n\\n#new-project-btn {\\n  width: 200px;\\n  height: 30px;\\n  margin: 0px;\\n  border-radius: 15px;\\n  border-style: none;\\n  background-color: rgb(113, 198, 113);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 20px;\\n}\\n\\n.project-btns:hover,\\n.project-btns:focus {\\n  filter: brightness(120%);\\n}\\n\\n/* hidden form for new project */\\n#project-form-btns {\\n  position: absolute;\\n  display: none;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n/* Create and Cancel buttons */\\n#project-form-btns > div {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 10px;\\n}\\n\\n/* input for new project form */\\n#project-form-btns > input {\\n  height: 30px;\\n  width: 200px;\\n  border-radius: 10px;\\n  text-indent: 5px;\\n  border: none;\\n}\\n\\n/* submit new project */\\n#new-project-submit {\\n  background-color: rgb(118, 118, 255);\\n  border: none;\\n  border-radius: 10px;\\n  padding: 5px;\\n}\\n\\n/* cancel new project submission */\\n#new-project-cancel {\\n  background-color: rgb(255, 118, 118);\\n  border: none;\\n  border-radius: 10px;\\n  padding: 5px;\\n}\\n\\n/* **** MAIN **** */\\n.main {\\n  grid-area: main;\\n  margin: 50px;\\n  background-color: var(--container-bg);\\n  border-radius: 15px;\\n  padding: 50px;\\n}\\n\\n.task-line {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n/* **** FOOTER **** */\\nfooter {\\n  grid-area: footer;\\n  padding: 10px;\\n  background-color: var(--container-bg);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://new-project-template/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://new-project-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://new-project-template/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://new-project-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://new-project-template/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://new-project-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://new-project-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://new-project-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://new-project-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://new-project-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://new-project-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAndAppend: () => (/* binding */ createAndAppend),\n/* harmony export */   projectsArr: () => (/* binding */ projectsArr),\n/* harmony export */   taskFactory: () => (/* binding */ taskFactory),\n/* harmony export */   tasksArr: () => (/* binding */ tasksArr)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n\n\n\n\nconst projCont = document.getElementById('projects-list');\nconst newProjectBtn = document.getElementById('new-project-btn');\nconst projectFormCont = document.getElementById('project-form-btns');\nconst submitProjectBtn = document.getElementById('new-project-submit');\nconst projectBtns = document.getElementsByClassName('project-btns');\nconst projectTextField = document.getElementById('project-textfield');\nconst projectListBtns = document.getElementsByClassName('projects');\nconst homeBtns = document.getElementsByClassName('home-btns');\n\n// create HTML element and append to DOM\nfunction createAndAppend(elementType, eleClass, eleID, eleText, eleParent) {\n  let element = document.createElement(elementType);\n  if (eleClass) {\n    element.setAttribute('class', eleClass);\n  }\n  if (eleID) {\n    element.setAttribute('id', eleID);\n  }\n  if (eleText) {\n    element.textContent = eleText;\n  }\n  eleParent.appendChild(element);\n  return element;\n}\n\n// need to create a class and make the following function a method within the class\n// Add project name submission to the DOM project list\nfunction appendNewProject(title) {\n  // create li element and append to project list\n  const liEle = createAndAppend('li', null, null, null, projCont);\n\n  // create button inside li element\n\n  createAndAppend('button', 'sb-btns projects', null, title, liEle);\n\n  // clear text field\n  projectTextField.value = '';\n}\n\n// factory fn for creating new project\nfunction ProjectFactory(title) {\n  const tasks = [];\n  const addTask = (taskObj) => {\n    // logic to add new to-do to tasks array\n    tasks.push(taskObj);\n  };\n  return { title, tasks, addTask };\n}\n\n// factory fn for creating new to-do task\nfunction taskFactory(project, title) {\n  let taskInfo = {\n    dueDate: '',\n    priority: '',\n    description: '',\n  };\n\n  const setDueDate = (date) => {\n    taskInfo.dueDate = date;\n  };\n\n  const setPriority = (setting) => {\n    taskInfo.priority = setting;\n  };\n  return {\n    project,\n    title,\n    taskInfo,\n    setDueDate,\n    setPriority,\n  };\n}\n\n// Change displays for new project buttons from 'none' to 'block'\nfunction changeBtnDisplay() {\n  if (projectFormCont.style.display === 'flex') {\n    projectFormCont.style.display = 'none';\n  } else {\n    projectFormCont.style.display = 'flex';\n  }\n\n  if (newProjectBtn.style.display === 'none') {\n    newProjectBtn.style.display = 'block';\n  } else {\n    newProjectBtn.style.display = 'none';\n  }\n}\n\n// event listener to change display for project form submission\nArray.from(projectBtns).forEach((element) => {\n  element.addEventListener('click', () => {\n    changeBtnDisplay();\n  });\n});\n\nconst projectsArr = [];\nconst tasksArr = [];\n\n// append example project to project list\n(function exampleProject() {\n  let exampleProj = ProjectFactory('The Odin Project');\n  projectsArr.push(exampleProj);\n  appendNewProject(exampleProj.title);\n})();\n\n// event listener to add and create new project\nsubmitProjectBtn.addEventListener('click', () => {\n  let projName = projectTextField.value;\n  if (projName === '') {\n    alert('Please submit a project name');\n  } else {\n    let newProj = ProjectFactory(projName);\n    projectsArr.push(newProj);\n    appendNewProject(newProj.title);\n  }\n});\n\n// event listeners for project list\nprojCont.addEventListener('click', (e) => {\n  if (e.target.classList.contains('projects')) {\n    const projTitle = e.target.textContent;\n    console.log('project title: ' + projTitle);\n\n    for (let i = 0; i < projectsArr.length; i += 1) {\n      if (projectsArr[i].title === projTitle) {\n        // open projects module with project index\n        (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectPages)(projectsArr[i]);\n      }\n    }\n  }\n});\n\n(0,_pageload__WEBPACK_IMPORTED_MODULE_2__.pageload)();\n\n\n// event listener for sidebar elements to display clicked module\n\n// export array of projects to use for projects module\n\n/*\n\nRemember SOLID principles!!\n-Single responsibility principle\n-Open/closed principle\n-Liskov substitution principle\n-Interface segregation principle\n-Dependency inversion principle\n\n**** OUTLINE ****\n\nMODULES:\n-pageload\n-today\n-upcoming\n-all tasks\n-completed\n-trash\n-projects\n\n\nFUNCTIONS, OBJ, & STUFF:\n- newProject\n    -> push to project array\n- to-do factory fn / class\n    -> title\n    -> description\n    -> due date\n    -> priority\n    -> completion status\n    -> push to-do to taskArr\n- changePage\n    -> change page view to module clicked\n- deleteTask\n    -> remove from tasksArr and push to trashArr\n- completeTask\n    -> push to doneArr\n- expandTask: display to-do information\n- setPageStatus\n\n\n-ARRAYS:\n    -> tasksArr\n    -> projectsArr\n    -> trashArr\n    -> doneArr\n\n\n\n*/\n\n\n//# sourceURL=webpack://new-project-template/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageload: () => (/* binding */ pageload)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n// taskFactory(project, title, dueDate, priority, description) {\n// return { project, title, dueDate, priority, description };\n\nconst pageload = () => {\n  const mainBody = document.getElementById('main-body');\n\n  // header for Today\n  const mainHeader = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, 'Today', mainBody);\n\n  // container for new task buttons\n  const newTaskCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, null, mainHeader);\n\n  // button to open new task form\n  const addTask = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'button',\n    null,\n    'add-task-btn',\n    'Add to-do',\n    newTaskCont,\n  );\n  // container for new task form\n  const taskForm = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, null, newTaskCont);\n  const textInput = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'input',\n    null,\n    'project-input',\n    null,\n    taskForm,\n  );\n  textInput.setAttribute('placeholder', 'What will you do?');\n  const selectInput = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'select',\n    null,\n    'project-select',\n    null,\n    taskForm,\n  );\n\n  // button to submit new task\n  const createTaskBtn = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'button',\n    'task-form-btns',\n    null,\n    'Add',\n    taskForm,\n  );\n  // button to cancel adding new task\n  const cancelBtn = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'button',\n    'task-form-btns',\n    null,\n    'Cancel',\n    taskForm,\n  );\n  // default to hidden task form\n  taskForm.style.display = 'none';\n\n  // display task form container\n  addTask.addEventListener('click', () => {\n    taskForm.style.display = 'block';\n    addTask.style.display = 'none';\n\n    // clear project select options\n    selectInput.innerHTML = '';\n\n    // update select options with current projects\n    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.projectsArr.length; i += 1) {\n      const option = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n        'option',\n        null,\n        null,\n        _index__WEBPACK_IMPORTED_MODULE_0__.projectsArr[i].title,\n        selectInput,\n      );\n      option.value = _index__WEBPACK_IMPORTED_MODULE_0__.projectsArr[i].title;\n    }\n  });\n\n  // add new to-do\n  createTaskBtn.addEventListener('click', () => {\n    const projectSelect = document.getElementById('project-select').value;\n    const projectInput = document.getElementById('project-input').value;\n    // logic to add new to-do\n    // use taskFactory to create new to-do\n    // set dueDate to today's date\n    // need select option for current projects\n    const newTask = (0,_index__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(projectSelect, projectInput);\n    _index__WEBPACK_IMPORTED_MODULE_0__.tasksArr.push(newTask);\n    appendTask(newTask);\n  });\n\n  const taskFormBtns = document.getElementsByClassName('task-form-btns');\n  // hide task form and return to default\n  Array.from(taskFormBtns).forEach((button) => {\n    button.addEventListener('click', () => {\n      taskForm.style.display = 'none';\n      addTask.style.display = 'block';\n    });\n  });\n\n  // container for list of tasks\n  const taskList = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, null, mainBody);\n  // append new task\n  const appendTask = (task) => {\n    const taskLine = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'task-line', null, null, taskList);\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, task.title, taskLine);\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, task.project, taskLine);\n  };\n};\n\n\n\n\n//# sourceURL=webpack://new-project-template/./src/pageload.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectPages: () => (/* binding */ projectPages)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n// createAndAppend(elementType, eleClass, eleID, eleText, eleParent)\n\nconst projectPages = (project) => {\n  const mainBody = document.getElementById('main-body');\n\n  mainBody.innerHTML = '';\n\n  // logic here\n  const mainHeader = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'div',\n    null,\n    null,\n    project.title,\n    mainBody,\n  );\n\n  const taskHeader = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, 'Tasks:', mainBody);\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('button', null, null, 'Add to-do', taskHeader);\n\n  // loop to create DOM elements for each task\n};\n\n\n\n\n//# sourceURL=webpack://new-project-template/./src/projects.js?");

/***/ }),

/***/ "./src/images/bg.png":
/*!***************************!*\
  !*** ./src/images/bg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fdddbc8f6e6de8f785c6.png\";\n\n//# sourceURL=webpack://new-project-template/./src/images/bg.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;