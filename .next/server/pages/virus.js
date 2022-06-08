module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+38v":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA3CAYAAAC/+UKPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgB7Zo5bxRBEIUfEpdIbO7DBq+NESmCiBRCIhKERMYvQKRkCEteARH8AP4CIoGAgID7vjGnAxBIxAQICbuexq0uz8654+TtzpOetN6ZtvSpu6tqqxvQ17j5uvmfeSHl5+b9GDDtNL9EL6z3DwwY+GHzHxRDhxlfgwHSSfN/lIMfhbB2m7vm4+47gpfN+FmIatI8jwTil3mDe3YExeDnIKhN5s+IEBcy3ikCPwMxEfgZIsClgnfzwA9CSHWAg05hOfgNCGkbIjAjdLfG2NPm3+Z3S/9HQtPmT1gOvLrCuHXuM/P4LoiIpeUHROBZlAPz+Yz5p/kYxETg16gP3EUsUs5DSGngKkuaz2cRgZnWOhDRHvMbxIhbdQ974BfmfRDRhPkrIvDliuMuujGM8pshoo0YQuAnaIFL5YG/IYkFEtqKCFy10gpROgCzcOlARHvNH9EfcIjSTGvjENEYeoHr5mE5YObRFrhAaWCpPUxgdiPrVlr88eCBpyEippMvaJaWniJpJEiIe2+ogEfNj9ACl0q20loJYP74mICIpsxziGlppsKYdGnJw7gxiIgz43ta/eRhKWCfh1vgHKWB5yAEzH5yXWAqDTwFEfG4NOzhfpt4j81bICIuRX962E9aIvAoRDRifoghA36AZsCsxaWA76M5sExp2UGyJJs08V5BqOPBmeH5bpM8zI6JVB5Ot2lb4JTSwG8hBLweMWjVOR/2wCxcJiEk3s4JAegq6ldazOMylVYQl3KA5hIvy6s+LTGPj0BQ7E35+1ecuTzwgQDeYf6L3otnWeAe+D1EgakT6AXOAvfAbMTLFB5ZuoZ86BCVr7i/pfJwltYiab0uVDT3vszFtDwdQLXL4vQ9CAP7HHzIvCrnPV4u5dK+bb5lvosk4EnKQ293nzmb8+Y75ptIZvb70vfyWgQFnJtukJK2cAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "2A1q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // import TourchRipple from '@material-ui/core/ButtonBase/TouchRipple';


const useAspectRatioBoxStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_theme => ({
  box: {
    overflow: 'hidden'
  }
}));

const AspectRatioBox = _ref => {
  let {
    children,
    className,
    width,
    aspectRatio
  } = _ref,
      boxProps = _objectWithoutProperties(_ref, ["children", "className", "width", "aspectRatio"]);

  const classes = useAspectRatioBoxStyles();
  const boxClass = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.box, className);
  const {
    0: divStyle,
    1: setDivStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // if(!boxRef.current) return;
    // const {offsetWidth} = boxRef.current
    setDivStyle({
      display: 'block',
      paddingTop: `${aspectRatio * 100}%`
    });
  }, [aspectRatio, width]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({}, boxProps, {
    className: boxClass,
    width: width,
    position: "relative"
  }), __jsx("div", {
    style: divStyle
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (AspectRatioBox);

/***/ }),

/***/ "2g7L":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/virus_img1-ecae63ddc4ec0a500d78de1e27c839cb.png";

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__("8xkj"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "89On":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Chart-9d3d849ce0c6114c6a8c6b31f5ddfecf.png";

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PAHs");


/***/ }),

/***/ "9Ht6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var reactDom = _interopDefault(__webpack_require__("faye"));

var react = _interopDefault(__webpack_require__("cDcd"));
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */


const gks = new Map();

function Recoil_gkx(gk) {
  var _gks$get;

  return (_gks$get = gks.get(gk)) !== null && _gks$get !== void 0 ? _gks$get : false;
}

Recoil_gkx.setPass = gk => {
  gks.set(gk, true);
};

Recoil_gkx.setFail = gk => {
  gks.set(gk, false);
};

var Recoil_gkx_1 = Recoil_gkx; // @oss-only

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a new Map object with the same keys as the original, but with the
 * values replaced with the output of the given callback function.
 */

function mapMap(map, callback) {
  const result = new Map();
  map.forEach((value, key) => {
    result.set(key, callback(value, key));
  });
  return result;
}

var Recoil_mapMap = mapMap;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function nullthrows(x, message) {
  if (x != null) {
    return x;
  }

  throw new Error(message !== null && message !== void 0 ? message : 'Got unexpected null or undefined');
}

var Recoil_nullthrows = nullthrows;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function recoverableViolation(message, projectName, {
  error
} = {}) {
  if (false) {}

  return null;
}

var recoverableViolation_1 = recoverableViolation; // @oss-only

var Recoil_recoverableViolation = recoverableViolation_1;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Interface for `scheduler/tracing` to aid in profiling Recoil and Recoil apps.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// flowlint-next-line untyped-import:off
// @fb-only: const SchedulerTracing = require('SchedulerTracing');

function trace(message, node, fn) {
  // prettier-ignore
  // @fb-only: if (__DEV__) {
  // prettier-ignore
  // @fb-only: if (
  // prettier-ignore
  // @fb-only: SchedulerTracing.unstable_trace !== undefined &&
  // prettier-ignore
  // @fb-only: window.performance !== undefined
  // prettier-ignore
  // @fb-only: ) {
  // prettier-ignore
  // @fb-only: return SchedulerTracing.unstable_trace(
  // prettier-ignore
  // @fb-only: `Recoil: ${message} for node: ${
  // prettier-ignore
  // @fb-only: typeof node === 'string' ? node : node.key
  // prettier-ignore
  // @fb-only: }`,
  // prettier-ignore
  // @fb-only: window.performance.now(),
  // prettier-ignore
  // @fb-only: fn,
  // prettier-ignore
  // @fb-only: );
  // prettier-ignore
  // @fb-only: }
  // prettier-ignore
  // @fb-only: }
  return fn();
}

function wrap(fn) {
  // prettier-ignore
  // @fb-only: if (__DEV__) {
  // prettier-ignore
  // @fb-only: if (SchedulerTracing.unstable_wrap !== undefined) {
  // prettier-ignore
  // @fb-only: return SchedulerTracing.unstable_wrap(fn);
  // prettier-ignore
  // @fb-only: }
  // prettier-ignore
  // @fb-only: }
  return fn;
}

var Recoil_Tracing = {
  trace,
  wrap
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Utilities for working with built-in Maps and Sets without mutating them.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function setByAddingToSet(set, v) {
  const next = new Set(set);
  next.add(v);
  return next;
}

function setByDeletingFromSet(set, v) {
  const next = new Set(set);
  next.delete(v);
  return next;
}

function mapBySettingInMap(map, k, v) {
  const next = new Map(map);
  next.set(k, v);
  return next;
}

function mapByUpdatingInMap(map, k, updater) {
  const next = new Map(map);
  next.set(k, updater(next.get(k)));
  return next;
}

function mapByDeletingFromMap(map, k) {
  const next = new Map(map);
  next.delete(k);
  return next;
}

function mapByDeletingMultipleFromMap(map, ks) {
  const next = new Map(map);
  ks.forEach(k => next.delete(k));
  return next;
}

var Recoil_CopyOnWrite = {
  setByAddingToSet,
  setByDeletingFromSet,
  mapBySettingInMap,
  mapByUpdatingInMap,
  mapByDeletingFromMap,
  mapByDeletingMultipleFromMap
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function sprintf(format, ...args) {
  let index = 0;
  return format.replace(/%s/g, () => String(args[index++]));
}

var sprintf_1 = sprintf;

function expectationViolation(format, ...args) {
  if (false) {}
}

var expectationViolation_1 = expectationViolation; // @oss-only

var Recoil_expectationViolation = expectationViolation_1;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// eslint-disable-next-line no-unused-vars


class AbstractRecoilValue {
  constructor(newKey) {
    _defineProperty(this, "key", void 0);

    this.key = newKey;
  }

}

class RecoilState extends AbstractRecoilValue {}

class RecoilValueReadOnly extends AbstractRecoilValue {}

function isRecoilValue(x) {
  return x instanceof RecoilState || x instanceof RecoilValueReadOnly;
}

var Recoil_RecoilValue = {
  AbstractRecoilValue,
  RecoilState,
  RecoilValueReadOnly,
  isRecoilValue
};
var Recoil_RecoilValue_1 = Recoil_RecoilValue.AbstractRecoilValue;
var Recoil_RecoilValue_2 = Recoil_RecoilValue.RecoilState;
var Recoil_RecoilValue_3 = Recoil_RecoilValue.RecoilValueReadOnly;
var Recoil_RecoilValue_4 = Recoil_RecoilValue.isRecoilValue;
var Recoil_RecoilValue$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AbstractRecoilValue: Recoil_RecoilValue_1,
  RecoilState: Recoil_RecoilValue_2,
  RecoilValueReadOnly: Recoil_RecoilValue_3,
  isRecoilValue: Recoil_RecoilValue_4
});

class DefaultValue {}

const DEFAULT_VALUE = new DefaultValue();

class RecoilValueNotReady extends Error {
  constructor(key) {
    super(`Tried to set the value of Recoil selector ${key} using an updater function, but it is an async selector in a pending or error state; this is not supported.`);
  }

} // flowlint-next-line unclear-type:off


const nodes = new Map(); // flowlint-next-line unclear-type:off

const recoilValues = new Map();
/* eslint-disable no-redeclare */

function registerNode(node) {
  if (nodes.has(node.key)) {
    const message = `Duplicate atom key "${node.key}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`; // TODO Need to figure out if there is a standard/open-source equivalent to see if hot module replacement is happening:
    // prettier-ignore
    // @fb-only: if (__DEV__) {
    // @fb-only: const isAcceptingUpdate = require('__debug').isAcceptingUpdate;
    // prettier-ignore
    // @fb-only: if (typeof isAcceptingUpdate !== 'function' || !isAcceptingUpdate()) {
    // @fb-only: expectationViolation(message, 'recoil');
    // @fb-only: }
    // prettier-ignore
    // @fb-only: } else {
    // @fb-only: recoverableViolation(message, 'recoil');
    // @fb-only: }

    console.warn(message); // @oss-only
  }

  nodes.set(node.key, node);
  const recoilValue = node.set == null ? new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key) : new Recoil_RecoilValue$1.RecoilState(node.key);
  recoilValues.set(node.key, recoilValue);
  return recoilValue;
}
/* eslint-enable no-redeclare */


class NodeMissingError extends Error {} // flowlint-next-line unclear-type:off


function getNode(key) {
  const node = nodes.get(key);

  if (node == null) {
    throw new NodeMissingError(`Missing definition for RecoilValue: "${key}""`);
  }

  return node;
} // flowlint-next-line unclear-type:off


function getNodeMaybe(key) {
  return nodes.get(key);
}

var Recoil_Node = {
  nodes,
  recoilValues,
  registerNode,
  getNode,
  getNodeMaybe,
  NodeMissingError,
  DefaultValue,
  DEFAULT_VALUE,
  RecoilValueNotReady
};
const {
  mapByDeletingFromMap: mapByDeletingFromMap$1,
  mapBySettingInMap: mapBySettingInMap$1,
  setByAddingToSet: setByAddingToSet$1
} = Recoil_CopyOnWrite;
const {
  getNode: getNode$1,
  getNodeMaybe: getNodeMaybe$1
} = Recoil_Node; // flowlint-next-line unclear-type:off

const emptySet = Object.freeze(new Set());

class ReadOnlyRecoilValueError extends Error {} // Get the current value loadable of a node and update the state.
// Update dependencies and subscriptions for selectors.
// Update saved value validation for atoms.


function getNodeLoadable(store, state, key) {
  return getNode$1(key).get(store, state);
} // Peek at the current value loadable for a node without any evaluation or state change


function peekNodeLoadable(store, state, key) {
  return getNode$1(key).peek(store, state);
} // Write value directly to state bypassing the Node interface as the node
// definitions may not have been loaded yet when processing the initial snapshot.


function setUnvalidatedAtomValue_DEPRECATED(state, key, newValue) {
  var _node$invalidate;

  const node = getNodeMaybe$1(key);
  node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
  return _objectSpread(_objectSpread({}, state), {}, {
    atomValues: mapByDeletingFromMap$1(state.atomValues, key),
    nonvalidatedAtoms: mapBySettingInMap$1(state.nonvalidatedAtoms, key, newValue),
    dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key)
  });
} // Return the discovered dependencies and values to be written by setting
// a node value. (Multiple values may be written due to selectors getting to
// set upstreams; deps may be discovered because of reads in updater functions.)


function setNodeValue(store, state, key, newValue) {
  const node = getNode$1(key);

  if (node.set == null) {
    throw new ReadOnlyRecoilValueError(`Attempt to set read-only RecoilValue: ${key}`);
  }

  return node.set(store, state, newValue);
}

function cleanUpNode(store, key) {
  const node = getNode$1(key);
  node.cleanUp(store);
} // Find all of the recursively dependent nodes


function getDownstreamNodes(store, state, keys) {
  const visitedNodes = new Set();
  const visitingNodes = Array.from(keys);
  const graph = store.getGraph(state.version);

  for (let key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
    var _graph$nodeToNodeSubs;

    visitedNodes.add(key);
    const subscribedNodes = (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(key)) !== null && _graph$nodeToNodeSubs !== void 0 ? _graph$nodeToNodeSubs : emptySet;

    for (const downstreamNode of subscribedNodes) {
      if (!visitedNodes.has(downstreamNode)) {
        visitingNodes.push(downstreamNode);
      }
    }
  }

  return visitedNodes;
}

var Recoil_FunctionalCore = {
  getNodeLoadable,
  peekNodeLoadable,
  setNodeValue,
  cleanUpNode,
  setUnvalidatedAtomValue_DEPRECATED,
  getDownstreamNodes
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a set containing all of the values from the first set that are not
 * present in any of the subsequent sets.
 *
 * Note: this is written procedurally (i.e., without filterSet) for performant
 * use in tight loops.
 */

function differenceSets(set, ...setsWithValuesToRemove) {
  const ret = new Set();

  FIRST: for (const value of set) {
    for (const otherSet of setsWithValuesToRemove) {
      if (otherSet.has(value)) {
        continue FIRST;
      }
    }

    ret.add(value);
  }

  return ret;
}

var Recoil_differenceSets = differenceSets;

function graph() {
  return {
    nodeDeps: new Map(),
    nodeToNodeSubscriptions: new Map()
  };
}

function cloneGraph(graph) {
  return {
    nodeDeps: Recoil_mapMap(graph.nodeDeps, s => new Set(s)),
    nodeToNodeSubscriptions: Recoil_mapMap(graph.nodeToNodeSubscriptions, s => new Set(s))
  };
} // Note that this overwrites the deps of existing nodes, rather than unioning
// the new deps with the old deps.


function mergeDependencyMapIntoGraph(deps, graph, // If olderGraph is given then we will not overwrite changes made to the given
// graph compared with olderGraph:
olderGraph) {
  const {
    nodeDeps,
    nodeToNodeSubscriptions
  } = graph;
  deps.forEach((upstreams, downstream) => {
    const existingUpstreams = nodeDeps.get(downstream);

    if (existingUpstreams && olderGraph && existingUpstreams !== olderGraph.nodeDeps.get(downstream)) {
      return;
    } // Update nodeDeps:


    nodeDeps.set(downstream, new Set(upstreams)); // Add new deps to nodeToNodeSubscriptions:

    const addedUpstreams = existingUpstreams == null ? upstreams : Recoil_differenceSets(upstreams, existingUpstreams);
    addedUpstreams.forEach(upstream => {
      if (!nodeToNodeSubscriptions.has(upstream)) {
        nodeToNodeSubscriptions.set(upstream, new Set());
      }

      const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
      existing.add(downstream);
    }); // Remove removed deps from nodeToNodeSubscriptions:

    if (existingUpstreams) {
      const removedUpstreams = Recoil_differenceSets(existingUpstreams, upstreams);
      removedUpstreams.forEach(upstream => {
        if (!nodeToNodeSubscriptions.has(upstream)) {
          return;
        }

        const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
        existing.delete(downstream);

        if (existing.size === 0) {
          nodeToNodeSubscriptions.delete(upstream);
        }
      });
    }
  });
}

function saveDependencyMapToStore(dependencyMap, store, version) {
  var _storeState$nextTree, _storeState$previousT, _storeState$previousT2, _storeState$previousT3;

  const storeState = store.getState();

  if (!(version === storeState.currentTree.version || version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
    Recoil_recoverableViolation('Tried to save dependencies to a discarded tree');
  } // Merge the dependencies discovered into the store's dependency map
  // for the version that was read:


  const graph = store.getGraph(version);
  mergeDependencyMapIntoGraph(dependencyMap, graph); // If this version is not the latest version, also write these dependencies
  // into later versions if they don't already have their own:

  if (version === ((_storeState$previousT2 = storeState.previousTree) === null || _storeState$previousT2 === void 0 ? void 0 : _storeState$previousT2.version)) {
    const currentGraph = store.getGraph(storeState.currentTree.version);
    mergeDependencyMapIntoGraph(dependencyMap, currentGraph, graph);
  }

  if (version === ((_storeState$previousT3 = storeState.previousTree) === null || _storeState$previousT3 === void 0 ? void 0 : _storeState$previousT3.version) || version === storeState.currentTree.version) {
    var _storeState$nextTree2;

    const nextVersion = (_storeState$nextTree2 = storeState.nextTree) === null || _storeState$nextTree2 === void 0 ? void 0 : _storeState$nextTree2.version;

    if (nextVersion !== undefined) {
      const nextGraph = store.getGraph(nextVersion);
      mergeDependencyMapIntoGraph(dependencyMap, nextGraph, graph);
    }
  }
}

function mergeDepsIntoDependencyMap(from, into) {
  from.forEach((upstreamDeps, downstreamNode) => {
    if (!into.has(downstreamNode)) {
      into.set(downstreamNode, new Set());
    }

    const deps = Recoil_nullthrows(into.get(downstreamNode));
    upstreamDeps.forEach(dep => deps.add(dep));
  });
}

function addToDependencyMap(downstream, upstream, dependencyMap) {
  if (!dependencyMap.has(downstream)) {
    dependencyMap.set(downstream, new Set());
  }

  Recoil_nullthrows(dependencyMap.get(downstream)).add(upstream);
}

var Recoil_Graph = {
  addToDependencyMap,
  cloneGraph,
  graph,
  mergeDepsIntoDependencyMap,
  saveDependencyMapToStore
};
const {
  getDownstreamNodes: getDownstreamNodes$1,
  getNodeLoadable: getNodeLoadable$1,
  setNodeValue: setNodeValue$1
} = Recoil_FunctionalCore;
const {
  saveDependencyMapToStore: saveDependencyMapToStore$1
} = Recoil_Graph;
const {
  getNodeMaybe: getNodeMaybe$2
} = Recoil_Node;
const {
  DefaultValue: DefaultValue$1,
  RecoilValueNotReady: RecoilValueNotReady$1
} = Recoil_Node;
const {
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  isRecoilValue: isRecoilValue$1
} = Recoil_RecoilValue$1;

function getRecoilValueAsLoadable(store, {
  key
}, treeState = store.getState().currentTree) {
  var _storeState$nextTree, _storeState$previousT; // Reading from an older tree can cause bugs because the dependencies that we
  // discover during the read are lost.


  const storeState = store.getState();

  if (!(treeState.version === storeState.currentTree.version || treeState.version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || treeState.version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
    Recoil_recoverableViolation('Tried to read from a discarded tree');
  }

  const [dependencyMap, loadable] = getNodeLoadable$1(store, treeState, key);

  if (!Recoil_gkx_1('recoil_async_selector_refactor')) {
    /**
     * In selector_NEW, we take care of updating state deps within the selector
     */
    saveDependencyMapToStore$1(dependencyMap, store, treeState.version);
  }

  return loadable;
}

function applyAtomValueWrites(atomValues, writes) {
  const result = Recoil_mapMap(atomValues, v => v);
  writes.forEach((v, k) => {
    if (v.state === 'hasValue' && v.contents instanceof DefaultValue$1) {
      result.delete(k);
    } else {
      result.set(k, v);
    }
  });
  return result;
}

function valueFromValueOrUpdater(store, state, {
  key
}, valueOrUpdater) {
  if (typeof valueOrUpdater === 'function') {
    // Updater form: pass in the current value. Throw if the current value
    // is unavailable (namely when updating an async selector that's
    // pending or errored):
    // NOTE: This will evaluate node, but not update state with node subscriptions!
    const current = getNodeLoadable$1(store, state, key)[1];

    if (current.state === 'loading') {
      throw new RecoilValueNotReady$1(key);
    } else if (current.state === 'hasError') {
      throw current.contents;
    } // T itself may be a function, so our refinement is not sufficient:


    return valueOrUpdater(current.contents); // flowlint-line unclear-type:off
  } else {
    return valueOrUpdater;
  }
}

function applyAction(store, state, action) {
  if (action.type === 'set') {
    const {
      recoilValue,
      valueOrUpdater
    } = action;
    const newValue = valueFromValueOrUpdater(store, state, recoilValue, valueOrUpdater);
    const [depMap, writes] = setNodeValue$1(store, state, recoilValue.key, newValue);
    saveDependencyMapToStore$1(depMap, store, state.version);

    for (const [key, loadable] of writes.entries()) {
      writeLoadableToTreeState(state, key, loadable);
    }
  } else if (action.type === 'setLoadable') {
    const {
      recoilValue: {
        key
      },
      loadable
    } = action;
    writeLoadableToTreeState(state, key, loadable);
  } else if (action.type === 'markModified') {
    const {
      recoilValue: {
        key
      }
    } = action;
    state.dirtyAtoms.add(key);
  } else if (action.type === 'setUnvalidated') {
    var _node$invalidate; // Write value directly to state bypassing the Node interface as the node
    // definitions may not have been loaded yet when processing the initial snapshot.


    const {
      recoilValue: {
        key
      },
      unvalidatedValue
    } = action;
    const node = getNodeMaybe$2(key);
    node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
    state.atomValues.delete(key);
    state.nonvalidatedAtoms.set(key, unvalidatedValue);
    state.dirtyAtoms.add(key);
  } else {
    Recoil_recoverableViolation(`Unknown action ${action.type}`);
  }
}

function writeLoadableToTreeState(state, key, loadable) {
  if (loadable.state === 'hasValue' && loadable.contents instanceof DefaultValue$1) {
    state.atomValues.delete(key);
  } else {
    state.atomValues.set(key, loadable);
  }

  state.dirtyAtoms.add(key);
  state.nonvalidatedAtoms.delete(key);
}

function applyActionsToStore(store, actions) {
  store.replaceState(state => {
    const newState = copyTreeState(state);

    for (const action of actions) {
      applyAction(store, newState, action);
    }

    invalidateDownstreams(store, newState);
    return newState;
  });
}

function queueOrPerformStateUpdate(store, action, key, message) {
  if (batchStack.length) {
    const actionsByStore = batchStack[batchStack.length - 1];
    let actions = actionsByStore.get(store);

    if (!actions) {
      actionsByStore.set(store, actions = []);
    }

    actions.push(action);
  } else {
    Recoil_Tracing.trace(message, key, () => applyActionsToStore(store, [action]));
  }
}

const batchStack = [];

function batchStart() {
  const actionsByStore = new Map();
  batchStack.push(actionsByStore);
  return () => {
    for (const [store, actions] of actionsByStore) {
      Recoil_Tracing.trace('Recoil batched updates', '-', () => applyActionsToStore(store, actions));
    }

    const popped = batchStack.pop();

    if (popped !== actionsByStore) {
      Recoil_recoverableViolation('Incorrect order of batch popping');
    }
  };
}

function copyTreeState(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    atomValues: new Map(state.atomValues),
    nonvalidatedAtoms: new Map(state.nonvalidatedAtoms),
    dirtyAtoms: new Set(state.dirtyAtoms)
  });
}

function invalidateDownstreams(store, state) {
  // Inform any nodes that were changed or downstream of changes so that they
  // can clear out any caches as needed due to the update:
  const downstreams = getDownstreamNodes$1(store, state, state.dirtyAtoms);

  for (const key of downstreams) {
    var _getNodeMaybe, _getNodeMaybe$invalid;

    (_getNodeMaybe = getNodeMaybe$2(key)) === null || _getNodeMaybe === void 0 ? void 0 : (_getNodeMaybe$invalid = _getNodeMaybe.invalidate) === null || _getNodeMaybe$invalid === void 0 ? void 0 : _getNodeMaybe$invalid.call(_getNodeMaybe, state);
  }
}

function setRecoilValue(store, recoilValue, valueOrUpdater) {
  queueOrPerformStateUpdate(store, {
    type: 'set',
    recoilValue,
    valueOrUpdater
  }, recoilValue.key, 'set Recoil value');
}

function setRecoilValueLoadable(store, recoilValue, loadable) {
  if (loadable instanceof DefaultValue$1) {
    return setRecoilValue(store, recoilValue, loadable);
  }

  queueOrPerformStateUpdate(store, {
    type: 'setLoadable',
    recoilValue,
    loadable
  }, recoilValue.key, 'set Recoil value');
}

function markRecoilValueModified(store, recoilValue) {
  queueOrPerformStateUpdate(store, {
    type: 'markModified',
    recoilValue
  }, recoilValue.key, 'mark RecoilValue modified');
}

function setUnvalidatedRecoilValue(store, recoilValue, unvalidatedValue) {
  queueOrPerformStateUpdate(store, {
    type: 'setUnvalidated',
    recoilValue,
    unvalidatedValue
  }, recoilValue.key, 'set Recoil value');
}

let subscriptionID = 0;

function subscribeToRecoilValue(store, {
  key
}, callback, componentDebugName = null) {
  const subID = subscriptionID++;
  const storeState = store.getState();

  if (!storeState.nodeToComponentSubscriptions.has(key)) {
    storeState.nodeToComponentSubscriptions.set(key, new Map());
  }

  Recoil_nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID, [componentDebugName !== null && componentDebugName !== void 0 ? componentDebugName : '<not captured>', callback]);
  return {
    release: () => {
      const storeState = store.getState();
      const subs = storeState.nodeToComponentSubscriptions.get(key);

      if (subs === undefined || !subs.has(subID)) {
        Recoil_recoverableViolation(`Subscription missing at release time for atom ${key}. This is a bug in Recoil.`);
        return;
      }

      subs.delete(subID);

      if (subs.size === 0) {
        storeState.nodeToComponentSubscriptions.delete(key);
      }
    }
  };
}

