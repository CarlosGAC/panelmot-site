(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Accordion");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/CarouselItem");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(37);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(75);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(77);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(43);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(42);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(38);

var _helpers = __webpack_require__(78);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(74)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(38);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(76)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/FX87-21.78de7a9e.png";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
}

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/FX142-1.09ae8ad8.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/FX153-3.8c2fb2e0.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/FX87-24.b2ebdc41.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/blanco.75c6d891.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/blancoHumo.4fd444f0.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/blancoMarmol.52f1dcd4.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/union.d920ece4.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/esquineroexterno.f2a6659e.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/esquinerointerno.96cb90de.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/terminalc.6b305e32.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/angulo_amarre.a84ecde2.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/canal_liston.3110329e.png";

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ App_App; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(23);

// EXTERNAL MODULE: external "bootstrap/dist/css/bootstrap.min.css"
var bootstrap_min_css_ = __webpack_require__(46);

// EXTERNAL MODULE: external "normalize.css"
var external_normalize_css_ = __webpack_require__(87);

// EXTERNAL MODULE: F:/panelmot-site/src/components/App/app.css
var app = __webpack_require__(88);

// EXTERNAL MODULE: F:/panelmot-site/src/components/Organisms/AboutUs/index.css
var AboutUs = __webpack_require__(89);

// EXTERNAL MODULE: F:/panelmot-site/src/videos/test.mp4
var test = __webpack_require__(52);
var test_default = /*#__PURE__*/__webpack_require__.n(test);

// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(15);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(5);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(6);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/SectionSubtitle/SectionSubtitle.styled.js


var _templateObject;


var SectionSubtitle = external_styled_components_default.a.h3(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\nfont-weight: bold;\n"])));
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/SectionSubtitle/SectionSubtitle.jsx




function SectionSubtitle_SectionSubtitle(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/external_react_default.a.createElement(SectionSubtitle, {
    className: "display-3"
  }, label ? label : "Section Title");
}

/* harmony default export */ var Atoms_SectionSubtitle_SectionSubtitle = (SectionSubtitle_SectionSubtitle);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Molecules/AboutUsHeader/AboutUsHeader.jsx





function AboutUsHeader() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Atoms_SectionSubtitle_SectionSubtitle, {
    label: "¡Cambia la apariencia de tus techos!"
  })), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "5",
    className: "align-self-center"
  }, /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "h3 aboutus-description"
  }, "Somos importadores directos de nuestra f\xE1brica en Taiw\xE1n de paneles de PVC laminados con textura tipo madera. Manejamos env\xEDos en todo M\xE9xico")));
}

/* harmony default export */ var AboutUsHeader_AboutUsHeader = (AboutUsHeader);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Molecules/AboutUsVideo/AboutUsVideo.jsx




function AboutUsVideo(_ref) {
  var videoSrc = _ref.videoSrc;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "justify-content-center"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    l: "12",
    md: "12",
    xl: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "ratio ratio-16x9"
  }, /*#__PURE__*/external_react_default.a.createElement("video", {
    className: "embed-responsive-item",
    src: videoSrc,
    allowFullScreen: true,
    controls: true,
    preload: "none"
  }))));
}

/* harmony default export */ var AboutUsVideo_AboutUsVideo = (AboutUsVideo);
// EXTERNAL MODULE: F:/panelmot-site/src/images/monte_oliva2.png
var monte_oliva2 = __webpack_require__(53);
var monte_oliva2_default = /*#__PURE__*/__webpack_require__.n(monte_oliva2);

// CONCATENATED MODULE: F:/panelmot-site/src/components/Molecules/AboutUsPartners/AboutUsPartners.jsx





function AboutUsPartners(_ref) {
  var imageSrc = _ref.imageSrc;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "text-center mt-5"
  }, /*#__PURE__*/external_react_default.a.createElement("h4", {
    className: "display-5"
  }, "Asociados con:")), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "justify-content-center mt-5 mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    loading: "lazy",
    src: monte_oliva2_default.a,
    alt: "El logotipo de Mote Oliva TW",
    className: "monteoliva-logo"
  }))));
}

/* harmony default export */ var AboutUsPartners_AboutUsPartners = (AboutUsPartners);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Organisms/AboutUs/AboutUs.jsx








function About() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "section-container justify-content-center",
    id: "AboutUs"
  }, /*#__PURE__*/external_react_default.a.createElement(Container_default.a, null, /*#__PURE__*/external_react_default.a.createElement(AboutUsHeader_AboutUsHeader, null), /*#__PURE__*/external_react_default.a.createElement(AboutUsVideo_AboutUsVideo, {
    videoSrc: test_default.a
  }), /*#__PURE__*/external_react_default.a.createElement(AboutUsPartners_AboutUsPartners, null))));
}

/* harmony default export */ var AboutUs_AboutUs = (About);
// EXTERNAL MODULE: F:/panelmot-site/src/components/Organisms/Contact/index.css
var Contact = __webpack_require__(90);

// EXTERNAL MODULE: F:/panelmot-site/src/images/panelmot_logo.jpg
var panelmot_logo = __webpack_require__(54);
var panelmot_logo_default = /*#__PURE__*/__webpack_require__.n(panelmot_logo);

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(55);

// EXTERNAL MODULE: external "react-icons/go"
var go_ = __webpack_require__(56);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(57);

// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(58);

// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/SectionTitle/SectionTitle.styled.js


var SectionTitle_styled_templateObject;


var SectionTitle = external_styled_components_default.a.h2(SectionTitle_styled_templateObject || (SectionTitle_styled_templateObject = taggedTemplateLiteral_default()(["\nfont-weight: bold;\n"])));
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/SectionTitle/SectionTitle.jsx




function SectionTitle_SectionTitle(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/external_react_default.a.createElement(SectionTitle, {
    className: "display-2"
  }, label ? label : "Section Title");
}

/* harmony default export */ var Atoms_SectionTitle_SectionTitle = (SectionTitle_SectionTitle);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Molecules/ContactTextInput/ContactTextInput.jsx



function ContactTextInput(_ref) {
  var type = _ref.type,
      label = _ref.label,
      name = _ref.name,
      id = _ref.id;

  if (type == "text") {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "mb-5"
    }, /*#__PURE__*/external_react_default.a.createElement("label", {
      "for": id,
      className: "form-label form-label"
    }, /*#__PURE__*/external_react_default.a.createElement("b", null, label, ":")), /*#__PURE__*/external_react_default.a.createElement("input", {
      type: "text",
      className: "form-control",
      id: id,
      name: name,
      required: true
    }));
  } else if (type == "textarea") {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "mb-5"
    }, /*#__PURE__*/external_react_default.a.createElement("label", {
      "for": id,
      className: "form-label form-label"
    }, /*#__PURE__*/external_react_default.a.createElement("b", null, label, ":")), /*#__PURE__*/external_react_default.a.createElement("textarea", {
      className: "form-control",
      id: id,
      rows: "8",
      name: name,
      required: true
    }));
  }
}

/* harmony default export */ var ContactTextInput_ContactTextInput = (ContactTextInput);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/ContactImage/ContactImage.styled.js


var ContactImage_styled_templateObject;


var ContactImage = external_styled_components_default.a.img(ContactImage_styled_templateObject || (ContactImage_styled_templateObject = taggedTemplateLiteral_default()(["\nborder-radius: 50%;\nwidth: 300px;\nheight: 300px;\nmargin-bottom: 50px;\nmargin-top: 100px;\n"])));
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/ContactImage/ContactImage.jsx




function ContactImage_ContactImage(_ref) {
  var imageSrc = _ref.imageSrc,
      altText = _ref.altText;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "contact-image-container"
  }, /*#__PURE__*/external_react_default.a.createElement(ContactImage, {
    loading: "lazy",
    src: imageSrc,
    alt: altText
  }));
}

/* harmony default export */ var Atoms_ContactImage_ContactImage = (ContactImage_ContactImage);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Molecules/ContactDataRow/ContactDataRow.jsx




function ContactDataRow(_ref) {
  var icon = _ref.icon,
      content = _ref.content;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "mb-3"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "2",
    l: "2",
    md: "2",
    sm: "2",
    xs: "0"
  }, /*#__PURE__*/external_react_default.a.createElement("i", null, icon)), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, content));
}

