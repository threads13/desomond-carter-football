module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/analyzeResults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\analyzeResults.js";


/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-1467960612" + " " + "analyzeResults"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-1467960612" + " " + "results"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1467960612"
  }, "Dummy text"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1467960612"
  }, "Dummy text")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1467960612" + " " + "resultsImage"
  }, "Image component"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1467960612",
    css: ".analyzeResults.jsx-1467960612{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:100px;padding-top:40px;}.results.jsx-1467960612{margin-left:15%;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.resultsImage.jsx-1467960612{margin-right:15%;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxhbmFseXplUmVzdWx0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRa0IsQUFHd0IsQUFNRyxBQUtDLGdCQUpGLENBS0EseURBWE0sUUFPdkIsQ0FLQSxZQVhtQixpQkFDbkIiLCJmaWxlIjoicGFnZXNcXGNvbXBvbmVudHNcXGFuYWx5emVSZXN1bHRzLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcSmFjb2JcXGRlc21vbmQtY2FydGVyLWZvb3RiYWxsIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5hbHl6ZVJlc3VsdHNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+XHJcbiAgICAgICAgPGgyPkR1bW15IHRleHQ8L2gyPlxyXG4gICAgICAgIDxwPkR1bW15IHRleHQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNJbWFnZVwiPkltYWdlIGNvbXBvbmVudDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmFuYWx5emVSZXN1bHRzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZXN1bHRzIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVzdWx0c0ltYWdlIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl19 */\n/*@ sourceURL=pages\\components\\analyzeResults.js */"
  }));
});

/***/ }),

