webpackHotUpdate_N_E("pages/index",{

/***/ "./components/InvoiceReader/InvoiceReader.tsx":
/*!****************************************************!*\
  !*** ./components/InvoiceReader/InvoiceReader.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/InvoiceContext */ \"./components/InvoiceContext/index.ts\");\n/* harmony import */ var enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! enums */ \"./enums.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/neftaio/Develop/Projects/invoice-validator-co/components/InvoiceReader/InvoiceReader.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar InvoiceReader = function InvoiceReader() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      validated = _useState[0],\n      setValidated = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      fileName = _useState2[0],\n      setFileName = _useState2[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_components_InvoiceContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      dispatchXmlBody = _useContext.dispatchXmlBody,\n      dispatchMessage = _useContext.dispatchMessage,\n      handleOpenMessage = _useContext.handleOpenMessage,\n      message = _useContext.message;\n\n  var handleOnChange = function handleOnChange(e) {\n    handleOpenMessage(false);\n    dispatchMessage([]);\n    setFileName(\"\");\n\n    var _e$target$files = Object(_home_neftaio_Develop_Projects_invoice_validator_co_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.files, 1),\n        file = _e$target$files[0];\n\n    if (!file) return;\n    var name = file.name,\n        size = file.size,\n        fileType = file.type;\n    setFileName(name);\n\n    if (fileType !== \"text/xml\") {\n      setValidated(0);\n      dispatchMessage([{\n        text: \"El archivo no es reconocido como un XML\",\n        alerttype: enums__WEBPACK_IMPORTED_MODULE_3__[\"AlertType\"].ERROR\n      }]);\n      handleOpenMessage(true);\n    }\n\n    if (size < 1000) {\n      setValidated(0);\n      var sizeMB = size / 1000;\n      message.push({\n        text: \"El archivo pesa: \".concat(sizeMB, \", solo se admiten arcihvos de menos de 1MB\"),\n        alerttype: enums__WEBPACK_IMPORTED_MODULE_3__[\"AlertType\"].ERROR\n      });\n      dispatchMessage(message);\n    } //console.log(\"hellow\", file, fileName, size);\n\n\n    if (validated) {\n      readFile(file);\n    }\n  };\n\n  var readFile = function readFile(file) {\n    console.log(\"read file .....\");\n    var reader = new FileReader();\n    var text = reader.readAsText(file);\n\n    reader.onload = function (e) {\n      console.log(e.target.result);\n    }; //console.log(text);\n\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex w-full items-center justify-center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        className: \"flex flex-col items-center px-12 py-2 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer text-greenr-1000 bg-blackr-1000 hover:bg-greenr-1000 hover:text-black focus:bg-greenr-1000 focus:text-black border-greenr-1000 border-solid border font-semibold\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"text-base leading-normal\",\n          children: \"Add XML\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          className: \"hidden\",\n          onChange: handleOnChange,\n          accept: \".xml\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-center mt-2\",\n      children: fileName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(InvoiceReader, \"9U+2JnzDybhWWabbhsfL0qnSd0s=\");\n\n_c = InvoiceReader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvoiceReader);\n\nvar _c;\n\n$RefreshReg$(_c, \"InvoiceReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlUmVhZGVyL0ludm9pY2VSZWFkZXIudHN4PzJjNDkiXSwibmFtZXMiOlsiSW52b2ljZVJlYWRlciIsInVzZVN0YXRlIiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsInVzZUNvbnRleHQiLCJJbnZvaWNlQ29udGV4dCIsImRpc3BhdGNoWG1sQm9keSIsImRpc3BhdGNoTWVzc2FnZSIsImhhbmRsZU9wZW5NZXNzYWdlIiwibWVzc2FnZSIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsIm5hbWUiLCJzaXplIiwiZmlsZVR5cGUiLCJ0eXBlIiwidGV4dCIsImFsZXJ0dHlwZSIsIkFsZXJ0VHlwZSIsIkVSUk9SIiwic2l6ZU1CIiwicHVzaCIsInJlYWRGaWxlIiwiY29uc29sZSIsImxvZyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNUZXh0Iiwib25sb2FkIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCLEdBQU07QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBUyxDQUFULENBRE47QUFBQSxNQUM3QkMsU0FENkI7QUFBQSxNQUNsQkMsWUFEa0I7O0FBQUEsbUJBR0pGLHNEQUFRLENBQVMsRUFBVCxDQUhKO0FBQUEsTUFHN0JHLFFBSDZCO0FBQUEsTUFHbkJDLFdBSG1COztBQUFBLG9CQVVoQ0Msd0RBQVUsQ0FBQ0Msa0VBQUQsQ0FWc0I7QUFBQSxNQU1sQ0MsZUFOa0MsZUFNbENBLGVBTmtDO0FBQUEsTUFPbENDLGVBUGtDLGVBT2xDQSxlQVBrQztBQUFBLE1BUWxDQyxpQkFSa0MsZUFRbENBLGlCQVJrQztBQUFBLE1BU2xDQyxPQVRrQyxlQVNsQ0EsT0FUa0M7O0FBWXBDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUE0QztBQUNqRUgscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUVBRCxtQkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUVBSixlQUFXLENBQUMsRUFBRCxDQUFYOztBQUxpRSxtTEFPbERRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQVB5QztBQUFBLFFBTzFEQyxJQVAwRDs7QUFTakUsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFUc0QsUUFXekRDLElBWHlELEdBVzFCRCxJQVgwQixDQVd6REMsSUFYeUQ7QUFBQSxRQVduREMsSUFYbUQsR0FXMUJGLElBWDBCLENBV25ERSxJQVhtRDtBQUFBLFFBV3ZDQyxRQVh1QyxHQVcxQkgsSUFYMEIsQ0FXN0NJLElBWDZDO0FBYWpFZixlQUFXLENBQUNZLElBQUQsQ0FBWDs7QUFFQSxRQUFJRSxRQUFRLEtBQUssVUFBakIsRUFBNkI7QUFDM0JoQixrQkFBWSxDQUFDLENBQUQsQ0FBWjtBQUVBTSxxQkFBZSxDQUFDLENBQ2Q7QUFDRVksWUFBSSxFQUFFLHlDQURSO0FBRUVDLGlCQUFTLEVBQUVDLCtDQUFTLENBQUNDO0FBRnZCLE9BRGMsQ0FBRCxDQUFmO0FBT0FkLHVCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDRDs7QUFFRCxRQUFJUSxJQUFJLEdBQUcsSUFBWCxFQUFpQjtBQUNmZixrQkFBWSxDQUFDLENBQUQsQ0FBWjtBQUVBLFVBQUlzQixNQUFNLEdBQUdQLElBQUksR0FBRyxJQUFwQjtBQUVBUCxhQUFPLENBQUNlLElBQVIsQ0FBYTtBQUNYTCxZQUFJLDZCQUFzQkksTUFBdEIsK0NBRE87QUFFWEgsaUJBQVMsRUFBRUMsK0NBQVMsQ0FBQ0M7QUFGVixPQUFiO0FBS0FmLHFCQUFlLENBQUNFLE9BQUQsQ0FBZjtBQUNELEtBdkNnRSxDQXlDakU7OztBQUVBLFFBQUlULFNBQUosRUFBZTtBQUNieUIsY0FBUSxDQUFDWCxJQUFELENBQVI7QUFDRDtBQUNGLEdBOUNEOztBQWdEQSxNQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDWCxJQUFELEVBQVU7QUFDekJZLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjtBQUNBLFFBQUlWLElBQUksR0FBR1MsTUFBTSxDQUFDRSxVQUFQLENBQWtCaEIsSUFBbEIsQ0FBWDs7QUFDQWMsVUFBTSxDQUFDRyxNQUFQLEdBQWdCLFVBQUNwQixDQUFELEVBQU87QUFDckJlLGFBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNvQixNQUFyQjtBQUNELEtBRkQsQ0FKeUIsQ0FPekI7O0FBQ0QsR0FSRDs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLHlDQUFmO0FBQUEsNkJBQ0U7QUFBTyxpQkFBUyxFQUFDLG9RQUFqQjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBQywwQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsbUJBQVMsRUFBQyxRQUZaO0FBR0Usa0JBQVEsRUFBRXRCLGNBSFo7QUFJRSxnQkFBTSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFZRTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLGdCQUFtQ1I7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUEsa0JBREY7QUFnQkQsQ0F0RkQ7O0dBQU1KLGE7O0tBQUFBLGE7QUF3RlNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnZvaWNlUmVhZGVyL0ludm9pY2VSZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludm9pY2VDb250ZXh0IGZyb20gXCJAY29tcG9uZW50cy9JbnZvaWNlQ29udGV4dFwiO1xuaW1wb3J0IHsgQWxlcnRUeXBlIH0gZnJvbSBcImVudW1zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW52b2ljZVJlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWxpZGF0ZWQsIHNldFZhbGlkYXRlZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuXG4gIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCB7XG4gICAgZGlzcGF0Y2hYbWxCb2R5LFxuICAgIGRpc3BhdGNoTWVzc2FnZSxcbiAgICBoYW5kbGVPcGVuTWVzc2FnZSxcbiAgICBtZXNzYWdlLFxuICB9ID0gdXNlQ29udGV4dChJbnZvaWNlQ29udGV4dCk7XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBoYW5kbGVPcGVuTWVzc2FnZShmYWxzZSk7XG5cbiAgICBkaXNwYXRjaE1lc3NhZ2UoW10pO1xuXG4gICAgc2V0RmlsZU5hbWUoXCJcIik7XG5cbiAgICBjb25zdCBbZmlsZV0gPSBlLnRhcmdldC5maWxlcztcblxuICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBuYW1lLCBzaXplLCB0eXBlOiBmaWxlVHlwZSB9ID0gZmlsZTtcblxuICAgIHNldEZpbGVOYW1lKG5hbWUpO1xuXG4gICAgaWYgKGZpbGVUeXBlICE9PSBcInRleHQveG1sXCIpIHtcbiAgICAgIHNldFZhbGlkYXRlZCgwKTtcblxuICAgICAgZGlzcGF0Y2hNZXNzYWdlKFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiRWwgYXJjaGl2byBubyBlcyByZWNvbm9jaWRvIGNvbW8gdW4gWE1MXCIsXG4gICAgICAgICAgYWxlcnR0eXBlOiBBbGVydFR5cGUuRVJST1IsXG4gICAgICAgIH0sXG4gICAgICBdKTtcblxuICAgICAgaGFuZGxlT3Blbk1lc3NhZ2UodHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNpemUgPCAxMDAwKSB7XG4gICAgICBzZXRWYWxpZGF0ZWQoMCk7XG5cbiAgICAgIGxldCBzaXplTUIgPSBzaXplIC8gMTAwMDtcblxuICAgICAgbWVzc2FnZS5wdXNoKHtcbiAgICAgICAgdGV4dDogYEVsIGFyY2hpdm8gcGVzYTogJHtzaXplTUJ9LCBzb2xvIHNlIGFkbWl0ZW4gYXJjaWh2b3MgZGUgbWVub3MgZGUgMU1CYCxcbiAgICAgICAgYWxlcnR0eXBlOiBBbGVydFR5cGUuRVJST1IsXG4gICAgICB9KTtcblxuICAgICAgZGlzcGF0Y2hNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2coXCJoZWxsb3dcIiwgZmlsZSwgZmlsZU5hbWUsIHNpemUpO1xuXG4gICAgaWYgKHZhbGlkYXRlZCkge1xuICAgICAgcmVhZEZpbGUoZmlsZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlYWRGaWxlID0gKGZpbGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlYWQgZmlsZSAuLi4uLlwiKTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGxldCB0ZXh0ID0gcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5yZXN1bHQpO1xuICAgIH07XG4gICAgLy9jb25zb2xlLmxvZyh0ZXh0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHgtMTIgcHktMiByb3VuZGVkLWxnIHNoYWRvdy1sZyB0cmFja2luZy13aWRlIHVwcGVyY2FzZSBjdXJzb3ItcG9pbnRlciB0ZXh0LWdyZWVuci0xMDAwIGJnLWJsYWNrci0xMDAwIGhvdmVyOmJnLWdyZWVuci0xMDAwIGhvdmVyOnRleHQtYmxhY2sgZm9jdXM6YmctZ3JlZW5yLTEwMDAgZm9jdXM6dGV4dC1ibGFjayBib3JkZXItZ3JlZW5yLTEwMDAgYm9yZGVyLXNvbGlkIGJvcmRlciBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxlYWRpbmctbm9ybWFsXCI+QWRkIFhNTDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICBhY2NlcHQ9XCIueG1sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTJcIj57ZmlsZU5hbWV9PC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnZvaWNlUmVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InvoiceReader/InvoiceReader.tsx\n");

/***/ })

})