/* harmony default export */ var ContactDataRow_ContactDataRow = (ContactDataRow);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/ContactLink/ContactLink.styled.js


var ContactLink_styled_templateObject;


var ContactLink = external_styled_components_default.a.a(ContactLink_styled_templateObject || (ContactLink_styled_templateObject = taggedTemplateLiteral_default()(["\nfont-weight: bold;\ncolor: black;\ntext-decoration: underline;\nfont-size: 1.2rem;\n"])));
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/ContactLink/ContactLink.jsx




function ContactLink_ContactLink(_ref) {
  var label = _ref.label,
      linkRef = _ref.linkRef;
  return /*#__PURE__*/external_react_default.a.createElement(ContactLink, {
    href: linkRef ? linkRef : "#",
    className: "contact-link"
  }, label ? label : "Section Title");
}

/* harmony default export */ var Atoms_ContactLink_ContactLink = (ContactLink_ContactLink);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Molecules/ContactFooter/ContactFooter.jsx



function ContactFooter() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "5",
    className: "mb-4"
  }, /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "h4"
  }, "P\xE1gina Web desarrollada por ", /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://eldritchgames.com.mx"
  }, "Eldritch Games"))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "3",
    className: "mb-4"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#",
    className: "h4"
  }, "Aviso de Privacidad")), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "4",
    className: "mb-4"
  }, /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "h4"
  }, /*#__PURE__*/external_react_default.a.createElement("u", null, "Copyright \xA9 2021 by Panelmot PVC"))));
}

/* harmony default export */ var ContactFooter_ContactFooter = (ContactFooter);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/FAQButton/FAQButton.styled.js


var FAQButton_styled_templateObject;


var FAQButton = external_styled_components_default.a.button(FAQButton_styled_templateObject || (FAQButton_styled_templateObject = taggedTemplateLiteral_default()(["\nborder: none;\nbackground-color: #58C33D;\ncolor: white;\nborder-radius: 8px;\nfont-weight: bold;\nfont-size: 1.2rem;\n\nwidth: 50%;\nmin-height: 80px;\nmax-height: auto;\n\n:hover {\n    background-color: #227849;\n}\n"])));
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/FAQButton/FAQButton.jsx




function FAQButton_FAQButton(_ref) {
  var buttonLabel = _ref.buttonLabel,
      type = _ref.type;

  if (type) {
    return /*#__PURE__*/external_react_default.a.createElement(FAQButton, {
      type: type,
      className: "col-4 h3"
    }, buttonLabel ? buttonLabel : "Button");
  } else {
    return /*#__PURE__*/external_react_default.a.createElement(FAQButton, {
      className: "col-4 h3"
    }, buttonLabel ? buttonLabel : "Button");
  }
}

/* harmony default export */ var Atoms_FAQButton_FAQButton = (FAQButton_FAQButton);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Organisms/Contact/Contact.jsx
















function FAQ() {
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var nameInput = event.target.name.value;
    var mailInput = event.target.email.value;
    var messageInput = event.target.message.value;
    window.open("https://api.whatsapp.com/send?phone=5213411046630&text=" + "Buen día, mi nombre es " + nameInput + ", " + messageInput + ". Mi correo electrónico es " + mailInput);
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "section-container",
    id: "Contact"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "8",
    l: "8",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "mb-1"
  }, /*#__PURE__*/external_react_default.a.createElement(Atoms_SectionTitle_SectionTitle, {
    label: "Contáctanos"
  })), /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "h4"
  }, "Si te interesan nuestros productos, no dudes en contactarnos!")), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "mb-4"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "6",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/external_react_default.a.createElement(ContactTextInput_ContactTextInput, {
    type: "text",
    label: "Nombre Completo",
    id: "nameInput",
    name: "name"
  }), /*#__PURE__*/external_react_default.a.createElement(ContactTextInput_ContactTextInput, {
    type: "text",
    label: "Correo Electrónico",
    id: "emailInput",
    name: "email"
  }), /*#__PURE__*/external_react_default.a.createElement(ContactTextInput_ContactTextInput, {
    type: "textarea",
    label: "Mensaje",
    id: "messageInput",
    name: "message"
  }), /*#__PURE__*/external_react_default.a.createElement(Atoms_FAQButton_FAQButton, {
    buttonLabel: "Enviar",
    type: "submit"
  }))))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "4",
    l: "4",
    md: "6",
    sm: "12",
    xs: "12",
    className: "justify-content-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Atoms_ContactImage_ContactImage, {
    imageSrc: panelmot_logo_default.a,
    alt: "La imagen es el logotipo de PanelMot PVC"
  }), /*#__PURE__*/external_react_default.a.createElement(ContactDataRow_ContactDataRow, {
    icon: /*#__PURE__*/external_react_default.a.createElement(bs_["BsTelephone"], null),
    content: /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "contact-data"
    }, /*#__PURE__*/external_react_default.a.createElement("b", null, "342 108 4567"))
  }), /*#__PURE__*/external_react_default.a.createElement(ContactDataRow_ContactDataRow, {
    icon: /*#__PURE__*/external_react_default.a.createElement(go_["GoMail"], null),
    content: /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "contact-data"
    }, /*#__PURE__*/external_react_default.a.createElement("b", null, "panelpvcmot@gmail.com"))
  }), /*#__PURE__*/external_react_default.a.createElement(ContactDataRow_ContactDataRow, {
    icon: /*#__PURE__*/external_react_default.a.createElement(fa_["FaFacebookSquare"], null),
    content: /*#__PURE__*/external_react_default.a.createElement(Atoms_ContactLink_ContactLink, {
      label: "Panel PVC",
      linkRef: "https://www.facebook.com/PANEL-PVC-172312544911856"
    })
  }), /*#__PURE__*/external_react_default.a.createElement(ContactDataRow_ContactDataRow, {
    icon: /*#__PURE__*/external_react_default.a.createElement(hi_["HiOutlineLocationMarker"], null),
    content: /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "contact-data"
    }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Guadalajara, Jalisco"))
  }))), /*#__PURE__*/external_react_default.a.createElement(ContactFooter_ContactFooter, null)));
}

/* harmony default export */ var Contact_Contact = (FAQ);
// EXTERNAL MODULE: external "react-bootstrap/Accordion"
var Accordion_ = __webpack_require__(10);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);

// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/FAQLink/FAQLink.styled.js


var FAQLink_styled_templateObject;


var FAQLink = external_styled_components_default.a.a(FAQLink_styled_templateObject || (FAQLink_styled_templateObject = taggedTemplateLiteral_default()(["\nfont-weight: bold;\ncolor: black;\ntext-decoration: underline;\n"])));
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/FAQLink/FAQLink.jsx




function FAQLink_FAQLink(_ref) {
  var label = _ref.label,
      linkRef = _ref.linkRef;
  return /*#__PURE__*/external_react_default.a.createElement(FAQLink, {
    href: linkRef ? linkRef : "#",
    className: "faq-link"
  }, label ? label : "Section Title");
}

/* harmony default export */ var Atoms_FAQLink_FAQLink = (FAQLink_FAQLink);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Molecules/QuestionBlock/QuestionBlock.jsx







function QuestionBlock(_ref) {
  var question = _ref.question,
      answer = _ref.answer,
      buttonLabel = _ref.buttonLabel,
      buttonAction = _ref.buttonAction,
      linkLabel = _ref.linkLabel,
      linkRef = _ref.linkRef,
      eventKey = _ref.eventKey;

  if (buttonLabel) {
    return /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a.Item, {
      eventKey: eventKey
    }, /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a.Header, null, question ? question : "Frequently Asked Question?"), /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a.Body, {
      className: "faq-answer"
    }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement("p", {
      "class": "faq-answer-text"
    }, answer ? answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.")), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement(Atoms_FAQButton_FAQButton, {
      buttonLabel: buttonLabel
    }))));
  } else if (linkLabel) {
    return /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a.Item, {
      eventKey: eventKey
    }, /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a.Header, null, question ? question : "Frequently Asked Question?"), /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a.Body, {
      className: "faq-answer"
    }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement("p", {
      "class": "faq-answer-text"
    }, answer ? answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.")), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement(Atoms_FAQLink_FAQLink, {
      linkRef: linkRef,
      label: linkLabel
    }))));
  } else {
    return /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a.Item, {
      eventKey: eventKey
    }, /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a.Header, null, question ? question : "Frequently Asked Question?"), /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a.Body, {
      className: "faq-answer"
    }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement("p", {
      "class": "faq-answer-text"
    }, answer ? answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit."))));
  }
}