var Recoil_RecoilValueInterface = {
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  getRecoilValueAsLoadable,
  setRecoilValue,
  setRecoilValueLoadable,
  markRecoilValueModified,
  setUnvalidatedRecoilValue,
  subscribeToRecoilValue,
  isRecoilValue: isRecoilValue$1,
  applyAtomValueWrites,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart,
  invalidateDownstreams_FOR_TESTING: invalidateDownstreams
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */

const {
  unstable_batchedUpdates
} = reactDom; // @oss-only
// @fb-only: const {unstable_batchedUpdates} = require('ReactDOMComet');

var Recoil_ReactBatchedUpdates = {
  unstable_batchedUpdates
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const {
  batchStart: batchStart$1
} = Recoil_RecoilValueInterface;
const {
  unstable_batchedUpdates: unstable_batchedUpdates$1
} = Recoil_ReactBatchedUpdates;
let batcher = unstable_batchedUpdates$1; // flowlint-next-line unclear-type:off

/**
 * Sets the provided batcher function as the batcher function used by Recoil.
 *
 * Set the batcher to a custom batcher for your renderer,
 * if you use a renderer other than React DOM or React Native.
 */

const setBatcher = newBatcher => {
  batcher = newBatcher;
};
/**
 * Returns the current batcher function.
 */


const getBatcher = () => batcher;
/**
 * Calls the current batcher function and passes the
 * provided callback function.
 */


const batchUpdates = callback => {
  batcher(() => {
    let batchEnd = () => undefined;

    try {
      batchEnd = batchStart$1();
      callback();
    } finally {
      batchEnd();
    }
  });
};

var Recoil_Batching = {
  getBatcher,
  setBatcher,
  batchUpdates
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function enqueueExecution(s, f) {
  f();
}

var Recoil_Queue = {
  enqueueExecution
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Combines multiple Iterables into a single Iterable.
 * Traverses the input Iterables in the order provided and maintains the order
 * of their elements.
 *
 * Example:
 * ```
 * const r = Array.from(concatIterables(['a', 'b'], ['c'], ['d', 'e', 'f']));
 * r == ['a', 'b', 'c', 'd', 'e', 'f'];
 * ```
 */

function* concatIterables(iters) {
  for (const iter of iters) {
    for (const val of iter) {
      yield val;
    }
  }
}

var Recoil_concatIterables = concatIterables;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the filter function.
 */

function* filterIterable(iterable, predicate) {
  // Use generator to create iterable/iterator
  let index = 0;

  for (const value of iterable) {
    if (predicate(value, index++)) {
      yield value;
    }
  }
}

var Recoil_filterIterable = filterIterable;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the mapper function.
 */

function mapIterable(iterable, callback) {
  // Use generator to create iterable/iterator
  return function* () {
    let index = 0;

    for (const value of iterable) {
      yield callback(value, index++);
    }
  }();
}

var Recoil_mapIterable = mapIterable;
const {
  graph: graph$1
} = Recoil_Graph; // flowlint-next-line unclear-type:off

let nextTreeStateVersion = 0;

const getNextTreeStateVersion = () => nextTreeStateVersion++;

function makeEmptyTreeState() {
  const version = getNextTreeStateVersion();
  return {
    version,
    stateID: version,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: new Map(),
    nonvalidatedAtoms: new Map()
  };
}

function makeEmptyStoreState() {
  const currentTree = makeEmptyTreeState();
  return {
    currentTree,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(currentTree.version, graph$1()),
    versionsUsedByComponent: new Map()
  };
}

var Recoil_State = {
  makeEmptyTreeState,
  makeEmptyStoreState,
  getNextTreeStateVersion
};
const {
  batchUpdates: batchUpdates$1
} = Recoil_Batching;
const {
  getDownstreamNodes: getDownstreamNodes$2,
  peekNodeLoadable: peekNodeLoadable$1
} = Recoil_FunctionalCore;
const {
  graph: graph$2
} = Recoil_Graph;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$1,
  recoilValues: recoilValues$1
} = Recoil_Node;
const {
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$1,
  setRecoilValue: setRecoilValue$1
} = Recoil_RecoilValueInterface;
const {
  getNextTreeStateVersion: getNextTreeStateVersion$1,
  makeEmptyStoreState: makeEmptyStoreState$1
} = Recoil_State; // Opaque at this surface because it's part of the public API from here.

function recoilValuesForKeys(keys) {
  return Recoil_mapIterable(keys, key => Recoil_nullthrows(recoilValues$1.get(key)));
} // A "Snapshot" is "read-only" and captures a specific set of values of atoms.
// However, the data-flow-graph and selector values may evolve as selector
// evaluation functions are executed and async selectors resolve.


class Snapshot {
  constructor(storeState) {
    _defineProperty(this, "_store", void 0);

    _defineProperty(this, "getLoadable", recoilValue => // $FlowFixMe[escaped-generic]
    getRecoilValueAsLoadable$1(this._store, recoilValue));

    _defineProperty(this, "getPromise", recoilValue => // $FlowFixMe[escaped-generic]
    this.getLoadable(recoilValue).toPromise());

    _defineProperty(this, "getNodes_UNSTABLE", opt => {
      // TODO Deal with modified selectors
      if ((opt === null || opt === void 0 ? void 0 : opt.isModified) === true) {
        if ((opt === null || opt === void 0 ? void 0 : opt.isInitialized) === false) {
          return [];
        }

        const state = this._store.getState().currentTree;

        return recoilValuesForKeys(state.dirtyAtoms);
      }

      const knownAtoms = this._store.getState().knownAtoms;

      const knownSelectors = this._store.getState().knownSelectors;

      return (opt === null || opt === void 0 ? void 0 : opt.isInitialized) == null ? recoilValues$1.values() : opt.isInitialized === true ? recoilValuesForKeys(Recoil_concatIterables([this._store.getState().knownAtoms, this._store.getState().knownSelectors])) : Recoil_filterIterable(recoilValues$1.values(), ({
        key
      }) => !knownAtoms.has(key) && !knownSelectors.has(key));
    });

    _defineProperty(this, "getDeps_UNSTABLE", recoilValue => {
      this.getLoadable(recoilValue); // Evaluate node to ensure deps are up-to-date

      const deps = this._store.getGraph(this._store.getState().currentTree.version).nodeDeps.get(recoilValue.key);

      return recoilValuesForKeys(deps !== null && deps !== void 0 ? deps : []);
    });

    _defineProperty(this, "getSubscribers_UNSTABLE", ({
      key
    }) => {
      const state = this._store.getState().currentTree;

      const downstreamNodes = Recoil_filterIterable(getDownstreamNodes$2(this._store, state, new Set([key])), nodeKey => nodeKey !== key);
      return {
        nodes: recoilValuesForKeys(downstreamNodes)
      };
    });

    _defineProperty(this, "getInfo_UNSTABLE", recoilValue => {
      var _graph$nodeDeps$get;

      const {
        key
      } = recoilValue;

      const state = this._store.getState().currentTree;

      const graph = this._store.getGraph(state.version);

      const type = this._store.getState().knownAtoms.has(key) ? 'atom' : this._store.getState().knownSelectors.has(key) ? 'selector' : undefined;
      return {
        loadable: peekNodeLoadable$1(this._store, state, key),
        isActive: this._store.getState().knownAtoms.has(key) || this._store.getState().knownSelectors.has(key),
        isSet: type === 'selector' ? false : state.atomValues.has(key),
        isModified: state.dirtyAtoms.has(key),
        type,
        // Don't use this.getDeps() as it will evaluate the node and we are only peeking
        deps: recoilValuesForKeys((_graph$nodeDeps$get = graph.nodeDeps.get(key)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : []),
        subscribers: this.getSubscribers_UNSTABLE(recoilValue)
      };
    });

    _defineProperty(this, "map", mapper => {
      const mutableSnapshot = new MutableSnapshot(this);
      mapper(mutableSnapshot); // if removing batchUpdates from `set` add it here

      return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
    });

    _defineProperty(this, "asyncMap", async mapper => {
      const mutableSnapshot = new MutableSnapshot(this);
      await mapper(mutableSnapshot);
      return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
    });

    this._store = {
      getState: () => storeState,
      replaceState: replacer => {
        storeState.currentTree = replacer(storeState.currentTree); // no batching so nextTree is never active
      },
      getGraph: version => {
        const graphs = storeState.graphsByVersion;

        if (graphs.has(version)) {
          return Recoil_nullthrows(graphs.get(version));
        }

        const newGraph = graph$2();
        graphs.set(version, newGraph);
        return newGraph;
      },
      subscribeToTransactions: () => ({
        release: () => {}
      }),
      addTransactionMetadata: () => {
        throw new Error('Cannot subscribe to Snapshots');
      }
    };
  }

  getStore_INTERNAL() {
    return this._store;
  }

  getID() {
    return this.getID_INTERNAL();
  }

  getID_INTERNAL() {
    return this._store.getState().currentTree.stateID;
  }

}

function cloneStoreState(store, treeState, bumpVersion = false) {
  const storeState = store.getState();
  const version = bumpVersion ? getNextTreeStateVersion$1() : treeState.version;
  return {
    currentTree: bumpVersion ? {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version,
      stateID: version,
      transactionMetadata: _objectSpread({}, treeState.transactionMetadata),
      dirtyAtoms: new Set(treeState.dirtyAtoms),
      atomValues: new Map(treeState.atomValues),
      nonvalidatedAtoms: new Map(treeState.nonvalidatedAtoms)
    } : treeState,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(storeState.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(storeState.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(version, store.getGraph(treeState.version)),
    versionsUsedByComponent: new Map()
  };
} // Factory to build a fresh snapshot


function freshSnapshot(initializeState) {
  const snapshot = new Snapshot(makeEmptyStoreState$1());
  return initializeState != null ? snapshot.map(initializeState) : snapshot;
} // Factory to clone a snapahot state


function cloneSnapshot(store, version = 'current') {
  const storeState = store.getState();
  const treeState = version === 'current' ? storeState.currentTree : Recoil_nullthrows(storeState.previousTree);
  return new Snapshot(cloneStoreState(store, treeState));
}

class MutableSnapshot extends Snapshot {
  constructor(snapshot) {
    super(cloneStoreState(snapshot.getStore_INTERNAL(), snapshot.getStore_INTERNAL().getState().currentTree, true));

    _defineProperty(this, "set", (recoilState, newValueOrUpdater) => {
      const store = this.getStore_INTERNAL(); // This batchUpdates ensures this `set` is applied immediately and you can
      // read the written value after calling `set`. I would like to remove this
      // behavior and only batch in `Snapshot.map`, but this would be a breaking
      // change potentially.

      batchUpdates$1(() => {
        setRecoilValue$1(store, recoilState, newValueOrUpdater);
      });
    });

    _defineProperty(this, "reset", recoilState => // See note at `set` about batched updates.
    batchUpdates$1(() => setRecoilValue$1(this.getStore_INTERNAL(), recoilState, DEFAULT_VALUE$1)));
  } // We want to allow the methods to be destructured and used as accessors
  // eslint-disable-next-line fb-www/extra-arrow-initializer


}

var Recoil_Snapshot = {
  Snapshot,
  MutableSnapshot,
  freshSnapshot,
  cloneSnapshot
};
var Recoil_Snapshot_1 = Recoil_Snapshot.Snapshot;
var Recoil_Snapshot_2 = Recoil_Snapshot.MutableSnapshot;
var Recoil_Snapshot_3 = Recoil_Snapshot.freshSnapshot;
var Recoil_Snapshot_4 = Recoil_Snapshot.cloneSnapshot;
var Recoil_Snapshot$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Snapshot: Recoil_Snapshot_1,
  MutableSnapshot: Recoil_Snapshot_2,
  freshSnapshot: Recoil_Snapshot_3,
  cloneSnapshot: Recoil_Snapshot_4
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function unionSets(...sets) {
  const result = new Set();

  for (const set of sets) {
    for (const value of set) {
      result.add(value);
    }
  }

  return result;
}

var Recoil_unionSets = unionSets;
const {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} = react; // @fb-only: const RecoilusagelogEvent = require('RecoilusagelogEvent');
// @fb-only: const RecoilUsageLogFalcoEvent = require('RecoilUsageLogFalcoEvent');
// @fb-only: const URI = require('URI');

const {
  cleanUpNode: cleanUpNode$1,
  getDownstreamNodes: getDownstreamNodes$3,
  setNodeValue: setNodeValue$2,
  setUnvalidatedAtomValue_DEPRECATED: setUnvalidatedAtomValue_DEPRECATED$1
} = Recoil_FunctionalCore;
const {
  graph: graph$3,
  saveDependencyMapToStore: saveDependencyMapToStore$2
} = Recoil_Graph;
const {
  cloneGraph: cloneGraph$1
} = Recoil_Graph;
const {
  applyAtomValueWrites: applyAtomValueWrites$1
} = Recoil_RecoilValueInterface;
const {
  freshSnapshot: freshSnapshot$1
} = Recoil_Snapshot$1;
const {
  getNextTreeStateVersion: getNextTreeStateVersion$2,
  makeEmptyStoreState: makeEmptyStoreState$2
} = Recoil_State;
const {
  mapByDeletingMultipleFromMap: mapByDeletingMultipleFromMap$1
} = Recoil_CopyOnWrite; // @fb-only: const recoverableViolation = require('../util/Recoil_recoverableViolation');
// @fb-only: const gkx = require('gkx');

function notInAContext() {
  throw new Error('This component must be used inside a <RecoilRoot> component.');
}

const defaultStore = Object.freeze({
  getState: notInAContext,
  replaceState: notInAContext,
  getGraph: notInAContext,
  subscribeToTransactions: notInAContext,
  addTransactionMetadata: notInAContext
});
let stateReplacerIsBeingExecuted = false;

function startNextTreeIfNeeded(storeState) {
  if (stateReplacerIsBeingExecuted) {
    throw new Error('An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.');
  }

  if (storeState.nextTree === null) {
    const version = storeState.currentTree.version;
    const nextVersion = getNextTreeStateVersion$2();
    storeState.nextTree = _objectSpread(_objectSpread({}, storeState.currentTree), {}, {
      version: nextVersion,
      stateID: nextVersion,
      dirtyAtoms: new Set(),
      transactionMetadata: {}
    });
    storeState.graphsByVersion.set(nextVersion, cloneGraph$1(Recoil_nullthrows(storeState.graphsByVersion.get(version))));
  }
}

const AppContext = react.createContext({
  current: defaultStore
});

const useStoreRef = () => useContext(AppContext);

const MutableSourceContext = react.createContext(null); // TODO T2710559282599660

const useRecoilMutableSource = () => useContext(MutableSourceContext);

function sendEndOfBatchNotifications(store) {
  const storeState = store.getState();
  const treeState = storeState.currentTree; // Inform transaction subscribers of the transaction:

  const dirtyAtoms = treeState.dirtyAtoms;

  if (dirtyAtoms.size) {
    // Execute Node-specific subscribers before global subscribers
    for (const [key, subscriptions] of storeState.nodeTransactionSubscriptions) {
      if (dirtyAtoms.has(key)) {
        for (const [_, subscription] of subscriptions) {
          subscription(store);
        }
      }
    }

    for (const [_, subscription] of storeState.transactionSubscriptions) {
      subscription(store);
    } // Components that are subscribed to the dirty atom:


    const dependentNodes = getDownstreamNodes$3(store, treeState, dirtyAtoms);

    for (const key of dependentNodes) {
      const comps = storeState.nodeToComponentSubscriptions.get(key);

      if (comps) {
        for (const [_subID, [_debugName, callback]] of comps) {
          callback(treeState);
        }
      }
    } // Wake all suspended components so the right one(s) can try to re-render.
    // We need to wake up components not just when some asynchronous selector
    // resolved, but also when changing synchronous values because this may cause
    // a selector to change from asynchronous to synchronous, in which case there
    // would be no follow-up asynchronous resolution to wake us up.
    // TODO OPTIMIZATION Only wake up related downstream components


    let nodeNames = '[available in dev build]';

    if (false) {}

    storeState.suspendedComponentResolvers.forEach(cb => Recoil_Tracing.trace('value became available, waking components', nodeNames, cb));
  } // Special behavior ONLY invoked by useInterface.
  // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.


  storeState.queuedComponentCallbacks_DEPRECATED.forEach(cb => cb(treeState));
  storeState.queuedComponentCallbacks_DEPRECATED.splice(0, storeState.queuedComponentCallbacks_DEPRECATED.length);
}
/*
 * The purpose of the Batcher is to observe when React batches end so that
 * Recoil state changes can be batched. Whenever Recoil state changes, we call
 * setState on the batcher. Then we wait for that change to be committed, which
 * signifies the end of the batch. That's when we respond to the Recoil change.
 */


function Batcher(props) {
  const storeRef = useStoreRef();
  const [_, setState] = useState([]);
  props.setNotifyBatcherOfChange(() => setState({}));
  useEffect(() => {
    // enqueueExecution runs this function immediately; it is only used to
    // manipulate the order of useEffects during tests, since React seems to
    // call useEffect in an unpredictable order sometimes.
    Recoil_Queue.enqueueExecution('Batcher', () => {
      const storeState = storeRef.current.getState();
      const {
        nextTree
      } = storeState; // Ignore commits that are not because of Recoil transactions -- namely,
      // because something above RecoilRoot re-rendered:

      if (nextTree === null) {
        return;
      } // nextTree is now committed -- note that copying and reset occurs when
      // a transaction begins, in startNextTreeIfNeeded:


      storeState.previousTree = storeState.currentTree;
      storeState.currentTree = nextTree;
      storeState.nextTree = null;
      sendEndOfBatchNotifications(storeRef.current);
      const discardedVersion = Recoil_nullthrows(storeState.previousTree).version;
      storeState.graphsByVersion.delete(discardedVersion);
      storeState.previousTree = null;
    });
  });
  return null;
}

if (false) {} // When removing this deprecated function, remove stateBySettingRecoilValue
// which will no longer be needed.


function initialStoreState_DEPRECATED(store, initializeState) {
  const initial = makeEmptyStoreState$2();
  initializeState({
    // $FlowFixMe[escaped-generic]
    set: (atom, value) => {
      const state = initial.currentTree;
      const [depMap, writes] = setNodeValue$2(store, state, atom.key, value);
      const writtenNodes = new Set(writes.keys());
      saveDependencyMapToStore$2(depMap, store, state.version);
      const nonvalidatedAtoms = mapByDeletingMultipleFromMap$1(state.nonvalidatedAtoms, writtenNodes);
      initial.currentTree = _objectSpread(_objectSpread({}, state), {}, {
        dirtyAtoms: Recoil_unionSets(state.dirtyAtoms, writtenNodes),
        atomValues: applyAtomValueWrites$1(state.atomValues, writes),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms
      });
    },
    setUnvalidatedAtomValues: atomValues => {
      // FIXME replace this with a mutative loop
      atomValues.forEach((v, k) => {
        initial.currentTree = setUnvalidatedAtomValue_DEPRECATED$1(initial.currentTree, k, v);
      });
    }
  });
  return initial;
}

function initialStoreState(initializeState) {
  const snapshot = freshSnapshot$1().map(initializeState);
  return snapshot.getStore_INTERNAL().getState();
}

let nextID = 0;

function RecoilRoot({
  initializeState_DEPRECATED,
  initializeState,
  store_INTERNAL: storeProp,
  // For use with React "context bridging"
  children
}) {
  var _createMutableSource; // prettier-ignore
  // @fb-only: useEffect(() => {
  // @fb-only: if (gkx('recoil_usage_logging')) {
  // @fb-only: try {
  // @fb-only: RecoilUsageLogFalcoEvent.log(() => ({
  // @fb-only: type: RecoilusagelogEvent.RECOIL_ROOT_MOUNTED,
  // @fb-only: path: URI.getRequestURI().getPath(),
  // @fb-only: }));
  // @fb-only: } catch {
  // @fb-only: recoverableViolation(
  // @fb-only: 'Error when logging Recoil Usage event',
  // @fb-only: 'recoil',
  // @fb-only: );
  // @fb-only: }
  // @fb-only: }
  // @fb-only: }, []);


  let storeState; // eslint-disable-line prefer-const

  const getGraph = version => {
    const graphs = storeState.current.graphsByVersion;

    if (graphs.has(version)) {
      return Recoil_nullthrows(graphs.get(version));
    }

    const newGraph = graph$3();
    graphs.set(version, newGraph);
    return newGraph;
  };

  const subscribeToTransactions = (callback, key) => {
    if (key == null) {
      // Global transaction subscriptions
      const {
        transactionSubscriptions
      } = storeRef.current.getState();
      const id = nextID++;
      transactionSubscriptions.set(id, callback);
      return {
        release: () => {
          transactionSubscriptions.delete(id);
        }
      };
    } else {
      // Node-specific transaction subscriptions:
      const {
        nodeTransactionSubscriptions
      } = storeRef.current.getState();

      if (!nodeTransactionSubscriptions.has(key)) {
        nodeTransactionSubscriptions.set(key, new Map());
      }

      const id = nextID++;
      Recoil_nullthrows(nodeTransactionSubscriptions.get(key)).set(id, callback);
      return {
        release: () => {
          const subs = nodeTransactionSubscriptions.get(key);

          if (subs) {
            subs.delete(id);

            if (subs.size === 0) {
              nodeTransactionSubscriptions.delete(key);
            }
          }
        }
      };
    }
  };

  const addTransactionMetadata = metadata => {
    startNextTreeIfNeeded(storeRef.current.getState());

    for (const k of Object.keys(metadata)) {
      Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k] = metadata[k];
    }
  };

  const replaceState = replacer => {
    const storeState = storeRef.current.getState();
    startNextTreeIfNeeded(storeState); // Use replacer to get the next state:

    const nextTree = Recoil_nullthrows(storeState.nextTree);
    let replaced;

    try {
      stateReplacerIsBeingExecuted = true;
      replaced = replacer(nextTree);
    } finally {
      stateReplacerIsBeingExecuted = false;
    }

    if (replaced === nextTree) {
      return;
    }

    if (false) {} // Save changes to nextTree and schedule a React update:


    storeState.nextTree = replaced;
    Recoil_nullthrows(notifyBatcherOfChange.current)();
  };

  const notifyBatcherOfChange = useRef(null);

  function setNotifyBatcherOfChange(x) {
    notifyBatcherOfChange.current = x;
  } // FIXME T2710559282599660


  const createMutableSource = (_createMutableSource = react.createMutableSource) !== null && _createMutableSource !== void 0 ? _createMutableSource : // flowlint-line unclear-type:off
  react.unstable_createMutableSource; // flowlint-line unclear-type:off

  const store = storeProp !== null && storeProp !== void 0 ? storeProp : {
    getState: () => storeState.current,
    replaceState,
    getGraph,
    subscribeToTransactions,
    addTransactionMetadata
  };
  const storeRef = useRef(store);
  storeState = useRef(initializeState_DEPRECATED != null ? initialStoreState_DEPRECATED(store, initializeState_DEPRECATED) : initializeState != null ? initialStoreState(initializeState) : makeEmptyStoreState$2());
  const mutableSource = useMemo(() => createMutableSource ? createMutableSource(storeState, () => storeState.current.currentTree.version) : null, [createMutableSource, storeState]); // Cleanup when the <RecoilRoot> is unmounted

  useEffect(() => () => {
    for (const atomKey of storeRef.current.getState().knownAtoms) {
      cleanUpNode$1(storeRef.current, atomKey);
    }
  }, []);
  return /*#__PURE__*/react.createElement(AppContext.Provider, {
    value: storeRef
  }, /*#__PURE__*/react.createElement(MutableSourceContext.Provider, {
    value: mutableSource
  }, /*#__PURE__*/react.createElement(Batcher, {
    setNotifyBatcherOfChange: setNotifyBatcherOfChange
  }), children));
}

var Recoil_RecoilRoot_react = {
  useStoreRef,
  useRecoilMutableSource,
  RecoilRoot,
  sendEndOfBatchNotifications_FOR_TESTING: sendEndOfBatchNotifications
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a map containing all of the keys + values from the original map where
 * the given callback returned true.
 */

function filterMap(map, callback) {
  const result = new Map();

  for (const [key, value] of map) {
    if (callback(value, key)) {
      result.set(key, value);
    }
  }

  return result;
}

var Recoil_filterMap = filterMap;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a set containing all of the values from the original set where
 * the given callback returned true.
 */

function filterSet(set, callback) {
  const result = new Set();

  for (const value of set) {
    if (callback(value)) {
      result.add(value);
    }
  }

  return result;
}

var Recoil_filterSet = filterSet;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

var invariant_1 = invariant; // @oss-only

var Recoil_invariant = invariant_1;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function mergeMaps(...maps) {
  const result = new Map();

  for (let i = 0; i < maps.length; i++) {
    const iterator = maps[i].keys();
    let nextKey;

    while (!(nextKey = iterator.next()).done) {
      // $FlowFixMe[incompatible-call] - map/iterator knows nothing about flow types
      result.set(nextKey.value, maps[i].get(nextKey.value));
    }
  }
  /* $FlowFixMe[incompatible-return] (>=0.66.0 site=www,mobile) This comment
   * suppresses an error found when Flow v0.66 was deployed. To see the error
   * delete this comment and run Flow. */


  return result;
}

var Recoil_mergeMaps = mergeMaps;

var _useMutableSource; // FIXME T2710559282599660


const useMutableSource = // flowlint-line unclear-type:off
(_useMutableSource = react.useMutableSource) !== null && _useMutableSource !== void 0 ? _useMutableSource : react.unstable_useMutableSource; // flowlint-line unclear-type:off

function mutableSourceExists() {
  return useMutableSource && !( false && false);
}

var Recoil_mutableSource = {
  mutableSourceExists,
  useMutableSource
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * MIT License
 *
 * Copyright (c) 2014-2019 Georg Tavonius
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const UNKNOWN_FUNCTION = '<unknown>';
/**
 * This parses the different stack traces and puts them into one format
 * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)
 */

function stackTraceParser(stackString) {
  const lines = stackString.split('\n');
  return lines.reduce((stack, line) => {
    const parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);

    if (parseResult) {
      stack.push(parseResult);
    }

    return stack;
  }, []);
}

const chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;

function parseChrome(line) {
  const parts = chromeRe.exec(line);

  if (!parts) {
    return null;
  }

  const isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

  const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

  const submatch = chromeEvalRe.exec(parts[2]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line/column number
    parts[2] = submatch[1]; // url

    parts[3] = submatch[2]; // line

    parts[4] = submatch[3]; // column
  }

  return {
    file: !isNative ? parts[2] : null,
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: isNative ? [parts[2]] : [],
    lineNumber: parts[3] ? +parts[3] : null,
    column: parts[4] ? +parts[4] : null
  };
}

const winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseWinjs(line) {
  const parts = winjsRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

const geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
const geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

function parseGecko(line) {
  const parts = geckoRe.exec(line);

  if (!parts) {
    return null;
  }

  const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
  const submatch = geckoEvalRe.exec(parts[3]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line number
    parts[3] = submatch[1];
    parts[4] = submatch[2];
    parts[5] = null; // no column when eval
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: parts[2] ? parts[2].split(',') : [],
    lineNumber: parts[4] ? +parts[4] : null,
    column: parts[5] ? +parts[5] : null
  };
}

const javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;

function parseJSC(line) {
  const parts = javaScriptCoreRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[4],
    column: parts[5] ? +parts[5] : null
  };
}

const nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseNode(line) {
  const parts = nodeRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

var Recoil_stackTraceParser = stackTraceParser;
const {
  useRef: useRef$1
} = react;

function useComponentName() {
  const nameRef = useRef$1();

  if (false) { var _nameRef$current; } // @fb-only: return "<component name only available when both in dev mode and when passing GK 'recoil_infer_component_names'>";


  return '<component name not available>'; // @oss-only
}

var Recoil_useComponentName = useComponentName;
const {
  useCallback,
  useEffect: useEffect$1,
  useMemo: useMemo$1,
  useRef: useRef$2,
  useState: useState$1
} = react;
const {
  batchUpdates: batchUpdates$2
} = Recoil_Batching;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$2,
  getNode: getNode$2,
  nodes: nodes$1
} = Recoil_Node;
const {
  useRecoilMutableSource: useRecoilMutableSource$1,
  useStoreRef: useStoreRef$1
} = Recoil_RecoilRoot_react;
const {
  isRecoilValue: isRecoilValue$2
} = Recoil_RecoilValue$1;
const {
  AbstractRecoilValue: AbstractRecoilValue$2,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$2,
  setRecoilValue: setRecoilValue$2,
  setRecoilValueLoadable: setRecoilValueLoadable$1,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$1,
  subscribeToRecoilValue: subscribeToRecoilValue$1
} = Recoil_RecoilValueInterface;
const {
  Snapshot: Snapshot$1,
  cloneSnapshot: cloneSnapshot$1
} = Recoil_Snapshot$1;
const {
  setByAddingToSet: setByAddingToSet$2
} = Recoil_CopyOnWrite;
const {
  mutableSourceExists: mutableSourceExists$1,
  useMutableSource: useMutableSource$1
} = Recoil_mutableSource;

function handleLoadable(loadable, atom, storeRef) {
  // We can't just throw the promise we are waiting on to Suspense.  If the
  // upstream dependencies change it may produce a state in which the component
  // can render, but it would still be suspended on a Promise that may never resolve.
  if (loadable.state === 'hasValue') {
    return loadable.contents;
  } else if (loadable.state === 'loading') {
    const promise = new Promise(resolve => {
      storeRef.current.getState().suspendedComponentResolvers.add(resolve);
    });
    throw promise;
  } else if (loadable.state === 'hasError') {
    throw loadable.contents;
  } else {
    throw new Error(`Invalid value of loadable atom "${atom.key}"`);
  }
}

function validateRecoilValue(recoilValue, hookName) {
  if (!isRecoilValue$2(recoilValue)) {
    throw new Error(`Invalid argument to ${hookName}: expected an atom or selector but got ${String(recoilValue)}`);
  }
}

function useRecoilInterface_DEPRECATED() {
  const storeRef = useStoreRef$1();
  const [_, forceUpdate] = useState$1([]);
  const recoilValuesUsed = useRef$2(new Set());
  recoilValuesUsed.current = new Set(); // Track the RecoilValues used just during this render

  const previousSubscriptions = useRef$2(new Set());
  const subscriptions = useRef$2(new Map());
  const unsubscribeFrom = useCallback(key => {
    const sub = subscriptions.current.get(key);

    if (sub) {
      sub.release(storeRef.current);
      subscriptions.current.delete(key);
    }
  }, [storeRef, subscriptions]);
  const componentName = Recoil_useComponentName();
  useEffect$1(() => {
    const store = storeRef.current;

    function updateState(_state, key) {
      if (!subscriptions.current.has(key)) {
        return;
      }

      forceUpdate([]);
    }

    Recoil_differenceSets(recoilValuesUsed.current, previousSubscriptions.current).forEach(key => {
      if (subscriptions.current.has(key)) {
        Recoil_expectationViolation(`Double subscription to RecoilValue "${key}"`);
        return;
      }

      const sub = subscribeToRecoilValue$1(store, new AbstractRecoilValue$2(key), state => {
        Recoil_Tracing.trace('RecoilValue subscription fired', key, () => {
          updateState(state, key);
        });
      }, componentName);
      subscriptions.current.set(key, sub);
      Recoil_Tracing.trace('initial update on subscribing', key, () => {
        /**
         * Since we're subscribing in an effect we need to update to the latest
         * value of the atom since it may have changed since we rendered. We can
         * go ahead and do that now, unless we're in the middle of a batch --
         * in which case we should do it at the end of the batch, due to the
         * following edge case: Suppose an atom is updated in another useEffect
         * of this same component. Then the following sequence of events occur:
         * 1. Atom is updated and subs fired (but we may not be subscribed
         *    yet depending on order of effects, so we miss this) Updated value
         *    is now in nextTree, but not currentTree.
         * 2. This effect happens. We subscribe and update.
         * 3. From the update we re-render and read currentTree, with old value.
         * 4. Batcher's effect sets currentTree to nextTree.
         * In this sequence we miss the update. To avoid that, add the update
         * to queuedComponentCallback if a batch is in progress.
         */
        // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.
        const state = store.getState();

        if (state.nextTree) {
          store.getState().queuedComponentCallbacks_DEPRECATED.push(Recoil_Tracing.wrap(() => {
            updateState(store.getState(), key);
          }));
        } else {
          updateState(store.getState(), key);
        }
      });
    });
    Recoil_differenceSets(previousSubscriptions.current, recoilValuesUsed.current).forEach(key => {
      unsubscribeFrom(key);
    });
    previousSubscriptions.current = recoilValuesUsed.current;
  });
  useEffect$1(() => {
    const subs = subscriptions.current;
    return () => subs.forEach((_, key) => unsubscribeFrom(key));
  }, [unsubscribeFrom]);
  return useMemo$1(() => {
    function useSetRecoilState(recoilState) {
      if (false) {}

      return newValueOrUpdater => {
        setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
      };
    }

    function useResetRecoilState(recoilState) {
      if (false) {}

      return () => setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    }

    function useRecoilValueLoadable(recoilValue) {
      if (false) {}

      if (!recoilValuesUsed.current.has(recoilValue.key)) {
        recoilValuesUsed.current = setByAddingToSet$2(recoilValuesUsed.current, recoilValue.key);
      } // TODO Restore optimization to memoize lookup


      return getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
    }

    function useRecoilValue(recoilValue) {
      if (false) {}

      const loadable = useRecoilValueLoadable(recoilValue); // $FlowFixMe[escaped-generic]

      return handleLoadable(loadable, recoilValue, storeRef);
    }

    function useRecoilState(recoilState) {
      if (false) {}

      return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
    }

    function useRecoilStateLoadable(recoilState) {
      if (false) {}

      return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
    }

    return {
      getRecoilValue: useRecoilValue,
      getRecoilValueLoadable: useRecoilValueLoadable,
      getRecoilState: useRecoilState,
      getRecoilStateLoadable: useRecoilStateLoadable,
      getSetRecoilState: useSetRecoilState,
      getResetRecoilState: useResetRecoilState
    };
  }, [recoilValuesUsed, storeRef]);
}

const recoilComponentGetRecoilValueCount_FOR_TESTING = {
  current: 0
};

function useRecoilValueLoadable_MUTABLESOURCE(recoilValue) {
  if (false) {}

  const storeRef = useStoreRef$1();
  const getValue = useCallback(() => {
    if (false) {}

    return getRecoilValueAsLoadable$2(storeRef.current, recoilValue, storeRef.current.getState().currentTree);
  }, [storeRef, recoilValue]);
  const componentName = Recoil_useComponentName();
  const subscribe = useCallback((_something, callback) => {
    const store = storeRef.current;
    const sub = subscribeToRecoilValue$1(store, recoilValue, () => {
      Recoil_Tracing.trace('RecoilValue subscription fired', recoilValue.key, () => {
        callback();
      });
    }, componentName);
    return () => sub.release(store);
  }, [recoilValue, storeRef, componentName]);
  return useMutableSource$1(useRecoilMutableSource$1(), getValue, subscribe);
}

function useRecoilValueLoadable_LEGACY(recoilValue) {
  if (false) {}

  const storeRef = useStoreRef$1();
  const [_, forceUpdate] = useState$1([]);
  const componentName = Recoil_useComponentName();
  useEffect$1(() => {
    const store = storeRef.current;
    const sub = subscribeToRecoilValue$1(store, recoilValue, _state => {
      Recoil_Tracing.trace('RecoilValue subscription fired', recoilValue.key, () => {
        forceUpdate([]);
      });
    }, componentName);
    Recoil_Tracing.trace('initial update on subscribing', recoilValue.key, () => {
      /**
       * Since we're subscribing in an effect we need to update to the latest
       * value of the atom since it may have changed since we rendered. We can
       * go ahead and do that now, unless we're in the middle of a batch --
       * in which case we should do it at the end of the batch, due to the
       * following edge case: Suppose an atom is updated in another useEffect
       * of this same component. Then the following sequence of events occur:
       * 1. Atom is updated and subs fired (but we may not be subscribed
       *    yet depending on order of effects, so we miss this) Updated value
       *    is now in nextTree, but not currentTree.
       * 2. This effect happens. We subscribe and update.
       * 3. From the update we re-render and read currentTree, with old value.
       * 4. Batcher's effect sets currentTree to nextTree.
       * In this sequence we miss the update. To avoid that, add the update
       * to queuedComponentCallback if a batch is in progress.
       */
      const state = store.getState();

      if (state.nextTree) {
        store.getState().queuedComponentCallbacks_DEPRECATED.push(Recoil_Tracing.wrap(() => {
          forceUpdate([]);
        }));
      } else {
        forceUpdate([]);
      }
    });
    return () => sub.release(store);
  }, [recoilValue, storeRef]);
  return getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
}
/**
  Like useRecoilValue(), but either returns the value if available or
  just undefined if not available for any reason, such as pending or error.
*/


function useRecoilValueLoadable(recoilValue) {
  if (mutableSourceExists$1()) {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_MUTABLESOURCE(recoilValue);
  } else {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_LEGACY(recoilValue);
  }
}
/**
  Returns the value represented by the RecoilValue.
  If the value is pending, it will throw a Promise to suspend the component,
  if the value is an error it will throw it for the nearest React error boundary.
  This will also subscribe the component for any updates in the value.
  */


function useRecoilValue(recoilValue) {
  if (false) {}

  const storeRef = useStoreRef$1();
  const loadable = useRecoilValueLoadable(recoilValue); // $FlowFixMe[escaped-generic]

  return handleLoadable(loadable, recoilValue, storeRef);
}
/**
  Returns a function that allows the value of a RecoilState to be updated, but does
  not subscribe the component to changes to that RecoilState.
*/


function useSetRecoilState(recoilState) {
  if (false) {}

  const storeRef = useStoreRef$1();
  return useCallback(newValueOrUpdater => {
    setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
  }, [storeRef, recoilState]);
}
/**
  Returns a function that will reset the value of a RecoilState to its default
*/


function useResetRecoilState(recoilState) {
  if (false) {}

  const storeRef = useStoreRef$1();
  return useCallback(() => {
    setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
  }, [storeRef, recoilState]);
}
/**
  Equivalent to useState(). Allows the value of the RecoilState to be read and written.
  Subsequent updates to the RecoilState will cause the component to re-render. If the
  RecoilState is pending, this will suspend the component and initiate the
  retrieval of the value. If evaluating the RecoilState resulted in an error, this will
  throw the error so that the nearest React error boundary can catch it.
*/


function useRecoilState(recoilState) {
  if (false) {}

  return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
}
/**
  Like useRecoilState(), but does not cause Suspense or React error handling. Returns
  an object that indicates whether the RecoilState is available, pending, or
  unavailable due to an error.
*/


function useRecoilStateLoadable(recoilState) {
  if (false) {}

  return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
}

function useTransactionSubscription(callback) {
  const storeRef = useStoreRef$1();
  useEffect$1(() => {
    const sub = storeRef.current.subscribeToTransactions(callback);
    return sub.release;
  }, [callback, storeRef]);
}

function externallyVisibleAtomValuesInState(state) {
  const atomValues = state.atomValues;
  const persistedAtomContentsValues = Recoil_mapMap(Recoil_filterMap(atomValues, (v, k) => {
    const node = getNode$2(k);
    const persistence = node.persistence_UNSTABLE;
    return persistence != null && persistence.type !== 'none' && v.state === 'hasValue';
  }), v => v.contents); // Merge in nonvalidated atoms; we may not have defs for them but they will
  // all have persistence on or they wouldn't be there in the first place.

  return Recoil_mergeMaps(state.nonvalidatedAtoms, persistedAtomContentsValues);
}
/**
  Calls the given callback after any atoms have been modified and the consequent
  component re-renders have been committed. This is intended for persisting
  the values of the atoms to storage. The stored values can then be restored
  using the useSetUnvalidatedAtomValues hook.

  The callback receives the following info:

  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.
*/


function useTransactionObservation_DEPRECATED(callback) {
  useTransactionSubscription(useCallback(store => {
    let previousTree = store.getState().previousTree;
    const currentTree = store.getState().currentTree;

    if (!previousTree) {
      Recoil_recoverableViolation('Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil');
      previousTree = store.getState().currentTree; // attempt to trundle on
    }

    const atomValues = externallyVisibleAtomValuesInState(currentTree);
    const previousAtomValues = externallyVisibleAtomValuesInState(previousTree);
    const atomInfo = Recoil_mapMap(nodes$1, node => {
      var _node$persistence_UNS, _node$persistence_UNS2, _node$persistence_UNS3, _node$persistence_UNS4;

      return {
        persistence_UNSTABLE: {
          type: (_node$persistence_UNS = (_node$persistence_UNS2 = node.persistence_UNSTABLE) === null || _node$persistence_UNS2 === void 0 ? void 0 : _node$persistence_UNS2.type) !== null && _node$persistence_UNS !== void 0 ? _node$persistence_UNS : 'none',
          backButton: (_node$persistence_UNS3 = (_node$persistence_UNS4 = node.persistence_UNSTABLE) === null || _node$persistence_UNS4 === void 0 ? void 0 : _node$persistence_UNS4.backButton) !== null && _node$persistence_UNS3 !== void 0 ? _node$persistence_UNS3 : false
        }
      };
    }); // Filter on existance in atomValues so that externally-visible rules
    // are also applied to modified atoms (specifically exclude selectors):

    const modifiedAtoms = Recoil_filterSet(currentTree.dirtyAtoms, k => atomValues.has(k) || previousAtomValues.has(k));
    callback({
      atomValues,
      previousAtomValues,
      atomInfo,
      modifiedAtoms,
      transactionMetadata: _objectSpread({}, currentTree.transactionMetadata)
    });
  }, [callback]));
}

function useRecoilTransactionObserver(callback) {
  useTransactionSubscription(useCallback(store => {
    callback({
      snapshot: cloneSnapshot$1(store, 'current'),
      previousSnapshot: cloneSnapshot$1(store, 'previous')
    });
  }, [callback]));
} // Return a snapshot of the current state and subscribe to all state changes


function useRecoilSnapshot() {
  const storeRef = useStoreRef$1();
  const [snapshot, setSnapshot] = useState$1(() => cloneSnapshot$1(storeRef.current));
  useTransactionSubscription(useCallback(store => setSnapshot(cloneSnapshot$1(store)), []));
  return snapshot;
}

function useGotoRecoilSnapshot() {
  const storeRef = useStoreRef$1();
  return useCallback(snapshot => {
    var _storeState$nextTree;

    const storeState = storeRef.current.getState();
    const prev = (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree;
    const next = snapshot.getStore_INTERNAL().getState().currentTree;
    batchUpdates$2(() => {
      const keysToUpdate = new Set();

      for (const keys of [prev.atomValues.keys(), next.atomValues.keys()]) {
        for (const key of keys) {
          var _prev$atomValues$get, _next$atomValues$get;

          if (((_prev$atomValues$get = prev.atomValues.get(key)) === null || _prev$atomValues$get === void 0 ? void 0 : _prev$atomValues$get.contents) !== ((_next$atomValues$get = next.atomValues.get(key)) === null || _next$atomValues$get === void 0 ? void 0 : _next$atomValues$get.contents) && getNode$2(key).shouldRestoreFromSnapshots) {
            keysToUpdate.add(key);
          }
        }
      }

      keysToUpdate.forEach(key => {
        setRecoilValueLoadable$1(storeRef.current, new AbstractRecoilValue$2(key), next.atomValues.has(key) ? Recoil_nullthrows(next.atomValues.get(key)) : DEFAULT_VALUE$2);
      });
      storeRef.current.replaceState(state => {
        return _objectSpread(_objectSpread({}, state), {}, {
          stateID: snapshot.getID_INTERNAL()
        });
      });
    });
  }, [storeRef]);
}

function useSetUnvalidatedAtomValues() {
  const storeRef = useStoreRef$1();
  return (values, transactionMetadata = {}) => {
    batchUpdates$2(() => {
      storeRef.current.addTransactionMetadata(transactionMetadata);
      values.forEach((value, key) => setUnvalidatedRecoilValue$1(storeRef.current, new AbstractRecoilValue$2(key), value));
    });
  };
}

class Sentinel {}

const SENTINEL = new Sentinel();

function useRecoilCallback(fn, deps) {
  const storeRef = useStoreRef$1();
  const gotoSnapshot = useGotoRecoilSnapshot();
  return useCallback((...args) => {
    // Use currentTree for the snapshot to show the currently committed state
    const snapshot = cloneSnapshot$1(storeRef.current);

    function set(recoilState, newValueOrUpdater) {
      setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
    }

    function reset(recoilState) {
      setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    }

    let ret = SENTINEL;
    batchUpdates$2(() => {
      // flowlint-next-line unclear-type:off
      ret = fn({
        set,
        reset,
        snapshot,
        gotoSnapshot
      })(...args);
    });
    !!(ret instanceof Sentinel) ? false ? undefined : Recoil_invariant(false) : void 0;
    return ret;
  }, deps != null ? [...deps, storeRef] : undefined // eslint-disable-line fb-www/react-hooks-deps
  );
}

var Recoil_Hooks = {
  recoilComponentGetRecoilValueCount_FOR_TESTING,
  useGotoRecoilSnapshot,
  useRecoilCallback,
  useRecoilInterface: useRecoilInterface_DEPRECATED,
  useRecoilSnapshot,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilTransactionObserver,
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState,
  useSetUnvalidatedAtomValues,
  useTransactionObservation_DEPRECATED,
  useTransactionSubscription_DEPRECATED: useTransactionSubscription
};
const {
  useMemo: useMemo$2
} = react;
const {
  RecoilRoot: RecoilRoot$1,
  useStoreRef: useStoreRef$2
} = Recoil_RecoilRoot_react;

function useRecoilBridgeAcrossReactRoots() {
  const store = useStoreRef$2().current;
  return useMemo$2(() => {
    function RecoilBridge({
      children
    }) {
      return /*#__PURE__*/react.createElement(RecoilRoot$1, {
        store_INTERNAL: store
      }, children);
    }

    return RecoilBridge;
  }, [store]);
}

var Recoil_useRecoilBridgeAcrossReactRoots = useRecoilBridgeAcrossReactRoots;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// Split declaration and implementation to allow this function to pretend to
// check for actual instance of Promise instead of something with a `then`
// method.
// eslint-disable-next-line no-redeclare

function isPromise(p) {
  return !!p && typeof p.then === 'function';
}

var Recoil_isPromise = isPromise; // TODO Convert Loadable to a Class to allow for runtime type detection.
// Containing static factories of withValue(), withError(), withPromise(), and all()

const loadableAccessors = {
  /**
   * if loadable has a value (state === 'hasValue'), return that value.
   * Otherwise, throw the (unwrapped) promise or the error.
   */
  getValue() {
    if (this.state === 'loading' && Recoil_gkx_1('recoil_async_selector_refactor')) {
      throw this.contents.then(({
        __value
      }) => __value);
    }

    if (this.state !== 'hasValue') {
      throw this.contents;
    }

    return this.contents;
  },

  toPromise() {
    return this.state === 'hasValue' ? Promise.resolve(this.contents) : this.state === 'hasError' ? Promise.reject(this.contents) : Recoil_gkx_1('recoil_async_selector_refactor') ? this.contents.then(({
      __value
    }) => __value) : this.contents;
  },

  valueMaybe() {
    return this.state === 'hasValue' ? this.contents : undefined;
  },

  valueOrThrow() {
    if (this.state !== 'hasValue') {
      throw new Error(`Loadable expected value, but in "${this.state}" state`);
    }

    return this.contents;
  },

  errorMaybe() {
    return this.state === 'hasError' ? this.contents : undefined;
  },

  errorOrThrow() {
    if (this.state !== 'hasError') {
      throw new Error(`Loadable expected error, but in "${this.state}" state`);
    }

    return this.contents;
  },

  promiseMaybe() {
    return this.state === 'loading' ? Recoil_gkx_1('recoil_async_selector_refactor') ? this.contents.then(({
      __value
    }) => __value) : this.contents : undefined;
  },

  promiseOrThrow() {
    if (this.state !== 'loading') {
      throw new Error(`Loadable expected promise, but in "${this.state}" state`);
    }

    return Recoil_gkx_1('recoil_async_selector_refactor') ? this.contents.then(({
      __value
    }) => __value) : this.contents;
  },

  // TODO Unit tests
  // TODO Convert Loadable to a Class to better support chaining
  //      by returning a Loadable from a map function
  map(map) {
    if (this.state === 'hasError') {
      return this;
    }

    if (this.state === 'hasValue') {
      try {
        const next = map(this.contents); // TODO if next instanceof Loadable, then return next

        return Recoil_isPromise(next) ? loadableWithPromise(next) : loadableWithValue(next);
      } catch (e) {
        return Recoil_isPromise(e) ? // If we "suspended", then try again.
        // errors and subsequent retries will be handled in 'loading' case
        loadableWithPromise(e.next(() => map(this.contents))) : loadableWithError(e);
      }
    }

    if (this.state === 'loading') {
      return loadableWithPromise(this.contents // TODO if map returns a loadable, then return the value or promise or throw the error
      .then(map).catch(e => {
        if (Recoil_isPromise(e)) {
          // we were "suspended," try again
          return e.then(() => map(this.contents));
        }

        throw e;
      }));
    }

    throw new Error('Invalid Loadable state');
  }

};

function loadableWithValue(value) {
  // Build objects this way since Flow doesn't support disjoint unions for class properties
  return Object.freeze(_objectSpread({
    state: 'hasValue',
    contents: value
  }, loadableAccessors));
}

function loadableWithError(error) {
  return Object.freeze(_objectSpread({
    state: 'hasError',
    contents: error
  }, loadableAccessors));
}

function loadableWithPromise(promise) {
  return Object.freeze(_objectSpread({
    state: 'loading',
    contents: promise
  }, loadableAccessors));
}

function loadableLoading() {
  return loadableWithPromise(new Promise(() => {}));
}

function loadableAll(inputs) {
  return inputs.every(i => i.state === 'hasValue') ? loadableWithValue(inputs.map(i => i.contents)) : inputs.some(i => i.state === 'hasError') ? loadableWithError( // $FlowIssue[incompatible-call] #44070740 Array.find should refine parameter
  Recoil_nullthrows(inputs.find(i => i.state === 'hasError'), 'Invalid loadable passed to loadableAll').contents) : loadableWithPromise(Recoil_gkx_1('recoil_async_selector_refactor') ? Promise.all(inputs.map(i => i.contents)).then(value => ({
    __value: value
  })) : Promise.all(inputs.map(i => i.contents)));
}

var Recoil_Loadable = {
  loadableWithValue,
  loadableWithError,
  loadableWithPromise,
  loadableLoading,
  loadableAll
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const ARRAY_BUFFER_VIEW_TYPES = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, DataView];

function isArrayBufferView(value) {
  for (const type of ARRAY_BUFFER_VIEW_TYPES) {
    if (value instanceof type) {
      return true;
    }
  }

  return false;
}

var Recoil_isArrayBufferView = isArrayBufferView;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function isNode(object) {
  var _ownerDocument, _doc$defaultView;

  if (true) {
    return false;
  }

  const doc = object != null ? (_ownerDocument = object.ownerDocument) !== null && _ownerDocument !== void 0 ? _ownerDocument : object : document;
  const defaultView = (_doc$defaultView = doc.defaultView) !== null && _doc$defaultView !== void 0 ? _doc$defaultView : window;
  return !!(object != null && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

var Recoil_isNode = isNode;
const isSSR = true;
const isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative'; // eslint-disable-line fb-www/typeof-undefined

function shouldNotBeFrozen(value) {
  // Primitives and functions:
  if (value === null || typeof value !== 'object') {
    return true;
  } // React elements:


  switch (typeof value.$$typeof) {
    case 'symbol':
      return true;

    case 'number':
      return true;
  } // Immutable structures:


  if (value['@@__IMMUTABLE_ITERABLE__@@'] != null || value['@@__IMMUTABLE_KEYED__@@'] != null || value['@@__IMMUTABLE_INDEXED__@@'] != null || value['@@__IMMUTABLE_ORDERED__@@'] != null || value['@@__IMMUTABLE_RECORD__@@'] != null) {
    return true;
  } // DOM nodes:


  if (Recoil_isNode(value)) {
    return true;
  }

  if (Recoil_isPromise(value)) {
    return true;
  }

  if (Recoil_isArrayBufferView(value)) {
    return true;
  } // Some environments, just as Jest, don't work with the instanceof check


  if (!isSSR && !isReactNative && ( // $FlowFixMe Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  value === window || value instanceof Window)) {
    return true;
  }

  return false;
} // Recursively freeze a value to enforce it is read-only.
// This may also have minimal performance improvements for enumerating
// objects (based on browser implementations, of course)


function deepFreezeValue(value) {
  if (typeof value !== 'object' || shouldNotBeFrozen(value)) {
    return;
  }

  Object.freeze(value); // Make all properties read-only

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      const prop = value[key]; // Prevent infinite recurssion for circular references.

      if (typeof prop === 'object' && prop != null && !Object.isFrozen(prop)) {
        deepFreezeValue(prop);
      }
    }
  }

  Object.seal(value); // This also makes existing properties non-configurable.
}

var Recoil_deepFreezeValue = deepFreezeValue;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// cache implementation that only stores the most recent entry
// based on key reference equality

function cacheMostRecent() {
  let mostRecentKey;
  let mostRecentValue;
  const cache = {
    get: key => key === mostRecentKey ? mostRecentValue : undefined,
    set: (key, value) => {
      mostRecentKey = key;
      mostRecentValue = value;
      return cache;
    }
  };
  return cache;
}

var Recoil_cacheMostRecent = cacheMostRecent;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Implements (a subset of) the interface of built-in Map but supports arrays as
 * keys. Two keys are equal if corresponding elements are equal according to the
 * equality semantics of built-in Map. Operations are at worst O(n*b) where n is
 * the array length and b is the complexity of the built-in operation.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const LEAF = Symbol('ArrayKeyedMap');
const emptyMap = new Map();

class ArrayKeyedMap {
  constructor(existing) {
    _defineProperty(this, "_base", new Map());

    if (existing instanceof ArrayKeyedMap) {
      for (const [k, v] of existing.entries()) {
        this.set(k, v);
      }
    } else if (existing) {
      for (const [k, v] of existing) {
        this.set(k, v);
      }
    }

    return this;
  }

  get(key) {
    const ks = Array.isArray(key) ? key : [key];
    let map = this._base;
    ks.forEach(k => {
      var _map$get;

      map = (_map$get = map.get(k)) !== null && _map$get !== void 0 ? _map$get : emptyMap;
    });
    return map === undefined ? undefined : map.get(LEAF);
  }

  set(key, value) {
    const ks = Array.isArray(key) ? key : [key];
    let map = this._base;
    let next = map;
    ks.forEach(k => {
      next = map.get(k);

      if (!next) {
        next = new Map();
        map.set(k, next);
      }

      map = next;
    });
    next.set(LEAF, value);
    return this;
  }

  delete(key) {
    const ks = Array.isArray(key) ? key : [key];
    let map = this._base;
    let next = map;
    ks.forEach(k => {
      next = map.get(k);

      if (!next) {
        next = new Map();
        map.set(k, next);
      }

      map = next;
    });
    next.delete(LEAF); // TODO We could cleanup empty maps

    return this;
  }

  entries() {
    const answer = [];

    function recurse(level, prefix) {
      level.forEach((v, k) => {
        if (k === LEAF) {
          answer.push([prefix, v]);
        } else {
          recurse(v, prefix.concat(k));
        }
      });
    }

    recurse(this._base, []);
    return answer.values();
  }

  toBuiltInMap() {
    return new Map(this.entries());
  }

}

var Recoil_ArrayKeyedMap = {
  ArrayKeyedMap
};
var Recoil_ArrayKeyedMap_1 = Recoil_ArrayKeyedMap.ArrayKeyedMap;
var Recoil_ArrayKeyedMap$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ArrayKeyedMap: Recoil_ArrayKeyedMap_1
});
const {
  ArrayKeyedMap: ArrayKeyedMap$1
} = Recoil_ArrayKeyedMap$1;

function cacheWithReferenceEquality() {
  return new ArrayKeyedMap$1();
}

var Recoil_cacheWithReferenceEquality = cacheWithReferenceEquality;
const TIME_WARNING_THRESHOLD_MS = 15;

function stringify(x, opt, key) {
  // A optimization to avoid the more expensive JSON.stringify() for simple strings
  // This may lose protection for u2028 and u2029, though.
  if (typeof x === 'string' && !x.includes('"') && !x.includes('\\')) {
    return `"${x}"`;
  } // Handle primitive types


  switch (typeof x) {
    case 'undefined':
      return '';
    // JSON.stringify(undefined) returns undefined, but we always want to return a string

    case 'boolean':
      return x ? 'true' : 'false';

    case 'number':
    case 'symbol':
      // case 'bigint': // BigInt is not supported in www
      return String(x);

    case 'string':
      // Add surrounding quotes and escape internal quotes
      return JSON.stringify(x);

    case 'function':
      if ((opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true) {
        throw new Error('Attempt to serialize function in a Recoil cache key');
      }

      return `__FUNCTION(${x.name})__`;
  }

  if (x === null) {
    return 'null';
  } // Fallback case for unknown types


  if (typeof x !== 'object') {
    var _JSON$stringify;

    return (_JSON$stringify = JSON.stringify(x)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '';
  } // Deal with all promises as equivalent for now.


  if (Recoil_isPromise(x)) {
    return '__PROMISE__';
  } // Arrays handle recursive stringification


  if (Array.isArray(x)) {
    return `[${x.map((v, i) => stringify(v, opt, i.toString()))}]`;
  } // If an object defines a toJSON() method, then use that to override the
  // serialization.  This matches the behavior of JSON.stringify().
  // Pass the key for compatibility.
  // Immutable.js collections define this method to allow us to serialize them.


  if (typeof x.toJSON === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(x.toJSON(key), opt, key);
  } // For built-in Maps, sort the keys in a stable order instead of the
  // default insertion order.  Support non-string keys.


  if (x instanceof Map) {
    const obj = {};

    for (const [k, v] of x) {
      // Stringify will escape any nested quotes
      obj[typeof k === 'string' ? k : stringify(k, opt)] = v;
    }

    return stringify(obj, opt, key);
  } // For built-in Sets, sort the keys in a stable order instead of the
  // default insertion order.


  if (x instanceof Set) {
    return stringify(Array.from(x).sort((a, b) => stringify(a, opt).localeCompare(stringify(b, opt))), opt, key);
  } // Anything else that is iterable serialize as an Array.


  if (x[Symbol.iterator] != null && typeof x[Symbol.iterator] === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(Array.from(x), opt, key);
  } // For all other Objects, sort the keys in a stable order.


  return `{${Object.keys(x).filter(key => x[key] !== undefined).sort() // stringify the key to add quotes and escape any nested slashes or quotes.
  .map(key => `${stringify(key, opt)}:${stringify(x[key], opt, key)}`).join(',')}}`;
} // Utility similar to JSON.stringify() except:
// * Serialize built-in Sets as an Array
// * Serialize built-in Maps as an Object.  Supports non-string keys.
// * Serialize other iterables as arrays
// * Sort the keys of Objects and Maps to have a stable order based on string conversion.
//    This overrides their default insertion order.
// * Still uses toJSON() of any object to override serialization
// * Support Symbols (though don't guarantee uniqueness)
// * We could support BigInt, but Flow doesn't seem to like it.
// See Recoil_stableStringify-test.js for examples


function stableStringify(x, opt = {
  allowFunctions: false
}) {
  if (false) {}

  return stringify(x, opt);
}

var Recoil_stableStringify = stableStringify; // If we do profile and find the key equality check is expensive,
// we could always try to optimize..  Something that comes to mind is having
// each check assign an incrementing index to each reference that maps to the
// value equivalency.  Then, if an object already has an index, the comparison
// check/lookup would be trivial and the string serialization would only need
// to be done once per object instance.  Just a thought..
// Cache implementation to use value equality for keys instead of the default
// reference equality.  This allows different instances of dependency values to
// be used.  Normally this is not needed, as dependent atoms/selectors will
// themselves be cached and always return the same instance.  However, if
// different params or upstream values for those dependencies could produce
// equivalent values or they have a custom cache implementation, then this
// implementation may be needed.  The downside with this approach is that it
// takes longer to compute the value equivalence vs simple reference equality.

function cacheWithValueEquality() {
  const map = new Map();
  const cache = {
    get: key => map.get(Recoil_stableStringify(key)),
    set: (key, value) => {
      map.set(Recoil_stableStringify(key), value);
      return cache;
    },
    map // For debugging

  };
  return cache;
}

var Recoil_cacheWithValueEquality = cacheWithValueEquality;
/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function nodeCacheMostRecent() {
  let mostRecent;
  return {
    get: (getNodeValue, handlers) => {
      if (mostRecent === undefined) {
        return undefined;
      }

      for (const [nodeKey, nodeValue] of mostRecent.route) {
        var _handlers$onCacheHit;

        if (getNodeValue(nodeKey) !== nodeValue) {
          return undefined;
        }

        handlers === null || handlers === void 0 ? void 0 : (_handlers$onCacheHit = handlers.onCacheHit) === null || _handlers$onCacheHit === void 0 ? void 0 : _handlers$onCacheHit.call(handlers, nodeKey);
      }

      return mostRecent.value;
    },
    set: (route, value) => {
      mostRecent = {
        route,
        value
      };
    },
    getRoot: () => mostRecent
  };
}

var Recoil_nodeCacheMostRecent = nodeCacheMostRecent;

function setInTreeCache(root, route, result) {
  if (root == null) {
    if (route.length === 0) {
      return {
        type: 'result',
        result
      };
    } else {
      const [path, ...rest] = route;
      const [nodeKey, value] = path;
      const ret = {
        type: 'branch',
        nodeKey,
        branches: new Map([[value, setInTreeCache(null, rest, result)]])
      };
      return ret;
    }
  } else {
    if (route.length === 0) {
      !(root.type === 'result') ? false ? undefined : Recoil_invariant(false) : void 0;

      if (root.result && root.result.state === 'loading') {
        const ret = {
          type: 'result',
          result
        };
        return ret;
      } else {
        !(root.result === result) ? false ? undefined : Recoil_invariant(false) : void 0;
        const ret = root;
        return ret;
      }
    } else {
      const [path, ...rest] = route;
      const [nodeKey, value] = path;
      !(root.type === 'branch') ? false ? undefined : Recoil_invariant(false) : void 0;
      !(root.nodeKey === nodeKey) ? false ? undefined : Recoil_invariant(false) : void 0;
      root.branches.set(value, setInTreeCache(root.branches.get(value), rest, result));
      return root;
    }
  }
}

function getFromTreeCache(root, getNodeValue, handlers) {
  var _handlers$onCacheHit;

  if (root == null) {
    return undefined;
  }

  if (root.type === 'result') {
    return root.result;
  }

  handlers === null || handlers === void 0 ? void 0 : (_handlers$onCacheHit = handlers.onCacheHit) === null || _handlers$onCacheHit === void 0 ? void 0 : _handlers$onCacheHit.call(handlers, root.nodeKey);
  const nodeValue = getNodeValue(root.nodeKey);
  return getFromTreeCache(root.branches.get(nodeValue), getNodeValue, handlers);
}

var Recoil_TreeNodeCache = {
  setInTreeCache,
  getFromTreeCache
};
const {
  getFromTreeCache: getFromTreeCache$1,
  setInTreeCache: setInTreeCache$1
} = Recoil_TreeNodeCache;

function treeCacheReferenceEquality() {
  let treeRoot;
  return {
    get: (getNodeValue, handlers) => getFromTreeCache$1(treeRoot, getNodeValue, handlers),
    set: (route, result) => {
      treeRoot = setInTreeCache$1(treeRoot, route, result);
    },
    getRoot: () => treeRoot
  };
}

var Recoil_treeCacheReferenceEquality = treeCacheReferenceEquality;
const {
  getFromTreeCache: getFromTreeCache$2,
  setInTreeCache: setInTreeCache$2
} = Recoil_TreeNodeCache;

function treeCacheValueEquality() {
  let treeRoot;
  return {
    get: (getNodeValue, handlers) => getFromTreeCache$2(treeRoot, nodeKey => Recoil_stableStringify(getNodeValue(nodeKey)), handlers),
    set: (route, result) => {
      treeRoot = setInTreeCache$2(treeRoot, route.map(([nodeKey, nodeValue]) => [nodeKey, Recoil_stableStringify(nodeValue)]), result);
    },
    getRoot: () => treeRoot
  };
}

var Recoil_treeCacheValueEquality = treeCacheValueEquality;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is a stub for some integration into FB internal stuff
 */

function startPerfBlock(_id) {
  return () => null;
}

var Recoil_PerformanceTimings = {
  startPerfBlock
};
const {
  loadableWithError: loadableWithError$1,
  loadableWithPromise: loadableWithPromise$1,
  loadableWithValue: loadableWithValue$1
} = Recoil_Loadable;
const {
  getNodeLoadable: getNodeLoadable$2,
  peekNodeLoadable: peekNodeLoadable$2,
  setNodeValue: setNodeValue$3
} = Recoil_FunctionalCore;
const {
  saveDependencyMapToStore: saveDependencyMapToStore$3
} = Recoil_Graph;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$3,
  RecoilValueNotReady: RecoilValueNotReady$2,
  registerNode: registerNode$1
} = Recoil_Node;
const {
  isRecoilValue: isRecoilValue$3
} = Recoil_RecoilValue$1;
const {
  AbstractRecoilValue: AbstractRecoilValue$3
} = Recoil_RecoilValue$1;
const {
  setRecoilValueLoadable: setRecoilValueLoadable$2
} = Recoil_RecoilValueInterface;
const {
  startPerfBlock: startPerfBlock$1
} = Recoil_PerformanceTimings; // flowlint-next-line unclear-type:off

const emptySet$1 = Object.freeze(new Set());
const dependencyStack = []; // for detecting circular dependencies.

const waitingStores = new Map();
/* eslint-disable no-redeclare */

const getNewExecutionId = (() => {
  let executionId = 0;
  return () => executionId++;
})();

function getInitialExecutionInfo() {
  return {
    depValuesDiscoveredSoFarDuringAsyncWork: null,
    latestLoadable: null,
    latestExecutionId: null,
    stateVersion: null
  };
}

function selector(options) {
  const {
    key,
    get,
    cacheImplementation_UNSTABLE: cacheImplementation
  } = options;
  const set = options.set != null ? options.set : undefined; // flow

  /**
   * HACK: doing this as a way to map given cache to corresponding tree cache
   */

  const cache = cacheImplementation === Recoil_cacheWithReferenceEquality ? Recoil_treeCacheReferenceEquality() : cacheImplementation === Recoil_cacheWithValueEquality ? Recoil_treeCacheValueEquality() : cacheImplementation === Recoil_cacheMostRecent ? Recoil_nodeCacheMostRecent() : Recoil_treeCacheReferenceEquality();
  const executionInfo = getInitialExecutionInfo();

  function initSelector(store) {
    store.getState().knownSelectors.add(key);
  }

  function notifyStoreWhenAsyncSettles(store, loadable, executionId) {
    if (loadable.state === 'loading') {
      let stores = waitingStores.get(executionId);

      if (stores == null) {
        waitingStores.set(executionId, stores = new Set());
      }

      stores.add(store);
    }
  }
  /**
   * FIXME: we should keep track of latest execution id _per store_ and update
   * the stores accordingly.
   */


  function notifyStoresOfSettledAsync(newLoadable, executionId) {
    const stores = waitingStores.get(executionId);

    if (stores !== undefined) {
      for (const store of stores) {
        setRecoilValueLoadable$2(store, new AbstractRecoilValue$3(key), newLoadable);
      }

      waitingStores.delete(executionId);
    }
  }

  function getCachedNodeLoadable(store, state, key) {
    if (state.atomValues.has(key)) {
      return [new Map(), Recoil_nullthrows(state.atomValues.get(key))];
    }

    const [, loadable] = getNodeLoadable$2(store, state, key);
    const isKeyPointingToSelector = store.getState().knownSelectors.has(key);

    if (loadable.state !== 'loading' && isKeyPointingToSelector) {
      state.atomValues.set(key, loadable);
    }

    return [new Map(), loadable];
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * returned from a selector's get() (either explicitly or implicitly by
   * running a function that uses the "async" keyword). If a selector's get()
   * returns a promise, we have two possibilities:
   *
   * 1. The promise will resolve, in which case it will have completely finished
   *    executing without any remaining pending dependencies. No more retries
   *    are needed and we can proceed with updating the cache and notifying
   *    subscribers (if it is the latest execution, otherwise only the cache
   *    will be updated and subscriptions will not be fired). This is the case
   *    handled by the attached then() handler.
   *
   * 2. The promise will throw because it either has an error or it came across
   *    an async dependency that has not yet resolved, in which case we will
   *    call wrapDepdencyPromise(), whose responsibility is to handle dependency
   *    promises. This case is handled by the attached catch() handler.
   *
   * Both branches will eventually resolve to the final result of the selector
   * (or an error if a real error occurred).
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was thrown--AKA a
   * dependency promise. Dependency promises should be passed to
   * wrapPendingDependencyPromise()).
   */


  function wrapPendingPromise(store, promise, state, depValues, executionId) {
    return promise.then(value => {
      const loadable = loadableWithValue$1(value);
      maybeFreezeValue(value);
      setCache(state, depValuesToDepRoute(depValues), loadable);
      setLoadableInStoreToNotifyDeps(loadable, executionId);
      return {
        __value: value,
        __key: key
      };
    }).catch(errorOrPromise => {
      if (isLatestExecution(executionId)) {
        updateExecutionInfoDepValues(depValues, executionId);
      }

      if (Recoil_isPromise(errorOrPromise)) {
        return wrapPendingDependencyPromise(store, errorOrPromise, state, depValues, executionId);
      }

      const loadable = loadableWithError$1(errorOrPromise);
      maybeFreezeValue(errorOrPromise);
      setCache(state, depValuesToDepRoute(depValues), loadable);
      setLoadableInStoreToNotifyDeps(loadable, executionId);
      throw errorOrPromise;
    });
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * thrown from a selector's get(). If a selector's get() throws a promise,
   * we have two possibilities:
   *
   * 1. The promise will resolve, meaning one of our selector's dependencies is
   *    now available and we should "retry" our get() by running it again. This
   *    is the case handled by the attached then() handler.
   *
   * 2. The promise will throw because something went wrong with the dependency
   *    promise (in other words a real error occurred). This case is handled by
   *    the attached catch() handler. If the dependency promise throws, it is
   *    _always_ a real error and not another dependency promise (any dependency
   *    promises would have been handled upstream).
   *
   * The then() branch will eventually resolve to the final result of the
   * selector (or an error if a real error occurs), and the catch() will always
   * resolve to an error because the dependency promise is a promise that was
   * wrapped upstream, meaning it will only resolve to its real value or to a
   * real error.
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was returned from
   * get(). The intention is that this function is only passed promises that
   * were thrown due to a pending dependency. Promises returned by get() should
   * be passed to wrapPendingPromise() instead.
   */


  function wrapPendingDependencyPromise(store, promise, state, existingDeps, executionId) {
    return promise.then(resolvedDep => {
      const {
        __key: resolvedDepKey,
        __value: depValue
      } = resolvedDep;

      if (resolvedDepKey != null) {
        /**
         * Note for async atoms, this means we are changing the atom's value
         * in the store for the given version. This should be alright because
         * the version of state is now stale and a new version will have
         * already been triggered by the atom being resolved (see this logic
         * in Recoil_atom.js)
         */
        state.atomValues.set(resolvedDepKey, loadableWithValue$1(depValue));
      }

      const [loadable, depValues] = evaluateSelectorGetter(store, state, executionId);

      if (isLatestExecution(executionId)) {
        updateExecutionInfoDepValues(depValues, executionId);
      }

      maybeFreezeLoadableContents(loadable);

      if (loadable.state !== 'loading') {
        setCache(state, depValuesToDepRoute(depValues), loadable);
        setLoadableInStoreToNotifyDeps(loadable, executionId);
      }

      if (loadable.state === 'hasError') {
        throw loadable.contents;
      }

      if (loadable.state === 'hasValue') {
        return {
          __value: loadable.contents,
          __key: key
        };
      }
      /**
       * Returning promise here without wrapping as the wrapepr logic was
       * already done when we called evaluateSelectorGetter() to get this
       * loadable
       */


      return loadable.contents;
    }).catch(error => {
      const loadable = loadableWithError$1(error);
      maybeFreezeValue(error);
      setCache(state, depValuesToDepRoute(existingDeps), loadableWithError$1(error));
      setLoadableInStoreToNotifyDeps(loadable, executionId);
      throw error;
    });
  }

  function setLoadableInStoreToNotifyDeps(loadable, executionId) {
    if (isLatestExecution(executionId)) {
      setExecutionInfo(loadable);
      notifyStoresOfSettledAsync(loadable, executionId);
    }
  }

  function setDepsInStore(store, state, deps, executionId) {
    var _store$getState, _store$getState$curre, _store$getState2, _store$getState2$next;

    if (isLatestExecution(executionId) || state.version === ((_store$getState = store.getState()) === null || _store$getState === void 0 ? void 0 : (_store$getState$curre = _store$getState.currentTree) === null || _store$getState$curre === void 0 ? void 0 : _store$getState$curre.version) || state.version === ((_store$getState2 = store.getState()) === null || _store$getState2 === void 0 ? void 0 : (_store$getState2$next = _store$getState2.nextTree) === null || _store$getState2$next === void 0 ? void 0 : _store$getState2$next.version)) {
      var _store$getState$nextT, _store$getState3, _store$getState3$next;

      saveDependencyMapToStore$3(new Map([[key, deps]]), store, (_store$getState$nextT = (_store$getState3 = store.getState()) === null || _store$getState3 === void 0 ? void 0 : (_store$getState3$next = _store$getState3.nextTree) === null || _store$getState3$next === void 0 ? void 0 : _store$getState3$next.version) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree.version);
    }
  }

  function setNewDepInStore(store, state, deps, newDepKey, executionId) {
    deps.add(newDepKey);
    setDepsInStore(store, state, deps, executionId);
  }

  function evaluateSelectorGetter(store, state, executionId) {
    const endPerfBlock = startPerfBlock$1(key); // TODO T63965866: use execution ID here

    let result;
    let loadable;
    const depValues = new Map();
    /**
     * Starting a fresh set of deps that we'll be using to update state. We're
     * starting a new set versus adding it in existing state deps because
     * the version of state that we update deps for may be a more recent version
     * than the version the selector was called with. This is because the latest
     * execution will update the deps of the current/latest version of state (
     * this is safe to do because the fact that the selector is the latest
     * execution means the deps we discover below are our best guess at the
     * deps for the current/latest state in the store)
     */

    const deps = new Set();
    setDepsInStore(store, state, deps, executionId);

    function getRecoilValue(recoilValue) {
      const {
        key: depKey
      } = recoilValue;
      setNewDepInStore(store, state, deps, depKey, executionId);
      const [, depLoadable] = getCachedNodeLoadable(store, state, depKey);
      depValues.set(depKey, depLoadable);

      if (depLoadable.state === 'hasValue') {
        return depLoadable.contents;
      }

      throw depLoadable.contents;
    }

    try {
      result = get({
        get: getRecoilValue
      });
      result = isRecoilValue$3(result) ? getRecoilValue(result) : result;

      if (Recoil_isPromise(result)) {
        result = wrapPendingPromise(store, result, state, depValues, executionId).finally(endPerfBlock);
      } else {
        endPerfBlock();
      }
    } catch (errorOrDepPromise) {
      result = errorOrDepPromise;

      if (Recoil_isPromise(result)) {
        result = wrapPendingDependencyPromise(store, result, state, depValues, executionId).finally(endPerfBlock);
      } else {
        endPerfBlock();
      }
    }

    if (result instanceof Error) {
      loadable = loadableWithError$1(result);
    } else if (Recoil_isPromise(result)) {
      loadable = loadableWithPromise$1(result);
    } else {
      loadable = loadableWithValue$1(result);
    }

    maybeFreezeLoadableContents(loadable);
    return [loadable, depValues];
  }

  function getValFromCacheAndUpdatedDownstreamDeps(store, state) {
    var _store$getGraph$nodeD;

    if (state.atomValues.has(key)) {
      return state.atomValues.get(key);
    }

    const deps = new Set((_store$getGraph$nodeD = store.getGraph(state.version).nodeDeps.get(key)) !== null && _store$getGraph$nodeD !== void 0 ? _store$getGraph$nodeD : emptySet$1);
    setDepsInStore(store, state, deps, executionInfo.latestExecutionId);
    const cachedVal = cache.get(nodeKey => {
      const [, loadable] = getCachedNodeLoadable(store, state, nodeKey);
      return loadable.contents;
    }, {
      onCacheHit: nodeKey => {
        if (nodeKey !== key) {
          setNewDepInStore(store, state, deps, nodeKey, executionInfo.latestExecutionId);
        }
      }
    });
    return cachedVal;
  }
  /**
   * FIXME: dep keys should take into account the state of the loadable to
   * prevent the edge case where a loadable with an error and a loadable with
   * an error as a value are treated as the same thing incorrectly. For example
   * these two should be treated differently:
   *
   * selector({key: '', get: () => new Error('hi')});
   * selector({key: '', get () => {throw new Error('hi')}});
   *
   * With current implementation they are treated the same
   */


  function depValuesToDepRoute(depValues) {
    return Array.from(depValues.entries()).map(([key, valLoadable]) => [key, valLoadable.contents]);
  }

  function getValFromRunningNewExecutionAndUpdatedDeps(store, state) {
    const newExecutionId = getNewExecutionId();
    const [loadable, newDepValues] = evaluateSelectorGetter(store, state, newExecutionId);
    setExecutionInfo(loadable, newDepValues, newExecutionId, state);
    maybeSetCacheWithLoadable(state, depValuesToDepRoute(newDepValues), loadable);
    notifyStoreWhenAsyncSettles(store, loadable, newExecutionId);
    return loadable;
  }
  /**
   * Given a tree state, this function returns the "selector result", which is
   * defined as a size-2 tuple of [DependencyMap, Loadable<T>].
   *
   * The selector's get() function will only be re-evaluated if _both_ of the
   * following statements are true:
   *
   * 1. The current dep values from the given state produced a cache key that
   *    was not found in the cache.
   * 2. There is no currently running async execution OR there is an
   *    async execution that is running, but after comparing the dep values in
   *    the given state with the dep values that the execution has discovered so
   *    far we find that at least one dep value has changed, in which case we
   *    start a new execution (the previously running execution will continue to
   *    run to completion, but only the new execution will be deemed the
   *    'latest' execution, meaning it will be the only execution that will
   *    update global state when it is finished. Any non-latest executions will
   *    run to completion and update the selector cache but not global state).
   */


  function getSelectorValAndUpdatedDeps(store, state) {
    const cachedVal = getValFromCacheAndUpdatedDownstreamDeps(store, state);

    if (cachedVal != null) {
      setExecutionInfo(cachedVal);
      return cachedVal;
    } // FIXME: this won't work with custom caching b/c it uses separate cache


    if (asyncWorkIsInProgressAndDepsDiscoveredHaveNotChanged(store, state)) {
      notifyStoreWhenAsyncSettles(store, Recoil_nullthrows(executionInfo.latestLoadable), Recoil_nullthrows(executionInfo.latestExecutionId)); // FIXME: check after the fact to see if we made the right choice by waiting

      return Recoil_nullthrows(executionInfo.latestLoadable);
    }

    return getValFromRunningNewExecutionAndUpdatedDeps(store, state);
  }

  function asyncWorkIsInProgressAndDepsDiscoveredHaveNotChanged(store, state) {
    return executionInfo.latestLoadable != null && executionInfo.latestExecutionId != null && !haveAsyncDepsChanged(store, state);
  }

  const mapOfCheckedVersions = new Map();

  function haveAsyncDepsChanged(store, state) {
    var _executionInfo$depVal, _mapOfCheckedVersions;

    const oldDepValues = (_executionInfo$depVal = executionInfo.depValuesDiscoveredSoFarDuringAsyncWork) !== null && _executionInfo$depVal !== void 0 ? _executionInfo$depVal : new Map();
    const cachedDepValuesCheckedForThisVersion = Array(((_mapOfCheckedVersions = mapOfCheckedVersions.get(state.version)) !== null && _mapOfCheckedVersions !== void 0 ? _mapOfCheckedVersions : new Map()).entries());
    const isCachedVersionSame = mapOfCheckedVersions.has(state.version) && cachedDepValuesCheckedForThisVersion.length === oldDepValues.size && cachedDepValuesCheckedForThisVersion.every(([nodeKey, nodeVal]) => {
      return oldDepValues.get(nodeKey) === nodeVal;
    });

    if (oldDepValues == null || state.version === executionInfo.stateVersion || isCachedVersionSame) {
      return false;
    }

    mapOfCheckedVersions.set(state.version, new Map(oldDepValues));
    return Array.from(oldDepValues).some(([nodeKey, oldVal]) => {
      const [, loadable] = getCachedNodeLoadable(store, state, nodeKey);
      return loadable.contents !== oldVal.contents &&
      /**
       * FIXME: in the condition below we're making the assumption that a
       * dependency that goes from loading to having a value is always because
       * the dependency resolved to that value, so we don't count it as a dep
       * change as the normal retry loop will handle retrying in response to a
       * resolved async dep. This is an incorrect assumption for the edge case
       * where there is an async selector that is loading, and while it is
       * loading one of its dependencies changes, triggering a new execution,
       * and that new execution produces a value synchronously (we don't make
       * that assumption for asynchronous work b/c it's guaranteed that a
       * loadable that goes from 'loading' to 'loading' in a new loadable is
       * a dep change).
       */
      !(oldVal.state === 'loading' && loadable.state !== 'loading');
    });
  }
  /**
   * This function will update the selector's execution info when the selector
   * has either finished running an execution or has started a new execution. If
   * the given loadable is in a 'loading' state, the intention is that a new
   * execution has started. Otherwise, the intention is that an execution has
   * just finished.
   */


  function setExecutionInfo(loadable, depValues, newExecutionId, state) {
    if (loadable.state === 'loading') {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
      executionInfo.latestExecutionId = newExecutionId;
      executionInfo.latestLoadable = loadable;
      executionInfo.stateVersion = state === null || state === void 0 ? void 0 : state.version;
    } else {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = null;
      executionInfo.latestExecutionId = null;
      executionInfo.latestLoadable = null;
      executionInfo.stateVersion = null;
    }
  }
  /**
   * Conditionally updates the cache with a given loadable.
   *
   * We only cache loadables that are not loading because our cache keys are
   * based on dep values, which are in an unfinished state for loadables that
   * have a 'loading' state (new deps may be discovered while the selector
   * runs its async code). We never want to cache partial dependencies b/c it
   * could lead to errors, such as prematurely returning the result based on a
   * partial list of deps-- we need the full list of deps to ensure that we
   * are returning the correct result from cache.
   */


  function maybeSetCacheWithLoadable(state, depRoute, loadable) {
    if (loadable.state !== 'loading') {
      setCache(state, depRoute, loadable);
    }
  }

  function updateExecutionInfoDepValues(depValues, executionId) {
    if (isLatestExecution(executionId)) {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
    }
  }

  function isLatestExecution(executionId) {
    return executionId === executionInfo.latestExecutionId;
  }

  function maybeFreezeLoadableContents(loadable) {
    if (loadable.state !== 'loading') {
      maybeFreezeValue(loadable.contents);
    }
  }

  function maybeFreezeValue(val) {
    if (false) {}
  }

  function setCache(state, cacheRoute, loadable) {
    state.atomValues.set(key, loadable);
    cache.set(cacheRoute, loadable);
  }

  function detectCircularDependencies(fn) {
    if (dependencyStack.includes(key)) {
      const message = `Recoil selector has circular dependencies: ${dependencyStack.slice(dependencyStack.indexOf(key)).join(' \u2192 ')}`;
      return loadableWithError$1(new Error(message));
    }

    dependencyStack.push(key);

    try {
      return fn();
    } finally {
      dependencyStack.pop();
    }
  }

  function myPeek(store, state) {
    const cacheVal = cache.get(nodeKey => {
      const peek = peekNodeLoadable$2(store, state, nodeKey);
      return peek === null || peek === void 0 ? void 0 : peek.contents;
    });
    return cacheVal;
  }

  function myGet(store, state) {
    initSelector(store);
    return [new Map(), detectCircularDependencies(() => getSelectorValAndUpdatedDeps(store, state))];
  }

  function invalidate(state) {
    state.atomValues.delete(key);
  }

  if (set != null) {
    function mySet(store, state, newValue) {
      initSelector(store);
      const dependencyMap = new Map();
      const writes = new Map();

      function getRecoilValue({
        key
      }) {
        const [, loadable] = getCachedNodeLoadable(store, state, key);

        if (loadable.state === 'hasValue') {
          return loadable.contents;
        } else if (loadable.state === 'loading') {
          throw new RecoilValueNotReady$2(key);
        } else {
          throw loadable.contents;
        }
      }

      function setRecoilState(recoilState, valueOrUpdater) {
        const newValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
        // flowlint-next-line unclear-type:off
        valueOrUpdater(getRecoilValue(recoilState)) : valueOrUpdater;
        const [, upstreamWrites] = setNodeValue$3(store, state, recoilState.key, newValue);
        upstreamWrites.forEach((v, k) => writes.set(k, v));
      }

      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$3);
      }

      set({
        set: setRecoilState,
        get: getRecoilValue,
        reset: resetRecoilState
      }, newValue);
      return [dependencyMap, writes];
    }

    return registerNode$1({
      key,
      peek: myPeek,
      get: myGet,
      set: mySet,
      cleanUp: () => {},
      invalidate,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false
    });
  } else {
    return registerNode$1({
      key,
      peek: myPeek,
      get: myGet,
      cleanUp: () => {},
      invalidate,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false
    });
  }
}
/* eslint-enable no-redeclare */


var Recoil_selector_NEW = selector;
const {
  loadableWithError: loadableWithError$2,
  loadableWithPromise: loadableWithPromise$2,
  loadableWithValue: loadableWithValue$2
} = Recoil_Loadable;
const {
  getNodeLoadable: getNodeLoadable$3,
  peekNodeLoadable: peekNodeLoadable$3,
  setNodeValue: setNodeValue$4
} = Recoil_FunctionalCore;
const {
  addToDependencyMap: addToDependencyMap$1,
  mergeDepsIntoDependencyMap: mergeDepsIntoDependencyMap$1,
  saveDependencyMapToStore: saveDependencyMapToStore$4
} = Recoil_Graph;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$4,
  RecoilValueNotReady: RecoilValueNotReady$3,
  registerNode: registerNode$2
} = Recoil_Node;
const {
  AbstractRecoilValue: AbstractRecoilValue$4
} = Recoil_RecoilValue$1;
const {
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$3,
  isRecoilValue: isRecoilValue$4,
  setRecoilValueLoadable: setRecoilValueLoadable$3
} = Recoil_RecoilValueInterface;
const {
  startPerfBlock: startPerfBlock$2
} = Recoil_PerformanceTimings; // flowlint-next-line unclear-type:off

const emptySet$2 = Object.freeze(new Set());

function cacheKeyFromDepValues(depValues) {
  const answer = [];

  for (const key of Array.from(depValues.keys()).sort()) {
    const loadable = Recoil_nullthrows(depValues.get(key));
    answer.push(key);
    answer.push(loadable.state);
    answer.push(loadable.contents);
  }

  return answer;
}

const dependencyStack$1 = []; // for detecting circular dependencies.

const waitingStores$1 = new Map();
/* eslint-disable no-redeclare */

function selector$1(options) {
  const {
    key,
    get,
    cacheImplementation_UNSTABLE: cacheImplementation
  } = options;
  const set = options.set != null ? options.set : undefined; // flow

  let cache = cacheImplementation !== null && cacheImplementation !== void 0 ? cacheImplementation : Recoil_cacheWithReferenceEquality();

  function initSelector(store) {
    store.getState().knownSelectors.add(key);
  }

  function letStoreBeNotifiedWhenAsyncSettles(store, loadable) {
    if (loadable.state === 'loading') {
      let stores = waitingStores$1.get(loadable);

      if (stores === undefined) {
        waitingStores$1.set(loadable, stores = new Set());
      }

      stores.add(store);
    }
  }

  function notifyStoresOfSettledAsync(originalLoadable, newLoadable) {
    const stores = waitingStores$1.get(originalLoadable);

    if (stores !== undefined) {
      for (const store of stores) {
        setRecoilValueLoadable$3(store, new AbstractRecoilValue$4(key), newLoadable);
      }

      waitingStores$1.delete(originalLoadable);
    }
  }

  function putIntoCache(state, cacheKey, loadable) {
    if (loadable.state !== 'loading') {
      // Synchronous result
      if (false) {}
    } else {
      // Asynchronous result
      // When the promise resolves, we need to replace the loading state in the
      // cache and fire any external subscriptions to re-render with the new value.
      loadable.contents.then(result => {
        if (false) {}

        const newLoadable = loadableWithValue$2(result); // If the value is now resolved, then update the cache with the new value

        cache = cache.set(cacheKey, newLoadable); // TODO Potential optimization: I think this is updating the cache
        // with a cacheKey of the dep when it wasn't ready yet.  We could also
        // theoretically put the result in the cache for a cacheKey with the
        // dep resolved.  If we had some way of figuring out what that cacheKey was..
        // Note that this optimization would change the user visible behavior slightly,
        // see the unit test "useRecoilState - selector catching promise 2".
        // If the user catches and handles pending async dependencies, then returns
        // a promise that resolves when they are available there is a question if
        // the result of that promise should be the value of the selector, or if
        // the selector should re-evaluate when the dependency is available.
        // If the promise returned and the pending dependency resolve at different
        // times, then the behaviour is better defined, as in the unit test,
        // "useRecoilState - selector catching promise and resolving asynchronously"
        // Fire subscriptions to re-render any subscribed components with the new value.
        // The store uses the CURRENT state, not the old state from which
        // this was called.  That state likely doesn't have the subscriptions saved yet.
        // Note that we have to set the value for this key, not just notify
        // components, so that there will be a new version for useMutableSource.

        notifyStoresOfSettledAsync(loadable, newLoadable);
        return result;
      }).catch(error => {
        // TODO Figure out why we are catching promises here versus evaluateSelectorFunction
        // OH, I see why.  Ok, work on this.
        if (Recoil_isPromise(error)) {
          return error;
        }

        if (false) {} // The async value was rejected with an error.  Update the cache with
        // the error and fire subscriptions to re-render.


        const newLoadable = loadableWithError$2(error);
        cache = cache.set(cacheKey, newLoadable);
        notifyStoresOfSettledAsync(loadable, newLoadable);
        return error;
      });
    }

    cache = cache.set(cacheKey, loadable);

    if (loadable.state !== 'loading') {
      state.atomValues.set(key, loadable);
    }
  }

  function getFromCacheOrEvaluate(store, state) {
    var _store$getGraph$nodeD;

    const dependencyMap = new Map(); // First, get the current deps for this selector

    const currentDeps = (_store$getGraph$nodeD = store.getGraph(state.version).nodeDeps.get(key)) !== null && _store$getGraph$nodeD !== void 0 ? _store$getGraph$nodeD : emptySet$2;
    const depValues = new Map(Array.from(currentDeps).sort().map(depKey => {
      const [deps, loadable] = getNodeLoadable$3(store, state, depKey);
      mergeDepsIntoDependencyMap$1(deps, dependencyMap);
      saveDependencyMapToStore$4(dependencyMap, store, state.version);
      return [depKey, loadable];
    })); // Always cache and evaluate a selector
    // It may provide a result even when not all deps are available.

    const cacheKey = cacheKeyFromDepValues(depValues);
    const cached = cache.get(cacheKey);

    if (cached != null) {
      letStoreBeNotifiedWhenAsyncSettles(store, cached);
      return [dependencyMap, cached];
    } // Cache miss, compute the value


    const [deps, loadable, newDepValues] = evaluateSelectorFunction(store, state);
    mergeDepsIntoDependencyMap$1(deps, dependencyMap);
    saveDependencyMapToStore$4(dependencyMap, store, state.version); // Save result in cache

    const newCacheKey = cacheKeyFromDepValues(newDepValues);
    letStoreBeNotifiedWhenAsyncSettles(store, loadable);
    putIntoCache(state, newCacheKey, loadable);
    return [dependencyMap, loadable];
  }

  function evaluateSelectorFunction(store, state) {
    const endPerfBlock = startPerfBlock$2(key);
    const depValues = new Map(); // key -> value for our deps

    const dependencyMap = new Map(); // node -> nodes, part of overall dep map.

    function getRecoilValue({
      key: depKey
    }) {
      addToDependencyMap$1(key, depKey, dependencyMap);
      const [deps, loadable] = getNodeLoadable$3(store, state, depKey);
      depValues.set(depKey, loadable);
      mergeDepsIntoDependencyMap$1(deps, dependencyMap);
      saveDependencyMapToStore$4(dependencyMap, store, state.version);

      if (loadable.state === 'hasValue') {
        return loadable.contents;
      } else {
        throw loadable.contents; // Promise or error
      }
    }

    try {
      // The big moment!
      const output = get({
        get: getRecoilValue
      }); // TODO Allow user to also return Loadables for improved composability

      const result = isRecoilValue$4(output) ? getRecoilValue(output) : output;
      let loadable;

      if (!Recoil_isPromise(result)) {
        // The selector returned a simple synchronous value, so let's use it!
        endPerfBlock();
        loadable = loadableWithValue$2(result);
      } else {
        // The user returned a promise for an asynchronous selector.  This will
        // resolve to the proper value of the selector when available.
        loadable = loadableWithPromise$2(result.finally(endPerfBlock));
      }

      return [dependencyMap, loadable, depValues];
    } catch (errorOrDepPromise) {
      // XXX why was this changed to not use isPromise?
      const isP = errorOrDepPromise.then !== undefined;
      let loadable;

      if (!isP) {
        // There was a synchronous error in the evaluation
        endPerfBlock();
        loadable = loadableWithError$2(errorOrDepPromise);
      } else {
        // If an asynchronous dependency was not ready, then return a promise that
        // will resolve when we finally do have a real value or error for the selector.
        loadable = loadableWithPromise$2(errorOrDepPromise.then(() => {
          // Now that its deps are ready, re-evaluate the selector (and
          // record any newly-discovered dependencies in the Store):
          const loadable = getRecoilValueAsLoadable$3(store, new AbstractRecoilValue$4(key));

          if (loadable.state === 'hasError') {
            throw loadable.contents;
          } // Either the re-try provided a value, which we will use, or it
          // got blocked again.  In that case this is a promise and we'll try again.


          return loadable.contents;
        }).finally(endPerfBlock));
      }

      return [dependencyMap, loadable, depValues];
    }
  }

  function detectCircularDependencies(fn) {
    if (dependencyStack$1.includes(key)) {
      const message = `Recoil selector has circular dependencies: ${dependencyStack$1.slice(dependencyStack$1.indexOf(key)).join(' \u2192 ')}`;
      return [new Map(), loadableWithError$2(new Error(message))];
    }

    dependencyStack$1.push(key);

    try {
      return fn();
    } finally {
      dependencyStack$1.pop();
    }
  }

  function myPeek(store, state) {
    var _store$getGraph$nodeD2; // First, get the current deps for this selector


    const currentDeps = (_store$getGraph$nodeD2 = store.getGraph(state.version).nodeDeps.get(key)) !== null && _store$getGraph$nodeD2 !== void 0 ? _store$getGraph$nodeD2 : emptySet$2;
    const depValues = new Map(Array.from(currentDeps).sort().map(depKey => [depKey, peekNodeLoadable$3(store, state, depKey)]));
    const cacheDepValues = new Map();

    for (const [depKey, depValue] of depValues.entries()) {
      if (depValue == null) {
        return undefined;
      }

      cacheDepValues.set(depKey, depValue);
    } // Always cache and evaluate a selector
    // It may provide a result even when not all deps are available.


    const cacheKey = cacheKeyFromDepValues(cacheDepValues);
    return cache.get(cacheKey);
  }

  function invalidate(state) {
    state.atomValues.delete(key);
  }

  function myGet(store, state) {
    initSelector(store); // First-level cache: Have we already evaluated the selector since being
    // invalidated due to a dependency changing?

    const cached = state.atomValues.get(key);

    if (cached !== undefined) {
      return [new Map(), cached];
    } // Second-level cache based on looking up current dependencies in a map
    // and evaluating selector if missing.


    if (false) {} else {
      return getFromCacheOrEvaluate(store, state);
    }
  }

  if (set != null) {
    function mySet(store, state, newValue) {
      initSelector(store);
      const dependencyMap = new Map();
      const writes = new Map();

      function getRecoilValue({
        key
      }) {
        const [deps, loadable] = getNodeLoadable$3(store, state, key);
        mergeDepsIntoDependencyMap$1(deps, dependencyMap);

        if (loadable.state === 'hasValue') {
          return loadable.contents;
        } else if (loadable.state === 'loading') {
          throw new RecoilValueNotReady$3(key);
        } else {
          throw loadable.contents;
        }
      }

      function setRecoilState(recoilState, valueOrUpdater) {
        const newValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
        // flowlint-next-line unclear-type:off
        valueOrUpdater(getRecoilValue(recoilState)) : valueOrUpdater;
        const [deps, upstreamWrites] = setNodeValue$4(store, state, recoilState.key, newValue);
        mergeDepsIntoDependencyMap$1(deps, dependencyMap);
        upstreamWrites.forEach((v, k) => writes.set(k, v));
      }

      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$4);
      }

      set({
        set: setRecoilState,
        get: getRecoilValue,
        reset: resetRecoilState
      }, newValue);
      return [dependencyMap, writes];
    }

    return registerNode$2({
      key,
      peek: myPeek,
      get: myGet,
      set: mySet,
      invalidate,
      cleanUp: () => {},
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false
    });
  } else {
    return registerNode$2({
      key,
      peek: myPeek,
      get: myGet,
      invalidate,
      cleanUp: () => {},
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false
    });
  }
}
/* eslint-enable no-redeclare */


var Recoil_selector_OLD = selector$1;
const selector$2 = Recoil_gkx_1('recoil_async_selector_refactor') ? Recoil_selector_NEW : Recoil_selector_OLD;
var Recoil_selector = selector$2; // @fb-only: const {scopedAtom} = require('Recoil_ScopedAtom');

const {
  loadableWithError: loadableWithError$3,
  loadableWithPromise: loadableWithPromise$3,
  loadableWithValue: loadableWithValue$3
} = Recoil_Loadable;
const {
  DEFAULT_VALUE: DEFAULT_VALUE$5,
  DefaultValue: DefaultValue$2,
  registerNode: registerNode$3
} = Recoil_Node;
const {
  isRecoilValue: isRecoilValue$5
} = Recoil_RecoilValue$1;
const {
  markRecoilValueModified: markRecoilValueModified$1,
  setRecoilValue: setRecoilValue$3,
  setRecoilValueLoadable: setRecoilValueLoadable$4
} = Recoil_RecoilValueInterface;

function baseAtom(options) {
  const {
    key,
    persistence_UNSTABLE: persistence
  } = options;
  let defaultLoadable = Recoil_isPromise(options.default) ? loadableWithPromise$3(options.default.then(value => {
    defaultLoadable = loadableWithValue$3(value); // TODO Temporary disable Flow due to pending selector_NEW refactor

    const promiseInfo = {
      __key: key,
      __value: value
    };
    return promiseInfo;
  }).catch(error => {
    defaultLoadable = loadableWithError$3(error);
    throw error;
  })) : loadableWithValue$3(options.default);
  let cachedAnswerForUnvalidatedValue = undefined; // Cleanup handlers for this atom
  // Rely on stable reference equality of the store to use it as a key per <RecoilRoot>

  const cleanupEffectsByStore = new Map();

  function wrapPendingPromise(store, promise) {
    const wrappedPromise = promise.then(value => {
      var _store$getState$nextT, _state$atomValues$get;

      const state = (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree;

      if (((_state$atomValues$get = state.atomValues.get(key)) === null || _state$atomValues$get === void 0 ? void 0 : _state$atomValues$get.contents) === wrappedPromise) {
        setRecoilValue$3(store, node, value);
      }

      return {
        __key: key,
        __value: value
      };
    }).catch(error => {
      var _store$getState$nextT2, _state$atomValues$get2;

      const state = (_store$getState$nextT2 = store.getState().nextTree) !== null && _store$getState$nextT2 !== void 0 ? _store$getState$nextT2 : store.getState().currentTree;

      if (((_state$atomValues$get2 = state.atomValues.get(key)) === null || _state$atomValues$get2 === void 0 ? void 0 : _state$atomValues$get2.contents) === wrappedPromise) {
        setRecoilValueLoadable$4(store, node, loadableWithError$3(error));
      }

      throw error;
    });
    return wrappedPromise;
  }

  function initAtom(store, initState, trigger) {
    if (store.getState().knownAtoms.has(key)) {
      return;
    }

    store.getState().knownAtoms.add(key); // Setup async defaults to notify subscribers when they resolve

    if (defaultLoadable.state === 'loading') {
      function notifyDefaultSubscribers() {
        var _store$getState$nextT3;

        const state = (_store$getState$nextT3 = store.getState().nextTree) !== null && _store$getState$nextT3 !== void 0 ? _store$getState$nextT3 : store.getState().currentTree;

        if (!state.atomValues.has(key)) {
          markRecoilValueModified$1(store, node);
        }
      }

      defaultLoadable.contents.then(notifyDefaultSubscribers).catch(notifyDefaultSubscribers);
    } // Run Atom Effects
    // This state is scoped by Store, since this is in the initAtom() closure


    let initValue = DEFAULT_VALUE$5;
    let pendingSetSelf = null;

    if (options.effects_UNSTABLE != null) {
      let duringInit = true;

      const setSelf = effect => valueOrUpdater => {
        if (duringInit) {
          const currentValue = initValue instanceof DefaultValue$2 || Recoil_isPromise(initValue) ? defaultLoadable.state === 'hasValue' ? defaultLoadable.contents : DEFAULT_VALUE$5 : initValue;
          initValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict T from being a function without losing support for opaque types
          valueOrUpdater(currentValue) // flowlint-line unclear-type:off
          : valueOrUpdater;
        } else {
          if (Recoil_isPromise(valueOrUpdater)) {
            throw new Error('Setting atoms to async values is not implemented.');
          }

          if (typeof valueOrUpdater !== 'function') {
            pendingSetSelf = {
              effect,
              value: valueOrUpdater
            };
          }

          setRecoilValue$3(store, node, typeof valueOrUpdater === 'function' ? currentValue => {
            const newValue = // cast to any because we can't restrict T from being a function without losing support for opaque types
            valueOrUpdater(currentValue); // flowlint-line unclear-type:off

            pendingSetSelf = {
              effect,
              value: newValue
            };
            return newValue;
          } : valueOrUpdater);
        }
      };

      const resetSelf = effect => () => setSelf(effect)(DEFAULT_VALUE$5);

      const onSet = effect => handler => {
        store.subscribeToTransactions(currentStore => {
          var _pendingSetSelf3; // eslint-disable-next-line prefer-const


          let {
            currentTree,
            previousTree
          } = currentStore.getState();

          if (!previousTree) {
            Recoil_recoverableViolation('Transaction subscribers notified without a next tree being present -- this is a bug in Recoil');
            previousTree = currentTree; // attempt to trundle on
          }

          const newLoadable = currentTree.atomValues.get(key);

          if (newLoadable == null || newLoadable.state === 'hasValue') {
            var _previousTree$atomVal, _pendingSetSelf, _pendingSetSelf2;

            const newValue = newLoadable != null ? newLoadable.contents : DEFAULT_VALUE$5;
            const oldLoadable = (_previousTree$atomVal = previousTree.atomValues.get(key)) !== null && _previousTree$atomVal !== void 0 ? _previousTree$atomVal : defaultLoadable;
            const oldValue = oldLoadable.state === 'hasValue' ? oldLoadable.contents : DEFAULT_VALUE$5; // TODO This isn't actually valid, use as a placeholder for now.
            // Ignore atom value changes that were set via setSelf() in the same effect.
            // We will still properly call the handler if there was a subsequent
            // set from something other than an atom effect which was batched
            // with the `setSelf()` call.  However, we may incorrectly ignore
            // the handler if the subsequent batched call happens to set the
            // atom to the exact same value as the `setSelf()`.   But, in that
            // case, it was kind of a noop, so the semantics are debatable..

            if (((_pendingSetSelf = pendingSetSelf) === null || _pendingSetSelf === void 0 ? void 0 : _pendingSetSelf.effect) !== effect || ((_pendingSetSelf2 = pendingSetSelf) === null || _pendingSetSelf2 === void 0 ? void 0 : _pendingSetSelf2.value) !== newValue) {
              handler(newValue, oldValue);
            }
          }

          if (((_pendingSetSelf3 = pendingSetSelf) === null || _pendingSetSelf3 === void 0 ? void 0 : _pendingSetSelf3.effect) === effect) {
            pendingSetSelf = null;
          }
        }, key);
      };

      for (const effect of (_options$effects_UNST = options.effects_UNSTABLE) !== null && _options$effects_UNST !== void 0 ? _options$effects_UNST : []) {
        var _options$effects_UNST;

        const cleanup = effect({
          node,
          trigger,
          setSelf: setSelf(effect),
          resetSelf: resetSelf(effect),
          onSet: onSet(effect)
        });

        if (cleanup != null) {
          cleanupEffectsByStore.set(store, cleanup);
        }
      }

      duringInit = false;
    } // Mutate initial state in place since we know there are no other subscribers
    // since we are the ones initializing on first use.


    if (!(initValue instanceof DefaultValue$2)) {
      initState.atomValues.set(key, Recoil_isPromise(initValue) ? loadableWithPromise$3(wrapPendingPromise(store, initValue)) : loadableWithValue$3(initValue));
    }
  }

  function myPeek(_store, state) {
    var _ref, _state$atomValues$get3, _cachedAnswerForUnval;

    return (_ref = (_state$atomValues$get3 = state.atomValues.get(key)) !== null && _state$atomValues$get3 !== void 0 ? _state$atomValues$get3 : (_cachedAnswerForUnval = cachedAnswerForUnvalidatedValue) === null || _cachedAnswerForUnval === void 0 ? void 0 : _cachedAnswerForUnval[1]) !== null && _ref !== void 0 ? _ref : defaultLoadable;
  }

  function myGet(store, state) {
    initAtom(store, state, 'get');

    if (state.atomValues.has(key)) {
      // Atom value is stored in state:
      return [new Map(), Recoil_nullthrows(state.atomValues.get(key))];
    } else if (state.nonvalidatedAtoms.has(key)) {
      // Atom value is stored but needs validation before use.
      // We might have already validated it and have a cached validated value:
      if (cachedAnswerForUnvalidatedValue != null) {
        return cachedAnswerForUnvalidatedValue;
      }

      if (persistence == null) {
        Recoil_expectationViolation(`Tried to restore a persisted value for atom ${key} but it has no persistence settings.`);
        return [new Map(), defaultLoadable];
      }

      const nonvalidatedValue = state.nonvalidatedAtoms.get(key);
      const validatorResult = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$5);
      const validatedValueLoadable = validatorResult instanceof DefaultValue$2 ? defaultLoadable : loadableWithValue$3(validatorResult);
      cachedAnswerForUnvalidatedValue = [new Map(), validatedValueLoadable];
      return cachedAnswerForUnvalidatedValue;
    } else {
      return [new Map(), defaultLoadable];
    }
  }

  function myCleanup(store) {
    var _cleanupEffectsByStor;

    (_cleanupEffectsByStor = cleanupEffectsByStore.get(store)) === null || _cleanupEffectsByStor === void 0 ? void 0 : _cleanupEffectsByStor();
    cleanupEffectsByStore.delete(store);
  }

  function invalidate() {
    cachedAnswerForUnvalidatedValue = undefined;
  }

  function mySet(store, state, newValue) {
    initAtom(store, state, 'set'); // Bail out if we're being set to the existing value, or if we're being
    // reset but have no stored value (validated or unvalidated) to reset from:

    if (state.atomValues.has(key)) {
      const existing = Recoil_nullthrows(state.atomValues.get(key));

      if (existing.state === 'hasValue' && newValue === existing.contents) {
        return [new Map(), new Map()];
      }
    } else if (!state.nonvalidatedAtoms.has(key) && newValue instanceof DefaultValue$2) {
      return [new Map(), new Map()];
    }

    if (false) {}

    cachedAnswerForUnvalidatedValue = undefined; // can be released now if it was previously in use

    return [new Map(), new Map().set(key, loadableWithValue$3(newValue))];
  }

  const node = registerNode$3({
    key,
    peek: myPeek,
    get: myGet,
    set: mySet,
    cleanUp: myCleanup,
    invalidate,
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    persistence_UNSTABLE: options.persistence_UNSTABLE ? {
      type: options.persistence_UNSTABLE.type,
      backButton: options.persistence_UNSTABLE.backButton
    } : undefined,
    shouldRestoreFromSnapshots: true
  });
  return node;
} // prettier-ignore


function atom(options) {
  const {
    default: optionsDefault
  } = options,
        restOptions = _objectWithoutProperties(options, ["default"]);

  if (isRecoilValue$5(optionsDefault) // Continue to use atomWithFallback for promise defaults for scoped atoms
  // for now, since scoped atoms don't support async defaults
  // @fb-only: || (isPromise(optionsDefault) && scopeRules_APPEND_ONLY_READ_THE_DOCS)
  ) {
    return atomWithFallback(_objectSpread(_objectSpread({}, restOptions), {}, {
      default: optionsDefault // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,

    })); // @fb-only: } else if (scopeRules_APPEND_ONLY_READ_THE_DOCS && !isPromise(optionsDefault)) {
    // @fb-only: return scopedAtom<T>({
    // @fb-only: ...restOptions,
    // @fb-only: default: optionsDefault,
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    // @fb-only: });
  } else {
    return baseAtom(_objectSpread(_objectSpread({}, restOptions), {}, {
      default: optionsDefault
    }));
  }
}

function atomWithFallback(options) {
  const base = atom(_objectSpread(_objectSpread({}, options), {}, {
    default: DEFAULT_VALUE$5,
    persistence_UNSTABLE: options.persistence_UNSTABLE === undefined ? undefined : _objectSpread(_objectSpread({}, options.persistence_UNSTABLE), {}, {
      validator: storedValue => storedValue instanceof DefaultValue$2 ? storedValue : Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue, DEFAULT_VALUE$5)
    }),
    // TODO Hack for now.
    // flowlint-next-line unclear-type: off
    effects_UNSTABLE: options.effects_UNSTABLE
  }));
  return Recoil_selector({
    key: `${options.key}__withFallback`,
    get: ({
      get
    }) => {
      const baseValue = get(base);
      return baseValue instanceof DefaultValue$2 ? options.default : baseValue;
    },
    set: ({
      set
    }, newValue) => set(base, newValue),
    dangerouslyAllowMutability: options.dangerouslyAllowMutability
  });
}

var Recoil_atom = atom; // Keep in mind the parameter needs to be serializable as a cahche key
// using Recoil_stableStringify
// Add a unique index to each selector in case the cache implementation allows
// duplicate keys based on equivalent stringified parameters

let nextIndex = 0;
/* eslint-disable no-redeclare */
// Return a function that returns members of a family of selectors of the same type
// E.g.,
//
// const s = selectorFamily(...);
// s({a: 1}) => a selector
// s({a: 2}) => a different selector
//
// By default, the selectors are distinguished by distinct values of the
// parameter based on value equality, not reference equality.  This allows using
// object literals or other equivalent objects at callsites to not create
// duplicate cache entries.  This behavior may be overridden with the
// cacheImplementationForParams option.

function selectorFamily(options) {
  var _options$cacheImpleme, _options$cacheImpleme2;

  let selectorCache = (_options$cacheImpleme = (_options$cacheImpleme2 = options.cacheImplementationForParams_UNSTABLE) === null || _options$cacheImpleme2 === void 0 ? void 0 : _options$cacheImpleme2.call(options)) !== null && _options$cacheImpleme !== void 0 ? _options$cacheImpleme : Recoil_cacheWithValueEquality();
  return params => {
    var _stableStringify, _options$cacheImpleme3;

    const cachedSelector = selectorCache.get(params);

    if (cachedSelector != null) {
      return cachedSelector;
    }

    const myKey = `${options.key}__selectorFamily/${(_stableStringify = Recoil_stableStringify(params, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: true
    })) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'}/${nextIndex++}`; // Append index in case values serialize to the same key string

    const myGet = callbacks => options.get(params)(callbacks);

    const myCacheImplementation = (_options$cacheImpleme3 = options.cacheImplementation_UNSTABLE) === null || _options$cacheImpleme3 === void 0 ? void 0 : _options$cacheImpleme3.call(options);
    let newSelector;

    if (options.set != null) {
      const set = options.set;

      const mySet = (callbacks, newValue) => set(params)(callbacks, newValue);

      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        set: mySet,
        cacheImplementation_UNSTABLE: myCacheImplementation,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability
      });
    } else {
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        cacheImplementation_UNSTABLE: myCacheImplementation,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability
      });
    }

    selectorCache = selectorCache.set(params, newSelector);
    return newSelector;
  };
}
/* eslint-enable no-redeclare */


