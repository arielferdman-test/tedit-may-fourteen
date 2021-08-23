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

/***/ "./src/doc-model.js":
/*!**************************!*\
  !*** ./src/doc-model.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Let\": () => (/* binding */ Let),\n/* harmony export */   \"Doc\": () => (/* binding */ Doc)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TreeNode = /*#__PURE__*/function () {\n  function TreeNode() {\n    _classCallCheck(this, TreeNode);\n\n    this.value = '';\n    this.cons = {};\n  }\n\n  _createClass(TreeNode, [{\n    key: \"addCon\",\n    value: function addCon(key, tNode) {\n      this.cons[key] = tNode;\n    }\n  }, {\n    key: \"getNodeAt\",\n    value: function getNodeAt(key) {\n      return this.con[key];\n    }\n  }]);\n\n  return TreeNode;\n}();\n\nvar Tree = function Tree() {\n  _classCallCheck(this, Tree);\n\n  this.root = '';\n  this.root = '';\n};\n\nvar Doc = /*#__PURE__*/function () {\n  function Doc() {\n    _classCallCheck(this, Doc);\n\n    this.doc = [];\n  }\n\n  _createClass(Doc, [{\n    key: \"get_lines\",\n    value: function get_lines(entity) {\n      return entity.get_lines();\n    }\n  }]);\n\n  return Doc;\n}();\n\nvar Let = /*#__PURE__*/function () {\n  function Let(name, value) {\n    var prev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n    var next = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n    var indent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n\n    _classCallCheck(this, Let);\n\n    this.name = name;\n    this.value = value;\n    this.prev = prev;\n    this.next = next;\n    this.indent = 0 | indent;\n    this.lines = [\"let \".concat(this.name, \" = \").concat(this.value)];\n  }\n\n  _createClass(Let, [{\n    key: \"get_lines\",\n    value: function get_lines() {\n      return this.lines;\n    }\n  }]);\n\n  return Let;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/doc-model.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/doc-model.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;