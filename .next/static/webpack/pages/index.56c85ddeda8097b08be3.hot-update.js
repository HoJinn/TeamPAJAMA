webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/rightBtn.tsx":
/*!****************************************!*\
  !*** ./components/layout/rightBtn.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/icon/phone.png */ "./assets/icon/phone.png");
/* harmony import */ var assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/icon/talk.png */ "./assets/icon/talk.png");
/* harmony import */ var assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/icon/blog.png */ "./assets/icon/blog.png");
/* harmony import */ var assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icon/insta.png */ "./assets/icon/insta.png");
/* harmony import */ var assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_icon_write_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icon/write.png */ "./assets/icon/write.png");
/* harmony import */ var assets_icon_write_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_icon_write_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "C:\\pro\\myReact\\TeamPAJAMA\\components\\layout\\rightBtn.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import useStyles from '../../public/common'







var btnArr = [{
  title: '고객상담전화',
  subTitle: '010.6483.1286',
  link: 'tel',
  icon: assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_2___default.a
}, {
  title: '카카오톡상담',
  link: 'http://pf.kakao.com/_Qpptb',
  icon: assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_3___default.a
}, {
  title: '네이버 블로그',
  link: 'https://blog.naver.com/doctorclean0',
  icon: assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_4___default.a
}, {
  title: '인스타그램',
  link: 'https://www.instagram.com/doctorclean0/',
  icon: assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_5___default.a
}, {
  title: '견적문의',
  link: '/qna',
  icon: assets_icon_write_png__WEBPACK_IMPORTED_MODULE_6___default.a
}];

var Layout = function Layout() {
  // const windowLayout = useRecoilValue(windowLayoutSelector);
  // const {isMd,isDownSm} = useLayoutGrade();
  // const { grade } = windowLayout
  var btnMap = btnArr.map(function (obj, i) {
    return __jsx(BtnCard, {
      key: i,
      title: obj.title,
      subTitle: obj.subTitle,
      link: obj.link,
      icon: obj.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 12
      }
    });
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    minWidth: "110px",
    paddingBottom: 3,
    paddingTop: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    padding: 1,
    paddingTop: 0,
    bgcolor: "#B3EAFC",
    width: "110px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "110px",
    bgcolor: "#B3EAFC",
    textAlign: "center",
    paddingBottom: 1,
    borderBottom: '1px solid #fff',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    style: {
      color: '#007EF3'
    },
    className: "bold",
    component: 'span',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "\uB2E5\uD130"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: 'span',
    className: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "\uD06C\uB9B0")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, btnMap));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

