require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("react-redux");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("redux");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(10);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/home/xiaochuan/wwwroot/react-ssr-starter/src/components/Html.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function (_Component) {
  (0, _inherits3.default)(Html, _Component);

  function Html() {
    (0, _classCallCheck3.default)(this, Html);
    return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
  }

  (0, _createClass3.default)(Html, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          scripts = _props.scripts,
          children = _props.children,
          style = _props.style,
          initialState = _props.initialState;

      return _react2.default.createElement(
        'html',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        },
        _react2.default.createElement(
          'head',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          },
          _react2.default.createElement('meta', { charset: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          }),
          _react2.default.createElement('title', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }),
          _react2.default.createElement('link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          }),
          _react2.default.createElement('link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }),
          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: 'body, .root { margin: 0;padding:0;}' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }),
          style && _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style }, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          'body',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: children }, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'window.___INITIAL_STATE__ = ' + (0, _stringify2.default)(initialState) }, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }),
          scripts && scripts.map(function (script) {
            return _react2.default.createElement('script', { key: script, src: script, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: _this2
            });
          })
        )
      );
    }
  }]);
  return Html;
}(_react.Component);

Html.propTypes = {
  scripts: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired),
  children: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.string,
  initialState: _react.PropTypes.object.isRequired
};
var _default = Html;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', '/home/xiaochuan/wwwroot/react-ssr-starter/src/components/Html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/xiaochuan/wwwroot/react-ssr-starter/src/components/Html.js');
})();

;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsxFileName = '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/index.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(26);

var _Home2 = _interopRequireDefault(_Home);

var _Number = __webpack_require__(27);

var _Number2 = _interopRequireDefault(_Number);

var _Welcome = __webpack_require__(29);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _App = __webpack_require__(25);

var _App2 = _interopRequireDefault(_App);

var _Match = __webpack_require__(40);

var _Match2 = _interopRequireDefault(_Match);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return _react2.default.createElement(
    _App2.default,
    (0, _extends3.default)({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }),
    _react2.default.createElement(_Match2.default, { exactly: true, pattern: '/', component: _Home2.default, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    }),
    _react2.default.createElement(_Match2.default, { pattern: '/number', component: _Number2.default, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }),
    _react2.default.createElement(_Match2.default, { pattern: '/welcome', component: _Welcome2.default, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    })
  );
};

exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/index.js');
})();

;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reactRouter = __webpack_require__(7);

var _location = __webpack_require__(30);

var _reducers = __webpack_require__(32);

var _default = function _default() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var middleware = [];

  var enhancers = [];
  if (false) {
    var devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  var store = (0, _redux.createStore)((0, _reducers.makeRootReducer)(), initialState, _redux.compose.apply(undefined, [_redux.applyMiddleware.apply(undefined, middleware)].concat(enhancers)));

  // 创建asyncReducers存放异步加载进来的state
  store.asyncReducers = {};

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  return store;
};

exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/createStore.js');
})();

;

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("./assets");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("babel-polyfill");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("node-fetch");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/home/xiaochuan/wwwroot/react-ssr-starter/src/components/App.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const ContextType = {
//   // Enables critical path CSS rendering
//   // https://github.com/kriasoft/isomorphic-style-loader
//   insertCss: PropTypes.func.isRequired,
// }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { insertCss: this.props.onInsertCss };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        this.props.children
      );
    }
  }]);
  return App;
}(_react.Component);

// class App extends Component {
//   render () {
//     return (<div>{this.props.children}</div>)
//   }
// }

App.propTypes = {
  onInsertCss: _react.PropTypes.func.isRequired
};
App.childContextTypes = {
  insertCss: _react.PropTypes.func.isRequired
};
var _default = App;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/home/xiaochuan/wwwroot/react-ssr-starter/src/components/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/xiaochuan/wwwroot/react-ssr-starter/src/components/App.js');
})();

;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Home/index.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(39);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactRouter = __webpack_require__(7);

var _Home = __webpack_require__(35);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeContainer = function (_Component) {
  (0, _inherits3.default)(HomeContainer, _Component);

  function HomeContainer() {
    (0, _classCallCheck3.default)(this, HomeContainer);
    return (0, _possibleConstructorReturn3.default)(this, (HomeContainer.__proto__ || (0, _getPrototypeOf2.default)(HomeContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(HomeContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _Home2.default.home, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        },
        _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          'Home 123'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: 'number', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          'Number'
        )
      );
    }
  }]);
  return HomeContainer;
}(_react.Component);

var _default = (0, _withStyles2.default)(_Home2.default)(HomeContainer);

exports.default = _default;
// export default HomeContainer

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomeContainer, 'HomeContainer', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Home/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Home/index.js');
})();

