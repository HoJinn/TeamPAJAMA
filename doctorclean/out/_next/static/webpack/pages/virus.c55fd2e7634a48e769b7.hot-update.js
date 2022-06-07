webpackHotUpdate_N_E("pages/virus",{

/***/ "./components/layout/footer.tsx":
/*!**************************************!*\
  !*** ./components/layout/footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/icon/phone.png */ "./assets/icon/phone.png");
/* harmony import */ var assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/icon/talk.png */ "./assets/icon/talk.png");
/* harmony import */ var assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/icon/blog.png */ "./assets/icon/blog.png");
/* harmony import */ var assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/icon/insta.png */ "./assets/icon/insta.png");
/* harmony import */ var assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recoilStates_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoilStates/layout */ "./recoilStates/layout.ts");


var _this = undefined,
    _jsxFileName = "C:\\pro\\myReact\\TeamPAJAMA\\doctorclean\\components\\layout\\footer.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


// import {useTheme } from "@material-ui/core";





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    footer: {
      position: 'relative',
      width: '100%',
      backgroundColor: "#000",
      // color: theme.palette.text.secondary,
      color: "#fff"
    },
    text: {
      color: '#C4C4C4',
      paddingRight: '15px'
    },
    container: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }, theme.breakpoints.down(recoilStates_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutGrade"].SM), {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }),
    wrapper: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flexDirection: "row",
      justifyContent: 'space-between'
    }, theme.breakpoints.down(recoilStates_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutGrade"].SM), {
      flexDirection: "column",
      justifyContent: 'flex-start'
    }),
    infoBox: {
      color: theme.palette.grey[500]
    },
    telBox: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      textAlign: "right",
      marginTop: theme.spacing(0)
    }, theme.breakpoints.down(recoilStates_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutGrade"].SM), {
      textAlign: "left",
      marginTop: theme.spacing(4.5)
    }),
    addressTxt: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontWeight: 300,
      marginBottom: theme.spacing(4)
    }, theme.breakpoints.down(recoilStates_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutGrade"].SM), {
      marginBottom: theme.spacing(2)
    }),
    copyright: {
      color: "white",
      fontWeight: 200
    },
    contentsContainer: {
      paddingTop: theme.spacing(8)
    },
    pcShow: {
      display: "block" // [theme.breakpoints.down(LayoutGrade.SM)]: {
      //   display: "none",
      // }

    },
    moShow: {
      display: "none" // [theme.breakpoints.down(LayoutGrade.SM)]: {
      //   display: "block",
      // }

    },
    a: {
      color: "inherit",
      position: "relative",
      textDecoration: "none",
      display: 'block',
      "&:focus": {
        outline: '3px solid black'
      }
    },
    footerBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});
var contentData = [{
  title: "고객센터연결",
  img: assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  color: "#8CD7F0",
  link: '010-6483-1286'
}, {
  title: "카카오톡상담",
  img: assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  color: "#FFE921",
  link: 'http://pf.kakao.com/_Qpptb'
}, {
  title: "네이버블로그",
  img: assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  color: "#76FB5F",
  link: 'https://blog.naver.com/doctorclean0'
}, {
  title: "인스타그램",
  img: assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  color: "#FF54A2",
  link: 'https://www.instagram.com/doctorclean0/'
}];

var Footer = function Footer() {
  _s();

  var classes = useStyles();
  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var handleClickFn = function handleClickFn(e) {
    router.push(e);
  };

  var contentMap = contentData.map(function (obj, i) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 6,
      key: i,
      className: classes.footerBtn,
      style: {
        backgroundColor: "".concat(obj.color)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 7
      }
    }, obj.link === "010-6483-1286" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      href: "tel:01064831286",
      style: {
        width: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: obj.img,
      height: "20px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: "bold",
      style: {
        color: "#000",
        paddingLeft: "3px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }, obj.title)) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: function onClick() {
        return handleClickFn(obj.link);
      },
      style: {
        width: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    }, __jsx("img", {
      src: obj.img,
      height: "20px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: "bold",
      style: {
        color: "#000",
        paddingLeft: "3px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }
    }, obj.title)));
  });
  return __jsx("div", {
    id: "footer",
    className: classes.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, contentMap), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    maxWidth: "1280px",
    className: classes.container,
    paddingX: 3,
    margin: "0 auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    color: "white",
    className: classes.pcShow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: function onClick(_) {
      return router.push("/about");
    },
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "\uD68C\uC0AC\uC18C\uAC1C")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: function onClick(_) {
      return router.push("/qna");
    },
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, "\uACAC\uC801\uBB38\uC758")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: function onClick(_) {
      return router.push("/brand");
    },
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, "\uC2DC\uACF5\uB0B4\uC5ED"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: classes.contentsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: classes.infoBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: "span",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, "(\uC8FC)\uB2E5\uD130\uD06C\uB9B0\xA0\xA0\xA0|"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: "span",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, "\uC704\uCE58 : \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uC11C\uAD6C \uACF5\uD56D\uB300\uB85C 23\uB85C (\uC77C\uD654\uBE4C\uB529)\xA0\xA0\xA0|"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: "span",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  }, "\uB300\uD45C\uC790 : \uAC15\uD0DC\uBCF5\xA0\xA0\xA0 |"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: "span",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, "\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 527-81-02540")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    paddingTop: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: "span",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }, "E-mail : doctorclean0@naver.com"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: "span",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }, "H.P : 010-6483-1286"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: "span",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 15
    }
  }, "\uACC4\uC88C\uBC88\uD638 : \uAE30\uC5C5\uC740\uD589 052-116169-01-013"))))));
};

_s(Footer, "y+nxznVgQ96pr4dCg1EC6WdujUg=", false, function () {
  return [useStyles, next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb290ZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0IiwicGFkZGluZ1JpZ2h0IiwiY29udGFpbmVyIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJwYWRkaW5nQm90dG9tIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiTGF5b3V0R3JhZGUiLCJTTSIsIndyYXBwZXIiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJpbmZvQm94IiwicGFsZXR0ZSIsImdyZXkiLCJ0ZWxCb3giLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJhZGRyZXNzVHh0IiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsImNvcHlyaWdodCIsImNvbnRlbnRzQ29udGFpbmVyIiwicGNTaG93IiwiZGlzcGxheSIsIm1vU2hvdyIsImEiLCJ0ZXh0RGVjb3JhdGlvbiIsIm91dGxpbmUiLCJmb290ZXJCdG4iLCJhbGlnbkl0ZW1zIiwiY29udGVudERhdGEiLCJ0aXRsZSIsImltZyIsIlBob25lIiwibGluayIsIlRhbGsiLCJCbG9nIiwiSW5zdGEiLCJGb290ZXIiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2tGbiIsImUiLCJwdXNoIiwiY29udGVudE1hcCIsIm1hcCIsIm9iaiIsImkiLCJwYWRkaW5nTGVmdCIsIl8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxVQUFNLEVBQUU7QUFDTkMsY0FBUSxFQUFFLFVBREo7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkRBbEJGLEVBMEJFLE1BQUMsNERBQUQ7QUFDRSxhQUFTLEVBQUV5QyxPQUFPLENBQUN6QyxJQURyQjtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxhQUFTLEVBQUUsTUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtEQTFCRixDQURGLEVBb0NFLE1BQUMscURBQUQ7QUFBSyxjQUFVLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxhQUFTLEVBQUV5QyxPQUFPLENBQUN6QyxJQURyQjtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxhQUFTLEVBQUUsTUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURGLEVBU0UsTUFBQyw0REFBRDtBQUNFLGFBQVMsRUFBRXlDLE9BQU8sQ0FBQ3pDLElBRHJCO0FBRUUsV0FBTyxFQUFDLE9BRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLGFBQVMsRUFBRSxNQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEYsRUFpQkUsTUFBQyw0REFBRDtBQUNFLGFBQVMsRUFBRXlDLE9BQU8sQ0FBQ3pDLElBRHJCO0FBRUUsV0FBTyxFQUFDLE9BRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLGFBQVMsRUFBRSxNQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkVBakJGLENBcENGLENBREYsQ0E3QkYsQ0FGRixDQURGO0FBb0dELENBdklEOztHQUFNd0MsTTtVQUNZaEQsUyxFQUNEbUQsaUU7OztLQUZYSCxNO0FBeUlTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXJ1cy5jNTVmZDJlNzYzNGE0OGU3NjliNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcywgQm94LCBUeXBvZ3JhcGh5LCBCdXR0b24sIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7dXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFBob25lIGZyb20gJ2Fzc2V0cy9pY29uL3Bob25lLnBuZyc7XHJcbmltcG9ydCBUYWxrIGZyb20gJ2Fzc2V0cy9pY29uL3RhbGsucG5nJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnYXNzZXRzL2ljb24vYmxvZy5wbmcnO1xyXG5pbXBvcnQgSW5zdGEgZnJvbSAnYXNzZXRzL2ljb24vaW5zdGEucG5nJztcclxuaW1wb3J0IHsgTGF5b3V0R3JhZGUgfSBmcm9tICdyZWNvaWxTdGF0ZXMvbGF5b3V0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBmb290ZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAvLyBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICB9LFxyXG4gIHRleHQ6e1xyXG4gICAgY29sb3I6JyNDNEM0QzQnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OicxNXB4J1xyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKExheW91dEdyYWRlLlNNKV06IHtcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH1cclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oTGF5b3V0R3JhZGUuU00pXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbmZvQm94OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF1cclxuICB9LFxyXG4gIHRlbEJveDp7XHJcbiAgICB0ZXh0QWxpZ246XCJyaWdodFwiLFxyXG4gICAgbWFyZ2luVG9wOnRoZW1lLnNwYWNpbmcoMCksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihMYXlvdXRHcmFkZS5TTSldOiB7XHJcbiAgICAgIHRleHRBbGlnbjpcImxlZnRcIixcclxuICAgICAgbWFyZ2luVG9wOnRoZW1lLnNwYWNpbmcoNC41KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWRkcmVzc1R4dDoge1xyXG4gICAgZm9udFdlaWdodDogMzAwLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oTGF5b3V0R3JhZGUuU00pXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb3B5cmlnaHQ6IHtcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBmb250V2VpZ2h0OiAyMDBcclxuICB9LFxyXG4gIGNvbnRlbnRzQ29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nVG9wOnRoZW1lLnNwYWNpbmcoOClcclxuICB9LFxyXG4gIHBjU2hvdzoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgLy8gW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oTGF5b3V0R3JhZGUuU00pXToge1xyXG4gICAgLy8gICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIC8vIH1cclxuICB9LFxyXG4gIG1vU2hvdzoge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihMYXlvdXRHcmFkZS5TTSldOiB7XHJcbiAgICAvLyAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIC8vIH1cclxuICB9LFxyXG4gIGE6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICBkaXNwbGF5OidibG9jaycsXHJcbiAgICBcIiY6Zm9jdXNcIjp7XHJcbiAgICAgIG91dGxpbmU6JzNweCBzb2xpZCBibGFjaycsXHJcbiAgICB9XHJcbiAgfSxcclxuICBmb290ZXJCdG46e1xyXG4gICAgZGlzcGxheTonZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6J2NlbnRlcidcclxuICB9XHJcblxyXG59KSk7XHJcbmNvbnN0IGNvbnRlbnREYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIuqzoOqwneyEvO2EsOyXsOqysFwiLFxyXG4gICAgaW1nOiBQaG9uZSxcclxuICAgIGNvbG9yOiBcIiM4Q0Q3RjBcIixcclxuICAgIGxpbms6JzAxMC02NDgzLTEyODYnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLsubTsubTsmKTthqHsg4Hri7RcIixcclxuICAgIGltZzogVGFsayxcclxuICAgIGNvbG9yOiBcIiNGRkU5MjFcIixcclxuICAgIGxpbms6J2h0dHA6Ly9wZi5rYWthby5jb20vX1FwcHRiJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi64Sk7J2067KE67iU66Gc6re4XCIsXHJcbiAgICBpbWc6IEJsb2csXHJcbiAgICBjb2xvcjogXCIjNzZGQjVGXCIsXHJcbiAgICBsaW5rOidodHRwczovL2Jsb2cubmF2ZXIuY29tL2RvY3RvcmNsZWFuMCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIuyduOyKpO2DgOq3uOueqFwiLFxyXG4gICAgaW1nOiBJbnN0YSxcclxuICAgIGNvbG9yOiBcIiNGRjU0QTJcIixcclxuICAgIGxpbms6J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZG9jdG9yY2xlYW4wLydcclxuICB9LFxyXG4gIFxyXG5dO1xyXG5jb25zdCBGb290ZXI6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBoYW5kbGVDbGlja0ZuID0gKGU6IHN0cmluZykgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaChlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNvbnRlbnRNYXAgPSBjb250ZW50RGF0YS5tYXAoKG9iaiwgaSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgeHM9ezZ9XHJcbiAgICAgICAga2V5PXtpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJCdG59XHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgJHtvYmouY29sb3J9YCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge29iai5saW5rPT09XCIwMTAtNjQ4My0xMjg2XCI/PEJ1dHRvbiBocmVmPVwidGVsOjAxMDY0ODMxMjg2XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGltZyBzcmM9e29iai5pbWd9IGhlaWdodD1cIjIwcHhcIiAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9sZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDBcIiwgcGFkZGluZ0xlZnQ6IFwiM3B4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge29iai50aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0J1dHRvbj46PEJ1dHRvbiBvbkNsaWNrPXsoKT0+aGFuZGxlQ2xpY2tGbihvYmoubGluayl9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtvYmouaW1nfSBoZWlnaHQ9XCIyMHB4XCIgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvbGRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDAwXCIsIHBhZGRpbmdMZWZ0OiBcIjNweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtvYmoudGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9CdXR0b24+fVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lcj57Y29udGVudE1hcH08L0dyaWQ+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBtYXhXaWR0aD1cIjEyODBweFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cclxuICAgICAgICBwYWRkaW5nWD17M31cclxuICAgICAgICBtYXJnaW49XCIwIGF1dG9cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBjb2xvcj1cIndoaXRlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnBjU2hvd30+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHRpdGxlPVwi7Y6Y7J207KeAIOydtOuPmVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhfKSA9PiByb3V0ZXIucHVzaChcIi9hYm91dFwiKX1cclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+7ZqM7IKs7IaM6rCcPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHRpdGxlPVwi7Y6Y7J207KeAIOydtOuPmVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhfKSA9PiByb3V0ZXIucHVzaChcIi9xbmFcIil9XHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPuqyrOyggeusuOydmDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0aXRsZT1cIu2OmOydtOyngCDsnbTrj5lcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoXykgPT4gcm91dGVyLnB1c2goXCIvYnJhbmRcIil9XHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPuyLnOqzteuCtOyXrTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRzQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9Cb3h9PlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtcInNwYW5cIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAo7KO8KeuLpe2EsO2BrOumsCZuYnNwOyZuYnNwOyZuYnNwO3xcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1wic3BhblwifVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOychOy5mCA6IOyEnOyauO2KueuzhOyLnCDqsJXshJzqtawg6rO17ZWt64yA66GcIDIz66GcXHJcbiAgICAgICAgICAgICAgICAo7J287ZmU67mM65SpKSZuYnNwOyZuYnNwOyZuYnNwO3xcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1wic3BhblwifVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOuMgO2RnOyekCA6IOqwle2DnOuztSZuYnNwOyZuYnNwOyZuYnNwOyB8XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtcInNwYW5cIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDsgqzsl4XsnpDrk7HroZ3rsojtmLggNTI3LTgxLTAyNTQwXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBwYWRkaW5nVG9wPXsxfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17XCJzcGFuXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRS1tYWlsIDogZG9jdG9yY2xlYW4wQG5hdmVyLmNvbVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17XCJzcGFuXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSC5QIDogMDEwLTY0ODMtMTI4NlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17XCJzcGFuXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg6rOE7KKM67KI7Zi4IDog6riw7JeF7J2A7ZaJIDA1Mi0xMTYxNjktMDEtMDEzXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==