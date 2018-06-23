/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./views/Editor/Editor.scss */ "./src/views/Editor/Editor.scss");

var _ToolsView = __webpack_require__(/*! ./views/Editor/ToolsView */ "./src/views/Editor/ToolsView.js");

var _ToolsView2 = _interopRequireDefault(_ToolsView);

var _ContentView = __webpack_require__(/*! ./views/Editor/ContentView */ "./src/views/Editor/ContentView.js");

var _ContentView2 = _interopRequireDefault(_ContentView);

var _Mediator = __webpack_require__(/*! ./utils/Mediator */ "./src/utils/Mediator.js");

var _Mediator2 = _interopRequireDefault(_Mediator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mediator = new _Mediator2.default();
var toolsView = new _ToolsView2.default(document.querySelector(".Editor-tools"), mediator);
var contentView = new _ContentView2.default(document.querySelector(".Editor-content"), mediator);

toolsView.render();
contentView.render();

/***/ }),

/***/ "./src/utils/Mediator.js":
/*!*******************************!*\
  !*** ./src/utils/Mediator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mediator = function () {
	function Mediator(channels) {
		_classCallCheck(this, Mediator);

		this.channels = {};
	}

	_createClass(Mediator, [{
		key: "subscribe",
		value: function subscribe(eventName, callback) {
			if (!Array.isArray(this.channels[eventName])) {
				this.channels[eventName] = [];
			}
			if (typeof callback === "function") {
				this.channels[eventName].push(callback);
			}
			return this;
		}
	}, {
		key: "unsubscribe",
		value: function unsubscribe(eventName, callback) {
			if (!Array.isArray(this.channels[eventName])) {
				return this;
			}

			if (typeof callback === "undefined") {
				this.channels[eventName] = [];
				return this;
			}

			this.channels[eventName] = this.channels[eventName].filter(function (listener) {
				return listener !== callback;
			});
			return this;
		}
	}, {
		key: "publish",
		value: function publish(eventName, data) {
			if (!Array.isArray(this.channels[eventName])) {
				return this;
			}

			this.channels[eventName].forEach(function (listener) {
				listener(eventName, data);
			});

			return this;
		}
	}]);

	return Mediator;
}();

exports.default = Mediator;

/***/ }),

/***/ "./src/views/Editor/ContentView.js":
/*!*****************************************!*\
  !*** ./src/views/Editor/ContentView.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShapeView = __webpack_require__(/*! ./shapes/ShapeView */ "./src/views/Editor/shapes/ShapeView.js");

var _ShapeView2 = _interopRequireDefault(_ShapeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentView = function () {
    function ContentView(rootElement, mediator) {
        _classCallCheck(this, ContentView);

        this.rootElement = rootElement;
        this.mediator = mediator;
    }

    _createClass(ContentView, [{
        key: "delegateEvents",
        value: function delegateEvents() {
            var _this = this;

            this.mediator.subscribe("createNewShape", function (eventName, data) {
                _this.rootElement.appendChild(new _ShapeView2.default(_this.mediator).render().rootElement);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return this.delegateEvents();
        }
    }]);

    return ContentView;
}();

exports.default = ContentView;

/***/ }),

/***/ "./src/views/Editor/Editor.scss":
/*!**************************************!*\
  !*** ./src/views/Editor/Editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/views/Editor/ToolsView.js":
/*!***************************************!*\
  !*** ./src/views/Editor/ToolsView.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToolsView = function () {
    function ToolsView(rootElement, mediator) {
        var _this = this;

        _classCallCheck(this, ToolsView);

        this.onAddNewShape = function () {
            _this.mediator.publish("createNewShape", {
                type: "rect"
            });
        };

        this.rootElement = rootElement;
        this.addNewShapeButton = null;
        this.mediator = mediator;
    }

    _createClass(ToolsView, [{
        key: "collectChildNodes",
        value: function collectChildNodes() {
            this.addNewShapeButton = this.rootElement.querySelector(".Editor-toolItem");
            return this;
        }
    }, {
        key: "delegateEvents",
        value: function delegateEvents() {
            this.addNewShapeButton.addEventListener("click", this.onAddNewShape);
            return this;
        }
    }, {
        key: "render",
        value: function render() {
            return this.collectChildNodes().delegateEvents();
        }
    }]);

    return ToolsView;
}();

exports.default = ToolsView;

/***/ }),

