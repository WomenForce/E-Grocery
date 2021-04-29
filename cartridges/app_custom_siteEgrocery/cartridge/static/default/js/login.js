!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=41)}({2:function(e,r,t){"use strict";e.exports=function(e){"function"==typeof e?e():"object"==typeof e&&Object.keys(e).forEach((function(r){"function"==typeof e[r]&&e[r]()}))}},4:function(e,r,t){"use strict";e.exports=function(e,r){(function(e){$(e).find(".form-control.is-invalid").removeClass("is-invalid")}(e),$(".alert",e).remove(),"object"==typeof r&&r.fields&&Object.keys(r.fields).forEach((function(t){if(r.fields[t]){var n=$(e).find('[name="'+t+'"]').parent().children(".invalid-feedback");n.length>0&&(Array.isArray(r[t])?n.html(r.fields[t].join("<br/>")):n.html(r.fields[t]),n.siblings(".form-control").addClass("is-invalid"))}})),r&&r.error)&&("FORM"===$(e).prop("tagName")?$(e):$(e).parents("form")).prepend('<div class="alert alert-danger" role="alert">'+r.error.join("<br/>")+"</div>")}},41:function(e,r,t){"use strict";var n=t(2);$(document).ready((function(){n(t(42))}))},42:function(e,r,t){"use strict";var n=t(4),o=t(43);e.exports={login:function(){$("form.login").submit((function(e){var r=$(this);e.preventDefault();var t=r.attr("action");return r.spinner().start(),$("form.login").trigger("login:submit",e),$.ajax({url:t,type:"post",dataType:"json",data:r.serialize(),success:function(e){r.spinner().stop(),e.success?($("form.login").trigger("login:success",e),location.href=e.redirectUrl):(n(r,e),$("form.login").trigger("login:error",e))},error:function(e){e.responseJSON.redirectUrl?window.location.href=e.responseJSON.redirectUrl:($("form.login").trigger("login:error",e),r.spinner().stop())}}),!1}))},register:function(){$("form.registration").submit((function(e){var r=$(this);e.preventDefault();var t=r.attr("action");return r.spinner().start(),$("form.registration").trigger("login:register",e),$.ajax({url:t,type:"post",dataType:"json",data:r.serialize(),success:function(e){r.spinner().stop(),e.success?($("form.registration").trigger("login:register:success",e),location.href=e.redirectUrl):($("form.registration").trigger("login:register:error",e),n(r,e))},error:function(e){e.responseJSON.redirectUrl?window.location.href=e.responseJSON.redirectUrl:o($(".error-messaging"),e.responseJSON.errorMessage),r.spinner().stop()}}),!1}))},resetPassword:function(){$(".reset-password-form").submit((function(e){var r=$(this);e.preventDefault();var t=r.attr("action");return r.spinner().start(),$(".reset-password-form").trigger("login:register",e),$.ajax({url:t,type:"post",dataType:"json",data:r.serialize(),success:function(e){r.spinner().stop(),e.success?($(".request-password-title").text(e.receivedMsgHeading),$(".request-password-body").empty().append("<p>"+e.receivedMsgBody+"</p>"),e.mobile?$(".send-email-btn").empty().html('<a href="'+e.returnUrl+'" class="btn btn-primary btn-block">'+e.buttonText+"</a>"):$("#submitEmailButton").text(e.buttonText).attr("data-dismiss","modal")):n(r,e)},error:function(){r.spinner().stop()}}),!1}))},clearResetForm:function(){$("#login .modal").on("hidden.bs.modal",(function(){$("#reset-password-email").val(""),$(".modal-dialog .form-control.is-invalid").removeClass("is-invalid")}))}}},43:function(e,r,t){"use strict";e.exports=function(e,r){var t='<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+r+"</div>";$(e).append(t)}}});

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
/******/ 	return __webpack_require__(__webpack_require__.s = "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/components/errorNotification.js":
/*!********************************************************************************************************!*\
  !*** ./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/components/errorNotification.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (element, message) {\n    var errorHtml = '<div class=\"alert alert-danger alert-dismissible ' +\n        'fade show\" role=\"alert\">' +\n        '<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">' +\n        '<span aria-hidden=\"true\">&times;</span>' +\n        '</button>' + message + '</div>';\n\n    $(element).append(errorHtml);\n};\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/components/errorNotification.js?");

/***/ }),

/***/ "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/components/formValidation.js":
/*!*****************************************************************************************************!*\
  !*** ./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/components/formValidation.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Remove all validation. Should be called every time before revalidating form\n * @param {element} form - Form to be cleared\n * @returns {void}\n */\nfunction clearFormErrors(form) {\n    $(form).find('.form-control.is-invalid').removeClass('is-invalid');\n}\n\nmodule.exports = function (formElement, payload) {\n    // clear form validation first\n    clearFormErrors(formElement);\n    $('.alert', formElement).remove();\n\n    if (typeof payload === 'object' && payload.fields) {\n        Object.keys(payload.fields).forEach(function (key) {\n            if (payload.fields[key]) {\n                var feedbackElement = $(formElement).find('[name=\"' + key + '\"]')\n                    .parent()\n                    .children('.invalid-feedback');\n\n                if (feedbackElement.length > 0) {\n                    if (Array.isArray(payload[key])) {\n                        feedbackElement.html(payload.fields[key].join('<br/>'));\n                    } else {\n                        feedbackElement.html(payload.fields[key]);\n                    }\n                    feedbackElement.siblings('.form-control').addClass('is-invalid');\n                }\n            }\n        });\n    }\n    if (payload && payload.error) {\n        var form = $(formElement).prop('tagName') === 'FORM'\n            ? $(formElement)\n            : $(formElement).parents('form');\n\n        form.prepend('<div class=\"alert alert-danger\" role=\"alert\">'\n            + payload.error.join('<br/>') + '</div>');\n    }\n};\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/components/formValidation.js?");

/***/ }),

/***/ "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/login.js":
/*!*********************************************************************************!*\
  !*** ./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/login.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar processInclude = __webpack_require__(/*! ./util */ \"./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/util.js\");\n\n$(document).ready(function () {\n    processInclude(__webpack_require__(/*! ./login/login */ \"./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/login/login.js\"));\n});\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/login.js?");

/***/ }),