/***/ "./pages/components/banner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\banner.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-1527621221" + " " + "banner"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1527621221" + " " + "img-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1527621221"
  }, "Fantasy Sports"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1527621221"
  }, "Expert advice and tips")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1527621221",
    css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxiYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCIiwiZmlsZSI6InBhZ2VzXFxjb21wb25lbnRzXFxiYW5uZXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxKYWNvYlxcZGVzbW9uZC1jYXJ0ZXItZm9vdGJhbGwiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgIHsvKiA8aW1nIHNyYz0nLi4vc3RhdGljL2Jhbm5lci5qcGcnPjwvaW1nPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPkZhbnRhc3kgU3BvcnRzPC9oMT5cclxuICAgICAgICA8cD5FeHBlcnQgYWR2aWNlIGFuZCB0aXBzPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC8vIC5iYW5uZXIge1xyXG4gICAgICAgIC8vICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvLyAgIGhlaWdodDogMDBweDtcclxuICAgICAgICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICBoMSwgcCB7XHJcbiAgICAgICAgLy8gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIC8vICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICAgICAgLy8gICAgLy8gei1pbmRleDogMTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBoMSB7XHJcbiAgICAgICAgLy8gICAvLyBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgLy8gICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgIC8vICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIC8vICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAvLyAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLmltZy1jb250YWluZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9iYW5uZXIuanBnKTtcclxuICAgICAgICAvLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLy8gICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICB0b3A6IDA7XHJcbiAgICAgICAgLy8gICBsZWZ0OiAwO1xyXG4gICAgICAgIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLy8gICB6LWluZGV4OiAtMjtcclxuICAgICAgICAvLyAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAvLyAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLy8gICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgLy8gICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZDp1cmwoLi4vc3RhdGljL2Jhbm5lci5qcGcpO1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAvLyAgIGJveC1zaGFkb3c6aW5zZXQgMCAwIDAgMjAwMHB4IHJnYmEoMjU1LDAsMTUwLDAuMyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgLy8gLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIC8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICAvLyAgIHRvcDogMDtcclxuICAgICAgICAvLyAgIGxlZnQ6IDA7XHJcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3RhdGljL2Jhbm5lci5qcGcpO1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAvLyAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIC8vICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgLy8gICBtYXJnaW4tdG9wOiA1MDBweDtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIC8vICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIC8vICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAvLyAgIHBhZGRpbmc6IDEwcmVtIDUlO1xyXG4gICAgICAgIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpOyAvKiBJZiBvdXIgaW1hZ2UgaXMgYnJpZ2h0LCB3ZSBjYW4gdG9uZSBpdCBkb3duIHdpdGggdGhpcyBkYXJrZXIgb3ZlcmxheSAqL1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAvLyAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgLy8gICB0b3A6IDA7XHJcbiAgICAgICAgLy8gICBsZWZ0OiAwO1xyXG4gICAgICAgIC8vICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgLy8gICBib3R0b206IDA7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC5pbWctY29udGFpbmVyOmJlZm9yZSB7XHJcbiAgICAgICAgLy8gICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLy8gICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8vICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvYmFubmVyLmpwZyk7XHJcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAvLyAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgLy8gICB0b3A6IDA7XHJcbiAgICAgICAgLy8gICBsZWZ0OiAwO1xyXG4gICAgICAgIC8vICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgLy8gICBib3R0b206IDA7XHJcbiAgICAgICAgLy8gICB6LWluZGV4OiAtMTtcclxuICAgICAgICAvLyAgIG9wYWNpdHk6IDAuNzsgLyogVG9uZSB0aGUgaW1hZ2UgZG93biBmdXJ0aGVyIGJ5IGdpdmluZyBpdCB0cmFuc3BhcmVuY3kgKi9cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLy8gICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8vICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAvLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvYmFubmVyLmpwZyk7XHJcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAvLyAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gcCB7XHJcbiAgICAgICAgLy8gICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLy8gICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuLy8gLmltZy1jb250YWluZXIge1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvYmFubmVyLmpwZyk7XHJcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICBiYWNrZ3JvdW5kLXNpemU6IDE4MDBweCA0MDBweDtcclxuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4vLyAgIC8qcGFkZGluZzogNDBweDsgKElmIGRvbid0IHdhbnQgdG8gc2V0IG1pbi1oZWlnaHQgb3Igc29tZSBpbWFnZSBjb250ZW50IGlzIHRoZXJlKSAqL1xyXG4vLyB9XHJcblxyXG4vLyBpbWcge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMTgwMHB4IDQwMHB4O1xyXG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbi8vICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuLy8gICAvLyBtYXgtd2lkdGg6IDE5MDBweDtcclxuLy8gICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4vLyAgIG1heC1oZWlnaHQ6IDE4MDBweDtcclxuLy8gfVxyXG4vL1xyXG4vLyBtaW4taGVpZ2h0OiA0MDBweDtcclxuLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyBmb250LXNpemU6IDQwcHg7XHJcblxyXG5cclxuLy8gaDEge1xyXG4vLyAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvYmFubmVyLmpwZyk7XHJcbi8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbi8vIH1cclxuIl19 */\n/*@ sourceURL=pages\\components\\banner.js */"
  }));
}); // .img-container {
//   min-height: 400px;
//   background-image: url(../static/banner.jpg);
//   background-repeat: no-repeat;
//   background-size: 1800px 400px;
//   background-position: center top;
//   /*padding: 40px; (If don't want to set min-height or some image content is there) */
// }
// img {
//   display: flex;
//   align-items: center;
//   background-repeat: no-repeat;
//   background-size: 1800px 400px;
//   background-position: center top;
//   // background-position: left;
//   // max-width: 1900px;
//   max-width: 400px;
//   max-height: 1800px;
// }
//
// min-height: 400px;
// text-align: center;
// font-size: 40px;
// h1 {
//   // background-image: url(../static/banner.jpg);
//   background-position: center top;
//   color: white;
//   padding-top: 40px;
// }

/***/ }),

/***/ "./pages/components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\header.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-2706604995" + " " + "header"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-2706604995"
  }, "Desmond Carter Sports"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2706604995",
    css: ".header.jsx-2706604995{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:70%;-ms-flex-preferred-size:70%;flex-basis:70%;font-size:25px;font-weight:300;margin-left:10px;margin-top:5px;}nav.jsx-2706604995{padding-left:4px;padding-top:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxoZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBR3dCLEFBU0ksaUJBQ0QsZ0JBQ2xCLHlDQVZpQixrRUFDQSxlQUNDLGdCQUNDLGlCQUNGLGVBQ2pCIiwiZmlsZSI6InBhZ2VzXFxjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxKYWNvYlxcZGVzbW9uZC1jYXJ0ZXItZm9vdGJhbGwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxuYXY+RGVzbW9uZCBDYXJ0ZXIgU3BvcnRzPC9uYXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=pages\\components\\header.js */"
  }));
});