var Recoil_selectorFamily = selectorFamily; // @fb-only: const {parameterizedScopedAtomLegacy} = require('Recoil_ScopedAtom');

const {
  DEFAULT_VALUE: DEFAULT_VALUE$6,
  DefaultValue: DefaultValue$3
} = Recoil_Node;
/*
A function which returns an atom based on the input parameter.

Each unique parameter returns a unique atom. E.g.,

  const f = atomFamily(...);
  f({a: 1}) => an atom
  f({a: 2}) => a different atom

This allows components to persist local, private state using atoms.  Each
instance of the component may have a different key, which it uses as the
parameter for a family of atoms; in this way, each component will have
its own atom not shared by other instances.  These state keys may be composed
into children's state keys as well.
*/

function atomFamily(options) {
  let atomCache = Recoil_cacheWithValueEquality(); // An atom to represent any legacy atoms that we can upgrade to an atomFamily

  const legacyAtomOptions = {
    key: options.key,
    // Legacy atoms just used the plain key directly
    default: DEFAULT_VALUE$6,
    persistence_UNSTABLE: options.persistence_UNSTABLE
  };
  let legacyAtom; // prettier-ignore
  // @fb-only: if (
  // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS
  // @fb-only: ) {
  // @fb-only: legacyAtom = parameterizedScopedAtomLegacy<T | DefaultValue, P>({
  // @fb-only: ...legacyAtomOptions,
  // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS:
  // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
  // @fb-only: });
  // @fb-only: } else {

  legacyAtom = Recoil_atom(legacyAtomOptions); // @fb-only: }
  // Selector to calculate the default value based on any persisted legacy atoms
  // that were upgraded to a atomFamily

  const atomFamilyDefault = Recoil_selectorFamily({
    key: `${options.key}__atomFamily/Default`,
    get: param => ({
      get
    }) => {
      const legacyValue = get(typeof legacyAtom === 'function' ? legacyAtom(param) : legacyAtom); // Atom was upgraded from a non-parameterized atom

      if (!(legacyValue instanceof DefaultValue$3)) {
        return legacyValue;
      } // There's no legacy atom value, so use the user-specified default


      return typeof options.default === 'function' ? // The default was parameterized
      // Flow doesn't know that T isn't a function, so we need to case to any
      options.default(param) // flowlint-line unclear-type:off
      : // Default may be a static value, promise, or RecoilValue
      options.default;
    },
    dangerouslyAllowMutability: options.dangerouslyAllowMutability
  }); // Simple atomFamily implementation to cache individual atoms based
  // on the parameter value equality.

  return params => {
    var _stableStringify;

    const cachedAtom = atomCache.get(params);

    if (cachedAtom != null) {
      return cachedAtom;
    }

    const newAtom = Recoil_atom(_objectSpread(_objectSpread({}, options), {}, {
      key: `${options.key}__${(_stableStringify = Recoil_stableStringify(params)) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'}`,
      default: atomFamilyDefault(params),
      effects_UNSTABLE: typeof options.effects_UNSTABLE === 'function' ? options.effects_UNSTABLE(params) : options.effects_UNSTABLE // prettier-ignore
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
      // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: params,
      // @fb-only: )

    }));
    atomCache = atomCache.set(params, newAtom);
    return newAtom;
  };
}