/***/ "./src/views/Editor/shapes/ShapeView.js":
/*!**********************************************!*\
  !*** ./src/views/Editor/shapes/ShapeView.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ./ShapeView.scss */ "./src/views/Editor/shapes/ShapeView.scss");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapeView = function () {
    function ShapeView(mediator) {
        var _this = this;

        _classCallCheck(this, ShapeView);

        this.toggleActive = function () {
            _this.isActive = !_this.isActive;
        };

        this.handlerMouseDown = function (_ref) {
            var target = _ref.target,
                clientX = _ref.clientX,
                clientY = _ref.clientY;

            // ShapeView.resize = this.sizers.some(function(sizer){
            //     return sizer.contains(target);
            // });

            _this.sizers.forEach(function (sizer) {
                if (sizer.contains(target)) {
                    ShapeView.resize = true;
                    ShapeView.typeOfSizer = sizer.classList[1];
                }
            });
            _this.previousX = clientX;
            _this.previousY = clientY;
            _this.rootElement.X = getComputedStyle(_this.rootElement).left;
            _this.rootElement.Y = getComputedStyle(_this.rootElement).top;
            document.addEventListener("mousemove", _this.handlerMouseMove);
        };

        this.handlerMouseUp = function () {
            document.removeEventListener("mousemove", _this.handlerMouseMove);
            ShapeView.resize = false;
            _this.prevDeltaX = 0;
            _this.prevDeltaY = 0;
        };

        this.handlerMouseMove = function (_ref2) {
            var clientX = _ref2.clientX,
                clientY = _ref2.clientY;

            var deltaX = clientX - _this.previousX;
            var deltaY = clientY - _this.previousY;

            if (ShapeView.resize) {
                _this.rootElement.style.width = _this.rootElement.offsetWidth + ShapeView.sizerCoef[ShapeView.typeOfSizer].a * (deltaX - _this.prevDeltaX) + "px";
                _this.rootElement.style.height = _this.rootElement.offsetHeight + ShapeView.sizerCoef[ShapeView.typeOfSizer].b * (deltaY - _this.prevDeltaY) + "px";
                _this.prevDeltaX = deltaX;
                _this.prevDeltaY = deltaY;

                _this.move(ShapeView.sizerCoef[ShapeView.typeOfSizer].c * deltaX, ShapeView.sizerCoef[ShapeView.typeOfSizer].d * deltaY);
            } else {
                _this.move(deltaX, deltaY);
            }
        };

        this.move = function (deltaX, deltaY) {
            _this.rootElement.style.left = parseInt(_this.rootElement.X) + deltaX + "px";
            _this.rootElement.style.top = parseInt(_this.rootElement.Y) + deltaY + "px";
        };

        this.rootElement = this.createRootElement();
        this.sizers = this.createSizer(this.sizerPositions);
        this.mediator = mediator;
        this.rootElement.X = "";
        this.rootElement.Y = "";
        this.prevDeltaX = 0;
        this.prevDeltaY = 0;
        this.previousX = "";
        this.previousY = "";
    }

    _createClass(ShapeView, [{
        key: "createRootElement",
        value: function createRootElement() {
            var element = document.createElement("div");
            element.classList.add(this.classNames.root);
            element.classList.add(this.classNames.type);
            return element;
        }
    }, {
        key: "createSizer",
        value: function createSizer(position) {
            var elements = [];
            for (var key in position) {
                var element = document.createElement("div");
                element.classList.add(this.classNames.sizer);
                element.classList.add(key);
                this.rootElement.appendChild(element);
                elements.push(element);
            }
            return elements;
        }
    }, {
        key: "delegateEvents",
        value: function delegateEvents() {
            var _this2 = this;

            this.rootElement.addEventListener("dragstart", function () {
                event.preventDefault();
            });
            document.addEventListener("mouseup", this.handlerMouseUp);
            this.rootElement.addEventListener("dblclick", function () {
                _this2.toggleActive();
            });
            document.addEventListener("mousedown", function (event) {
                if (!_this2.rootElement.contains(event.target)) {
                    _this2.isActive = false;
                }
            });
            this.mediator.subscribe(ShapeView.ON_ACTIVATE, function (eventName, data) {
                if (data.target !== _this2) {
                    _this2.isActive = false;
                }
            });
            return this;
        }
    }, {
        key: "render",
        value: function render() {
            this.delegateEvents();
            return this;
        }
    }, {
        key: "sizerPositions",
        get: function get() {
            return {
                lt: "lt",
                rt: "rt",
                lb: "lb",
                rb: "rb",
                lc: "lc",
                rc: "rc",
                bc: "bc",
                tc: "tc"
            };
        }
    }, {
        key: "classNames",
        get: function get() {
            return {
                root: "Shape",
                type: "Shape--rect",
                active: "isActive",
                sizer: "sizer"
            };
        }
    }, {
        key: "isActive",
        get: function get() {
            return this._isActive;
        },
        set: function set(value) {
            var wasInactive = !this._isActive && value;
            this._isActive = value;
            this.rootElement.classList.toggle(this.classNames.active, this._isActive);

            if (this.isActive) {
                this.rootElement.addEventListener("mousedown", this.handlerMouseDown);
            } else {
                this.rootElement.removeEventListener("mousedown", this.handlerMouseDown);
            }

            if (wasInactive) {
                this.mediator.publish(ShapeView.ON_ACTIVATE, {
                    target: this
                });
            }
        }
    }], [{
        key: "sizerCoef",
        get: function get() {
            return {
                lt: {
                    a: -1,
                    b: -1,
                    c: 1,
                    d: 1
                },
                rb: {
                    a: 1,
                    b: 1,
                    c: 0,
                    d: 0
                },
                lb: {
                    a: -1,
                    b: 1,
                    c: 1,
                    d: 0
                },
                rt: {
                    a: 1,
                    b: -1,
                    c: 0,
                    d: 1
                },
                lc: {
                    a: -1,
                    b: 0,
                    c: 1,
                    d: 0
                },
                rc: {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 0
                },
                tc: {
                    a: 0,
                    b: -1,
                    c: 0,
                    d: 1
                },
                bc: {
                    a: 0,
                    b: 1,
                    c: 0,
                    d: 0
                }
            };
        }
    }]);

    return ShapeView;
}();

ShapeView.ON_ACTIVATE = "onActivate";
ShapeView.resize = false;
ShapeView.typeOfSizer = "";
exports.default = ShapeView;

/***/ }),

/***/ "./src/views/Editor/shapes/ShapeView.scss":
/*!************************************************!*\
  !*** ./src/views/Editor/shapes/ShapeView.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map