/***/ }),

/***/ "./pages/components/instructor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\instructor.js";


/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2277536409" + " " + "instructor"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2277536409"
  }, "Meet the expert"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-2277536409" + " " + "bio"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-2277536409" + " " + "bioPicture"
  }, "Here there will be an image"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2277536409" + " " + "bioText"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2277536409" + " " + "instructorTitle"
  }, "Professoinal Poker Coach"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2277536409"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2277536409"
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2277536409",
    css: "h3.jsx-2277536409{text-align:center;}.instructor.jsx-2277536409{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid red;margin-left:200px;margin-right:200px;}.bio.jsx-2277536409{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.bioPicture.jsx-2277536409{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.bioText.jsx-2277536409{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.instructorTitle.jsx-2277536409{font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxpbnN0cnVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQixBQUk2QixBQUlMLEFBUUEsQUFJQSxBQUtBLEFBTUUsZUFDakIsR0EzQkEsd0RBSXdCLEFBUXhCLEFBSWlCLEFBS0Esa0VBSmpCLEFBS3dCLFlBakJELHFCQUNILGtCQUNDLG1CQUNyQixRQWVBIiwiZmlsZSI6InBhZ2VzXFxjb21wb25lbnRzXFxpbnN0cnVjdG9yLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcSmFjb2JcXGRlc21vbmQtY2FydGVyLWZvb3RiYWxsIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdHJ1Y3RvclwiPlxyXG4gICAgICA8aDM+TWVldCB0aGUgZXhwZXJ0PC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb1BpY3R1cmVcIj5IZXJlIHRoZXJlIHdpbGwgYmUgYW4gaW1hZ2U8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb1RleHRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluc3RydWN0b3JUaXRsZVwiPlByb2Zlc3NvaW5hbCBQb2tlciBDb2FjaDwvcD5cclxuICAgICAgICAgIDxoNT48L2g1PlxyXG4gICAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnN0cnVjdG9yIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iaW9QaWN0dXJlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmlvVGV4dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnN0cnVjdG9yVGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=pages\\components\\instructor.js */"
  }));
});

/***/ }),