var Recoil_atomFamily = atomFamily; // flowlint-next-line unclear-type:off

const constantSelector = Recoil_selectorFamily({
  key: '__constant',
  get: constant => () => constant,
  cacheImplementationForParams_UNSTABLE: Recoil_cacheWithReferenceEquality
}); // Function that returns a selector which always produces the
// same constant value.  It may be called multiple times with the
// same value, based on reference equality, and will provide the
// same selector.

function constSelector(constant) {
  return constantSelector(constant);
}

var Recoil_constSelector = constSelector; // flowlint-next-line unclear-type:off

const throwingSelector = Recoil_selectorFamily({
  key: '__error',
  get: message => () => {
    throw new Error(message);
  },
  cacheImplementationForParams_UNSTABLE: Recoil_cacheWithReferenceEquality
}); // Function that returns a selector which always throws an error
// with the provided message.

function errorSelector(message) {
  return throwingSelector(message);
}

var Recoil_errorSelector = errorSelector;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Wraps another recoil value and prevents writing to it.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function readOnlySelector(atom) {
  // flowlint-next-line unclear-type: off
  return atom;
}

var Recoil_readOnlySelector = readOnlySelector;
const {
  loadableWithError: loadableWithError$4,
  loadableWithPromise: loadableWithPromise$4,
  loadableWithValue: loadableWithValue$4
} = Recoil_Loadable; /////////////////
//  TRUTH TABLE
/////////////////
// Dependencies        waitForNone         waitForAny        waitForAll
//  [loading, loading]  [Promise, Promise]  Promise           Promise
//  [value, loading]    [value, Promise]    [value, Promise]  Promise
//  [value, value]      [value, value]      [value, value]    [value, value]
//
//  [error, loading]    [Error, Promise]    Promise           Error
//  [error, error]      [Error, Error]      Error             Error
//  [value, error]      [value, Error]      [value, Error]    Error
// Issue parallel requests for all dependencies and return the current
// status if they have results, have some error, or are still pending.

