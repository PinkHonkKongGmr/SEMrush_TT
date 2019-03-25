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

/***/ "./src/filterControls.js":
/*!*******************************!*\
  !*** ./src/filterControls.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar add = document.querySelector('.add');\nvar filterField = document.querySelector('.filterField');\nvar clearFilter = document.querySelector('.clearFilter');\nvar apply = document.querySelector('.apply');\nvar filterProtocol = {\n  text: [],\n  number: []\n};\n\nfunction itemFull() {\n  var items = document.querySelectorAll('.item');\n  var full;\n  items.length > 9 ? full = true : full = false;\n  return full;\n}\n\nfunction filterProtocolClear() {\n  filterProtocol.text = [];\n  filterProtocol.number = [];\n}\n\nvar Item =\n/*#__PURE__*/\nfunction () {\n  function Item(parent) {\n    _classCallCheck(this, Item);\n\n    this.parent = parent;\n    this.item;\n    this.closer;\n    this.icon;\n    this.fundamental;\n    this.commonFields;\n    this.optionalText;\n    this.optionalNumber;\n    this.fundamentalSelector;\n    this.optionalTextSelector;\n    this.optionalNumberSelector;\n    this.fundamentalArray = ['Text field', 'Number field'];\n    this.optionalTextArray = ['Containing', 'Exactly matching', 'Begins with', 'Ends with'];\n    this.optionalNumberArray = ['Equal', 'Greater than', 'Less than'];\n    this.inputs = [];\n    this.textDefault = this.optionalTextArray[0];\n    this.numberDefault = this.optionalNumberArray[0];\n  }\n\n  _createClass(Item, [{\n    key: \"item\\u0421reate\",\n    value: function itemReate() {\n      this.item = document.createElement('div');\n      this.item.classList.add('item');\n      this.parent.appendChild(this.item);\n    }\n  }, {\n    key: \"closer\",\n    value: function closer() {\n      this.closer = document.createElement('div');\n      this.closer.classList.add('closer');\n      this.icon = document.createElement('i');\n      this.icon.classList.add('fas', 'fa-times');\n      this.closer.appendChild(this.icon);\n      return this.closer;\n    }\n  }, {\n    key: \"closerControl\",\n    value: function closerControl() {\n      var closers = document.querySelectorAll('.closer');\n\n      if (filterField.childNodes.length < 2) {\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = closers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var closer = _step.value;\n            closer.classList.add('hide');\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n              _iterator.return();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n      } else {\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n          for (var _iterator2 = closers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n            var _closer = _step2.value;\n\n            _closer.classList.remove('hide');\n          }\n        } catch (err) {\n          _didIteratorError2 = true;\n          _iteratorError2 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n              _iterator2.return();\n            }\n          } finally {\n            if (_didIteratorError2) {\n              throw _iteratorError2;\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"itemFilling\",\n    value: function itemFilling() {\n      this.fundamental = document.createElement('div');\n      this.fundamental.classList.add('fundamental');\n      this.optionalText = document.createElement('div');\n      this.optionalText.classList.add('optionalText');\n      this.optionalNumber = document.createElement('div');\n      this.optionalNumber.classList.add('optionalNumber', 'hide');\n      this.item.appendChild(this.fundamental);\n      this.item.appendChild(this.optionalText);\n      this.item.appendChild(this.optionalNumber);\n      this.item.appendChild(this.closer());\n    }\n  }, {\n    key: \"selectorCreator\",\n    value: function selectorCreator(element, array) {\n      var selector = document.createElement(\"select\");\n      selector.classList.add('commonFields', 'filterSelect');\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = array[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var optionBody = _step3.value;\n          var option = document.createElement(\"option\");\n          option.value = optionBody;\n          option.text = optionBody;\n          selector.appendChild(option);\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {\n            _iterator3.return();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n\n      element.appendChild(selector);\n      return selector;\n    }\n  }, {\n    key: \"inputCreator\",\n    value: function inputCreator(element, type) {\n      var input = document.createElement(\"input\");\n      this.inputs.push(input);\n      input.type = type;\n      input.classList.add('commonFields');\n      element.appendChild(input);\n    }\n  }, {\n    key: \"fieldsCreates\",\n    value: function fieldsCreates() {\n      this.fundamentalSelector = this.selectorCreator(this.fundamental, this.fundamentalArray);\n      this.optionalTextSelector = this.selectorCreator(this.optionalText, this.optionalTextArray);\n      this.inputCreator(this.optionalText, 'text');\n      this.optionalNumberSelector = this.selectorCreator(this.optionalNumber, this.optionalNumberArray);\n      this.inputCreator(this.optionalNumber, 'number');\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      var _iteratorNormalCompletion4 = true;\n      var _didIteratorError4 = false;\n      var _iteratorError4 = undefined;\n\n      try {\n        for (var _iterator4 = this.inputs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n          var input = _step4.value;\n          input.value = '';\n        }\n      } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {\n            _iterator4.return();\n          }\n        } finally {\n          if (_didIteratorError4) {\n            throw _iteratorError4;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"getDefault\",\n    value: function getDefault(context) {\n      context.optionalTextSelector.value = context.textDefault;\n      context.optionalNumberSelector.value = context.numberDefault;\n    }\n  }, {\n    key: \"itsatext\",\n    value: function itsatext(context) {\n      context.optionalNumber.classList.add('hide');\n      context.optionalText.classList.remove('hide');\n      context.getDefault(context);\n    }\n  }, {\n    key: \"itsaNumber\",\n    value: function itsaNumber(context) {\n      context.optionalText.classList.add('hide');\n      context.optionalNumber.classList.remove('hide');\n      context.getDefault(context);\n    }\n  }, {\n    key: \"eventMaker\",\n    value: function eventMaker() {\n      var context = this;\n\n      this.fundamentalSelector.onchange = function () {\n        if (this.value == \"Text field\") {\n          context.itsatext(context);\n          context.reset();\n        } else {\n          context.itsaNumber(context);\n          context.reset();\n        }\n      };\n\n      this.icon.onclick = function () {\n        context.parent.removeChild(context.item);\n        context.closerControl();\n      };\n    }\n  }]);\n\n  return Item;\n}();\n\nfunction buildTheItem() {\n  var item = new Item(filterField);\n  item.itemСreate();\n  item.itemFilling();\n  item.fieldsCreates();\n  item.eventMaker();\n  item.closerControl();\n}\n\nadd.onclick = function () {\n  itemFull() ? alert('максимум 10') : buildTheItem();\n};\n\nwindow.onload = function () {\n  buildTheItem();\n};\n\nclearFilter.onclick = function () {\n  filterField.innerHTML = '';\n  buildTheItem();\n};\n\nfunction protocolMaker(filter, protocol) {\n  var _iteratorNormalCompletion5 = true;\n  var _didIteratorError5 = false;\n  var _iteratorError5 = undefined;\n\n  try {\n    for (var _iterator5 = filter[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n      var sel = _step5.value;\n\n      if (!sel.classList.contains('hide')) {\n        var operation = void 0;\n        var value = void 0;\n        var _iteratorNormalCompletion6 = true;\n        var _didIteratorError6 = false;\n        var _iteratorError6 = undefined;\n\n        try {\n          for (var _iterator6 = sel.childNodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {\n            node = _step6.value;\n            node.type == 'select-one' ? operation = node.value : value = node.value;\n          }\n        } catch (err) {\n          _didIteratorError6 = true;\n          _iteratorError6 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {\n              _iterator6.return();\n            }\n          } finally {\n            if (_didIteratorError6) {\n              throw _iteratorError6;\n            }\n          }\n        }\n\n        protocol.push({\n          operation: operation,\n          value: value\n        });\n      }\n    }\n  } catch (err) {\n    _didIteratorError5 = true;\n    _iteratorError5 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {\n        _iterator5.return();\n      }\n    } finally {\n      if (_didIteratorError5) {\n        throw _iteratorError5;\n      }\n    }\n  }\n}\n\napply.onclick = function () {\n  filterProtocolClear();\n  var optoinalTextContent = document.querySelectorAll('.optionalText');\n  protocolMaker(optoinalTextContent, filterProtocol.text);\n  var optoinalNumberContent = document.querySelectorAll('.optionalNumber');\n  protocolMaker(optoinalNumberContent, filterProtocol.number);\n  console.log(filterProtocol);\n};\n\n//# sourceURL=webpack:///./src/filterControls.js?");

/***/ }),

/***/ "./src/inarray.js":
/*!************************!*\
  !*** ./src/inarray.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Переменные для теста bind специально двух типов. querySelectorAll работает с forEach, getElementsByClassName - нет.\nvar hatefulEight = document.querySelectorAll('.example');\nvar he = document.getElementsByClassName('example'); // общий inArray. Возвращает true принахождении совпадения и сообщает о несовпадении\n\nfunction inArray(arr, el) {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var element = _step.value;\n\n      if (element == el) {\n        return true;\n      } else {\n        console.log(false);\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}\n\n; // вывод// console.log(inArray([1, 2, 3], 1));\n// inArray дополняющий прототип Array. Можно вызывать через точку. Его удалось запустить через bind\n\nArray.prototype.inArray = function (el) {\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = this[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var element = _step2.value;\n\n      if (element == el) {\n        return true;\n      } else {\n        console.log(false);\n      }\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n        _iterator2.return();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n}; // console.log([1, 2, 3].inArray(100));\n// реализация bind\n\n\nfunction bind(method, context) {\n  var args = [].slice.call(arguments, 2);\n  return function () {\n    var a = args.concat([].slice.call(arguments, 0));\n    return method.apply(context, a);\n  };\n} // тестовый метод, можно вызвать через bind\n\n\nfunction test(ok) {\n  this.forEach(function (elem) {\n    elem.innerHTML = ok;\n  });\n} // обработка массивоподобного объекта методом массива с использованием bind запуск forEach c getElementsByClassName\n\n\nvar fn = function fn(elem) {\n  console.log(elem);\n};\n\nvar p = bind([].forEach, he, fn);\np();\n\n//# sourceURL=webpack:///./src/inarray.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n__webpack_require__(/*! ./inarray */ \"./src/inarray.js\");\n\n__webpack_require__(/*! ./filterControls */ \"./src/filterControls.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });