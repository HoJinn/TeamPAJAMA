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
        "&:focus": {
          outline: "solid black"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUvdGhlbWUudHMiXSwibmFtZXMiOlsiTEciLCJTSVpFX0lORk8iLCJNRCIsIlNNIiwiWFMiLCJicmVha3BvaW50cyIsImNyZWF0ZUJyZWFrcG9pbnRzIiwiZGVmQnV0dG9uUHJvcHMiLCJ2YXJpYW50Iiwic2l6ZSIsImRlZmF1bHRUaGVtZSIsImNyZWF0ZVRoZW1lIiwidmFsdWVzIiwieHMiLCJtYXgiLCJzbSIsIm1kIiwibGciLCJ4bCIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5IiwidGV4dCIsIm92ZXJyaWRlcyIsIk11aUZvcm1Hcm91cCIsInJvb3QiLCJkaXNwbGF5IiwiTXVpQnV0dG9uIiwibWluV2lkdGgiLCJvdXRsaW5lIiwiTXVpQnV0dG9uQmFzZSIsIk11aVNlbGVjdCIsIk11aUNoZWNrYm94IiwiTXVpR3JpZCIsImZsZXhHcm93IiwiTXVpVHlwb2dyYXBoeSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsImNhcHRpb24iLCJmb250U2l6ZSIsInB4VG9SZW0iLCJkb3duIiwiYm9keTIiLCJib2R5MSIsInN1YnRpdGxlMiIsInN1YnRpdGxlMSIsImg2IiwiaDUiLCJoNCIsInVzZUxheW91dEdyYWRlIiwidGhlbWUiLCJ0aGVtZV8iLCJ1c2VUaGVtZSIsImlzRG93blNtIiwiaXNNZCIsImlzVXBNZEFuZElzRG93bkxnIiwiaXNEb3duWHMiLCJpc1VwTGciLCJpc1VwU20iLCJ1c2VNZWRpYVF1ZXJ5IiwidXAiLCJpc0Rvd25NZCIsImlzVXBNZCIsImlzRG93bkxnIiwiTGF5b3V0R3JhZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBLElBQU9BLEVBQVAsR0FBeUJDLDZEQUF6QixDQUFPRCxF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QUFFQSxNQUFNQyxNQUFNLEdBQUdILHVFQUFhLENBQUNSLE1BQU0sQ0FBQ25ELFdBQVAsQ0FBbUI0RCxFQUFuQixDQUFzQmhFLDZEQUFTLENBQUNDLEVBQVYsQ0FBYVksR0FBbkMsQ0FBRCxDQUE1QjtBQUNBLE1BQU1zRCxRQUFRLEdBQUdKLHVFQUFhLENBQUNSLE1BQU0sQ0FBQ25ELFdBQVAsQ0FBbUJ5QyxJQUFuQixDQUF3QjdDLDZEQUFTLENBQUNELEVBQVYsQ0FBYWMsR0FBckMsQ0FBRCxDQUE5QjtBQUNBLE1BQU04QyxpQkFBaUIsR0FBR08sTUFBTSxJQUFJQyxRQUFwQztBQUVBLFNBQU87QUFDTFYsWUFBUSxFQUFFTSx1RUFBYSxDQUFDUixNQUFNLENBQUNuRCxXQUFQLENBQW1CeUMsSUFBbkIsQ0FBd0I3Qyw2REFBUyxDQUFDRSxFQUFWLENBQWFXLEdBQWIsR0FBaUIsSUFBekMsQ0FBRCxDQURsQjtBQUVMNkMsUUFBSSxFQUFKQSxJQUZLO0FBR0xDLHFCQUFpQixFQUFqQkEsaUJBSEs7QUFJTEMsWUFBUSxFQUFFRyx1RUFBYSxDQUFDUixNQUFNLENBQUNuRCxXQUFQLENBQW1CeUMsSUFBbkIsQ0FBd0J1QiwrREFBVyxDQUFDakUsRUFBcEMsQ0FBRCxDQUpsQjtBQUtIO0FBQ0E7QUFDRjBELFVBQU0sRUFBRUUsdUVBQWEsQ0FBQ1IsTUFBTSxDQUFDbkQsV0FBUCxDQUFtQjRELEVBQW5CLENBQXNCSSwrREFBVyxDQUFDckUsRUFBbEMsQ0FBRDtBQVBoQixHQUFQO0FBU0QsQ0F0Qk07O0dBQU1zRCxjO1VBQ2FHLDBELEVBSVRPLCtELEVBQ0VBLCtELEVBR0ZBLCtELEVBQ0VBLCtELEVBSUxBLCtELEVBR0FBLCtELEVBR0ZBLCtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM3NjhmNjVhOWVkOGVkNDZiNjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZSxCdXR0b25Qcm9wcywgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50cydcclxuaW1wb3J0IHtweFRvUmVtfSBmcm9tICdzcmMvdXRpbCdcclxuXHJcblxyXG5pbXBvcnQge0xheW91dEdyYWRlLCBTSVpFX0lORk99IGZyb20gJ3JlY29pbFN0YXRlcy9sYXlvdXQnO1xyXG5jb25zdCB7TEcsIE1ELCBTTSwgWFN9ID0gU0laRV9JTkZPO1xyXG5cclxuY29uc3QgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyh7fSk7XHJcblxyXG5leHBvcnQgdHlwZSBDb21wb25lbnRTaXplID0gJ25vbmUnfCdzbScgfCAnbWQnIHwgJ2xnJztcclxuZXhwb3J0IHR5cGUgQ29tcG9uZW50Q29sb3IgPSAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnc3VjY2Vzcyc7XHJcbmV4cG9ydCB0eXBlIExheW91dFR5cGUgPSB7XHJcbiAgc2l6ZT86IENvbXBvbmVudFNpemVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZkJ1dHRvblByb3BzOkJ1dHRvblByb3BzID0ge1xyXG4gIHZhcmlhbnQ6ICdjb250YWluZWQnLFxyXG4gIHNpemU6ICdzbWFsbCdcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICB2YWx1ZXM6IHtcclxuICAgICAgeHM6IFhTLm1heCxcclxuICAgICAgc206IFNNLm1heCxcclxuICAgICAgbWQ6IE1ELm1heCxcclxuICAgICAgbGc6IExHLm1heCxcclxuICAgICAgeGw6IDE5MjBcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGhlbWUoe1xyXG4gIGJyZWFrcG9pbnRzOntcclxuICAgIC4uLmRlZmF1bHRUaGVtZS5icmVha3BvaW50c1xyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeTp7XHJcbiAgICBcclxuICAgIGZvbnRGYW1pbHk6XCJyb2JvdG9cIlxyXG4gIH0sXHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeTp7XHJcbiAgICAgIG1haW46ICcjMDBCN0YzJyxcclxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZidcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjonI0IzRUFGQycsXHJcbiAgICAgIGNvbnRyYXN0VGV4dDogXCIjZmZmXCJcclxuICAgIH0sXHJcbiAgICB0ZXh0OntcclxuICAgICAgcHJpbWFyeTpcIiMwMDBcIixcclxuICAgICAgc2Vjb25kYXJ5OlwiIzY2NlwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBvdmVycmlkZXM6e1xyXG4gICAgTXVpRm9ybUdyb3VwOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICAnJltyb2xlPVwicmFkaW9ncm91cFwiXSc6IHsgZGlzcGxheTogJ2Jsb2NrJyB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlCdXR0b246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIG1pbldpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgXCImOmZvY3VzXCI6e1xyXG4gICAgICAgICAgb3V0bGluZTpcInNvbGlkIGJsYWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpQnV0dG9uQmFzZTp7XHJcbiAgICAgIHJvb3Q6e1xyXG4gICAgICAgIFwiJjpmb2N1c1wiOntcclxuICAgICAgICAgIC8vIG91dGxpbmU6XCJzb2xpZCBibGFja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgTXVpU2VsZWN0OntcclxuICAgICAgcm9vdDp7XHJcbiAgICAgICAgXCImOmZvY3VzXCI6e1xyXG4gICAgICAgICAgLy8gb3V0bGluZTpcInNvbGlkIGJsYWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICB9LFxyXG4gICAgIE11aUNoZWNrYm94OntcclxuICAgICAgcm9vdDp7XHJcbiAgICAgICAgXCImOmZvY3VzXCI6e1xyXG4gICAgICAgICAgLy8gb3V0bGluZTpcInNvbGlkIGJsYWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICB9LFxyXG4gICAgTXVpR3JpZDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgJyYuc3BhY2VyJzoge1xyXG4gICAgICAgICAgZmxleEdyb3c6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlUeXBvZ3JhcGh5OntcclxuICAgICAgcm9vdDp7XHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTonbm9uZScsXHJcbiAgICAgICAgICAnJi5ib2xkJzoge1xyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA2MDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnJi5yZWd1bGFyJzoge1xyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA0MDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnJi5saWdodCc6IHtcclxuICAgICAgICAgICAgZm9udFdlaWdodDogMzAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYudGhpbic6IHtcclxuICAgICAgICAgICAgZm9udFdlaWdodDogMjAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYucm9ib3RvJzoge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYudGltZXMnOiB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6J3JvYm90bycsXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6JzNweCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhcHRpb246e1xyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTQpXHJcbiAgICAgICAgLFticmVha3BvaW50cy5kb3duKFNNLm1heCldOntcclxuICAgICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgIFxyXG4gICAgICBib2R5Mjp7XHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSgxNilcclxuICAgICAgICAsW2JyZWFrcG9pbnRzLmRvd24oU00ubWF4KV06e1xyXG4gICAgICAgICAgZm9udFNpemU6cHhUb1JlbSgxMClcclxuICAgICAgICB9XHJcbiAgICAgICAgLGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAsZm9udFdlaWdodDo1MDBcclxuICAgICAgfSxcclxuICAgICAgICAgXHJcbiAgICAgIGJvZHkxOntcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDIwKVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDEzKVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMCBcclxuICAgICAgfSxcclxuICAgICAgc3VidGl0bGUyOntcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDMwKVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDE1KVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgICBzdWJ0aXRsZTE6e1xyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMzUpXHJcbiAgICAgICAgLFticmVha3BvaW50cy5kb3duKFNNLm1heCldOntcclxuICAgICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMjApXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwXHJcbiAgICAgIH0sXHJcbiAgICAgXHJcbiAgICAgIGg2OntcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDcwKVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDMwKVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgaDU6ey8v66mU7J24IOyEueyFmDEg7YWN7Iqk7Yq4IOyCrOydtOymiFxyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTQwKVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDQ2KVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgICBoNDp7Ly9wYyDrqZTsnbjsl5DshJzrp4wg7IKs7JqpXHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSg2MClcclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgXHJcbiAgICB9LFxyXG4gIH1cclxufSlcclxuXHJcbnR5cGUgVXNlTGF5b3V0R3JhZGUgPSB7XHJcbiAgaXNEb3duU206IGJvb2xlYW4sXHJcbiAgaXNEb3duWHM6Ym9vbGVhbixcclxuICBpc01kOiBib29sZWFuLFxyXG4gIGlzVXBNZEFuZElzRG93bkxnOiBib29sZWFuLFxyXG4gIGlzVXBMZzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCB1c2VMYXlvdXRHcmFkZSA9ICh0aGVtZT86IFRoZW1lICk6IFVzZUxheW91dEdyYWRlID0+IHtcclxuICBjb25zdCB0aGVtZV8gPSB0aGVtZSB8fCB1c2VUaGVtZSgpO1xyXG4gIGlmKCF0aGVtZV8pIHJldHVybiB7aXNEb3duU206IGZhbHNlLCBpc01kOiBmYWxzZSwgaXNVcE1kQW5kSXNEb3duTGc6IGZhbHNlLGlzRG93blhzOmZhbHNlLCBpc1VwTGc6IGZhbHNlfTtcclxuXHJcblxyXG4gIGNvbnN0IGlzVXBTbSA9IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLnVwKFNJWkVfSU5GTy5TTS5tYXgpKTtcclxuICBjb25zdCBpc0Rvd25NZCA9IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLmRvd24oU0laRV9JTkZPLk1ELm1heC0wLjAxKSk7XHJcbiAgY29uc3QgaXNNZCA9IGlzVXBTbSAmJiBpc0Rvd25NZDtcclxuXHJcbiAgY29uc3QgaXNVcE1kID0gdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMudXAoU0laRV9JTkZPLk1ELm1heCkpO1xyXG4gIGNvbnN0IGlzRG93bkxnID0gdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMuZG93bihTSVpFX0lORk8uTEcubWF4KSk7XHJcbiAgY29uc3QgaXNVcE1kQW5kSXNEb3duTGcgPSBpc1VwTWQgJiYgaXNEb3duTGc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpc0Rvd25TbTogdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMuZG93bihTSVpFX0lORk8uU00ubWF4LTAuMDEpKSxcclxuICAgIGlzTWQsICBcclxuICAgIGlzVXBNZEFuZElzRG93bkxnLFxyXG4gICAgaXNEb3duWHM6IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLmRvd24oTGF5b3V0R3JhZGUuWFMpKSxcclxuICAgICAgLy8gdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMudXAoU0laRV9JTkZPLlNNLm1heCkpIFxyXG4gICAgICAvLyAmJiB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy51cChTSVpFX0lORk8uTUQubWF4KSksXHJcbiAgICBpc1VwTGc6IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLnVwKExheW91dEdyYWRlLkxHKSlcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9