function concurrentRequests(getRecoilValue, deps) {
  const results = Array(deps.length).fill(undefined);
  const exceptions = Array(deps.length).fill(undefined);

  for (const [i, dep] of deps.entries()) {
    try {
      results[i] = getRecoilValue(dep);
    } catch (e) {
      // exceptions can either be Promises of pending results or real errors
      exceptions[i] = e;
    }
  }

  return [results, exceptions];
}

function isError(exp) {
  return exp != null && !Recoil_isPromise(exp);
}

function unwrapDependencies(dependencies) {
  return Array.isArray(dependencies) ? dependencies : Object.getOwnPropertyNames(dependencies).map(key => dependencies[key]);
}

function getValueFromLoadablePromiseResult(result) {
  if (result != null && typeof result === 'object' && result.hasOwnProperty('__value')) {
    return result.__value;
  }

  return result;
}

function wrapResults(dependencies, results) {
  return Array.isArray(dependencies) ? results : // Object.getOwnPropertyNames() has consistent key ordering with ES6
  Object.getOwnPropertyNames(dependencies).reduce((out, key, idx) => _objectSpread(_objectSpread({}, out), {}, {
    [key]: results[idx]
  }), {});
}

function wrapLoadables(dependencies, results, exceptions) {
  const output = exceptions.map((exception, idx) => exception == null ? loadableWithValue$4(results[idx]) : Recoil_isPromise(exception) ? loadableWithPromise$4(exception) : loadableWithError$4(exception));
  return wrapResults(dependencies, output);
}