;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Number/index.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberContainer = function (_Component) {
  (0, _inherits3.default)(NumberContainer, _Component);

  function NumberContainer() {
    (0, _classCallCheck3.default)(this, NumberContainer);
    return (0, _possibleConstructorReturn3.default)(this, (NumberContainer.__proto__ || (0, _getPrototypeOf2.default)(NumberContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(NumberContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        },
        _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          },
          'Number Page'
        )
      );
    }
  }]);
  return NumberContainer;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    number: state.number
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(NumberContainer);

exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NumberContainer, 'NumberContainer', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Number/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Number/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Number/index.js');
})();

;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


// let offsetWidth = process.env.BROWSER ? window.innerWidth : 0
// let offsetHeight = process.env.BROWSER ? window.innerHeight : 0

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var offsetWidth = 1000;
var offsetHeight = 600;
var maxStar = 50;
var maxDistance = Math.sqrt(offsetWidth * offsetWidth / 4 + offsetHeight * offsetHeight / 4);

var maxSpeed = 20;
function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Stars = function () {
  function Stars() {
    (0, _classCallCheck3.default)(this, Stars);
    this.list = [];

    for (var i = 0; i < maxStar; i++) {
      this.list[i] = new Star();
    }
  }

  (0, _createClass3.default)(Stars, [{
    key: 'draw',
    value: function draw(ctx) {
      this.list.forEach(function (star) {
        return star.draw(ctx);
      });
    }
  }]);
  return Stars;
}();

var Star = function () {
  function Star() {
    (0, _classCallCheck3.default)(this, Star);

    this.style = 0;
    this.startx = this.x = random(offsetWidth);
    this.starty = this.y = random(offsetHeight);
    // 距离中点  x轴长度
    this.xAxisDistance = Math.abs(this.x - offsetWidth / 2);
    // 距离中点  y轴长度
    this.yAxisDistance = Math.abs(this.y - offsetHeight / 2);
    // 距离中点  直线
    this.distance = Math.sqrt(this.xAxisDistance * this.xAxisDistance + this.yAxisDistance * this.yAxisDistance);
    // 距离中点 比例
    this.scale = this.distance / maxDistance;
    // 直线速度
    this.beginSpeed = random(2);
    this.speed = maxSpeed * this.scale + this.beginSpeed;
    this.xspeed = this.speed * this.xAxisDistance / this.distance;
    this.yspeed = this.speed * this.yAxisDistance / this.distance;

    this.beginRadius = random(2);
    this.radius = this.scale * (4 - 1) + 1 + this.beginRadius;
  }

  (0, _createClass3.default)(Star, [{
    key: 'draw',
    value: function draw(ctx) {
      ctx.beginPath();
      // ctx.fillStyle = `rgba(255, 255, 255, ${this.style})`
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      this.move();
    }
  }, {
    key: 'move',
    value: function move() {
      if (this.x < 0 || this.x > offsetWidth || this.y < 0 || this.y > offsetHeight) {
        this.beginSpeed = random(4);
        this.beginRadius = random(2);
        // this.x = random(offsetWidth / 4, offsetWidth / 4 * 3)
        // this.y = random(offsetHeight / 4, offsetHeight / 4 * 3)
        this.startx = this.x = random(offsetWidth);
        this.starty = this.y = random(offsetHeight);
      }
      this.x += this.x > offsetWidth / 2 ? this.xspeed : -this.xspeed;
      this.y += this.y > offsetHeight / 2 ? this.yspeed : -this.yspeed;
      // 距离中点  x轴长度
      this.xAxisDistance = Math.abs(this.x - offsetWidth / 2);
      // 距离中点  y轴长度
      this.yAxisDistance = Math.abs(this.y - offsetHeight / 2);
      // 距离中点  直线
      this.distance = Math.sqrt(this.xAxisDistance * this.xAxisDistance + this.yAxisDistance * this.yAxisDistance);
      // 距离中点 比例
      this.scale = this.distance / maxDistance;

      this.style = this.scale * 3;
      // 直线速度
      this.speed = maxSpeed * this.scale + this.beginSpeed;
      this.xspeed = this.speed * this.xAxisDistance / this.distance;
      this.yspeed = this.speed * this.yAxisDistance / this.distance;

      this.radius = this.scale * (4 - 1) + 1 + this.beginRadius;
    }
  }]);
  return Star;
}();

var Canvas = function () {
  function Canvas(el) {
    (0, _classCallCheck3.default)(this, Canvas);

    this.el = el;
    this.el.width = offsetWidth;
    this.el.height = offsetHeight;
    this.ctx = el.getContext('2d');
    this.stars = new Stars();
  }

  (0, _createClass3.default)(Canvas, [{
    key: 'draw',
    value: function draw() {
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, offsetWidth, offsetHeight);
      this.stars.draw(this.ctx);
      this.stop = window.requestAnimationFrame(this.draw.bind(this));
    }
  }]);
  return Canvas;
}();

