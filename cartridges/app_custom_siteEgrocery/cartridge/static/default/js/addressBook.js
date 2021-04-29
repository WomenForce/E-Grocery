!function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=27)}({2:function(e,r,t){"use strict";e.exports=function(e){"function"==typeof e?e():"object"==typeof e&&Object.keys(e).forEach((function(r){"function"==typeof e[r]&&e[r]()}))}},27:function(e,r,t){"use strict";var n=t(2);$(document).ready((function(){n(t(28))}))},28:function(e,r,t){"use strict";var n,i,s=t(4);e.exports={removeAddress:function(){$(".remove-address").on("click",(function(e){e.preventDefault(),i=$(this).data("default"),n=i?$(this).data("url")+"?addressId="+$(this).data("id")+"&isDefault="+i:$(this).data("url")+"?addressId="+$(this).data("id"),$(".product-to-remove").empty().append($(this).data("id"))}))},removeAddressConfirmation:function(){$(".delete-confirmation-btn").click((function(e){e.preventDefault(),$.ajax({url:n,type:"get",dataType:"json",success:function(e){if($("#uuid-"+e.UUID).remove(),i){var r=$(".card .address-heading").first().text()+" ("+e.defaultMsg+")";if($(".card .address-heading").first().text(r),$(".card .card-make-default-link").first().remove(),$(".remove-address").data("default",!0),e.message){var t="<div><h3>"+e.message+"</h3><div>";$(".addressList").after(t)}}},error:function(e){var r,t;e.responseJSON.redirectUrl?window.location.href=e.responseJSON.redirectUrl:(r=e.responseJSON.errorMessage,t='<div class="alert alert-danger alert-dismissible valid-cart-error fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+r+"</div>",$(".error-messaging").append(t)),$.spinner().stop()}})}))},submitAddress:function(){$("form.address-form").submit((function(e){var r=$(this);return e.preventDefault(),n=r.attr("action"),r.spinner().start(),$("form.address-form").trigger("address:submit",e),$.ajax({url:n,type:"post",dataType:"json",data:r.serialize(),success:function(e){r.spinner().stop(),e.success?location.href=e.redirectUrl:s(r,e)},error:function(e){e.responseJSON.redirectUrl&&(window.location.href=e.responseJSON.redirectUrl),r.spinner().stop()}}),!1}))}}},4:function(e,r,t){"use strict";e.exports=function(e,r){(function(e){$(e).find(".form-control.is-invalid").removeClass("is-invalid")}(e),$(".alert",e).remove(),"object"==typeof r&&r.fields&&Object.keys(r.fields).forEach((function(t){if(r.fields[t]){var n=$(e).find('[name="'+t+'"]').parent().children(".invalid-feedback");n.length>0&&(Array.isArray(r[t])?n.html(r.fields[t].join("<br/>")):n.html(r.fields[t]),n.siblings(".form-control").addClass("is-invalid"))}})),r&&r.error)&&("FORM"===$(e).prop("tagName")?$(e):$(e).parents("form")).prepend('<div class="alert alert-danger" role="alert">'+r.error.join("<br/>")+"</div>")}}});

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
/******/ 	return __webpack_require__(__webpack_require__.s = "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/addressBook.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/addressBook.js":
/*!***************************************************************************************!*\
  !*** ./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/addressBook.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar processInclude = __webpack_require__(/*! ./util */ \"./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/util.js\");\n\n$(document).ready(function () {\n    processInclude(__webpack_require__(/*! ./addressBook/addressBook */ \"./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/addressBook/addressBook.js\"));\n});\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/addressBook.js?");

/***/ }),

/***/ "./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/addressBook/addressBook.js":
/*!***************************************************************************************************!*\
  !*** ./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/addressBook/addressBook.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar formValidation = __webpack_require__(/*! ../components/formValidation */ \"./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/components/formValidation.js\");\n\nvar url;\nvar isDefault;\n\n/**\n * Create an alert to display the error message\n * @param {Object} message - Error message to display\n */\nfunction createErrorNotification(message) {\n    var errorHtml = '<div class=\"alert alert-danger alert-dismissible valid-cart-error ' +\n        'fade show\" role=\"alert\">' +\n        '<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">' +\n        '<span aria-hidden=\"true\">&times;</span>' +\n        '</button>' + message + '</div>';\n\n    $('.error-messaging').append(errorHtml);\n}\n\nmodule.exports = {\n    removeAddress: function () {\n        $('.remove-address').on('click', function (e) {\n            e.preventDefault();\n            isDefault = $(this).data('default');\n            if (isDefault) {\n                url = $(this).data('url')\n                    + '?addressId='\n                    + $(this).data('id')\n                    + '&isDefault='\n                    + isDefault;\n            } else {\n                url = $(this).data('url') + '?addressId=' + $(this).data('id');\n            }\n            $('.product-to-remove').empty().append($(this).data('id'));\n        });\n    },\n\n    removeAddressConfirmation: function () {\n        $('.delete-confirmation-btn').click(function (e) {\n            e.preventDefault();\n            $.ajax({\n                url: url,\n                type: 'get',\n                dataType: 'json',\n                success: function (data) {\n                    $('#uuid-' + data.UUID).remove();\n                    if (isDefault) {\n                        var addressId = $('.card .address-heading').first().text();\n                        var addressHeading = addressId + ' (' + data.defaultMsg + ')';\n                        $('.card .address-heading').first().text(addressHeading);\n                        $('.card .card-make-default-link').first().remove();\n                        $('.remove-address').data('default', true);\n                        if (data.message) {\n                            var toInsert = '<div><h3>' +\n                                data.message +\n                                '</h3><div>';\n                            $('.addressList').after(toInsert);\n                        }\n                    }\n                },\n                error: function (err) {\n                    if (err.responseJSON.redirectUrl) {\n                        window.location.href = err.responseJSON.redirectUrl;\n                    } else {\n                        createErrorNotification(err.responseJSON.errorMessage);\n                    }\n                    $.spinner().stop();\n                }\n            });\n        });\n    },\n\n    submitAddress: function () {\n        $('form.address-form').submit(function (e) {\n            var $form = $(this);\n            e.preventDefault();\n            url = $form.attr('action');\n            $form.spinner().start();\n            $('form.address-form').trigger('address:submit', e);\n            $.ajax({\n                url: url,\n                type: 'post',\n                dataType: 'json',\n                data: $form.serialize(),\n                success: function (data) {\n                    $form.spinner().stop();\n                    if (!data.success) {\n                        formValidation($form, data);\n                    } else {\n                        location.href = data.redirectUrl;\n                    }\n                },\n                error: function (err) {\n                    if (err.responseJSON.redirectUrl) {\n                        window.location.href = err.responseJSON.redirectUrl;\n                    }\n                    $form.spinner().stop();\n                }\n            });\n            return false;\n        });\n    }\n};\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_siteEgrocery/cartridge/client/default/js/addressBook/addressBook.js?");

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