function combineAsyncResultsWithSyncResults(syncResults, asyncResults) {
  return asyncResults.map((result, idx) =>
  /**
   * it's important we use === undefined as opposed to == null, because the
   * resolved value of the async promise could be `null`, in which case we
   * don't want to use syncResults[idx], which would be undefined. If async
   * promise resolves to `undefined`, that's ok because `syncResults[idx]`
   * will also be `undefined`. That's a little hacky, but it works.
   */
  result === undefined ? syncResults[idx] : result);
} // Selector that requests all dependencies in parallel and immediately returns
// current results without waiting.


const waitForNone = Recoil_selectorFamily({
  key: '__waitForNone',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // Always return the current status of the results; never block.

    return wrapLoadables(dependencies, results, exceptions);
  }
}); // Selector that requests all dependencies in parallel and waits for at least
// one to be available before returning results.  It will only error if all
// dependencies have errors.

const waitForAny = Recoil_selectorFamily({
  key: '__waitForAny',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If any results are available, return the current status

    if (exceptions.some(exp => exp == null)) {
      return wrapLoadables(dependencies, results, exceptions);
    } // Since we are waiting for any results, only throw an error if all
    // dependencies have an error.  Then, throw the first one.


    if (exceptions.every(isError)) {
      throw exceptions.find(isError);
    }

    if (Recoil_gkx_1('recoil_async_selector_refactor')) {
      // Otherwise, return a promise that will resolve when the next result is
      // available, whichever one happens to be next.  But, if all pending
      // dependencies end up with errors, then reject the promise.
      return new Promise((resolve, reject) => {
        for (const [i, exp] of exceptions.entries()) {
          if (Recoil_isPromise(exp)) {
            exp.then(result => {
              results[i] = getValueFromLoadablePromiseResult(result);
              exceptions[i] = null;
              resolve(wrapLoadables(dependencies, results, exceptions));
            }).catch(error => {
              exceptions[i] = error;

              if (exceptions.every(isError)) {
                reject(exceptions[0]);
              }
            });
          }
        }
      });
    } else {
      throw new Promise((resolve, reject) => {
        for (const [i, exp] of exceptions.entries()) {
          if (Recoil_isPromise(exp)) {
            exp.then(result => {
              results[i] = result;
              exceptions[i] = null;
              resolve(wrapLoadables(dependencies, results, exceptions));
            }).catch(error => {
              exceptions[i] = error;

              if (exceptions.every(isError)) {
                reject(exceptions[0]);
              }
            });
          }
        }
      });
    }
  }
}); // Selector that requests all dependencies in parallel and waits for all to be
// available before returning a value.  It will error if any dependencies error.

