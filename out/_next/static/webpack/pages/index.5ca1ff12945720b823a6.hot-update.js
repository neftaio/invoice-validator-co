webpackHotUpdate_N_E("pages/index",{

/***/ "./components/InvoiceReader/InvoiceReader.tsx":
/*!****************************************************!*\
  !*** ./components/InvoiceReader/InvoiceReader.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/InvoiceContext */ \"./components/InvoiceContext/index.ts\");\n/* harmony import */ var enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! enums */ \"./enums.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/home/neftaio/Develop/Projects/invoice-validator-co/components/InvoiceReader/InvoiceReader.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar InvoiceReader = function InvoiceReader() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      validated = _useState[0],\n      setValidated = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      xmlFile = _useState2[0],\n      setXmlFile = _useState2[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      dispatchXmlBody = _useContext.dispatchXmlBody,\n      dispatchMessage = _useContext.dispatchMessage,\n      handleOpenMessage = _useContext.handleOpenMessage,\n      message = _useContext.message;\n\n  var handleOnChange = function handleOnChange(e) {\n    handleOpenMessage(false);\n    dispatchMessage([]);\n\n    var _e$target$files = Object(_home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.files, 1),\n        file = _e$target$files[0];\n\n    if (!file) return;\n    var fileName = file.name,\n        size = file.size,\n        fileType = file.type;\n    setXmlFile(file);\n\n    if (fileType !== \"text/xml\") {\n      setValidated(0);\n      dispatchMessage([{\n        text: \"El archivo no es reconocido como un XML\",\n        alerttype: enums__WEBPACK_IMPORTED_MODULE_3__[\"AlertType\"].ERROR\n      }]);\n      handleOpenMessage(true);\n    }\n\n    if (size < 1000) {\n      setValidated(0);\n      var sizeMB = size / 1000;\n      message.push({\n        text: \"El archivo pesa: \".concat(sizeMB, \", solo se admiten arcihvos de menos de 1MB\"),\n        alerttype: enums__WEBPACK_IMPORTED_MODULE_3__[\"AlertType\"].ERROR\n      });\n      dispatchMessage(message);\n    } //console.log(\"hellow\", file, fileName, size);\n\n\n    if (validated) {\n      readFile(file);\n    }\n  };\n\n  var readFile = function readFile(file) {\n    console.log(\"read file .....\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex w-full items-center justify-center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: \"flex flex-col items-center px-12 py-2 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer text-greenr-1000 bg-blackr-1000 hover:bg-greenr-1000 hover:text-black focus:bg-greenr-1000 focus:text-black border-greenr-1000 border-solid border font-semibold\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"text-base leading-normal\",\n        children: \"Add XML\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"file\",\n        className: \"hidden\",\n        onChange: handleOnChange,\n        accept: \".xml\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(InvoiceReader, \"y+bj6Re3bP2NRoQlLhjJ9qWdLv8=\");\n\n_c = InvoiceReader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvoiceReader);\n\nvar _c;\n\n$RefreshReg$(_c, \"InvoiceReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlUmVhZGVyL0ludm9pY2VSZWFkZXIudHN4PzJjNDkiXSwibmFtZXMiOlsiSW52b2ljZVJlYWRlciIsInVzZVN0YXRlIiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwieG1sRmlsZSIsInNldFhtbEZpbGUiLCJ1c2VDb250ZXh0IiwiSW52b2ljZUNvbnRleHQiLCJkaXNwYXRjaFhtbEJvZHkiLCJkaXNwYXRjaE1lc3NhZ2UiLCJoYW5kbGVPcGVuTWVzc2FnZSIsIm1lc3NhZ2UiLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGUiLCJmaWxlTmFtZSIsIm5hbWUiLCJzaXplIiwiZmlsZVR5cGUiLCJ0eXBlIiwidGV4dCIsImFsZXJ0dHlwZSIsIkFsZXJ0VHlwZSIsIkVSUk9SIiwic2l6ZU1CIiwicHVzaCIsInJlYWRGaWxlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCLEdBQU07QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBUyxDQUFULENBRE47QUFBQSxNQUM3QkMsU0FENkI7QUFBQSxNQUNsQkMsWUFEa0I7O0FBQUEsbUJBR05GLHNEQUFRLENBQWMsSUFBZCxDQUhGO0FBQUEsTUFHN0JHLE9BSDZCO0FBQUEsTUFHcEJDLFVBSG9COztBQUFBLG9CQVVoQ0Msd0RBQVUsQ0FBQ0Msa0VBQUQsQ0FWc0I7QUFBQSxNQU1sQ0MsZUFOa0MsZUFNbENBLGVBTmtDO0FBQUEsTUFPbENDLGVBUGtDLGVBT2xDQSxlQVBrQztBQUFBLE1BUWxDQyxpQkFSa0MsZUFRbENBLGlCQVJrQztBQUFBLE1BU2xDQyxPQVRrQyxlQVNsQ0EsT0FUa0M7O0FBWXBDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUE0QztBQUNqRUgscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUVBRCxtQkFBZSxDQUFDLEVBQUQsQ0FBZjs7QUFIaUUsbUxBS2xESSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FMeUM7QUFBQSxRQUsxREMsSUFMMEQ7O0FBT2pFLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBUHNELFFBU25EQyxRQVRtRCxHQVNoQkQsSUFUZ0IsQ0FTekRFLElBVHlEO0FBQUEsUUFTekNDLElBVHlDLEdBU2hCSCxJQVRnQixDQVN6Q0csSUFUeUM7QUFBQSxRQVM3QkMsUUFUNkIsR0FTaEJKLElBVGdCLENBU25DSyxJQVRtQztBQVdqRWhCLGNBQVUsQ0FBQ1csSUFBRCxDQUFWOztBQUVBLFFBQUlJLFFBQVEsS0FBSyxVQUFqQixFQUE2QjtBQUMzQmpCLGtCQUFZLENBQUMsQ0FBRCxDQUFaO0FBRUFNLHFCQUFlLENBQUMsQ0FDZDtBQUNFYSxZQUFJLEVBQUUseUNBRFI7QUFFRUMsaUJBQVMsRUFBRUMsK0NBQVMsQ0FBQ0M7QUFGdkIsT0FEYyxDQUFELENBQWY7QUFPQWYsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNEOztBQUVELFFBQUlTLElBQUksR0FBRyxJQUFYLEVBQWlCO0FBQ2ZoQixrQkFBWSxDQUFDLENBQUQsQ0FBWjtBQUVBLFVBQUl1QixNQUFNLEdBQUdQLElBQUksR0FBRyxJQUFwQjtBQUVBUixhQUFPLENBQUNnQixJQUFSLENBQWE7QUFDWEwsWUFBSSw2QkFBc0JJLE1BQXRCLCtDQURPO0FBRVhILGlCQUFTLEVBQUVDLCtDQUFTLENBQUNDO0FBRlYsT0FBYjtBQUtBaEIscUJBQWUsQ0FBQ0UsT0FBRCxDQUFmO0FBQ0QsS0FyQ2dFLENBdUNqRTs7O0FBRUEsUUFBSVQsU0FBSixFQUFlO0FBQ2IwQixjQUFRLENBQUNaLElBQUQsQ0FBUjtBQUNEO0FBQ0YsR0E1Q0Q7O0FBOENBLE1BQU1ZLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNaLElBQUQsRUFBVTtBQUN6QmEsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUEsMkJBQ0U7QUFBTyxlQUFTLEVBQUMsb1FBQWpCO0FBQUEsOEJBQ0U7QUFBTSxpQkFBUyxFQUFDLDBCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFTLEVBQUMsUUFGWjtBQUdFLGdCQUFRLEVBQUVsQixjQUhaO0FBSUUsY0FBTSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBM0VEOztHQUFNWixhOztLQUFBQSxhO0FBNkVTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW52b2ljZVJlYWRlci9JbnZvaWNlUmVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnZvaWNlQ29udGV4dCBmcm9tIFwiQGNvbXBvbmVudHMvSW52b2ljZUNvbnRleHRcIjtcbmltcG9ydCB7IEFsZXJ0VHlwZSB9IGZyb20gXCJlbnVtc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEludm9pY2VSZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICBjb25zdCBbeG1sRmlsZSwgc2V0WG1sRmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3Qge1xuICAgIGRpc3BhdGNoWG1sQm9keSxcbiAgICBkaXNwYXRjaE1lc3NhZ2UsXG4gICAgaGFuZGxlT3Blbk1lc3NhZ2UsXG4gICAgbWVzc2FnZSxcbiAgfSA9IHVzZUNvbnRleHQoSW52b2ljZUNvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaGFuZGxlT3Blbk1lc3NhZ2UoZmFsc2UpO1xuXG4gICAgZGlzcGF0Y2hNZXNzYWdlKFtdKTtcblxuICAgIGNvbnN0IFtmaWxlXSA9IGUudGFyZ2V0LmZpbGVzO1xuXG4gICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICBjb25zdCB7IG5hbWU6IGZpbGVOYW1lLCBzaXplLCB0eXBlOiBmaWxlVHlwZSB9ID0gZmlsZTtcblxuICAgIHNldFhtbEZpbGUoZmlsZSk7XG5cbiAgICBpZiAoZmlsZVR5cGUgIT09IFwidGV4dC94bWxcIikge1xuICAgICAgc2V0VmFsaWRhdGVkKDApO1xuXG4gICAgICBkaXNwYXRjaE1lc3NhZ2UoW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJFbCBhcmNoaXZvIG5vIGVzIHJlY29ub2NpZG8gY29tbyB1biBYTUxcIixcbiAgICAgICAgICBhbGVydHR5cGU6IEFsZXJ0VHlwZS5FUlJPUixcbiAgICAgICAgfSxcbiAgICAgIF0pO1xuXG4gICAgICBoYW5kbGVPcGVuTWVzc2FnZSh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8IDEwMDApIHtcbiAgICAgIHNldFZhbGlkYXRlZCgwKTtcblxuICAgICAgbGV0IHNpemVNQiA9IHNpemUgLyAxMDAwO1xuXG4gICAgICBtZXNzYWdlLnB1c2goe1xuICAgICAgICB0ZXh0OiBgRWwgYXJjaGl2byBwZXNhOiAke3NpemVNQn0sIHNvbG8gc2UgYWRtaXRlbiBhcmNpaHZvcyBkZSBtZW5vcyBkZSAxTUJgLFxuICAgICAgICBhbGVydHR5cGU6IEFsZXJ0VHlwZS5FUlJPUixcbiAgICAgIH0pO1xuXG4gICAgICBkaXNwYXRjaE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmxvZyhcImhlbGxvd1wiLCBmaWxlLCBmaWxlTmFtZSwgc2l6ZSk7XG5cbiAgICBpZiAodmFsaWRhdGVkKSB7XG4gICAgICByZWFkRmlsZShmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVhZEZpbGUgPSAoZmlsZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVhZCBmaWxlIC4uLi4uXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweC0xMiBweS0yIHJvdW5kZWQtbGcgc2hhZG93LWxnIHRyYWNraW5nLXdpZGUgdXBwZXJjYXNlIGN1cnNvci1wb2ludGVyIHRleHQtZ3JlZW5yLTEwMDAgYmctYmxhY2tyLTEwMDAgaG92ZXI6YmctZ3JlZW5yLTEwMDAgaG92ZXI6dGV4dC1ibGFjayBmb2N1czpiZy1ncmVlbnItMTAwMCBmb2N1czp0ZXh0LWJsYWNrIGJvcmRlci1ncmVlbnItMTAwMCBib3JkZXItc29saWQgYm9yZGVyIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxlYWRpbmctbm9ybWFsXCI+QWRkIFhNTDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgIGFjY2VwdD1cIi54bWxcIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludm9pY2VSZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InvoiceReader/InvoiceReader.tsx\n");

/***/ })

})