/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_places_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/places.js */ "./src/modules/places.js");
/* harmony import */ var _modules_forecasts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forecasts.js */ "./src/modules/forecasts.js");
/* harmony import */ var _data_conditions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/conditions.js */ "./src/data/conditions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var basic_widgets = document.querySelector('.basic-widgets');
var places_input = document.querySelector('#places-input');
var save_location_btn = document.querySelector('#save-location-btn');
var temperature_item_template = document.querySelector('#temperature-item-template');
var temperatures = document.querySelector('#temperatures');
var temperatures_wrapper = document.querySelector('#temperatures-wrapper');
await (0,_modules_places_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
var storage = localStorage.getItem("my-places");
storage = JSON.parse(storage) || [];
if (storage.length > 0) {
  await init();
}
function get_datetime_string(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getUTCHours();
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":00:00");
}
function init() {
  return _init.apply(this, arguments);
}
function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _iterator4, _step4, place, forecasts, _iterator5, _step5, forecastTimestamp;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _iterator4 = _createForOfIteratorHelper(storage);
          _context2.prev = 1;
          _iterator4.s();
        case 3:
          if ((_step4 = _iterator4.n()).done) {
            _context2.next = 12;
            break;
          }
          place = _step4.value;
          _context2.next = 7;
          return (0,_modules_forecasts_js__WEBPACK_IMPORTED_MODULE_1__["default"])(place);
        case 7:
          forecasts = _context2.sent;
          _iterator5 = _createForOfIteratorHelper(forecasts.forecastTimestamps);
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              forecastTimestamp = _step5.value;
              if (forecastTimestamp.forecastTimeUtc == get_datetime_string(new Date())) {
                create_widget(forecastTimestamp, place);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        case 10:
          _context2.next = 3;
          break;
        case 12:
          _context2.next = 17;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          _iterator4.e(_context2.t0);
        case 17:
          _context2.prev = 17;
          _iterator4.f();
          return _context2.finish(17);
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 14, 17, 20]]);
  }));
  return _init.apply(this, arguments);
}
function create_widget(forecast, place_name) {
  var widget_basic = document.querySelector('#widget-basic-template').content.firstElementChild.cloneNode(true);
  widget_basic.querySelector('.widget-basic__city').textContent = place_name;
  widget_basic.querySelector('[name=temperature]').textContent = "".concat(forecast.airTemperature, "\xB0");
  widget_basic.querySelector('[name=weather-icon]').src = get_weather_icon(forecast.conditionCode);
  widget_basic.querySelector('[name=weather-name]').textContent = forecast.conditionCode.replaceAll("-", " ");
  var time = new Date(Date.parse(forecast.forecastTimeUtc + '.000Z'));
  widget_basic.querySelector('[name=time]').textContent = "".concat(time.getHours(), ":").concat(String(time.getMinutes()).padStart(2, "0"));
  widget_basic.querySelector('.widget-basic__remove').addEventListener('click', function (e) {
    var parent_root = widget_basic.closest('.widget-basic');
    var name = parent_root.querySelector('.widget-basic__city').textContent;
    parent_root.remove();
    storage = storage.filter(function (place) {
      return place != name;
    });
    localStorage.setItem("my-places", JSON.stringify(storage));
  });
  basic_widgets.appendChild(widget_basic);
}
function get_weather_icon(conditionCode) {
  var weather_icon = _data_conditions_js__WEBPACK_IMPORTED_MODULE_2__["default"][conditionCode];
  if (weather_icon == undefined) {
    weather_icon = 'star.svg';
    console.error("Condition code not found: ".concat(conditionCode));
  }
  return "img/icons/".concat(weather_icon);
}
var is_selected_from_dropdown = false;
var today_forecast;
save_location_btn.addEventListener('click', function (e) {
  e.preventDefault();
  create_widget(today_forecast, places_input.value);
  storage.push(places_input.value);
  localStorage.setItem("my-places", JSON.stringify(storage));
});
places_input.addEventListener('input', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var forecasts, alert_wrapper, group_by_date, find_closest_temperature, grouped_forecasts, closest_temps, _iterator3, _step3, temps, temperature_item;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          is_selected_from_dropdown = e.inputType == "insertReplacementText" || e.inputType == undefined ? true : false;
          if (!(is_selected_from_dropdown == true)) {
            _context.next = 24;
            break;
          }
          // remove all temperatures
          temperatures.replaceChildren();
          _context.next = 5;
          return (0,_modules_forecasts_js__WEBPACK_IMPORTED_MODULE_1__["default"])(places_input.value);
        case 5:
          forecasts = _context.sent;
          alert_wrapper = document.querySelector('#alert-wrapper');
          if (!(forecasts.error !== undefined)) {
            _context.next = 11;
            break;
          }
          alert_wrapper.classList.remove('d-none');
          alert_wrapper.querySelector('.alert').textContent = "Weather service error: ".concat(forecasts.error.message);
          return _context.abrupt("return");
        case 11:
          alert_wrapper.classList.add('d-none');
          temperatures_wrapper.classList.remove('d-none');
          save_location_btn.disabled = false;
          group_by_date = function group_by_date(forecasts) {
            var forecast_date = forecasts[0].forecastTimeUtc.split(' ')[0];
            var date_groups = [];
            var current_list = [];
            for (var i = 0; i < forecasts.length; i++) {
              // if (forecast_date)
              var forecastTimeSplit = forecasts[i].forecastTimeUtc.split(' ');
              if (forecast_date !== forecastTimeSplit[0]) {
                var _date_groups;
                date_groups.push([]);
                (_date_groups = date_groups[date_groups.length - 1]).splice.apply(_date_groups, [0, 0].concat(current_list));
                current_list.length = 0;
                forecast_date = forecastTimeSplit[0];
              }
              forecasts[i].hour = parseInt(forecastTimeSplit[1].split(':')[0]);
              current_list.push(forecasts[i]);
              // if this is the last iteration
              if (i === forecasts.length - 1) {
                var _date_groups2;
                date_groups.push([]);
                (_date_groups2 = date_groups[date_groups.length - 1]).splice.apply(_date_groups2, [0, 0].concat(current_list));
              }
            }
            return date_groups;
          };
          find_closest_temperature = function find_closest_temperature(forecast_groups, hour) {
            var closest_forecasts = [];
            var _iterator = _createForOfIteratorHelper(forecast_groups),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var forecast_group = _step.value;
                var difference = Infinity;
                var currently_closest = [];
                var _iterator2 = _createForOfIteratorHelper(forecast_group),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var forecast = _step2.value;
                    if (Math.abs(forecast.hour - hour) < difference) {
                      difference = Math.abs(forecast.hour - hour);
                      currently_closest = forecast;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                var timestamp = Date.parse(currently_closest.forecastTimeUtc);
                var dateObject = new Date(timestamp);
                currently_closest.dayOfWeek = dateObject.toLocaleString('en-us', {
                  weekday: 'short'
                });
                closest_forecasts.push(currently_closest);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return closest_forecasts;
          };
          grouped_forecasts = group_by_date(forecasts.forecastTimestamps);
          closest_temps = find_closest_temperature(grouped_forecasts, new Date().getUTCHours());
          closest_temps[0].dayOfWeek = "Today";
          today_forecast = closest_temps[0];
          _iterator3 = _createForOfIteratorHelper(closest_temps);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              temps = _step3.value;
              temperature_item = temperature_item_template.content.firstElementChild.cloneNode(true);
              temperature_item.querySelector('[name=day-of-week]').textContent = temps.dayOfWeek;
              temperature_item.querySelector('[name=weather-icon]').src = get_weather_icon(temps.conditionCode);
              temperature_item.querySelector('[name=temperature]').textContent = "".concat(temps.airTemperature, "\xB0");
              temperatures.appendChild(temperature_item);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          _context.next = 25;
          break;
        case 24:
          save_location_btn.disabled = true;
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/data/conditions.js":
/*!********************************!*\
  !*** ./src/data/conditions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'clear': 'clear-day.svg',
  'partly-cloudy': 'partly-cloudy-day.svg',
  'variable-cloudiness': 'overcast.svg',
  'cloudy-with-sunny-intervals': 'overcast-day.svg',
  'cloudy': 'cloudy.svg',
  'thunder': 'thunderstorms.svg',
  'isolated-thunderstorms': 'thunderstorms-rain.svg',
  'thunderstorms': 'thunderstorms-rain.svg',
  'heavy-rain-with-thunderstorms': 'thunderstorms-rain.svg',
  'light-rain': 'rain.svg',
  'rain': 'rain.svg',
  'heavy-rain': 'rain.svg',
  'rain-showers': 'rain.svg',
  'light-rain-at-times': 'rain.svg',
  'rain-at-times': 'rain.svg',
  'light-sleet': 'sleet.svg',
  'sleet': 'sleet.svg',
  'sleet-at-timest': 'sleet.svg',
  'sleet-showerst': 'sleet.svg',
  'freezing-rain': 'rain.svg',
  'hail': 'hail.svg',
  'light-snow': 'snow.svg',
  'snow': 'snow.svg',
  'heavy-snow': 'snow.svg',
  'snow-showers': 'snow.svg',
  'snow-at-times': 'snow.svg',
  'light-snow-at-times': 'snow.svg',
  'snowstorm': 'snow.svg',
  'mist': 'mist.svg',
  'fog': 'fog.svg',
  'squall': 'wind.svg'
});

/***/ }),

