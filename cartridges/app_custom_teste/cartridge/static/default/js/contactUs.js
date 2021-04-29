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
/******/ 	return __webpack_require__(__webpack_require__.s = "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/contactUs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/contactUs.js":
/*!*************************************************************************************!*\
  !*** ./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/contactUs.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar processInclude = __webpack_require__(/*! ./util */ \"./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/util.js\");\n\n$(document).ready(function () {\n    processInclude(__webpack_require__(/*! ./contactUs/contactUs */ \"./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/contactUs/contactUs.js\"));\n});\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/contactUs.js?");

/***/ }),

/***/ "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/contactUs/contactUs.js":
/*!***********************************************************************************************!*\
  !*** ./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/contactUs/contactUs.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Display the returned message.\n * @param {string} data - data returned from the server's ajax call\n * @param {Object} button - button that was clicked for contact us sign-up\n */\nfunction displayMessage(data, button) {\n    $.spinner().stop();\n    var status;\n    if (data.success) {\n        status = 'alert-success';\n    } else {\n        status = 'alert-danger';\n    }\n\n    if ($('.contact-us-signup-message').length === 0) {\n        $('body').append(\n            '<div class=\"contact-us-signup-message\"></div>'\n        );\n    }\n    $('.contact-us-signup-message')\n        .append('<div class=\"contact-us-signup-alert text-center ' + status + '\" role=\"alert\">' + data.msg + '</div>');\n\n    setTimeout(function () {\n        $('.contact-us-signup-message').remove();\n        button.removeAttr('disabled');\n    }, 3000);\n}\n\nmodule.exports = {\n    subscribeContact: function () {\n        $('form.contact-us').submit(function (e) {\n            e.preventDefault();\n            var form = $(this);\n            var button = $('.subscribe-contact-us');\n            var url = form.attr('action');\n\n            $.spinner().start();\n            button.attr('disabled', true);\n            $.ajax({\n                url: url,\n                type: 'post',\n                dataType: 'json',\n                data: form.serialize(),\n                success: function (data) {\n                    displayMessage(data, button);\n                    if (data.success) {\n                        $('.contact-us').trigger('reset');\n                    }\n                },\n                error: function (err) {\n                    displayMessage(err, button);\n                }\n            });\n        });\n    }\n};\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/contactUs/contactUs.js?");

/***/ }),

/***/ "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/util.js":
/*!********************************************************************************!*\
  !*** ./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/util.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (include) {\n    if (typeof include === 'function') {\n        include();\n    } else if (typeof include === 'object') {\n        Object.keys(include).forEach(function (key) {\n            if (typeof include[key] === 'function') {\n                include[key]();\n            }\n        });\n    }\n};\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/util.js?");

/***/ })

/******/ });