/***/ "./pages/components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topBar__ = __webpack_require__("./pages/components/topBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banner__ = __webpack_require__("./pages/components/banner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topColumns__ = __webpack_require__("./pages/components/topColumns.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recentTips__ = __webpack_require__("./pages/components/recentTips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__analyzeResults__ = __webpack_require__("./pages/components/analyzeResults.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__instructor__ = __webpack_require__("./pages/components/instructor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__testimonials__ = __webpack_require__("./pages/components/testimonials.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__questionsAnswered__ = __webpack_require__("./pages/components/questionsAnswered.js");
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\layout.js";














var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-3295544578" + " " + "layout"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-3295544578"
  }, "Desmond Carter Sports"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-3295544578"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__topBar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__banner__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__topColumns__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__recentTips__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3092812814",
    css: "*.jsx-3295544578{box-sizing:border-box;margin:0;padding:0;}.layout.jsx-3295544578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:'Montserrat',sans-serif;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxsYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JjLEFBRzZCLEFBTVQsc0JBTEosU0FDQyxVQUNaLGlDQUl3Qiw4RUFDZSxvQ0FDckIsZ0JBQ2xCIiwiZmlsZSI6InBhZ2VzXFxjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxKYWNvYlxcZGVzbW9uZC1jYXJ0ZXItZm9vdGJhbGwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSAnLi90b3BCYXInO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4vYmFubmVyJztcclxuaW1wb3J0IFRvcENvbHVtbnMgZnJvbSAnLi90b3BDb2x1bW5zJztcclxuaW1wb3J0IFJlY2VudFRpcHMgZnJvbSAnLi9yZWNlbnRUaXBzJztcclxuaW1wb3J0IEFuYWx5emVSZXN1bHRzIGZyb20gJy4vYW5hbHl6ZVJlc3VsdHMnO1xyXG5pbXBvcnQgSW5zdHJ1Y3RvciBmcm9tICcuL2luc3RydWN0b3InO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4vdGVzdGltb25pYWxzJztcclxuaW1wb3J0IFF1ZXN0aW9uc0Fuc3dlcmVkIGZyb20gJy4vcXVlc3Rpb25zQW5zd2VyZWQnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+RGVzbW9uZCBDYXJ0ZXIgU3BvcnRzPC90aXRsZT5cclxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8VG9wQmFyIC8+XHJcbiAgICA8QmFubmVyIC8+XHJcbiAgICA8VG9wQ29sdW1ucyAvPlxyXG4gICAgPFJlY2VudFRpcHMgLz5cclxuICA8c3R5bGUganN4PntgXHJcbiAgICAqIHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXlvdXQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgYm9keSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=pages\\components\\layout.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1463338373",
    css: "body{margin:0;padding:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxsYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NxQixBQUdnQixTQUNDLFVBQ1ksc0JBQ3hCIiwiZmlsZSI6InBhZ2VzXFxjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxKYWNvYlxcZGVzbW9uZC1jYXJ0ZXItZm9vdGJhbGwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSAnLi90b3BCYXInO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4vYmFubmVyJztcclxuaW1wb3J0IFRvcENvbHVtbnMgZnJvbSAnLi90b3BDb2x1bW5zJztcclxuaW1wb3J0IFJlY2VudFRpcHMgZnJvbSAnLi9yZWNlbnRUaXBzJztcclxuaW1wb3J0IEFuYWx5emVSZXN1bHRzIGZyb20gJy4vYW5hbHl6ZVJlc3VsdHMnO1xyXG5pbXBvcnQgSW5zdHJ1Y3RvciBmcm9tICcuL2luc3RydWN0b3InO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4vdGVzdGltb25pYWxzJztcclxuaW1wb3J0IFF1ZXN0aW9uc0Fuc3dlcmVkIGZyb20gJy4vcXVlc3Rpb25zQW5zd2VyZWQnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+RGVzbW9uZCBDYXJ0ZXIgU3BvcnRzPC90aXRsZT5cclxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8VG9wQmFyIC8+XHJcbiAgICA8QmFubmVyIC8+XHJcbiAgICA8VG9wQ29sdW1ucyAvPlxyXG4gICAgPFJlY2VudFRpcHMgLz5cclxuICA8c3R5bGUganN4PntgXHJcbiAgICAqIHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXlvdXQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgYm9keSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=pages\\components\\layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/components/navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\navbar.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-3273859548" + " " + "navbar"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-3273859548"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3273859548"
  }, "Home"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3273859548"
  }, "Rankings"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3273859548"
  }, "Articles"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3273859548"
  }, "Contact")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3273859548",
    css: ".navbar.jsx-3273859548{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:30%;-ms-flex-preferred-size:30%;flex-basis:30%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}ul.jsx-3273859548{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;}li.jsx-3273859548{padding-right:50px;font-weight:300;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLEFBR3dCLEFBTUEsQUFLTSxtQkFDSCxnQkFDRCxlQUNqQix3QkFiaUIsQUFNQyxnQkFDbEIsa0RBTjJCLGlHQUMzQiIsImZpbGUiOiJwYWdlc1xcY29tcG9uZW50c1xcbmF2YmFyLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcSmFjb2JcXGRlc21vbmQtY2FydGVyLWZvb3RiYWxsIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+SG9tZTwvbGk+XHJcbiAgICAgICAgey8qIHdpbGwgd2FudCBkYXNoYm9hcmQgYW5kIHVzZXIgZ28gYm90aCBiZSBjb25kaXRvbmFsIGJhc2VkIG9uIGxvZyBpbiAqL31cclxuICAgICAgICA8bGk+UmFua2luZ3M8L2xpPlxyXG4gICAgICAgIDxsaT5BcnRpY2xlczwvbGk+XHJcbiAgICAgICAgPGxpPkNvbnRhY3Q8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMzAlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXX0= */\n/*@ sourceURL=pages\\components\\navbar.js */"
  }));
});

/***/ }),

/***/ "./pages/components/questionsAnswered.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\questionsAnswered.js";


