webpackHotUpdate_N_E("pages/index",{

/***/ "./components/InvoiceReader/InvoiceReader.tsx":
/*!****************************************************!*\
  !*** ./components/InvoiceReader/InvoiceReader.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/InvoiceContext */ \"./components/InvoiceContext/index.ts\");\n/* harmony import */ var enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! enums */ \"./enums.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/neftaio/Develop/Projects/invoice-validator-co/components/InvoiceReader/InvoiceReader.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar InvoiceReader = function InvoiceReader() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      validated = _useState[0],\n      setValidated = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      fileName = _useState2[0],\n      setFileName = _useState2[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      dispatchXmlBody = _useContext.dispatchXmlBody,\n      dispatchMessage = _useContext.dispatchMessage,\n      handleOpenMessage = _useContext.handleOpenMessage,\n      message = _useContext.message;\n\n  var handleOnChange = function handleOnChange(e) {\n    handleOpenMessage(false);\n    dispatchMessage([]);\n    setFileName(\"\");\n\n    var _e$target$files = Object(_home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.files, 1),\n        file = _e$target$files[0];\n\n    if (!file) return;\n    var name = file.name,\n        size = file.size,\n        fileType = file.type;\n    setFileName(name);\n\n    if (fileType !== \"text/xml\") {\n      setValidated(0);\n      dispatchMessage([{\n        text: \"El archivo no es reconocido como un XML\",\n        alerttype: enums__WEBPACK_IMPORTED_MODULE_3__[\"AlertType\"].ERROR\n      }]);\n      handleOpenMessage(true);\n    }\n\n    if (size < 1000) {\n      setValidated(0);\n      var sizeMB = size / 1000;\n      message.push({\n        text: \"El archivo pesa: \".concat(sizeMB, \", solo se admiten arcihvos de menos de 1MB\"),\n        alerttype: enums__WEBPACK_IMPORTED_MODULE_3__[\"AlertType\"].ERROR\n      });\n      dispatchMessage(message);\n    } //console.log(\"hellow\", file, fileName, size);\n\n\n    if (validated) {\n      readFile(file);\n    }\n  };\n\n  var readFile = function readFile(file) {\n    console.log(\"read file .....\");\n    var reader = new FileReader(); //let text = reader.readAsText(file);\n\n    reader.onload = function (e) {\n      console.log(e.target.result);\n    }; //console.log(text);\n\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex w-full items-center justify-center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        className: \"flex flex-col items-center px-12 py-2 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer text-greenr-1000 bg-blackr-1000 hover:bg-greenr-1000 hover:text-black focus:bg-greenr-1000 focus:text-black border-greenr-1000 border-solid border font-semibold\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"text-base leading-normal\",\n          children: \"Add XML\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          className: \"hidden\",\n          onChange: handleOnChange,\n          accept: \".xml\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-center mt-2\",\n      children: fileName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(InvoiceReader, \"9U+2JnzDybhWWabbhsfL0qnSd0s=\");\n\n_c = InvoiceReader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvoiceReader);\n\nvar _c;\n\n$RefreshReg$(_c, \"InvoiceReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlUmVhZGVyL0ludm9pY2VSZWFkZXIudHN4PzJjNDkiXSwibmFtZXMiOlsiSW52b2ljZVJlYWRlciIsInVzZVN0YXRlIiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsInVzZUNvbnRleHQiLCJJbnZvaWNlQ29udGV4dCIsImRpc3BhdGNoWG1sQm9keSIsImRpc3BhdGNoTWVzc2FnZSIsImhhbmRsZU9wZW5NZXNzYWdlIiwibWVzc2FnZSIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsIm5hbWUiLCJzaXplIiwiZmlsZVR5cGUiLCJ0eXBlIiwidGV4dCIsImFsZXJ0dHlwZSIsIkFsZXJ0VHlwZSIsIkVSUk9SIiwic2l6ZU1CIiwicHVzaCIsInJlYWRGaWxlIiwiY29uc29sZSIsImxvZyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEIsR0FBTTtBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxDQUFTLENBQVQsQ0FETjtBQUFBLE1BQzdCQyxTQUQ2QjtBQUFBLE1BQ2xCQyxZQURrQjs7QUFBQSxtQkFHSkYsc0RBQVEsQ0FBUyxFQUFULENBSEo7QUFBQSxNQUc3QkcsUUFINkI7QUFBQSxNQUduQkMsV0FIbUI7O0FBQUEsb0JBVWhDQyx3REFBVSxDQUFDQyxrRUFBRCxDQVZzQjtBQUFBLE1BTWxDQyxlQU5rQyxlQU1sQ0EsZUFOa0M7QUFBQSxNQU9sQ0MsZUFQa0MsZUFPbENBLGVBUGtDO0FBQUEsTUFRbENDLGlCQVJrQyxlQVFsQ0EsaUJBUmtDO0FBQUEsTUFTbENDLE9BVGtDLGVBU2xDQSxPQVRrQzs7QUFZcEMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQTRDO0FBQ2pFSCxxQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBRUFELG1CQUFlLENBQUMsRUFBRCxDQUFmO0FBRUFKLGVBQVcsQ0FBQyxFQUFELENBQVg7O0FBTGlFLG1MQU9sRFEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBUHlDO0FBQUEsUUFPMURDLElBUDBEOztBQVNqRSxRQUFJLENBQUNBLElBQUwsRUFBVztBQVRzRCxRQVd6REMsSUFYeUQsR0FXMUJELElBWDBCLENBV3pEQyxJQVh5RDtBQUFBLFFBV25EQyxJQVhtRCxHQVcxQkYsSUFYMEIsQ0FXbkRFLElBWG1EO0FBQUEsUUFXdkNDLFFBWHVDLEdBVzFCSCxJQVgwQixDQVc3Q0ksSUFYNkM7QUFhakVmLGVBQVcsQ0FBQ1ksSUFBRCxDQUFYOztBQUVBLFFBQUlFLFFBQVEsS0FBSyxVQUFqQixFQUE2QjtBQUMzQmhCLGtCQUFZLENBQUMsQ0FBRCxDQUFaO0FBRUFNLHFCQUFlLENBQUMsQ0FDZDtBQUNFWSxZQUFJLEVBQUUseUNBRFI7QUFFRUMsaUJBQVMsRUFBRUMsK0NBQVMsQ0FBQ0M7QUFGdkIsT0FEYyxDQUFELENBQWY7QUFPQWQsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNEOztBQUVELFFBQUlRLElBQUksR0FBRyxJQUFYLEVBQWlCO0FBQ2ZmLGtCQUFZLENBQUMsQ0FBRCxDQUFaO0FBRUEsVUFBSXNCLE1BQU0sR0FBR1AsSUFBSSxHQUFHLElBQXBCO0FBRUFQLGFBQU8sQ0FBQ2UsSUFBUixDQUFhO0FBQ1hMLFlBQUksNkJBQXNCSSxNQUF0QiwrQ0FETztBQUVYSCxpQkFBUyxFQUFFQywrQ0FBUyxDQUFDQztBQUZWLE9BQWI7QUFLQWYscUJBQWUsQ0FBQ0UsT0FBRCxDQUFmO0FBQ0QsS0F2Q2dFLENBeUNqRTs7O0FBRUEsUUFBSVQsU0FBSixFQUFlO0FBQ2J5QixjQUFRLENBQUNYLElBQUQsQ0FBUjtBQUNEO0FBQ0YsR0E5Q0Q7O0FBZ0RBLE1BQU1XLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNYLElBQUQsRUFBVTtBQUN6QlksV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQSxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmLENBRnlCLENBR3pCOztBQUNBRCxVQUFNLENBQUNFLE1BQVAsR0FBZ0IsVUFBQ25CLENBQUQsRUFBTztBQUNyQmUsYUFBTyxDQUFDQyxHQUFSLENBQVloQixDQUFDLENBQUNDLE1BQUYsQ0FBU21CLE1BQXJCO0FBQ0QsS0FGRCxDQUp5QixDQU96Qjs7QUFDRCxHQVJEOztBQVVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMseUNBQWY7QUFBQSw2QkFDRTtBQUFPLGlCQUFTLEVBQUMsb1FBQWpCO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFDLDBCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxtQkFBUyxFQUFDLFFBRlo7QUFHRSxrQkFBUSxFQUFFckIsY0FIWjtBQUlFLGdCQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVlFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsZ0JBQW1DUjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQSxrQkFERjtBQWdCRCxDQXRGRDs7R0FBTUosYTs7S0FBQUEsYTtBQXdGU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludm9pY2VSZWFkZXIvSW52b2ljZVJlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW52b2ljZUNvbnRleHQgZnJvbSBcIkBjb21wb25lbnRzL0ludm9pY2VDb250ZXh0XCI7XG5pbXBvcnQgeyBBbGVydFR5cGUgfSBmcm9tIFwiZW51bXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbnZvaWNlUmVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbGlkYXRlZCwgc2V0VmFsaWRhdGVkXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG5cbiAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IHtcbiAgICBkaXNwYXRjaFhtbEJvZHksXG4gICAgZGlzcGF0Y2hNZXNzYWdlLFxuICAgIGhhbmRsZU9wZW5NZXNzYWdlLFxuICAgIG1lc3NhZ2UsXG4gIH0gPSB1c2VDb250ZXh0KEludm9pY2VDb250ZXh0KTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGhhbmRsZU9wZW5NZXNzYWdlKGZhbHNlKTtcblxuICAgIGRpc3BhdGNoTWVzc2FnZShbXSk7XG5cbiAgICBzZXRGaWxlTmFtZShcIlwiKTtcblxuICAgIGNvbnN0IFtmaWxlXSA9IGUudGFyZ2V0LmZpbGVzO1xuXG4gICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICBjb25zdCB7IG5hbWUsIHNpemUsIHR5cGU6IGZpbGVUeXBlIH0gPSBmaWxlO1xuXG4gICAgc2V0RmlsZU5hbWUobmFtZSk7XG5cbiAgICBpZiAoZmlsZVR5cGUgIT09IFwidGV4dC94bWxcIikge1xuICAgICAgc2V0VmFsaWRhdGVkKDApO1xuXG4gICAgICBkaXNwYXRjaE1lc3NhZ2UoW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJFbCBhcmNoaXZvIG5vIGVzIHJlY29ub2NpZG8gY29tbyB1biBYTUxcIixcbiAgICAgICAgICBhbGVydHR5cGU6IEFsZXJ0VHlwZS5FUlJPUixcbiAgICAgICAgfSxcbiAgICAgIF0pO1xuXG4gICAgICBoYW5kbGVPcGVuTWVzc2FnZSh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8IDEwMDApIHtcbiAgICAgIHNldFZhbGlkYXRlZCgwKTtcblxuICAgICAgbGV0IHNpemVNQiA9IHNpemUgLyAxMDAwO1xuXG4gICAgICBtZXNzYWdlLnB1c2goe1xuICAgICAgICB0ZXh0OiBgRWwgYXJjaGl2byBwZXNhOiAke3NpemVNQn0sIHNvbG8gc2UgYWRtaXRlbiBhcmNpaHZvcyBkZSBtZW5vcyBkZSAxTUJgLFxuICAgICAgICBhbGVydHR5cGU6IEFsZXJ0VHlwZS5FUlJPUixcbiAgICAgIH0pO1xuXG4gICAgICBkaXNwYXRjaE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmxvZyhcImhlbGxvd1wiLCBmaWxlLCBmaWxlTmFtZSwgc2l6ZSk7XG5cbiAgICBpZiAodmFsaWRhdGVkKSB7XG4gICAgICByZWFkRmlsZShmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVhZEZpbGUgPSAoZmlsZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVhZCBmaWxlIC4uLi4uXCIpO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgLy9sZXQgdGV4dCA9IHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucmVzdWx0KTtcbiAgICB9O1xuICAgIC8vY29uc29sZS5sb2codGV4dCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB4LTEyIHB5LTIgcm91bmRlZC1sZyBzaGFkb3ctbGcgdHJhY2tpbmctd2lkZSB1cHBlcmNhc2UgY3Vyc29yLXBvaW50ZXIgdGV4dC1ncmVlbnItMTAwMCBiZy1ibGFja3ItMTAwMCBob3ZlcjpiZy1ncmVlbnItMTAwMCBob3Zlcjp0ZXh0LWJsYWNrIGZvY3VzOmJnLWdyZWVuci0xMDAwIGZvY3VzOnRleHQtYmxhY2sgYm9yZGVyLWdyZWVuci0xMDAwIGJvcmRlci1zb2xpZCBib3JkZXIgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZWFkaW5nLW5vcm1hbFwiPkFkZCBYTUw8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgYWNjZXB0PVwiLnhtbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yXCI+e2ZpbGVOYW1lfTwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW52b2ljZVJlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InvoiceReader/InvoiceReader.tsx\n");

/***/ })

})