// const HotelCard:FC<HotelCardProps>=({title,content,day,year})=>{
var BtnCard = function BtnCard(_ref) {
  _s();

  var title = _ref.title,
      subTitle = _ref.subTitle,
      link = _ref.link,
      icon = _ref.icon;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var handleClickFn = function handleClickFn(e) {
    if (e === "/qna") {
      router.push(e);
    } else if (e === "tel") {
      console.log("010-6483-1286");
    } else {
      window.open(e);
    }
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    padding: 1,
    borderBottom: "1px solid #fff",
    bgcolor: "#B3EAFC",
    width: "110px",
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return handleClickFn(link);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    style: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: icon,
    width: "30px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    className: "bold",
    style: {
      fontSize: "11px",
      paddingTop: "10px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, title), subTitle ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    className: "bold",
    style: {
      fontSize: "11px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, subTitle) : undefined)));
};

_s(BtnCard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c2 = BtnCard;

var _c, _c2;

$RefreshReg$(_c, "Layout");
$RefreshReg$(_c2, "BtnCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
        "&:focus": {
          outline: "solid black"
        }
      }
    },
    MuiSelect: {
      root: {
        "&:focus": {
          outline: "solid black"
        }
      }
    },
    MuiCheckbox: {
      root: {
        "&:focus": {
          outline: "solid black"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvcmlnaHRCdG4udHN4Iiwid2VicGFjazovL19OX0UvLi90aGVtZS90aGVtZS50cyJdLCJuYW1lcyI6WyJidG5BcnIiLCJ0aXRsZSIsInN1YlRpdGxlIiwibGluayIsImljb24iLCJQaG9uZSIsIlRhbGsiLCJCbG9nIiwiSW5zdGEiLCJXcml0ZSIsIkxheW91dCIsImJ0bk1hcCIsIm1hcCIsIm9iaiIsImkiLCJjb2xvciIsIkJ0bkNhcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDbGlja0ZuIiwiZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib3BlbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwicGFkZGluZ1RvcCIsInVuZGVmaW5lZCIsIkxHIiwiU0laRV9JTkZPIiwiTUQiLCJTTSIsIlhTIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVCcmVha3BvaW50cyIsImRlZkJ1dHRvblByb3BzIiwidmFyaWFudCIsInNpemUiLCJkZWZhdWx0VGhlbWUiLCJjcmVhdGVUaGVtZSIsInZhbHVlcyIsInhzIiwibWF4Iiwic20iLCJtZCIsImxnIiwieGwiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsInRleHQiLCJvdmVycmlkZXMiLCJNdWlGb3JtR3JvdXAiLCJyb290IiwiTXVpQnV0dG9uIiwibWluV2lkdGgiLCJvdXRsaW5lIiwiTXVpQnV0dG9uQmFzZSIsIk11aVNlbGVjdCIsIk11aUNoZWNrYm94IiwiTXVpR3JpZCIsImZsZXhHcm93IiwiTXVpVHlwb2dyYXBoeSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsImNhcHRpb24iLCJweFRvUmVtIiwiZG93biIsImJvZHkyIiwiYm9keTEiLCJzdWJ0aXRsZTIiLCJzdWJ0aXRsZTEiLCJoNiIsImg1IiwiaDQiLCJ1c2VMYXlvdXRHcmFkZSIsInRoZW1lIiwidGhlbWVfIiwidXNlVGhlbWUiLCJpc0Rvd25TbSIsImlzTWQiLCJpc1VwTWRBbmRJc0Rvd25MZyIsImlzRG93blhzIiwiaXNVcExnIiwiaXNVcFNtIiwidXNlTWVkaWFRdWVyeSIsInVwIiwiaXNEb3duTWQiLCJpc1VwTWQiLCJpc0Rvd25MZyIsIkxheW91dEdyYWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUMsQ0FDWDtBQUFDQyxPQUFLLEVBQUMsUUFBUDtBQUFnQkMsVUFBUSxFQUFDLGVBQXpCO0FBQXlDQyxNQUFJLEVBQUMsS0FBOUM7QUFBb0RDLE1BQUksRUFBQ0MsNERBQUtBO0FBQTlELENBRFcsRUFFWDtBQUFDSixPQUFLLEVBQUMsUUFBUDtBQUFnQkUsTUFBSSxFQUFDLDRCQUFyQjtBQUFrREMsTUFBSSxFQUFDRSwyREFBSUE7QUFBM0QsQ0FGVyxFQUdYO0FBQUNMLE9BQUssRUFBQyxTQUFQO0FBQWlCRSxNQUFJLEVBQUMscUNBQXRCO0FBQTREQyxNQUFJLEVBQUNHLDJEQUFJQTtBQUFyRSxDQUhXLEVBSVg7QUFBQ04sT0FBSyxFQUFDLE9BQVA7QUFBZUUsTUFBSSxFQUFDLHlDQUFwQjtBQUE4REMsTUFBSSxFQUFDSSw0REFBS0E7QUFBeEUsQ0FKVyxFQUtYO0FBQUNQLE9BQUssRUFBQyxNQUFQO0FBQWNFLE1BQUksRUFBQyxNQUFuQjtBQUEwQkMsTUFBSSxFQUFDSyw0REFBS0E7QUFBcEMsQ0FMVyxDQUFiOztBQU9BLElBQU1DLE1BQVUsR0FBRyxTQUFiQSxNQUFhLEdBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWCxNQUFNLENBQUNZLEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQUtDLENB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LENBQW1CMEQsRUFBbkIsQ0FBc0I5RCw2REFBUyxDQUFDQyxFQUFWLENBQWFZLEdBQW5DLENBQUQsQ0FBNUI7QUFDQSxNQUFNb0QsUUFBUSxHQUFHSix1RUFBYSxDQUFDUixNQUFNLENBQUNqRCxXQUFQLENBQW1CdUMsSUFBbkIsQ0FBd0IzQyw2REFBUyxDQUFDRCxFQUFWLENBQWFjLEdBQXJDLENBQUQsQ0FBOUI7QUFDQSxNQUFNNEMsaUJBQWlCLEdBQUdPLE1BQU0sSUFBSUMsUUFBcEM7QUFFQSxTQUFPO0FBQ0xWLFlBQVEsRUFBRU0sdUVBQWEsQ0FBQ1IsTUFBTSxDQUFDakQsV0FBUCxDQUFtQnVDLElBQW5CLENBQXdCM0MsNkRBQVMsQ0FBQ0UsRUFBVixDQUFhVyxHQUFiLEdBQWlCLElBQXpDLENBQUQsQ0FEbEI7QUFFTDJDLFFBQUksRUFBSkEsSUFGSztBQUdMQyxxQkFBaUIsRUFBakJBLGlCQUhLO0FBSUxDLFlBQVEsRUFBRUcsdUVBQWEsQ0FBQ1IsTUFBTSxDQUFDakQsV0FBUCxDQUFtQnVDLElBQW5CLENBQXdCdUIsK0RBQVcsQ0FBQy9ELEVBQXBDLENBQUQsQ0FKbEI7QUFLSDtBQUNBO0FBQ0Z3RCxVQUFNLEVBQUVFLHVFQUFhLENBQUNSLE1BQU0sQ0FBQ2pELFdBQVAsQ0FBbUIwRCxFQUFuQixDQUFzQkksK0RBQVcsQ0FBQ25FLEVBQWxDLENBQUQ7QUFQaEIsR0FBUDtBQVNELENBdEJNOztHQUFNb0QsYztVQUNhRywwRCxFQUlUTywrRCxFQUNFQSwrRCxFQUdGQSwrRCxFQUNFQSwrRCxFQUlMQSwrRCxFQUdBQSwrRCxFQUdGQSwrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NmM4NWRkZWRhODA5N2IwOGJlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuLi8uLi9wdWJsaWMvY29tbW9uJ1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFBob25lIGZyb20gJ2Fzc2V0cy9pY29uL3Bob25lLnBuZyc7XHJcbmltcG9ydCBUYWxrIGZyb20gJ2Fzc2V0cy9pY29uL3RhbGsucG5nJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnYXNzZXRzL2ljb24vYmxvZy5wbmcnO1xyXG5pbXBvcnQgSW5zdGEgZnJvbSAnYXNzZXRzL2ljb24vaW5zdGEucG5nJztcclxuaW1wb3J0IFdyaXRlIGZyb20gJ2Fzc2V0cy9pY29uL3dyaXRlLnBuZyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGJ0bkFycj1bXHJcbiAge3RpdGxlOifqs6DqsJ3sg4Hri7TsoITtmZQnLHN1YlRpdGxlOicwMTAuNjQ4My4xMjg2JyxsaW5rOid0ZWwnLGljb246UGhvbmV9LFxyXG4gIHt0aXRsZTon7Lm07Lm07Jik7Yah7IOB64u0JyxsaW5rOidodHRwOi8vcGYua2FrYW8uY29tL19RcHB0YicsaWNvbjpUYWxrfSxcclxuICB7dGl0bGU6J+uEpOydtOuyhCDruJTroZzqt7gnLGxpbms6J2h0dHBzOi8vYmxvZy5uYXZlci5jb20vZG9jdG9yY2xlYW4wJyxpY29uOkJsb2d9LFxyXG4gIHt0aXRsZTon7J247Iqk7YOA6re4656oJyxsaW5rOidodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2RvY3RvcmNsZWFuMC8nLGljb246SW5zdGF9LFxyXG4gIHt0aXRsZTon6rKs7KCB66y47J2YJyxsaW5rOicvcW5hJyxpY29uOldyaXRlfSxcclxuXVxyXG5jb25zdCBMYXlvdXQ6IEZDID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHdpbmRvd0xheW91dCA9IHVzZVJlY29pbFZhbHVlKHdpbmRvd0xheW91dFNlbGVjdG9yKTtcclxuICAvLyBjb25zdCB7aXNNZCxpc0Rvd25TbX0gPSB1c2VMYXlvdXRHcmFkZSgpO1xyXG4gIC8vIGNvbnN0IHsgZ3JhZGUgfSA9IHdpbmRvd0xheW91dFxyXG4gIGNvbnN0IGJ0bk1hcCA9IGJ0bkFyci5tYXAoKG9iaixpKT0+e1xyXG4gICAgcmV0dXJuIDxCdG5DYXJkIGtleT17aX0gdGl0bGU9e29iai50aXRsZX0gc3ViVGl0bGU9e29iai5zdWJUaXRsZX0gbGluaz17b2JqLmxpbmt9IGljb249e29iai5pY29ufS8+XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB3aWR0aD17XCIxMDAlXCJ9IG1pbldpZHRoPVwiMTEwcHhcIiBwYWRkaW5nQm90dG9tPXszfSBwYWRkaW5nVG9wPXsxfT5cclxuICAgICAgPEJveCBwYWRkaW5nPXsxfSAgcGFkZGluZ1RvcD17MH0gYmdjb2xvcj17XCIjQjNFQUZDXCJ9IHdpZHRoPVwiMTEwcHhcIiAvPlxyXG4gICAgICA8Qm94IHdpZHRoPVwiMTEwcHhcIiBiZ2NvbG9yPXtcIiNCM0VBRkNcIn0gdGV4dEFsaWduPSdjZW50ZXInIHBhZGRpbmdCb3R0b209ezF9IGJvcmRlckJvdHRvbT17JzFweCBzb2xpZCAjZmZmJ30+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3tjb2xvcjonIzAwN0VGMyd9fSBjbGFzc05hbWU9J2JvbGQnIGNvbXBvbmVudD17J3NwYW4nfT7ri6XthLA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PXsnc3Bhbid9IGNsYXNzTmFtZT0nYm9sZCc+7YGs66awPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveD57YnRuTWFwfTwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuXHJcbmV4cG9ydCB0eXBlIEJ0bkRhdGEgPSB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIHN1YlRpdGxlPzogc3RyaW5nXHJcbiAgbGluazogc3RyaW5nXHJcbiAgaWNvbjogYW55XHJcbn1cclxuLy8gY29uc3QgSG90ZWxDYXJkOkZDPEhvdGVsQ2FyZFByb3BzPj0oe3RpdGxlLGNvbnRlbnQsZGF5LHllYXJ9KT0+e1xyXG5jb25zdCBCdG5DYXJkOiBGQzxCdG5EYXRhPiA9ICh7IHRpdGxlLCBzdWJUaXRsZSwgbGluaywgaWNvbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tGbiA9IChlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChlID09PSBcIi9xbmFcIikge1xyXG4gICAgICByb3V0ZXIucHVzaChlKTtcclxuICAgIH0gZWxzZSBpZiAoZSA9PT0gXCJ0ZWxcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjAxMC02NDgzLTEyODZcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cub3BlbihlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHBhZGRpbmc9ezF9XHJcbiAgICAgIGJvcmRlckJvdHRvbT17XCIxcHggc29saWQgI2ZmZlwifVxyXG4gICAgICBiZ2NvbG9yPXtcIiNCM0VBRkNcIn1cclxuICAgICAgd2lkdGg9XCIxMTBweFwiXHJcbiAgICAgIHRleHRBbGlnbj17XCJjZW50ZXJcIn1cclxuICAgID5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja0ZuKGxpbmspfT5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz17aWNvbn0gd2lkdGg9e1wiMzBweFwifSAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdib2xkJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxMXB4XCIsIHBhZGRpbmdUb3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtzdWJUaXRsZSA/IChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPSdib2xkJyBzdHlsZT17eyBmb250U2l6ZTogXCIxMXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge3N1YlRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICApIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG4iLCJcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZSxCdXR0b25Qcm9wcywgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50cydcclxuaW1wb3J0IHtweFRvUmVtfSBmcm9tICdzcmMvdXRpbCdcclxuXHJcblxyXG5pbXBvcnQge0xheW91dEdyYWRlLCBTSVpFX0lORk99IGZyb20gJ3JlY29pbFN0YXRlcy9sYXlvdXQnO1xyXG5jb25zdCB7TEcsIE1ELCBTTSwgWFN9ID0gU0laRV9JTkZPO1xyXG5cclxuY29uc3QgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyh7fSk7XHJcblxyXG5leHBvcnQgdHlwZSBDb21wb25lbnRTaXplID0gJ25vbmUnfCdzbScgfCAnbWQnIHwgJ2xnJztcclxuZXhwb3J0IHR5cGUgQ29tcG9uZW50Q29sb3IgPSAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnc3VjY2Vzcyc7XHJcbmV4cG9ydCB0eXBlIExheW91dFR5cGUgPSB7XHJcbiAgc2l6ZT86IENvbXBvbmVudFNpemVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZkJ1dHRvblByb3BzOkJ1dHRvblByb3BzID0ge1xyXG4gIHZhcmlhbnQ6ICdjb250YWluZWQnLFxyXG4gIHNpemU6ICdzbWFsbCdcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICB2YWx1ZXM6IHtcclxuICAgICAgeHM6IFhTLm1heCxcclxuICAgICAgc206IFNNLm1heCxcclxuICAgICAgbWQ6IE1ELm1heCxcclxuICAgICAgbGc6IExHLm1heCxcclxuICAgICAgeGw6IDE5MjBcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGhlbWUoe1xyXG4gIGJyZWFrcG9pbnRzOntcclxuICAgIC4uLmRlZmF1bHRUaGVtZS5icmVha3BvaW50c1xyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeTp7XHJcbiAgICBcclxuICAgIGZvbnRGYW1pbHk6XCJyb2JvdG9cIlxyXG4gIH0sXHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeTp7XHJcbiAgICAgIG1haW46ICcjMDBCN0YzJyxcclxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZidcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjonI0IzRUFGQycsXHJcbiAgICAgIGNvbnRyYXN0VGV4dDogXCIjZmZmXCJcclxuICAgIH0sXHJcbiAgICB0ZXh0OntcclxuICAgICAgcHJpbWFyeTpcIiMwMDBcIixcclxuICAgICAgc2Vjb25kYXJ5OlwiIzY2NlwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBvdmVycmlkZXM6e1xyXG4gICAgTXVpRm9ybUdyb3VwOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICAnJltyb2xlPVwicmFkaW9ncm91cFwiXSc6IHsgZGlzcGxheTogJ2Jsb2NrJyB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlCdXR0b246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIG1pbldpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgXCImOmZvY3VzXCI6e1xyXG4gICAgICAgICAgb3V0bGluZTpcInNvbGlkIGJsYWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpQnV0dG9uQmFzZTp7XHJcbiAgICAgIHJvb3Q6e1xyXG4gICAgICAgIFwiJjpmb2N1c1wiOntcclxuICAgICAgICAgIG91dGxpbmU6XCJzb2xpZCBibGFja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgTXVpU2VsZWN0OntcclxuICAgICAgcm9vdDp7XHJcbiAgICAgICAgXCImOmZvY3VzXCI6e1xyXG4gICAgICAgICAgb3V0bGluZTpcInNvbGlkIGJsYWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICB9LFxyXG4gICAgIE11aUNoZWNrYm94OntcclxuICAgICAgcm9vdDp7XHJcbiAgICAgICAgXCImOmZvY3VzXCI6e1xyXG4gICAgICAgICAgb3V0bGluZTpcInNvbGlkIGJsYWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICB9LFxyXG4gICAgTXVpR3JpZDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgJyYuc3BhY2VyJzoge1xyXG4gICAgICAgICAgZmxleEdyb3c6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBNdWlUeXBvZ3JhcGh5OntcclxuICAgICAgcm9vdDp7XHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTonbm9uZScsXHJcbiAgICAgICAgICAnJi5ib2xkJzoge1xyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA2MDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnJi5yZWd1bGFyJzoge1xyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA0MDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnJi5saWdodCc6IHtcclxuICAgICAgICAgICAgZm9udFdlaWdodDogMzAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYudGhpbic6IHtcclxuICAgICAgICAgICAgZm9udFdlaWdodDogMjAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYucm9ib3RvJzoge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJyYudGltZXMnOiB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6J3JvYm90bycsXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6JzNweCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhcHRpb246e1xyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTQpXHJcbiAgICAgICAgLFticmVha3BvaW50cy5kb3duKFNNLm1heCldOntcclxuICAgICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgIFxyXG4gICAgICBib2R5Mjp7XHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSgxNilcclxuICAgICAgICAsW2JyZWFrcG9pbnRzLmRvd24oU00ubWF4KV06e1xyXG4gICAgICAgICAgZm9udFNpemU6cHhUb1JlbSgxMClcclxuICAgICAgICB9XHJcbiAgICAgICAgLGZvbnRGYW1pbHk6J3JvYm90bydcclxuICAgICAgICAsZm9udFdlaWdodDo1MDBcclxuICAgICAgfSxcclxuICAgICAgICAgXHJcbiAgICAgIGJvZHkxOntcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDIwKVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDEzKVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMCBcclxuICAgICAgfSxcclxuICAgICAgc3VidGl0bGUyOntcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDMwKVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDE1KVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgICBzdWJ0aXRsZTE6e1xyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMzUpXHJcbiAgICAgICAgLFticmVha3BvaW50cy5kb3duKFNNLm1heCldOntcclxuICAgICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMjApXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxmb250RmFtaWx5Oidyb2JvdG8nXHJcbiAgICAgICAgLGZvbnRXZWlnaHQ6NTAwXHJcbiAgICAgIH0sXHJcbiAgICAgXHJcbiAgICAgIGg2OntcclxuICAgICAgICBmb250U2l6ZTpweFRvUmVtKDcwKVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDMwKVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgaDU6ey8v66mU7J24IOyEueyFmDEg7YWN7Iqk7Yq4IOyCrOydtOymiFxyXG4gICAgICAgIGZvbnRTaXplOnB4VG9SZW0oMTQwKVxyXG4gICAgICAgICxbYnJlYWtwb2ludHMuZG93bihTTS5tYXgpXTp7XHJcbiAgICAgICAgICBmb250U2l6ZTpweFRvUmVtKDQ2KVxyXG4gICAgICAgIH1cclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgICBoNDp7Ly9wYyDrqZTsnbjsl5DshJzrp4wg7IKs7JqpXHJcbiAgICAgICAgZm9udFNpemU6cHhUb1JlbSg2MClcclxuICAgICAgICAsZm9udEZhbWlseToncm9ib3RvJ1xyXG4gICAgICAgICxmb250V2VpZ2h0OjUwMFxyXG4gICAgICB9LFxyXG4gICAgXHJcbiAgICB9LFxyXG4gIH1cclxufSlcclxuXHJcbnR5cGUgVXNlTGF5b3V0R3JhZGUgPSB7XHJcbiAgaXNEb3duU206IGJvb2xlYW4sXHJcbiAgaXNEb3duWHM6Ym9vbGVhbixcclxuICBpc01kOiBib29sZWFuLFxyXG4gIGlzVXBNZEFuZElzRG93bkxnOiBib29sZWFuLFxyXG4gIGlzVXBMZzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCB1c2VMYXlvdXRHcmFkZSA9ICh0aGVtZT86IFRoZW1lICk6IFVzZUxheW91dEdyYWRlID0+IHtcclxuICBjb25zdCB0aGVtZV8gPSB0aGVtZSB8fCB1c2VUaGVtZSgpO1xyXG4gIGlmKCF0aGVtZV8pIHJldHVybiB7aXNEb3duU206IGZhbHNlLCBpc01kOiBmYWxzZSwgaXNVcE1kQW5kSXNEb3duTGc6IGZhbHNlLGlzRG93blhzOmZhbHNlLCBpc1VwTGc6IGZhbHNlfTtcclxuXHJcblxyXG4gIGNvbnN0IGlzVXBTbSA9IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLnVwKFNJWkVfSU5GTy5TTS5tYXgpKTtcclxuICBjb25zdCBpc0Rvd25NZCA9IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLmRvd24oU0laRV9JTkZPLk1ELm1heC0wLjAxKSk7XHJcbiAgY29uc3QgaXNNZCA9IGlzVXBTbSAmJiBpc0Rvd25NZDtcclxuXHJcbiAgY29uc3QgaXNVcE1kID0gdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMudXAoU0laRV9JTkZPLk1ELm1heCkpO1xyXG4gIGNvbnN0IGlzRG93bkxnID0gdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMuZG93bihTSVpFX0lORk8uTEcubWF4KSk7XHJcbiAgY29uc3QgaXNVcE1kQW5kSXNEb3duTGcgPSBpc1VwTWQgJiYgaXNEb3duTGc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpc0Rvd25TbTogdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMuZG93bihTSVpFX0lORk8uU00ubWF4LTAuMDEpKSxcclxuICAgIGlzTWQsICBcclxuICAgIGlzVXBNZEFuZElzRG93bkxnLFxyXG4gICAgaXNEb3duWHM6IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLmRvd24oTGF5b3V0R3JhZGUuWFMpKSxcclxuICAgICAgLy8gdXNlTWVkaWFRdWVyeSh0aGVtZV8uYnJlYWtwb2ludHMudXAoU0laRV9JTkZPLlNNLm1heCkpIFxyXG4gICAgICAvLyAmJiB1c2VNZWRpYVF1ZXJ5KHRoZW1lXy5icmVha3BvaW50cy51cChTSVpFX0lORk8uTUQubWF4KSksXHJcbiAgICBpc1VwTGc6IHVzZU1lZGlhUXVlcnkodGhlbWVfLmJyZWFrcG9pbnRzLnVwKExheW91dEdyYWRlLkxHKSlcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9