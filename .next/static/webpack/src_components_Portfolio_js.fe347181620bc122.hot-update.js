"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Portfolio_js",{

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isotope-layout */ \"./node_modules/isotope-layout/js/isotope.js\");\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_dataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/dataContext */ \"./src/context/dataContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n/* harmony import */ var _popup_DetailsPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup/DetailsPopup */ \"./src/components/popup/DetailsPopup.js\");\n/* harmony import */ var _popup_ProjectPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup/ProjectPopup */ \"./src/components/popup/ProjectPopup.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Portfolio = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), activeDetailsPopup = ref[0], setActiveDetailsPopup = ref[1];\n    // Isotope\n    // useEffect(() => {\n    //   dataImage();\n    //   setTimeout(() => {\n    //     new Isotope(\".gallery_zoom\", {\n    //       itemSelector: \".grid-item\",\n    //     });\n    //   }, 500);\n    // }, []);\n    //destructuring of objects which came from the dataState file in context folder\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_dataContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), data1 = ref1.data, getData = ref1.getData;\n    //Using the getData function declared in dataState.js to fetch the data from the API\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getData();\n    }, []);\n    //Sorting the fetched data on the basis of sequence\n    var myData = [].concat(data1 && data1.user && data1.user.projects).sort(function(a, b) {\n        return a.sequence > b.sequence ? 1 : -1;\n    });\n    //Filtering the data on the basis of whether the enabled attribute is true or not\n    var fData = [].concat(myData).filter(function(data) {\n        return data && data.enabled === true;\n    });\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), activeBlogData = ref2[0], setActiveBlogData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), activeBlog = ref3[0], setActiveBlog = ref3[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popup_ProjectPopup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                close: function() {\n                    return setActiveBlog(false);\n                },\n                show: activeBlog,\n                blogData: activeBlogData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popup_DetailsPopup__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                show: activeDetailsPopup,\n                close: function() {\n                    return setActiveDetailsPopup(false);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tonni_tm_section\",\n                id: \"portfolio\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"tonni_tm_portfolio\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"tonni_tm_main_title\",\n                                \"data-type\": \"centered\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"title\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Latest Projects\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"subtitle\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"portfolio_list wow fadeInUp\",\n                                \"data-wow-duration\": \"1s\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"gallery_zoom grid\",\n                                    children: fData.map(function(project) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"grid-item\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"list_inner\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"image\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                src: project && project.image && project.image.url,\n                                                                alt: \"photo\",\n                                                                style: {\n                                                                    opacity: 1\n                                                                }\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                                                lineNumber: 75,\n                                                                columnNumber: 29\n                                                            }, _this1)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 27\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"details\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"category\",\n                                                                    children: project && project.sequence\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                                                    lineNumber: 79,\n                                                                    columnNumber: 29\n                                                                }, _this1),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                    className: \"title\",\n                                                                    children: project && project.title\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                                                    lineNumber: 80,\n                                                                    columnNumber: 29\n                                                                }, _this1),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                    className: \"svg\",\n                                                                    src: \"img/svg/vector5.svg\",\n                                                                    alt: \"\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                                                    lineNumber: 81,\n                                                                    columnNumber: 29\n                                                                }, _this1)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 27\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            className: \"tonni_tm_full_link c-pointer\",\n                                                            onClick: function() {\n                                                                setActiveBlog(true);\n                                                                setActiveBlogData(project);\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 27\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 25\n                                                }, _this1)\n                                            }, project && project._id, false, {\n                                                fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 25\n                                            }, _this1)\n                                        }, void 0, false);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gaura\\\\Desktop\\\\tonni\\\\src\\\\components\\\\Portfolio.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this);\n};\n_s(Portfolio, \"KiSbFMlEBZATmFuKpyqfMB+XHXk=\");\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtnRUFDYnhCLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnRUFDcEJGLGlCQUFpQixDQUFDZSxPQUFPLENBQUMsQ0FBQzs2REFDNUI7Ozs7O2tFQUNEOzs7Ozs7MERBQ0E7K0NBbkIyQkEsT0FBTyxJQUFJQSxPQUFPLENBQUNZLEdBQUc7Ozs7c0RBb0JwRDt5REFDSixDQUNEO3FDQUNILENBQUM7Ozs7O3lDQUVEOzs7OztxQ0FDRDs7Ozs7OzZCQUNGOzs7Ozt5QkFDRjs7Ozs7cUJBQ0Y7Ozs7OzthQUNHLENBQ1g7Q0FDSDtHQWpHSzVDLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQWtHZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpby5qcz9hNmJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJc290b3BlIGZyb20gXCJpc290b3BlLWxheW91dFwiO1xyXG5pbXBvcnQgZGF0YUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZGF0YUNvbnRleHRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZGF0YUltYWdlIH0gZnJvbSBcIi4uL3V0aWxpdHNcIjtcclxuaW1wb3J0IERldGFpbHNQb3B1cCBmcm9tIFwiLi9wb3B1cC9EZXRhaWxzUG9wdXBcIjtcclxuaW1wb3J0IFByb2plY3RQb3B1cCBmcm9tIFwiLi9wb3B1cC9Qcm9qZWN0UG9wdXBcIjtcclxuY29uc3QgUG9ydGZvbGlvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVEZXRhaWxzUG9wdXAsIHNldEFjdGl2ZURldGFpbHNQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gSXNvdG9wZVxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkYXRhSW1hZ2UoKTtcclxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICBuZXcgSXNvdG9wZShcIi5nYWxsZXJ5X3pvb21cIiwge1xyXG4gIC8vICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuZ3JpZC1pdGVtXCIsXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfSwgNTAwKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG5cclxuICAgIC8vZGVzdHJ1Y3R1cmluZyBvZiBvYmplY3RzIHdoaWNoIGNhbWUgZnJvbSB0aGUgZGF0YVN0YXRlIGZpbGUgaW4gY29udGV4dCBmb2xkZXJcclxuICAgIGNvbnN0e2RhdGEsZ2V0RGF0YX0gPSB1c2VDb250ZXh0KGRhdGFDb250ZXh0KTtcclxuXHJcbiAgICAvL1VzaW5nIHRoZSBnZXREYXRhIGZ1bmN0aW9uIGRlY2xhcmVkIGluIGRhdGFTdGF0ZS5qcyB0byBmZXRjaCB0aGUgZGF0YSBmcm9tIHRoZSBBUElcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICAvL1NvcnRpbmcgdGhlIGZldGNoZWQgZGF0YSBvbiB0aGUgYmFzaXMgb2Ygc2VxdWVuY2VcclxuICAgIGNvbnN0IG15RGF0YSA9IFtdLmNvbmNhdChkYXRhICYmIGRhdGEudXNlciAmJiBkYXRhLnVzZXIucHJvamVjdHMpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYS5zZXF1ZW5jZSA+IGIuc2VxdWVuY2UgPyAxIDogLTEpO1xyXG5cclxuICAgIC8vRmlsdGVyaW5nIHRoZSBkYXRhIG9uIHRoZSBiYXNpcyBvZiB3aGV0aGVyIHRoZSBlbmFibGVkIGF0dHJpYnV0ZSBpcyB0cnVlIG9yIG5vdFxyXG4gICAgY29uc3QgZkRhdGEgPSBbXS5jb25jYXQobXlEYXRhKVxyXG4gICAgLmZpbHRlcihkYXRhID0+IGRhdGEgJiYgZGF0YS5lbmFibGVkID09PSB0cnVlKTtcclxuXHJcbiAgICAgIFxyXG4gICAgY29uc3QgW2FjdGl2ZUJsb2dEYXRhLCBzZXRBY3RpdmVCbG9nRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2FjdGl2ZUJsb2csIHNldEFjdGl2ZUJsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFByb2plY3RQb3B1cFxyXG4gICAgICAgIGNsb3NlPXsoKSA9PiBzZXRBY3RpdmVCbG9nKGZhbHNlKX1cclxuICAgICAgICBzaG93PXthY3RpdmVCbG9nfVxyXG4gICAgICAgIGJsb2dEYXRhPXthY3RpdmVCbG9nRGF0YX1cclxuICAgICAgLz5cclxuICAgICAgPERldGFpbHNQb3B1cFxyXG4gICAgICAgIHNob3c9e2FjdGl2ZURldGFpbHNQb3B1cH1cclxuICAgICAgICBjbG9zZT17KCkgPT4gc2V0QWN0aXZlRGV0YWlsc1BvcHVwKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV9zZWN0aW9uXCIgaWQ9XCJwb3J0Zm9saW9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvbm5pX3RtX3BvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV9tYWluX3RpdGxlXCIgZGF0YS10eXBlPVwiY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5MYXRlc3QgUHJvamVjdHM8L2gzPiBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb19saXN0IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ2FsbGVyeV96b29tIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lID0gXCJncmlkLXNpemVyXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBtYXBwaW5nIHRoZSBzb3J0ZWQgYW5kIGZpbHRlcmVkIGRhdGEgdG8gYmUgdXNlZCBkeW5hbWljYWxseSAqL31cclxuICAgICAgICAgICAgICAgICAge2ZEYXRhLm1hcChwcm9qZWN0PT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIGtleSA9IHtwcm9qZWN0ICYmIHByb2plY3QuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0ICYmIHByb2plY3QuaW1hZ2UgJiYgcHJvamVjdC5pbWFnZS51cmx9IGFsdD1cInBob3RvXCIgc3R5bGUgPSB7e29wYWNpdHk6MX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj57cHJvamVjdCAmJiBwcm9qZWN0LnNlcXVlbmNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9qZWN0ICYmIHByb2plY3QudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnXCIgc3JjPVwiaW1nL3N2Zy92ZWN0b3I1LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9ubmlfdG1fZnVsbF9saW5rIGMtcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVCbG9nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJsb2dEYXRhKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcclxuIl0sIm5hbWVzIjpbIklzb3RvcGUiLCJkYXRhQ29udGV4dCIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiZGF0YUltYWdlIiwiRGV0YWlsc1BvcHVwIiwiUHJvamVjdFBvcHVwIiwiUG9ydGZvbGlvIiwiYWN0aXZlRGV0YWlsc1BvcHVwIiwic2V0QWN0aXZlRGV0YWlsc1BvcHVwIiwiZGF0YSIsImdldERhdGEiLCJteURhdGEiLCJjb25jYXQiLCJ1c2VyIiwicHJvamVjdHMiLCJzb3J0IiwiYSIsImIiLCJzZXF1ZW5jZSIsImZEYXRhIiwiZmlsdGVyIiwiZW5hYmxlZCIsImFjdGl2ZUJsb2dEYXRhIiwic2V0QWN0aXZlQmxvZ0RhdGEiLCJhY3RpdmVCbG9nIiwic2V0QWN0aXZlQmxvZyIsImNsb3NlIiwic2hvdyIsImJsb2dEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJkYXRhLXR5cGUiLCJoMyIsInAiLCJkYXRhLXdvdy1kdXJhdGlvbiIsInVsIiwibWFwIiwicHJvamVjdCIsImxpIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJhbHQiLCJzdHlsZSIsIm9wYWNpdHkiLCJzcGFuIiwidGl0bGUiLCJvbkNsaWNrIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Portfolio.js\n");

/***/ })

});