/***/ "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/login/login.js":
/*!***************************************************************************************!*\
  !*** ./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/login/login.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar formValidation = __webpack_require__(/*! ../components/formValidation */ \"./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/components/formValidation.js\");\nvar createErrorNotification = __webpack_require__(/*! ../components/errorNotification */ \"./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/components/errorNotification.js\");\n\nmodule.exports = {\n    login: function () {\n        $('form.login').submit(function (e) {\n            var form = $(this);\n            e.preventDefault();\n            var url = form.attr('action');\n            form.spinner().start();\n            $('form.login').trigger('login:submit', e);\n            $.ajax({\n                url: url,\n                type: 'post',\n                dataType: 'json',\n                data: form.serialize(),\n                success: function (data) {\n                    form.spinner().stop();\n                    if (!data.success) {\n                        formValidation(form, data);\n                        $('form.login').trigger('login:error', data);\n                    } else {\n                        $('form.login').trigger('login:success', data);\n                        location.href = data.redirectUrl;\n                    }\n                },\n                error: function (data) {\n                    if (data.responseJSON.redirectUrl) {\n                        window.location.href = data.responseJSON.redirectUrl;\n                    } else {\n                        $('form.login').trigger('login:error', data);\n                        form.spinner().stop();\n                    }\n                }\n            });\n            return false;\n        });\n    },\n\n    register: function () {\n        $('form.registration').submit(function (e) {\n            var form = $(this);\n            e.preventDefault();\n            var url = form.attr('action');\n            form.spinner().start();\n            $('form.registration').trigger('login:register', e);\n            $.ajax({\n                url: url,\n                type: 'post',\n                dataType: 'json',\n                data: form.serialize(),\n                success: function (data) {\n                    form.spinner().stop();\n                    if (!data.success) {\n                        $('form.registration').trigger('login:register:error', data);\n                        formValidation(form, data);\n                    } else {\n                        $('form.registration').trigger('login:register:success', data);\n                        location.href = data.redirectUrl;\n                    }\n                },\n                error: function (err) {\n                    if (err.responseJSON.redirectUrl) {\n                        window.location.href = err.responseJSON.redirectUrl;\n                    } else {\n                        createErrorNotification($('.error-messaging'), err.responseJSON.errorMessage);\n                    }\n\n                    form.spinner().stop();\n                }\n            });\n            return false;\n        });\n    },\n\n    resetPassword: function () {\n        $('.reset-password-form').submit(function (e) {\n            var form = $(this);\n            e.preventDefault();\n            var url = form.attr('action');\n            form.spinner().start();\n            $('.reset-password-form').trigger('login:register', e);\n            $.ajax({\n                url: url,\n                type: 'post',\n                dataType: 'json',\n                data: form.serialize(),\n                success: function (data) {\n                    form.spinner().stop();\n                    if (!data.success) {\n                        formValidation(form, data);\n                    } else {\n                        $('.request-password-title').text(data.receivedMsgHeading);\n                        $('.request-password-body').empty()\n                            .append('<p>' + data.receivedMsgBody + '</p>');\n                        if (!data.mobile) {\n                            $('#submitEmailButton').text(data.buttonText)\n                                .attr('data-dismiss', 'modal');\n                        } else {\n                            $('.send-email-btn').empty()\n                                .html('<a href=\"'\n                                    + data.returnUrl\n                                    + '\" class=\"btn btn-primary btn-block\">'\n                                    + data.buttonText + '</a>'\n                                );\n                        }\n                    }\n                },\n                error: function () {\n                    form.spinner().stop();\n                }\n            });\n            return false;\n        });\n    },\n\n    clearResetForm: function () {\n        $('#login .modal').on('hidden.bs.modal', function () {\n            $('#reset-password-email').val('');\n            $('.modal-dialog .form-control.is-invalid').removeClass('is-invalid');\n        });\n    }\n};\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/login/login.js?");

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
