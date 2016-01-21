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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * app.js
   * main entry point
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(26);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(5);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(8);
    }, '/500': function _() {
      return __webpack_require__(9);
    }, '/about': function about() {
      return __webpack_require__(10);
    }, '/blog': function blog() {
      return __webpack_require__(11);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(12);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(13);
    }, '/': function _() {
      return __webpack_require__(14);
    }, '/software': function software() {
      return __webpack_require__(15);
    }, '/visual': function visual() {
      return __webpack_require__(16);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _historyLibCreateBrowserHistory = __webpack_require__(23);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(24);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(25);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLibReactCSSTransitionGroup = __webpack_require__(27);

  var _reactLibReactCSSTransitionGroup2 = _interopRequireDefault(_reactLibReactCSSTransitionGroup);

  __webpack_require__(17);

  var _Navigation = __webpack_require__(7);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      _react2['default'].createElement('div', { id: 'visual_bg' }),
      _react2['default'].createElement(_Navigation2['default'], null),
      _react2['default'].createElement(
        'div',
        { id: 'wrapper' },
        _react2['default'].createElement('img', { id: 'logo', src: 'i/kl.png', width: '75px' }),
        _react2['default'].createElement(
          _reactLibReactCSSTransitionGroup2['default'],
          { transitionName: 'contentfade',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500 },
          children
        )
      ),
      _react2['default'].createElement(
        'div',
        { id: 'banner' },
        'Site still under construction! Check out progress',
        ' ',
        _react2['default'].createElement(
          'a',
          { target: '_blank', href: 'http://github.com/phorust/phorust.github.io' },
          'here.'
        )
      )
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(18);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(19);

  var _Link = __webpack_require__(6);

  var _Link2 = _interopRequireDefault(_Link);

  function Navigation() {
    return _react2['default'].createElement(
      'nav',
      null,
      _react2['default'].createElement(
        'ul',
        { role: 'menu' },
        _react2['default'].createElement(
          'a',
          { className: 'about', href: '/about', onClick: _Link2['default'].handleClick },
          _react2['default'].createElement(
            'li',
            null,
            'A B O U T'
          )
        ),
        _react2['default'].createElement(
          'a',
          { className: 'software', href: '/software', onClick: _Link2['default'].handleClick },
          _react2['default'].createElement(
            'li',
            null,
            'C O D E'
          )
        ),
        _react2['default'].createElement(
          'a',
          { className: 'visual', href: '/visual', onClick: _Link2['default'].handleClick },
          _react2['default'].createElement(
            'li',
            null,
            'V I S U A L'
          )
        ),
        _react2['default'].createElement(
          'a',
          { className: 'blog', href: '/blog', onClick: _Link2['default'].handleClick },
          _react2['default'].createElement(
            'li',
            null,
            'B L O G'
          )
        )
      )
    )

    // <ul className="Navigation" role="menu">
    //   <li className="Navigation-item">
    //     <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
    //   </li>
    //   <li className="Navigation-item">
    //     <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
    //   </li>
    // </ul>
    ;
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(20);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { id: 'about_content' },
          _react2['default'].createElement(
            'h1',
            { id: 'title' },
            'Hello! I\'m Kevin Lee,'
          ),
          _react2['default'].createElement(
            'h2',
            { id: 'subtitle' },
            'a ',
            _react2['default'].createElement(
              'a',
              { 'class': 'software', href: 'software.html' },
              'software engineer'
            ),
            ' and ',
            _react2['default'].createElement(
              'a',
              { 'class': 'visual', href: 'visual.html' },
              'designer'
            ),
            ' from the Bay Area.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'I\'m finishing my last year at',
            ' ',
            _react2['default'].createElement(
              'a',
              { id: 'berkeley', target: '_blank', href: 'http://berkeley.edu' },
              'UC Berkeley'
            ),
            ' right now. Last summer, I wrote code for',
            ' ',
            _react2['default'].createElement(
              'a',
              { id: 'facebook', target: '_blank', href: 'http://facebook.com' },
              'Facebook'
            ),
            ', and I\'ve also worked at',
            ' ',
            _react2['default'].createElement(
              'a',
              { id: 'bigfix', target: '_blank', href: 'http://ibm.com/security/bigfix/' },
              'IBM BigFix'
            ),
            '.'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'p',
            null,
            'The last few lines of code I wrote look like ',
            _react2['default'].createElement(
              'a',
              { href: 'javascript:;', id: 'recent_code_show' },
              'this:'
            )
          ),
          _react2['default'].createElement(
            'a',
            { id: 'recent_code_link', target: '_blank' },
            _react2['default'].createElement(
              'pre',
              null,
              _react2['default'].createElement('code', { id: 'recent_code', 'class': 'hljs diff' })
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Home Page'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(21);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { id: 'term_content' },
          _react2['default'].createElement(
            'div',
            { id: 'term' },
            _react2['default'].createElement(
              'div',
              { id: 'appbar' },
              _react2['default'].createElement('div', { id: 'close' }),
              _react2['default'].createElement('div', { id: 'minimize' }),
              _react2['default'].createElement('div', { id: 'maximize' })
            ),
            _react2['default'].createElement(
              'div',
              { id: 'output' },
              _react2['default'].createElement('div', { id: 'textarea' }),
              _react2['default'].createElement(
                'div',
                { id: 'lastline' },
                _react2['default'].createElement(
                  'span',
                  { 'class': 'prompt_path' },
                  '~'
                ),
                ' ',
                _react2['default'].createElement(
                  'span',
                  { 'class': 'prompt_arrow' },
                  '→'
                ),
                _react2['default'].createElement('input', { type: 'text' })
              )
            )
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Try your favorite terminal commands, or just go ',
            _react2['default'].createElement(
              'a',
              { id: 'term-project-link' },
              'straight to the projects.'
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(22);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { id: 'visual_content' },
          _react2['default'].createElement(
            'a',
            { 'class': 'active' },
            'photography'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'a',
            null,
            'logos'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'a',
            null,
            'innovative design'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'a',
            null,
            'guitars'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/* A styleguide of sorts */\n\n/* Adjustments to tag defaults */\n::-moz-selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n::selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  font-weight: 600\n}\n\na:hover {\n  color: black;\n}\n\nh1, h2, h3 {\n  /*font-family: 'Avenir Next';*/\n  line-height: 1.3;\n\n  /*font-family: 'Avenir';*/\n  /*font-family: 'Lato', sans-serif;\n  font-family: 'PF DinText Pro';\n  font-family: 'Maax';*/\n\n  font-weight: 500;\n}\n\nh1 a, h2 a, h3 a {\n  font-weight: 700;\n}\n\np {\n  line-height: 1.5;\n}\n\nbody, html {\n  margin: 0;\n  height: 100%;\n  width: 100%;\n\n  color: #454545;\n  font-family: 'Avenir Next', 'Open Sans', sans-serif;\n  /*font-family: 'Avenir';\n  font-family: 'Lato', sans-serif;\n  font-family: 'Raleway';\n  font-family: 'Museo Sans';\n  font-family: 'Roboto Slab';\n  font-family: 'PF DinText Pro';\n  font-family: 'Maax';*/\n  background-color: #fDfCf6;\n}\n\n#wrapper {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n       -o-transform: translateY(-50%);\n          transform: translateY(-50%);\n\n  // transition: opacity 0.6s ease-out,\n  //             padding 0.6s ease-out,\n  //             top 0.6s ease-out,\n  //             transform 0.6s ease-out;\n  text-align: center;\n}\n\n#wrapper #logo {\n  margin-top: 4px;\n}\n\n#banner {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  font-size:  12px;\n  text-align: center;\n  padding-top: 10px;\n  opacity: 0.4;\n}\n\n/*\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: $screen-sm-min) {\n  .Layout {\n    width: calc($screen-sm-min - 18px);\n  }\n}\n\n@media (min-width: $screen-md-min) {\n  .Layout {\n    width: calc($screen-md-min - 22px);\n  }\n}\n\n@media (min-width: $screen-lg-min) {\n  .Layout {\n    width: calc($screen-lg-min - 30px);\n  }\n}\n*/\n", ""]);

  // exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/* A styleguide of sorts */\n\n/* Adjustments to tag defaults */\n::-moz-selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n::selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  font-weight: 600\n}\n\na:hover {\n  color: black;\n}\n\nh1, h2, h3 {\n  /*font-family: 'Avenir Next';*/\n  line-height: 1.3;\n\n  /*font-family: 'Avenir';*/\n  /*font-family: 'Lato', sans-serif;\n  font-family: 'PF DinText Pro';\n  font-family: 'Maax';*/\n\n  font-weight: 500;\n}\n\nh1 a, h2 a, h3 a {\n  font-weight: 700;\n}\n\np {\n  line-height: 1.5;\n}\n\nnav {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 11px;\n  font-weight: bold;\n  color: #888;\n  background-color: #fDfCf6;\n}\n\nnav ul {\n  list-style: none;\n  padding-left: inherit;\n}\n\nnav ul li {\n  display: inline-block;\n  padding: 4px 8px;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease\n}\n\nnav ul li:hover::before {\n  background: #FFDE00;\n  border-color: #FFDE00;\n}\n\nnav ul li::before {\n  display: block;\n  width: 5px;\n  height: 5px;\n  margin: 8px auto;\n  border-radius: 5px;\n  border: 2px solid #888;\n  content: '';\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\nnav ul li:hover {\n  color: #333;\n}\n", ""]);

  // exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/* A styleguide of sorts */\n\n/* Adjustments to tag defaults */\n::-moz-selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n::selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  font-weight: 600\n}\n\na:hover {\n  color: black;\n}\n\nh1, h2, h3 {\n  /*font-family: 'Avenir Next';*/\n  line-height: 1.3;\n\n  /*font-family: 'Avenir';*/\n  /*font-family: 'Lato', sans-serif;\n  font-family: 'PF DinText Pro';\n  font-family: 'Maax';*/\n\n  font-weight: 500;\n}\n\nh1 a, h2 a, h3 a {\n  font-weight: 700;\n}\n\np {\n  line-height: 1.5;\n}\n/* A \"main\" file for the CSS */\n#about_content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  // margin-bottom: 25px;\n  padding: 10px 20px;\n  // opacity: 0;\n  // transition: all 0.3s ease-out;\n  margin: 0 auto;\n  max-width: 500px;\n  /* otherwise width 100% takes from padding box, not whole box */\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n\n  font-size: 14px;\n  text-align: left;\n  /*display: none; TODO: otherwise the margin pushes term down even when not on about,\n  but this makes the height calcs in toggleAbout fail */\n\n    opacity: 1;\n    margin-top: 25px;\n    margin-bottom: 100px\n}\n#about_content.loaded {\n  opacity: 1;\n  margin-top: 25px;/* account for footer height */\n  margin-bottom: 100px;\n}\n\n#about_content a {\n  text-decoration: none;\n}\n\n#about_content.loaded #recent_code_link > pre {\n  opacity: 1;/* js max-height setting */\n}\n\n#recent_code {\n  /* otherwise lines show between highlighting on nonretina */\n  line-height: 1.1em;\n}\n#recent_code_link {\n  display: block;\n  border: none;\n}\n#recent_code_link pre {\n  max-height: 0;\n  -webkit-transition: opacity 0.6s ease-out;\n  -o-transition: opacity 0.6s ease-out;\n  transition: opacity 0.6s ease-out;\n  opacity: 0;\n  overflow: hidden;\n}\n/*background: #2d2d2d;*/\n#recent_code_link pre code {/*background: #2d2d2d;*/\n  background-color: initial;\n  text-align: left;\n  font-size: 11px;\n  overflow: scroll;\n}\n#recent_code_link pre:hover {/*background: #2d2d2d;*/\n}\n#recent_code_link:hover {\n  display: block;\n  background: initial;\n}\n\n#title {\n  margin-bottom: 2px;\n}\n#subtitle {\n  margin-top: 0;\n}\n/* Below... Maybe the default color is nicer. */\na#facebook:hover {\n  color: #3b5999;\n  background-color: initial;\n}\na#bigfix:hover {\n  color: #ABC450;\n  background-color: initial;\n}\na#berkeley:hover {\n  color: #3B7EA1;\n  background-color: initial;\n}\n", ""]);

  // exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/* A styleguide of sorts */\n\n/* Adjustments to tag defaults */\n::-moz-selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n::selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  font-weight: 600\n}\n\na:hover {\n  color: black;\n}\n\nh1, h2, h3 {\n  /*font-family: 'Avenir Next';*/\n  line-height: 1.3;\n\n  /*font-family: 'Avenir';*/\n  /*font-family: 'Lato', sans-serif;\n  font-family: 'PF DinText Pro';\n  font-family: 'Maax';*/\n\n  font-weight: 500;\n}\n\nh1 a, h2 a, h3 a {\n  font-weight: 700;\n}\n\np {\n  line-height: 1.5;\n}\n/* A \"main\" file for the CSS */\n#term_content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  // margin-bottom: 25px;\n  padding: 10px 20px;\n  // opacity: 0;\n  // transition: all 0.3s ease-out;\n  margin: 0 auto;\n  max-width: 500px;\n  /* otherwise width 100% takes from padding box, not whole box */\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n\n  font-size: 14px;\n  text-align: left;\n  /*display: none; TODO: otherwise the margin pushes term down even when not on about,\n  but this makes the height calcs in toggleAbout fail */\n\n    opacity: 1;\n    margin-top: 25px;\n    margin-bottom: 100px\n}\n#term_content.loaded {\n  opacity: 1;\n  margin-top: 25px;/* account for footer height */\n  margin-bottom: 100px;\n}\n\n#term_content {\n  bottom: 0;\n  height: 244px;\n  padding: initial;\n  margin-bottom: 15px\n}\n\n#term_content.loaded {\n  opacity: 1;\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n\n#term {\n  font-family: 'DejaVu Sans Mono for Powerline', monospace;\n  font-size: 12px;\n  border-radius: 10px;\n  border-top: 22px solid #f1f2f0;\n}\n\n#appbar {\n  text-align: left;\n  position: absolute;\n  top: 1px;\n  z-index: 1;\n  width: 100%;\n  padding-left: 4px;\n  padding-top: 4px;\n  /* non-kosher styles */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  cursor: default;\n\n  display: none;\n}\n\n#appbar div {\n  display: inline-block;\n  border-radius: 12px;\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  text-align: center;\n}\n\n#appbar #close {/* TODO: add gradients */\n  background-color: #F16061;\n}\n\n#appbar #minimize {\n  background-color: #FDD484;\n}\n\n#appbar #maximize {\n  background-color: #AFD792;\n}\n#term_content.loaded #term #appbar {\n  display: block;\n}\n\n#output {\n  overflow: scroll;\n  text-align: left;\n\n  display: none;\n}\n#term_content.loaded #term #output {\n  height: 234px;\n  padding: 4px;\n  display: block;\n}\n\n#textarea {\n  white-space: pre;\n}\n\n#textarea .link a {\n  // text-decoration: underline;\n  border-bottom: 1px solid #fDfCf6\n}\n\n#textarea .link a:hover {\n  border-bottom: 1px solid black;\n}\n#lastline input {\n  width: 423px;\n  border: none;\n  padding: 0;\n  margin-left: 7px;\n  font-family: 'DejaVu Sans Mono for Powerline', monospace;\n  font-size: 12px\n}\n#lastline input:focus {\n  outline: none;\n}\n\n/* Text coloring styles */\n#term {\n  background-color: #333;\n  color: #f1f2f0;\n}\n#lastline > input {\n  background-color: rgba(0,0,0,0);\n  color: #f1f2f0;\n}\n\n#term .prompt_path {\n  color: #B7B7B7;\n}\n#term .prompt_arrow {\n  color: #B4E37D;\n}\n\n#term span.directory {\n    color: #54FDE6;\n}\n", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/* A styleguide of sorts */\n\n/* Adjustments to tag defaults */\n::-moz-selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n::selection {\n  background-color: #FFDE00;\n  /*background-color: #a40000;*/\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  font-weight: 600\n}\n\na:hover {\n  color: black;\n}\n\nh1, h2, h3 {\n  /*font-family: 'Avenir Next';*/\n  line-height: 1.3;\n\n  /*font-family: 'Avenir';*/\n  /*font-family: 'Lato', sans-serif;\n  font-family: 'PF DinText Pro';\n  font-family: 'Maax';*/\n\n  font-weight: 500;\n}\n\nh1 a, h2 a, h3 a {\n  font-weight: 700;\n}\n\np {\n  line-height: 1.5;\n}\n/* A \"main\" file for the CSS */\n#visual_content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  // margin-bottom: 25px;\n  padding: 10px 20px;\n  // opacity: 0;\n  // transition: all 0.3s ease-out;\n  margin: 0 auto;\n  max-width: 500px;\n  /* otherwise width 100% takes from padding box, not whole box */\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n\n  font-size: 14px;\n  text-align: left;\n  /*display: none; TODO: otherwise the margin pushes term down even when not on about,\n  but this makes the height calcs in toggleAbout fail */\n\n    opacity: 1;\n    margin-top: 25px;\n    margin-bottom: 100px\n}\n#visual_content.loaded {\n  opacity: 1;\n  margin-top: 25px;/* account for footer height */\n  margin-bottom: 100px;\n}\n\n/* design section */\n#visual_content {\n\n  text-align: center;\n  color: #fDfCf6;\n  line-height: 30px;\n}\n#visual_content a {\n  text-transform: uppercase;\n  letter-spacing: 15px;/* hack to get text-align center right */\n  padding-left: 15px;\n  -webkit-transition: opacity 0.3s ease;\n  -o-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n  opacity: 0.3\n}\n#visual_content a.active {\n  opacity: 1\n}\n#visual_content a.active::after {\n  content: \">\";\n  position: absolute;\n  right: 20px;\n}\n#visual_content a.active::before  {\n  content: \"<\";\n  position: absolute;\n  left: 20px;\n}\n#visual_content:hover a {\n  opacity: 1;\n}\n\nbody.visual {\n  // background-size: cover;\n  // background-position: center center;\n  // background-attachment: fixed;\n  // background-image: url('/i/insta.jpg');\n  //\n  // transition: background 0.3s ease;\n}\n\nbody.visual nav {\n  // background-color: rgba(252, 251, 245, 0.4);\n  background-color: initial;\n  color: #fDfCf6;\n}\n\nbody.visual nav ul li:hover::before {\n  border-color: #FFDE00;\n}\n\nbody.visual nav ul li::before {\n  border-color: #ddd;\n}\n\nbody.visual nav ul li:hover {\n  color: #ddd;\n}\n\nbody.visual #visual_bg {\n  opacity: 1;\n  background-position: center center;\n}\n\n#visual_bg {\n  /* transitioning background position lags... but i like it */\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-background-size: cover;\n          background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  background-image: url('/i/photos/allen.jpg');\n\n  opacity: 0;\n  -webkit-transition: opacity 0.3s ease,\n              background-image 1.2s ease;\n  -o-transition: opacity 0.3s ease,\n              background-image 1.2s ease;\n  transition: opacity 0.3s ease,\n              background-image 1.2s ease;\n}\n", ""]);

  // exports


/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("react/lib/ReactCSSTransitionGroup");

/***/ }
/******/ ]);