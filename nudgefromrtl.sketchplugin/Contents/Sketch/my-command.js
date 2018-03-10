var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = setup;
exports.increaseHorizontallyRTL = increaseHorizontallyRTL;
exports.decreaseHorizontallyRTL = decreaseHorizontallyRTL;
exports.increaseHorizontallyRTLLarge = increaseHorizontallyRTLLarge;
exports.decreaseHorizontallyRTLLarge = decreaseHorizontallyRTLLarge;
var selection;
var doc;

// Get the values from the 'User Defaults'
// Visible at '~/Library/Preferences/com.bohemiancoding.sketch3.plist'

// Based on the user's settings — typical 'move' amount (1)
var smallNudge = NSUserDefaults.standardUserDefaults().integerForKey('nudgeDistanceSmall');
// Based on the user's settings — typical 'shift + move' amount (10)
var largeNudge = NSUserDefaults.standardUserDefaults().integerForKey('nudgeDistanceBig');

// Used for determining whether to round to 'whole pixels'
var pixelFit = NSUserDefaults.standardUserDefaults().boolForKey('tryToFitToPixelBounds');

// Setup variables based on the context
function setup(context) {
  doc = context.document;
  selection = context.selection;
}

// ****************************
//   Plugin command handlers
// ****************************

function increaseHorizontallyRTL(context) {
  setup(context);
  resizeFromTopRight(smallNudge);
}

function decreaseHorizontallyRTL(context) {
  setup(context);
  resizeFromTopRight(-smallNudge);
}

function increaseHorizontallyRTLLarge(context) {
  setup(context);
  resizeFromTopRight(largeNudge);
}

function decreaseHorizontallyRTLLarge(context) {
  setup(context);
  resizeFromTopRight(-largeNudge);
}

function resizeFromTopRight(x) {
  selection.forEach(function (layer) {
    var frame = layer.frame();
    var newX = frame.x() - x;
    var newY = frame.y();
    var width = frame.width() + x;
    var height = frame.height();

    if (pixelFit) {
      newX = Math.round(newX);
      newY = Math.round(newY);
      width = Math.round(width);
      height = Math.round(height);
    }

    layer.frame().setRectByIgnoringProportions(NSMakeRect(newX, newY, width, height));

    if (layer.parentGroup()) layer.parentGroup().layerDidEndResize();
  });

  doc.reloadInspector();
}

/***/ })
/******/ ]);
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['increaseHorizontallyRTL'] = __skpm_run.bind(this, 'increaseHorizontallyRTL');
that['onRun'] = __skpm_run.bind(this, 'default');
that['decreaseHorizontallyRTL'] = __skpm_run.bind(this, 'decreaseHorizontallyRTL');
that['increaseHorizontallyRTLLarge'] = __skpm_run.bind(this, 'increaseHorizontallyRTLLarge');
that['decreaseHorizontallyRTLLarge'] = __skpm_run.bind(this, 'decreaseHorizontallyRTLLarge')
