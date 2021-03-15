webpackHotUpdate_N_E("pages/index",{

/***/ "./components/InvoiceReader/InvoiceReader.tsx":
/*!****************************************************!*\
  !*** ./components/InvoiceReader/InvoiceReader.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/InvoiceContext */ \"./components/InvoiceContext/index.ts\");\n/* harmony import */ var enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! enums */ \"./enums.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/home/neftaio/Develop/Projects/invoice-validator-co/components/InvoiceReader/InvoiceReader.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar InvoiceReader = function InvoiceReader() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      dispatchXmlBody = _useContext.dispatchXmlBody,\n      dispatchMessage = _useContext.dispatchMessage,\n      handleOpenMessage = _useContext.handleOpenMessage,\n      message = _useContext.message;\n\n  var handleOnChange = function handleOnChange(e) {\n    handleOpenMessage(false);\n    dispatchMessage([]);\n\n    var _e$target$files = Object(_home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.files, 1),\n        file = _e$target$files[0];\n\n    if (!file) return;\n    var fileName = file.name,\n        size = file.size,\n        fileType = file.type;\n\n    if (fileType !== \"text/xml\") {\n      dispatchMessage([{\n        text: \"El archivo no es reconocido como un XML\",\n        alerttype: enums__WEBPACK_IMPORTED_MODULE_3__[\"AlertType\"].ERROR\n      }]);\n      handleOpenMessage(true);\n    }\n\n    if (size < 1000) {\n      var sizeMB = size / 1000;\n      message.push({\n        text: \"El archivo pesa: \".concat(sizeMB, \", solo se admiten arcihvos de menos de 1MB\"),\n        alerttype: enums__WEBPACK_IMPORTED_MODULE_3__[\"AlertType\"].ERROR\n      });\n      dispatchMessage(message);\n    }\n\n    console.log(\"hellow\", file, fileName, size);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex w-full items-center justify-center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: \"flex flex-col items-center px-12 py-2 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer text-greenr-1000 bg-blackr-1000 hover:bg-greenr-1000 hover:text-black focus:bg-greenr-1000 focus:text-black border-greenr-1000 border-solid border font-semibold\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"text-base leading-normal\",\n        children: \"Add XML\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"file\",\n        className: \"hidden\",\n        onChange: handleOnChange,\n        accept: \".xml\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(InvoiceReader, \"5Xb9H4RtH4bg9pn7e0dvCnK5iLw=\");\n\n_c = InvoiceReader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvoiceReader);\n\nvar _c;\n\n$RefreshReg$(_c, \"InvoiceReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlUmVhZGVyL0ludm9pY2VSZWFkZXIudHN4PzJjNDkiXSwibmFtZXMiOlsiSW52b2ljZVJlYWRlciIsInVzZUNvbnRleHQiLCJJbnZvaWNlQ29udGV4dCIsImRpc3BhdGNoWG1sQm9keSIsImRpc3BhdGNoTWVzc2FnZSIsImhhbmRsZU9wZW5NZXNzYWdlIiwibWVzc2FnZSIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsImZpbGVOYW1lIiwibmFtZSIsInNpemUiLCJmaWxlVHlwZSIsInR5cGUiLCJ0ZXh0IiwiYWxlcnR0eXBlIiwiQWxlcnRUeXBlIiwiRVJST1IiLCJzaXplTUIiLCJwdXNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCLEdBQU07QUFBQTs7QUFBQSxvQkFNaENDLHdEQUFVLENBQUNDLGtFQUFELENBTnNCO0FBQUEsTUFFbENDLGVBRmtDLGVBRWxDQSxlQUZrQztBQUFBLE1BR2xDQyxlQUhrQyxlQUdsQ0EsZUFIa0M7QUFBQSxNQUlsQ0MsaUJBSmtDLGVBSWxDQSxpQkFKa0M7QUFBQSxNQUtsQ0MsT0FMa0MsZUFLbENBLE9BTGtDOztBQVFwQyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBNEM7QUFDakVILHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFFQUQsbUJBQWUsQ0FBQyxFQUFELENBQWY7O0FBSGlFLG1MQUtsREksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBTHlDO0FBQUEsUUFLMURDLElBTDBEOztBQU9qRSxRQUFJLENBQUNBLElBQUwsRUFBVztBQVBzRCxRQVNuREMsUUFUbUQsR0FTaEJELElBVGdCLENBU3pERSxJQVR5RDtBQUFBLFFBU3pDQyxJQVR5QyxHQVNoQkgsSUFUZ0IsQ0FTekNHLElBVHlDO0FBQUEsUUFTN0JDLFFBVDZCLEdBU2hCSixJQVRnQixDQVNuQ0ssSUFUbUM7O0FBV2pFLFFBQUlELFFBQVEsS0FBSyxVQUFqQixFQUE2QjtBQUMzQlgscUJBQWUsQ0FBQyxDQUNkO0FBQ0VhLFlBQUksRUFBRSx5Q0FEUjtBQUVFQyxpQkFBUyxFQUFFQywrQ0FBUyxDQUFDQztBQUZ2QixPQURjLENBQUQsQ0FBZjtBQU9BZix1QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0Q7O0FBRUQsUUFBSVMsSUFBSSxHQUFHLElBQVgsRUFBaUI7QUFDZixVQUFJTyxNQUFNLEdBQUdQLElBQUksR0FBRyxJQUFwQjtBQUVBUixhQUFPLENBQUNnQixJQUFSLENBQWE7QUFDWEwsWUFBSSw2QkFBc0JJLE1BQXRCLCtDQURPO0FBRVhILGlCQUFTLEVBQUVDLCtDQUFTLENBQUNDO0FBRlYsT0FBYjtBQUtBaEIscUJBQWUsQ0FBQ0UsT0FBRCxDQUFmO0FBQ0Q7O0FBRURpQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCYixJQUF0QixFQUE0QkMsUUFBNUIsRUFBc0NFLElBQXRDO0FBQ0QsR0FsQ0Q7O0FBb0NBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUEsMkJBQ0U7QUFBTyxlQUFTLEVBQUMsb1FBQWpCO0FBQUEsOEJBQ0U7QUFBTSxpQkFBUyxFQUFDLDBCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFTLEVBQUMsUUFGWjtBQUdFLGdCQUFRLEVBQUVQLGNBSFo7QUFJRSxjQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0F6REQ7O0dBQU1QLGE7O0tBQUFBLGE7QUEyRFNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnZvaWNlUmVhZGVyL0ludm9pY2VSZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludm9pY2VDb250ZXh0IGZyb20gXCJAY29tcG9uZW50cy9JbnZvaWNlQ29udGV4dFwiO1xuaW1wb3J0IHsgQWxlcnRUeXBlIH0gZnJvbSBcImVudW1zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbnZvaWNlUmVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGRpc3BhdGNoWG1sQm9keSxcbiAgICBkaXNwYXRjaE1lc3NhZ2UsXG4gICAgaGFuZGxlT3Blbk1lc3NhZ2UsXG4gICAgbWVzc2FnZSxcbiAgfSA9IHVzZUNvbnRleHQoSW52b2ljZUNvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaGFuZGxlT3Blbk1lc3NhZ2UoZmFsc2UpO1xuXG4gICAgZGlzcGF0Y2hNZXNzYWdlKFtdKTtcblxuICAgIGNvbnN0IFtmaWxlXSA9IGUudGFyZ2V0LmZpbGVzO1xuXG4gICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICBjb25zdCB7IG5hbWU6IGZpbGVOYW1lLCBzaXplLCB0eXBlOiBmaWxlVHlwZSB9ID0gZmlsZTtcblxuICAgIGlmIChmaWxlVHlwZSAhPT0gXCJ0ZXh0L3htbFwiKSB7XG4gICAgICBkaXNwYXRjaE1lc3NhZ2UoW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJFbCBhcmNoaXZvIG5vIGVzIHJlY29ub2NpZG8gY29tbyB1biBYTUxcIixcbiAgICAgICAgICBhbGVydHR5cGU6IEFsZXJ0VHlwZS5FUlJPUixcbiAgICAgICAgfSxcbiAgICAgIF0pO1xuXG4gICAgICBoYW5kbGVPcGVuTWVzc2FnZSh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8IDEwMDApIHtcbiAgICAgIGxldCBzaXplTUIgPSBzaXplIC8gMTAwMDtcblxuICAgICAgbWVzc2FnZS5wdXNoKHtcbiAgICAgICAgdGV4dDogYEVsIGFyY2hpdm8gcGVzYTogJHtzaXplTUJ9LCBzb2xvIHNlIGFkbWl0ZW4gYXJjaWh2b3MgZGUgbWVub3MgZGUgMU1CYCxcbiAgICAgICAgYWxlcnR0eXBlOiBBbGVydFR5cGUuRVJST1IsXG4gICAgICB9KTtcblxuICAgICAgZGlzcGF0Y2hNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG93XCIsIGZpbGUsIGZpbGVOYW1lLCBzaXplKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHgtMTIgcHktMiByb3VuZGVkLWxnIHNoYWRvdy1sZyB0cmFja2luZy13aWRlIHVwcGVyY2FzZSBjdXJzb3ItcG9pbnRlciB0ZXh0LWdyZWVuci0xMDAwIGJnLWJsYWNrci0xMDAwIGhvdmVyOmJnLWdyZWVuci0xMDAwIGhvdmVyOnRleHQtYmxhY2sgZm9jdXM6YmctZ3JlZW5yLTEwMDAgZm9jdXM6dGV4dC1ibGFjayBib3JkZXItZ3JlZW5yLTEwMDAgYm9yZGVyLXNvbGlkIGJvcmRlciBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZWFkaW5nLW5vcm1hbFwiPkFkZCBYTUw8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICBhY2NlcHQ9XCIueG1sXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnZvaWNlUmVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InvoiceReader/InvoiceReader.tsx\n");

/***/ })

})