/* harmony default export */ var QuestionBlock_QuestionBlock = (QuestionBlock);
// EXTERNAL MODULE: F:/panelmot-site/src/components/Organisms/FAQ/index.css
var Organisms_FAQ = __webpack_require__(91);

// CONCATENATED MODULE: F:/panelmot-site/src/components/Organisms/FAQ/FAQ.jsx







function FAQ_FAQ() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "section-container justify-content-center",
    id: "FAQ"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "text-center mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(Atoms_SectionTitle_SectionTitle, {
    label: "Preguntas Frecuentes"
  })), /*#__PURE__*/external_react_default.a.createElement(Accordion_default.a, {
    defaultActiveKey: ['0'],
    alwaysOpen: true,
    className: "row accordion-flush"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(QuestionBlock_QuestionBlock, {
    question: "Sus productos son originales?",
    answer: "Si, son productos de alta calidad importados directamente desde Taiw\xE1n",
    eventKey: 0
  }), /*#__PURE__*/external_react_default.a.createElement(QuestionBlock_QuestionBlock, {
    question: "Otra pregunta?",
    answer: "As\xED es, otra respuesta!",
    eventKey: 1
  })), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(QuestionBlock_QuestionBlock, {
    question: "Una pregunta con bot\xF3n?",
    answer: "S\xED, esta es una pregunta con bot\xF3n para que realice una acci\xF3n",
    buttonLabel: "Click me!",
    eventKey: 2
  }), /*#__PURE__*/external_react_default.a.createElement(QuestionBlock_QuestionBlock, {
    question: "Una pregunta con link?",
    answer: "S\xED, es una respuesta con link!",
    linkLabel: "Link a Google",
    linkRef: "https://google.com.mx",
    eventKey: 3
  })))));
}

/* harmony default export */ var Organisms_FAQ_FAQ = (FAQ_FAQ);
// EXTERNAL MODULE: F:/panelmot-site/src/components/Organisms/Hero/index.css
var Hero = __webpack_require__(92);

// EXTERNAL MODULE: external "react-bootstrap/Carousel"
var Carousel_ = __webpack_require__(3);
var Carousel_default = /*#__PURE__*/__webpack_require__.n(Carousel_);

// EXTERNAL MODULE: external "react-bootstrap/CarouselItem"
var CarouselItem_ = __webpack_require__(12);
var CarouselItem_default = /*#__PURE__*/__webpack_require__.n(CarouselItem_);

// EXTERNAL MODULE: F:/panelmot-site/src/assets/home-banner-carousel/banner_image0.png
var banner_image0 = __webpack_require__(59);
var banner_image0_default = /*#__PURE__*/__webpack_require__.n(banner_image0);

// EXTERNAL MODULE: F:/panelmot-site/src/assets/home-banner-carousel/banner_image1.png
var banner_image1 = __webpack_require__(60);
var banner_image1_default = /*#__PURE__*/__webpack_require__.n(banner_image1);

// EXTERNAL MODULE: F:/panelmot-site/src/assets/home-banner-carousel/banner_image2.png
var banner_image2 = __webpack_require__(61);
var banner_image2_default = /*#__PURE__*/__webpack_require__.n(banner_image2);

// EXTERNAL MODULE: F:/panelmot-site/src/assets/home-banner-carousel/banner_image3.png
var banner_image3 = __webpack_require__(62);
var banner_image3_default = /*#__PURE__*/__webpack_require__.n(banner_image3);

// EXTERNAL MODULE: F:/panelmot-site/src/assets/home-banner-carousel/banner_image4.png
var banner_image4 = __webpack_require__(63);
var banner_image4_default = /*#__PURE__*/__webpack_require__.n(banner_image4);

// EXTERNAL MODULE: F:/panelmot-site/src/assets/home-banner-carousel/banner_image5.png
var banner_image5 = __webpack_require__(64);
var banner_image5_default = /*#__PURE__*/__webpack_require__.n(banner_image5);

// EXTERNAL MODULE: F:/panelmot-site/src/assets/home-banner-carousel/banner_image6.png
var banner_image6 = __webpack_require__(65);
var banner_image6_default = /*#__PURE__*/__webpack_require__.n(banner_image6);

// EXTERNAL MODULE: F:/panelmot-site/src/assets/home-banner-carousel/banner_image7.png
var banner_image7 = __webpack_require__(66);
var banner_image7_default = /*#__PURE__*/__webpack_require__.n(banner_image7);

// EXTERNAL MODULE: F:/panelmot-site/src/assets/home-banner-carousel/banner_image8.png
var banner_image8 = __webpack_require__(93);

// EXTERNAL MODULE: external "react-bootstrap/Card"
var Card_ = __webpack_require__(8);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// CONCATENATED MODULE: F:/panelmot-site/src/components/Organisms/Hero/Hero.jsx
















function Hero_Hero() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "banner-wrapper section-container",
    id: "Hero"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-info"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "hero-title text-center decrease-font"
  }, "Dale a tus techos una apariencia de madera real"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-subtitle-container"
  }, /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "text-center hero-subtitle h3 align-self-center"
  }, "Somos la mejor opci\xF3n para decoraci\xF3n de techos y muros no lo dudes m\xE1s!"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-button-container d-flex"
  }, /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "hero-button"
  }, "Explorar cat\xE1logo")))), /*#__PURE__*/external_react_default.a.createElement(Container_default.a, {
    fluid: true,
    className: "container-hero"
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "carousel-hero"
  }, /*#__PURE__*/external_react_default.a.createElement(CarouselItem_default.a, {
    className: "carousel-hero-item"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: banner_image1_default.a,
    alt: "Hello motherfuckers"
  })), /*#__PURE__*/external_react_default.a.createElement(CarouselItem_default.a, {
    className: "carousel-hero-item"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: banner_image0_default.a,
    alt: "Hello motherfuckers"
  })), /*#__PURE__*/external_react_default.a.createElement(CarouselItem_default.a, {
    className: "carousel-hero-item"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: banner_image2_default.a,
    alt: "Hello motherfuckers"
  })), /*#__PURE__*/external_react_default.a.createElement(CarouselItem_default.a, {
    className: "carousel-hero-item"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: banner_image3_default.a,
    alt: "Hello motherfuckers"
  })), /*#__PURE__*/external_react_default.a.createElement(CarouselItem_default.a, {
    className: "carousel-hero-item"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: banner_image4_default.a,
    alt: "Hello motherfuckers"
  })), /*#__PURE__*/external_react_default.a.createElement(CarouselItem_default.a, {
    className: "carousel-hero-item"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: banner_image5_default.a,
    alt: "Hello motherfuckers"
  })), /*#__PURE__*/external_react_default.a.createElement(CarouselItem_default.a, {
    className: "carousel-hero-item"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: banner_image6_default.a,
    alt: "Hello motherfuckers"
  })), /*#__PURE__*/external_react_default.a.createElement(CarouselItem_default.a, {
    className: "carousel-hero-item"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: banner_image7_default.a,
    alt: "Hello motherfuckers"
  }))))));
}

/* harmony default export */ var Organisms_Hero_Hero = (Hero_Hero);
// EXTERNAL MODULE: F:/panelmot-site/src/assets/Logo.png
var Logo = __webpack_require__(67);
var Logo_default = /*#__PURE__*/__webpack_require__.n(Logo);

// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(1);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);

// CONCATENATED MODULE: F:/panelmot-site/src/components/App/App.styled.js


var App_styled_templateObject;


var logo = external_styled_components_default.a.img(App_styled_templateObject || (App_styled_templateObject = taggedTemplateLiteral_default()(["\n  height: 50px;\n  width: 50px;\n"])));
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__(21);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);

// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(16);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: F:/panelmot-site/src/components/Organisms/Articles/index.css
var Articles = __webpack_require__(94);

// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(2);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(39);

// EXTERNAL MODULE: F:/panelmot-site/src/images/FX87-21.png
var FX87_21 = __webpack_require__(20);
var FX87_21_default = /*#__PURE__*/__webpack_require__.n(FX87_21);

// EXTERNAL MODULE: F:/panelmot-site/src/images/FX142-1.png
var FX142_1 = __webpack_require__(24);
var FX142_1_default = /*#__PURE__*/__webpack_require__.n(FX142_1);

// EXTERNAL MODULE: F:/panelmot-site/src/images/FX153-3.png
var FX153_3 = __webpack_require__(25);
var FX153_3_default = /*#__PURE__*/__webpack_require__.n(FX153_3);

// EXTERNAL MODULE: F:/panelmot-site/src/images/FX87-24.png
var FX87_24 = __webpack_require__(26);
var FX87_24_default = /*#__PURE__*/__webpack_require__.n(FX87_24);

// EXTERNAL MODULE: F:/panelmot-site/src/images/blanco.png
var blanco = __webpack_require__(27);
var blanco_default = /*#__PURE__*/__webpack_require__.n(blanco);

// EXTERNAL MODULE: F:/panelmot-site/src/images/blancoHumo.png
var blancoHumo = __webpack_require__(28);
var blancoHumo_default = /*#__PURE__*/__webpack_require__.n(blancoHumo);

// EXTERNAL MODULE: F:/panelmot-site/src/images/blancoMarmol.png
var blancoMarmol = __webpack_require__(29);
var blancoMarmol_default = /*#__PURE__*/__webpack_require__.n(blancoMarmol);

// EXTERNAL MODULE: F:/panelmot-site/src/images/union.png
var union = __webpack_require__(30);
var union_default = /*#__PURE__*/__webpack_require__.n(union);

// EXTERNAL MODULE: F:/panelmot-site/src/images/esquineroexterno.png
var esquineroexterno = __webpack_require__(31);
var esquineroexterno_default = /*#__PURE__*/__webpack_require__.n(esquineroexterno);

// EXTERNAL MODULE: F:/panelmot-site/src/images/esquinerointerno.png
var esquinerointerno = __webpack_require__(32);
var esquinerointerno_default = /*#__PURE__*/__webpack_require__.n(esquinerointerno);

// EXTERNAL MODULE: F:/panelmot-site/src/images/terminalc.png
var terminalc = __webpack_require__(33);
var terminalc_default = /*#__PURE__*/__webpack_require__.n(terminalc);

// EXTERNAL MODULE: F:/panelmot-site/src/images/angulo_amarre.png
var angulo_amarre = __webpack_require__(34);
var angulo_amarre_default = /*#__PURE__*/__webpack_require__.n(angulo_amarre);

// EXTERNAL MODULE: F:/panelmot-site/src/images/canal_liston.png
var canal_liston = __webpack_require__(35);
var canal_liston_default = /*#__PURE__*/__webpack_require__.n(canal_liston);

// CONCATENATED MODULE: F:/panelmot-site/src/data/products.data.js













var products_data_data = {
  "profiles": [{
    "id": "UnionH",
    "title": "Unión H",
    "description": "Este accesorio se utiliza para unir dos paneles a lo largo (cuando un proyecto mide más de los 5.95m del largo del panel)",
    "textureType": "Madera y Pintura/Liso",
    "useCase": "Interiores/Exteriores",
    "price": "75 MXN por pieza",
    "size": "595cm",
    "headerImage": {
      "id": 0,
      "src": union_default.a,
      "alt": "Union H"
    },
    "gallery": [{
      "id": 0,
      "src": union_default.a,
      "alt": "Union H"
    }, {
      "id": 1,
      "src": union_default.a,
      "alt": "Union H"
    }]
  }, {
    "id": "EsquineroExterno",
    "title": "Esquinero Externo",
    "description": "Este accesorio se utiliza para las esquinas externas en el proyecto. Por ejemplo, para forrar una viga por fuera)",
    "textureType": "Madera y Pintura/Liso",
    "useCase": "Interiores/Exteriores",
    "price": "75 MXN por pieza",
    "size": "595cm",
    "headerImage": {
      "id": 0,
      "src": esquineroexterno_default.a,
      "alt": "Esquinero Externo"
    },
    "gallery": [{
      "id": 0,
      "src": esquineroexterno_default.a,
      "alt": "Esquinero Externo"
    }, {
      "id": 1,
      "src": esquineroexterno_default.a,
      "alt": "Esquinero Externo"
    }]
  }, {
    "id": "EsquineroInterno",
    "title": "Esquinero Interno",
    "description": "Este accesorio se utiliza para dar curva en 90 grados (ejemplo esquina interna de un cuarto)",
    "textureType": "Madera y Pintura/Liso",
    "useCase": "Interiores/Exteriores",
    "price": "75 MXN por pieza",
    "size": "595cm",
    "headerImage": {
      "id": 0,
      "src": esquinerointerno_default.a,
      "alt": "Esquinero Interno"
    },
    "gallery": [{
      "id": 0,
      "src": esquinerointerno_default.a,
      "alt": "Esquinero Interno"
    }, {
      "id": 0,
      "src": esquinerointerno_default.a,
      "alt": "Esquinero Interno"
    }]
  }, {
    "id": "TerminalC",
    "title": "Terminal C",
    "description": "Accesorio que se utiliza para rematar los perímetros dando un terminado limpio a la instalación",
    "textureType": "Madera y Pintura/Lis",
    "useCase": "Interiores/Exteriores",
    "price": "75 MXN por pieza",
    "size": "595cm",
    "headerImage": {
      "id": 0,
      "src": terminalc_default.a,
      "alt": "Terminal C"
    },
    "gallery": [{
      "id": 0,
      "src": terminalc_default.a,
      "alt": "Terminal C"
    }, {
      "id": 0,
      "src": terminalc_default.a,
      "alt": "Terminal C"
    }]
  }],
  "panels": [{
    "id": "FX87-21",
    "title": "FX87-21",
    "description": "Hermoso acabado en caoba",
    "textureType": "Madera",
    "useCase": "Interiores/Exteriores",
    "price": "215.00 por metro cuadrado",
    "size": "595cm x 25cm x 0.7cm",
    "headerImage": {
      "id": 0,
      "src": FX87_21_default.a,
      "alt": "FX87_21"
    },
    "gallery": [{
      "id": 0,
      "src": FX87_21_default.a,
      "alt": "FX87_21"
    }, {
      "id": 0,
      "src": FX87_21_default.a,
      "alt": "FX87_21"
    }]
  }, {
    "id": "FX142-1",
    "title": "FX142-1",
    "description": "Hermoso acabado en caoba",
    "textureType": "Madera",
    "useCase": "Interiores/Exteriores",
    "price": "215.00 por metro cuadrado",
    "size": "595cm x 25cm x 0.7cm",
    "headerImage": {
      "id": 0,
      "src": FX142_1_default.a,
      "alt": "FX142-1"
    },
    "gallery": [{
      "id": 0,
      "src": FX142_1_default.a,
      "alt": "FX142_1"
    }, {
      "id": 0,
      "src": FX142_1_default.a,
      "alt": "FX142_1"
    }]
  }, {
    "id": "FX153-3",
    "title": "FX153-3",
    "description": "Hermoso acabado en caoba",
    "textureType": "Madera",
    "useCase": "Interiores/Exteriores",
    "price": "215.00 por metro cuadrado",
    "size": "595cm x 25cm x 0.7cm",
    "headerImage": {
      "id": 0,
      "src": FX153_3_default.a,
      "alt": "FX153_3"
    },
    "gallery": [{
      "id": 0,
      "src": FX153_3_default.a,
      "alt": "FX153_3"
    }, {
      "id": 0,
      "src": FX153_3_default.a,
      "alt": "FX153_3"
    }]
  }, {
    "id": "FX87-24",
    "title": "FX87-24",
    "description": "Hermoso acabado en caoba",
    "textureType": "Madera",
    "useCase": "Interiores/Exteriores",
    "price": "215.00 por metro cuadrado",
    "size": "595cm x 25cm x 0.7cm",
    "headerImage": {
      "id": 0,
      "src": FX87_24_default.a,
      "alt": "FX87_24"
    },
    "gallery": [{
      "id": 0,
      "src": FX87_24_default.a,
      "alt": "FX87_24"
    }, {
      "id": 0,
      "src": FX87_24_default.a,
      "alt": "FX87_24"
    }]
  }, {
    "id": "Blanco",
    "title": "Blanco",
    "description": "Hermoso acabado en caoba",
    "textureType": "Pintura/Liso",
    "useCase": "Interiores/Exteriores",
    "price": "215.00 por metro cuadrado",
    "size": "595cm x 25cm x 0.7cm",
    "headerImage": {
      "id": 0,
      "src": blanco_default.a,
      "alt": "Blanco"
    },
    "gallery": [{
      "id": 0,
      "src": blanco_default.a,
      "alt": "Blanco"
    }, {
      "id": 0,
      "src": blanco_default.a,
      "alt": "Blanco"
    }]
  }, {
    "id": "BlancoHumo",
    "title": "Blanco Humo",
    "description": "Hermoso acabado en caoba",
    "textureType": "Pintura/Liso",
    "useCase": "Interiores/Exteriores",
    "price": "215.00 por metro cuadrado",
    "size": "595cm x 25cm x 0.7cm",
    "headerImage": {
      "id": 0,
      "src": blancoHumo_default.a,
      "alt": "Blanco Humo"
    },
    "gallery": [{
      "id": 0,
      "src": blancoHumo_default.a,
      "alt": "Blanco Humo"
    }, {
      "id": 0,
      "src": blancoHumo_default.a,
      "alt": "Blanco Humo"
    }]
  }, {
    "id": "BlancoMarmol",
    "title": "Blanco Mármol",
    "description": "Hermoso acabado en caoba",
    "textureType": "Pintura/Liso",
    "useCase": "Interiores/Exteriores",
    "price": "215.00 por metro cuadrado",
    "size": "595cm x 25cm x 0.7cm",
    "headerImage": {
      "id": 0,
      "src": blancoMarmol_default.a,
      "alt": "Blanco Marmol"
    },
    "gallery": [{
      "id": 0,
      "src": blancoMarmol_default.a,
      "alt": "Blanco Marmol"
    }, {
      "id": 0,
      "src": blancoMarmol_default.a,
      "alt": "Blanco Marmol"
    }]
  }],
  "materials": [{
    "id": "AnguloAmarre",
    "title": "Angulo de Amarre",
    "description": "Hermoso acabado en caoba",
    "textureType": "Metal",
    "useCase": "Estructura oculta",
    "price": "65 MXN por pieza",
    "size": "305cm",
    "headerImage": {
      "id": 0,
      "src": angulo_amarre_default.a,
      "alt": "Angulo de Amarre"
    },
    "gallery": [{
      "id": 0,
      "src": angulo_amarre_default.a,
      "alt": "Angulo de amarre"
    }, {
      "id": 0,
      "src": angulo_amarre_default.a,
      "alt": "Angulo de Amarre"
    }]
  }, {
    "id": "CanalListon",
    "title": "Canal Listón",
    "description": "Hermoso acabado en caoba",
    "textureType": "Metal",
    "useCase": "Estructura oculta",
    "price": "35 MXN por pieza",
    "size": "305cm",
    "headerImage": {
      "id": 0,
      "src": canal_liston_default.a,
      "alt": "Canal Liston"
    },
    "gallery": [{
      "id": 0,
      "src": canal_liston_default.a,
      "alt": "Canal Liston"
    }, {
      "id": 0,
      "src": canal_liston_default.a,
      "alt": "Canal Liston"
    }]
  }]
};
/* harmony default export */ var products_data = (products_data_data);
// CONCATENATED MODULE: F:/panelmot-site/src/data/MockData.js

// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/Product/Product.jsx




function Product(_ref) {
  var data = _ref.data,
      onClickFunction = _ref.onClickFunction;

  function handleProductClick() {
    onClickFunction(data.title, data.description, data.textureType, data.useCase, data.price, data.headerImage.src, data.size, data.gallery);
  }

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "product",
    id: data.id,
    onClick: handleProductClick
  }, /*#__PURE__*/external_react_default.a.createElement(Card_default.a, {
    className: "product-category-card"
  }, /*#__PURE__*/external_react_default.a.createElement(Card_default.a.Img, {
    variant: "top",
    src: data.headerImage.src,
    alt: "Imagen del producto " + data.headerImage.alt
  }), /*#__PURE__*/external_react_default.a.createElement(Card_default.a.Body, null, /*#__PURE__*/external_react_default.a.createElement(Card_default.a.Title, {
    className: "product-category-text"
  }, data.title)))));
}

/* harmony default export */ var Product_Product = (Product);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Atoms/Product/index.js

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(9);
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_);

// CONCATENATED MODULE: F:/panelmot-site/src/components/Carousel/MaterialsCarousel/MaterialsCarousel.jsx

 //import "./index.css"





 //import { ProductsData } from '../../../data/MockData'





function MaterialsCarousel(_ref) {
  var onClickFunction = _ref.onClickFunction;

  function handleProductClick(title, description, textureType, useCase, price, imageSrc, size, gallery) {
    onClickFunction(title, description, textureType, useCase, price, imageSrc, size, gallery);
  }

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    minWidth: 1200
  }, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "products-carousel",
    variant: "dark",
    "data-ride": ""
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.materials[0],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Card_default.a, {
    className: "product-category-card"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.materials[1],
    onClickFunction: handleProductClick
  })))))))), /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    minWidth: 599,
    maxWidth: 1199
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "products-carousel",
    variant: "dark",
    "data-ride": ""
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.materials[0],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Card_default.a, {
    className: "product-category-card"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.materials[1],
    onClickFunction: handleProductClick
  }))))))), /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    maxWidth: 600
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "products-carousel",
    variant: "dark",
    "data-ride": ""
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.materials[0],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Card_default.a, {
    className: "product-category-card"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.materials[1],
    onClickFunction: handleProductClick
  }))))))));
}

/* harmony default export */ var MaterialsCarousel_MaterialsCarousel = (MaterialsCarousel);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Carousel/MaterialsCarousel/index.js

// CONCATENATED MODULE: F:/panelmot-site/src/components/Carousel/PanelsCarousel/PanelsCarousel.jsx

 //import "./index.css"



 //import { ProductsData } from '../../../data/MockData'





function PanelsCarousel(_ref) {
  var onClickFunction = _ref.onClickFunction;

  function handleProductClick(title, description, textureType, useCase, price, imageSrc, size, gallery) {
    onClickFunction(title, description, textureType, useCase, price, imageSrc, size, gallery);
  }

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    minWidth: 1200
  }, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "products-carousel",
    variant: "dark",
    "data-ride": "",
    interval: null
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[0],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[1],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[2],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[3],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[4],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[5],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[6],
    onClickFunction: handleProductClick
  }))))))), /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    minWidth: 599,
    maxWidth: 1199
  }, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "products-carousel",
    variant: "dark",
    "data-ride": "",
    interval: null
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[0],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[1],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[2],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[3],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[4],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[5],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[6],
    onClickFunction: handleProductClick
  })))))), /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    maxWidth: 600
  }, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "products-carousel",
    variant: "dark",
    "data-ride": "",
    interval: null
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "112",
    l: "112",
    md: "112",
    sm: "112",
    xs: "112"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[0],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[1],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[2],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[3],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[4],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[5],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.panels[6],
    onClickFunction: handleProductClick
  }))))))));
}

/* harmony default export */ var PanelsCarousel_PanelsCarousel = (PanelsCarousel);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Carousel/PanelsCarousel/index.js

// CONCATENATED MODULE: F:/panelmot-site/src/components/Carousel/ProfilesCarousel/ProfilesCarousel.jsx

 //import "./index.css"





 //import { ProductsData } from '../../../data/MockData'