/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-302904902" + " " + "questionsAnswered"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "302904902",
    css: ".questionsAnswered.jsx-302904902{border:1px solid green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxxdWVzdGlvbnNBbnN3ZXJlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IsQUFHa0MsdUJBQ3pCIiwiZmlsZSI6InBhZ2VzXFxjb21wb25lbnRzXFxxdWVzdGlvbnNBbnN3ZXJlZC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEphY29iXFxkZXNtb25kLWNhcnRlci1mb290YmFsbCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uc0Fuc3dlcmVkXCI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucXVlc3Rpb25zQW5zd2VyZWQge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXX0= */\n/*@ sourceURL=pages\\components\\questionsAnswered.js */"
  }));
});

/***/ }),

/***/ "./pages/components/recentTips.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\recentTips.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-103820416" + " " + "callout"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-103820416"
  }, "Carson Wentz: He will be playing a Panthers team this week, who are giving up over 20 fantasy points to opposing quarterbacks. Went has put up over 20 fancy points the last three weeks."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    hef: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-103820416"
  }, "More advice"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "103820416",
    css: ".callout.jsx-103820416{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;background-color:#353535;color:white;padding-bottom:50px;padding-top:20px;}h2.jsx-103820416{margin-bottom:3px;font-size:40px;margin-top:5px;font-weight:400;}p.jsx-103820416{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:5px;font-size:20px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;max-width:40%;}a.jsx-103820416{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-packjustify-conten:center;-webkit-justify-conten:center;-ms-flex-packjustify-conten:center;justify-conten:center;background-color:#b8b88f;border:2px solid #b8b88f;color:#fff;border-radius:100px;max-width:150px;padding:10px 30px;font-weight:700;font-size:20px;margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxyZWNlbnRUaXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUdzQixBQVdLLEFBT0wsQUFRSyxrQkFkSCxlQUNBLGVBQ0MsZ0JBQ2xCLE9BWXdCLEdBMUJBLEFBa0JQLGVBQ0EsZUFDRyxnREFuQkEsa0JBQ08sS0FtQlgsY0FDaEIsTUFuQmMsQ0F3QmEsV0F2QkwsY0F3QkssTUF2QlIsaUJBRW5CLEVBc0JhLFdBQ1Msb0JBQ0osZ0JBQ0Usa0JBQ0YsZ0JBQ0QsZUFDQyxnQkFDbEIiLCJmaWxlIjoicGFnZXNcXGNvbXBvbmVudHNcXHJlY2VudFRpcHMuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxKYWNvYlxcZGVzbW9uZC1jYXJ0ZXItZm9vdGJhbGwiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FsbG91dFwiPlxyXG4gICAgPHA+Q2Fyc29uIFdlbnR6OiBIZSB3aWxsIGJlIHBsYXlpbmcgYSBQYW50aGVycyB0ZWFtIHRoaXMgd2Vlaywgd2hvIGFyZSBnaXZpbmcgdXAgb3ZlciAyMCBmYW50YXN5IHBvaW50cyB0byBvcHBvc2luZyBxdWFydGVyYmFja3MuIFdlbnQgaGFzIHB1dCB1cCBvdmVyIDIwIGZhbmN5IHBvaW50cyB0aGUgbGFzdCB0aHJlZSB3ZWVrcy48L3A+XHJcbiAgICA8YSBoZWY9XCJcIj5Nb3JlIGFkdmljZTwvYT5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNhbGxvdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVuOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I4Yjg4ZjtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYjhiODhmO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl19 */\n/*@ sourceURL=pages\\components\\recentTips.js */"
  }));
});

/***/ }),

/***/ "./pages/components/testimonials.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\testimonials.js";