/***/ "./src/data/places.js":
/*!****************************!*\
  !*** ./src/data/places.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  "code": "abromiskes",
  "name": "Abromiškės",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "acokavai",
  "name": "Acokavai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "adakavas",
  "name": "Adakavas",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "adomyne",
  "name": "Adomynė",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "adutiskis",
  "name": "Adutiškis",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "agluonai",
  "name": "Agluonai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "agluonenai",
  "name": "Agluonėnai",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aistiskiai",
  "name": "Aistiškiai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aizkraukle",
  "name": "Aizkraukle",
  "administrativeDivision": "Aizkraukles novads",
  "countryCode": "LV"
}, {
  "code": "akademija",
  "name": "Akademija",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "akademija-2",
  "name": "Akademija",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aklasis-ezeras",
  "name": "Aklasis Ežeras",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "akmene",
  "name": "Akmenė",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "akmene-ii",
  "name": "Akmenė II",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "akmene-iii",
  "name": "Akmenė III",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "akmeniskes",
  "name": "Akmeniškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "akmenynai",
  "name": "Akmenynai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "akmenyne",
  "name": "Akmenynė",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aknystos",
  "name": "Aknystos",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "akstinai",
  "name": "Akstinai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "akuotai",
  "name": "Akuotai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alanta",
  "name": "Alanta",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aleksandravas",
  "name": "Aleksandravas",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aleksandravele",
  "name": "Aleksandravėlė",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aleksandrija",
  "name": "Aleksandrija",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aleksandrija-2",
  "name": "Aleksandrija",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aleksandrija-3",
  "name": "Aleksandrija",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alesninkai",
  "name": "Alesninkai",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alionys-i",
  "name": "Alionys I",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alizava",
  "name": "Alizava",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alkiskiai",
  "name": "Alkiškiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alksnenai",
  "name": "Alksnėnai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alksniupiai",
  "name": "Alksniupiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alsedziai",
  "name": "Alsėdžiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alsiai",
  "name": "Alsiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "altoniskiai",
  "name": "Altoniškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aluksne",
  "name": "Alūksne",
  "administrativeDivision": "Alūksnes novads",
  "countryCode": "LV"
}, {
  "code": "aluona",
  "name": "Aluona",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alvitas",
  "name": "Alvitas",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "alytus",
  "name": "Alytus",
  "administrativeDivision": "Alytaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ambraziskiai",
  "name": "Ambraziškiai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "anavilis",
  "name": "Anavilis",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "anciskiai",
  "name": "Ančiškiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "anciunai",
  "name": "Anciūnai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "andrioniskis",
  "name": "Andrioniškis",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "andriskiai",
  "name": "Andriškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "andrusaiciai",
  "name": "Andrušaičiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "anglininkai",
  "name": "Anglininkai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ankstakiai",
  "name": "Ankštakiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antakalnis",
  "name": "Antakalnis",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antakalnis-2",
  "name": "Antakalnis",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antakalnis-iii",
  "name": "Antakalnis III",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antalge",
  "name": "Antalgė",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antaliepte",
  "name": "Antalieptė",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antalksne",
  "name": "Antalksnė",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antanase",
  "name": "Antanašė",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antanavas",
  "name": "Antanavas",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antasava",
  "name": "Antašava",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antazave",
  "name": "Antazavė",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "antezeriai",
  "name": "Antežeriai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "anuziai",
  "name": "Anužiai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "anyksciai",
  "name": "Anykščiai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "anziliai",
  "name": "Anžiliai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "apascia",
  "name": "Apaščia",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "apuole",
  "name": "Apuolė",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "arimaiciai",
  "name": "Arimaičiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ariogala",
  "name": "Ariogala",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "arlaviskes",
  "name": "Arlaviškės",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "armalenai",
  "name": "Armalėnai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "armeniskiai",
  "name": "Armeniškiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "arnionys-i",
  "name": "Arnionys I",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "arskainiai",
  "name": "Arškainiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "arvydai",
  "name": "Arvydai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "asmiany",
  "name": "Ашмяны (Ašmiany)",
  "administrativeDivision": "Ашмянскі раён",
  "countryCode": "BY"
}, {
  "code": "asminta",
  "name": "Ašminta",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "astraviec",
  "name": "Астравец (Astraviec)",
  "administrativeDivision": "Астравецкі раён",
  "countryCode": "BY"
}, {
  "code": "atkociai",
  "name": "Atkočiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "atkociskes",
  "name": "Atkočiškės",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "augalai",
  "name": "Augalai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "augmenai",
  "name": "Augmėnai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "augustinava",
  "name": "Augustinava",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "augustow",
  "name": "Augustów",
  "administrativeDivision": "Powiat augustowski",
  "countryCode": "PL"
}, {
  "code": "aukstadvaris",
  "name": "Aukštadvaris",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aukstakalniai",
  "name": "Aukštakalniai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aukstelkai",
  "name": "Aukštelkai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aukstelke",
  "name": "Aukštelkė",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aukstikalniai",
  "name": "Aukštikalniai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aukstkeliai",
  "name": "Aukštkeliai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aukstuole",
  "name": "Aukštuolė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aukstupenai",
  "name": "Aukštupėnai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aukstupiai",
  "name": "Aukštupiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "auksudys",
  "name": "Auksūdys",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "auleliai",
  "name": "Auleliai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aunuvenai",
  "name": "Aunuvėnai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "avikilai",
  "name": "Avikilai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "aviliai-ii",
  "name": "Aviliai II",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "avizieniai",
  "name": "Avižieniai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "avizonys",
  "name": "Avižonys",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "azubaliai",
  "name": "Ažubaliai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "azugiriai",
  "name": "Ažugiriai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "azulauke",
  "name": "Ažulaukė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "azuoline",
  "name": "Ąžuolinė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "azuolu-buda",
  "name": "Ąžuolų Būda",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "azuozeriai",
  "name": "Ažuožeriai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "babriskes",
  "name": "Babriškės",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "babrungas",
  "name": "Babrungas",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "babtai",
  "name": "Babtai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "backininkai",
  "name": "Bačkininkai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "backininkai-2",
  "name": "Bačkininkai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "backiskiai",
  "name": "Bačkiškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bagaslaviskis",
  "name": "Bagaslaviškis",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bagaslaviskis-2",
  "name": "Bagaslaviškis",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bagdononys",
  "name": "Bagdononys",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bagotoji",
  "name": "Bagotoji",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bagrationovsk",
  "name": "Багратионовск (Bagrationovsk)",
  "administrativeDivision": "Багратионовский городской округ",
  "countryCode": "RU"
}, {
  "code": "bagrenas",
  "name": "Bagrėnas",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baibiai",
  "name": "Baibiai",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baisogala",
  "name": "Baisogala",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bajorai",
  "name": "Bajorai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bajorai-2",
  "name": "Bajorai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baksenai",
  "name": "Bakšėnai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "balbieriskis",
  "name": "Balbieriškis",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "balceriskes",
  "name": "Balceriškės",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "balciai",
  "name": "Balčiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baleliai",
  "name": "Baleliai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "balenos",
  "name": "Balėnos",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "balninkai",
  "name": "Balninkai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "balozi",
  "name": "Baloži",
  "administrativeDivision": "Ķekavas novads",
  "countryCode": "LV"
}, {
  "code": "balsiai",
  "name": "Balsiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "balsiai-2",
  "name": "Balsiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "balsupiai",
  "name": "Balsupiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baltininkai",
  "name": "Baltininkai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baltiysk",
  "name": "Балтийск (Baltiysk)",
  "administrativeDivision": "Балтийский городской округ",
  "countryCode": "RU"
}, {
  "code": "baltoji-voke",
  "name": "Baltoji Vokė",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baltoji-voke-2",
  "name": "Baltoji Vokė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baltraitiske",
  "name": "Baltraitiškė",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baltrusaiciai",
  "name": "Baltrušaičiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baltrusiai",
  "name": "Baltrušiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "balvi",
  "name": "Balvi",
  "administrativeDivision": "Balvu novads",
  "countryCode": "LV"
}, {
  "code": "baragine",
  "name": "Baraginė",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baran",
  "name": "Барань (Baran’)",
  "administrativeDivision": "Аршанскі раён",
  "countryCode": "BY"
}, {
  "code": "bardauskai",
  "name": "Bardauskai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bardinai",
  "name": "Bardinai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bardiskiai",
  "name": "Bardiškiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bariunai",
  "name": "Bariūnai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "barklainiai-i",
  "name": "Barklainiai I",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "barskunai",
  "name": "Barskūnai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "barstyciai",
  "name": "Barstyčiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bartkuskis",
  "name": "Bartkuškis",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bartninkai",
  "name": "Bartninkai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bartoniai",
  "name": "Bartoniai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bartoszyce",
  "name": "Bartoszyce",
  "administrativeDivision": "Powiat bartoszycki",
  "countryCode": "PL"
}, {
  "code": "barysau",
  "name": "Барысаў (Barysaŭ)",
  "administrativeDivision": "Барысаўскі раён",
  "countryCode": "BY"
}, {
  "code": "barzdai",
  "name": "Barzdai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "barzdziai",
  "name": "Barzdžiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "batakiai",
  "name": "Batakiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bategala",
  "name": "Batėgala",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "baubliai",
  "name": "Baubliai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bauska",
  "name": "Bauska",
  "administrativeDivision": "Bauskas novads",
  "countryCode": "LV"
}, {
  "code": "bazilionai",
  "name": "Bazilionai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bebrininkai",
  "name": "Bebrininkai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bebruliske",
  "name": "Bebruliškė",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "beciunai",
  "name": "Bėčiūnai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "beinorava",
  "name": "Beinorava",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "beizionys",
  "name": "Beižionys",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bekupe",
  "name": "Bekupė",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "beloniskes",
  "name": "Beloniškės",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bendoriai",
  "name": "Bendoriai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "benininkai",
  "name": "Benininkai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "berciunai",
  "name": "Berčiūnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "berciunai-2",
  "name": "Berčiūnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "berkinenai",
  "name": "Berkinėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bernatoniai",
  "name": "Bernatoniai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bernatoniai-2",
  "name": "Bernatoniai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bernotai",
  "name": "Bernotai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bertauciai",
  "name": "Bertaučiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "berteskiai",
  "name": "Berteškiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bertuziai",
  "name": "Bertužiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "berzenai",
  "name": "Beržėnai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "berzininkai",
  "name": "Beržininkai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "berziskes",
  "name": "Beržiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "berzyne",
  "name": "Beržynė",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "betygala",
  "name": "Betygala",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bezdonys",
  "name": "Bezdonys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bezdonys-2",
  "name": "Bezdonys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "biala-podlaska",
  "name": "Biała Podlaska",
  "administrativeDivision": "Biała Podlaska",
  "countryCode": "PL"
}, {
  "code": "bialystok",
  "name": "Białystok",
  "administrativeDivision": "Białystok",
  "countryCode": "PL"
}, {
  "code": "biarozauka",
  "name": "Бярозаўка (Biarozaŭka)",
  "administrativeDivision": "Лідскі раён",
  "countryCode": "BY"
}, {
  "code": "bielsk-podlaski",
  "name": "Bielsk Podlaski",
  "administrativeDivision": "Powiat bielski",
  "countryCode": "PL"
}, {
  "code": "bieniakoni",
  "name": "Беняконі (Bieniakoni)",
  "administrativeDivision": "Воранаўскі раён",
  "countryCode": "BY"
}, {
  "code": "bierazino",
  "name": "Беразіно (Bierazino)",
  "administrativeDivision": "Бярэзінскі раён",
  "countryCode": "BY"
}, {
  "code": "bijotai",
  "name": "Bijotai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bijunai",
  "name": "Bijūnai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bijunai-2",
  "name": "Bijūnai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bijutiskis",
  "name": "Bijutiškis",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bikavenai",
  "name": "Bikavėnai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bilgoraj",
  "name": "Biłgoraj",
  "administrativeDivision": "Powiat biłgorajski",
  "countryCode": "PL"
}, {
  "code": "biliakiemis",
  "name": "Biliakiemis",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bilioniai",
  "name": "Bilioniai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "biliunai",
  "name": "Biliūnai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "birstonas",
  "name": "Birštonas",
  "administrativeDivision": "Birštono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "biruliskes",
  "name": "Biruliškės",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "birzai",
  "name": "Biržai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "birzai-2",
  "name": "Biržai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "birzu-laukas",
  "name": "Biržų Laukas",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "birzuvenai",
  "name": "Biržuvėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bizieriai",
  "name": "Bizieriai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "blauzdziunai",
  "name": "Blauzdžiūnai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "blinstrubiskiai",
  "name": "Blinstrubiškiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bliudziai",
  "name": "Bliūdžiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bliuviskiai",
  "name": "Bliuviškiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bogdoniske",
  "name": "Bogdoniškė",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bokstai",
  "name": "Bokštai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "boniskiai",
  "name": "Boniškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bratoniskes",
  "name": "Bratoniškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "brazuole",
  "name": "Bražuolė",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bridai",
  "name": "Bridai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "brinkiskes",
  "name": "Brinkiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "brukai",
  "name": "Brukai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bubenai",
  "name": "Bubėnai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bubiai",
  "name": "Bubiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bubiai-2",
  "name": "Bubiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bubleliai",
  "name": "Būbleliai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bubliske",
  "name": "Būbliškė",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bubos",
  "name": "Bubos",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "buciunai",
  "name": "Bučiūnai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "buciunai-2",
  "name": "Bučiūnai",
  "administrativeDivision": "Birštono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "buda",
  "name": "Būda",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "budraiciai",
  "name": "Budraičiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "budriai",
  "name": "Budriai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "budriai-2",
  "name": "Budriai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "budrikiai",
  "name": "Budrikiai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "budvieciai",
  "name": "Būdviečiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bugeniai",
  "name": "Bugeniai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "buivydiskes",
  "name": "Buivydiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "buivydziai-i",
  "name": "Buivydžiai I",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bukiskis",
  "name": "Bukiškis",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "buknaiciai",
  "name": "Buknaičiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bukonys",
  "name": "Bukonys",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bukta",
  "name": "Bukta",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "buktiskiai",
  "name": "Buktiškiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "buozenai",
  "name": "Buožėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "burbiskis",
  "name": "Burbiškis",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "burgaiciai",
  "name": "Burgaičiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "burveliai",
  "name": "Burveliai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "butenai",
  "name": "Butėnai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "butenai-2",
  "name": "Butėnai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "butkeliai",
  "name": "Butkeliai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "butkiske",
  "name": "Butkiškė",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "butkiske-2",
  "name": "Butkiškė",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "butniunai",
  "name": "Butniūnai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "butrimonys",
  "name": "Butrimonys",
  "administrativeDivision": "Alytaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "butrimonys-2",
  "name": "Butrimonys",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "byciai",
  "name": "Byčiai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "bytlaukis",
  "name": "Bytlaukis",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "cedasai",
  "name": "Čedasai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ceikiniai",
  "name": "Ceikiniai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "cekiske",
  "name": "Čekiškė",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "cekoniskes",
  "name": "Čekoniškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "cekonys",
  "name": "Čekonys",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "cesis",
  "name": "Cēsis",
  "administrativeDivision": "Cēsu novads",
  "countryCode": "LV"
}, {
  "code": "chelm",
  "name": "Chełm",
  "administrativeDivision": "Chełm",
  "countryCode": "PL"
}, {
  "code": "chernyakhovsk",
  "name": "Черняховск (Chernyakhovsk)",
  "administrativeDivision": "Черняховский городской округ",
  "countryCode": "RU"
}, {
  "code": "cicinai",
  "name": "Čičinai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ciechanow",
  "name": "Ciechanów",
  "administrativeDivision": "Powiat ciechanowski",
  "countryCode": "PL"
}, {
  "code": "ciobiskis",
  "name": "Čiobiškis",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "cipariai",
  "name": "Cipariai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "cirkliskis",
  "name": "Cirkliškis",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ciudiskiai",
  "name": "Čiudiškiai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ciurliai",
  "name": "Čiurliai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ciuziakampis",
  "name": "Čiužiakampis",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ciziunai",
  "name": "Čižiūnai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "cyckai",
  "name": "Čyčkai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dabikine",
  "name": "Dabikinė",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dabuziai-i",
  "name": "Dabužiai I",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dacijonai",
  "name": "Dacijonai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dagiai",
  "name": "Dagiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dagiai-2",
  "name": "Dagiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dagiliskis",
  "name": "Dagiliškis",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dailides",
  "name": "Dailidės",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dailuciai",
  "name": "Dailučiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dainava",
  "name": "Dainava",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dainava-2",
  "name": "Dainava",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dainava-3",
  "name": "Dainava",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dainava-4",
  "name": "Dainava",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dainiai",
  "name": "Dainiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dambrava",
  "name": "Dambrava",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daniunai",
  "name": "Daniūnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dapkiskiai",
  "name": "Dapkiškiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dapkuniskiai",
  "name": "Dapkūniškiai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "darginiai",
  "name": "Darginiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "darsuniskis",
  "name": "Darsūniškis",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "darzininkai",
  "name": "Daržininkai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "darzininkai-2",
  "name": "Daržininkai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daubariai",
  "name": "Daubariai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daubenai",
  "name": "Daubėnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daubiskiai",
  "name": "Daubiškiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daugai",
  "name": "Daugai",
  "administrativeDivision": "Alytaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daugailiai",
  "name": "Daugailiai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daugavpils",
  "name": "Daugavpils",
  "administrativeDivision": "Daugavpils",
  "countryCode": "LV"
}, {
  "code": "daugedai",
  "name": "Daugėdai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daugelaiciai",
  "name": "Daugėlaičiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daugeliskiai",
  "name": "Daugeliškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daugidonys",
  "name": "Daugidonys",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dauginciai",
  "name": "Dauginčiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daugirdai",
  "name": "Daugirdai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dauglaukis",
  "name": "Dauglaukis",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daujenai",
  "name": "Daujėnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daujociai",
  "name": "Daujočiai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daukantiskiai",
  "name": "Daukantiškiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daukniunai",
  "name": "Daukniūnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dauksiai",
  "name": "Daukšiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dauksiai-2",
  "name": "Daukšiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dauksiai-3",
  "name": "Daukšiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "daunoriske",
  "name": "Daunoriškė",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "debeikiai",
  "name": "Debeikiai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dedeliskes",
  "name": "Dėdeliškės",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "degaiciai",
  "name": "Degaičiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "degesiai",
  "name": "Degėsiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "deglenai",
  "name": "Deglėnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "deguciai",
  "name": "Degučiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "deguciai-2",
  "name": "Degučiai",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "deguciai-3",
  "name": "Degučiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "deguciai-4",
  "name": "Degučiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "degutine",
  "name": "Degutinė",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "deltuva",
  "name": "Deltuva",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dembava",
  "name": "Dembava",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dercekliai",
  "name": "Dercekliai",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didieji-bausiai",
  "name": "Didieji Baušiai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didieji-gulbinai",
  "name": "Didieji Gulbinai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didieji-lygainiai",
  "name": "Didieji Lygainiai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didieji-rusupiai",
  "name": "Didieji Rūšupiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didieji-selviai",
  "name": "Didieji Šelviai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didkiemis",
  "name": "Didkiemis",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didsode",
  "name": "Didsodė",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didvyciai",
  "name": "Didvyčiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didvyriai",
  "name": "Didvyriai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didysis-palukstis",
  "name": "Didysis Palūkstis",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didzialaukis",
  "name": "Didžialaukis",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didziasalis",
  "name": "Didžiasalis",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didziasalis-2",
  "name": "Didžiasalis",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didzioji-riese",
  "name": "Didžioji Riešė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didziosios-kabiskes",
  "name": "Didžiosios Kabiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didziosios-lapes",
  "name": "Didžiosios Lapės",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didziosios-selos",
  "name": "Didžiosios Sėlos",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didziosios-zariskes",
  "name": "Didžiosios Zariškės",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didziosios-zubiskes",
  "name": "Didžiosios Zubiškės",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "didziuliai",
  "name": "Didžiuliai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dieveniskes",
  "name": "Dieveniškės",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dievogala",
  "name": "Dievogala",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dievogala-2",
  "name": "Dievogala",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dievogala-3",
  "name": "Dievogala",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "diksiai",
  "name": "Dikšiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "diliauskai",
  "name": "Diliauskai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dimitriskes",
  "name": "Dimitriškės",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dirkintai",
  "name": "Dirkintai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dirvonenai",
  "name": "Dirvonėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dobele",
  "name": "Dobele",
  "administrativeDivision": "Dobeles novads",
  "countryCode": "LV"
}, {
  "code": "dobromisle",
  "name": "Dobromislė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "domeikava",
  "name": "Domeikava",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dotnuva",
  "name": "Dotnuva",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dotnuva-2",
  "name": "Dotnuva",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dovainiai",
  "name": "Dovainiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dovainonys",
  "name": "Dovainonys",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dovilai",
  "name": "Dovilai",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "draseikiai",
  "name": "Drąseikiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "draseikiai-2",
  "name": "Drąseikiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "drasuciai",
  "name": "Drąsučiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "drasutaiciai",
  "name": "Drąsutaičiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "draudeliai",
  "name": "Draudeliai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dreverna",
  "name": "Dreverna",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "drobuksciai",
  "name": "Drobūkščiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "drobuksciai-2",
  "name": "Drobūkščiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "druskininkai",
  "name": "Druskininkai",
  "administrativeDivision": "Druskininkų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "druzai",
  "name": "Družai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dubenai",
  "name": "Dubėnai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dubingiai",
  "name": "Dubingiai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dubravai",
  "name": "Dubravai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dukstas",
  "name": "Dūkštas",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dukstos",
  "name": "Dūkštos",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dukurnonys",
  "name": "Dukurnonys",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "duobiskiai",
  "name": "Duobiškiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "duokiskis",
  "name": "Duokiškis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dupulciai",
  "name": "Dupulčiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "duseikiai",
  "name": "Dūseikiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dusetos",
  "name": "Dusetos",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dusinenai",
  "name": "Dusinėnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dusmenys",
  "name": "Dusmenys",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dvariskiai",
  "name": "Dvariškiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dvylikiai",
  "name": "Dvylikiai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "dzialdowo",
  "name": "Działdowo",
  "administrativeDivision": "Powiat działdowski",
  "countryCode": "PL"
}, {
  "code": "dziarzynsk",
  "name": "Дзяржынск (Dziaržynsk)",
  "administrativeDivision": "Дзяржынскі раён",
  "countryCode": "BY"
}, {
  "code": "dziuginenai",
  "name": "Džiuginėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "egliskes",
  "name": "Egliškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "eiciai",
  "name": "Eičiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "eidintai",
  "name": "Eidintai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "eigirdziai",
  "name": "Eigirdžiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "eiksciai",
  "name": "Eikščiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "eimuciai",
  "name": "Eimučiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "einoraiciai",
  "name": "Einoraičiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "eisiskes",
  "name": "Eišiškės",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "eitminiskes",
  "name": "Eitminiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "elblag",
  "name": "Elbląg",
  "administrativeDivision": "Elbląg",
  "countryCode": "PL"
}, {
  "code": "elektrenai",
  "name": "Elektrėnai",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "elk",
  "name": "Ełk",
  "administrativeDivision": "Powiat ełcki",
  "countryCode": "PL"
}, {
  "code": "elmininkai-i",
  "name": "Elmininkai I",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "elva",
  "name": "Elva",
  "administrativeDivision": "Tartu maakond",
  "countryCode": "EE"
}, {
  "code": "emiliskes",
  "name": "Emiliškės",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "endriejavas",
  "name": "Endriejavas",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "eriskiai",
  "name": "Ėriškiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "erlenai",
  "name": "Erlėnai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "erzvilkas",
  "name": "Eržvilkas",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ezerelis",
  "name": "Ežerėlis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "fanipal",
  "name": "Фаніпаль (Fanipaĺ)",
  "administrativeDivision": "Дзяржынскі раён",
  "countryCode": "BY"
}, {
  "code": "ferma",
  "name": "Ferma",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gabriliava",
  "name": "Gabriliava",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gabsiai",
  "name": "Gabšiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gacioniai",
  "name": "Gačioniai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gadunavas",
  "name": "Gadūnavas",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gaideliai",
  "name": "Gaideliai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gaidunai",
  "name": "Gaidūnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gailaiciai",
  "name": "Gailaičiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gailiai",
  "name": "Gailiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gaizaiciai",
  "name": "Gaižaičiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gaizenai",
  "name": "Gaižėnai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gaizeneliai",
  "name": "Gaižėnėliai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gaiziunai",
  "name": "Gaižiūnai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "galgiai",
  "name": "Galgiai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gargzdai",
  "name": "Gargždai",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "garliava",
  "name": "Garliava",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "garuckai",
  "name": "Garuckai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gasciunai",
  "name": "Gasčiūnai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gatauciai",
  "name": "Gataučiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gaudikaiciai",
  "name": "Gaudikaičiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gaure",
  "name": "Gaurė",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gavaltuva",
  "name": "Gavaltuva",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gedintes",
  "name": "Gedintės",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gediskiai",
  "name": "Gediškiai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gedrimai",
  "name": "Gedrimai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gegrenai",
  "name": "Gegrėnai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geguziai",
  "name": "Gegužiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geguzine",
  "name": "Gegužinė",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geidziai",
  "name": "Geidžiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geidziunai",
  "name": "Geidžiūnai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geisiskes",
  "name": "Geisiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geisteriskiai",
  "name": "Geisteriškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geisteriskiai-2",
  "name": "Geisteriškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geleziai",
  "name": "Geležiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gelezunai",
  "name": "Geležūnai",
  "administrativeDivision": "Birštono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gelgaudiskis",
  "name": "Gelgaudiškis",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geluva",
  "name": "Gėluva",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gelvonai",
  "name": "Gelvonai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gerdziunai",
  "name": "Gerdžiūnai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gergzdeliai",
  "name": "Gergždeliai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "germaniskis",
  "name": "Germaniškis",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "geruliai",
  "name": "Geruliai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gervenai",
  "name": "Gervėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gervenupis",
  "name": "Gervėnupis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gervine",
  "name": "Gervinė",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gerviskes",
  "name": "Gerviškės",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gesalai",
  "name": "Gėsalai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "giedraiciai",
  "name": "Giedraičiai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "giedraiciai-2",
  "name": "Giedraičiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "giedriai",
  "name": "Giedriai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "giedruciai",
  "name": "Giedručiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gilaiciai",
  "name": "Gilaičiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "giliogiris",
  "name": "Giliogiris",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "giluciai",
  "name": "Gilučiai",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gilutos",
  "name": "Gilūtos",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "giluziai",
  "name": "Gilužiai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gilvyciai",
  "name": "Gilvyčiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gineikiai",
  "name": "Gineikiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gineitiskes",
  "name": "Gineitiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ginenai",
  "name": "Ginėnai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ginkunai",
  "name": "Ginkūnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gintalai",
  "name": "Gintalai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gintaliske",
  "name": "Gintališkė",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gintauciai",
  "name": "Gintaučiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "giraite",
  "name": "Giraitė",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girdeniai",
  "name": "Girdeniai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girdiske",
  "name": "Girdiškė",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girdziai",
  "name": "Girdžiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girenai",
  "name": "Girėnai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girenai-2",
  "name": "Girėnai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girenai-3",
  "name": "Girėnai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girininkai",
  "name": "Girininkai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girininkai-ii",
  "name": "Girininkai II",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girionys",
  "name": "Girionys",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girkalnis",
  "name": "Girkalnis",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girminiai",
  "name": "Girminiai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girnikai",
  "name": "Girnikai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girsteitiskis",
  "name": "Girsteitiškis",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girsudai",
  "name": "Girsūdai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "girvainiai",
  "name": "Girvainiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gizai",
  "name": "Gižai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gizycko",
  "name": "Giżycko",
  "administrativeDivision": "Powiat giżycki",
  "countryCode": "PL"
}, {
  "code": "glaudziai",
  "name": "Glaudžiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "glitiskes",
  "name": "Glitiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gojus",
  "name": "Gojus",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gorainiai",
  "name": "Gorainiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gotlybiskiai",
  "name": "Gotlybiškiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grabupiai",
  "name": "Grabupiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grajewo",
  "name": "Grajewo",
  "administrativeDivision": "Powiat grajewski",
  "countryCode": "PL"
}, {
  "code": "graziskiai",
  "name": "Gražiškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grazuciai",
  "name": "Gražučiai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grendave",
  "name": "Grendavė",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "griciai",
  "name": "Griciai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grigaiciai",
  "name": "Grigaičiai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grikiapeliai",
  "name": "Grikiapeliai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grikieniai",
  "name": "Grikieniai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grikpedziai",
  "name": "Grikpėdžiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grimzdai",
  "name": "Grimzdai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grimziai",
  "name": "Grimziai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grinaiciai",
  "name": "Grinaičiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "griniai",
  "name": "Griniai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grinkiskis",
  "name": "Grinkiškis",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gripiskes",
  "name": "Gripiškės",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "griskabudis",
  "name": "Griškabūdis",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grodzisk-mazowiecki",
  "name": "Grodzisk Mazowiecki",
  "administrativeDivision": "Powiat grodziski",
  "countryCode": "PL"
}, {
  "code": "grumbliai",
  "name": "Grumbliai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gruslauke",
  "name": "Grūšlaukė",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gruzdiske",
  "name": "Gruzdiškė",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gruzdziai",
  "name": "Gruzdžiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gruziai",
  "name": "Grūžiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grybeliai",
  "name": "Grybeliai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "grybenai",
  "name": "Grybėnai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudai",
  "name": "Gudai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudeliai",
  "name": "Gudeliai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudeliai-2",
  "name": "Gudeliai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudeliai-3",
  "name": "Gudeliai",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudeliai-4",
  "name": "Gudeliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudeliai-5",
  "name": "Gudeliai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudeliai-6",
  "name": "Gudeliai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudeliai-7",
  "name": "Gudeliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudiena",
  "name": "Gudiena",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudkaimis",
  "name": "Gudkaimis",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudzenka",
  "name": "Gudzenka",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gudziunai",
  "name": "Gudžiūnai",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gulbene",
  "name": "Gulbene",
  "administrativeDivision": "Gulbenes novads",
  "countryCode": "LV"
}, {
  "code": "gulbes",
  "name": "Gulbės",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gulbinai",
  "name": "Gulbinai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gulbinenai",
  "name": "Gulbinėnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gulbiniskiai",
  "name": "Gulbiniškiai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gulbiniskiai-2",
  "name": "Gulbiniškiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "guldynai",
  "name": "Guldynai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "guostagalis",
  "name": "Guostagalis",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "guragiai",
  "name": "Gūragiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gusev",
  "name": "Гусев (Gusev)",
  "administrativeDivision": "Гусевский городской округ",
  "countryCode": "RU"
}, {
  "code": "gustonys",
  "name": "Gustonys",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gvardeysk",
  "name": "Гвардейск (Gvardeysk)",
  "administrativeDivision": "Гвардейский городской округ",
  "countryCode": "RU"
}, {
  "code": "gyliai",
  "name": "Gyliai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gyvakarai",
  "name": "Gyvakarai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gyviskiai",
  "name": "Gyviškiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "gyvoliai",
  "name": "Gyvoliai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "haapsalu",
  "name": "Haapsalu",
  "administrativeDivision": "Lääne maakond",
  "countryCode": "EE"
}, {
  "code": "hajnowka",
  "name": "Hajnówka",
  "administrativeDivision": "Powiat hajnowski",
  "countryCode": "PL"
}, {
  "code": "haradok",
  "name": "Гарадок (Haradok)",
  "administrativeDivision": "Гарадоцкі раён",
  "countryCode": "BY"
}, {
  "code": "hierviaty",
  "name": "Гервяты (Hierviaty)",
  "administrativeDivision": "Астравецкі раён",
  "countryCode": "BY"
}, {
  "code": "hlybokaje",
  "name": "Глыбокае (Hlybokaje)",
  "administrativeDivision": "Глыбоцкі раён",
  "countryCode": "BY"
}, {
  "code": "hrodna",
  "name": "Гродна (Hrodna)",
  "administrativeDivision": "Гродзенская вобласць",
  "countryCode": "BY"
}, {
  "code": "igliauka",
  "name": "Igliauka",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "igliskeliai",
  "name": "Igliškėliai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ignalina",
  "name": "Ignalina",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ilawa",
  "name": "Iława",
  "administrativeDivision": "Powiat iławski",
  "countryCode": "PL"
}, {
  "code": "ilgakiemis",
  "name": "Ilgakiemis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ilgiziai-iii",
  "name": "Ilgižiai III",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ilguva",
  "name": "Ilguva",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "imbradas",
  "name": "Imbradas",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ingavangis",
  "name": "Ingavangis",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "inkakliai",
  "name": "Inkakliai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "inturke",
  "name": "Inturkė",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ireniskiai",
  "name": "Ireniškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "isdagai",
  "name": "Išdagai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "islauzas",
  "name": "Išlaužas",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ismonys",
  "name": "Ismonys",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "isorai",
  "name": "Išorai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "izdonai",
  "name": "Iždonai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jadagoniai",
  "name": "Jadagoniai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jadvygiskes",
  "name": "Jadvygiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jagelonys",
  "name": "Jagėlonys",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jakaiciai",
  "name": "Jakaičiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jakeliai",
  "name": "Jakeliai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jakiskiai",
  "name": "Jakiškiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jakutiskiai",
  "name": "Jakutiškiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "janapole",
  "name": "Janapolė",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "janauciai",
  "name": "Janaučiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "janciai",
  "name": "Jančiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "janciunai",
  "name": "Jančiūnai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jankai",
  "name": "Jankai",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jankunai",
  "name": "Jankūnai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "janukiskiai",
  "name": "Janukiškiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "janusava",
  "name": "Janušava",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jasiuliskis",
  "name": "Jasiuliškis",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jasiunai",
  "name": "Jašiūnai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jasiunai-2",
  "name": "Jašiūnai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jasiunai-3",
  "name": "Jašiūnai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jasonys",
  "name": "Jasonys",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jatkanciai",
  "name": "Jatkančiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jaucakiai",
  "name": "Jaučakiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jauniunai",
  "name": "Jauniūnai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jauniunai-2",
  "name": "Jauniūnai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jelgava",
  "name": "Jelgava",
  "administrativeDivision": "Jelgava",
  "countryCode": "LV"
}, {
  "code": "jiestrakis",
  "name": "Jiestrakis",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jieznas",
  "name": "Jieznas",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jiezno-kolonijos",
  "name": "Jiezno Kolonijos",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jogeva",
  "name": "Jõgeva",
  "administrativeDivision": "Jõgeva maakond",
  "countryCode": "EE"
}, {
  "code": "joginiskiai",
  "name": "Joginiškiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "johampolis",
  "name": "Johampolis",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "johvi",
  "name": "Jõhvi",
  "administrativeDivision": "Ida-Viru maakond",
  "countryCode": "EE"
}, {
  "code": "jokubavas",
  "name": "Jokūbavas",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jomantai",
  "name": "Jomantai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jonai",
  "name": "Jonai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jonava",
  "name": "Jonava",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "joniske",
  "name": "Joniškė",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "joniskelis",
  "name": "Joniškėlis",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "joniskelis-2",
  "name": "Joniškėlis",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "joniskis",
  "name": "Joniškis",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "joniskis-2",
  "name": "Joniškis",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jonuciai",
  "name": "Jonučiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jonuciai-ii",
  "name": "Jonučiai II",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jonuskai",
  "name": "Jonuškai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "josvainiai",
  "name": "Josvainiai",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jotainiai",
  "name": "Jotainiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jovaisiske",
  "name": "Jovaišiškė",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jovarai",
  "name": "Jovarai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jovariskes",
  "name": "Jovariškės",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jucaiciai",
  "name": "Jucaičiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juciai",
  "name": "Jučiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "judrenai",
  "name": "Judrėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "judriai",
  "name": "Judriai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juknaiciai",
  "name": "Juknaičiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juknenai",
  "name": "Juknėnai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jungenai",
  "name": "Jungėnai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "junkilai",
  "name": "Junkilai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodaiciai",
  "name": "Juodaičiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodainiai",
  "name": "Juodainiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodbaliai",
  "name": "Juodbaliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodbudis",
  "name": "Juodbūdis",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodeikiai",
  "name": "Juodeikiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodiskiai",
  "name": "Juodiškiai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodpenai",
  "name": "Juodpėnai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodpetriai",
  "name": "Juodpetriai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodsiliai",
  "name": "Juodšiliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodupe",
  "name": "Juodupė",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juodupenai",
  "name": "Juodupėnai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juostavieciai",
  "name": "Juostaviečiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juragiai",
  "name": "Juragiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jurbarkai",
  "name": "Jurbarkai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jurbarkas",
  "name": "Jurbarkas",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jurdaiciai",
  "name": "Jurdaičiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jure",
  "name": "Jūrė",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jure-2",
  "name": "Jūrė",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jurgelionys",
  "name": "Jurgelionys",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jurgezeriai",
  "name": "Jurgežeriai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jurginiskiai",
  "name": "Jurginiškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "jurmala",
  "name": "Jūrmala",
  "administrativeDivision": "Jūrmala",
  "countryCode": "LV"
}, {
  "code": "juseviciai",
  "name": "Jusevičiai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juskaiciai",
  "name": "Juškaičiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juskonys",
  "name": "Juškonys",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "juzintai",
  "name": "Jūžintai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kabalda",
  "name": "Kabalda",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kacergine",
  "name": "Kačerginė",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kadagiskiai",
  "name": "Kadagiškiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kadaiciai",
  "name": "Kadaičiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaimelis",
  "name": "Kaimelis",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaimynai",
  "name": "Kaimynai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kairenai",
  "name": "Kairėnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kairenai-2",
  "name": "Kairėnai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaireneliai",
  "name": "Kairėnėliai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kairiai",
  "name": "Kairiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kairiskiai",
  "name": "Kairiškiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaisiadorys",
  "name": "Kaišiadorys",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kakoniske",
  "name": "Kakoniškė",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalabariskes",
  "name": "Kalabariškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalesninkai",
  "name": "Kalesninkai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaliningrad",
  "name": "Калининград (Kaliningrad)",
  "administrativeDivision": "Город Калининград",
  "countryCode": "RU"
}, {
  "code": "kalnas",
  "name": "Kalnas",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalnelio-grazioniai",
  "name": "Kalnelio Gražioniai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalnelis",
  "name": "Kalnelis",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalnenai",
  "name": "Kalnėnai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalnenai-2",
  "name": "Kalnėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalnijos",
  "name": "Kalnijos",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalniskiai",
  "name": "Kalniškiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalniskiai-2",
  "name": "Kalniškiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalniskiai-3",
  "name": "Kalniškiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalnujai",
  "name": "Kalnujai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalodziscy",
  "name": "Калодзішчы (Kalodziščy)",
  "administrativeDivision": "Мінскі раён",
  "countryCode": "BY"
}, {
  "code": "kalpokai",
  "name": "Kalpokai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaltanenai",
  "name": "Kaltanėnai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaltinenai",
  "name": "Kaltinėnai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalvarija",
  "name": "Kalvarija",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalveliai",
  "name": "Kalveliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalveliai-2",
  "name": "Kalveliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalviai",
  "name": "Kalviai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalviai-2",
  "name": "Kalviai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kalviskes",
  "name": "Kalviškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kamajai",
  "name": "Kamajai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kanapelka",
  "name": "Kanapelka",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaniukai",
  "name": "Kaniūkai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaniukai-2",
  "name": "Kaniūkai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaniukai-3",
  "name": "Kaniūkai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kantauciai",
  "name": "Kantaučiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kanteriskiai",
  "name": "Kanteriškiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kapciamiestis",
  "name": "Kapčiamiestis",
  "administrativeDivision": "Lazdijų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kapenai",
  "name": "Kapėnai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karaliai",
  "name": "Karaliai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karcemos",
  "name": "Karčemos",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karciupis",
  "name": "Karčiupis",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kareivonys",
  "name": "Kareivonys",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kariotiskes",
  "name": "Kariotiškės",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karkazai",
  "name": "Karkazai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karkaziske",
  "name": "Karkažiškė",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karklenai",
  "name": "Karklėnai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karklenai-2",
  "name": "Karklėnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karklenai-3",
  "name": "Karklėnai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karkliniai",
  "name": "Karkliniai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karlos",
  "name": "Karlos",
  "administrativeDivision": "Visagino savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karmelava",
  "name": "Karmėlava",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karmelava-ii",
  "name": "Karmėlava II",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karsakiskis",
  "name": "Karsakiškis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kartupiai",
  "name": "Kartupiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "karvys",
  "name": "Karvys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kasciukiskes",
  "name": "Kasčiukiškės",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kasonys",
  "name": "Kašonys",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kataucizna",
  "name": "Kataučizna",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "katauskiai",
  "name": "Katauskiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "katiliskiai",
  "name": "Katiliškiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "katinai",
  "name": "Katinai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "katleriai",
  "name": "Katlėriai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaubariskis",
  "name": "Kaubariškis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaukolikai",
  "name": "Kaukolikai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kauksnujai",
  "name": "Kauksnujai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaulakiai",
  "name": "Kaulakiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas",
  "name": "Kaunas",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-aleksotas",
  "name": "Kaunas (Aleksotas)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-centras",
  "name": "Kaunas (Centras)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-dainava",
  "name": "Kaunas (Dainava)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-eiguliai",
  "name": "Kaunas (Eiguliai)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-griciupis",
  "name": "Kaunas (Gričiupis)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-panemune",
  "name": "Kaunas (Panemunė)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-petrasiunai",
  "name": "Kaunas (Petrašiūnai)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-sanciai",
  "name": "Kaunas (Šančiai)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-silainiai",
  "name": "Kaunas (Šilainiai)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-vilijampole",
  "name": "Kaunas (Vilijampolė)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunas-zaliakalnis",
  "name": "Kaunas (Žaliakalnis)",
  "administrativeDivision": "Kauno miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kaunatava",
  "name": "Kaunatava",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kausenai",
  "name": "Kaušėnai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kavarskas",
  "name": "Kavarskas",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kavoliskis",
  "name": "Kavoliškis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kazitiskis",
  "name": "Kazitiškis",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kazlai-i",
  "name": "Kazlai I",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kazliskis",
  "name": "Kazliškis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kazlu-ruda",
  "name": "Kazlų Rūda",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kazokiskes",
  "name": "Kazokiškės",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "keblonys",
  "name": "Keblonys",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kedainiai",
  "name": "Kėdainiai",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kegai",
  "name": "Kegai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "keidziai",
  "name": "Keidžiai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "keila",
  "name": "Keila",
  "administrativeDivision": "Harju maakond",
  "countryCode": "EE"
}, {
  "code": "kekava",
  "name": "Ķekava",
  "administrativeDivision": "Ķekavas novads",
  "countryCode": "LV"
}, {
  "code": "kelme",
  "name": "Kelmė",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kena",
  "name": "Kena",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kentriai",
  "name": "Kentriai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kepaliai",
  "name": "Kepaliai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kerava",
  "name": "Kerava",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kernave",
  "name": "Kernavė",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kernuves",
  "name": "Kernuvės",
  "administrativeDivision": "Birštono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kesciai",
  "name": "Kęsčiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ketrzyn",
  "name": "Kętrzyn",
  "administrativeDivision": "Powiat kętrzyński",
  "countryCode": "PL"
}, {
  "code": "keturiai",
  "name": "Keturiai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "keturiasdesimt-totoriu",
  "name": "Keturiasdešimt Totorių",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "keturkaimis",
  "name": "Keturkaimis",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "keturvalakiai",
  "name": "Keturvalakiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kiaukliai",
  "name": "Kiaukliai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kiauleikiai",
  "name": "Kiauleikiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kiaunoriai",
  "name": "Kiaunoriai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kiduliai",
  "name": "Kiduliai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kiemeliai",
  "name": "Kiemeliai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kiemeliai-2",
  "name": "Kiemeliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kiemeliai-3",
  "name": "Kiemeliai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kiemenai",
  "name": "Kiemėnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kijeliai",
  "name": "Kijėliai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kiluciai",
  "name": "Kilučiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kimbartiske",
  "name": "Kimbartiškė",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kirdeikiai",
  "name": "Kirdeikiai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kirdonys",
  "name": "Kirdonys",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kirkilai",
  "name": "Kirkilai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kirkliai",
  "name": "Kirkliai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kirmeliai",
  "name": "Kirmėliai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kirnaiciai",
  "name": "Kirnaičiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kirtimai",
  "name": "Kirtimai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kisiniskiai",
  "name": "Kisiniškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kivioli",
  "name": "Kiviõli",
  "administrativeDivision": "Ida-Viru maakond",
  "countryCode": "EE"
}, {
  "code": "kivyliai",
  "name": "Kivyliai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaibunai",
  "name": "Klaibūnai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda",
  "name": "Klaipėda",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-centras",
  "name": "Klaipėda (Centras)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-gedminai",
  "name": "Klaipėda (Gedminai)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-labrenciske",
  "name": "Klaipėda (Labrenciškė)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-luize",
  "name": "Klaipėda (Luizė)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-lypkiai",
  "name": "Klaipėda (Lypkiai)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-melnrage",
  "name": "Klaipėda (Melnragė)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-rumpiske",
  "name": "Klaipėda (Rumpiškė)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-sendvaris",
  "name": "Klaipėda (Sendvaris)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-smelte",
  "name": "Klaipėda (Smeltė)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-smiltyne",
  "name": "Klaipėda (Smiltynė)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-tauralaukis",
  "name": "Klaipėda (Tauralaukis)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaipeda-zarde",
  "name": "Klaipėda (Žardė)",
  "administrativeDivision": "Klaipėdos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klaisiai",
  "name": "Klaišiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klampuciai",
  "name": "Klampučiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klauseikiai",
  "name": "Klauseikiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klausuciai",
  "name": "Klausučiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klausuciai-2",
  "name": "Klausučiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klausuciai-3",
  "name": "Klausučiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klebiskis",
  "name": "Klebiškis",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klibiai",
  "name": "Klibiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klieck",
  "name": "Клецк (Klieck)",
  "administrativeDivision": "Клецкі раён",
  "countryCode": "BY"
}, {
  "code": "klisiai",
  "name": "Klišiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kloniai",
  "name": "Kloniai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kloniniai-mijaugonys",
  "name": "Kloniniai Mijaugonys",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kloviniai",
  "name": "Kloviniai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kluonaliai",
  "name": "Kluonaliai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kluoniskiai",
  "name": "Kluoniškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klykiai",
  "name": "Klykiai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "klykoliai",
  "name": "Klykoliai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "knieciai",
  "name": "Kniečiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kobylka",
  "name": "Kobyłka",
  "administrativeDivision": "Powiat wołomiński",
  "countryCode": "PL"
}, {
  "code": "kohtla-jarve",
  "name": "Kohtla-Järve",
  "administrativeDivision": "Ida-Viru maakond",
  "countryCode": "EE"
}, {
  "code": "kolainiai",
  "name": "Kolainiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "konskie",
  "name": "Końskie",
  "administrativeDivision": "Diecezja radomska",
  "countryCode": "PL"
}, {
  "code": "kosiai-i",
  "name": "Košiai I",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "krakes",
  "name": "Krakės",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "krakes-2",
  "name": "Krakės",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "krakiai",
  "name": "Krakiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kraslava",
  "name": "Krāslava",
  "administrativeDivision": "Krāslavas novads",
  "countryCode": "LV"
}, {
  "code": "krasnik",
  "name": "Kraśnik",
  "administrativeDivision": "Powiat kraśnicki",
  "countryCode": "PL"
}, {
  "code": "krastai",
  "name": "Kraštai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kratiskiai",
  "name": "Kratiškiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kraziai",
  "name": "Kražiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kreipsiai",
  "name": "Kreipšiai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kreivalauziai",
  "name": "Kreivalaužiai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "krekenava",
  "name": "Krekenava",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kreslynai",
  "name": "Krėslynai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kretingale",
  "name": "Kretingalė",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kretingsodis",
  "name": "Kretingsodis",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kreva",
  "name": "Крэва (Kreva)",
  "administrativeDivision": "Смаргонскі раён",
  "countryCode": "BY"
}, {
  "code": "kriaunos",
  "name": "Kriaunos",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "krikliniai",
  "name": "Krikliniai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "krikstenai",
  "name": "Krikštėnai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "krincinas",
  "name": "Krinčinas",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kriokiskiai",
  "name": "Kriokiškiai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kriukai",
  "name": "Kriukai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kriukai-2",
  "name": "Kriūkai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "krokialaukis",
  "name": "Krokialaukis",
  "administrativeDivision": "Alytaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "krosna",
  "name": "Krosna",
  "administrativeDivision": "Lazdijų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kruonis",
  "name": "Kruonis",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kruopiai",
  "name": "Kruopiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kubiliai",
  "name": "Kubiliai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kubiliunai",
  "name": "Kubiliūnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kucgalys",
  "name": "Kučgalys",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kudirkos-naumiestis",
  "name": "Kudirkos Naumiestis",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuigaliai",
  "name": "Kuigaliai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kukeciai",
  "name": "Kukečiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kukorai",
  "name": "Kukorai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuktai",
  "name": "Kuktai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuktiskes",
  "name": "Kuktiškės",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kulai-i",
  "name": "Kulai I",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kulautuva",
  "name": "Kulautuva",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuldiga",
  "name": "Kuldīga",
  "administrativeDivision": "Kuldīgas novads",
  "countryCode": "LV"
}, {
  "code": "kuliai",
  "name": "Kuliai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuliai-2",
  "name": "Kūliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kulokai",
  "name": "Kūlokai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kulsenai",
  "name": "Kulšėnai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kultuvenai",
  "name": "Kultuvėnai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kulupenai",
  "name": "Kūlupėnai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kulva",
  "name": "Kulva",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kumelionys",
  "name": "Kumelionys",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kumpikai",
  "name": "Kumpikai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kumzaiciai",
  "name": "Kumžaičiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kunigiskiai",
  "name": "Kunigiškiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kunigiskiai-2",
  "name": "Kunigiškiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuniskiai",
  "name": "Kuniškiai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuosenai",
  "name": "Kuosėnai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuosine",
  "name": "Kuosinė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kupiskis",
  "name": "Kupiškis",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kupreliskis",
  "name": "Kupreliškis",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kupriai",
  "name": "Kupriai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kupriai-2",
  "name": "Kupriai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuprioniskes",
  "name": "Kuprioniškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuras",
  "name": "Kuras",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kurejai",
  "name": "Kurėjai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kuressaare",
  "name": "Kuressaare",
  "administrativeDivision": "Saare maakond",
  "countryCode": "EE"
}, {
  "code": "kurkliai",
  "name": "Kurkliai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kurkliai-ii",
  "name": "Kurkliai II",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kurmaiciai",
  "name": "Kurmaičiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kurmaiciai-2",
  "name": "Kurmaičiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kursenai",
  "name": "Kuršėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kurtuvenai",
  "name": "Kurtuvėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kusliskiai",
  "name": "Kušliškiai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kutiskiai",
  "name": "Kutiškiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kutno",
  "name": "Kutno",
  "administrativeDivision": "Diecezja łowicka",
  "countryCode": "PL"
}, {
  "code": "kuziai",
  "name": "Kužiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kveciai",
  "name": "Kveciai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kvedarna",
  "name": "Kvėdarna",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kvesai",
  "name": "Kvesai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kvetkai",
  "name": "Kvetkai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kvietiskis",
  "name": "Kvietiškis",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kybartai",
  "name": "Kybartai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kybartai-2",
  "name": "Kybartai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kybeikiai",
  "name": "Kybeikiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kyburiai",
  "name": "Kyburiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "kyviskes",
  "name": "Kyviškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "labanoras",
  "name": "Labanoras",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "labardziai",
  "name": "Labardžiai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lahojsk",
  "name": "Лагойск (Lahojsk)",
  "administrativeDivision": "Лагойскі раён",
  "countryCode": "BY"
}, {
  "code": "laibgaliai",
  "name": "Laibgaliai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laiciai",
  "name": "Laičiai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laiciai-2",
  "name": "Laičiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laiciai-3",
  "name": "Laičiai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laikses",
  "name": "Laikšės",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lailunai",
  "name": "Lailūnai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laipuskiai",
  "name": "Laipuškiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laiviai",
  "name": "Laiviai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laizuva",
  "name": "Laižuva",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lakstuciai",
  "name": "Lakštučiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lankaiciai",
  "name": "Lankaičiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lankupiai",
  "name": "Lankupiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lapeles",
  "name": "Lapelės",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lapes",
  "name": "Lapės",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lasai",
  "name": "Lašai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lauciai",
  "name": "Laučiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lauckaimis",
  "name": "Lauckaimis",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laugalis",
  "name": "Laugalis",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lauko-soda",
  "name": "Lauko Soda",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lauksargiai",
  "name": "Lauksargiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laukuva",
  "name": "Laukuva",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laukzeme",
  "name": "Laukžemė",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "laumenai",
  "name": "Laumėnai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lavenai",
  "name": "Lavėnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lavoriskes",
  "name": "Lavoriškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lazdenai",
  "name": "Lazdėnai",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lazdijai",
  "name": "Lazdijai",
  "administrativeDivision": "Lazdijų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lazdininkai",
  "name": "Lazdininkai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "leckava",
  "name": "Leckava",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "legionowo",
  "name": "Legionowo",
  "administrativeDivision": "Powiat legionowski",
  "countryCode": "PL"
}, {
  "code": "leipalingis",
  "name": "Leipalingis",
  "administrativeDivision": "Druskininkų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "leitgiriai",
  "name": "Leitgiriai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lekeciai",
  "name": "Lekėčiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lekeciai-2",
  "name": "Lekėčiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "leliunai",
  "name": "Leliūnai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "leliunai-2",
  "name": "Leliūnai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "leliunai-3",
  "name": "Leliūnai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lenas",
  "name": "Lėnas",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lenkimai",
  "name": "Lenkimai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lentvaris",
  "name": "Lentvaris",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "leonpolis",
  "name": "Leonpolis",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lepsiai",
  "name": "Lepšiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "leteniai",
  "name": "Lėteniai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "levaniskiai",
  "name": "Levaniškiai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "levaniskiai-2",
  "name": "Levaniškiai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liasny",
  "name": "Лясны (Liasny)",
  "administrativeDivision": "Мінскі раён",
  "countryCode": "BY"
}, {
  "code": "liausiai",
  "name": "Liaušiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liberiskis",
  "name": "Liberiškis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liciunai",
  "name": "Ličiūnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lida",
  "name": "Ліда (Lida)",
  "administrativeDivision": "Лідскі раён",
  "countryCode": "BY"
}, {
  "code": "lielvarde",
  "name": "Lielvārde",
  "administrativeDivision": "Lielvārdes novads",
  "countryCode": "LV"
}, {
  "code": "liepaja",
  "name": "Liepāja",
  "administrativeDivision": "Liepāja",
  "countryCode": "LV"
}, {
  "code": "liepalotai",
  "name": "Liepalotai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liepiai",
  "name": "Liepiai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liepiel",
  "name": "Лепель (Liepieĺ)",
  "administrativeDivision": "Лепельскі раён",
  "countryCode": "BY"
}, {
  "code": "lieplaukale",
  "name": "Lieplaukalė",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lieplauke",
  "name": "Lieplaukė",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lieporai",
  "name": "Lieporai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lieporiai",
  "name": "Lieporiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liepynai",
  "name": "Liepynai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "limbazi",
  "name": "Limbaži",
  "administrativeDivision": "Limbažu novads",
  "countryCode": "LV"
}, {
  "code": "lindiniskes",
  "name": "Lindiniškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lingailiai",
  "name": "Lingailiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "linkaiciai",
  "name": "Linkaičiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "linkaiciai-2",
  "name": "Linkaičiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "linkauciai",
  "name": "Linkaučiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "linkaviciai",
  "name": "Linkavičiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "linkmenys",
  "name": "Linkmenys",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "linksmakalnis",
  "name": "Linksmakalnis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "linksmuciai",
  "name": "Linksmučiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lioliai",
  "name": "Lioliai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liuban",
  "name": "Любань (Liubań)",
  "administrativeDivision": "Любанскі раён",
  "countryCode": "BY"
}, {
  "code": "liubavas",
  "name": "Liubavas",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liucinavas",
  "name": "Liucinavas",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liuciunai",
  "name": "Liučiūnai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liudvinavas",
  "name": "Liudvinavas",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liudvinavas-2",
  "name": "Liudvinavas",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liudyne",
  "name": "Liūdynė",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liukonys",
  "name": "Liukonys",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "liutonys",
  "name": "Liutonys",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "livani",
  "name": "Līvāni",
  "administrativeDivision": "Līvānu novads",
  "countryCode": "LV"
}, {
  "code": "lizdeikiai",
  "name": "Lizdeikiai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lomiai",
  "name": "Lomiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lomza",
  "name": "Łomża",
  "administrativeDivision": "Łomża",
  "countryCode": "PL"
}, {
  "code": "lowicz",
  "name": "Łowicz",
  "administrativeDivision": "Diecezja łowicka",
  "countryCode": "PL"
}, {
  "code": "lubartow",
  "name": "Lubartów",
  "administrativeDivision": "Powiat lubartowski",
  "countryCode": "PL"
}, {
  "code": "lubiai",
  "name": "Lubiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lublin",
  "name": "Lublin",
  "administrativeDivision": "Lublin",
  "countryCode": "PL"
}, {
  "code": "ludza",
  "name": "Ludza",
  "administrativeDivision": "Ludzas novads",
  "countryCode": "LV"
}, {
  "code": "luknenai",
  "name": "Luknėnai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "luknes",
  "name": "Luknės",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lukonys",
  "name": "Lukonys",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lukow",
  "name": "Łuków",
  "administrativeDivision": "Powiat łukowski",
  "countryCode": "PL"
}, {
  "code": "luksiai",
  "name": "Lukšiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "luksiai-2",
  "name": "Lukšiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lukstai",
  "name": "Lukštai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lumpenai",
  "name": "Lumpėnai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "luoke",
  "name": "Luokė",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "luokesa",
  "name": "Luokesa",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lupikai",
  "name": "Lupikai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lybiskiai",
  "name": "Lybiškiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lyduokiai",
  "name": "Lyduokiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lyduvenai",
  "name": "Lyduvėnai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lyksilis",
  "name": "Lykšilis",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "lyntupy",
  "name": "Лынтупы (Lyntupy)",
  "administrativeDivision": "Пастаўскі раён",
  "countryCode": "BY"
}, {
  "code": "lyta",
  "name": "Lyta",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "maardu",
  "name": "Maardu",
  "administrativeDivision": "Harju maakond",
  "countryCode": "EE"
}, {
  "code": "macikai",
  "name": "Macikai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "macionys",
  "name": "Mačionys",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "madona",
  "name": "Madona",
  "administrativeDivision": "Madonas novads",
  "countryCode": "LV"
}, {
  "code": "madziunai",
  "name": "Madžiūnai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "maguciai",
  "name": "Magučiai",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "magunai",
  "name": "Magūnai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "maironiai",
  "name": "Maironiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "maisiagala",
  "name": "Maišiagala",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "maladziecna",
  "name": "Маладзечна (Maladziečna)",
  "administrativeDivision": "Маладзечанскі раён",
  "countryCode": "BY"
}, {
  "code": "maldenai",
  "name": "Maldėnai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "maldeniai",
  "name": "Maldeniai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mamavys",
  "name": "Mamavys",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mamonovo",
  "name": "Мамоново (Mamonovo)",
  "administrativeDivision": "Мамоновский городской округ",
  "countryCode": "RU"
}, {
  "code": "manciusenai",
  "name": "Mančiušėnai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "maneikiai",
  "name": "Maneikiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "manikunai",
  "name": "Manikūnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mankiskiai",
  "name": "Mankiškiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mantviliskes",
  "name": "Mantviliškės",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "margininkai",
  "name": "Margininkai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "marijampole",
  "name": "Marijampolė",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "marijampolis",
  "name": "Marijampolis",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "marjina-horka",
  "name": "Мар’іна Горка (Marjina Horka)",
  "administrativeDivision": "Пухавіцкі раён",
  "countryCode": "BY"
}, {
  "code": "marki",
  "name": "Marki",
  "administrativeDivision": "Powiat wołomiński",
  "countryCode": "PL"
}, {
  "code": "mastaiciai",
  "name": "Mastaičiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "masteikiai",
  "name": "Masteikiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "masty",
  "name": "Масты (Masty)",
  "administrativeDivision": "Мастоўскі раён",
  "countryCode": "BY"
}, {
  "code": "mateikonys",
  "name": "Mateikonys",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "matlaukys",
  "name": "Matlaukys",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "matuizos",
  "name": "Matuizos",
  "administrativeDivision": "Varėnos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "matuizos-2",
  "name": "Matuizos",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mauruciai",
  "name": "Mauručiai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mazaiciai",
  "name": "Mažaičiai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mazeikiai",
  "name": "Mažeikiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mazeikoniai",
  "name": "Mažeikoniai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mazenai",
  "name": "Mažėnai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mazeniai",
  "name": "Maženiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mazieji-budezeriai",
  "name": "Mažieji Būdežeriai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mazieji-rusupiai",
  "name": "Mažieji Rūšupiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mazonai",
  "name": "Mažonai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "medeikiai",
  "name": "Medeikiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "medeniai",
  "name": "Medeniai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "medikoniai",
  "name": "Medikoniai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "medingenai",
  "name": "Medingėnai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mediniai-strevininkai",
  "name": "Mediniai Strėvininkai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "medininkai",
  "name": "Medininkai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "medzionys",
  "name": "Medžionys",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "medziukai",
  "name": "Medžiukai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "megucioniai",
  "name": "Megučioniai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "meikstai",
  "name": "Meikštai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "meilunai",
  "name": "Meilūnai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mekiai",
  "name": "Mekiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "melekonys",
  "name": "Melekonys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mereslenai",
  "name": "Merešlėnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "merkine",
  "name": "Merkinė",
  "administrativeDivision": "Varėnos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "meskalaukis",
  "name": "Meškalaukis",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "meskiai",
  "name": "Meškiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "meskuciai",
  "name": "Meškučiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "meskuiciai",
  "name": "Meškuičiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mezioneliai",
  "name": "Mėžionėliai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "micaiciai",
  "name": "Micaičiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mickunai",
  "name": "Mickūnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mielagenai",
  "name": "Mielagėnai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mieliunai",
  "name": "Mieliūnai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "miezaiciai",
  "name": "Miežaičiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mieziskiai",
  "name": "Miežiškiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "miezonys",
  "name": "Miežonys",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "miezonys-2",
  "name": "Miežonys",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "migonys",
  "name": "Migonys",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mikalauciskes",
  "name": "Mikalaučiškės",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mikalauka",
  "name": "Mikalauka",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mikaliskes",
  "name": "Mikališkės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mikasiunai",
  "name": "Mikašiūnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mikenai",
  "name": "Mikėnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mikniunai",
  "name": "Mikniūnai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mikoliskis",
  "name": "Mikoliškis",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mikoliskis-2",
  "name": "Mikoliškis",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mikytai",
  "name": "Mikytai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "milasaiciai",
  "name": "Milašaičiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "milasaiciai-2",
  "name": "Milašaičiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "milgaudziai",
  "name": "Milgaudžiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "milkunai",
  "name": "Milkūnai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "milkuskos",
  "name": "Milkuškos",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mimainiai",
  "name": "Mimainiai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "minaiciai",
  "name": "Minaičiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mindaugiai",
  "name": "Mindaugiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mindunai",
  "name": "Mindūnai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "minsk",
  "name": "Мінск (Minsk)",
  "administrativeDivision": "Мінскі раён",
  "countryCode": "BY"
}, {
  "code": "minsk-mazowiecki",
  "name": "Mińsk Mazowiecki",
  "administrativeDivision": "Powiat miński",
  "countryCode": "PL"
}, {
  "code": "minupiai",
  "name": "Minupiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "miskalaukis",
  "name": "Miškalaukis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "miskiniai",
  "name": "Miškiniai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "miskonys",
  "name": "Miškonys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mitkaiciai",
  "name": "Mitkaičiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mitkunai",
  "name": "Mitkūnai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mitriunai",
  "name": "Mitriūnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mlawa",
  "name": "Mława",
  "administrativeDivision": "Powiat mławski",
  "countryCode": "PL"
}, {
  "code": "mockai",
  "name": "Mockai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mokolai",
  "name": "Mokolai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "molainiai",
  "name": "Molainiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "moletai",
  "name": "Molėtai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "moluvenai",
  "name": "Moluvėnai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mosedis",
  "name": "Mosėdis",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mostiskes",
  "name": "Mostiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "motiejunai",
  "name": "Motiejūnai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mragowo",
  "name": "Mrągowo",
  "administrativeDivision": "Powiat mrągowski",
  "countryCode": "PL"
}, {
  "code": "muniskiai",
  "name": "Muniškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "muro-strevininkai",
  "name": "Mūro Strėvininkai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "musninkai",
  "name": "Musninkai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "musteniai",
  "name": "Musteniai",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "mykoliskes",
  "name": "Mykoliškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naciunai",
  "name": "Naciūnai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naikiai",
  "name": "Naikiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nairiai",
  "name": "Nairiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naisiai",
  "name": "Naisiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naiviai",
  "name": "Naiviai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nakiskiai",
  "name": "Nakiškiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "namisiai",
  "name": "Namišiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "narepai",
  "name": "Narėpai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "narkunai",
  "name": "Narkūnai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "narsieciai",
  "name": "Narsiečiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nartas",
  "name": "Nartas",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "narteikiai",
  "name": "Narteikiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "narva",
  "name": "Narva",
  "administrativeDivision": "Ida-Viru maakond",
  "countryCode": "EE"
}, {
  "code": "narvaisiai",
  "name": "Narvaišiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "narvydziai",
  "name": "Narvydžiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nasrenai",
  "name": "Nasrėnai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "natkiskiai",
  "name": "Natkiškiai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naudvaris",
  "name": "Naudvaris",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naudvaris-2",
  "name": "Naudvaris",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naugardiske",
  "name": "Naugardiškė",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujakiemis",
  "name": "Naujakiemis",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujamiestis",
  "name": "Naujamiestis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujamiestis-2",
  "name": "Naujamiestis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujarodziai",
  "name": "Naujarodžiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujas-strunaitis",
  "name": "Naujas Strūnaitis",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujasis-daugeliskis",
  "name": "Naujasis Daugėliškis",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujasis-lentvaris",
  "name": "Naujasis Lentvaris",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujasis-obelynas",
  "name": "Naujasis Obelynas",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujasodis",
  "name": "Naujasodis",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujasodis-2",
  "name": "Naujasodis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujasodis-3",
  "name": "Naujasodis",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujasodis-4",
  "name": "Naujasodis",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujasodis-5",
  "name": "Naujasodis",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujatriobiai",
  "name": "Naujatriobiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujieji-elmininkai",
  "name": "Naujieji Elmininkai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujieji-muniskiai",
  "name": "Naujieji Muniškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujiena",
  "name": "Naujiena",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujikai",
  "name": "Naujikai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujoji-akmene",
  "name": "Naujoji Akmenė",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujoji-uta",
  "name": "Naujoji Ūta",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naujosios-kietaviskes",
  "name": "Naujosios Kietaviškės",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "naukaimis",
  "name": "Naukaimis",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nausedai",
  "name": "Nausėdai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nausedai-2",
  "name": "Nausėdai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nausedziai",
  "name": "Nausėdžiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nausodis",
  "name": "Nausodis",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "navahrudak",
  "name": "Навагрудак (Navahrudak)",
  "administrativeDivision": "Навагрудскі раён",
  "countryCode": "BY"
}, {
  "code": "navapolack",
  "name": "Наваполацк (Navapolack)",
  "administrativeDivision": "Віцебская вобласць",
  "countryCode": "BY"
}, {
  "code": "navikai",
  "name": "Navikai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nemaksciai",
  "name": "Nemakščiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "neman",
  "name": "Неман (Neman)",
  "administrativeDivision": "Неманский городской округ",
  "countryCode": "RU"
}, {
  "code": "nemeiksciai",
  "name": "Nemeikščiai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nemencine",
  "name": "Nemenčinė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nemencine-ii",
  "name": "Nemenčinė II",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nemezis",
  "name": "Nemėžis",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nemunaitis",
  "name": "Nemunaitis",
  "administrativeDivision": "Alytaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nemunelio-radviliskis",
  "name": "Nemunėlio Radviliškis",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nepreksta",
  "name": "Neprėkšta",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nerimdaiciai",
  "name": "Nerimdaičiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "neringa",
  "name": "Neringa",
  "administrativeDivision": "Neringos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "neringa-juodkrante",
  "name": "Neringa (Juodkrantė)",
  "administrativeDivision": "Neringos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "neringa-nida",
  "name": "Neringa (Nida)",
  "administrativeDivision": "Neringos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "neringa-pervalka",
  "name": "Neringa (Pervalka)",
  "administrativeDivision": "Neringos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "neringa-preila",
  "name": "Neringa (Preila)",
  "administrativeDivision": "Neringos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "netickampis",
  "name": "Netičkampis",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "netoniai",
  "name": "Netoniai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nevarenai",
  "name": "Nevarėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "neveronys",
  "name": "Neveronys",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nevezis",
  "name": "Nevėžis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "nevociai",
  "name": "Nevočiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "niasviz",
  "name": "Нясвіж (Niasviž)",
  "administrativeDivision": "Нясвіжскі раён",
  "countryCode": "BY"
}, {
  "code": "niauduva",
  "name": "Niauduva",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "noreikiai",
  "name": "Noreikiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "noreikiskes",
  "name": "Noreikiškės",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "norgelai",
  "name": "Norgėlai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "norgelai-2",
  "name": "Norgėlai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "noriai",
  "name": "Noriai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "noriskiai",
  "name": "Noriškiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "noriunai",
  "name": "Noriūnai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "norkaiciai",
  "name": "Norkaičiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "norkiske",
  "name": "Norkiškė",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "notenai",
  "name": "Notėnai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "novalukoml",
  "name": "Новалукомль (Novalukomĺ)",
  "administrativeDivision": "Чашніцкі раён",
  "countryCode": "BY"
}, {
  "code": "nowy-dwor-mazowiecki",
  "name": "Nowy Dwór Mazowiecki",
  "administrativeDivision": "Powiat nowodworski",
  "countryCode": "PL"
}, {
  "code": "nuotekai",
  "name": "Nuotekai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "obelaukiai",
  "name": "Obelaukiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "obeliai",
  "name": "Obeliai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "obeliu-priemiestis",
  "name": "Obelių Priemiestis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ogre",
  "name": "Ogre",
  "administrativeDivision": "Ogres novads",
  "countryCode": "LV"
}, {
  "code": "olaine",
  "name": "Olaine",
  "administrativeDivision": "Olaines novads",
  "countryCode": "LV"
}, {
  "code": "olsztyn",
  "name": "Olsztyn",
  "administrativeDivision": "Olsztyn",
  "countryCode": "PL"
}, {
  "code": "onuskis",
  "name": "Onuškis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "opoczno",
  "name": "Opoczno",
  "administrativeDivision": "Diecezja radomska",
  "countryCode": "PL"
}, {
  "code": "opsrutai",
  "name": "Opšrūtai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "orsa",
  "name": "Орша (Orša)",
  "administrativeDivision": "Аршанскі раён",
  "countryCode": "BY"
}, {
  "code": "ostroda",
  "name": "Ostróda",
  "administrativeDivision": "Powiat ostródzki",
  "countryCode": "PL"
}, {
  "code": "ostroleka",
  "name": "Ostrołęka",
  "administrativeDivision": "Ostrołęka",
  "countryCode": "PL"
}, {
  "code": "ostrow-mazowiecka",
  "name": "Ostrów Mazowiecka",
  "administrativeDivision": "Powiat ostrowski",
  "countryCode": "PL"
}, {
  "code": "otwock",
  "name": "Otwock",
  "administrativeDivision": "Powiat otwocki",
  "countryCode": "PL"
}, {
  "code": "ozkasviliai",
  "name": "Ožkasviliai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "oztakiai",
  "name": "Ožtakiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pabaiskas",
  "name": "Pabaiskas",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pabalve",
  "name": "Pabalvė",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pabare",
  "name": "Pabarė",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paberze",
  "name": "Paberžė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pabirze",
  "name": "Pabiržė",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pabirzis",
  "name": "Pabiržis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pabrade",
  "name": "Pabradė",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paceriaukste-i",
  "name": "Pačeriaukštė I",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "packenai",
  "name": "Pačkėnai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "padainupys",
  "name": "Padainupys",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "padauguva",
  "name": "Padauguva",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "padovinys",
  "name": "Padovinys",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "padubysys",
  "name": "Padubysys",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "padustelis",
  "name": "Padustėlis",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "padustis",
  "name": "Padustis",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "padvariai",
  "name": "Padvariai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "padvarionys",
  "name": "Padvarionys",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "padvarionys-2",
  "name": "Padvarionys",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paeglesiai",
  "name": "Paeglesiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paezere",
  "name": "Paežerė",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paezeriai",
  "name": "Paežeriai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paezeriai-2",
  "name": "Paežeriai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paezeris",
  "name": "Paežeris",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagegiai",
  "name": "Pagėgiai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pageleziai",
  "name": "Pageležiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagiriai",
  "name": "Pagiriai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagiriai-2",
  "name": "Pagiriai",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagiriai-3",
  "name": "Pagiriai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagiriai-4",
  "name": "Pagiriai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagramantis",
  "name": "Pagramantis",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagrybis",
  "name": "Pagrybis",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagryniai",
  "name": "Pagryniai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagryzuvys",
  "name": "Pagryžuvys",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pagyne",
  "name": "Pagynė",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paide",
  "name": "Paide",
  "administrativeDivision": "Järva maakond",
  "countryCode": "EE"
}, {
  "code": "paistrys",
  "name": "Paįstrys",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pajevonys",
  "name": "Pajevonys",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pajiesmeniai",
  "name": "Pajiešmeniai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pajiesys",
  "name": "Pajiesys",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pajotijys",
  "name": "Pajotijys",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pajuodupis",
  "name": "Pajuodupis",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pajuostis",
  "name": "Pajuostis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pajuralis",
  "name": "Pajūralis",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pajuris",
  "name": "Pajūris",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakalniai",
  "name": "Pakalniai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakalniskes",
  "name": "Pakalniškės",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakalniskes-2",
  "name": "Pakalniškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakalniskiai",
  "name": "Pakalniškiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakalupis",
  "name": "Pakalupis",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakape",
  "name": "Pakapė",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakene",
  "name": "Pakenė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakerai",
  "name": "Pakerai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakertai",
  "name": "Pakertai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paketuriai",
  "name": "Paketuriai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakevis",
  "name": "Pakėvis",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakirsinys",
  "name": "Pakiršinys",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakonys",
  "name": "Pakonys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakriauniai",
  "name": "Pakriauniai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakruojis",
  "name": "Pakruojis",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakumulsiai",
  "name": "Pakumulšiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pakuonis",
  "name": "Pakuonis",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "palanga",
  "name": "Palanga",
  "administrativeDivision": "Palangos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "palanga-sventoji",
  "name": "Palanga (Šventoji)",
  "administrativeDivision": "Palangos miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "palevene",
  "name": "Palėvenė",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "palevenele",
  "name": "Palėvenėlė",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paliepiai",
  "name": "Paliepiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paliepiai-2",
  "name": "Paliepiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paliuniskis",
  "name": "Paliūniškis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "palnosai",
  "name": "Palnosai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "palomene",
  "name": "Palomenė",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "palonai",
  "name": "Palonai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paluknys",
  "name": "Paluknys",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paluobiai",
  "name": "Paluobiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pamazupiai",
  "name": "Pamažupiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pamusis",
  "name": "Pamūšis",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pamusis-2",
  "name": "Pamūšis",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pamusis-3",
  "name": "Pamūšis",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pandelys",
  "name": "Pandėlys",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pandelys-2",
  "name": "Pandėlys",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "panemune",
  "name": "Panemunė",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "panemunelis",
  "name": "Panemunėlis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "panemunelis-2",
  "name": "Panemunėlis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "panemunis",
  "name": "Panemunis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paneveziukas",
  "name": "Panevėžiukas",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "panevezys",
  "name": "Panevėžys",
  "administrativeDivision": "Panevėžio miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "panoteriai",
  "name": "Panoteriai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "panoviai",
  "name": "Panoviai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paparciai",
  "name": "Paparčiai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paparciai-2",
  "name": "Paparčiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papieviai",
  "name": "Papieviai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papile",
  "name": "Papilė",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papilvis",
  "name": "Papilvis",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papilys",
  "name": "Papilys",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papilys-2",
  "name": "Papilys",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papiskes",
  "name": "Papiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papiskes-2",
  "name": "Papiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papiskes-3",
  "name": "Papiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paprudziai",
  "name": "Paprūdžiai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paprudziai-2",
  "name": "Paprūdžiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papusyne",
  "name": "Papušynė",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papusynys",
  "name": "Papušynys",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "papyvesiai",
  "name": "Papyvesiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paragaudis",
  "name": "Paragaudis",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paramotis",
  "name": "Paramotis",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paraze",
  "name": "Parąžė",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paringuvis",
  "name": "Paringuvis",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "parnu",
  "name": "Pärnu",
  "administrativeDivision": "Pärnu maakond",
  "countryCode": "EE"
}, {
  "code": "paroveja",
  "name": "Parovėja",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "parudaminys",
  "name": "Parudaminys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasakiai",
  "name": "Pašakiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasaltuonys",
  "name": "Pašaltuonys",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paseimeniai",
  "name": "Pašeimeniai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasiause",
  "name": "Pašiaušė",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasilaiciai",
  "name": "Pašilaičiai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasile",
  "name": "Pašilė",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasile-2",
  "name": "Pašilė",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasilenai",
  "name": "Pašilėnai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paskynai",
  "name": "Paskynai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pastavy",
  "name": "Паставы (Pastavy)",
  "administrativeDivision": "Пастаўскі раён",
  "countryCode": "BY"
}, {
  "code": "pastrevys",
  "name": "Pastrėvys",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasusvys",
  "name": "Pašušvys",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasvalieciai",
  "name": "Pasvaliečiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasvalio-vienkiemiai",
  "name": "Pasvalio Vienkiemiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasvalys",
  "name": "Pasvalys",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pasysiai",
  "name": "Pašyšiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "patamulselis",
  "name": "Patamulšėlis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "patasine",
  "name": "Patašinė",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "patasine-2",
  "name": "Patašinė",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "patilciai",
  "name": "Patilčiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "patunkiskiai",
  "name": "Patunkiškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pauliai",
  "name": "Pauliai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paupys",
  "name": "Paupys",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pavandene",
  "name": "Pavandenė",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pavartyciai",
  "name": "Pavartyčiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "paverpenis",
  "name": "Paverpenis",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pavidaujys-i",
  "name": "Pavidaujys I",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pavirciuve",
  "name": "Pavirčiuvė",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pavovere",
  "name": "Pavoverė",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pavydai",
  "name": "Pavydai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pazagieniai",
  "name": "Pažagieniai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pazerai",
  "name": "Pažėrai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pazibai",
  "name": "Pažibai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pelaiciai",
  "name": "Pelaičiai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "peleniskiai",
  "name": "Peleniškiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pelkele",
  "name": "Pelkelė",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pelkes",
  "name": "Pelkės",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pereksliai",
  "name": "Perekšliai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pernarava",
  "name": "Pernarava",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pervalkai",
  "name": "Pervalkai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pervazninkai",
  "name": "Pervazninkai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "petraliske",
  "name": "Petrališkė",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "petrasiunai",
  "name": "Petrašiūnai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "petrasiunai-2",
  "name": "Petrašiūnai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "petreliai",
  "name": "Petreliai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "petronys",
  "name": "Petronys",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "petruliskes",
  "name": "Petruliškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "piaseczno",
  "name": "Piaseczno",
  "administrativeDivision": "Powiat piaseczyński",
  "countryCode": "PL"
}, {
  "code": "piastow",
  "name": "Piastów",
  "administrativeDivision": "Powiat pruszkowski",
  "countryCode": "PL"
}, {
  "code": "pieliasa",
  "name": "Пеляса (Pieliasa)",
  "administrativeDivision": "Воранаўскі раён",
  "countryCode": "BY"
}, {
  "code": "piepaliai",
  "name": "Piepaliai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "piestuvenai",
  "name": "Pieštuvėnai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pietariai",
  "name": "Pietariai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pievenai",
  "name": "Pievėnai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pikeliai",
  "name": "Pikeliai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pikeliskes",
  "name": "Pikeliškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "piktakonys",
  "name": "Piktakonys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "piktuiziai",
  "name": "Piktuižiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "piktupenai",
  "name": "Piktupėnai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pikutiskes",
  "name": "Pikutiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pilis-i",
  "name": "Pilis I",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "piliuona",
  "name": "Piliuona",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pilsudai",
  "name": "Pilsūdai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pilviskiai",
  "name": "Pilviškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pilypiskes",
  "name": "Pilypiškės",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "piniava",
  "name": "Piniava",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pionersky",
  "name": "Пионерский (Pionersky)",
  "administrativeDivision": "Пионерский городской округ",
  "countryCode": "RU"
}, {
  "code": "plaskiai",
  "name": "Plaškiai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plateliai",
  "name": "Plateliai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "platiniskes",
  "name": "Platiniškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "platumai",
  "name": "Platumai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plauciskiai",
  "name": "Plaučiškiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plentas",
  "name": "Plentas",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plikiai",
  "name": "Plikiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plikiskiai",
  "name": "Plikiškiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plinkses",
  "name": "Plinkšės",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plock",
  "name": "Płock",
  "administrativeDivision": "Płock",
  "countryCode": "PL"
}, {
  "code": "ploksciai",
  "name": "Plokščiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plonsk",
  "name": "Płońsk",
  "administrativeDivision": "Powiat płoński",
  "countryCode": "PL"
}, {
  "code": "plukiai",
  "name": "Plukiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plunge",
  "name": "Plungė",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plutiskes",
  "name": "Plutiškės",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "plyniai",
  "name": "Plyniai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pociunai",
  "name": "Pociūnai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pociuneliai",
  "name": "Pociūnėliai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "polack",
  "name": "Полацк (Polack)",
  "administrativeDivision": "Полацкі раён",
  "countryCode": "BY"
}, {
  "code": "polekele",
  "name": "Polekėlė",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "polessk",
  "name": "Полесск (Polessk)",
  "administrativeDivision": "Полесский городской округ",
  "countryCode": "RU"
}, {
  "code": "polva",
  "name": "Põlva",
  "administrativeDivision": "Põlva maakond",
  "countryCode": "EE"
}, {
  "code": "porijai",
  "name": "Porijai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "poskonys",
  "name": "Poškonys",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "posupes",
  "name": "Pošupės",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pozeciai",
  "name": "Požečiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pozere",
  "name": "Požerė",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pragarele",
  "name": "Pragarėlė",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "prastavoniai",
  "name": "Prastavoniai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "prauliai",
  "name": "Prauliai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pravieniskes-i",
  "name": "Pravieniškės I",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pravieniskes-ii",
  "name": "Pravieniškės II",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "preiciunai",
  "name": "Preičiūnai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "preili",
  "name": "Preiļi",
  "administrativeDivision": "Preiļu novads",
  "countryCode": "LV"
}, {
  "code": "priekule",
  "name": "Priekulė",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "prienai",
  "name": "Prienai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "prienai-2",
  "name": "Prienai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "prienlaukys",
  "name": "Prienlaukys",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "prudiskes",
  "name": "Prūdiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "prusaliai",
  "name": "Prūsaliai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pruseliai",
  "name": "Prūseliai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pruszkow",
  "name": "Pruszków",
  "administrativeDivision": "Powiat pruszkowski",
  "countryCode": "PL"
}, {
  "code": "prysmanciai",
  "name": "Pryšmančiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "puciakalne",
  "name": "Pučiakalnė",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "puckalaukis",
  "name": "Pučkalaukis",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pulawy",
  "name": "Puławy",
  "administrativeDivision": "Powiat puławski",
  "countryCode": "PL"
}, {
  "code": "pumpenai",
  "name": "Pumpėnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pumpuciai",
  "name": "Pumpučiai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "punsk",
  "name": "Puńsk ",
  "administrativeDivision": "Powiat sejneńsk",
  "countryCode": "PL"
}, {
  "code": "punzonys",
  "name": "Punžonys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "puodkaliai",
  "name": "Puodkaliai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "puodziai",
  "name": "Puodžiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "puodziunai",
  "name": "Puodžiūnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "puoke",
  "name": "Puokė",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pupiniai",
  "name": "Pupiniai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "puponys",
  "name": "Puponys",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "purnuskes",
  "name": "Purnuškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "purvenai",
  "name": "Purvėnai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "purvenai-2",
  "name": "Purvėnai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "purvininkai",
  "name": "Purvininkai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "purviniske",
  "name": "Purviniškė",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pusalotas",
  "name": "Pušalotas",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "puskelniai",
  "name": "Puskelniai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "puskoniai",
  "name": "Puškoniai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pustapedziai",
  "name": "Pūstapėdžiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pylimai",
  "name": "Pylimai",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pypliai",
  "name": "Pypliai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "pyragiai",
  "name": "Pyragiai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "racaliai",
  "name": "Račaliai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "radeikiai",
  "name": "Radeikiai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "radikiai",
  "name": "Radikiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "radom",
  "name": "Radom",
  "administrativeDivision": "Radom",
  "countryCode": "PL"
}, {
  "code": "radun",
  "name": "Радунь (Raduń)",
  "administrativeDivision": "Воранаўскі раён",
  "countryCode": "BY"
}, {
  "code": "radviliskis",
  "name": "Radviliškis",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "radviloniai",
  "name": "Radviloniai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ragaine",
  "name": "Ragainė",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ragoziai",
  "name": "Ragožiai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raguva",
  "name": "Raguva",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raguvele",
  "name": "Raguvėlė",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raguviskiai",
  "name": "Raguviškiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raikenai",
  "name": "Raikėnai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rainiai",
  "name": "Rainiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raisiai",
  "name": "Raišiai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raizgiai",
  "name": "Raizgiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rakonys",
  "name": "Rakonys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rakvere",
  "name": "Rakvere",
  "administrativeDivision": "Lääne-Viru maakond",
  "countryCode": "EE"
}, {
  "code": "ramanava",
  "name": "Ramanava",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ramonai",
  "name": "Ramonai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ramongaliai",
  "name": "Ramongaliai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ramoniskiai",
  "name": "Ramoniškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ramuciai",
  "name": "Ramučiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ramuciai-2",
  "name": "Ramučiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ramuciai-3",
  "name": "Ramučiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ramygala",
  "name": "Ramygala",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rapla",
  "name": "Rapla",
  "administrativeDivision": "Rapla maakond",
  "countryCode": "EE"
}, {
  "code": "raseiniai",
  "name": "Raseiniai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rastinenai",
  "name": "Rastinėnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raubonys",
  "name": "Raubonys",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raudenai",
  "name": "Raudėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raudeniskiai",
  "name": "Raudeniškiai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raudondvaris",
  "name": "Raudondvaris",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raudondvaris-2",
  "name": "Raudondvaris",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raudondvaris-3",
  "name": "Raudondvaris",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raudondvaris-4",
  "name": "Raudondvaris",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raudone",
  "name": "Raudonė",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raudonenai",
  "name": "Raudonėnai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "razaiteliai",
  "name": "Ražaitėliai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "raziskiai",
  "name": "Ražiškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "recionys",
  "name": "Rečionys",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "reibiniai",
  "name": "Reibiniai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "reivyciai",
  "name": "Reivyčiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "reskutenai",
  "name": "Reškutėnai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rezekne",
  "name": "Rēzekne",
  "administrativeDivision": "Rēzekne",
  "countryCode": "LV"
}, {
  "code": "ridelkalnis",
  "name": "Ridelkalnis",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "riese",
  "name": "Riešė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rietavas",
  "name": "Rietavas",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "riga",
  "name": "Rīga",
  "administrativeDivision": "Rīga",
  "countryCode": "LV"
}, {
  "code": "rimkunai",
  "name": "Rimkūnai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rimse",
  "name": "Rimšė",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ringaudai",
  "name": "Ringaudai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ringuvenai",
  "name": "Ringuvėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rinkunai",
  "name": "Rinkūnai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rinkunai-2",
  "name": "Rinkūnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rinkuskiai",
  "name": "Rinkuškiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "riogliskiai",
  "name": "Riogliškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ritine",
  "name": "Ritinė",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rociskiai",
  "name": "Ročiškiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rokai",
  "name": "Rokai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rokiskis",
  "name": "Rokiškis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "romuciai",
  "name": "Romučiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rotinenai",
  "name": "Rotinėnai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rotuliai",
  "name": "Rotuliai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rubezius",
  "name": "Rubežius",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rubikai",
  "name": "Rubikai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rubikiai",
  "name": "Rubikiai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rubuliai",
  "name": "Rubuliai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ruciunai",
  "name": "Ručiūnai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rudaiciai",
  "name": "Rūdaičiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rudamina",
  "name": "Rudamina",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rudamina-2",
  "name": "Rudamina",
  "administrativeDivision": "Lazdijų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rudausiai",
  "name": "Rudausiai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rudiliai",
  "name": "Rudiliai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rudiskiai",
  "name": "Rudiškiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rudninkai",
  "name": "Rūdninkai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rudupiai",
  "name": "Rūdupiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rukai",
  "name": "Rukai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rukai-2",
  "name": "Rukai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rukainiai",
  "name": "Rukainiai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rukla",
  "name": "Rukla",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rukla-2",
  "name": "Rukla",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rumsiskes",
  "name": "Rumšiškės",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ruponiai",
  "name": "Ruponiai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rusne",
  "name": "Rusnė",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rusonys",
  "name": "Rusonys",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rutakiemis",
  "name": "Rūtakiemis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ruteliai",
  "name": "Rūteliai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rutkiskes",
  "name": "Rutkiškės",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rutkiskiai",
  "name": "Rutkiškiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ruzgai",
  "name": "Ruzgai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rykantai",
  "name": "Rykantai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rykstyne",
  "name": "Rykštynė",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "rysininkas",
  "name": "Ryšininkas",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ryskenai",
  "name": "Ryškėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sablauskiai",
  "name": "Sablauskiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saboniai",
  "name": "Saboniai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sadunai",
  "name": "Sadūnai",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saduniskes",
  "name": "Sadūniškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sakiai",
  "name": "Šakiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sakiai-2",
  "name": "Šakiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sakiai-3",
  "name": "Šakiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sakiskes",
  "name": "Sakiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sakuciai",
  "name": "Sakūčiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sakuteliai",
  "name": "Sakūtėliai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sakvietis",
  "name": "Šakvietis",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sakyna",
  "name": "Šakyna",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salakas",
  "name": "Salakas",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salamiestis",
  "name": "Salamiestis",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salaperaugis",
  "name": "Salaperaugis",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salaspils",
  "name": "Salaspils",
  "administrativeDivision": "Salaspils novads",
  "countryCode": "LV"
}, {
  "code": "salcininkai",
  "name": "Šalčininkai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salcininkai-2",
  "name": "Šalčininkai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salcininkeliai",
  "name": "Šalčininkėliai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saldene",
  "name": "Saldenė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saldus",
  "name": "Saldus",
  "administrativeDivision": "Saldus novads",
  "countryCode": "LV"
}, {
  "code": "saldutiskis",
  "name": "Saldutiškis",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salihorsk",
  "name": "Салігорск (Salihorsk)",
  "administrativeDivision": "Салігорскі раён",
  "countryCode": "BY"
}, {
  "code": "salkininkai",
  "name": "Salkininkai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salociai",
  "name": "Saločiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salos",
  "name": "Salos",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salos-2",
  "name": "Salos",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salos-3",
  "name": "Salos",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "salote",
  "name": "Salotė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "samaniai",
  "name": "Samaniai",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "samylai",
  "name": "Samylai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sangruda",
  "name": "Sangrūda",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "santaka",
  "name": "Santaka",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sapnagiai",
  "name": "Šapnagiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sapnagiai-2",
  "name": "Šapnagiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sariai",
  "name": "Sariai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sarkiai",
  "name": "Šarkiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sarnele",
  "name": "Šarnelė",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sartininkai",
  "name": "Sartininkai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sasiai",
  "name": "Šašiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sasnava",
  "name": "Sasnava",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sateikiai",
  "name": "Šateikiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sateikiu-rudaiciai",
  "name": "Šateikių Rūdaičiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sates",
  "name": "Šatės",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "satijai",
  "name": "Šatijai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "satkunai",
  "name": "Satkūnai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "satkunai-2",
  "name": "Satkūnai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "satraminiai",
  "name": "Šatraminiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "satrininkai",
  "name": "Šatrininkai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saue",
  "name": "Saue",
  "administrativeDivision": "Harju maakond",
  "countryCode": "EE"
}, {
  "code": "saugailiai",
  "name": "Saugailiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saugelaukis",
  "name": "Saugėlaukis",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sauginiai",
  "name": "Sauginiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saugos",
  "name": "Saugos",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saukava",
  "name": "Šaukava",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saukenai",
  "name": "Šaukėnai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saukliai",
  "name": "Šaukliai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saukotas",
  "name": "Šaukotas",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sauletekiai",
  "name": "Saulėtekiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sauliai",
  "name": "Šauliai",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sauliai-i",
  "name": "Šauliai I",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sausine",
  "name": "Sausinė",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sauslaukis",
  "name": "Sauslaukis",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sauslaukis-2",
  "name": "Sauslaukis",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "saviciunai",
  "name": "Savičiūnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "scucyn",
  "name": "Шчучын (Ščučyn)",
  "administrativeDivision": "Шчучынскі раён",
  "countryCode": "BY"
}, {
  "code": "seda",
  "name": "Seda",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sedbarai",
  "name": "Šedbarai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "seduva",
  "name": "Šeduva",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "seirijai",
  "name": "Seirijai",
  "administrativeDivision": "Lazdijų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sejny",
  "name": "Sejny ",
  "administrativeDivision": "Powiat sejneńsk",
  "countryCode": "PL"
}, {
  "code": "selyne",
  "name": "Sėlynė",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "semeliskes",
  "name": "Semeliškės",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sena-pasamine",
  "name": "Sena Pašaminė",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "senasis-tarpupis",
  "name": "Senasis Tarpupis",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "seniava",
  "name": "Seniava",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "senieji-trakai",
  "name": "Senieji Trakai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "senoji-ipiltis",
  "name": "Senoji Įpiltis",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "senoji-radiske",
  "name": "Senoji Radiškė",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sepeta",
  "name": "Šepeta",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "serdokai",
  "name": "Serdokai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "seredzius",
  "name": "Seredžius",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "seriai",
  "name": "Šeriai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "serksnenai",
  "name": "Šerkšnėnai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "seskai",
  "name": "Šeškai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sestokai",
  "name": "Šeštokai",
  "administrativeDivision": "Lazdijų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sesuoleliai-i",
  "name": "Šešuolėliai I",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sesuoliai",
  "name": "Šešuoliai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "seta",
  "name": "Šėta",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siaudine",
  "name": "Šiaudinė",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siaudiniai",
  "name": "Šiaudiniai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siaudiniskiai",
  "name": "Šiaudiniškiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siauduva",
  "name": "Šiauduva",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siaulenai",
  "name": "Šiaulėnai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siauliai",
  "name": "Šiauliai",
  "administrativeDivision": "Šiaulių miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siauliai-2",
  "name": "Šiauliai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siauliai-3",
  "name": "Šiauliai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siauliskiai",
  "name": "Šiauliškiai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sidabravas",
  "name": "Sidabravas",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sidabrines",
  "name": "Sidabrinės",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sidagiai",
  "name": "Šidagiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siedlce",
  "name": "Siedlce",
  "administrativeDivision": "Siedlce",
  "countryCode": "PL"
}, {
  "code": "siemuliai",
  "name": "Šiemuliai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sienlaukis",
  "name": "Šienlaukis",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siesikai",
  "name": "Siesikai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sigulda",
  "name": "Sigulda",
  "administrativeDivision": "Siguldas novads",
  "countryCode": "LV"
}, {
  "code": "sigutenai",
  "name": "Sigutėnai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siksniai",
  "name": "Šikšniai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siksniai-2",
  "name": "Šikšniai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silagalys",
  "name": "Šilagalys",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silai",
  "name": "Šilai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silai-2",
  "name": "Šilai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silai-3",
  "name": "Šilai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silale",
  "name": "Šilalė",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silavotas",
  "name": "Šilavotas",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silelis",
  "name": "Šilelis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silenai",
  "name": "Šilėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silgaliai",
  "name": "Šilgaliai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "silgaliai-2",
  "name": "Šilgaliai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siline",
  "name": "Šilinė",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sillamae",
  "name": "Sillamäe",
  "administrativeDivision": "Ida-Viru maakond",
  "countryCode": "EE"
}, {
  "code": "silute",
  "name": "Šilutė",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siluva",
  "name": "Šiluva",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "simkaiciai",
  "name": "Šimkaičiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "simnas",
  "name": "Simnas",
  "administrativeDivision": "Alytaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "simonys",
  "name": "Šimonys",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sintautai",
  "name": "Sintautai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siponys",
  "name": "Siponys",
  "administrativeDivision": "Birštono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siraiciai",
  "name": "Siraičiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sirutenai",
  "name": "Sirutėnai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sirvintos",
  "name": "Širvintos",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sirvintos-2",
  "name": "Širvintos",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sitkunai",
  "name": "Sitkūnai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "siupyliai",
  "name": "Šiupyliai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skaidiskes",
  "name": "Skaidiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skaisciunai",
  "name": "Skaisčiūnai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skaistakaimis",
  "name": "Skaistakaimis",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skaisteriai",
  "name": "Skaisteriai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skaistgiriai",
  "name": "Skaistgiriai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skaistgirys",
  "name": "Skaistgirys",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skakai",
  "name": "Skakai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skapiskis",
  "name": "Skapiškis",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skapiskis-2",
  "name": "Skapiškis",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skarzysko-kamienna",
  "name": "Skarżysko-Kamienna",
  "administrativeDivision": "Diecezja radomska",
  "countryCode": "PL"
}, {
  "code": "skaudvile",
  "name": "Skaudvilė",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skemai",
  "name": "Skemai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skemiai",
  "name": "Skėmiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skersabaliai",
  "name": "Skersabaliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skidziel",
  "name": "Скідзель (Skidzieĺ)",
  "administrativeDivision": "Гродзенскі раён",
  "countryCode": "BY"
}, {
  "code": "skiemonys",
  "name": "Skiemonys",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skierniewice",
  "name": "Skierniewice",
  "administrativeDivision": "Diecezja łowicka",
  "countryCode": "PL"
}, {
  "code": "skilvioniai",
  "name": "Skilvioniai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skirgailai",
  "name": "Skirgailai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skirgiskes",
  "name": "Skirgiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skirlenai",
  "name": "Skirlėnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skirmantiske",
  "name": "Skirmantiškė",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skirsnemune",
  "name": "Skirsnemunė",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skirzeme",
  "name": "Skiržemė",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skleriai",
  "name": "Šklėriai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skogalis",
  "name": "Skogalis",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skrebiskiai",
  "name": "Skrebiškiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skriaudziai",
  "name": "Skriaudžiai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skudutiskis",
  "name": "Skudutiškis",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skuodas",
  "name": "Skuodas",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skuodiskiai",
  "name": "Skuodiškiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skurbutenai",
  "name": "Skurbutėnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skynimai",
  "name": "Skynimai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "skynimai-2",
  "name": "Skynimai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "slabada",
  "name": "Slabada",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "slabada-2",
  "name": "Slabada",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "slabadai",
  "name": "Slabadai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "slavenai",
  "name": "Šlavėnai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "slavikai",
  "name": "Slavikai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "slienava",
  "name": "Šlienava",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sliktine",
  "name": "Šliktinė",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "slonim",
  "name": "Слонім (Slonim)",
  "administrativeDivision": "Слонімскі раён",
  "countryCode": "BY"
}, {
  "code": "sluck",
  "name": "Слуцк (Sluck)",
  "administrativeDivision": "Слуцкі раён",
  "countryCode": "BY"
}, {
  "code": "slumpiai",
  "name": "Šlumpiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smaliavicy",
  "name": "Смалявічы (Smaliavičy)",
  "administrativeDivision": "Смалявіцкі раён",
  "countryCode": "BY"
}, {
  "code": "smalininkai",
  "name": "Smalininkai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smalininkai-2",
  "name": "Smalininkai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smalvos",
  "name": "Smalvos",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smarhon",
  "name": "Смаргонь (Smarhoń)",
  "administrativeDivision": "Смаргонскі раён",
  "countryCode": "BY"
}, {
  "code": "smelyne",
  "name": "Smėlynė",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smilgiai",
  "name": "Smilgiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smilgiai-2",
  "name": "Smilgiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smilgiai-3",
  "name": "Smilgiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smilgiai-4",
  "name": "Smilgiai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smilgiai-5",
  "name": "Smilgiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smiltene",
  "name": "Smiltene",
  "administrativeDivision": "Smiltenes novads",
  "countryCode": "LV"
}, {
  "code": "smiltynai-i",
  "name": "Smiltynai I",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "smiltynai-ii",
  "name": "Smiltynai II",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "snipeliskis",
  "name": "Šnipeliškis",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sniukstai",
  "name": "Šniukštai",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sniuraiciai",
  "name": "Šniūraičiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sochaczew",
  "name": "Sochaczew",
  "administrativeDivision": "Powiat sochaczewski",
  "countryCode": "PL"
}, {
  "code": "soveniai",
  "name": "Šoveniai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sovetsk",
  "name": "Советск (Sovetsk)",
  "administrativeDivision": "Советский городской округ",
  "countryCode": "RU"
}, {
  "code": "spanenai",
  "name": "Spanėnai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "spurganai",
  "name": "Spurganai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sriubiskiai",
  "name": "Sriubiškiai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stabintiskes",
  "name": "Stabintiškės",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "staciunai",
  "name": "Stačiūnai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "staciunai-2",
  "name": "Stačiūnai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stadviliai",
  "name": "Štadviliai",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stakiai",
  "name": "Stakiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stakliskes",
  "name": "Stakliškės",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stalgenai",
  "name": "Stalgėnai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stanaiciai",
  "name": "Stanaičiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "staneliai",
  "name": "Staneliai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "staniunai",
  "name": "Staniūnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "starachowice",
  "name": "Starachowice",
  "administrativeDivision": "Diecezja radomska",
  "countryCode": "PL"
}, {
  "code": "staryja-darohi",
  "name": "Старыя Дарогі (Staryja Darohi)",
  "administrativeDivision": "Старадарожскі раён",
  "countryCode": "BY"
}, {
  "code": "stasiunai",
  "name": "Stasiūnai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stasiunai-2",
  "name": "Stasiūnai",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "staskuniskis",
  "name": "Staškūniškis",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stasylos",
  "name": "Stasylos",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "statikai",
  "name": "Statikai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "steponkaimis",
  "name": "Steponkaimis",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stirnenai",
  "name": "Stirnėnai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stonaiciai",
  "name": "Stonaičiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stoniskiai",
  "name": "Stoniškiai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stoubcy",
  "name": "Стоўбцы (Stoŭbcy)",
  "administrativeDivision": "Стаўбцоўскі раён",
  "countryCode": "BY"
}, {
  "code": "stragute",
  "name": "Stragutė",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "strazdiskes",
  "name": "Strazdiškės",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "strielciai",
  "name": "Strielčiai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "strigailiskis",
  "name": "Strigailiškis",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "striupai",
  "name": "Striūpai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "struikai",
  "name": "Struikai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "struna",
  "name": "Strūna",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stubriai",
  "name": "Stubriai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stulgiai",
  "name": "Stulgiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stungiai",
  "name": "Stungiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "stupurai",
  "name": "Stupurai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "subaciskes",
  "name": "Subačiškės",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "subacius",
  "name": "Subačius",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "subacius-2",
  "name": "Subačius",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sudava",
  "name": "Sūdava",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sudeikiai",
  "name": "Sudeikiai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "suderve",
  "name": "Sudervė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "suginciai",
  "name": "Suginčiai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sugintai",
  "name": "Sugintai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sujainiai",
  "name": "Sujainiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sujetai",
  "name": "Sujetai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "suke",
  "name": "Šukė",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sukioniai",
  "name": "Šukioniai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sukionys",
  "name": "Šukionys",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sukuriai",
  "name": "Sūkuriai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sumskas",
  "name": "Šumskas",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sungailiskiai",
  "name": "Sungailiškiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sunskai",
  "name": "Šunskai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "surdegis",
  "name": "Surdegis",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "surviliskis",
  "name": "Surviliškis",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "susninkai",
  "name": "Sūsninkai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sutkunai",
  "name": "Sutkūnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "suvainiskis",
  "name": "Suvainiškis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "suvalkai",
  "name": "Suvalkai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "suvalkeliai",
  "name": "Suvalkėliai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "suviekas",
  "name": "Suviekas",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "suwalki",
  "name": "Suwałki",
  "administrativeDivision": "Suwałki",
  "countryCode": "PL"
}, {
  "code": "suzionys",
  "name": "Sužionys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "svedasai",
  "name": "Svėdasai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sveicarai",
  "name": "Šveicarai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sveicarija",
  "name": "Šveicarija",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sveksna",
  "name": "Švėkšna",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "svencioneliai",
  "name": "Švenčionėliai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "svencionys",
  "name": "Švenčionys",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sventa",
  "name": "Šventa",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sventezeris",
  "name": "Šventežeris",
  "administrativeDivision": "Lazdijų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sventininkai",
  "name": "Šventininkai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sventragis",
  "name": "Šventragis",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sventupe",
  "name": "Šventupė",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "svetlica",
  "name": "Svetlica",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "svetlogorsk",
  "name": "Светлогорск (Svetlogorsk)",
  "administrativeDivision": "Светлогорский городской округ",
  "countryCode": "RU"
}, {
  "code": "svetly",
  "name": "Светлый (Svetly)",
  "administrativeDivision": "Светловский городской округ",
  "countryCode": "RU"
}, {
  "code": "svideniai",
  "name": "Svideniai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "sviloniai",
  "name": "Sviloniai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "svirkos",
  "name": "Svirkos",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "svirnai-ii",
  "name": "Svirnai II",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "svobiskis",
  "name": "Švobiškis",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "swidnik",
  "name": "Świdnik",
  "administrativeDivision": "Powiat świdnicki",
  "countryCode": "PL"
}, {
  "code": "syliai",
  "name": "Šyliai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "szczytno",
  "name": "Szczytno",
  "administrativeDivision": "Powiat szczycieński",
  "countryCode": "PL"
}, {
  "code": "tabariskes",
  "name": "Tabariškės",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "talackoniai",
  "name": "Talačkoniai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tallinn",
  "name": "Tallinn",
  "administrativeDivision": "Harju maakond",
  "countryCode": "EE"
}, {
  "code": "talsi",
  "name": "Talsi",
  "administrativeDivision": "Talsu novads",
  "countryCode": "LV"
}, {
  "code": "tamosiai",
  "name": "Tamošiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tapa",
  "name": "Tapa",
  "administrativeDivision": "Lääne-Viru maakond",
  "countryCode": "EE"
}, {
  "code": "tarnenai",
  "name": "Tarnėnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tarprubeziai",
  "name": "Tarprubežiai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tartokas",
  "name": "Tartokas",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tartu",
  "name": "Tartu",
  "administrativeDivision": "Tartu maakond",
  "countryCode": "EE"
}, {
  "code": "tarvydai",
  "name": "Tarvydai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tarvydai-2",
  "name": "Tarvydai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tauckunai",
  "name": "Tauckūnai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "taujenai",
  "name": "Taujėnai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "taujenai-2",
  "name": "Taujėnai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "taujunai",
  "name": "Taujūnai",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "taurage",
  "name": "Tauragė",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tauragnai",
  "name": "Tauragnai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "taurai",
  "name": "Taurai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "taurupys",
  "name": "Taurupys",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tausiunai",
  "name": "Tausiūnai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tautkaiciai",
  "name": "Tautkaičiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "teiberiai",
  "name": "Teiberiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "teleiciai",
  "name": "Teleičiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "telsiai",
  "name": "Telšiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "teneniai",
  "name": "Teneniai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "teresiskes",
  "name": "Terešiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tetenai",
  "name": "Tetėnai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tetirvinai",
  "name": "Tetirvinai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tickunai",
  "name": "Tičkūnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tiltagaliai",
  "name": "Tiltagaliai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tiltai",
  "name": "Tiltai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tirksliai",
  "name": "Tirkšliai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "titkoniai",
  "name": "Titkoniai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "titoniai",
  "name": "Titoniai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "toliejai",
  "name": "Toliejai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "toliociai",
  "name": "Toliočiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "toluciai",
  "name": "Tolučiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "totorine",
  "name": "Totorinė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "totorkiemis",
  "name": "Totorkiemis",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "trakai",
  "name": "Trakai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "trakenai",
  "name": "Trakėnai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "trakiskiai",
  "name": "Trakiškiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "trakiskiai-2",
  "name": "Trakiškiai",
  "administrativeDivision": "Kalvarijos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "trakiskis",
  "name": "Trakiškis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "traksedis",
  "name": "Traksėdis",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "traksedziai",
  "name": "Traksėdžiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "traupis",
  "name": "Traupis",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "trepai",
  "name": "Trepai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tribonys",
  "name": "Tribonys",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "trilaukys",
  "name": "Trilaukys",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "triobiskiai",
  "name": "Triobiškiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "triskoniai",
  "name": "Triškoniai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "troskuciai",
  "name": "Troškučiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "troskunai",
  "name": "Troškūnai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "trudai",
  "name": "Trūdai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "truikiai",
  "name": "Truikiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "truskava",
  "name": "Truskava",
  "administrativeDivision": "Kėdainių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tryskiai",
  "name": "Tryškiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tubausiai",
  "name": "Tūbausiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tubines-i",
  "name": "Tūbinės I",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tukums",
  "name": "Tukums",
  "administrativeDivision": "Tukuma novads",
  "countryCode": "LV"
}, {
  "code": "tulnikiai",
  "name": "Tulnikiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tulpiakiemis",
  "name": "Tulpiakiemis",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "turcinai",
  "name": "Turčinai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "turgeliai",
  "name": "Turgeliai",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "turi",
  "name": "Türi",
  "administrativeDivision": "Järva maakond",
  "countryCode": "EE"
}, {
  "code": "turmantas",
  "name": "Turmantas",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tursuciai",
  "name": "Tursučiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tusciauliai",
  "name": "Tuščiauliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tverai",
  "name": "Tverai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tverecius",
  "name": "Tverečius",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tyruliai",
  "name": "Tyruliai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "tytuvenai",
  "name": "Tytuvėnai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ubiske",
  "name": "Ubiškė",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "udekai",
  "name": "Ūdekai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "udraliai",
  "name": "Udraliai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ukmerge",
  "name": "Ukmergė",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ukrinai",
  "name": "Ukrinai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uliunai",
  "name": "Uliūnai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uogaliai",
  "name": "Uogaliai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uoginiai",
  "name": "Uoginiai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uosininkai-i",
  "name": "Uosininkai I",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "upninkai",
  "name": "Upninkai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "upyna",
  "name": "Upyna",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "upyna-2",
  "name": "Upyna",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "upyte",
  "name": "Upytė",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "urvikiai",
  "name": "Urvikiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "usenai",
  "name": "Usėnai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ustukiai",
  "name": "Ustukiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "utena",
  "name": "Utena",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzbaliai",
  "name": "Užbaliai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzda",
  "name": "Узда (Uzda)",
  "administrativeDivision": "Уздзенскі раён",
  "countryCode": "BY"
}, {
  "code": "uzezere",
  "name": "Užežerė",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzgiriai",
  "name": "Užgiriai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzgiriai-2",
  "name": "Užgiriai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzkalniai",
  "name": "Užkalniai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzliedziai",
  "name": "Užliedžiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzliekne",
  "name": "Užlieknė",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzliekniai",
  "name": "Užliekniai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzlieknis",
  "name": "Užlieknis",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzpaliai",
  "name": "Užpaliai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzsieniai",
  "name": "Užsieniai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uztilte",
  "name": "Užtiltė",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzubaliai",
  "name": "Užubaliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzugriovis",
  "name": "Užugriovis",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzuguostis",
  "name": "Užuguostis",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzukene",
  "name": "Užukenė",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzuneveziai",
  "name": "Užunevėžiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzusaliai",
  "name": "Užusaliai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzusiliai",
  "name": "Užušiliai",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzvente",
  "name": "Užventė",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "uzventis",
  "name": "Užventis",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vabalai",
  "name": "Vabalai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vabaliai",
  "name": "Vabaliai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vabalninkas",
  "name": "Vabalninkas",
  "administrativeDivision": "Biržų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vadagiai",
  "name": "Vadagiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vadaktai",
  "name": "Vadaktai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vadokliai",
  "name": "Vadokliai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vadzgirys",
  "name": "Vadžgirys",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaickuniskes",
  "name": "Vaickūniškės",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaiclaukis",
  "name": "Vaičlaukis",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaidlonys",
  "name": "Vaidlonys",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaidotai",
  "name": "Vaidotai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaiguva",
  "name": "Vaiguva",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaikutenai",
  "name": "Vaikutėnai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaineikiai",
  "name": "Vaineikiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vainiunai",
  "name": "Vainiūnai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vainociai",
  "name": "Vainočiai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vainutas",
  "name": "Vainutas",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaira",
  "name": "Vaira",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaisvilciai-i",
  "name": "Vaišvilčiai I",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaisvydava",
  "name": "Vaišvydava",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaitiekunai",
  "name": "Vaitiekūnai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaitkunai",
  "name": "Vaitkūnai",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaitkuskis",
  "name": "Vaitkuškis",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaivadai",
  "name": "Vaivadai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaivadiskiai",
  "name": "Vaivadiškiai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valai",
  "name": "Valai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valai-2",
  "name": "Valai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valakeliai",
  "name": "Valakėliai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valatkoniai",
  "name": "Valatkoniai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valaviciai",
  "name": "Valavičiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valciunai",
  "name": "Valčiūnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valenai",
  "name": "Valėnai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valenciunai",
  "name": "Valenčiūnai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valerava",
  "name": "Valerava",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valga",
  "name": "Valga",
  "administrativeDivision": "Valga maakond",
  "countryCode": "EE"
}, {
  "code": "valka",
  "name": "Valka",
  "administrativeDivision": "Valkas novads",
  "countryCode": "LV"
}, {
  "code": "valkininkai",
  "name": "Valkininkai",
  "administrativeDivision": "Varėnos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valmantiskiai",
  "name": "Valmantiškiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "valmiera",
  "name": "Valmiera",
  "administrativeDivision": "Valmiera",
  "countryCode": "LV"
}, {
  "code": "valozyn",
  "name": "Валожын (Valožyn)",
  "administrativeDivision": "Валожынскі раён",
  "countryCode": "BY"
}, {
  "code": "valpainiai",
  "name": "Valpainiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vanagiai",
  "name": "Vanagiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vandziogala",
  "name": "Vandžiogala",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varena",
  "name": "Varėna",
  "administrativeDivision": "Varėnos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varine",
  "name": "Varinė",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varkaliai",
  "name": "Varkaliai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varkaliskiai",
  "name": "Varkališkiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varlaukis",
  "name": "Varlaukis",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varniai",
  "name": "Varniai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varnupiai",
  "name": "Varnupiai",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varpuciai",
  "name": "Varpučiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varputenai",
  "name": "Varputėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "varsedziai",
  "name": "Varsėdžiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vartai",
  "name": "Vartai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vartai-2",
  "name": "Vartai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vasilenai",
  "name": "Vašilėnai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaskai",
  "name": "Vaškai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vatusiai",
  "name": "Vatušiai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vaukavysk",
  "name": "Ваўкавыск (Vaŭkavysk)",
  "administrativeDivision": "Ваўкавыскі раён",
  "countryCode": "BY"
}, {
  "code": "veisiejai",
  "name": "Veisiejai",
  "administrativeDivision": "Lazdijų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "veiveriai",
  "name": "Veiveriai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "veivirzenai",
  "name": "Veiviržėnai",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "veliucionys",
  "name": "Vėliučionys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "veliuona",
  "name": "Veliuona",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "velzelis",
  "name": "Velželis",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "velzys",
  "name": "Velžys",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vembutai",
  "name": "Vembūtai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vencloviskiai",
  "name": "Vencloviškiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "venta",
  "name": "Venta",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "venta-2",
  "name": "Venta",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vente",
  "name": "Ventė",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ventspils",
  "name": "Ventspils",
  "administrativeDivision": "Ventspils",
  "countryCode": "LV"
}, {
  "code": "vepriai",
  "name": "Vepriai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "verbiskes",
  "name": "Verbiškės",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "verbunai",
  "name": "Verbūnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vereduva",
  "name": "Verėduva",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "veriskes",
  "name": "Veriškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "veriskiai",
  "name": "Vėriškiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "verksionys",
  "name": "Verkšionys",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "verpena",
  "name": "Verpena",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "versiai",
  "name": "Veršiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "versmininkai",
  "name": "Versmininkai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vezaiciai",
  "name": "Vėžaičiai",
  "administrativeDivision": "Klaipėdos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vezionys",
  "name": "Vėžionys",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vezionys-2",
  "name": "Vėžionys",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viciebsk",
  "name": "Віцебск (Viciebsk)",
  "administrativeDivision": "Віцебская вобласць",
  "countryCode": "BY"
}, {
  "code": "videniskiai",
  "name": "Videniškiai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vidgiriai",
  "name": "Vidgiriai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vidiskes",
  "name": "Vidiškės",
  "administrativeDivision": "Ignalinos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vidiskiai",
  "name": "Vidiškiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vidkiemis",
  "name": "Vidkiemis",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vidsodis",
  "name": "Vidsodis",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vidukle",
  "name": "Viduklė",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vidukle-2",
  "name": "Viduklė",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vidutine",
  "name": "Vidutinė",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vidzy",
  "name": "Відзы (Vidzy)",
  "administrativeDivision": "Браслаўскі раён",
  "countryCode": "BY"
}, {
  "code": "vieksnaliai",
  "name": "Viekšnaliai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vieksniai",
  "name": "Viekšniai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viesinteles",
  "name": "Viešintėlės",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viesintos",
  "name": "Viešintos",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viestovenai",
  "name": "Vieštovėnai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viesvenai-i",
  "name": "Viešvėnai I",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viesvile",
  "name": "Viešvilė",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vievininkai",
  "name": "Vievininkai",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vievis",
  "name": "Vievis",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vijoliai",
  "name": "Vijoliai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vijukai",
  "name": "Vijūkai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vijurkai",
  "name": "Vijurkai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vikonys",
  "name": "Vikonys",
  "administrativeDivision": "Anykščių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viktariskes",
  "name": "Viktariškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vileikiai",
  "name": "Vileikiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vileikiai-2",
  "name": "Vileikiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vileikiskiai",
  "name": "Vileikiškiai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilemai",
  "name": "Vilemai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viliejka",
  "name": "Вілейка (Viliejka)",
  "administrativeDivision": "Вілейскі раён",
  "countryCode": "BY"
}, {
  "code": "vilionys",
  "name": "Vilionys",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viljandi",
  "name": "Viljandi",
  "administrativeDivision": "Viljandi maakond",
  "countryCode": "EE"
}, {
  "code": "vilkaviskis",
  "name": "Vilkaviškis",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilkija",
  "name": "Vilkija",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilkija-2",
  "name": "Vilkija",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilkiskes",
  "name": "Vilkiškės",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilkiskes-2",
  "name": "Vilkiškės",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilkiskiai",
  "name": "Vilkiškiai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilku-kampas",
  "name": "Vilkų Kampas",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilkupiai",
  "name": "Vilkupiai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilkyciai",
  "name": "Vilkyčiai",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilkyskiai",
  "name": "Vilkyškiai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius",
  "name": "Vilnius",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-antakalnis",
  "name": "Vilnius (Antakalnis)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-balsiai",
  "name": "Vilnius (Balsiai)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-fabijoniskes",
  "name": "Vilnius (Fabijoniškės)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-grigiskes",
  "name": "Vilnius (Grigiškės)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-justiniskes",
  "name": "Vilnius (Justiniškės)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-karoliniskes",
  "name": "Vilnius (Karoliniškės)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-lazdynai",
  "name": "Vilnius (Lazdynai)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-naujamiestis",
  "name": "Vilnius (Naujamiestis)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-naujininkai",
  "name": "Vilnius (Naujininkai)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-naujoji-vilnia",
  "name": "Vilnius (Naujoji Vilnia)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-paneriai",
  "name": "Vilnius (Paneriai)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-pasilaiciai",
  "name": "Vilnius (Pašilaičiai)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-pilaite",
  "name": "Vilnius (Pilaitė)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-rasos",
  "name": "Vilnius (Rasos)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-santariskes",
  "name": "Vilnius (Santariškės)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-senamiestis",
  "name": "Vilnius (Senamiestis)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-seskine",
  "name": "Vilnius (Šeškinė)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-snipiskes",
  "name": "Vilnius (Šnipiškės)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-verkiai",
  "name": "Vilnius (Verkiai)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-vilpede",
  "name": "Vilnius (Vilpėdė)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-virsuliskes",
  "name": "Vilnius (Viršuliškės)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-visoriai",
  "name": "Vilnius (Visoriai)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-zirmunai",
  "name": "Vilnius (Žirmūnai)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilnius-zverynas",
  "name": "Vilnius (Žvėrynas)",
  "administrativeDivision": "Vilniaus miesto savivaldybė",
  "countryCode": "LT"
}, {
  "code": "viluciai",
  "name": "Vilučiai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vilunai",
  "name": "Vilūnai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vindeikiai",
  "name": "Vindeikiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vindeikiai-2",
  "name": "Vindeikiai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vingininkai",
  "name": "Vingininkai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vinksnenai",
  "name": "Vinkšnėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "virbalio-miesto-laukai",
  "name": "Virbalio Miesto Laukai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "virbalis",
  "name": "Virbalis",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "virbaliskiai",
  "name": "Virbališkiai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "virbaliskiai-2",
  "name": "Virbališkiai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "virbaliunai",
  "name": "Virbaliūnai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "virgainiai",
  "name": "Virgainiai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "virksciai",
  "name": "Virkščiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "virsuziglis",
  "name": "Viršužiglis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "visaginas",
  "name": "Visaginas",
  "administrativeDivision": "Visagino savivaldybė",
  "countryCode": "LT"
}, {
  "code": "visakio-ruda",
  "name": "Višakio Rūda",
  "administrativeDivision": "Kazlų Rūdos savivaldybė",
  "countryCode": "LT"
}, {
  "code": "visalauke-i",
  "name": "Visalaukė I",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "visbarai",
  "name": "Visbarai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vismantai",
  "name": "Vismantai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vistytis",
  "name": "Vištytis",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vizanciai",
  "name": "Vižančiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vladikiskes",
  "name": "Vladikiškės",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vokiskeliai",
  "name": "Vokiškėliai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "voniskiai",
  "name": "Voniškiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "voru",
  "name": "Võru",
  "administrativeDivision": "Võru maakond",
  "countryCode": "EE"
}, {
  "code": "vosbutai",
  "name": "Vosbutai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vosgeliai",
  "name": "Vosgėliai",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vosiliskis",
  "name": "Vosiliškis",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "voskoniai",
  "name": "Voškoniai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "voskoniai-2",
  "name": "Voskoniai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vosyliukai",
  "name": "Vosyliukai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "voveriai",
  "name": "Voveriai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "voveriai-2",
  "name": "Voveriai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "voveriskiai",
  "name": "Voveriškiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vyciai",
  "name": "Vyčiai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vydeikiai",
  "name": "Vydeikiai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vydmantai",
  "name": "Vydmantai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vysniunai",
  "name": "Vyšniūnai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vytogala",
  "name": "Vytogala",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vyzuoneles",
  "name": "Vyžuonėlės",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "vyzuonos",
  "name": "Vyžuonos",
  "administrativeDivision": "Utenos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "warszawa",
  "name": "Warszawa",
  "administrativeDivision": "Warszawa",
  "countryCode": "PL"
}, {
  "code": "wolomin",
  "name": "Wołomin",
  "administrativeDivision": "Powiat wołomiński",
  "countryCode": "PL"
}, {
  "code": "wyszkow",
  "name": "Wyszków",
  "administrativeDivision": "Powiat wyszkowski",
  "countryCode": "PL"
}, {
  "code": "ylakiai",
  "name": "Ylakiai",
  "administrativeDivision": "Skuodo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zabki",
  "name": "Ząbki",
  "administrativeDivision": "Powiat wołomiński",
  "countryCode": "PL"
}, {
  "code": "zadeikiai",
  "name": "Žadeikiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zadeikoniai",
  "name": "Žadeikoniai",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zadvainai",
  "name": "Žadvainai",
  "administrativeDivision": "Rietavo savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zadvainiai",
  "name": "Žadvainiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zadvarninkai",
  "name": "Zadvarninkai",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zadziunai",
  "name": "Žadžiūnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zagare",
  "name": "Žagarė",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zagariai",
  "name": "Žagariai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zagarine",
  "name": "Žagarinė",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zaideliai",
  "name": "Žaideliai",
  "administrativeDivision": "Kupiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zaiginys",
  "name": "Žaiginys",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zaizdriai",
  "name": "Žaizdriai",
  "administrativeDivision": "Trakų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zalavas",
  "name": "Zalavas",
  "administrativeDivision": "Švenčionių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zalesa",
  "name": "Žalesa",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zalpiai",
  "name": "Žalpiai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zalvariai",
  "name": "Žalvariai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zambrow",
  "name": "Zambrów",
  "administrativeDivision": "Powiat zambrowski",
  "countryCode": "PL"
}, {
  "code": "zamosc",
  "name": "Zamość",
  "administrativeDivision": "Zamość",
  "countryCode": "PL"
}, {
  "code": "zapyskis",
  "name": "Zapyškis",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zarasai",
  "name": "Zarasai",
  "administrativeDivision": "Zarasų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zarenai",
  "name": "Žarėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zarenai-2",
  "name": "Žarėnai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zaslauje",
  "name": "Заслаўе (Zaslaŭje)",
  "administrativeDivision": "Мінскі раён",
  "countryCode": "BY"
}, {
  "code": "zasliai",
  "name": "Žasliai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zaugedai",
  "name": "Žaugėdai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zavisonys",
  "name": "Zavišonys",
  "administrativeDivision": "Šalčininkų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zebertonys",
  "name": "Žebertonys",
  "administrativeDivision": "Elektrėnų savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zeimiai",
  "name": "Žeimiai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zeimiai-2",
  "name": "Žeimiai",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zeimiai-3",
  "name": "Žeimiai",
  "administrativeDivision": "Šiaulių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zeimiai-4",
  "name": "Žeimiai",
  "administrativeDivision": "Radviliškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zeimiai-5",
  "name": "Žeimiai",
  "administrativeDivision": "Jonavos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zeimuvenai",
  "name": "Žeimuvėnai",
  "administrativeDivision": "Telšių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zelenogradsk",
  "name": "Зеленоградск (Zelenogradsk)",
  "administrativeDivision": "Зеленоградский городской округ",
  "countryCode": "RU"
}, {
  "code": "zelkunai",
  "name": "Želkūnai",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zelsva",
  "name": "Želsva",
  "administrativeDivision": "Marijampolės savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zelva",
  "name": "Želva",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zelviai",
  "name": "Želviai",
  "administrativeDivision": "Kelmės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zemaiciu-kalvarija",
  "name": "Žemaičių Kalvarija",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zemaiciu-naumiestis",
  "name": "Žemaičių Naumiestis",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zemaiteliai",
  "name": "Žemaitėliai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zemaitkiemis",
  "name": "Žemaitkiemis",
  "administrativeDivision": "Ukmergės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zemaitkiemis-2",
  "name": "Žemaitkiemis",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zemaitkiemis-3",
  "name": "Žemaitkiemis",
  "administrativeDivision": "Prienų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zemaitkiemis-4",
  "name": "Žemaitkiemis",
  "administrativeDivision": "Šilutės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zemale",
  "name": "Žemalė",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zemoji-panemune",
  "name": "Žemoji Panemunė",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zerksciai",
  "name": "Žerkščiai",
  "administrativeDivision": "Akmenės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zibalai",
  "name": "Zibalai",
  "administrativeDivision": "Širvintų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zibartoniai",
  "name": "Žibartoniai",
  "administrativeDivision": "Panevėžio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zibikai",
  "name": "Žibikai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zibuliai",
  "name": "Žibuliai",
  "administrativeDivision": "Raseinių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zidikai",
  "name": "Židikai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ziegzdriai",
  "name": "Žiegždriai",
  "administrativeDivision": "Kauno rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ziezmariai",
  "name": "Žiežmariai",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zilpamusis",
  "name": "Žilpamūšis",
  "administrativeDivision": "Pasvalio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zindaiciai",
  "name": "Žindaičiai",
  "administrativeDivision": "Jurbarko rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ziniunai",
  "name": "Ziniūnai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ziobiskis",
  "name": "Žiobiškis",
  "administrativeDivision": "Rokiškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ziogaiciai",
  "name": "Žiogaičiai",
  "administrativeDivision": "Mažeikių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ziurai",
  "name": "Žiūrai",
  "administrativeDivision": "Molėtų rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "ziuriai",
  "name": "Žiuriai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zlibinai",
  "name": "Žlibinai",
  "administrativeDivision": "Plungės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zodzina",
  "name": "Жодзіна (Žodzina)",
  "administrativeDivision": "Мінская вобласць",
  "countryCode": "BY"
}, {
  "code": "zubiskes",
  "name": "Zūbiškės",
  "administrativeDivision": "Kaišiadorių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zujunai",
  "name": "Zujūnai",
  "administrativeDivision": "Vilniaus rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zukai",
  "name": "Žukai",
  "administrativeDivision": "Pagėgių savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zutautai",
  "name": "Žutautai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zvainiai",
  "name": "Žvainiai",
  "administrativeDivision": "Kretingos rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zvelgaiciai",
  "name": "Žvelgaičiai",
  "administrativeDivision": "Joniškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zvingiai",
  "name": "Žvingiai",
  "administrativeDivision": "Šilalės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zvirbloniai",
  "name": "Žvirbloniai",
  "administrativeDivision": "Pakruojo rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zvirgzdaiciai",
  "name": "Žvirgždaičiai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zygaiciai",
  "name": "Žygaičiai",
  "administrativeDivision": "Tauragės rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zygenai",
  "name": "Žygėnai",
  "administrativeDivision": "Šakių rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zyniai",
  "name": "Žyniai",
  "administrativeDivision": "Vilkaviškio rajono savivaldybė",
  "countryCode": "LT"
}, {
  "code": "zyrardow",
  "name": "Żyrardów",
  "administrativeDivision": "Powiat żyrardowski",
  "countryCode": "PL"
}]);

/***/ }),