function ProfilesCarousel(_ref) {
  var onClickFunction = _ref.onClickFunction;

  function handleProductClick(title, description, textureType, useCase, price, imageSrc, size, gallery) {
    onClickFunction(title, description, textureType, useCase, price, imageSrc, size, gallery);
  }

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    minWidth: 1200
  }, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "products-carousel",
    variant: "dark",
    "data-ride": ""
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[0],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[1],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[2],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "3",
    l: "3",
    md: "3",
    sm: "3",
    xs: "3"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[3],
    onClickFunction: handleProductClick
  }))))))), /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    minWidth: 599,
    maxWidth: 1199
  }, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "products-carousel",
    variant: "dark",
    "data-ride": ""
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[0],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[1],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[2],
    onClickFunction: handleProductClick
  })), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6",
    l: "6",
    md: "6",
    sm: "6",
    xs: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[3],
    onClickFunction: handleProductClick
  }))))))), /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    maxWidth: 600
  }, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "products-carousel",
    variant: "dark",
    "data-ride": ""
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[0],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[1],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[2],
    onClickFunction: handleProductClick
  })))), /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12",
    l: "12",
    md: "12",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement(Product_Product, {
    data: products_data.profiles[3],
    onClickFunction: handleProductClick
  }))))))));
}

/* harmony default export */ var ProfilesCarousel_ProfilesCarousel = (ProfilesCarousel);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Carousel/ProfilesCarousel/index.js

// CONCATENATED MODULE: F:/panelmot-site/src/components/Carousel/ProductsCarousel.jsx









function ProductsCarousel(_ref) {
  var handleProductClick = _ref.handleProductClick;

  function Hello(title, description, textureType, useCase, price, imageSrc, size, gallery) {
    handleProductClick(title, description, textureType, useCase, price, imageSrc, size, gallery);
  }

  var initialState = "paneles";

  var _useState = Object(external_react_["useState"])(initialState),
      _useState2 = slicedToArray_default()(_useState, 2),
      carouselCategory = _useState2[0],
      setPanelCategory = _useState2[1];

  if (carouselCategory == "paneles") {
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
      className: "justify-content-center mb-5"
    }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
      xl: "4",
      l: "4",
      md: "4",
      sm: "6",
      xs: "6",
      className: "text-left"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "article-category selected-category",
      onClick: function onClick() {
        setPanelCategory("paneles");
      }
    }, "Paneles")), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
      xl: "4",
      l: "4",
      md: "4",
      sm: "6",
      xs: "6",
      className: "text-left"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "article-category",
      onClick: function onClick() {
        return setPanelCategory("perfiles");
      }
    }, "Perfiles")), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
      xl: "4",
      l: "4",
      md: "4",
      sm: "12",
      xs: "12",
      className: "text-left"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "article-category",
      onClick: function onClick() {
        return setPanelCategory("materiales-instalacion");
      }
    }, "Materiales para instalaci\xF3n"))), /*#__PURE__*/external_react_default.a.createElement(PanelsCarousel_PanelsCarousel, {
      onClickFunction: Hello
    }));
  } else if (carouselCategory == "perfiles") {
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
      className: "justify-content-center mb-5"
    }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
      xl: "4",
      l: "4",
      md: "4",
      sm: "6",
      xs: "6",
      className: "text-left"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "article-category",
      onClick: function onClick() {
        setPanelCategory("paneles");
      }
    }, "Paneles")), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
      xl: "4",
      l: "4",
      md: "4",
      sm: "6",
      xs: "6",
      className: "text-left"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "article-category selected-category",
      onClick: function onClick() {
        return setPanelCategory("perfiles");
      }
    }, "Perfiles")), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
      xl: "4",
      l: "4",
      md: "4",
      sm: "12",
      xs: "12",
      className: "text-center"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "article-category",
      onClick: function onClick() {
        return setPanelCategory("materiales-instalacion");
      }
    }, "Materiales para instalaci\xF3n"))), /*#__PURE__*/external_react_default.a.createElement(ProfilesCarousel_ProfilesCarousel, {
      onClickFunction: Hello
    }));
  } else if (carouselCategory == "materiales-instalacion") {
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
      className: "justify-content-center mb-5"
    }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
      xl: "4",
      l: "4",
      md: "4",
      sm: "6",
      xs: "6",
      className: "text-left"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "article-category",
      onClick: function onClick() {
        setPanelCategory("paneles");
      }
    }, "Paneles")), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
      xl: "4",
      l: "4",
      md: "4",
      sm: "6",
      xs: "6",
      className: "text-left"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "article-category",
      onClick: function onClick() {
        return setPanelCategory("perfiles");
      }
    }, "Perfiles")), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
      xl: "4",
      l: "4",
      md: "4",
      sm: "12",
      xs: "12",
      className: "text-left"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "article-category selected-category",
      onClick: function onClick() {
        return setPanelCategory("materiales-instalacion");
      }
    }, "Materiales para instalaci\xF3n"))), /*#__PURE__*/external_react_default.a.createElement(MaterialsCarousel_MaterialsCarousel, {
      onClickFunction: Hello
    }));
  }
}

/* harmony default export */ var Carousel_ProductsCarousel = (ProductsCarousel);
// CONCATENATED MODULE: F:/panelmot-site/src/components/Carousel/index.js

// CONCATENATED MODULE: F:/panelmot-site/src/components/Organisms/Articles/Articles.jsx















function Articles_Articles() {
  function updateProductDetailData(title, description, textureType, useCase, price, imageSrc, size, gallery) {
    setTitle(title);
    setDescription(description);
    setTextureType(textureType);
    setUseCase(useCase);
    setPrice(price);
    setImageSrc(imageSrc);
    setProductSize(size);
    setProductGallery(gallery);
    console.log(gallery);
  }

  var _useState = Object(external_react_["useState"])('FX87-21'),
      _useState2 = slicedToArray_default()(_useState, 2),
      productTitle = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(external_react_["useState"])('Hermoso acabado en caoba'),
      _useState4 = slicedToArray_default()(_useState3, 2),
      productDescription = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(external_react_["useState"])('Madera'),
      _useState6 = slicedToArray_default()(_useState5, 2),
      productTextureType = _useState6[0],
      setTextureType = _useState6[1];

  var _useState7 = Object(external_react_["useState"])('Interiores/Exteriores'),
      _useState8 = slicedToArray_default()(_useState7, 2),
      productUseCase = _useState8[0],
      setUseCase = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(products_data.panels[0].headerImage),
      _useState10 = slicedToArray_default()(_useState9, 2),
      productImageSrc = _useState10[0],
      setImageSrc = _useState10[1];

  var _useState11 = Object(external_react_["useState"])('215.00 por metro cuadrado'),
      _useState12 = slicedToArray_default()(_useState11, 2),
      productPrice = _useState12[0],
      setPrice = _useState12[1];

  var _useState13 = Object(external_react_["useState"])("595cm x 25cm x 0.7cm"),
      _useState14 = slicedToArray_default()(_useState13, 2),
      productSize = _useState14[0],
      setProductSize = _useState14[1];

  var _useState15 = Object(external_react_["useState"])([{
    id: products_data.panels[0].gallery[0].id,
    src: products_data.panels[0].gallery[0].src,
    alt: products_data.panels[0].gallery[0].alt
  }, {
    id: products_data.panels[0].gallery[1].id,
    src: products_data.panels[0].gallery[1].src,
    alt: products_data.panels[0].gallery[1].alt
  }]),
      _useState16 = slicedToArray_default()(_useState15, 2),
      productGallery = _useState16[0],
      setProductGallery = _useState16[1];

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "section-container justify-content-center",
    id: "Articles"
  }, /*#__PURE__*/external_react_default.a.createElement(Container_default.a, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, {
    className: "mb-5"
  }, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "12 text-center"
  }, /*#__PURE__*/external_react_default.a.createElement(Atoms_SectionSubtitle_SectionSubtitle, {
    label: "Conoce nuestro catálogo"
  }))), /*#__PURE__*/external_react_default.a.createElement(Carousel_ProductsCarousel, {
    handleProductClick: updateProductDetailData
  }), /*#__PURE__*/external_react_default.a.createElement(Row_default.a, null, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, null, /*#__PURE__*/external_react_default.a.createElement("h3", {
    className: "display-3"
  }, productTitle), /*#__PURE__*/external_react_default.a.createElement("p", null, productDescription)), /*#__PURE__*/external_react_default.a.createElement(Row_default.a, null, /*#__PURE__*/external_react_default.a.createElement(Row_default.a, null, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xxl: "6",
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Textura tipo:"))), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xxl: "6",
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, productTextureType))), /*#__PURE__*/external_react_default.a.createElement(Row_default.a, null, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xxl: "6",
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Uso:"))), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xxl: "6",
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, productUseCase))), /*#__PURE__*/external_react_default.a.createElement(Row_default.a, null, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xxl: "6",
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Precio:"))), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xxl: "6",
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "$", productPrice))), /*#__PURE__*/external_react_default.a.createElement(Row_default.a, null, /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xxl: "6",
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "Medidas:"))), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xxl: "6",
    xl: "6",
    l: "6",
    md: "6",
    sm: "12",
    xs: "12"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, productSize))))), /*#__PURE__*/external_react_default.a.createElement(Col_default.a, {
    xl: "6"
  }, /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a, {
    className: "product-installation-carousel",
    variant: "dark",
    interval: null
  }, productGallery.map(function (element) {
    return /*#__PURE__*/external_react_default.a.createElement(Carousel_default.a.Item, null, /*#__PURE__*/external_react_default.a.createElement("img", {
      src: element.src,
      alt: element.alt
    }));
  })))))));
}