/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-486967811" + " " + "testimonials"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-486967811"
  }, "Dummy text"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-486967811" + " " + "testimonialText"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-486967811"
  }, "Dummy text"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-486967811"
  }, "Dummy text"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-486967811" + " " + "testMap"
  }, "Jacob is a fantastic coach who is able to dissect complicated problems into manageable solutions. He is always available to support and answer any questions. Ultimately, my win-rate has increased drastically since working with Jacob.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "486967811",
    css: ".testimonials.jsx-486967811{text-align:center;margin-left:200px;margin-right:200px;border:1px solid blue;}.testMap.jsx-486967811{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;text-align:center;max-width:40%;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFx0ZXN0aW1vbmlhbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLEFBRzZCLEFBT0wsa0JBTkssa0JBQ0MsbUJBQ0csbUJBS0QsR0FKdkIseUVBS29CLGtCQUNKLGNBQ0EsY0FDaEIiLCJmaWxlIjoicGFnZXNcXGNvbXBvbmVudHNcXHRlc3RpbW9uaWFscy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEphY29iXFxkZXNtb25kLWNhcnRlci1mb290YmFsbCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsc1wiPlxyXG4gICAgICA8aDI+RHVtbXkgdGV4dDwvaDI+XHJcbiAgICAgIHsvKiBlYWNoIHRlc3RpbW9uaWFscyB3aWxsIGhhdmUgaXQncyBvd24gLSB3aWxsIGRvIHNvbWUgc29ydCBvZiBtYXAgYW5kIHNob3cgYW5kIGhpZGUgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxUZXh0XCI+XHJcbiAgICAgICAgPGg2PkR1bW15IHRleHQ8L2g2PlxyXG4gICAgICAgIDxwPkR1bW15IHRleHQ8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVzdE1hcFwiPkphY29iIGlzIGEgZmFudGFzdGljIGNvYWNoIHdobyBpcyBhYmxlIHRvIGRpc3NlY3QgY29tcGxpY2F0ZWQgcHJvYmxlbXMgaW50byBtYW5hZ2VhYmxlIHNvbHV0aW9ucy4gSGUgaXMgYWx3YXlzIGF2YWlsYWJsZSB0byBzdXBwb3J0IGFuZCBhbnN3ZXIgYW55IHF1ZXN0aW9ucy4gVWx0aW1hdGVseSwgbXkgd2luLXJhdGUgaGFzIGluY3JlYXNlZCBkcmFzdGljYWxseSBzaW5jZSB3b3JraW5nIHdpdGggSmFjb2IuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC50ZXN0aW1vbmlhbHMge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVzdE1hcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=pages\\components\\testimonials.js */"
  }));
});

/***/ }),

/***/ "./pages/components/topBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__("./pages/components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar__ = __webpack_require__("./pages/components/navbar.js");
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\topBar.js";




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3219329351" + " " + "topBar"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3219329351",
    css: ".topBar.jsx-3219329351{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;background-color:#f5f5f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFx0b3BCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWtCLEFBR3dCLDBFQUNHLHFFQUNTLHlCQUMzQiIsImZpbGUiOiJwYWdlc1xcY29tcG9uZW50c1xcdG9wQmFyLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcSmFjb2JcXGRlc21vbmQtY2FydGVyLWZvb3RiYWxsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wQmFyXCI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnRvcEJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXX0= */\n/*@ sourceURL=pages\\components\\topBar.js */"
  }));
});

/***/ }),

/***/ "./pages/components/topColumns.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\components\\topColumns.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2944970518" + " " + "infoColumns"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2944970518"
  }, "Left column"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-2944970518"
  }, "Find those nuggets of information"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2944970518",
    css: ".infoColumns.jsx-2944970518{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:1px solid green;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:200px;padding-right:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFx0b3BDb2x1bW5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUd3QiwwRUFDVSx1QkFDTyxtSEFDWCxtQkFDQyxvQkFDdEIiLCJmaWxlIjoicGFnZXNcXGNvbXBvbmVudHNcXHRvcENvbHVtbnMuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxKYWNvYlxcZGVzbW9uZC1jYXJ0ZXItZm9vdGJhbGwiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiaW5mb0NvbHVtbnNcIj5cclxuICAgICAgPGRpdj5MZWZ0IGNvbHVtbjwvZGl2PlxyXG4gICAgICA8ZGl2PkZpbmQgdGhvc2UgbnVnZ2V0cyBvZiBpbmZvcm1hdGlvbjwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pbmZvQ29sdW1ucyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXX0= */\n/*@ sourceURL=pages\\components\\topColumns.js */"
  }));
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__("./pages/components/layout.js");
var _jsxFileName = "C:\\Users\\Jacob\\desmond-carter-football\\pages\\index.js";





var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map