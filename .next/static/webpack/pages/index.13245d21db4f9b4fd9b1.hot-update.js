webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUvdGhlbWUudHMiXSwibmFtZXMiOlsiTEciLCJTSVpFX0lORk8iLCJNRCIsIlNNIiwiWFMiLCJicmVha3BvaW50cyIsImNyZWF0ZUJyZWFrcG9pbnRzIiwiZGVmQnV0dG9uUHJvcHMiLCJ2YXJpYW50Iiwic2l6ZSIsImRlZmF1bHRUaGVtZSIsImNyZWF0ZVRoZW1lIiwidmFsdWVzIiwieHMiLCJtYXgiLCJzbSIsIm1kIiwibGciLCJ4bCIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5IiwidGV4dCIsIm92ZXJyaWRlcyIsIk11aUZvcm1Hcm91cCIsInJvb3QiLCJkaXNwbGF5IiwiTXVpQnV0dG9uIiwibWluV2lkdGgiLCJNdWlCdXR0b25CYXNlIiwiTXVpU2VsZWN0IiwiTXVpQ2hlY2tib3giLCJNdWlHcmlkIiwiZmxleEdyb3ciLCJNdWlUeXBvZ3JhcGh5IiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiY2FwdGlvbiIsImZvbnRTaXplIiwicHhUb1JlbSIsImRvd24iLCJib2R5MiIsImJvZHkxIiwic3VidGl0bGUyIiwic3VidGl0bGUxIiwiaDYiLCJoNSIsImg0IiwidXNlTGF5b3V0R3JhZGUiLCJ0aGVtZSIsInRoZW1lXyIsInVzZVRoZW1lIiwiaXNEb3duU20iLCJpc01kIiwiaXNVcE1kQW5kSXNEb3duTGciLCJpc0Rvd25YcyIsImlzVXBMZyIsImlzVXBTbSIsInVzZU1lZGlhUXVlcnkiLCJ1cCIsImlzRG93bk1kIiwiaXNVcE1kIiwiaXNEb3duTGciLCJMYXlvdXRHcmFkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EsSUFBT0EsRUFBUCxHQUF5QkMsNkRBQXpCLENBQU9ELEVBQVA7QUFBQSxJ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dUVBQWEsQ0FBQ1IsTUFBTSxDQUFDbEQsV0FBUCxDQUFtQjJELEVBQW5CLENBQXNCL0QsNkRBQVMsQ0FBQ0MsRUFBVixDQUFhWSxHQUFuQyxDQUFELENBQTVCO0FBQ0EsTUFBTXFELFFBQVEsR0FBR0osdUVBQWEsQ0FBQ1IsTUFBTSxDQUFDbEQsV0FBUCxDQUFtQndDLElBQW5CLENBQXdCNUMsNkRBQVMsQ0FBQ0QsRUFBVixDQUFhYyxHQUFyQyxDQUFELENBQTlCO0FBQ0EsTUFBTTZDLGlCQUFpQixHQUFHTyxNQUFNLElBQUlDLFFBQXBDO0FBRUEsU0FBTztBQUNMVixZQUFRLEVBQUVNLHVFQUFhLENBQUNSLE1BQU0sQ0FBQ2xELFdBQVAsQ0FBbUJ3QyxJQUFuQixDQUF3QjVDLDZEQUFTLENBQUNFLEVBQVYsQ0FBYVcsR0FBYixHQUFpQixJQUF6QyxDQUFELENBRGxCO0FBRUw0QyxRQUFJLEVBQUpBLElBRks7QUFHTEMscUJBQWlCLEVBQWpCQSxpQkFISztBQUlMQyxZQUFRLEVBQUVHLHVFQUFhLENBQUNSLE1BQU0sQ0FBQ2xELFdBQVAsQ0FBbUJ3QyxJQUFuQixDQUF3QnVCLCtEQUFXLENBQUNoRSxFQUFwQyxDQUFELENBSmxCO0FBS0g7QUFDQTtBQUNGeUQsVUFBTSxFQUFFRSx1RUFBYSxDQUFDUixNQUFNLENBQUNsRCxXQUFQLENBQW1CMkQsRUFBbkIsQ0FBc0JJLCtEQUFXLENBQUNwRSxFQUFsQyxDQUFEO0FBUGhCLEdBQVA7QUFTRCxDQXRCTTs7R0FBTXFELGM7VUFDYUcsMEQsRUFJVE8sK0QsRUFDRUEsK0QsRUFHRkEsK0QsRUFDRUEsK0QsRUFJTEEsK0QsRUFHQUEsK0QsRUFHRkEsK0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTMyNDVkMjFkYjRmOWI0ZmQ5YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lLEJ1dHRvblByb3BzLCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgY3JlYXRlQnJlYWtwb2ludHMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzJ1xyXG5pbXBvcnQge3B4VG9SZW19IGZyb20gJ3NyYy91dGlsJ1xyXG5cclxuXHJcbmltcG9ydCB7TGF5b3V0R3JhZGUsIFNJWkVfSU5GT30gZnJvbSAncmVjb2lsU3RhdGVzL2xheW91dCc7XHJcbmNvbnN0IHtMRywgTUQsIFNNLCBYU30gPSBTSVpFX0lORk87XHJcblxyXG5jb25zdCBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKHt9KTtcclxuXHJcbmV4cG9ydCB0eXBlIENvbXBvbmVudFNpemUgPSAnbm9uZSd8J3NtJyB8ICdtZCcgfCAnbGcnO1xyXG5leHBvcnQgdHlwZSBDb21wb25lbnRDb2xvciA9ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdzdWNjZXNzJztcclxuZXhwb3J0IHR5cGUgTGF5b3V0VHlwZSA9IHtcclxuICBzaXplPzogQ29tcG9uZW50U2l6ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVmQnV0dG9uUHJvcHM6QnV0dG9uUHJvcHMgPSB7XHJcbiAgdmFyaWFudDogJ2NvbnRhaW5lZCcsXHJcbiAgc2l6ZTogJ3NtYWxsJ1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0VGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIHZhbHVlczoge1xyXG4gICAgICB4czogWFMubWF4LFxyXG4gICAgICBzbTogU00ubWF4LFxyXG4gICAgICBtZDogTUQubWF4LFxyXG4gICAgICBsZzogTEcubWF4LFxyXG4gICAgICB4bDogMTkyMFxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaGVtZSh7XHJcbiAgYnJlYWtwb2ludHM6e1xyXG4gICAgLi4uZGVmYXVsdFRoZW1lLmJyZWFrcG9pbnRzXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OntcclxuICAgIFxyXG4gICAgZm9udEZhbWlseTpcInJvYm90b1wiXHJcbiAgfSxcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OntcclxuICAgICAgbWFpbjogJyMwMEI3RjMnLFxyXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJ1xyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOicjQjNFQUZDJyxcclxuICAgICAgY29udHJhc3RUZXh0OiBcIiNmZmZcIlxyXG4gICAgfSxcclxuICAgIHRleHQ6e1xyXG4gICAgICBwcmltYXJ5OlwiIzAwMFwiLFxyXG4gICAgICBzZWNvbmRhcnk6XCIjNjY2XCJcclxuICAgIH1cclxuICB9LFxyXG4gIG92ZXJyaWRlczp7XHJcbiAgICBNdWlGb3JtR3JvdXA6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgICcmW3JvbGU9XCJyYWRpb2dyb3VwXCJdJzogeyBkaXNwbGF5OiAnYmxvY2snIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgbWluV2lkdGg6ICc3MHB4JyxcclxuICAgICAgICBcIiY6Zm9jdXNcIjp7XHJcbiAgICAgICAgICAvLyBvdXRsaW5lOlwic29saWQgYmxhY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlCdXR0b25CYXNlOntcclxuICAgICAgcm9vdDp7XHJcbiAgICAgICAgXCImOmZvY3VzXCI6e1xyXG4gICAgICAgICAgLy8gb3V0bGluZTpcInNvbGlkIGJsYWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlTZWxlY3Q6e1xyXG4gICAgICByb290OntcclxuICAgICAgICBcIiY6Zm9jdXNcIjp7XHJcbiAgICAgICAgICAvLyBvdXRsaW5lOlwic29saWQgYmxhY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIH0sXHJcbiAgICAgTXVpQ2hlY2tib3g6e1xyXG4gICAgICByb290OntcclxuICAgICAgICBcIiY6Zm9jdXNcIjp7XHJcbiAgICAgICAgICAvLyBvdXRsaW5lOlwic29saWQgYmxhY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIH0sXHJcbiAgICBNdWlHcmlkOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICAnJi5zcGFjZXInOiB7XHJcbiAgICAgICAgICBmbGV4R3JvdzogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIE11aVR5cG9ncmFwaHk6e1xyXG4gICAgICByb290OntcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOidub25lJyxcclxuICAgICAgICAgICcmLmJvbGQnOiB7XHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmLnJlZ3VsYXInOiB7XHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICcmLmxpZ2h0Jzoge1xyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAzMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnJi50aGluJzoge1xyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAyMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnJi5yb2JvdG8nOiB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnJi50aW1lcyc6IHtcclxuICAgICAgICAgICAgZm9udEZhbWlseToncm9ib3RvJyxcclxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzonM3B4J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgY2FwdGlvbjp7XHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSgxNClcclxuICAgICAgICAsW2JyZWFrcG9pbnRzLmRvd24oU00ubWF4KV06e1xyXG4gICAgICAgICAgZm9udFNpemU6cHhUb1JlbSgxMilcclxuICAgICAgICB9XHJcbiAgICAgICAgLGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAsZm9udFdlaWdodDo1MDBcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgXHJcbiAgICAgIGJvZHkyOntcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDE2KVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDEwKVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgICAgICBcclxuICAgICAgYm9keTE6e1xyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMjApXHJcbiAgICAgICAgLFticmVha3BvaW50cy5kb3duKFNNLm1heCldOntcclxuICAgICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwIFxyXG4gICAgICB9LFxyXG4gICAgICBzdWJ0aXRsZTI6e1xyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMzApXHJcbiAgICAgICAgLFticmVha3BvaW50cy5kb3duKFNNLm1heCldOntcclxuICAgICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1YnRpdGxlMTp7XHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSgzNSlcclxuICAgICAgICAsW2JyZWFrcG9pbnRzLmRvd24oU00ubWF4KV06e1xyXG4gICAgICAgICAgZm9udFNpemU6cHhUb1JlbSgyMClcclxuICAgICAgICB9XHJcbiAgICAgICAgLGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAsZm9udFdlaWdodDo1MDBcclxuICAgICAgfSxcclxuICAgICBcclxuICAgICAgaDY6e1xyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oNzApXHJcbiAgICAgICAgLFticmVha3BvaW50cy5kb3duKFNNLm1heCldOntcclxuICAgICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMzApXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwXHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICBoNTp7Ly/rqZTsnbgg7IS57IWYMSDthY3siqTtirgg7IKs7J207KaIXHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSgxNDApXHJcbiAgICAgICAgLFticmVha3BvaW50cy5kb3duKFNNLm1heCldOntcclxuICAgICAgICAgIGZvbnRTaXplOnB4VG9SZW0oNDYpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGg0OnsvL3BjIOuplOyduOyXkOyEnOunjCDsgqzsmqlcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDYwKVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwXHJcbiAgICAgIH0sXHJcbiAgICBcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG5cclxudHlwZSBVc2VMYXlvdXRHcmFkZSA9IHtcclxuICBpc0Rvd25TbTogYm9vbGVhbixcclxuICBpc0Rvd25Yczpib29sZWFuLFxyXG4gIGlzTWQ6IGJvb2xlYW4sXHJcbiAgaXNVcE1kQW5kSXNEb3duTGc6IGJvb2xlYW4sXHJcbiAgaXNVcExnOiBib29sZWFuXHJcbn1cclxuZXhwb3J0IGNvbnN0IHVzZUxheW91dEdyYWRlID0gKHRoZW1lPzogVGhlbWUgKTogVXNlTGF5b3V0R3JhZGUgPT4ge1xyXG4gIGNvbnN0IHRoZW1lXyA9IHRoZW1lIHx8IHVzZVRoZW1lKCk7XHJcbiAgaWYoIXRoZW1lXykgcmV0dXJuIHtpc0Rvd25TbTogZmFsc2UsIGlzTWQ6IGZhbHNlLCBpc1VwTWRBbmRJc0Rvd25MZzogZmFsc2UsaXNEb3duWHM6ZmFsc2UsIGlzVXBMZzogZmFsc2V9O1xyXG5cclxuXHJcbiAgY29uc3QgaXNVcFNtID0gdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMudXAoU0laRV9JTkZPLlNNLm1heCkpO1xyXG4gIGNvbnN0IGlzRG93bk1kID0gdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMuZG93bihTSVpFX0lORk8uTUQubWF4LTAuMDEpKTtcclxuICBjb25zdCBpc01kID0gaXNVcFNtICYmIGlzRG93bk1kO1xyXG5cclxuICBjb25zdCBpc1VwTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy51cChTSVpFX0lORk8uTUQubWF4KSk7XHJcbiAgY29uc3QgaXNEb3duTGcgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy5kb3duKFNJWkVfSU5GTy5MRy5tYXgpKTtcclxuICBjb25zdCBpc1VwTWRBbmRJc0Rvd25MZyA9IGlzVXBNZCAmJiBpc0Rvd25MZztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzRG93blNtOiB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy5kb3duKFNJWkVfSU5GTy5TTS5tYXgtMC4wMSkpLFxyXG4gICAgaXNNZCwgIFxyXG4gICAgaXNVcE1kQW5kSXNEb3duTGcsXHJcbiAgICBpc0Rvd25YczogdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMuZG93bihMYXlvdXRHcmFkZS5YUykpLFxyXG4gICAgICAvLyB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy51cChTSVpFX0lORk8uU00ubWF4KSkgXHJcbiAgICAgIC8vICYmIHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLnVwKFNJWkVfSU5GTy5NRC5tYXgpKSxcclxuICAgIGlzVXBMZzogdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMudXAoTGF5b3V0R3JhZGUuTEcpKVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=