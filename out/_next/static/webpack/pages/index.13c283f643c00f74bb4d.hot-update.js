webpackHotUpdate_N_E("pages/index",{

/***/ "./components/InvoiceReader/InvoiceReader.tsx":
/*!****************************************************!*\
  !*** ./components/InvoiceReader/InvoiceReader.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/InvoiceContext */ \"./components/InvoiceContext/index.ts\");\n/* harmony import */ var enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! enums */ \"./enums.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/home/neftaio/Develop/Projects/invoice-validator-co/components/InvoiceReader/InvoiceReader.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar InvoiceReader = function InvoiceReader() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      dispatchXmlBody = _useContext.dispatchXmlBody,\n      dispatchMessage = _useContext.dispatchMessage,\n      handleOpenMessage = _useContext.handleOpenMessage,\n      message = _useContext.message;\n\n  var handleOnChange = function handleOnChange(e) {\n    handleOpenMessage(false);\n    dispatchMessage([]);\n\n    var _e$target$files = Object(_home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.files, 1),\n        file = _e$target$files[0];\n\n    if (!file) return;\n    var fileName = file.name,\n        size = file.size,\n        fileType = file.type;\n\n    if (fileType !== \"text/xml\") {\n      dispatchMessage([{\n        text: \"El archivo no es reconocido como un XML\",\n        alerttype: enums__WEBPACK_IMPORTED_MODULE_3__[\"AlertType\"].ERROR\n      }]);\n      handleOpenMessage(true);\n    }\n\n    if (size < 1000) {\n      var sizeMB = size / 1000;\n      dispatchMessage(message.push({\n        text: \"El archivo \".concat(sizeMB)\n      }));\n    }\n\n    console.log(\"hellow\", file, fileName, size);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex w-full items-center justify-center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: \"flex flex-col items-center px-12 py-2 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer text-greenr-1000 bg-blackr-1000 hover:bg-greenr-1000 hover:text-black focus:bg-greenr-1000 focus:text-black border-greenr-1000 border-solid border font-semibold\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"text-base leading-normal\",\n        children: \"Add XML\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"file\",\n        className: \"hidden\",\n        onChange: handleOnChange,\n        accept: \".xml\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(InvoiceReader, \"5Xb9H4RtH4bg9pn7e0dvCnK5iLw=\");\n\n_c = InvoiceReader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvoiceReader);\n\nvar _c;\n\n$RefreshReg$(_c, \"InvoiceReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlUmVhZGVyL0ludm9pY2VSZWFkZXIudHN4PzJjNDkiXSwibmFtZXMiOlsiSW52b2ljZVJlYWRlciIsInVzZUNvbnRleHQiLCJJbnZvaWNlQ29udGV4dCIsImRpc3BhdGNoWG1sQm9keSIsImRpc3BhdGNoTWVzc2FnZSIsImhhbmRsZU9wZW5NZXNzYWdlIiwibWVzc2FnZSIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsImZpbGVOYW1lIiwibmFtZSIsInNpemUiLCJmaWxlVHlwZSIsInR5cGUiLCJ0ZXh0IiwiYWxlcnR0eXBlIiwiQWxlcnRUeXBlIiwiRVJST1IiLCJzaXplTUIiLCJwdXNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCLEdBQU07QUFBQTs7QUFBQSxvQkFNaENDLHdEQUFVLENBQUNDLGtFQUFELENBTnNCO0FBQUEsTUFFbENDLGVBRmtDLGVBRWxDQSxlQUZrQztBQUFBLE1BR2xDQyxlQUhrQyxlQUdsQ0EsZUFIa0M7QUFBQSxNQUlsQ0MsaUJBSmtDLGVBSWxDQSxpQkFKa0M7QUFBQSxNQUtsQ0MsT0FMa0MsZUFLbENBLE9BTGtDOztBQVFwQyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBNEM7QUFDakVILHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFFQUQsbUJBQWUsQ0FBQyxFQUFELENBQWY7O0FBSGlFLG1MQUtsREksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBTHlDO0FBQUEsUUFLMURDLElBTDBEOztBQU9qRSxRQUFJLENBQUNBLElBQUwsRUFBVztBQVBzRCxRQVNuREMsUUFUbUQsR0FTaEJELElBVGdCLENBU3pERSxJQVR5RDtBQUFBLFFBU3pDQyxJQVR5QyxHQVNoQkgsSUFUZ0IsQ0FTekNHLElBVHlDO0FBQUEsUUFTN0JDLFFBVDZCLEdBU2hCSixJQVRnQixDQVNuQ0ssSUFUbUM7O0FBV2pFLFFBQUlELFFBQVEsS0FBSyxVQUFqQixFQUE2QjtBQUMzQlgscUJBQWUsQ0FBQyxDQUNkO0FBQ0VhLFlBQUksRUFBRSx5Q0FEUjtBQUVFQyxpQkFBUyxFQUFFQywrQ0FBUyxDQUFDQztBQUZ2QixPQURjLENBQUQsQ0FBZjtBQU9BZix1QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0Q7O0FBRUQsUUFBSVMsSUFBSSxHQUFHLElBQVgsRUFBaUI7QUFDZixVQUFJTyxNQUFNLEdBQUdQLElBQUksR0FBRyxJQUFwQjtBQUNBVixxQkFBZSxDQUFDRSxPQUFPLENBQUNnQixJQUFSLENBQWE7QUFBRUwsWUFBSSx1QkFBZ0JJLE1BQWhCO0FBQU4sT0FBYixDQUFELENBQWY7QUFDRDs7QUFFREUsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQmIsSUFBdEIsRUFBNEJDLFFBQTVCLEVBQXNDRSxJQUF0QztBQUNELEdBNUJEOztBQThCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx5Q0FBZjtBQUFBLDJCQUNFO0FBQU8sZUFBUyxFQUFDLG9RQUFqQjtBQUFBLDhCQUNFO0FBQU0saUJBQVMsRUFBQywwQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxpQkFBUyxFQUFDLFFBRlo7QUFHRSxnQkFBUSxFQUFFUCxjQUhaO0FBSUUsY0FBTSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBbkREOztHQUFNUCxhOztLQUFBQSxhO0FBcURTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW52b2ljZVJlYWRlci9JbnZvaWNlUmVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnZvaWNlQ29udGV4dCBmcm9tIFwiQGNvbXBvbmVudHMvSW52b2ljZUNvbnRleHRcIjtcbmltcG9ydCB7IEFsZXJ0VHlwZSB9IGZyb20gXCJlbnVtc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW52b2ljZVJlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkaXNwYXRjaFhtbEJvZHksXG4gICAgZGlzcGF0Y2hNZXNzYWdlLFxuICAgIGhhbmRsZU9wZW5NZXNzYWdlLFxuICAgIG1lc3NhZ2UsXG4gIH0gPSB1c2VDb250ZXh0KEludm9pY2VDb250ZXh0KTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGhhbmRsZU9wZW5NZXNzYWdlKGZhbHNlKTtcblxuICAgIGRpc3BhdGNoTWVzc2FnZShbXSk7XG5cbiAgICBjb25zdCBbZmlsZV0gPSBlLnRhcmdldC5maWxlcztcblxuICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBuYW1lOiBmaWxlTmFtZSwgc2l6ZSwgdHlwZTogZmlsZVR5cGUgfSA9IGZpbGU7XG5cbiAgICBpZiAoZmlsZVR5cGUgIT09IFwidGV4dC94bWxcIikge1xuICAgICAgZGlzcGF0Y2hNZXNzYWdlKFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiRWwgYXJjaGl2byBubyBlcyByZWNvbm9jaWRvIGNvbW8gdW4gWE1MXCIsXG4gICAgICAgICAgYWxlcnR0eXBlOiBBbGVydFR5cGUuRVJST1IsXG4gICAgICAgIH0sXG4gICAgICBdKTtcblxuICAgICAgaGFuZGxlT3Blbk1lc3NhZ2UodHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNpemUgPCAxMDAwKSB7XG4gICAgICBsZXQgc2l6ZU1CID0gc2l6ZSAvIDEwMDA7XG4gICAgICBkaXNwYXRjaE1lc3NhZ2UobWVzc2FnZS5wdXNoKHsgdGV4dDogYEVsIGFyY2hpdm8gJHtzaXplTUJ9YCB9KSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJoZWxsb3dcIiwgZmlsZSwgZmlsZU5hbWUsIHNpemUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweC0xMiBweS0yIHJvdW5kZWQtbGcgc2hhZG93LWxnIHRyYWNraW5nLXdpZGUgdXBwZXJjYXNlIGN1cnNvci1wb2ludGVyIHRleHQtZ3JlZW5yLTEwMDAgYmctYmxhY2tyLTEwMDAgaG92ZXI6YmctZ3JlZW5yLTEwMDAgaG92ZXI6dGV4dC1ibGFjayBmb2N1czpiZy1ncmVlbnItMTAwMCBmb2N1czp0ZXh0LWJsYWNrIGJvcmRlci1ncmVlbnItMTAwMCBib3JkZXItc29saWQgYm9yZGVyIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxlYWRpbmctbm9ybWFsXCI+QWRkIFhNTDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgIGFjY2VwdD1cIi54bWxcIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludm9pY2VSZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InvoiceReader/InvoiceReader.tsx\n");

/***/ })

})