var _default = Canvas;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(offsetWidth, 'offsetWidth', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');

  __REACT_HOT_LOADER__.register(offsetHeight, 'offsetHeight', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');

  __REACT_HOT_LOADER__.register(maxStar, 'maxStar', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');

  __REACT_HOT_LOADER__.register(maxDistance, 'maxDistance', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');

  __REACT_HOT_LOADER__.register(maxSpeed, 'maxSpeed', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');

  __REACT_HOT_LOADER__.register(random, 'random', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');

  __REACT_HOT_LOADER__.register(Stars, 'Stars', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');

  __REACT_HOT_LOADER__.register(Star, 'Star', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');

  __REACT_HOT_LOADER__.register(Canvas, 'Canvas', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/Canvas.js');
})();

;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/index.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Canvas = __webpack_require__(28);

var _Canvas2 = _interopRequireDefault(_Canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WelcomeContainer = function (_Component) {
  (0, _inherits3.default)(WelcomeContainer, _Component);

  function WelcomeContainer() {
    (0, _classCallCheck3.default)(this, WelcomeContainer);
    return (0, _possibleConstructorReturn3.default)(this, (WelcomeContainer.__proto__ || (0, _getPrototypeOf2.default)(WelcomeContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(WelcomeContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (false) {
        var canvas = this.refs.canvas;

        var control = new _Canvas2.default(canvas);
        control.draw();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('canvas', { ref: 'canvas', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      });
    }
  }]);
  return WelcomeContainer;
}(_react.Component);

var _default = WelcomeContainer;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WelcomeContainer, 'WelcomeContainer', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/xiaochuan/wwwroot/react-ssr-starter/src/routes/Welcome/index.js');
})();

;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationChange = locationChange;
exports.default = locationReducer;
// ------------------------------------
// Constants
// ------------------------------------
var LOCATION_CHANGE = exports.LOCATION_CHANGE = 'LOCATION_CHANGE';

// ------------------------------------
// Actions
// ------------------------------------

/**
 * location change
 *
 * @param {string} location
 * @returns {{type: string, payload: string}}
 */
function locationChange() {
  var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

  return {
    type: LOCATION_CHANGE,
    payload: location
  };
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------

/**
 *
 * @param {{dispatch: *}}
 * @returns {function(*=): *}
 */
var updateLocation = exports.updateLocation = function updateLocation(_ref) {
  var dispatch = _ref.dispatch;

  return function (nextLocation) {
    return dispatch(locationChange(nextLocation));
  };
};

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = null;

/**
 * location reducer
 *
 * @param {object} state
 * @param {object} action
 * @returns {string|*}
 */
function locationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  return action.type === LOCATION_CHANGE ? action.payload : state;
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOCATION_CHANGE, 'LOCATION_CHANGE', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/location.js');

  __REACT_HOT_LOADER__.register(locationChange, 'locationChange', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/location.js');

  __REACT_HOT_LOADER__.register(updateLocation, 'updateLocation', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/location.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/location.js');

  __REACT_HOT_LOADER__.register(locationReducer, 'locationReducer', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/location.js');
})();

;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NUMBER_ADD = undefined;

var _assign = __webpack_require__(8);

var _assign2 = _interopRequireDefault(_assign);

exports.numberAdd = numberAdd;
exports.default = numberReducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER_ADD = exports.NUMBER_ADD = 'NUMBER_ADD';

function numberAdd(number) {
  return {
    type: NUMBER_ADD,
    payload: number
  };
}

var initialState = 0;

function numberReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case NUMBER_ADD:
      return (0, _assign2.default)({}, state, action.payload);
      break;
    default:
      return state;
  }
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NUMBER_ADD, 'NUMBER_ADD', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/number.js');

  __REACT_HOT_LOADER__.register(numberAdd, 'numberAdd', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/number.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/number.js');

  __REACT_HOT_LOADER__.register(numberReducer, 'numberReducer', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/number.js');
})();

;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectReducer = exports.makeRootReducer = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _redux = __webpack_require__(11);

var _number = __webpack_require__(31);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeRootReducer = exports.makeRootReducer = function makeRootReducer(asyncReducers) {
  return (0, _redux.combineReducers)((0, _extends3.default)({
    number: _number2.default
  }, asyncReducers));
};

// 异步加载组件的时候获取原始store，和新增的reducer将其存放到store.asyncReducers
// 通过创建函数从新创建store然后执行replaceReducer方法更新
var injectReducer = exports.injectReducer = function injectReducer(store, _ref) {
  var key = _ref.key,
      reducer = _ref.reducer;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

var _default = makeRootReducer;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(makeRootReducer, 'makeRootReducer', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/reducers.js');

  __REACT_HOT_LOADER__.register(injectReducer, 'injectReducer', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/reducers.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/xiaochuan/wwwroot/react-ssr-starter/src/store/reducers.js');
})();

;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".Home-home-31F7m {\n  height: 3000px;\n}\n", "", {"version":3,"sources":["/./src/routes/Home/Home.css"],"names":[],"mappings":"AAAA;EACE,eAAe;CAChB","file":"Home.css","sourcesContent":[".home {\n  height: 3000px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"home": "Home-home-31F7m"
};

/***/ },
/* 34 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {


    var content = __webpack_require__(33);
    var insertCss = __webpack_require__(36);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./Home.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(10);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(38);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(37);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("react-router/Match");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
 * Server
 */

var _regenerator = __webpack_require__(20);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(19);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(8);

var _assign2 = _interopRequireDefault(_assign);

var _set = __webpack_require__(17);

var _set2 = _interopRequireDefault(_set);

var _asyncToGenerator2 = __webpack_require__(18);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/home/xiaochuan/wwwroot/react-ssr-starter/src/server.js';

__webpack_require__(16);

var _express = __webpack_require__(21);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(7);

var _reactRedux = __webpack_require__(9);

var _server = __webpack_require__(24);

var _server2 = _interopRequireDefault(_server);

var _path = __webpack_require__(23);

var _path2 = _interopRequireDefault(_path);

var _Html = __webpack_require__(12);

var _Html2 = _interopRequireDefault(_Html);

var _createStore = __webpack_require__(14);

var _createStore2 = _interopRequireDefault(_createStore);

var _routes = __webpack_require__(13);

var _routes2 = _interopRequireDefault(_routes);

var _assets = __webpack_require__(15);

var _assets2 = _interopRequireDefault(_assets);

var _nodeFetch = __webpack_require__(22);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

if (true) {
  app.enable('trust proxy');
}

app.get('/api/number', function (req, res) {
  res.json({ number: 10 });
});

app.get('*', function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
    var context, css, props, initialState, data, store, markup, result, _data, html;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // first create a context for <ServerRouter>, it's where we keep the
            // results of rendering for the second pass if necessary
            context = (0, _reactRouter.createServerRenderContext)();
            css = new _set2.default();
            props = {};

            props.onInsertCss = function () {
              for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                styles[_key] = arguments[_key];
              }

              return styles.forEach(function (style) {
                css.add(style._getCss());
              });
            };

            initialState = {};

            if (!(req.url === '/number')) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return (0, _nodeFetch2.default)('http://localhost:3000/api/number').then(function (res) {
              return res.json();
            });

          case 8:
            data = _context.sent;

            (0, _assign2.default)(initialState, data);

          case 10:
            store = (0, _createStore2.default)(initialState);

            // render the first time

            markup = _server2.default.renderToString(_react2.default.createElement(
              _reactRedux.Provider,
              { store: store, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                },
                __self: undefined
              },
              _react2.default.createElement(
                _reactRouter.ServerRouter,
                {
                  location: req.url,
                  context: context,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  },
                  __self: undefined
                },
                (0, _routes2.default)(props)
              )
            ));

            // get the result

            result = context.getResult();

            // the result will tell you if it redirected, if so, we ignore
            // the markup and send a proper redirect.

            if (result.redirect) {
              res.writeHead(301, {
                Location: result.redirect.pathname
              });
              res.end();
            } else {
              // the result will tell you if there were any misses, if so
              // we can send a 404 and then do a second render pass with
              // the context to clue the <Miss> components into rendering
              // this time (on the client they know from componentDidMount)
              if (result.missed) {
                res.writeHead(404);
                markup = _server2.default.renderToString(_react2.default.createElement(
                  _reactRedux.Provider,
                  { store: store, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79
                    },
                    __self: undefined
                  },
                  _react2.default.createElement(
                    _reactRouter.ServerRouter,
                    {
                      location: req.url,
                      context: context,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      },
                      __self: undefined
                    },
                    (0, _routes2.default)(props)
                  )
                ));
              }
              _data = {};

              _data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
              _data.children = markup;
              _data.initialState = store.getState();
              _data.scripts = [_assets2.default.manifest.js, _assets2.default.vendor.js, _assets2.default.client.js];
              html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, (0, _extends3.default)({}, _data, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                },
                __self: undefined
              })));

              res.send('<!doctype html>' + html);
            }

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(3000, function () {
  console.log('The server is running at http://localhost:3000/');
});
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/home/xiaochuan/wwwroot/react-ssr-starter/src/server.js');
})();

;

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map