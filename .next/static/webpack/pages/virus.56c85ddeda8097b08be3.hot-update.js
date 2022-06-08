webpackHotUpdate_N_E("pages/virus",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvcmlnaHRCdG4udHN4Il0sIm5hbWVzIjpbImJ0bkFyciIsInRpdGxlIiwic3ViVGl0bGUiLCJsaW5rIiwiaWNvbiIsIlBob25lIiwiVGFsayIsIkJsb2ciLCJJbnN0YSIsIldyaXRlIiwiTGF5b3V0IiwiYnRuTWFwIiwibWFwIiwib2JqIiwiaSIsImNvbG9yIiwiQnRuQ2FyZCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrRm4iLCJlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJvcGVuIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJwYWRkaW5nVG9wIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUMsQ0FDWDtBQUFDQyxPQUFLLEVBQUMsUUFBUDtBQUFnQkMsVUFBUSxFQUFDLGVBQXpCO0FBQXlDQyxNQUFJLEVBQUMsS0FBOUM7QUFBb0RDLE1BQUksRUFBQ0MsNERBQUtBO0FBQTlELENBRFcsRUFFWDtBQUFDSixPQUFLLEVBQUMsUUFBUDtBQUFnQkUsTUFBSSxFQUFDLDRCQUFyQjtBQUFrREMsTUFBSSxFQUFDRSwyREFBSUE7QUFBM0QsQ0FGVyxFQUdYO0FBQUNMLE9BQUssRUFBQyxTQUFQO0FBQWlCRSxNQUFJLEVBQUMscUNBQXRCO0FBQTREQyxNQUFJLEVBQUNHLDJEQUFJQTtBQUFyRSxDQUhXLEVBSVg7QUFBQ04sT0FBSyxFQUFDLE9BQVA7QUFBZUUsTUFBSSxFQUFDLHlDQUFwQjtBQUE4REMsTUFBSSxFQUFDSSw0REFBS0E7QUFBeEUsQ0FKVyxFQUtYO0FBQUNQLE9BQUssRUFBQyxNQUFQO0FBQWNFLE1BQUksRUFBQyxNQUFu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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUQsYUFBYSxDQUFDaEIsSUFBRCxDQUFuQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0x1QixhQUFPLEVBQUUsTUFESjtBQUVMQyxtQkFBYSxFQUFFLFFBRlY7QUFHTEMsZUFBUyxFQUFFLFFBSE47QUFJTEMsZ0JBQVUsRUFBRTtBQUpQLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUssT0FBRyxFQUFFekIsSUFBVjtBQUFnQixTQUFLLEVBQUUsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBQyxPQURWO0FBRUUsYUFBUyxFQUFDLE1BRlo7QUFHRSxTQUFLLEVBQUU7QUFBRTBCLGNBQVEsRUFBRSxNQUFaO0FBQW9CQyxnQkFBVSxFQUFFO0FBQWhDLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHOUIsS0FMSCxDQVRGLEVBZ0JHQyxRQUFRLEdBQ1AsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixhQUFTLEVBQUMsTUFBdEM7QUFBNkMsU0FBSyxFQUFFO0FBQUU0QixjQUFRLEVBQUU7QUFBWixLQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c1QixRQURILENBRE8sR0FJTDhCLFNBcEJOLENBREYsQ0FQRixDQURGO0FBa0NELENBN0NEOztHQUFNaEIsTztVQUNXRSxxRDs7O01BRFhGLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlydXMuNTZjODVkZGVkYTgwOTdiMDhiZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi4vLi4vcHVibGljL2NvbW1vbidcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQaG9uZSBmcm9tICdhc3NldHMvaWNvbi9waG9uZS5wbmcnO1xyXG5pbXBvcnQgVGFsayBmcm9tICdhc3NldHMvaWNvbi90YWxrLnBuZyc7XHJcbmltcG9ydCBCbG9nIGZyb20gJ2Fzc2V0cy9pY29uL2Jsb2cucG5nJztcclxuaW1wb3J0IEluc3RhIGZyb20gJ2Fzc2V0cy9pY29uL2luc3RhLnBuZyc7XHJcbmltcG9ydCBXcml0ZSBmcm9tICdhc3NldHMvaWNvbi93cml0ZS5wbmcnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBidG5BcnI9W1xyXG4gIHt0aXRsZTon6rOg6rCd7IOB64u07KCE7ZmUJyxzdWJUaXRsZTonMDEwLjY0ODMuMTI4NicsbGluazondGVsJyxpY29uOlBob25lfSxcclxuICB7dGl0bGU6J+y5tOy5tOyYpO2GoeyDgeuLtCcsbGluazonaHR0cDovL3BmLmtha2FvLmNvbS9fUXBwdGInLGljb246VGFsa30sXHJcbiAge3RpdGxlOifrhKTsnbTrsoQg67iU66Gc6re4JyxsaW5rOidodHRwczovL2Jsb2cubmF2ZXIuY29tL2RvY3RvcmNsZWFuMCcsaWNvbjpCbG9nfSxcclxuICB7dGl0bGU6J+yduOyKpO2DgOq3uOueqCcsbGluazonaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kb2N0b3JjbGVhbjAvJyxpY29uOkluc3RhfSxcclxuICB7dGl0bGU6J+qyrOyggeusuOydmCcsbGluazonL3FuYScsaWNvbjpXcml0ZX0sXHJcbl1cclxuY29uc3QgTGF5b3V0OiBGQyA9ICgpID0+IHtcclxuICAvLyBjb25zdCB3aW5kb3dMYXlvdXQgPSB1c2VSZWNvaWxWYWx1ZSh3aW5kb3dMYXlvdXRTZWxlY3Rvcik7XHJcbiAgLy8gY29uc3Qge2lzTWQsaXNEb3duU219ID0gdXNlTGF5b3V0R3JhZGUoKTtcclxuICAvLyBjb25zdCB7IGdyYWRlIH0gPSB3aW5kb3dMYXlvdXRcclxuICBjb25zdCBidG5NYXAgPSBidG5BcnIubWFwKChvYmosaSk9PntcclxuICAgIHJldHVybiA8QnRuQ2FyZCBrZXk9e2l9IHRpdGxlPXtvYmoudGl0bGV9IHN1YlRpdGxlPXtvYmouc3ViVGl0bGV9IGxpbms9e29iai5saW5rfSBpY29uPXtvYmouaWNvbn0vPlxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggd2lkdGg9e1wiMTAwJVwifSBtaW5XaWR0aD1cIjExMHB4XCIgcGFkZGluZ0JvdHRvbT17M30gcGFkZGluZ1RvcD17MX0+XHJcbiAgICAgIDxCb3ggcGFkZGluZz17MX0gIHBhZGRpbmdUb3A9ezB9IGJnY29sb3I9e1wiI0IzRUFGQ1wifSB3aWR0aD1cIjExMHB4XCIgLz5cclxuICAgICAgPEJveCB3aWR0aD1cIjExMHB4XCIgYmdjb2xvcj17XCIjQjNFQUZDXCJ9IHRleHRBbGlnbj0nY2VudGVyJyBwYWRkaW5nQm90dG9tPXsxfSBib3JkZXJCb3R0b209eycxcHggc29saWQgI2ZmZid9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7Y29sb3I6JyMwMDdFRjMnfX0gY2xhc3NOYW1lPSdib2xkJyBjb21wb25lbnQ9eydzcGFuJ30+64ul7YSwPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD17J3NwYW4nfSBjbGFzc05hbWU9J2JvbGQnPu2BrOumsDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3g+e2J0bk1hcH08L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcblxyXG5leHBvcnQgdHlwZSBCdG5EYXRhID0ge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBzdWJUaXRsZT86IHN0cmluZ1xyXG4gIGxpbms6IHN0cmluZ1xyXG4gIGljb246IGFueVxyXG59XHJcbi8vIGNvbnN0IEhvdGVsQ2FyZDpGQzxIb3RlbENhcmRQcm9wcz49KHt0aXRsZSxjb250ZW50LGRheSx5ZWFyfSk9PntcclxuY29uc3QgQnRuQ2FyZDogRkM8QnRuRGF0YT4gPSAoeyB0aXRsZSwgc3ViVGl0bGUsIGxpbmssIGljb24gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrRm4gPSAoZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoZSA9PT0gXCIvcW5hXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goZSk7XHJcbiAgICB9IGVsc2UgaWYgKGUgPT09IFwidGVsXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCIwMTAtNjQ4My0xMjg2XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93Lm9wZW4oZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBwYWRkaW5nPXsxfVxyXG4gICAgICBib3JkZXJCb3R0b209e1wiMXB4IHNvbGlkICNmZmZcIn1cclxuICAgICAgYmdjb2xvcj17XCIjQjNFQUZDXCJ9XHJcbiAgICAgIHdpZHRoPVwiMTEwcHhcIlxyXG4gICAgICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9XHJcbiAgICA+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tGbihsaW5rKX0+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ljb259IHdpZHRoPXtcIjMwcHhcIn0gLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9sZCdcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTFweFwiLCBwYWRkaW5nVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7c3ViVGl0bGUgPyAoXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNsYXNzTmFtZT0nYm9sZCcgc3R5bGU9e3sgZm9udFNpemU6IFwiMTFweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtzdWJUaXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgKSA6IHVuZGVmaW5lZH1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==