/***/ "./src/modules/forecasts.js":
/*!**********************************!*\
  !*** ./src/modules/forecasts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var fetchForecasts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
    var forecasts_response, forecasts;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("https://api.meteo.lt/v1/places/".concat(city, "/forecasts/long-term"));
        case 3:
          forecasts_response = _context.sent;
          _context.next = 6;
          return forecasts_response.json();
        case 6:
          forecasts = _context.sent;
          return _context.abrupt("return", forecasts);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function fetchForecasts(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchForecasts);

/***/ }),

/***/ "./src/modules/places.js":
/*!*******************************!*\
  !*** ./src/modules/places.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_places__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/places */ "./src/data/places.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchPlaces = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var places_datalist, places, _iterator, _step, place, option;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          places_datalist = document.querySelector('#places');
          try {
            // const places_response = await fetch("https://api.meteo.lt/v1/places");
            places = _data_places__WEBPACK_IMPORTED_MODULE_0__["default"]; // await places_response.json();
            _iterator = _createForOfIteratorHelper(places);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                place = _step.value;
                option = document.createElement('option');
                option.value = place.name;
                places_datalist.appendChild(option);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } catch (error) {
            //alert(error.message);
          }
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchPlaces() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPlaces);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_laravel"] = self["webpackChunkwebpack_laravel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;