/* harmony default export */ var Organisms_Articles_Articles = (Articles_Articles);
// CONCATENATED MODULE: F:/panelmot-site/src/components/App/App.jsx















 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  //window.addEventListener('scroll', changeNavBarColor);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(Navbar_default.a, {
    id: "navbar",
    bg: "dark",
    variant: "dark",
    expand: "lg",
    fixed: "top"
  }, /*#__PURE__*/external_react_default.a.createElement(Container_default.a, null, /*#__PURE__*/external_react_default.a.createElement(Navbar_default.a.Brand, {
    href: "#home"
  }, /*#__PURE__*/external_react_default.a.createElement(logo, {
    src: Logo_default.a,
    className: "d-inline-block align-middle navbar-image",
    alt: "React Bootstrap logo"
  }), ' ', "Panelmot PVC"), /*#__PURE__*/external_react_default.a.createElement(Navbar_default.a.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/external_react_default.a.createElement(Navbar_default.a.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/external_react_default.a.createElement(Nav_default.a, {
    className: "me-auto"
  }), /*#__PURE__*/external_react_default.a.createElement(Nav_default.a, {
    className: "me-auto"
  }, /*#__PURE__*/external_react_default.a.createElement(Nav_default.a.Link, {
    className: "navlink",
    href: "#Hero"
  }, "Home"), /*#__PURE__*/external_react_default.a.createElement(Nav_default.a.Link, {
    className: "navlink",
    href: "#Articles"
  }, "Cat\xE1logo"), /*#__PURE__*/external_react_default.a.createElement(Nav_default.a.Link, {
    className: "navlink",
    href: "#AboutUs"
  }, "Nosotros"), /*#__PURE__*/external_react_default.a.createElement(Nav_default.a.Link, {
    className: "navlink",
    href: "#FAQ"
  }, "FAQ"), /*#__PURE__*/external_react_default.a.createElement(Nav_default.a.Link, {
    className: "navlink",
    href: "#Contact"
  }, "Contacto"))))), /*#__PURE__*/external_react_default.a.createElement(Organisms_Hero_Hero, null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "spa"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(Organisms_Articles_Articles, null), /*#__PURE__*/external_react_default.a.createElement(AboutUs_AboutUs, null), /*#__PURE__*/external_react_default.a.createElement(Organisms_FAQ_FAQ, null), /*#__PURE__*/external_react_default.a.createElement(Contact_Contact, null))));
}

/* harmony default export */ var App_App = (App);
// CONCATENATED MODULE: F:/panelmot-site/src/components/App/index.js


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(37);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(19);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("F:\\panelmot-site\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("F:\\panelmot-site\\artifacts\\__react_static_root__\\node_modules\\react-static\\lib\\browser\\components\\Default404");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static"));
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NotFound__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(23);

var _router = __webpack_require__(71);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/test.f1a6c867.mp4";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/monte_oliva2.ef942973.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/panelmot_logo.f20cc722.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-icons/hi");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner_image0.a0c6920b.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner_image1.23a45ee5.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner_image2.d7703626.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner_image3.193d3c27.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner_image4.9b45a0d4.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner_image5.7ac38686.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner_image6.b6158b1c.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner_image7.56b7bbcf.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Logo.14135563.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(72);
module.exports = __webpack_require__(79);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(70)["default"];

var _require = __webpack_require__(41),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(41),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(73),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);










Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 47, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(47);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/components/Pages/index */).then(__webpack_require__.bind(null, 48))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(48);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Pages/index";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/components/Pages/index.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Pages/NotFound/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/components/Pages/NotFound/index */).then(__webpack_require__.bind(null, 49))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Pages/NotFound/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(49);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Pages/NotFound/index";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/components/Pages/NotFound/index.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/Pages/NotFound/NotFound.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/components/Pages/NotFound/NotFound.jsx */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/Pages/NotFound/NotFound.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/Pages/NotFound/NotFound.jsx";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/components/Pages/NotFound/NotFound.jsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': t_0,
  '__react_static_root__/src/components/Pages/index.js': t_1,
  '__react_static_root__/src/components/Pages/NotFound/index.js': t_2,
  '__react_static_root__/src/components/Pages/NotFound/NotFound.jsx': t_3
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(38);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 19,
	"./": 19,
	"./index": 19,
	"./index.js": 19
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 76;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(37);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(42);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(43);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(17);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(44);

var _interopRequireWildcard = __webpack_require__(45);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(80);

var _Suspense = _interopRequireDefault(__webpack_require__(81));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(84)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("F:\\panelmot-site\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(45);

var _interopRequireDefault = __webpack_require__(44);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(82));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(83));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);




 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_components_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_components_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./components/App', function () {
      render(_components_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(85)(module)))

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "data:text/x-scss;base64,OnJvb3Qgew0KICBmb250LXNpemU6IDE4cHg7DQp9DQoNCmgxIHsNCiAgZm9udC1zaXplOiAzLjVyZW07DQp9DQoNCkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHsNCiAgaDEgew0KICAgICAgZm9udC1zaXplOiAycmVtOw0KICB9DQp9DQoNCmgyIHsNCiAgZm9udC1zaXplOiAzNXB4Ow0KfQ=="

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("normalize.css");

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap);", ""]);

// Module
exports.push([module.i, ":root {\r\n  font-size: 18px;\r\n  font-family: 'Nunito Sans','HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\r\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\r\n}\r\n* {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.section-container {\r\n\r\n}\r\n\r\nbody {\r\n  font-family: 'Nunito Sans', sans-serif;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #F9F9F9;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #108db8;\r\n  font-weight: bold;\r\n}\r\n\r\nh1 {\r\n  font-size: 3.5rem;\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  h1 {\r\n      font-size: 2rem;\r\n  }\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\n.content {\r\n  padding: 1rem;\r\n  width: 84%;\r\n}\r\n\r\n.spa {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items:center;\r\n}\r\n\r\nhtml {\r\n  font-size: 1rem;\r\n}\r\n\r\nh1,h2,h3,h4,p, label {\r\n  color: black;\r\n}\r\n\r\n\r\n\r\n.navbar {\r\n  background: #FFFFFF00;\r\n}\r\n\r\n.nav-section {\r\n  padding-right: 2rem;\r\n  color: white;\r\n}\r\n\r\nnav {\r\n  background: #FF000000;\r\n}\r\n\r\n.display-4 {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.carousel-control-next-icon, .carousel-control-prev-icon {\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n\r\n.nav-item {\r\n  padding-right: 2rem;\r\n}\r\n\r\n.navbar-image {\r\n  margin-right: 2vw;\r\n}\r\n\r\n.navlink {\r\n  margin-right: 3vw;\r\n  color: white;\r\n  \r\n  border-radius: 8px;\r\n}\r\n\r\n.navlink:hover {\r\n  background-color: #58C33D;\r\n  color: white;\r\n}\r\n\r\n.active {\r\n  color: white;\r\n}", ""]);



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Module
exports.push([module.i, ".monteoliva-logo {\r\n    width:\"50%\";\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n#Articles, #AboutUs {\r\n    padding-top: 100px;\r\n}", ""]);



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Module
exports.push([module.i, ".contact-button {\r\n    margin-top: 20px;\r\n    border: none;\r\n    background-color: #58C33D;\r\n    color: white;\r\n    border-radius: 12px;\r\n    font-weight: bold;\r\n\r\n    min-width: 30%;\r\n    max-width: 60%;\r\n    min-height: 80px;\r\n    max-height: auto;\r\n}\r\n\r\n.contact-data {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.form-control {\r\n    border-color: black !important;\r\n    border-width: 2px !important;\r\n    background-color: white;\r\n}\r\n\r\nsvg {\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n#Contact {\r\n    padding-top: 100px;\r\n    \r\n}\r\n\r\n.form-label {\r\n    font-size: 1.5rem;\r\n}", ""]);



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Module
exports.push([module.i, ".accordion-button {\r\n    font-size: 1.4rem !important;\r\n    background-color: #E9E9E9 !important;\r\n    height: 6rem;\r\n    color: black !important;\r\n    font-weight: bold;\r\n}\r\n\r\n.accordion-button:after {\r\n    width: 40px !important;\r\n    height: 40px !important;\r\n    background-size: 40px 40px !important;\r\n}\r\n\r\n.accordion-button:not(.collapsed)::after {\r\n    color: black !important;\r\n}\r\n.accordion-button:not(.collapsed) {\r\n    color: black !important;\r\n}\r\n\r\n.accordion-body {\r\n    font-size: 30px;\r\n}\r\n.accordion-item {\r\n    width: 90%;\r\n    margin-top: 2rem;\r\n    background-color: #F9F9F9;\r\n    border: none;\r\n}\r\n\r\n#FAQ {\r\n    padding-top: 100px;\r\n}\r\n\r\n.faq-link {\r\n    font-size: 1.2rem;\r\n}\r\n.faq-answer-text {\r\n    font-size: 1.5rem;\r\n}", ""]);



