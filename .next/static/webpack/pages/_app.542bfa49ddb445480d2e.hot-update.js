webpackHotUpdate_N_E("pages/_app",{

/***/ "./theme/theme.ts":
/*!************************!*\
  !*** ./theme/theme.ts ***!
  \************************/
/*! exports provided: defButtonProps, default, useLayoutGrade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defButtonProps", function() { return defButtonProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutGrade", function() { return useLayoutGrade; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/createBreakpoints */ "./node_modules/@material-ui/core/styles/createBreakpoints.js");
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/util */ "./src/util.ts");
/* harmony import */ var recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoilStates/layout */ "./recoilStates/layout.ts");


var _caption,
    _body,
    _body2,
    _subtitle,
    _subtitle2,
    _h,
    _h2,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var LG = recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["SIZE_INFO"].LG,
    MD = recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["SIZE_INFO"].MD,
    SM = recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["SIZE_INFO"].SM,
    XS = recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["SIZE_INFO"].XS;
var breakpoints = _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_2___default()({});
var defButtonProps = {
  variant: 'contained',
  size: 'small'
};
var defaultTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createTheme"])({
  breakpoints: {
    values: {
      xs: XS.max,
      sm: SM.max,
      md: MD.max,
      lg: LG.max,
      xl: 1920
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createTheme"])({
  breakpoints: _objectSpread({}, defaultTheme.breakpoints),
  typography: {
    fontFamily: "roboto"
  },
  palette: {
    primary: {
      main: '#00B7F3',
      contrastText: '#fff'
    },
    secondary: {
      main: '#B3EAFC',
      contrastText: "#fff"
    },
    text: {
      primary: "#000",
      secondary: "#666"
    }
  },
  overrides: {
    MuiFormGroup: {
      root: {
        '&[role="radiogroup"]': {
          display: 'block'
        }
      }
    },
    MuiButton: {
      root: {
        minWidth: '70px',
        "&:focus": {// outline:"solid black"
        }
      }
    },
    MuiButtonBase: {
      root: {
        "&:focus": {// outline:"solid black"
        }
      }
    },
    MuiSelect: {
      root: {
        "&:focus": {// outline:"solid black"
        }
      }
    },
    MuiCheckbox: {
      root: {
        "&:focus": {// outline:"solid black"
        }
      }
    },
    MuiGrid: {
      root: {
        '&.spacer': {
          flexGrow: 1
        }
      }
    },
    MuiTypography: {
      root: {
        textTransform: 'none',
        '&.bold': {
          fontWeight: 600
        },
        '&.regular': {
          fontWeight: 400
        },
        '&.light': {
          fontWeight: 300
        },
        '&.thin': {
          fontWeight: 200
        },
        '&.roboto': {
          fontFamily: 'roboto'
        },
        '&.times': {
          fontFamily: 'roboto',
          letterSpacing: '3px'
        }
      },
      caption: (_caption = {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(14)
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_caption, breakpoints.down(SM.max), {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(12)
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_caption, "fontFamily", 'roboto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_caption, "fontWeight", 500), _caption),
      body2: (_body = {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(16)
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_body, breakpoints.down(SM.max), {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(10)
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_body, "fontFamily", 'roboto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_body, "fontWeight", 500), _body),
      body1: (_body2 = {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(20)
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_body2, breakpoints.down(SM.max), {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(13)
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_body2, "fontFamily", 'roboto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_body2, "fontWeight", 500), _body2),
      subtitle2: (_subtitle = {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(30)
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle, breakpoints.down(SM.max), {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(15)
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle, "fontFamily", 'roboto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle, "fontWeight", 500), _subtitle),
      subtitle1: (_subtitle2 = {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(35)
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle2, breakpoints.down(SM.max), {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(20)
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle2, "fontFamily", 'roboto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle2, "fontWeight", 500), _subtitle2),
      h6: (_h = {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(70)
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h, breakpoints.down(SM.max), {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(30)
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h, "fontFamily", 'roboto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h, "fontWeight", 500), _h),
      h5: (_h2 = {
        //메인 섹션1 텍스트 사이즈
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(140)
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h2, breakpoints.down(SM.max), {
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(46)
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h2, "fontFamily", 'roboto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h2, "fontWeight", 500), _h2),
      h4: {
        //pc 메인에서만 사용
        fontSize: Object(src_util__WEBPACK_IMPORTED_MODULE_3__["pxToRem"])(60),
        fontFamily: 'roboto',
        fontWeight: 500
      }
    }
  }
}));
var useLayoutGrade = function useLayoutGrade(theme) {
  _s();

  var theme_ = theme || Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  if (!theme_) return {
    isDownSm: false,
    isMd: false,
    isUpMdAndIsDownLg: false,
    isDownXs: false,
    isUpLg: false
  };
  var isUpSm = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(theme_.breakpoints.up(recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["SIZE_INFO"].SM.max));
  var isDownMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(theme_.breakpoints.down(recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["SIZE_INFO"].MD.max - 0.01));
  var isMd = isUpSm && isDownMd;
  var isUpMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(theme_.breakpoints.up(recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["SIZE_INFO"].MD.max));
  var isDownLg = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(theme_.breakpoints.down(recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["SIZE_INFO"].LG.max));
  var isUpMdAndIsDownLg = isUpMd && isDownLg;
  return {
    isDownSm: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(theme_.breakpoints.down(recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["SIZE_INFO"].SM.max - 0.01)),
    isMd: isMd,
    isUpMdAndIsDownLg: isUpMdAndIsDownLg,
    isDownXs: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(theme_.breakpoints.down(recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutGrade"].XS)),
    // useMediaQuery(theme_.breakpoints.up(SIZE_INFO.SM.max)) 
    // && useMediaQuery(theme_.breakpoints.up(SIZE_INFO.MD.max)),
    isUpLg: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(theme_.breakpoints.up(recoilStates_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutGrade"].LG))
  };
};

_s(useLayoutGrade, "CAGyHREMFc+tCmn1XgmL/saGRto=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUvdGhlbWUudHMiXSwibmFtZXMiOlsiTEciLCJTSVpFX0lORk8iLCJNRCIsIlNNIiwiWFMiLCJicmVha3BvaW50cyIsImNyZWF0ZUJyZWFrcG9pbnRzIiwiZGVmQnV0dG9uUHJvcHMiLCJ2YXJpYW50Iiwic2l6ZSIsImRlZmF1bHRUaGVtZSIsImNyZWF0ZVRoZW1lIiwidmFsdWVzIiwieHMiLCJtYXgiLCJzbSIsIm1kIiwibGciLCJ4bCIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5IiwidGV4dCIsIm92ZXJyaWRlcyIsIk11aUZvcm1Hcm91cCIsInJvb3QiLCJkaXNwbGF5IiwiTXVpQnV0dG9uIiwibWluV2lkdGgiLCJNdWlCdXR0b25CYXNlIiwiTXVpU2VsZWN0IiwiTXVpQ2hlY2tib3giLCJNdWlHcmlkIiwiZmxleEdyb3ciLCJNdWlUeXBvZ3JhcGh5IiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiY2FwdGlvbiIsImZvbnRTaXplIiwicHhUb1JlbSIsImRvd24iLCJib2R5MiIsImJvZHkxIiwic3VidGl0bGUyIiwic3VidGl0bGUxIiwiaDYiLCJoNSIsImg0IiwidXNlTGF5b3V0R3JhZGUiLCJ0aGVtZSIsInRoZW1lXyIsInVzZVRoZW1lIiwiaXNEb3duU20iLCJpc01kIiwiaXNVcE1kQW5kSXNEb3duTGciLCJpc0Rvd25YcyIsImlzVXBMZyIsImlzVXBTbSIsInVzZU1lZGlhUXVlcnkiLCJ1cCIsImlzRG93bk1kIiwiaXNVcE1kIiwiaXNEb3duTGciLCJMYXlvdXRHcmFkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EsSUFBT0EsRUFBUCxHQUF5QkMsNkRBQXpCLENBQU9ELEVBQVA7QUFBQSxJ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dUVBQWEsQ0FBQ1IsTUFBTSxDQUFDbEQsV0FBUCxDQUFtQjJELEVBQW5CLENBQXNCL0QsNkRBQVMsQ0FBQ0MsRUFBVixDQUFhWSxHQUFuQyxDQUFELENBQTVCO0FBQ0EsTUFBTXFELFFBQVEsR0FBR0osdUVBQWEsQ0FBQ1IsTUFBTSxDQUFDbEQsV0FBUCxDQUFtQndDLElBQW5CLENBQXdCNUMsNkRBQVMsQ0FBQ0QsRUFBVixDQUFhYyxHQUFyQyxDQUFELENBQTlCO0FBQ0EsTUFBTTZDLGlCQUFpQixHQUFHTyxNQUFNLElBQUlDLFFBQXBDO0FBRUEsU0FBTztBQUNMVixZQUFRLEVBQUVNLHVFQUFhLENBQUNSLE1BQU0sQ0FBQ2xELFdBQVAsQ0FBbUJ3QyxJQUFuQixDQUF3QjVDLDZEQUFTLENBQUNFLEVBQVYsQ0FBYVcsR0FBYixHQUFpQixJQUF6QyxDQUFELENBRGxCO0FBRUw0QyxRQUFJLEVBQUpBLElBRks7QUFHTEMscUJBQWlCLEVBQWpCQSxpQkFISztBQUlMQyxZQUFRLEVBQUVHLHVFQUFhLENBQUNSLE1BQU0sQ0FBQ2xELFdBQVAsQ0FBbUJ3QyxJQUFuQixDQUF3QnVCLCtEQUFXLENBQUNoRSxFQUFwQyxDQUFELENBSmxCO0FBS0g7QUFDQTtBQUNGeUQsVUFBTSxFQUFFRSx1RUFBYSxDQUFDUixNQUFNLENBQUNsRCxXQUFQLENBQW1CMkQsRUFBbkIsQ0FBc0JJLCtEQUFXLENBQUNwRSxFQUFsQyxDQUFEO0FBUGhCLEdBQVA7QUFTRCxDQXRCTTs7R0FBTXFELGM7VUFDYUcsMEQsRUFJVE8sK0QsRUFDRUEsK0QsRUFHRkEsK0QsRUFDRUEsK0QsRUFJTEEsK0QsRUFHQUEsK0QsRUFHRkEsK0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41NDJiZmE0OWRkYjQ0NTQ4MGQyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWUsQnV0dG9uUHJvcHMsIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBjcmVhdGVCcmVha3BvaW50cyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlQnJlYWtwb2ludHMnXHJcbmltcG9ydCB7cHhUb1JlbX0gZnJvbSAnc3JjL3V0aWwnXHJcblxyXG5cclxuaW1wb3J0IHtMYXlvdXRHcmFkZSwgU0laRV9JTkZPfSBmcm9tICdyZWNvaWxTdGF0ZXMvbGF5b3V0JztcclxuY29uc3Qge0xHLCBNRCwgU00sIFhTfSA9IFNJWkVfSU5GTztcclxuXHJcbmNvbnN0IGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoe30pO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29tcG9uZW50U2l6ZSA9ICdub25lJ3wnc20nIHwgJ21kJyB8ICdsZyc7XHJcbmV4cG9ydCB0eXBlIENvbXBvbmVudENvbG9yID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAnZXJyb3InIHwgJ3dhcm5pbmcnIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnO1xyXG5leHBvcnQgdHlwZSBMYXlvdXRUeXBlID0ge1xyXG4gIHNpemU/OiBDb21wb25lbnRTaXplXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZCdXR0b25Qcm9wczpCdXR0b25Qcm9wcyA9IHtcclxuICB2YXJpYW50OiAnY29udGFpbmVkJyxcclxuICBzaXplOiAnc21hbGwnXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBicmVha3BvaW50czoge1xyXG4gICAgdmFsdWVzOiB7XHJcbiAgICAgIHhzOiBYUy5tYXgsXHJcbiAgICAgIHNtOiBTTS5tYXgsXHJcbiAgICAgIG1kOiBNRC5tYXgsXHJcbiAgICAgIGxnOiBMRy5tYXgsXHJcbiAgICAgIHhsOiAxOTIwXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRoZW1lKHtcclxuICBicmVha3BvaW50czp7XHJcbiAgICAuLi5kZWZhdWx0VGhlbWUuYnJlYWtwb2ludHNcclxuICB9LFxyXG4gIHR5cG9ncmFwaHk6e1xyXG4gICAgXHJcbiAgICBmb250RmFtaWx5Olwicm9ib3RvXCJcclxuICB9LFxyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6e1xyXG4gICAgICBtYWluOiAnIzAwQjdGMycsXHJcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46JyNCM0VBRkMnLFxyXG4gICAgICBjb250cmFzdFRleHQ6IFwiI2ZmZlwiXHJcbiAgICB9LFxyXG4gICAgdGV4dDp7XHJcbiAgICAgIHByaW1hcnk6XCIjMDAwXCIsXHJcbiAgICAgIHNlY29uZGFyeTpcIiM2NjZcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb3ZlcnJpZGVzOntcclxuICAgIE11aUZvcm1Hcm91cDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgJyZbcm9sZT1cInJhZGlvZ3JvdXBcIl0nOiB7IGRpc3BsYXk6ICdibG9jaycgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBtaW5XaWR0aDogJzcwcHgnLFxyXG4gICAgICAgIFwiJjpmb2N1c1wiOntcclxuICAgICAgICAgIC8vIG91dGxpbmU6XCJzb2xpZCBibGFja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUJ1dHRvbkJhc2U6e1xyXG4gICAgICByb290OntcclxuICAgICAgICBcIiY6Zm9jdXNcIjp7XHJcbiAgICAgICAgICAvLyBvdXRsaW5lOlwic29saWQgYmxhY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIE11aVNlbGVjdDp7XHJcbiAgICAgIHJvb3Q6e1xyXG4gICAgICAgIFwiJjpmb2N1c1wiOntcclxuICAgICAgICAgIC8vIG91dGxpbmU6XCJzb2xpZCBibGFja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgfSxcclxuICAgICBNdWlDaGVja2JveDp7XHJcbiAgICAgIHJvb3Q6e1xyXG4gICAgICAgIFwiJjpmb2N1c1wiOntcclxuICAgICAgICAgIC8vIG91dGxpbmU6XCJzb2xpZCBibGFja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgfSxcclxuICAgIE11aUdyaWQ6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgICcmLnNwYWNlcic6IHtcclxuICAgICAgICAgIGZsZXhHcm93OiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgTXVpVHlwb2dyYXBoeTp7XHJcbiAgICAgIHJvb3Q6e1xyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06J25vbmUnLFxyXG4gICAgICAgICAgJyYuYm9sZCc6IHtcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYucmVndWxhcic6IHtcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYubGlnaHQnOiB7XHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDMwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmLnRoaW4nOiB7XHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDIwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmLnJvYm90byc6IHtcclxuICAgICAgICAgICAgZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmLnRpbWVzJzoge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5Oidyb2JvdG8nLFxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiczcHgnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBjYXB0aW9uOntcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDE0KVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDEyKVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICBcclxuICAgICAgYm9keTI6e1xyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTYpXHJcbiAgICAgICAgLFticmVha3BvaW50cy5kb3duKFNNLm1heCldOntcclxuICAgICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTApXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwXHJcbiAgICAgIH0sXHJcbiAgICAgICAgIFxyXG4gICAgICBib2R5MTp7XHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSgyMClcclxuICAgICAgICAsW2JyZWFrcG9pbnRzLmRvd24oU00ubWF4KV06e1xyXG4gICAgICAgICAgZm9udFNpemU6cHhUb1JlbSgxMylcclxuICAgICAgICB9XHJcbiAgICAgICAgLGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAsZm9udFdlaWdodDo1MDAgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1YnRpdGxlMjp7XHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSgzMClcclxuICAgICAgICAsW2JyZWFrcG9pbnRzLmRvd24oU00ubWF4KV06e1xyXG4gICAgICAgICAgZm9udFNpemU6cHhUb1JlbSgxNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAsZm9udFdlaWdodDo1MDBcclxuICAgICAgfSxcclxuICAgICAgc3VidGl0bGUxOntcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDM1KVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDIwKVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgIFxyXG4gICAgICBoNjp7XHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSg3MClcclxuICAgICAgICAsW2JyZWFrcG9pbnRzLmRvd24oU00ubWF4KV06e1xyXG4gICAgICAgICAgZm9udFNpemU6cHhUb1JlbSgzMClcclxuICAgICAgICB9XHJcbiAgICAgICAgLGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAsZm9udFdlaWdodDo1MDBcclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIGg1OnsvL+uplOyduCDshLnshZgxIO2FjeyKpO2KuCDsgqzsnbTspohcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDE0MClcclxuICAgICAgICAsW2JyZWFrcG9pbnRzLmRvd24oU00ubWF4KV06e1xyXG4gICAgICAgICAgZm9udFNpemU6cHhUb1JlbSg0NilcclxuICAgICAgICB9XHJcbiAgICAgICAgLGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAsZm9udFdlaWdodDo1MDBcclxuICAgICAgfSxcclxuICAgICAgaDQ6ey8vcGMg66mU7J247JeQ7ISc66eMIOyCrOyaqVxyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oNjApXHJcbiAgICAgICAgLGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAsZm9udFdlaWdodDo1MDBcclxuICAgICAgfSxcclxuICAgIFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcblxyXG50eXBlIFVzZUxheW91dEdyYWRlID0ge1xyXG4gIGlzRG93blNtOiBib29sZWFuLFxyXG4gIGlzRG93blhzOmJvb2xlYW4sXHJcbiAgaXNNZDogYm9vbGVhbixcclxuICBpc1VwTWRBbmRJc0Rvd25MZzogYm9vbGVhbixcclxuICBpc1VwTGc6IGJvb2xlYW5cclxufVxyXG5leHBvcnQgY29uc3QgdXNlTGF5b3V0R3JhZGUgPSAodGhlbWU/OiBUaGVtZSApOiBVc2VMYXlvdXRHcmFkZSA9PiB7XHJcbiAgY29uc3QgdGhlbWVfID0gdGhlbWUgfHwgdXNlVGhlbWUoKTtcclxuICBpZighdGhlbWVfKSByZXR1cm4ge2lzRG93blNtOiBmYWxzZSwgaXNNZDogZmFsc2UsIGlzVXBNZEFuZElzRG93bkxnOiBmYWxzZSxpc0Rvd25YczpmYWxzZSwgaXNVcExnOiBmYWxzZX07XHJcblxyXG5cclxuICBjb25zdCBpc1VwU20gPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy51cChTSVpFX0lORk8uU00ubWF4KSk7XHJcbiAgY29uc3QgaXNEb3duTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy5kb3duKFNJWkVfSU5GTy5NRC5tYXgtMC4wMSkpO1xyXG4gIGNvbnN0IGlzTWQgPSBpc1VwU20gJiYgaXNEb3duTWQ7XHJcblxyXG4gIGNvbnN0IGlzVXBNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLnVwKFNJWkVfSU5GTy5NRC5tYXgpKTtcclxuICBjb25zdCBpc0Rvd25MZyA9IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLmRvd24oU0laRV9JTkZPLkxHLm1heCkpO1xyXG4gIGNvbnN0IGlzVXBNZEFuZElzRG93bkxnID0gaXNVcE1kICYmIGlzRG93bkxnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNEb3duU206IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLmRvd24oU0laRV9JTkZPLlNNLm1heC0wLjAxKSksXHJcbiAgICBpc01kLCAgXHJcbiAgICBpc1VwTWRBbmRJc0Rvd25MZyxcclxuICAgIGlzRG93blhzOiB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy5kb3duKExheW91dEdyYWRlLlhTKSksXHJcbiAgICAgIC8vIHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLnVwKFNJWkVfSU5GTy5TTS5tYXgpKSBcclxuICAgICAgLy8gJiYgdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMudXAoU0laRV9JTkZPLk1ELm1heCkpLFxyXG4gICAgaXNVcExnOiB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy51cChMYXlvdXRHcmFkZS5MRykpXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==