const waitForAll = Recoil_selectorFamily({
  key: '__waitForAll',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If all results are available, return the results

    if (exceptions.every(exp => exp == null)) {
      return wrapResults(dependencies, results);
    } // If we have any errors, throw the first error


    const error = exceptions.find(isError);

    if (error != null) {
      throw error;
    }

    if (Recoil_gkx_1('recoil_async_selector_refactor')) {
      // Otherwise, return a promise that will resolve when all results are available
      return Promise.all(exceptions).then(exceptionResults => wrapResults(dependencies, combineAsyncResultsWithSyncResults(results, exceptionResults).map(getValueFromLoadablePromiseResult)));
    } else {
      throw Promise.all(exceptions).then(results => wrapResults(dependencies, results));
    }
  }
});
const noWait = Recoil_selectorFamily({
  key: '__noWait',
  get: dependency => ({
    get
  }) => {
    try {
      return loadableWithValue$4(get(dependency));
    } catch (exception) {
      return Recoil_isPromise(exception) ? loadableWithPromise$4(exception) : loadableWithError$4(exception);
    }
  }
});
var Recoil_WaitFor = {
  waitForNone,
  waitForAny,
  waitForAll,
  noWait
};
const {
  batchUpdates: batchUpdates$3,
  setBatcher: setBatcher$1
} = Recoil_Batching;
const {
  DefaultValue: DefaultValue$4
} = Recoil_Node;
const {
  RecoilRoot: RecoilRoot$2
} = Recoil_RecoilRoot_react;
const {
  isRecoilValue: isRecoilValue$6
} = Recoil_RecoilValue$1;
const {
  freshSnapshot: freshSnapshot$2
} = Recoil_Snapshot$1;
const {
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilCallback: useRecoilCallback$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useRecoilTransactionObserver: useRecoilTransactionObserver$1,
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useResetRecoilState: useResetRecoilState$1,
  useSetRecoilState: useSetRecoilState$1,
  useSetUnvalidatedAtomValues: useSetUnvalidatedAtomValues$1,
  useTransactionObservation_DEPRECATED: useTransactionObservation_DEPRECATED$1
} = Recoil_Hooks;
const {
  noWait: noWait$1,
  waitForAll: waitForAll$1,
  waitForAny: waitForAny$1,
  waitForNone: waitForNone$1
} = Recoil_WaitFor;
var Recoil_index = {
  // Types
  DefaultValue: DefaultValue$4,
  // Components
  RecoilRoot: RecoilRoot$2,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: Recoil_useRecoilBridgeAcrossReactRoots,
  // RecoilValues
  atom: Recoil_atom,
  selector: Recoil_selector,
  // Convenience RecoilValues
  atomFamily: Recoil_atomFamily,
  selectorFamily: Recoil_selectorFamily,
  constSelector: Recoil_constSelector,
  errorSelector: Recoil_errorSelector,
  readOnlySelector: Recoil_readOnlySelector,
  // Hooks that accept RecoilValues
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useSetRecoilState: useSetRecoilState$1,
  useResetRecoilState: useResetRecoilState$1,
  // Hooks for asynchronous Recoil
  useRecoilCallback: useRecoilCallback$1,
  // Hooks for Snapshots
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
  useTransactionObservation_UNSTABLE: useTransactionObservation_DEPRECATED$1,
  useSetUnvalidatedAtomValues_UNSTABLE: useSetUnvalidatedAtomValues$1,
  // Concurrency Helpers
  noWait: noWait$1,
  waitForNone: waitForNone$1,
  waitForAny: waitForAny$1,
  waitForAll: waitForAll$1,
  // Other functions
  isRecoilValue: isRecoilValue$6,
  // Batching
  batchUpdates: batchUpdates$3,
  setBatcher: setBatcher$1,
  // Snapshot Utils
  snapshot_UNSTABLE: freshSnapshot$2
};
var Recoil_index_1 = Recoil_index.DefaultValue;
var Recoil_index_2 = Recoil_index.RecoilRoot;
var Recoil_index_3 = Recoil_index.useRecoilBridgeAcrossReactRoots_UNSTABLE;
var Recoil_index_4 = Recoil_index.atom;
var Recoil_index_5 = Recoil_index.selector;
var Recoil_index_6 = Recoil_index.atomFamily;
var Recoil_index_7 = Recoil_index.selectorFamily;
var Recoil_index_8 = Recoil_index.constSelector;
var Recoil_index_9 = Recoil_index.errorSelector;
var Recoil_index_10 = Recoil_index.readOnlySelector;
var Recoil_index_11 = Recoil_index.useRecoilValue;
var Recoil_index_12 = Recoil_index.useRecoilValueLoadable;
var Recoil_index_13 = Recoil_index.useRecoilState;
var Recoil_index_14 = Recoil_index.useRecoilStateLoadable;
var Recoil_index_15 = Recoil_index.useSetRecoilState;
var Recoil_index_16 = Recoil_index.useResetRecoilState;
var Recoil_index_17 = Recoil_index.useRecoilCallback;
var Recoil_index_18 = Recoil_index.useGotoRecoilSnapshot;
var Recoil_index_19 = Recoil_index.useRecoilSnapshot;
var Recoil_index_20 = Recoil_index.useRecoilTransactionObserver_UNSTABLE;
var Recoil_index_21 = Recoil_index.useTransactionObservation_UNSTABLE;
var Recoil_index_22 = Recoil_index.useSetUnvalidatedAtomValues_UNSTABLE;
var Recoil_index_23 = Recoil_index.noWait;
var Recoil_index_24 = Recoil_index.waitForNone;
var Recoil_index_25 = Recoil_index.waitForAny;
var Recoil_index_26 = Recoil_index.waitForAll;
var Recoil_index_27 = Recoil_index.isRecoilValue;
var Recoil_index_28 = Recoil_index.batchUpdates;
var Recoil_index_29 = Recoil_index.setBatcher;
var Recoil_index_30 = Recoil_index.snapshot_UNSTABLE;
exports.DefaultValue = Recoil_index_1;
exports.RecoilRoot = Recoil_index_2;
exports.atom = Recoil_index_4;
exports.atomFamily = Recoil_index_6;
exports.batchUpdates = Recoil_index_28;
exports.constSelector = Recoil_index_8;
exports.default = Recoil_index;
exports.errorSelector = Recoil_index_9;
exports.isRecoilValue = Recoil_index_27;
exports.noWait = Recoil_index_23;
exports.readOnlySelector = Recoil_index_10;
exports.selector = Recoil_index_5;
exports.selectorFamily = Recoil_index_7;
exports.setBatcher = Recoil_index_29;
exports.snapshot_UNSTABLE = Recoil_index_30;
exports.useGotoRecoilSnapshot = Recoil_index_18;
exports.useRecoilBridgeAcrossReactRoots_UNSTABLE = Recoil_index_3;
exports.useRecoilCallback = Recoil_index_17;
exports.useRecoilSnapshot = Recoil_index_19;
exports.useRecoilState = Recoil_index_13;
exports.useRecoilStateLoadable = Recoil_index_14;
exports.useRecoilTransactionObserver_UNSTABLE = Recoil_index_20;
exports.useRecoilValue = Recoil_index_11;
exports.useRecoilValueLoadable = Recoil_index_12;
exports.useResetRecoilState = Recoil_index_16;
exports.useSetRecoilState = Recoil_index_15;
exports.useSetUnvalidatedAtomValues_UNSTABLE = Recoil_index_22;
exports.useTransactionObservation_UNSTABLE = Recoil_index_21;
exports.waitForAll = Recoil_index_26;
exports.waitForAny = Recoil_index_25;
exports.waitForNone = Recoil_index_24;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PAHs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QU+M");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_about_virusTop_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jJbg");
/* harmony import */ var assets_about_virusTop_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_about_virusTop_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_about_virus_img_bottom_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QLAF");
/* harmony import */ var assets_about_virus_img_bottom_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_about_virus_img_bottom_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_about_virus_img1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2g7L");
/* harmony import */ var assets_about_virus_img1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_about_virus_img1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_about_virus_img2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s9VQ");
/* harmony import */ var assets_about_virus_img2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_about_virus_img2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_about_virus_img3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jsVT");
/* harmony import */ var assets_about_virus_img3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_about_virus_img3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_about_Chart_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("89On");
/* harmony import */ var assets_about_Chart_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_about_Chart_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_shape_aspectRatioBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2A1q");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // import { LayoutGrade } from "recoilStates/layout";


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(_theme => ({
  wrapper: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%"
  }
}));
const contentData = [{
  title: "코로나19",
  img: assets_about_virus_img1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  content: "코로나바이러스(Coronavirus; CoV)는 사람을 포함한 \n 광범위한 호흡계 및 소화계 감염을 일으키는 바이러스로 \n 심각한 폐 질환을 일으키고 발열, 기침, 호흡 곤란 설사와 같이 경증에서 \n 중증의 증상을 보이고 심각한 경우 사망할 수 있습니다."
}, {
  title: "독감(인플루엔자)",
  img: assets_about_virus_img2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  content: "독감(인플루엔자)은 전염력이 매우 강하며 겨울철에 많이 유행하는데 \n 주로 코와 인후를 침범합니다. 재채기나 기침으로 쉽게 공기 중으로 전파되며, \n 사람들 간의 직접 접촉에 의해서도 전염되기도 합니다."
}, {
  title: "감기",
  img: assets_about_virus_img3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  content: "감기를 일으키는 바이러스는 적어도 200종류가 넘는데 바이러스는 감염된 사람의 \n 기침이나 재채기에서 퍼져 나온 미세한 입자를 통해 쉽게 전파됩니다. \n 집단 시설에서는 바이러스가 빨리 퍼져 감기 바이러스의 노출이 쉽습니다."
}];

const Brand = () => {
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])(); // const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));

  const classes = useStyles();
  const contentMap = contentData.map((obj, i) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      key: i,
      display: 'flex',
      padding: 1,
      justifyContent: "space-between"
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      width: '10%'
    }, __jsx(components_shape_aspectRatioBox__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      width: "100%",
      aspectRatio: 1
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      width: "100%",
      height: "100%",
      className: classes.wrapper,
      style: {
        backgroundImage: `url(${obj.img})`
      }
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      width: '90%'
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      paddingX: 5
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, obj.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        whiteSpace: 'pre-wrap'
      },
      variant: "body2"
    }, obj.content))));
  });
  return __jsx(components_layout_main__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    padding: 2,
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    justifyContent: "space-between"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "70%"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1",
    component: "span",
    style: {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    }
  }, "\uBC29\uC5ED\u2219\uC18C\uB3C5 \uC11C\uBE44\uC2A4 \uC548\uB0B4"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    paddingTop: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1"
  }, "\uBC14\uC774\uB7EC\uC2A4\uC640 \uC138\uADE0\uC744 \uC81C\uAC70\uD558\uC5EC "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    component: "span",
    className: "bold"
  }, "\uC548\uC804\uD55C \uC2DC\uC124"), "\uC744 \uB9CC\uB4E4\uC5B4\uB4DC\uB9BD\uB2C8\uB2E4!"), __jsx("br", null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1"
  }, "\uB2E4\uC591\uD55C \uD658\uACBD\uC5D0\uC11C \uBC1C\uC0DD\uD560 \uC218 \uC788\uB294"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1"
  }, "\uAC01\uC885 \uC138\uADE0\uACFC \uBC14\uC774\uB7EC\uC2A4\uC758 \uBC1C\uC0DD\uC744 \uD6A8\uACFC\uC801\uC73C\uB85C"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1"
  }, "\uC608\uBC29\uD560 \uC218 \uC788\uB3C4\uB85D \uD604\uC7A5 \uC804\uCCB4\uB97C \uC18C\uB3C5\uD558\uB294 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4."), __jsx("br", null), __jsx("br", null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    color: "primary",
    variant: "body1"
  }, "\uC804\uC5FC\uC131 \uC9C8\uD658\uC73C\uB85C \uC704\uC0DD\uACFC \uBC29\uC5ED\uC5D0 \uB300\uD55C \uC911\uC694\uC131\uC774 \uB192\uC544\uC9C0\uACE0 \uC788\uC5B4"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1"
  }, "\uC804\uBB38\uC801\uC778 \uBC29\uC5ED, \uC18C\uB3C5\uC744 \uC9C4\uD589\uD558\uC5EC \uB2E4\uC591\uD55C \uC5C5\uC885\uACFC \uD658\uACBD\uC5D0 \uBC1C\uC0DD\uB418\uB294"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1"
  }, "\uBC14\uC774\uB7EC\uC2A4\uC640 \uC138\uADE0\uC744 \uCC28\uB2E8\uD558\uC5EC \uC548\uC804\uD55C \uC2DC\uC124\uC744 \uB9CC\uB4E4\uC5B4\uB4DC\uB9BD\uB2C8\uB2E4."))), __jsx(components_shape_aspectRatioBox__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    width: "40%",
    aspectRatio: 1
  }, __jsx("img", {
    height: "100%",
    src: assets_about_virusTop_png__WEBPACK_IMPORTED_MODULE_3___default.a
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    padding: 2,
    paddingBottom: 10
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    textAlign: "center"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1",
    component: "span",
    style: {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    }
  }, "\uC8FC\uC694 \uBC1C\uC0DD \xA0"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    color: "primary",
    variant: "subtitle1",
    component: "span",
    style: {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    }
  }, "\uBC14\uC774\uB7EC\uC2A4")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    paddingTop: 5
  }, contentMap)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    padding: 2,
    paddingBottom: 10
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    textAlign: "center",
    paddingBottom: 5
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1",
    component: "span",
    style: {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    }
  }, "\uBC29\uC5ED\u2219\uC18C\uB3C5 \uC11C\uBE44\uC2A4 \uB300\uC0C1")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: '100%',
    paddingBottom: 3
  }, __jsx(components_shape_aspectRatioBox__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    width: "100%",
    aspectRatio: 0.3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "100%",
    height: "100%",
    className: classes.wrapper,
    style: {
      backgroundImage: `url(${assets_about_virus_img_bottom_png__WEBPACK_IMPORTED_MODULE_4___default.a})`
    }
  }))), __jsx("img", {
    width: "100%",
    src: assets_about_Chart_png__WEBPACK_IMPORTED_MODULE_8___default.a
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

/***/ "QLAF":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/virus_img_bottom-e82a24f906a501652a1da4c83ecf5edd.png";

/***/ }),

/***/ "QRUa":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "QU+M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./node_modules/recoil/cjs/recoil.js
var recoil = __webpack_require__("9Ht6");

// EXTERNAL MODULE: ./recoilStates/layout.ts
var layout = __webpack_require__("ps6L");

// CONCATENATED MODULE: ./src/hooks/useResizeEvent.ts




const useResizeEvent = (elementRef, effectCallback) => {
  const windowLayout = Object(recoil["useRecoilValue"])(layout["h" /* windowLayoutSelector */]);
  Object(external_react_["useEffect"])(() => {
    const ref = elementRef.current;

    if (ref) {
      const endEffect = effectCallback(Object(layout["d" /* getBasicLayout */])(ref));
      return () => {
        if (endEffect) endEffect(Object(layout["d" /* getBasicLayout */])(ref));
      };
    }
  }, [windowLayout, elementRef]);
};

/* harmony default export */ var hooks_useResizeEvent = (useResizeEvent);
// EXTERNAL MODULE: ./assets/icon/tel.png
var tel = __webpack_require__("avz3");
var tel_default = /*#__PURE__*/__webpack_require__.n(tel);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/layout/header.tsx

var __jsx = external_react_default.a.createElement;





 // import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import MenuList from './menuList'
// import Une from 'assets/SNS/uneIcon.png';
// import { parse } from "src/HtmlParser";
// import MenuIcon from '@material-ui/icons/Menu';



const useHeaderStyles = Object(core_["makeStyles"])(_theme => ({
  header: {
    position: "relative",
    width: "100%"
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTel: {
    display: "flex",
    paddingBottom: '10px'
  },
  btnWrap: {
    display: "flex",
    justifyContent: "space-between"
  },
  btnClass: {
    fontSize: '25px',
    fontWeight: 600
  } // drawer: {
  //   width: '100%',
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   // backgroundColor: 'rgba(34,34,34,.9)',
  //   color: 'black',
  //   backgroundColor: 'white',
  //   width: `calc(100% - 40px)`
  // },
  // pcHeader: {
  //   display: "flex",
  //   [theme.breakpoints.down(LayoutGrade.SM)]: {
  //     display: "none",
  //   }
  // },
  // mobileHeader: {
  //   display: "none",
  //   [theme.breakpoints.down(LayoutGrade.SM)]: {
  //     display: "flex",
  //   }
  // },

}));

const Header = () => {
  const classes = useHeaderStyles();
  const headerRef = Object(external_react_["useRef"])(null);
  const setHeaderLayout = Object(recoil["useSetRecoilState"])(layout["f" /* headerLayoutAsOnlySetter */]);
  const {
    0: _toggle,
    1: setToggle
  } = Object(external_react_["useState"])(false);
  const theme = Object(core_["useTheme"])();
  const mobileFlag = Object(core_["useMediaQuery"])(theme.breakpoints.down(layout["a" /* LayoutGrade */].SM));
  const router = Object(router_["useRouter"])();
  const pageName = router.asPath;
  console.log(pageName);
  Object(external_react_["useEffect"])(() => {
    if (!mobileFlag) setToggle(false);
  }, [mobileFlag]);
  hooks_useResizeEvent(headerRef, layout => {
    setHeaderLayout(layout);
    return layout_ => setHeaderLayout(layout_);
  }); // const setToggleFn = () => {
  //   setToggle(!toggle)
  // }
  // const movePage=(link:string)=>{
  //   router.push({pathname:link})
  // }

  return __jsx("div", {
    id: "header",
    className: classes.header,
    ref: headerRef
  }, __jsx(core_["Box"], {
    paddingY: 1
  }, __jsx(core_["Box"], {
    className: classes.headerTop
  }, __jsx(core_["Box"], {
    width: "33.33%"
  }), __jsx(core_["Box"], {
    width: "33.33%",
    textAlign: "center"
  }, __jsx("a", {
    href: "/",
    style: {
      lineHeight: 0,
      textDecoration: 'none'
    }
  }, __jsx(core_["Box"], {
    textAlign: "center",
    paddingBottom: 1
  }, __jsx(core_["Typography"], {
    variant: "subtitle2",
    style: {
      color: 'black'
    },
    component: "span",
    className: "bold"
  }, "(\uC8FC)"), __jsx(core_["Typography"], {
    variant: "subtitle2",
    color: "primary",
    className: "bold",
    component: "span"
  }, "\uB2E5\uD130"), __jsx(core_["Typography"], {
    variant: "subtitle2",
    style: {
      color: 'black'
    },
    component: "span",
    className: "bold"
  }, "\uD06C\uB9B0")))), __jsx(core_["Box"], {
    width: "33.33%",
    className: classes.headerTel
  }, __jsx("img", {
    style: {
      width: "65px",
      height: "65px"
    },
    src: tel_default.a,
    alt: "\uC5F0\uB77D\uCC98"
  }), __jsx(core_["Box"], null, __jsx(core_["Typography"], {
    className: "bold"
  }, "\uACE0\uAC1D\uC0C1\uB2F4\uC804\uD654"), __jsx(core_["Typography"], {
    className: "bold",
    color: "primary"
  }, "010.6483.1286")))), __jsx(core_["Box"], {
    borderTop: "3px solid #00B7F3",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    paddingX: 3
  }, __jsx(core_["Box"], {
    paddingTop: 1,
    className: classes.btnWrap
  }, __jsx(core_["Button"], {
    style: {
      color: pageName === "/about" ? theme.palette.primary.main : "#000"
    },
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: _ => router.push("/about"),
    className: classes.btnClass
  }, "\uD68C\uC0AC \uC18C\uAC1C"), __jsx(core_["Button"], {
    style: {
      color: pageName === "/home" ? theme.palette.primary.main : "#000"
    },
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: _ => router.push("/home"),
    className: classes.btnClass
  }, "\uD648\uD074\uB9AC\uB2DD"), __jsx(core_["Button"], {
    style: {
      color: pageName === "/office" ? theme.palette.primary.main : "#000"
    },
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: _ => router.push("/office"),
    className: classes.btnClass
  }, "\uC624\uD53C\uC2A4\uD074\uB9AC\uB2DD"), __jsx(core_["Button"], {
    style: {
      color: pageName === "/virus" ? theme.palette.primary.main : "#000"
    },
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: _ => router.push("/virus"),
    className: classes.btnClass
  }, "\uBC29\uC5ED\u2219\uC18C\uB3C5")))));
};

/* harmony default export */ var header = (Header);
// CONCATENATED MODULE: ./components/layout/content.tsx

var content_jsx = external_react_default.a.createElement;





const content_Header = ({
  children
}) => {
  const contentRef = Object(external_react_["useRef"])(null);
  const setContentLayout = Object(recoil["useSetRecoilState"])(layout["c" /* contentLayoutAsOnlySetter */]);
  hooks_useResizeEvent(contentRef, layout => {
    setContentLayout(layout);
    return layout_ => setContentLayout(layout_);
  });
  return content_jsx("div", {
    id: "main",
    ref: contentRef,
    style: {
      display: 'block',
      width: "100%"
    }
  }, children);
};

/* harmony default export */ var content = (content_Header);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// CONCATENATED MODULE: ./components/layout/footer.tsx

var footer_jsx = external_react_default.a.createElement;


// import {useTheme } from "@material-ui/core";

const useStyles = Object(core_["makeStyles"])(theme => ({
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
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down(layout["a" /* LayoutGrade */].SM)]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: 'space-between',
    [theme.breakpoints.down(layout["a" /* LayoutGrade */].SM)]: {
      flexDirection: "column",
      justifyContent: 'flex-start'
    }
  },
  infoBox: {
    color: theme.palette.grey[500]
  },
  telBox: {
    textAlign: "right",
    marginTop: theme.spacing(0),
    [theme.breakpoints.down(layout["a" /* LayoutGrade */].SM)]: {
      textAlign: "left",
      marginTop: theme.spacing(4.5)
    }
  },
  addressTxt: {
    fontWeight: 300,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down(layout["a" /* LayoutGrade */].SM)]: {
      marginBottom: theme.spacing(2)
    }
  },
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
  }
}));