/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Module
exports.push([module.i, ".container-hero {\r\n    height: 100%;\r\n    padding: 0;\r\n\r\n    \r\n}\r\n\r\n.carousel-hero {\r\n    height: 100%;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.carousel-hero-inner img {\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n\r\n.carousel-hero-item {\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n\r\n.hero-title {\r\n    color:white;\r\n    font-weight: 800;\r\n}\r\n\r\n.hero-info {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 25%;\r\n    width: 50%;\r\n    background-color: #00000000;\r\n    z-index: 99;\r\n}\r\n\r\n.decrease-font {\r\n    font-size: 4vw;\r\n}\r\n\r\n.hero-subtitle {\r\n    padding-top: 2vw;\r\n    font-size: 2vw;\r\n    width: 70%;\r\n    color:white;\r\n    font-weight:700;\r\n}\r\n.hero-subtitle-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.hero-button-container {\r\n    height: 50%;\r\n    margin-top: 1vw;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n.colorChange {\r\n    background-color: #A0A0A0;\r\n}\r\n\r\n.banner-wrapper {\r\n    position:relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.hero-button {\r\n    background-color: #58C33D;\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: #F9F9F9;\r\n    cursor: pointer;\r\n    font: inherit;\r\n    font-size: 2.5vw;\r\n    font-weight: 800;\r\n    padding: 1vw 2vw;\r\n    text-align: center;\r\n}\r\n\r\n.hero-button:hover {\r\n    background-color: #227849;\r\n}\r\n\r\nspan {\r\n    width: 10vw;\r\n    height: 10vw;\r\n}\r\n\r\n@media (max-width: 1568px) {\r\n    .carousel-inner {\r\n      height: 100%;\r\n    }\r\n  \r\n    .carousel-inner img {\r\n      height: 100%;\r\n      width: 100%;\r\n      -o-object-fit: cover;\r\n         object-fit: cover;\r\n    }\r\n  \r\n    .carousel-hero-item {\r\n      height: 100%;\r\n      width: 100%;\r\n    }\r\n  \r\n    .hero-info {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 70%;\r\n      background-color: #00000000;\r\n    }\r\n  }\r\n\r\n\r\n@media (max-width: 768px) {\r\n\r\n    #Hero {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: relative;\r\n        width: 100vw;\r\n        height: 100vh;\r\n    }\r\n    \r\n    .container-hero {\r\n        height: 100%;\r\n    }\r\n    \r\n    .carousel-hero {\r\n        height: 100%;\r\n    }\r\n    \r\n    .carousel-inner {\r\n        height: 100%;\r\n    }\r\n    \r\n    .carousel-hero-item {\r\n        height: 100vh;\r\n    }\r\n    \r\n    .carousel-hero-item img {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n\r\n    }\r\n\r\n    .decrease-font {\r\n        font-size: 7vw;\r\n    }\r\n\r\n    .hero-subtitle {\r\n        font-size: 5vw;\r\n    }\r\n\r\n    .hero-info {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        width: 70%;\r\n        background-color: #00000000;\r\n    }\r\n\r\n    \r\n    .hero-button {\r\n        background-color: #58C33D;\r\n        border: none;\r\n        border-radius: 10px;\r\n        color: #F9F9F9;\r\n        cursor: pointer;\r\n        font: inherit;\r\n        font-size: 6vw;\r\n        font-weight: 800;\r\n        padding: 1vw 2vw;\r\n        text-align: center;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n    #Hero {\r\n        position: relative;\r\n        width: 100vw;\r\n        height: 100vh\r\n    }\r\n    \r\n    .container-hero {\r\n        height: 100%;\r\n    }\r\n    \r\n    .carousel-hero {\r\n        height: 100%;\r\n    }\r\n    \r\n    .carousel-hero-inner {\r\n        height: 100%;\r\n    }\r\n    \r\n    .carousel-hero-item {\r\n        height: 100%;\r\n    }\r\n    \r\n    .carousel-hero-item img {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n\r\n    }\r\n\r\n    .decrease-font {\r\n        font-size: 7vw;\r\n    }\r\n\r\n    .hero-subtitle {\r\n        font-size: 5vw;\r\n    }\r\n\r\n    .hero-info {\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        width: 70%;\r\n        background-color: #00000000;\r\n        z-index: 99;\r\n    }\r\n\r\n    \r\n    .hero-button {\r\n        background-color: #58C33D;\r\n        border: none;\r\n        border-radius: 10px;\r\n        color: #F9F9F9;\r\n        cursor: pointer;\r\n        font: inherit;\r\n        font-size: 6vw;\r\n        font-weight: 800;\r\n        padding: 1vw 2vw;\r\n    }\r\n\r\n}", ""]);



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner_image8.d04e02b3.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Module
exports.push([module.i, ".article-category {\r\n  background-color: #F9F9F9;\r\n  border: none;\r\n  margin-right: 20%;\r\n  font-weight: 700;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.product-category-card {\r\n  background-color: #F9F9F9 !important;\r\n}\r\n\r\n.article-category:hover {\r\n  text-decoration: none;\r\n  border-bottom: 5px solid green;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.product-installation-carousel .carousel-control-prev {\r\n  margin-left: -15%;\r\n}\r\n\r\n.product-installation-carousel .carousel-control-next {\r\n  margin-right: -15%;\r\n}\r\n\r\n.products-carousel .carousel-control-prev {\r\n  margin-left: -10%;\r\n}\r\n\r\n.products-carousel .carousel-control-next {\r\n  margin-right: -10%;\r\n}\r\n\r\n.product {\r\n  border: none;\r\n  background-color: #F9F9F9;\r\n  padding: 15px;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n}\r\n\r\n.product:hover {\r\n  border: 2px solid green;\r\n}\r\n\r\n.product-installation-carousel {\r\n  margin: 1.5rem;\r\n}\r\n\r\n.product-installation-carousel img {\r\n  max-width: 100%;\r\n}\r\n\r\n.product-category-card img {\r\n  height: 100%;\r\n  width:100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.product-category-card {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.selected-category {\r\n  text-decoration: none;\r\n  border-bottom: 5px solid green;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.product-category-text {\r\n  font-weight: 700 !important;\r\n  font-size: 1.8rem !important;\r\n}\r\n\r\n.product-category-card {\r\n  border: none !important;\r\n}", ""]);



/***/ })
/******/ ]);
});