const Footer = () => {
  const classes = useStyles();
  const router = Object(client_router["useRouter"])();
  return footer_jsx("div", {
    id: "footer",
    className: classes.footer
  }, footer_jsx(core_["Box"], {
    maxWidth: "1280px",
    className: classes.container,
    paddingX: 3,
    margin: "0 auto"
  }, footer_jsx(core_["Box"], {
    color: "white",
    className: classes.pcShow
  }, footer_jsx(core_["Button"], {
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: _ => router.push("/about"),
    color: "inherit"
  }, footer_jsx(core_["Typography"], {
    variant: "body1"
  }, "\uD68C\uC0AC\uC18C\uAC1C")), footer_jsx(core_["Button"], {
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: _ => router.push("/qna"),
    color: "inherit"
  }, footer_jsx(core_["Typography"], {
    variant: "body1"
  }, "\uACAC\uC801\uBB38\uC758")), footer_jsx(core_["Button"], {
    title: "\uD398\uC774\uC9C0 \uC774\uB3D9",
    onClick: _ => router.push("/brand"),
    color: "inherit"
  }, footer_jsx(core_["Typography"], {
    variant: "body1"
  }, "\uC2DC\uACF5\uB0B4\uC5ED"))), footer_jsx(core_["Box"], {
    className: classes.contentsContainer
  }, footer_jsx(core_["Box"], {
    className: classes.infoBox
  }, footer_jsx(core_["Box"], null, footer_jsx(core_["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: 'span'
  }, "(\uC8FC)\uB2E5\uD130\uD06C\uB9B0\xA0\xA0\xA0|"), footer_jsx(core_["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: 'span'
  }, "\uC704\uCE58 : \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uC11C\uAD6C \uACF5\uD56D\uB300\uB85C 23\uB85C (\uC77C\uD654\uBE4C\uB529)\xA0\xA0\xA0|"), footer_jsx(core_["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: 'span'
  }, "\uB300\uD45C\uC790 : \uAC15\uD0DC\uBCF5\xA0\xA0\xA0 |"), footer_jsx(core_["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: 'span'
  }, "\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 527-81-02540")), footer_jsx(core_["Box"], {
    paddingTop: 1
  }, footer_jsx(core_["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: 'span'
  }, "E-mail : doctorclean0@naver.com"), footer_jsx(core_["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: 'span'
  }, "H.P : 010-6483-1286"), footer_jsx(core_["Typography"], {
    className: classes.text,
    variant: "body1",
    color: "inherit",
    component: 'span'
  }, "\uACC4\uC88C\uBC88\uD638 : \uAE30\uC5C5\uC740\uD589 052-116169-01-013"))))));
};

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: ./components/layout/rightBtn.tsx
var rightBtn = __webpack_require__("jj7Q");

// EXTERNAL MODULE: ./assets/mainBanner.png
var mainBanner = __webpack_require__("zNtz");
var mainBanner_default = /*#__PURE__*/__webpack_require__.n(mainBanner);

// CONCATENATED MODULE: ./components/layout/main.tsx

var main_jsx = external_react_default.a.createElement;
// import useStyles from '../../public/common'






const main_useStyles = Object(core_["makeStyles"])(_theme => ({
  wrapper: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: 'cover',
    width: "100%"
  }
}));

const Layout = ({
  children,
  qna
}) => {
  const classes = main_useStyles(); // const router = useRouter();
  // const windowLayout = useRecoilValue(windowLayoutSelector);
  // const {isMd,isDownSm} = useLayoutGrade();
  // const { grade } = windowLayout

  return main_jsx(core_["Box"] // maxWidth="1920px"
  , {
    minWidth: "360px",
    style: {
      backgroundColor: "#fff"
    },
    margin: "0 auto",
    id: "basicBox",
    width: "100%",
    position: "relative"
  }, main_jsx(header, null), qna ? main_jsx(content, null, children) : main_jsx(external_react_default.a.Fragment, null, main_jsx(core_["Box"], {
    style: {
      backgroundImage: `url(${mainBanner_default.a})`,
      paddingBottom: "26%"
    },
    className: classes.wrapper
  }), main_jsx(core_["Box"], {
    display: "flex",
    justifyContent: "space-between"
  }, main_jsx(core_["Box"], {
    width: "10%"
  }), main_jsx(core_["Box"], {
    width: "80%",
    "max-width": "1280px"
  }, main_jsx(content, null, children)), main_jsx(core_["Box"], {
    width: "10%"
  }, main_jsx(rightBtn["a" /* default */], null)))), main_jsx(footer, null));
};

/* harmony default export */ var main = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "a7Qb":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "avz3":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACnCAYAAACWyleVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxeSURBVHgB7Z17jFxVHcd/M/uc3dlud7vruohZi8XiC6gSjSAPG4OGqEExSkoi8jImiAjxFfsHPtCogIARxCCKikYR0ypifRSIUTTWFIyg1IplS6qoa9c+tt3d2d0Zvr/uKczcOffOfZy789jvJzm57eTcx879zu+c8zu/8zsihBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCFpkRHiS0dHx8nFYvHyUqmk39PuTCbzN3y2bWZmZjf+XxJCUmQIZa8sCq2iQIgqxruy2ezlXV1dLxFCXNPW1vZmsYjPUooQ4yPt7e2fhnVcJ2xViCNWoxyWcCIsF+M2CPEDfX19q4SQJMAKboCg/oIyL9GEqGUfzv9qZ2fnS4WQhORg1U6BoC5Cv+96CPI3KLMSTogF1P0+hPhKIcQV/f39AxDVeRDkbRDYPyWEECHgO7u7u8eEEMdgDNL+JhUYxHhAgoW4H3U/gWOPEJICq9BcXwkh7pAAIWrfEtbwdCFNTxt8cW9EU3gtyu0ot6Bcjc/WSH3pgEV8N4T2Jwlulr+MY15I86Ede3V7iP3lzuLlfg3HfqkvKsQL8JxPiI8Q8YN5FH/LK4Q0D2jmXoPDpNTo/OPl/hHHlRKTfD4/DAGdY9wpWYlPH/p+10CIB8XfbbNB6MhufHp7e0dw+JeE9MnhxX5bYrxYiO5EHCbkuX7bXpR7IeqNENOp+KxNIoKuwVo8z699nnUeP6ybtJqQhqUbInhAojmFp+PM2eI+90jwQGIcYrzZiDGKwKGzjiv8rCE+36JuHiGNhzZjEk18RwrO+7xEpJYApVI02yGq9w8ODq4Ie321sDjvcb/rwdI/X0jjALfFmThMSwwBooxLxKYNgjoJQvhflPug/tMQ+8YVK1YMhrzNIJrkTT7X2pHL5Y4VUn+i9vssZb6np+dVEp1RHRygqf0kBLEpgiCf1qAEHLtD3KMDor0WxznvdXDfnRDhC4TUlWyU5tCvQEg3S3J01uN09TvimR6tdU+tE9LhnIFgL8FxRqpFuMP8AEk9ME1vlXWIUfag5MQdWR2AqAM8wL2iZU4jYwYGBmr6JNEvfDuuNSXVInxEEriTSHw6tUMuycWnZQHN2eskHUYgRm2mn3XbSLU1fFzD/GtdCCP2c2wihIh/IW5/QKQWsH5n4bAgbgSoL/F2SZdhCPE6COiQzzMcgAgvlBpuG1jCc8Uy4DJTd0kc4iQCeI+Zn4sj8cmiFfr3yMhIr6QMBHQCxHK/z3Oow/kGrRZ0DZx/sVR3PeaNgEnaYNQ6GmBJ4pYiLNR6WRraIJZL8TfsE/uPQQdWQT+GDJ71UzgWPecegMBfLiRd0PG+VNyK72gz9l0JiQl4+AnKgxoNjXPfNjo6GimWT+eRce6fxS7CX+LYF3S6zQOgS0RxDO30JjHAl/xTSUGAOqc7NDTUF+IRVGhPWs6fhBC/Cet0poSfglsZ4HBWEQZZwpUQcNWMiY6shcELqaGzFkkcz7Ws4FtqPYDpAswEXOfIKjh1neDf7VKbTtP38zapKsIfScBMjVpR1NnvOW/WDNKIa/L5/PNS6P+Vv/DNIR4jZ7M8toJ622ARXx/imuo73Ihj1Uo7iPNGCRjh6lyzeMSLv2OXsCl2D37ZLxKLpXBVdGAQZr4WPrnjYC2/gfo7QzyPOpzvCHHdjFkX4nUvzZt+rx+duP5W731xrc8IcQsEuBrvKTUBymIzfIGEJ6OxfBDIVRDj7yVAjBr9bAJmg8iiznWW6xxE078u4Lwxy6j6AFfbOSZE/8uFFdwq8dB529dCwHeL/xThFOpcJMGDBL8R7j8kYNoNFu9jUv1juls4IHGHBmT6+c8cFp0b7pAEaD4Y43C2WcR548cLipzu1zUhUi2oO8RfUHmcs8tzznRvb++JQtywZs2aLggwtVGwPGdpIofVW1CH83vUvWO5jzq+vyTBo+TjcO7/PefpCNfXYQ6B6si7QvT4TN1WtIKu0KxTkqIANaOVuOV4WCbbMsyiGSj4igPiuVCqR7i6ks5vyWaXiZApv88M3DUvE+IGfMG6mCgt67dF0slOsBLX/pnlnjrCvSzgvA7bvDeE+xG/EzRqRqqt4F1C3IAX9kFJR3wPSfD0V1JympDIcu+pXC4XNDoeszib9wakeuv2+ik1LpHBq45Av0pD6J26YkwTGXa9RhJUhPdanuGpoNyBpqn2WsHP+dXHd3Sxpf5HhSRHV5j5dOzjik8n8JfSOvTb+oRoJr8j/v3BfvzN/5VKqzbp59zWKGvvd4T//124ttgN+DJ/JW6a3XEcXyhLz5hlIVMhaA7X9Pu8Vu0qv/oQ9G2e+nEXYBEvJigzqfj2oMP+YqkTGJmeL55pNzzTY+IfXq+L0r1WTV1G1hV2pqtSMbfsaAEW0Q61bX1EhLKgq9ikvrSb9Rzlz1U0wrRiQu8r/g5YTb9gB/WZPumpr1tJsBl2Ab7c+yS+9TvcIKNCTQ1SEd1jsiL4iWQtSkUaYOOWsoIf2Y1S+bfPYbBzgpDkmBD6uKPhIgR4kjQAJkmS16q9wad6uzeKWgcnfutZ8B2dJp7vCJ99WIgTusPG5dkKXvzXpQHQhUriWXgOUf3Yr75xp1T8mOBHPNVW14yGJz3XfkCIG0zoVNx+4KEGmaLK4u9QJ3i5SPYH+AWPF0+0TVCSJc3e77n2xPDwMLOvOqIHVtA3y2itghf/W2mATrlu9SCeZ8OP4x0+1XVwsUcqRaXzv1YfopnbLr/2fAOkKm4d8KLeKQn6gnBXXCZ1xsQ5VuzAhB/WnX71vfGCGjWzEtjqQoBnS/UPb4MQZ3SZlLtxm+JJ9KHq4Ywupw1/w1+l8rnUx2cN10LdKz11i/l83romWLNoQaAFqWyyb5AGptlSPGjicV2YMyvxGCgUCjoNVs+mWB3SD5V/ANEMoR9oTVwEAW73fJSZnp625peBMDWQYX/FzRYWGjr5edPlGJmbm3vYuDNigRdyBqzCFVJHLKPTKYhn2lYX3Y5dqD9XeX7pGFvdiYmJQ2YkXI72AZlLxjEDIbfH8itT6Iu9WupHDj+ib2lzaaYJzw6o2wkr+AcJOaI364vL+5fqS2SUtGvw0nQ/34r+TsQyjmZvSOqLJicKY51GIKTPotwK631G4AUhTk0TLIsDln1BYf0kGVmTai2uAEsmArkV50v7IdSzdHG/kFTReDuNfYstQrhmrhc2USQuZquDWjtUBpV5E2tHEZJ4mMU+SbKoFnANHRlThCQWbTqqlARNMUoBzbEugqIISSz6YMUelmQinEeTrguAEmVLIMuXY11kU4A13exqrzazp4gmkvwejl8wKdxoZVsVNKOnJByUHCk6X5twD19NYPQ+sWw8o7ul4/rXMM9ziwIL9i7xhLPHLPtMhquoU1lZE0xaa3OdBV0kDzF+iHvCtRYZk8LMxaJ2TcO7KcLOle1mIXnUUblOy23RhebcqrU10JHxVyS5AI8WnbN9q9TI94d73irJha9BBT/Q+MeoGflJY9GVcbDJoVQ2mff4xBTmzPYPJZdFF7XrmhYzp8vBSxPS6yq7QlnZi2b240eDGcyCoM2O72HrCtzfAAG1JAY9eHmawta1KOY0h58lo1WaZZz7BzcnukfHTZJi5v2lKmiSHxQ6y5sSdY9cLW5cNPUs87CCpwlpTmBBzl2CBOhpW8FbhDQvmlEKInxKmkx4Rwue/XdCmh6dOy5fb9FMAtwuLcByXy21p1QqrdetuGTxxTYTTwhpGXR9yXuX2J2SqOB5fXMLkiZFN6fOZrOaubShxWeSUTLpUIvSZ3Iu14pkqVc5ZHIBklZGF4ubvXgbSXwLZu0KWSasMtYwyQJ4Z8UMlsLszE5aCd37Fy9f9wiup/h+KP5Z9ckyQDPdn49mWTe7WUrxzZmNrZnxnhyhG0K8BELcISmLD/fYbTYkJKSKDgjxPBSNNazYJEaSC+8gRrpq9ZZiTzvS7MBKrcXodCOEo/3E2BkacP5/ILwv4t9jskxgiLdjdHVboVBYjym+dSi6P8nJOPouMtJUahDvVvzzvoWFBd1d87AsIyjA9MnoTk2zs7OrIcRjULRZzegOl7B2j+HznbJoAQkhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCiFOeAR7nyBhZvflkAAAAAElFTkSuQmCC"

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cE6r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dnXy":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _searchParamsToUrlQuery = __webpack_require__("cE6r");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (false) {}

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "jJbg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/virusTop-92da95c7c9f6f7550111ab0adc006891.png";

/***/ }),

/***/ "jj7Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dnXy");
/* harmony import */ var assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_icon_phone_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QRUa");
/* harmony import */ var assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_icon_talk_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pLRH");
/* harmony import */ var assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_icon_blog_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7Qb");
/* harmony import */ var assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_icon_insta_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_icon_write_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+38v");
/* harmony import */ var assets_icon_write_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_icon_write_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import useStyles from '../../public/common'







const btnArr = [{
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

const Layout = () => {
  // const windowLayout = useRecoilValue(windowLayoutSelector);
  // const {isMd,isDownSm} = useLayoutGrade();
  // const { grade } = windowLayout
  const btnMap = btnArr.map((obj, i) => {
    return __jsx(BtnCard, {
      key: i,
      title: obj.title,
      subTitle: obj.subTitle,
      link: obj.link,
      icon: obj.icon
    });
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "100%",
    minWidth: "110px",
    paddingBottom: 3,
    paddingTop: 1
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    padding: 1,
    paddingTop: 0,
    bgcolor: "#B3EAFC",
    width: "110px"
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: "110px",
    bgcolor: "#B3EAFC",
    textAlign: "center",
    paddingBottom: 1,
    borderBottom: '1px solid #fff'
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    style: {
      color: '#007EF3'
    },
    className: "bold",
    component: 'span'
  }, "\uB2E5\uD130"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: 'span',
    className: "bold"
  }, "\uD06C\uB9B0")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, btnMap));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

// const HotelCard:FC<HotelCardProps>=({title,content,day,year})=>{
const BtnCard = ({
  title,
  subTitle,
  link,
  icon
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  const handleClickFn = e => {
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
    textAlign: "center"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleClickFn(link)
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    style: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center"
    }
  }, __jsx("img", {
    src: icon,
    width: "30px"
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    className: "bold",
    style: {
      fontSize: "11px",
      paddingTop: "10px"
    }
  }, title), subTitle ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    className: "bold",
    style: {
      fontSize: "11px"
    }
  }, subTitle) : undefined)));
};

/***/ }),

/***/ "jsVT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/virus_img3-389a214377607a1f9c8748693cdf6613.png";

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pLRH":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "ps6L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutGrade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SIZE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return windowLayoutAsOnlySetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return windowLayoutSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return headerLayoutAsOnlySetter; });
/* unused harmony export headerLayoutSelector */
/* unused harmony export navLayoutAsOnlySetter */
/* unused harmony export navLayoutSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return contentLayoutAsOnlySetter; });
/* unused harmony export contentLayoutSelector */
/* unused harmony export footerLayoutAsOnlySetter */
/* unused harmony export footerLayoutSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getBasicLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getWindowLayout; });
/* unused harmony export getGrade */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Ht6");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/** README!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *  select: 접미사에 Selector가 붙은 것을 사용할 것.
 *  update: 접미사에 AsOnlySetter이 붙은 것을 사용할 것.
 *  README!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

const LAYOUT_INIT = {
  width: 0,
  height: 0
};
let LayoutGrade;

(function (LayoutGrade) {
  LayoutGrade["XL"] = "xl";
  LayoutGrade["LG"] = "lg";
  LayoutGrade["MD"] = "md";
  LayoutGrade["SM"] = "sm";
  LayoutGrade["XS"] = "xs";
  LayoutGrade["UN"] = "un";
})(LayoutGrade || (LayoutGrade = {}));

const SIZE_INFO = {
  XS: {
    grade: LayoutGrade.XS,
    max: 360
  },
  SM: {
    grade: LayoutGrade.SM,
    max: 640
  },
  MD: {
    grade: LayoutGrade.MD,
    max: 960
  },
  LG: {
    grade: LayoutGrade.LG,
    max: 1280
  },
  XL: {
    grade: LayoutGrade.XL
  }
};
const windowLayoutAsOnlySetter = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: 'windowLayoutAsOnlySetter',
  default: _objectSpread(_objectSpread({}, LAYOUT_INIT), {}, {
    scrollX: 0,
    scrollY: 0
  })
});
const windowLayoutSelector = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["selector"])({
  key: 'windowLayoutSelector',
  get: ({
    get
  }) => {
    const windowLayout = get(windowLayoutAsOnlySetter);
    const {
      width
    } = windowLayout;
    return _objectSpread(_objectSpread({}, windowLayout), {}, {
      grade: getGrade(width)
    });
  }
});
const headerLayoutAsOnlySetter = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: 'headerLayoutAsOnlySetter',
  default: _objectSpread(_objectSpread({}, LAYOUT_INIT), {}, {
    position: 'relation',
    x: 0,
    y: 0
  })
});
const headerLayoutSelector = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["selector"])({
  key: 'headerLayoutSelector',
  get: ({
    get
  }) => {
    const headerLayout = get(headerLayoutAsOnlySetter);
    const {
      width
    } = headerLayout;
    return _objectSpread(_objectSpread({}, headerLayout), {}, {
      grade: getGrade(width)
    });
  }
});
const navLayoutAsOnlySetter = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: 'navLayoutAsOnlySetter',
  default: _objectSpread(_objectSpread({}, LAYOUT_INIT), {}, {
    position: 'relation',
    x: 0,
    y: 0
  })
});
const navLayoutSelector = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["selector"])({
  key: 'navLayoutSelector',
  get: ({
    get
  }) => {
    const navLayout = get(navLayoutAsOnlySetter);
    const {
      width
    } = navLayout;
    return _objectSpread(_objectSpread({}, navLayout), {}, {
      grade: getGrade(width)
    });
  }
});
const contentLayoutAsOnlySetter = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: 'contentLayoutAsOnlySetter',
  default: _objectSpread(_objectSpread({}, LAYOUT_INIT), {}, {
    position: 'relation',
    x: 0,
    y: 0
  })
});
const contentLayoutSelector = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["selector"])({
  key: 'contentLayoutSelector',
  get: ({
    get
  }) => {
    const contentLayout = get(contentLayoutAsOnlySetter);
    const {
      width
    } = contentLayout;
    return _objectSpread(_objectSpread({}, contentLayout), {}, {
      grade: getGrade(width)
    });
  }
});
const footerLayoutAsOnlySetter = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: 'footerLayoutAsOnlySetter',
  default: _objectSpread(_objectSpread({}, LAYOUT_INIT), {}, {
    position: 'relation',
    x: 0,
    y: 0
  })
});
const footerLayoutSelector = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["selector"])({
  key: 'footerLayoutSelector',
  get: ({
    get
  }) => {
    const footerLayout = get(footerLayoutAsOnlySetter);
    const {
      width
    } = footerLayout;
    return _objectSpread(_objectSpread({}, footerLayout), {}, {
      grade: getGrade(width)
    });
  }
}); //
// ACTIONS
//

const getBasicLayout = node => {
  if (!node) return _objectSpread(_objectSpread({}, LAYOUT_INIT), {}, {
    position: 'relation',
    x: 0,
    y: 0
  });
  const {
    offsetWidth,
    offsetHeight
  } = node;
  const {
    position
  } = node.style;
  let x, y; // if(position === 'fixed' && node.style){
  //   const {left, top} = node.style;
  //   x = Number(left.replace(OTHER_THEN_NUMBER_AND_RELATION, EMPTY));
  //   y = Number(top.replace(OTHER_THEN_NUMBER_AND_RELATION, EMPTY));
  // }else{

  const {
    x: rectX,
    y: rectY
  } = node.getBoundingClientRect();
  x = rectX;
  y = rectY;
  return {
    width: offsetWidth,
    height: offsetHeight,
    position: position === 'fixed' ? position : 'relation',
    x,
    y
  };
};
const getWindowLayout = window => {
  if (!window) return _objectSpread(_objectSpread({}, LAYOUT_INIT), {}, {
    scrollX: 0,
    scrollY: 0
  });
  const {
    scrollX,
    scrollY
  } = window;
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    scrollY,
    scrollX
  };
};
const getGrade = width => {
  if (!width || width < 1) return LayoutGrade.UN;else if (width <= SIZE_INFO.XS.max) return LayoutGrade.XS;else if (width <= SIZE_INFO.SM.max) return LayoutGrade.SM;else if (width <= SIZE_INFO.MD.max) return LayoutGrade.MD;else if (width <= SIZE_INFO.LG.max) return LayoutGrade.LG;else return LayoutGrade.XL;
};

/***/ }),

/***/ "s9VQ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/virus_img2-63faa18d702756bf00e8d465c9197f73.png";

/***/ }),

/***/ "zNtz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mainBanner-0bb5dbfc97f1036f54cc7593e73de02b.png";

/***/ })

/******/ });