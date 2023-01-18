'use strict';

var React = require('react');

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

var _excluded = ["color"];
var IconColor = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24.0847 13.0593C27.0145 7.31944 35.4629 7.74604 37.7598 13.836L37.8275 14.0222L43.0769 29.0211C44.4452 32.9304 42.3853 37.2087 38.4761 38.5769C35.3488 39.6715 31.9853 38.5721 30.0644 36.087L30.004 36.0076L29.9917 36.0247C27.0482 39.9891 20.9518 39.9891 18.0083 36.0247L17.9959 36.0076L17.9356 36.087C16.0387 38.541 12.7351 39.6438 9.64127 38.6169L9.52389 38.5769C5.6538 37.2224 3.59623 33.0157 4.88304 29.1385L4.92306 29.0211L10.1725 14.0222C12.3659 7.75528 20.9559 7.26146 23.9153 13.0593L24 13.2304L24.0847 13.0593Z",
    fill: color
  }), React.createElement("path", {
    d: "M18.3757 13.6325C20.4837 14.1388 22.0502 16.0362 22.0502 18.2995C22.0502 20.5628 20.4837 22.4603 18.3757 22.9666C16.2676 22.4603 14.701 20.5629 14.701 18.2995C14.701 16.0464 16.2535 14.1558 18.3471 13.6394L18.3757 13.6325Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M17.2507 13.4999C17.6382 13.4999 18.0149 13.5458 18.3757 13.6325C16.2676 14.1388 14.701 16.0362 14.701 18.2995C14.701 20.5629 16.2676 22.4603 18.3755 22.9666C18.0148 23.0533 17.6381 23.0992 17.2507 23.0992C14.6 23.0992 12.4512 20.9503 12.4512 18.2995C12.4512 15.6488 14.6 13.4999 17.2507 13.4999Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M31.8743 13.6325C33.9823 14.1388 35.5488 16.0362 35.5488 18.2995C35.5488 20.5628 33.9823 22.4603 31.8743 22.9666C29.7662 22.4603 28.1996 20.5629 28.1996 18.2995C28.1996 16.0464 29.7521 14.1558 31.8457 13.6394L31.8743 13.6325Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M30.7493 13.4999C31.1367 13.4999 31.5134 13.5458 31.8743 13.6325C29.7661 14.1388 28.1995 16.0362 28.1995 18.2995C28.1995 20.5629 29.7661 22.4603 31.874 22.9666C31.5134 23.0533 31.1367 23.0992 30.7493 23.0992C28.0986 23.0992 25.9498 20.9503 25.9498 18.2995C25.9498 15.6488 28.0986 13.4999 30.7493 13.4999Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M28.0836 26.3749C28.4282 26.1451 28.8938 26.2382 29.1235 26.5829C29.3533 26.9275 29.2601 27.3931 28.9155 27.6229C27.2979 28.7013 25.6558 29.2487 24 29.2487C22.3443 29.2487 20.7021 28.7013 19.0845 27.6229C18.7399 27.3931 18.6468 26.9275 18.8765 26.5829C19.1063 26.2382 19.5719 26.1451 19.9165 26.3749C21.2985 27.2963 22.6561 27.7488 24 27.7488C25.344 27.7488 26.7015 27.2963 28.0836 26.3749Z",
    fill: color
  }));
});
IconColor.displayName = 'IconColor';

var _excluded$1 = ["color"];
var IconSymbol = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 13.2304L23.9153 13.0593C20.9559 7.26146 12.3659 7.75528 10.1725 14.0222L4.92306 29.0211L4.88304 29.1385C3.59623 33.0157 5.6538 37.2224 9.52389 38.5769L9.64127 38.6169C12.7351 39.6438 16.0387 38.541 17.9356 36.087L17.9959 36.0076L18.0975 36.1424C21.0734 39.9887 27.0776 39.9494 29.9917 36.0247L30.004 36.0076L30.0644 36.087C31.9853 38.5721 35.3488 39.6715 38.4761 38.5769C42.3853 37.2087 44.4452 32.9304 43.0769 29.0211L37.8275 14.0222L37.7598 13.836C35.4629 7.74604 27.0145 7.31944 24.0847 13.0593L24 13.2304ZM24 27.7488C25.3439 27.7488 26.7015 27.2963 28.0835 26.3749C28.4282 26.1451 28.8938 26.2383 29.1235 26.5829C29.3532 26.9275 29.2601 27.3931 28.9155 27.6229C27.2979 28.7013 25.6557 29.2487 24 29.2487C22.3443 29.2487 20.7021 28.7013 19.0845 27.6229C18.7399 27.3931 18.6468 26.9275 18.8765 26.5829C19.1062 26.2383 19.5718 26.1451 19.9165 26.3749C21.2985 27.2963 22.6561 27.7488 24 27.7488ZM17.2713 13.2C14.4566 13.2 12.1748 15.4833 12.1748 18.3C12.1748 21.1167 14.4566 23.4 17.2713 23.4C20.0861 23.4 22.3679 21.1167 22.3679 18.3C22.3679 15.4833 20.0861 13.2 17.2713 13.2ZM25.6657 18.3C25.6657 15.4833 27.9475 13.2 30.7622 13.2C33.5769 13.2 35.8587 15.4833 35.8587 18.3C35.8587 21.1167 33.5769 23.4 30.7622 23.4C27.9475 23.4 25.6657 21.1167 25.6657 18.3ZM17.2507 13.4999C17.6381 13.4999 18.0149 13.5458 18.3757 13.6325C16.2676 14.1388 14.701 16.0362 14.701 18.2995C14.701 20.5629 16.2675 22.4603 18.3755 22.9666C18.0148 23.0533 17.6381 23.0992 17.2507 23.0992C14.6 23.0992 12.4512 20.9503 12.4512 18.2995C12.4512 15.6488 14.6 13.4999 17.2507 13.4999ZM31.8743 13.6325C31.5134 13.5458 31.1367 13.4999 30.7493 13.4999C28.0986 13.4999 25.9498 15.6488 25.9498 18.2995C25.9498 20.9503 28.0986 23.0992 30.7493 23.0992C31.1367 23.0992 31.5134 23.0533 31.8741 22.9666C29.7661 22.4603 28.1996 20.5629 28.1996 18.2995C28.1996 16.0362 29.7662 14.1388 31.8743 13.6325Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSymbol.displayName = 'IconSymbol';

var _excluded$2 = ["color"];
var IconPattern = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M35.5506 11.7001C35.5506 14.296 33.4462 16.4003 30.8504 16.4003C28.2546 16.4003 26.1503 14.296 26.1503 11.7001C26.1503 9.10433 28.2546 7 30.8504 7C33.4462 7 35.5506 9.10433 35.5506 11.7001ZM37.8999 28.9342C40.4957 28.9342 42.6 26.8299 42.6 24.234C42.6 21.6382 40.4957 19.5339 37.8999 19.5339C35.3041 19.5339 33.1997 21.6382 33.1997 24.234C33.1997 26.8299 35.3041 28.9342 37.8999 28.9342ZM35.5506 36.7676C35.5506 39.3634 33.4462 41.4677 30.8504 41.4677C28.2546 41.4677 26.1503 39.3634 26.1503 36.7676C26.1503 34.1717 28.2546 32.0674 30.8504 32.0674C33.4462 32.0674 35.5506 34.1717 35.5506 36.7676Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    fillOpacity: ".3"
  }), React.createElement("path", {
    d: "M16.7496 16.4003C19.3454 16.4003 21.4497 14.296 21.4497 11.7001C21.4497 9.10433 19.3454 7 16.7496 7C14.1538 7 12.0495 9.10433 12.0495 11.7001C12.0495 14.296 14.1538 16.4003 16.7496 16.4003ZM14.4003 24.234C14.4003 26.8299 12.296 28.9342 9.70014 28.9342C7.10433 28.9342 5 26.8299 5 24.234C5 21.6382 7.10433 19.5339 9.70014 19.5339C12.296 19.5339 14.4003 21.6382 14.4003 24.234ZM23.799 28.9342C26.3949 28.9342 28.4991 26.8299 28.4991 24.234C28.4991 21.6382 26.3949 19.5339 23.799 19.5339C21.2032 19.5339 19.0989 21.6382 19.0989 24.234C19.0989 26.8299 21.2032 28.9342 23.799 28.9342ZM16.7496 41.4677C19.3454 41.4677 21.4497 39.3634 21.4497 36.7676C21.4497 34.1717 19.3454 32.0674 16.7496 32.0674C14.1538 32.0674 12.0495 34.1717 12.0495 36.7676C12.0495 39.3634 14.1538 41.4677 16.7496 41.4677Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPattern.displayName = 'IconPattern';

var _excluded$3 = ["color"];
var IconDown = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M37.5858 15.5858L40.4142 18.4142L24 34.8284L7.58582 18.4142L10.4142 15.5858L24 29.171L37.5858 15.5858Z",
    fill: color
  }));
});
IconDown.displayName = 'IconDown';

var _excluded$4 = ["color"];
var IconDownBold = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M36.1716 13.1716L41.8284 18.8284L24 36.6569L6.17157 18.8284L11.8284 13.1716L24 25.343L36.1716 13.1716Z",
    fill: color
  }));
});
IconDownBold.displayName = 'IconDownBold';

var _excluded$5 = ["color"];
var IconUp = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M37.5858 32.8284L40.4142 30L24 13.5858L7.58582 30L10.4142 32.8284L24 19.2432L37.5858 32.8284Z",
    fill: color
  }));
});
IconUp.displayName = 'IconUp';

var _excluded$6 = ["color"];
var IconUpBold = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M36.1716 34.8253L41.8284 29.1684L24 11.34L6.17157 29.1684L11.8284 34.8253L24 22.6539L36.1716 34.8253Z",
    fill: color
  }));
});
IconUpBold.displayName = 'IconUpBold';

var _excluded$7 = ["color"];
var IconLeft = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.8327 10.4184L30.0042 7.59L13.59 24.0042L30.0042 40.4184L32.8327 37.59L19.2475 24.0042L32.8327 10.4184Z",
    fill: color
  }));
});
IconLeft.displayName = 'IconLeft';

var _excluded$8 = ["color"];
var IconLeftBold = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M29.1684 6.17157L34.8253 11.8284L22.6539 24L34.8253 36.1716L29.1684 41.8284L11.34 24L29.1684 6.17157Z",
    fill: color
  }));
});
IconLeftBold.displayName = 'IconLeftBold';

var _excluded$9 = ["color"];
var IconRightBold = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M18.8269 6.17157L13.17 11.8284L25.3414 24L13.17 36.1716L18.8269 41.8284L36.6553 24L18.8269 6.17157Z",
    fill: color
  }));
});
IconRightBold.displayName = 'IconRightBold';

var _excluded$a = ["color"];
var IconDownCaret = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M11.0635 16H36.9364C37.4887 16 37.9364 16.4477 37.9364 17C37.9364 17.2249 37.8607 17.4432 37.7213 17.6196L24.7849 34.0058C24.4427 34.4393 23.8138 34.5133 23.3804 34.1711C23.319 34.1226 23.2635 34.0672 23.2151 34.0058L10.2787 17.6196C9.93645 17.1862 10.0104 16.5573 10.4439 16.2151C10.6204 16.0758 10.8387 16 11.0635 16Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconDownCaret.displayName = 'IconDownCaret';

var _excluded$b = ["color"];
var IconDownArrow = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26 6L25.9998 34.17L34.5858 25.5858L37.4142 28.4142L24 41.8284L10.5858 28.4142L13.4142 25.5858L21.9998 34.17L22 6H26Z",
    fill: color
  }));
});
IconDownArrow.displayName = 'IconDownArrow';

var _excluded$c = ["color"];
var IconUpArrow = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26 41.9984L25.9998 13.8284L34.5858 22.4127L37.4142 19.5842L24 6.17001L10.5858 19.5842L13.4142 22.4127L21.9998 13.8284L22 41.9984H26Z",
    fill: color
  }));
});
IconUpArrow.displayName = 'IconUpArrow';

var _excluded$d = ["color"];
var IconLeftArrow = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M19.5858 10.5858L22.4142 13.4142L13.8286 21.9998L42 22V26L13.8286 25.9998L22.4142 34.5858L19.5858 37.4142L6.17157 24L19.5858 10.5858Z",
    fill: color
  }));
});
IconLeftArrow.displayName = 'IconLeftArrow';

var _excluded$e = ["color"];
var IconRightArrow = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M28.4142 10.5858L25.5858 13.4142L34.1714 21.9998L6 22V26L34.1714 25.9998L25.5858 34.5858L28.4142 37.4142L41.8284 24L28.4142 10.5858Z",
    fill: color
  }));
});
IconRightArrow.displayName = 'IconRightArrow';

var _excluded$f = ["color"];
var IconUpCaret = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$f);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M11.0635 31.9962H36.9364C37.4887 31.9962 37.9364 31.5485 37.9364 30.9962C37.9364 30.7713 37.8607 30.553 37.7213 30.3766L24.7849 13.9904C24.4427 13.5569 23.8138 13.4829 23.3804 13.8251C23.319 13.8736 23.2635 13.929 23.2151 13.9904L10.2787 30.3766C9.93645 30.81 10.0104 31.4389 10.4439 31.7811C10.6204 31.9204 10.8387 31.9962 11.0635 31.9962Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconUpCaret.displayName = 'IconUpCaret';

var _excluded$g = ["color"];
var IconLeftCaret = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$g);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M13.9942 23.2151L30.3804 10.2787C30.8138 9.93645 31.4427 10.0104 31.7849 10.4439C31.9242 10.6204 32 10.8387 32 11.0635V36.9364C32 37.4887 31.5523 37.9364 31 37.9364C30.7751 37.9364 30.5568 37.8607 30.3804 37.7213L13.9942 24.7849C13.5607 24.4427 13.4867 23.8138 13.8289 23.3804C13.8774 23.319 13.9328 23.2635 13.9942 23.2151Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconLeftCaret.displayName = 'IconLeftCaret';

var _excluded$h = ["color"];
var IconRightCaret = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$h);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M34.0058 23.2151L17.6196 10.2787C17.1862 9.93645 16.5573 10.0104 16.2151 10.4439C16.0758 10.6204 16 10.8387 16 11.0635V36.9364C16 37.4887 16.4477 37.9364 17 37.9364C17.2249 37.9364 17.4432 37.8607 17.6196 37.7213L34.0058 24.7849C34.4393 24.4427 34.5133 23.8138 34.1711 23.3804C34.1226 23.319 34.0672 23.2635 34.0058 23.2151Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconRightCaret.displayName = 'IconRightCaret';

var _excluded$i = ["color"];
var IconRight = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M15.17 10.4184L17.9984 7.59L34.4126 24.0042L17.9984 40.4184L15.17 37.59L28.7552 24.0042L15.17 10.4184Z",
    fill: color
  }));
});
IconRight.displayName = 'IconRight';

var _excluded$j = ["color"];
var IconSignUp = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$j);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M15 14C15 9.02944 19.0294 5 24 5C28.9706 5 33 9.02944 33 14C33 18.9706 28.9706 23 24 23C19.0294 23 15 18.9706 15 14ZM29 14C29 11.2386 26.7614 9 24 9C21.2386 9 19 11.2386 19 14C19 16.7614 21.2386 19 24 19C26.7614 19 29 16.7614 29 14ZM33 26H37V32H43V36H37V42H33V36H27V32H33V26ZM25 29V25H17L16.695 25.0038C10.2085 25.1656 5 30.4745 5 37V42H25V38H9V37L9.00381 36.7508C9.13546 32.4478 12.6651 29 17 29H25Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSignUp.displayName = 'IconSignUp';

var _excluded$k = ["color"];
var IconSignIn = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$k);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 5C28.9706 5 33 9.02944 33 14C33 18.9706 28.9706 23 24 23C19.0294 23 15 18.9706 15 14C15 9.02944 19.0294 5 24 5ZM5 37V42H43V37L42.9963 36.6997C42.8394 30.3124 37.6917 25.1631 31.305 25.0038L31 25H17L16.695 25.0038C10.2085 25.1656 5 30.4745 5 37ZM39 37V38H9V37L9.00381 36.7508C9.13546 32.4478 12.6651 29 17 29H31L31.2492 29.0038C35.4694 29.1329 38.8671 32.5306 38.9962 36.7508L39 37ZM19 14C19 11.2386 21.2386 9 24 9C26.7614 9 29 11.2386 29 14C29 16.7614 26.7614 19 24 19C21.2386 19 19 16.7614 19 14Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSignIn.displayName = 'IconSignIn';

var _excluded$l = ["color"];
var IconSearch = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$l);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 22C40 12.6112 32.3888 5 23 5C13.6112 5 6 12.6112 6 22C6 31.3888 13.6112 39 23 39C26.9734 39 30.6284 37.6368 33.5228 35.3527L40.0858 41.9142L42.9142 39.0858L36.3527 32.5228C38.6368 29.6284 40 25.9734 40 22ZM10 22C10 14.8203 15.8203 9 23 9C30.1797 9 36 14.8203 36 22C36 29.1797 30.1797 35 23 35C15.8203 35 10 29.1797 10 22Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSearch.displayName = 'IconSearch';

var _excluded$m = ["color"];
var IconEyeClose = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$m);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M8.41418 5.58578L20.6703 17.8411C21.6605 17.3046 22.7947 17 24 17C27.866 17 31 20.134 31 24C31 25.2057 30.6951 26.3402 30.1583 27.3307L42.4142 39.5858L39.5858 42.4142L33.2645 36.0938C30.3295 38.0218 27.2418 39 24 39C16.976 39 10.6752 34.4079 5.08516 25.5122L4.79665 25.0482L4.15161 24L4.79665 22.9518C6.94981 19.4529 9.2093 16.5974 11.5758 14.402L5.58576 8.41421L8.41418 5.58578ZM9.35512 23.2577L9.00996 23.7773L8.86497 24L9.00996 24.2227C13.5923 31.2163 18.3934 34.7273 23.4036 34.9847L23.7044 34.9963L24 35C26.1581 35 28.2777 34.402 30.3582 33.1877L27.3306 30.1584C26.3402 30.6952 25.2057 31 24 31C20.134 31 17 27.866 17 24C17 22.7947 17.3046 21.6605 17.8411 20.6703L14.4041 17.2308C12.8153 18.6839 11.2505 20.5168 9.71015 22.7382L9.35512 23.2577ZM42.9148 22.4878C37.3247 13.5921 31.024 9 24 9C21.408 9 18.9145 9.62532 16.5189 10.8615L19.5372 13.8803C21.0059 13.2914 22.4936 13 24 13L24.2955 13.0037L24.5964 13.0153C29.6065 13.2727 34.4077 16.7837 38.99 23.7773L39.134 24L38.99 24.2227L38.5974 24.8125C37.4182 26.5564 36.2246 28.0714 35.0167 29.3613L37.844 32.1881C39.6984 30.2237 41.4847 27.8409 43.2033 25.0482L43.8483 24L43.2033 22.9518L42.9148 22.4878ZM21.0046 23.8328L21 24C21 25.6569 22.3431 27 24 27L24.1673 26.9954L21.0046 23.8328ZM24 21L24.1762 21.0051C25.7511 21.0963 27 22.4023 27 24L26.9946 24.1668L23.8326 21.0046L24 21Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconEyeClose.displayName = 'IconEyeClose';

var _excluded$n = ["color"];
var IconEye = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$n);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M42.9148 22.4878C37.3247 13.5921 31.024 9 24 9C16.8549 9 10.4582 13.7518 4.79668 22.9518L4.15164 24L4.79668 25.0482L5.08519 25.5122C10.6753 34.4079 16.976 39 24 39C31.1451 39 37.5418 34.2482 43.2033 25.0482L43.8484 24L43.2033 22.9518L42.9148 22.4878ZM9.28509 23.362C13.9662 16.373 18.8747 13 24 13L24.2956 13.0037L24.5964 13.0153C29.6065 13.2727 34.4077 16.7837 38.99 23.7773L39.134 24L38.99 24.2227L38.7149 24.638C34.0338 31.627 29.1253 35 24 35L23.7044 34.9963L23.4036 34.9847C18.3935 34.7273 13.5923 31.2163 9.01 24.2227L8.865 24L9.01 23.7773L9.28509 23.362ZM24 17C27.866 17 31 20.134 31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17ZM21 24C21 22.3431 22.3431 21 24 21C25.6569 21 27 22.3431 27 24C27 25.6569 25.6569 27 24 27C22.3431 27 21 25.6569 21 24Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconEye.displayName = 'IconEye';

var _excluded$o = ["color"];
var IconLoading = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$o);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 5V9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.1794 39 38.8297 32.4532 38.9968 24.3138L39 24H43C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.6194 13.3246 5.18317 23.6622 5.00294L24 5Z",
    fill: color
  }));
});
IconLoading.displayName = 'IconLoading';

var _excluded$p = ["color"];
var IconDownload = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$p);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26 25.859V6H22V25.859L16.3732 20.546L13.6268 23.454L24 33.251L34.3732 23.454L31.6268 20.546L26 25.859ZM11 38V34H7V42H41V34H37V38H11Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconDownload.displayName = 'IconDownload';

var _excluded$q = ["color"];
var IconUpload = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$q);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M33.9142 16.0858L24 6.17157L14.0858 16.0858L16.9142 18.9142L21.9998 13.8286L22 33H26L25.9998 13.8286L31.0858 18.9142L33.9142 16.0858ZM11 38V34H7V42H41V34H37V38H11Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconUpload.displayName = 'IconUpload';

var _excluded$r = ["color"];
var IconPen = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$r);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M33 4.17157L42.8284 14L15.8284 41H6V31.1716L33 4.17157ZM28 14.8286L10 32.828V37H14.17L32.171 18.9996L28 14.8286ZM30.828 11.9996L33 9.829L37.171 14L34.999 16.1706L30.828 11.9996Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPen.displayName = 'IconPen';

var _excluded$s = ["color"];
var IconMoreVertical = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$s);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M21 7H27V13H21V7ZM21 21H27V27H21V21ZM21 35H27V41H21V35Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconMoreVertical.displayName = 'IconMoreVertical';

var _excluded$t = ["color"];
var IconMore = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$t);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M41 21V27H35V21H41ZM27 21V27H21V21H27ZM13 21V27H7V21L13 21Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconMore.displayName = 'IconMore';

var _excluded$u = ["color"];
var IconDelete = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$u);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M33 6V10H42V14H39V39C39 40.5977 37.7511 41.9037 36.1763 41.9949L36 42H12C10.4023 42 9.09634 40.7511 9.00509 39.1763L9 39V14H6V10H15V6H33ZM35 14H13V38H35V14ZM22 18V32H18V18H22ZM30 18V32H26V18H30Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconDelete.displayName = 'IconDelete';

var _excluded$v = ["color"];
var IconSwap = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$v);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M41.353 13.9368L33.9519 6.12451L31.0481 8.87549L36.851 15H6.00001V19H39.1751L39.3514 18.9949C40.9262 18.9037 42.1751 17.5977 42.1751 16C42.1751 15.2324 41.8809 14.494 41.353 13.9368ZM42 33V29H8.82487L8.6486 29.0051C7.07379 29.0963 5.82487 30.4023 5.82487 32C5.82487 32.7676 6.11911 33.506 6.64702 34.0632L14.0481 41.8755L16.9519 39.1245L11.149 33H42Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSwap.displayName = 'IconSwap';

var _excluded$w = ["color"];
var IconSwapBold = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$w);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M31.1652 6L39.2541 14.5382C39.958 15.2812 40.3503 16.2657 40.3503 17.2892C40.3503 19.411 38.6939 21.1602 36.5554 21.2837L36.3503 21.2892H8.17513V15.2892L31.701 15.2887L26.8095 10.1265L31.1652 6ZM12 27.2892H40.1751V33.2892L16.649 33.2887L21.5408 38.4519L17.185 42.5784L9.09619 34.0402C8.39231 33.2972 8 32.3126 8 31.2892C8 29.1674 9.65641 27.4182 11.7948 27.2947L12 27.2892Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSwapBold.displayName = 'IconSwapBold';

var _excluded$x = ["color"];
var IconDragVertically = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$x);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M15 7H21V13H15V7ZM15 21H21V27H15V21ZM15 35H21V41H15V35ZM27 7H33V13H27V7ZM27 21H33V27H27V21ZM27 35H33V41H27V35Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconDragVertically.displayName = 'IconDragVertically';

var _excluded$y = ["color"];
var IconDragHorizontally = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$y);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M41 15V21H35V15H41ZM27 15V21H21V15L27 15ZM13 15V21H7V15H13ZM41 27V33H35V27H41ZM27 27V33H21V27H27ZM13 27V33H7V27H13Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconDragHorizontally.displayName = 'IconDragHorizontally';

var _excluded$z = ["color"];
var IconCheck = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$z);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M39.6022 10.0696L42.3979 12.9304L18.9839 35.8123L5.58582 22.4142L8.41424 19.5858L19.016 30.187L39.6022 10.0696Z",
    fill: color
  }));
});
IconCheck.displayName = 'IconCheck';

var _excluded$A = ["color"];
var IconClose = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$A);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M36.0858 9.08578L38.9142 11.9142L26.8278 23.9998L38.9142 36.0858L36.0858 38.9142L23.9998 26.8278L11.9142 38.9142L9.08582 36.0858L21.1718 23.9998L9.08582 11.9142L11.9142 9.08578L23.9998 21.1718L36.0858 9.08578Z",
    fill: color
  }));
});
IconClose.displayName = 'IconClose';

var _excluded$B = ["color"];
var IconPlus = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$B);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26 6V22H42V26H26V42H22V26H6V22H22V6H26Z",
    fill: color
  }));
});
IconPlus.displayName = 'IconPlus';

var _excluded$C = ["color"];
var IconMinus = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$C);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M42 22V26H6V22H42Z",
    fill: color
  }));
});
IconMinus.displayName = 'IconMinus';

var _excluded$D = ["color"];
var IconStore = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$D);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M42.9949 7.82373C42.9037 6.24892 41.5977 5 40 5H8L7.82373 5.00509C6.24892 5.09634 5 6.40232 5 8V15L5.00381 15.2492C5.07801 17.6744 6.23159 19.8279 8.00039 21.2457L8 40L8.00509 40.1763C8.09634 41.7511 9.40232 43 11 43H37L37.1763 42.9949C38.7511 42.9037 40 41.5977 40 40L40.0006 21.2449C41.8292 19.7787 43 17.5261 43 15V8L42.9949 7.82373ZM13 23C15.1304 23 17.0663 22.1672 18.4989 20.8085C19.9327 22.1668 21.869 23 24 23C26.0841 23 27.9821 22.2031 29.4058 20.8973L29.4999 20.8094C30.9335 22.1672 32.8695 23 35 23C35.339 23 35.6731 22.9789 36.001 22.938L36 39H31V26H17V39H12V22.9381C12.3276 22.979 12.6614 23 13 23ZM21 30V39H27V30H21ZM9 9H16V15L16.0091 15.3855C16.0395 16.0243 16.145 16.6435 16.3181 17.2347C15.5994 18.2997 14.3815 19 13 19L12.8004 18.9951L12.5969 18.9799C10.5771 18.7778 9 17.0731 9 15V9ZM39 9H32V15C32 15.7759 31.8896 16.5259 31.6835 17.2353C32.3304 18.1951 33.3838 18.8586 34.5969 18.9799L34.8004 18.9951L35 19C37.1422 19 38.8911 17.316 38.9951 15.1996L39 15V9ZM20 9H28V15L27.9951 15.1996C27.8911 17.316 26.1422 19 24 19L23.8004 18.9951L23.5969 18.9799C21.5771 18.7778 20 17.0731 20 15V9Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconStore.displayName = 'IconStore';

var _excluded$E = ["color"];
var IconStoreImport = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$E);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 5C41.5977 5 42.9037 6.24892 42.9949 7.82373L43 8V15C43 17.5261 41.8292 19.7787 40.0006 21.2449L40 24H36L36.001 22.938C35.6731 22.9789 35.339 23 35 23C32.8695 23 30.9335 22.1672 29.4999 20.8094L29.4058 20.8973C27.9821 22.2031 26.0841 23 24 23C21.869 23 19.9327 22.1668 18.4989 20.8085C17.0663 22.1672 15.1304 23 13 23C12.6614 23 12.3276 22.979 12 22.9381V39H17V26H29V30H21V39H24V43H11C9.40232 43 8.09634 41.7511 8.00509 40.1763L8 40L8.00039 21.2457C6.23159 19.8279 5.07801 17.6744 5.00381 15.2492L5 15V8C5 6.40232 6.24892 5.09634 7.82373 5.00509L8 5H40ZM43 33V37H37V43H33V37H27V33H33V27H37V33H43ZM9 9H16V15L16.0091 15.3855C16.0395 16.0243 16.145 16.6435 16.3181 17.2347C15.5994 18.2997 14.3815 19 13 19L12.8004 18.9951L12.5969 18.9799C10.5771 18.7778 9 17.0731 9 15V9ZM39 9H32V15C32 15.7759 31.8896 16.5259 31.6835 17.2353C32.3304 18.1951 33.3838 18.8586 34.5969 18.9799L34.8004 18.9951L35 19C37.1422 19 38.8911 17.316 38.9951 15.1996L39 15V9ZM20 9H28V15L27.9951 15.1996C27.8911 17.316 26.1422 19 24 19L23.8004 18.9951L23.5969 18.9799C21.5771 18.7778 20 17.0731 20 15V9Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconStoreImport.displayName = 'IconStoreImport';

var _excluded$F = ["color"];
var IconImage = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$F);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M41.9949 8.82373C41.9037 7.24892 40.5977 6 39 6H9L8.82373 6.00509C7.24892 6.09634 6 7.40232 6 9V39L6.00509 39.1763C6.09634 40.7511 7.40232 42 9 42H39L39.1763 41.9949C40.7511 41.9037 42 40.5977 42 39V9L41.9949 8.82373ZM10 10H38V38H10V10ZM35 19V35H13L21 26L25 30L35 19ZM19 19V13H13V19H19Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconImage.displayName = 'IconImage';

var _excluded$G = ["color"];
var IconImageAdd = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$G);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M41.9949 8.82373C41.9037 7.24892 40.5977 6 39 6H9L8.82373 6.00509C7.24892 6.09634 6 7.40232 6 9V39L6.00509 39.1763C6.09634 40.7511 7.40232 42 9 42H24V38H10V10H38V24H42V9L41.9949 8.82373ZM33 37V43H37V37H43V33H37V27H33V33H27V37H33ZM35 17V24H30V30H25V35H13V33L21 24L25 28L35 17ZM19 19V13H13V19H19Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconImageAdd.displayName = 'IconImageAdd';

var _excluded$H = ["color"];
var IconHeartLine = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$H);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M42 20C42 13.9249 37.0751 9 31 9L30.6645 9.00506L30.2772 9.02351C28.0899 9.16615 26.0339 9.95272 24.3371 11.2467L23.999 11.514L23.8824 11.4179L23.6047 11.2021C21.7319 9.79425 19.43 9 17 9C10.9249 9 6 13.9249 6 20C6 22.6644 6.95319 25.1868 8.65497 27.1669C9.03351 27.6073 9.44353 28.0146 9.88066 28.3862L22.6248 40.4522L22.7571 40.5671C23.5282 41.1798 24.6449 41.1422 25.3735 40.4538L38.6035 27.9538L38.8724 27.6828C40.8076 25.7002 42 22.9894 42 20ZM30.79 13.003L31 13L31.2407 13.0041C34.9952 13.1309 38 16.2145 38 20L37.9934 20.3081C37.9183 22.0467 37.2096 23.6597 36.0099 24.8888L35.81 25.09L24.001 36.247L12.6308 25.4815L12.1976 25.0932C12.0193 24.9248 11.8493 24.7468 11.6885 24.5596C10.5967 23.2893 10 21.687 10 20C10 16.134 13.134 13 17 13L17.3051 13.0065C18.7245 13.0675 20.0754 13.5532 21.2011 14.3994L21.383 14.541L23.9473 16.6545L26.8182 14.3841L27.0615 14.2078C28.0531 13.5237 29.2648 13.098 30.5375 13.015L30.79 13.003Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconHeartLine.displayName = 'IconHeartLine';

var _excluded$I = ["color"];
var IconTag = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$I);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24.9142 5.40812C25.3317 4.99063 25.9099 4.78106 26.4924 4.82905L26.6672 4.85123L39.3387 7.0289C40.1215 7.16341 40.7452 7.74658 40.9383 8.50691L40.9711 8.66126L43.1488 21.3328C43.2488 21.9147 43.0862 22.5078 42.7108 22.9559L42.5919 23.0858L22.0858 43.5919C21.3458 44.3318 20.1704 44.3708 19.3846 43.7087L19.2574 43.5919L4.40811 28.7426C3.66817 28.0027 3.62923 26.8272 4.29128 26.0414L4.40811 25.9142L24.9142 5.40812ZM27.01 8.968L8.65 27.328L20.671 39.349L39.031 20.989L37.268 10.731L27.01 8.968ZM31 14C32.6569 14 34 15.3431 34 17C34 18.6569 32.6569 20 31 20C29.3431 20 28 18.6569 28 17C28 15.3431 29.3431 14 31 14Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTag.displayName = 'IconTag';

var _excluded$J = ["color"];
var IconMaker = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$J);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M19 7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H10V29H7C5.89543 29 5 29.8954 5 31V41C5 42.1046 5.89543 43 7 43H17C18.1046 43 19 42.1046 19 41V38H29V41C29 42.1046 29.8954 43 31 43H41C42.1046 43 43 42.1046 43 41V31C43 29.8954 42.1046 29 41 29H38V19H41C42.1046 19 43 18.1046 43 17V7C43 5.89543 42.1046 5 41 5H31C29.8954 5 29 5.89543 29 7V10H19V7ZM9 33H15V39H9V33ZM39 33H33V39H39V33ZM29 14V17C29 18.1046 29.8954 19 31 19H34V29H31C29.8954 29 29 29.8954 29 31V34H19V31C19 29.8954 18.1046 29 17 29H14V19H17C18.1046 19 19 18.1046 19 17V14H29ZM15 9H9V15H15V9ZM33 9H39V15H33V9Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconMaker.displayName = 'IconMaker';

var _excluded$K = ["color"];
var IconSettings = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$K);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M31 8.49542C30.3468 6.42308 28.4215 5 26.2317 5H21.7683L21.5427 5.00504L21.3193 5.02005C19.2449 5.20602 17.4819 6.66884 16.9371 8.71169L16.38 10.801L14.2912 10.2391L14.0645 10.1837C11.9461 9.71736 9.75495 10.6732 8.66138 12.5673L6.42965 16.4327L6.31769 16.6375L6.21609 16.8455C5.3483 18.7321 5.73539 20.983 7.22848 22.4725L8.759 23.999L7.22794 25.5281L7.06665 25.6966C5.60392 27.2977 5.33608 29.6732 6.42965 31.5673L8.66138 35.4327L8.78269 35.6321L8.91209 35.8241C10.112 37.5189 12.2549 38.3091 14.2914 37.7608L16.38 37.197L16.9371 39.2882L17.0001 39.5049C17.6532 41.5769 19.5785 43 21.7683 43H26.2317L26.4573 42.995L26.6807 42.9799C28.7551 42.794 30.5181 41.3312 31.0629 39.2883L31.619 37.198L33.7083 37.7607L33.935 37.8162C36.0539 38.2826 38.245 37.3268 39.3386 35.4327L41.5703 31.5673L41.6823 31.3625L41.7839 31.1545C42.6517 29.2679 42.2646 27.017 40.7715 25.5275L39.24 23.999L40.7712 22.4728L40.9325 22.3042C42.3961 20.7023 42.6639 18.3268 41.5703 16.4327L39.3386 12.5673L39.2173 12.3679L39.0879 12.1759C37.888 10.4811 35.7451 9.6909 33.7086 10.2392L31.62 10.801L31.063 8.71208L31 8.49542ZM21.7683 9H26.2317L26.3537 9.00742C26.7545 9.05648 27.0918 9.34438 27.198 9.74234L28.2712 13.7688L28.3174 13.9186C28.6439 14.848 29.6046 15.4025 30.5733 15.2193L30.7236 15.185L34.7485 14.1017L34.8682 14.0771C35.268 14.0203 35.6686 14.2106 35.8745 14.5673L38.1062 18.4327L38.1608 18.5421C38.3187 18.9137 38.2381 19.3498 37.9465 19.6407L34.9954 22.5839L34.8784 22.711C34.2522 23.4523 34.2508 24.542 34.875 25.285L34.9954 25.4161L37.9465 28.3593L38.0276 28.4507C38.2767 28.7686 38.3122 29.2106 38.1062 29.5673L35.8745 33.4327L35.8071 33.5347C35.5642 33.8573 35.1462 34.0054 34.7485 33.8983L30.7239 32.8145L30.571 32.7796C29.6029 32.5976 28.6424 33.1524 28.3167 34.0829L28.2712 34.2306L27.198 38.2577L27.1594 38.3736C27.0087 38.7483 26.6436 39 26.2317 39H21.7683L21.6463 38.9926C21.2455 38.9435 20.9082 38.6556 20.802 38.2577L19.7282 34.2304L19.682 34.0806C19.3554 33.1512 18.3947 32.5968 17.4261 32.78L17.2756 32.8145L13.2515 33.8983L13.1318 33.9229C12.732 33.9797 12.3314 33.7894 12.1255 33.4327L9.89376 29.5673L9.83919 29.4579C9.68126 29.0863 9.76194 28.6502 10.0535 28.3593L13.0038 25.415L13.1208 25.2879C13.7468 24.5464 13.7479 23.4566 13.1234 22.7139L13.0035 22.5834L10.0535 19.6407L9.9724 19.5493C9.72328 19.2314 9.68782 18.7894 9.89376 18.4327L12.1255 14.5673L12.1929 14.4653C12.4358 14.1427 12.8538 13.9946 13.2515 14.1017L17.2759 15.1849L17.4287 15.2198C18.3968 15.4016 19.3573 14.8467 19.6829 13.9162L19.7282 13.769L20.802 9.74234L20.8406 9.62638C20.9913 9.25172 21.3564 9 21.7683 9ZM24 16C28.4183 16 32 19.5817 32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16ZM20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSettings.displayName = 'IconSettings';

var _excluded$L = ["color"];
var IconNotificationLine = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$L);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26 5L26.0006 8.14186C32.6844 9.09819 37.8451 14.7754 37.9966 21.6874L38 22V32H41V36H7V32H10V22C10 14.947 15.2155 9.11215 22.0002 8.14175L22 5H26ZM24 12C18.5708 12 14.1521 16.3267 14.0038 21.7201L14 22V32H34V22C34 16.4772 29.5228 12 24 12ZM17 39H31V43H17V39Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconNotificationLine.displayName = 'IconNotificationLine';

var _excluded$M = ["color"];
var IconHome = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$M);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 5.67403L42 16.3615V42H6V16.3615L24 5.67403ZM24 10.326L10 18.638V38L18 37.999V26H30V37.999L38 38V18.638L24 10.326ZM22 37.999V30H26V37.999H22Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconHome.displayName = 'IconHome';

var _excluded$N = ["color"];
var IconCopy = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$N);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40.9951 8.80036C40.8911 6.68397 39.1422 5 37 5H20V9H37V30H41V9L40.9951 8.80036ZM30 13C31.5977 13 32.9037 14.2489 32.9949 15.8237L33 16V40C33 41.5977 31.7511 42.9037 30.1763 42.9949L30 43H10C8.40232 43 7.09634 41.7511 7.00509 40.1763L7 40V16C7 14.4023 8.24892 13.0963 9.82373 13.0051L10 13H30ZM29 39V17H11V39H29Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconCopy.displayName = 'IconCopy';

var _excluded$O = ["color"];
var IconEarth = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$O);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 5C34.4934 5 43 13.5066 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5ZM24 9C19.7632 9 15.9366 10.7566 13.2089 13.5811L17.0441 14.1289L22.061 20.149L29 21.3057V29.8284L20.2913 38.538C21.4775 38.8397 22.72 39 24 39C26.0389 39 27.9828 38.5932 29.7549 37.8563L32.62 31.306L33.963 26.829L33.616 24.054L31.7506 22.5617L31.5858 22.4142L28 18.8284V13.6148L29.4398 10.0168C27.7533 9.36025 25.9187 9 24 9ZM9.12436 22.0595C9.34536 20.3486 9.85464 18.728 10.6019 17.2481L14.955 17.87L19.9389 23.8507L25 24.694V28.17L16.297 36.8737L16.0006 36.6913L16 26.9708L9.12436 22.0595ZM9.32436 27.1173C9.78347 29.2894 10.7126 31.2881 12.0004 33.002L12 29.029L9.32436 27.1173ZM32 14.382L32.9649 11.9726C36.6282 14.7075 39 19.0768 39 24C39 27.067 38.0796 29.9189 36.4998 32.2947L38.0369 27.1706L37.3838 21.9458L34.339 19.51L32 17.171V14.382Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconEarth.displayName = 'IconEarth';

var _excluded$P = ["color"];
var IconShareOpen = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$P);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M22 10V6H9L8.82373 6.00509C7.24892 6.09634 6 7.40232 6 9V39L6.00509 39.1763C6.09634 40.7511 7.40232 42 9 42H39L39.1763 41.9949C40.7511 41.9037 42 40.5977 42 39V26H38V38H10V10H22ZM42 20V6H28V10H35.17L18.5858 26.5858L21.4142 29.4142L38 12.828V20H42Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconShareOpen.displayName = 'IconShareOpen';

var _excluded$Q = ["color"];
var IconCheckbox = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Q);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M39 6C40.5977 6 41.9037 7.24892 41.9949 8.82373L42 9V39C42 40.5977 40.7511 41.9037 39.1763 41.9949L39 42H9C7.40232 42 6.09634 40.7511 6.00509 39.1763L6 39V9C6 7.40232 7.24892 6.09634 8.82373 6.00509L9 6H39ZM38 10H10V38H38V10ZM35.4142 18.4142L32.5858 15.5858L21 27.171L14.9142 21.0858L12.0858 23.9142L21 32.8284L35.4142 18.4142Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconCheckbox.displayName = 'IconCheckbox';

var _excluded$R = ["color"];
var IconApp = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$R);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M8.5 6H19.5C20.8807 6 22 7.11929 22 8.5V19.5C22 20.8807 20.8807 22 19.5 22H8.5C7.11929 22 6 20.8807 6 19.5V8.5C6 7.11929 7.11929 6 8.5 6ZM18 18V10H10V18H18ZM39.5 6H28.5C27.1193 6 26 7.11929 26 8.5V19.5C26 20.8807 27.1193 22 28.5 22H39.5C40.8807 22 42 20.8807 42 19.5V8.5C42 7.11929 40.8807 6 39.5 6ZM38 18V10H30V18H38ZM19.5 26H8.5C7.11929 26 6 27.1193 6 28.5V39.5C6 40.8807 7.11929 42 8.5 42H19.5C20.8807 42 22 40.8807 22 39.5V28.5C22 27.1193 20.8807 26 19.5 26ZM18 38V30H10V38H18ZM39.5 26H28.5C27.1193 26 26 27.1193 26 28.5V39.5C26 40.8807 27.1193 42 28.5 42H39.5C40.8807 42 42 40.8807 42 39.5V28.5C42 27.1193 40.8807 26 39.5 26ZM38 38V30H30V38H38Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconApp.displayName = 'IconApp';

var _excluded$S = ["color"];
var IconList = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$S);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M6 11H10V15H6V11ZM14 11H42V15H14V11ZM6 22H10V26H6V22ZM14 22H42V26H14V22ZM6 33H10V37H6V33ZM14 33H42V37H14V33Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconList.displayName = 'IconList';

var _excluded$T = ["color"];
var IconLocation = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$T);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 19C40 10.6813 32.8048 4 24 4C15.1952 4 8 10.6813 8 19C8 26.3438 12.7819 34.3202 22.1758 43.0385L24 44.7119L25.8242 43.0385C35.2181 34.3202 40 26.3438 40 19ZM12 19C12 12.9593 17.3408 8 24 8C30.6592 8 36 12.9593 36 19L35.9962 19.3115L35.9849 19.6248C35.7173 25.1778 31.9017 31.6206 24.4087 38.8699L24 39.262L23.5913 38.8699L23.1711 38.4604C15.678 31.1054 12 24.5892 12 19ZM24 12C27.866 12 31 15.134 31 19C31 22.866 27.866 26 24 26C20.134 26 17 22.866 17 19C17 15.134 20.134 12 24 12ZM21 19C21 17.3431 22.3431 16 24 16C25.6569 16 27 17.3431 27 19C27 20.6569 25.6569 22 24 22C22.3431 22 21 20.6569 21 19Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconLocation.displayName = 'IconLocation';

var _excluded$U = ["color"];
var IconBilling = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$U);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 9C41.5977 9 42.9037 10.2489 42.9949 11.8237L43 12V36C43 37.5977 41.7511 38.9037 40.1763 38.9949L40 39H8C6.40232 39 5.09634 37.7511 5.00509 36.1763L5 36V12C5 10.4023 6.24892 9.09634 7.82373 9.00509L8 9H40ZM39 23H9V35H39V23ZM9 13H39V16H9V13Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconBilling.displayName = 'IconBilling';

var _excluded$V = ["color"];
var IconLanguage = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$V);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M18.9403 5.01492L19.936 8.99992L30 8.99999V13L26.5899 13.0001C25.6332 16.4354 23.6439 19.8197 20.6523 23.1544C23.3912 25.4442 26.3117 27.2576 29.4155 28.6012L31.6538 23.2308H35.3462L42.8462 41.2308L39.1538 42.7692L37.166 37.9999H29.833L27.8462 42.7692L24.1538 41.2308L27.8774 32.294C24.2862 30.7457 20.9232 28.6393 17.7926 25.9801C14.9743 28.4373 11.7811 30.3399 8.22267 31.6816L7.67267 31.8835L6.32733 28.1165C9.51692 26.9774 12.3664 25.3423 14.8855 23.2049C12.261 20.3006 10.4328 16.8911 9.41019 13.0005L6 13V8.99999L15.813 8.99992L15.0597 5.98507L18.9403 5.01492ZM33.5 29.201L31.5 33.9999H35.499L33.5 29.201ZM13.5716 13.0005L22.3942 13.0004C21.4935 15.5114 19.876 18.0631 17.5201 20.6546L17.7438 20.4029C15.8377 18.2584 14.4493 15.7963 13.5716 13.0005Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconLanguage.displayName = 'IconLanguage';

var _excluded$W = ["color"];
var IconArticle = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$W);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.5 7.8C35.3519 7.8 38.1996 8.25219 41.0366 9.15304L41.6443 9.35295L43 9.81429V39.8561L40.5188 39.241C37.8417 38.5775 35.1699 38.2463 32.5 38.2463C30.1769 38.2463 27.8309 38.9025 25.441 40.24L25.0188 40.4831L24 41.0862L22.9812 40.4831C20.4451 38.9819 17.9597 38.2463 15.5 38.2463C13.0526 38.2463 10.6036 38.5246 8.15035 39.0821L7.48119 39.241L5 39.8561V9.81429L6.35567 9.35295C9.39367 8.31909 12.4444 7.8 15.5 7.8C18.209 7.8 20.891 8.56131 23.5287 10.0568L24 10.333L24.0552 10.299C26.5482 8.80998 29.0816 7.97781 31.6409 7.82555L32.0928 7.80574L32.5 7.8ZM15.5 11.8C13.6536 11.8 11.8048 12.0226 9.95073 12.4693L9.33252 12.6265L9 12.719V34.83L9.51002 34.7408C11.0064 34.4937 12.5038 34.3391 14.0018 34.2772L14.7509 34.254L15.5 34.2463C17.6813 34.2463 19.8507 34.6819 22.0004 35.5437L22.0003 13.7971C19.7892 12.4548 17.6293 11.8 15.5 11.8ZM26.0007 13.7965C28.2115 12.4546 30.371 11.8 32.5 11.8L33.0596 11.8068L33.6815 11.8304C35.3404 11.9157 37.0017 12.1807 38.6675 12.6265L39 12.719V34.83L38.49 34.7408L37.7417 34.625C35.9956 34.3726 34.2481 34.2463 32.5 34.2463L32.0628 34.2521L31.5937 34.2714C29.7181 34.3752 27.852 34.8012 26.0006 35.5433L26.0007 13.7965ZM36.9183 25.3V28.8574H28.0407V25.3H36.9183ZM19.9183 28.8574V25.3H11.0407V28.8574H19.9183ZM36.9183 17.3V20.8574H28.0407V17.3H36.9183ZM19.9183 20.8574V17.3H11.0407V20.8574H19.9183Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconArticle.displayName = 'IconArticle';

var _excluded$X = ["color"];
var IconMenu = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$X);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M9 11H39V15H9V11ZM9 22H39V26H9V22ZM9 33H39V37H9V33Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconMenu.displayName = 'IconMenu';

var _excluded$Y = ["color"];
var IconQuit = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Y);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M37.0674 10.2071C33.662 6.97969 29.0622 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C29.0622 43 33.662 41.0203 37.0674 37.7929L34.316 34.8895C31.6275 37.4372 27.9963 39 24 39C15.7157 39 9 32.2843 9 24C9 15.7157 15.7157 9 24 9C27.9968 9 31.6284 10.5632 34.317 13.1115L37.0674 10.2071ZM43.5185 22.6984L37.5185 15.6984L34.4815 18.3016L37.65 21.9994L22 22V26L37.65 25.9994L34.4815 29.6984L37.5185 32.3016L43.5185 25.3016L43.6251 25.1659C44.1583 24.4238 44.1227 23.4033 43.5185 22.6984Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconQuit.displayName = 'IconQuit';

var _excluded$Z = ["color"];
var IconDashboard = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Z);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M41.9949 9.19623C41.9037 7.97138 40.5977 7 39 7H9L8.82373 7.00396C7.24892 7.07493 6 8.09069 6 9.33333V32.6667L6.00509 32.8038C6.09634 34.0286 7.40232 35 9 35H39L39.1763 34.996C40.7511 34.9251 42 33.9093 42 32.6667V9.33333L41.9949 9.19623ZM10 11H38V31H10V11ZM18 18V28H14V18H18ZM26 28V14H22V28H26ZM34 21V28H30V21H34ZM35 38H13V42H35V38Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconDashboard.displayName = 'IconDashboard';

var _excluded$_ = ["color"];
var IconCurrency = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$_);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8ZM26.0363 12.9996L25.8859 12.85L22.6186 12.8586L22.469 13.009L22.476 15.851L22.31 15.8864C21.2626 16.1262 20.3873 16.6041 19.6977 17.3148C18.7888 18.2566 18.3278 19.4641 18.3278 20.8969C18.3278 22.2263 18.823 23.2918 19.798 24.0533C20.3482 24.4787 21.0757 24.8 21.9603 25.0104L24.8943 25.6833L25.1796 25.7523C25.546 25.8443 25.8568 25.9358 26.1164 26.026L26.4145 26.1378L26.5686 26.2039C26.762 26.2916 26.9072 26.3771 27.0088 26.4593C27.2383 26.6451 27.3542 26.9707 27.3542 27.4694C27.3542 27.9445 27.1894 28.281 26.8283 28.5472C26.3182 28.9217 25.4913 29.1158 24.3708 29.1158C23.4276 29.1158 22.6751 28.9248 22.1325 28.5525C21.4961 28.1149 21.1882 27.4604 21.1882 26.5306L21.0382 26.3806H18L17.85 26.5306L17.8572 26.8806C17.8861 27.5717 18.0016 28.2082 18.202 28.7763C18.4494 29.4796 18.9054 30.1345 19.5537 30.7206C20.0692 31.1909 20.6217 31.5476 21.1963 31.7803L21.459 31.8783L21.7354 31.966C21.9242 32.021 22.122 32.0691 22.3286 32.1104L22.518 32.144L22.5265 35.0004L22.6769 35.15L25.9442 35.1414L26.0938 34.991L26.086 32.153L26.3157 32.1129C27.135 31.9485 27.8698 31.6729 28.5124 31.2876C29.9969 30.3875 30.7532 29.0091 30.7532 27.2081C30.7532 25.9398 30.3681 24.8838 29.6063 24.0733C28.9591 23.3948 28.0547 22.914 26.9205 22.6417L22.8305 21.7038L22.6465 21.6551C22.3536 21.5691 22.1293 21.4587 21.9755 21.3266C21.8154 21.1913 21.7268 21.0022 21.7268 20.6331C21.7268 19.9567 21.9695 19.5207 22.501 19.2323C22.9286 19.0031 23.5112 18.885 24.232 18.885C25.0332 18.885 25.6943 19.0578 26.2037 19.3972C26.7606 19.7623 27.0161 20.2735 27.0161 21.0316L27.1661 21.1816H30.2043L30.3543 21.0316L30.3487 20.7475C30.3002 19.5305 29.9368 18.4978 29.2666 17.681L29.1097 17.498L28.9288 17.3098C28.245 16.6384 27.3346 16.1759 26.2091 15.9259L26.044 15.892L26.0363 12.9996Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconCurrency.displayName = 'IconCurrency';

var _excluded$$ = ["color"];
var IconCart = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$$);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M11.6914 7.794L5.97031 4.9704L4.2 8.55732L9.04215 10.947L13.8025 34.2042L13.8426 34.3657C14.0898 35.2112 14.8678 35.8032 15.7619 35.8032H37.4016V31.8032L17.3942 31.803L16.945 29.6104L36.14 29.6105L36.2993 29.6042C37.1416 29.5374 37.8588 28.9445 38.0751 28.1158L41.4746 14.9522L41.5062 14.8116C41.7342 13.5949 40.8008 12.4469 39.5395 12.4469L13.4275 12.4468L12.7656 9.18648L12.7251 9.02381C12.5684 8.48988 12.1949 8.04252 11.6914 7.794ZM14.2455 16.4468L36.9496 16.4464L34.5942 25.61L16.127 25.6104L14.2455 16.4468ZM15.4466 43C16.9079 43 18.0925 41.8168 18.0925 40.3571C18.0925 38.8975 16.9079 37.7143 15.4466 37.7143C13.9853 37.7143 12.8007 38.8975 12.8007 40.3571C12.8007 41.8168 13.9853 43 15.4466 43ZM37.7468 40.3571C37.7468 41.8168 36.5622 43 35.1009 43C33.6396 43 32.455 41.8168 32.455 40.3571C32.455 38.8975 33.6396 37.7143 35.1009 37.7143C36.5622 37.7143 37.7468 38.8975 37.7468 40.3571Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconCart.displayName = 'IconCart';

var _excluded$10 = ["color"];
var IconFilters = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$10);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M8 12H40V16H8V12ZM13 23H35V27H13V23ZM17 34H31V38H17V34Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconFilters.displayName = 'IconFilters';

var _excluded$11 = ["color"];
var IconPalette = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$11);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M42.9142 10.4142L40.0858 7.58578L23.5858 24.0858L26.4142 26.9142L42.9142 10.4142ZM31.7948 9.97594L32.212 10.131L30.788 13.869C24.4439 11.4522 18.6788 12.3391 13.2279 16.5787C9.7014 19.3215 8.51674 22.7307 9.32738 26.3786C10.0454 29.6096 12.3417 32.7172 15.0078 34.2724C17.6516 35.8147 20.7114 36.7632 23.2158 36.8771C25.2966 36.9716 26.4188 36.504 26.577 35.9506L27.2697 33.3978C27.9824 30.883 28.8647 29.5488 30.971 28.285C31.6969 27.8495 32.3537 27.6009 33.3681 27.3649L34.0525 27.2174L35.2707 26.9864C37.4662 26.5739 38.2457 26.1828 38.6617 25.2122C39.3374 23.6355 39.018 21.7397 37.5146 19.3833L37.3359 19.1094L40.6641 16.8906C43.0081 20.4066 43.6366 23.7585 42.3383 26.7878C41.2702 29.28 39.5267 30.2179 36.3335 30.8549L35.0928 31.0895L34.6718 31.1747L34.3087 31.2554C34.1966 31.2818 34.0929 31.3078 33.9965 31.3337L33.728 31.4118L33.496 31.4919C33.3879 31.5328 33.2909 31.5752 33.2009 31.6205L33.029 31.715C31.9495 32.3627 31.6084 32.8292 31.1857 34.2552L31.0795 34.6289L30.4231 37.0494C29.1111 41.6414 22.1624 41.8952 15.6679 39.0813L15.051 38.804L14.4562 38.5176C13.9623 38.2718 13.4734 38.0082 12.9923 37.7276C9.37047 35.6148 6.38421 31.5734 5.42263 27.2464C4.28034 22.106 6.01158 17.1239 10.7721 13.4213C17.2021 8.42018 24.2933 7.25629 31.7948 9.97594ZM15.5 26C16.8807 26 18 27.1193 18 28.5C18 29.8807 16.8807 31 15.5 31C14.1193 31 13 29.8807 13 28.5C13 27.1193 14.1193 26 15.5 26ZM15.5 18C16.8807 18 18 19.1193 18 20.5C18 21.8807 16.8807 23 15.5 23C14.1193 23 13 21.8807 13 20.5C13 19.1193 14.1193 18 15.5 18ZM25 17.5C25 16.1193 23.8807 15 22.5 15C21.1193 15 20 16.1193 20 17.5C20 18.8807 21.1193 20 22.5 20C23.8807 20 25 18.8807 25 17.5Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPalette.displayName = 'IconPalette';

var _excluded$12 = ["color"];
var IconCustomerService = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$12);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 4.5C33.4137 4.5 41.0653 12.0446 41.238 21.4171L41.2385 21.5152C42.2666 22.6097 42.9198 24.0605 42.9931 25.6625L43 25.9646V29.9646C43 33.5544 40.0899 36.4646 36.5 36.4646C36.2948 36.4646 36.0919 36.4551 35.8916 36.4365C35.8207 36.6671 35.7044 36.8891 35.5433 37.0894C33.7229 39.3526 31.2722 40.6842 28.2933 41.0722C27.6556 41.918 26.6416 42.4646 25.5 42.4646C23.567 42.4646 22 40.8976 22 38.9646C22 37.0316 23.567 35.4646 25.5 35.4646C26.7055 35.4646 27.7687 36.0741 28.3982 37.0017C29.962 36.6876 31.2126 35.9699 32.2062 34.8439C30.9075 33.7006 30.0693 32.0475 30.0041 30.1977L30 29.9646V25.9646C30 22.3747 32.9101 19.4646 36.5 19.4646C36.685 19.4646 36.8683 19.4723 37.0494 19.4875C35.9807 13.2485 30.5449 8.5 24 8.5C17.4552 8.5 12.0195 13.2484 10.9499 19.488C11.1317 19.4723 11.315 19.4646 11.5 19.4646C15.0118 19.4646 17.8732 22.2496 17.9959 25.7315L18 25.9646V29.9646C18 33.5544 15.0899 36.4646 11.5 36.4646C7.98819 36.4646 5.12685 33.6796 5.0041 30.1977L5 29.9646V25.9646C5 24.3445 5.59274 22.8628 6.57318 21.7246L6.76 21.516L6.762 21.4171C6.93468 12.0446 14.5863 4.5 24 4.5ZM11.5 23.4646C10.1745 23.4646 9.08996 24.4961 9.00532 25.8002L9 25.9646V29.9646C9 31.3453 10.1193 32.4646 11.5 32.4646C12.8255 32.4646 13.91 31.4331 13.9947 30.129L14 29.9646V25.9646C14 24.5839 12.8807 23.4646 11.5 23.4646ZM34.0053 25.8002C34.09 24.4961 35.1745 23.4646 36.5 23.4646C37.8807 23.4646 39 24.5839 39 25.9646V29.9646L38.9947 30.129C38.91 31.4331 37.8255 32.4646 36.5 32.4646C35.1193 32.4646 34 31.3453 34 29.9646V25.9646L34.0053 25.8002Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconCustomerService.displayName = 'IconCustomerService';

var _excluded$13 = ["color"];
var IconSkin = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$13);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M18.8284 5L19.4142 5.58579C21.0678 7.23935 22.5891 8 24 8C25.4109 8 26.9322 7.23935 28.5858 5.58579L29.1716 5H40C41.6569 5 43 6.34315 43 8V24C43 25.6569 41.6569 27 40 27H38V39C38 40.5977 36.7511 41.9037 35.1763 41.9949L35 42H13C11.3431 42 10 40.6569 10 39V27H8C6.40232 27 5.09634 25.7511 5.00509 24.1763L5 24V8C5 6.34315 6.34315 5 8 5H18.8284ZM39 23V9H30.799L30.5638 9.21088C28.5664 10.9571 26.4775 11.911 24.3102 11.9941L24 12C21.7216 12 19.5287 11.0402 17.4362 9.21088L17.2 9H9V23H14V38H34V23H39Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSkin.displayName = 'IconSkin';

var _excluded$14 = ["color"];
var IconSkinAdd = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$14);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M19.4142 5.58579L18.8284 5H8L7.82373 5.00509C6.24892 5.09634 5 6.40232 5 8V24L5.00509 24.1763L5.02018 24.3499C5.19348 25.8419 6.46149 27 8 27H10V39L10.0051 39.1763C10.0963 40.7511 11.4023 42 13 42H23V38H14V23H9V9H17.2L17.4362 9.21088L17.7221 9.45494C19.7282 11.1255 21.8252 12 24 12L24.3102 11.9941L24.6347 11.9751C26.6862 11.8136 28.6663 10.8698 30.5638 9.21088L30.799 9H39V23H43V8L42.9949 7.82373C42.9037 6.24892 41.5977 5 40 5H29.1716L28.5858 5.58579L28.3387 5.82714C26.7804 7.31352 25.3404 8 24 8C22.5891 8 21.0678 7.23935 19.4142 5.58579ZM37 33V27H33V33H27V37H33V43H37V37H43V33H37Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSkinAdd.displayName = 'IconSkinAdd';

var _excluded$15 = ["color"];
var IconNav = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$15);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M43 8V40H5V8H43ZM14 31H9V36H14V31ZM18 31H39V36H18V31ZM14 21H9V27H14V21ZM18 21H39V27H18V21ZM14 12H9V17H14V12ZM18 12H39V17H18V12Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconNav.displayName = 'IconNav';

var _excluded$16 = ["color"];
var IconOrder = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$16);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 12.1716L32.8284 5H11L10.8237 5.00509C9.24892 5.09634 8 6.40232 8 8V40L8.00509 40.1763C8.09634 41.7511 9.40232 43 11 43H37L37.1763 42.9949C38.7511 42.9037 40 41.5977 40 40V12.1716ZM12 9H31.171L36 13.829V39H12V9ZM26 27V31H16V27H26ZM32 23V19H16V23H32Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconOrder.displayName = 'IconOrder';

var _excluded$17 = ["color"];
var IconDrag = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$17);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 19C42.1422 19 43.8911 20.684 43.9951 22.8003L44 23V39C44 41.1422 42.316 42.8911 40.1996 42.9951L40 43H24C21.8578 43 20.1089 41.316 20.0049 39.1996L20 39V23C20 20.8578 21.684 19.1089 23.8004 19.0049L24 19H40ZM11.52 29.4C11.3118 30.0292 11.2 30.7013 11.2 31.3996C11.2 33.5753 12.2856 35.4974 13.9447 36.6538L16 34.5996V40.9996H9.6L11.1987 39.3987C10.1948 38.0618 9.6 36.4002 9.6 34.5996C9.6 32.6146 10.323 30.7984 11.52 29.4ZM40 23H24V39H40V23ZM22 4.99999C24.1422 4.99999 25.8911 6.68396 25.9951 8.80035L26 8.99999V15H22V8.99999H9V22H16V26H9C6.8578 26 5.10892 24.316 5.0049 22.1996L5 22V8.99999C5 6.85779 6.68397 5.10891 8.80036 5.00488L9 4.99999H22ZM37.2 4.79999L35.6007 6.40015C36.6049 7.73718 37.2 9.39909 37.2 11.2C37.2 13.1833 36.4783 14.998 35.2832 16.3959C35.4887 15.7675 35.6 15.0968 35.6 14.4C35.6 12.2241 34.5141 10.3018 32.8548 9.14547L30.8 11.2V4.79999H37.2Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconDrag.displayName = 'IconDrag';

var _excluded$18 = ["color"];
var IconAdd = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$18);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26 8H22V22H8V26H22V40H26V26H40V22H26V8Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconAdd.displayName = 'IconAdd';

var _excluded$19 = ["color"];
var IconSafety = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$19);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M23.2122 4.16171C23.6594 3.97005 24.159 3.94876 24.6179 4.09782L24.7878 4.16171L38.7878 10.1617C39.4742 10.4559 39.9353 11.1053 39.9937 11.8411L40 12V27.4558C40 32.7216 37.2397 37.5925 32.7443 40.302L32.4421 40.4795L24.9923 44.7365C24.4286 45.0586 23.7474 45.0854 23.1642 44.817L23.0077 44.7365L15.5579 40.4795C10.9859 37.8669 8.12625 33.0537 8.00408 27.8063L8 27.4558V12C8 11.2533 8.41534 10.5736 9.0686 10.2301L9.21216 10.1617L23.2122 4.16171ZM24 8.176L12 13.318V27.4558C12 31.1839 13.8867 34.6421 16.9835 36.6647L17.2599 36.8394L17.5425 37.0065L23.999 40.696L30.4575 37.0065C33.6944 35.1568 35.7609 31.803 35.9806 28.1107L35.9951 27.784L36 27.4558V13.319L24 8.176ZM26.0363 12.9996L25.8859 12.85L22.6186 12.8586L22.469 13.009L22.476 15.851L22.31 15.8864C21.2626 16.1262 20.3873 16.6041 19.6977 17.3148C18.7888 18.2566 18.3278 19.4641 18.3278 20.8969C18.3278 22.2263 18.823 23.2918 19.798 24.0533C20.3482 24.4787 21.0757 24.8 21.9603 25.0104L24.8943 25.6833L25.1796 25.7523C25.546 25.8443 25.8568 25.9358 26.1164 26.026L26.4145 26.1378L26.5686 26.2039C26.762 26.2916 26.9072 26.3771 27.0088 26.4593C27.2383 26.6451 27.3542 26.9707 27.3542 27.4694C27.3542 27.9445 27.1894 28.281 26.8283 28.5472C26.3182 28.9217 25.4913 29.1158 24.3708 29.1158C23.4276 29.1158 22.6751 28.9248 22.1325 28.5525C21.4961 28.1149 21.1882 27.4604 21.1882 26.5306L21.0382 26.3806H18L17.85 26.5306L17.8572 26.8806C17.8861 27.5717 18.0016 28.2082 18.202 28.7763C18.4494 29.4796 18.9054 30.1345 19.5537 30.7206C20.0692 31.1909 20.6217 31.5476 21.1963 31.7803L21.459 31.8783L21.7354 31.966C21.9242 32.021 22.122 32.0691 22.3286 32.1104L22.518 32.144L22.5265 35.0004L22.6769 35.15L25.9442 35.1414L26.0938 34.991L26.086 32.153L26.3157 32.1129C27.135 31.9485 27.8698 31.6729 28.5124 31.2876C29.9969 30.3875 30.7532 29.0091 30.7532 27.2081C30.7532 25.9398 30.3681 24.8838 29.6063 24.0733C28.9591 23.3948 28.0547 22.914 26.9205 22.6417L22.8305 21.7038L22.6465 21.6551C22.3536 21.5691 22.1293 21.4587 21.9755 21.3266C21.8154 21.1913 21.7268 21.0022 21.7268 20.6331C21.7268 19.9567 21.9695 19.5207 22.501 19.2323C22.9286 19.0031 23.5112 18.885 24.232 18.885C25.0332 18.885 25.6943 19.0578 26.2037 19.3972C26.7606 19.7623 27.0161 20.2735 27.0161 21.0316L27.1661 21.1816H30.2043L30.3543 21.0316L30.3487 20.7475C30.3002 19.5305 29.9368 18.4978 29.2666 17.681L29.1097 17.498L28.9288 17.3098C28.245 16.6384 27.3346 16.1759 26.2091 15.9259L26.044 15.892L26.0363 12.9996Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSafety.displayName = 'IconSafety';

var _excluded$1a = ["color"];
var IconPrint = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1a);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M33 5C34.1046 5 35 5.89543 35 7V13H40C41.1046 13 42 13.8954 42 15V33C42 34.1046 41.1046 35 40 35H35V41C35 42.0544 34.1841 42.9182 33.1493 42.9945L33 43H15C13.8954 43 13 42.1046 13 41V35H8C6.89543 35 6 34.1046 6 33V15C6 13.8954 6.89543 13 8 13H13V7C13 5.89543 13.8954 5 15 5H33ZM31 29H17V39H31V29ZM10 17H38V31H35V27C35 25.8954 34.1046 25 33 25H15L14.8507 25.0055C13.8159 25.0818 13 25.9456 13 27V31H10V17ZM33 19C34.1046 19 35 19.8954 35 21C35 22.1046 34.1046 23 33 23C31.8954 23 31 22.1046 31 21C31 19.8954 31.8954 19 33 19ZM17 9H31V13H17V9Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPrint.displayName = 'IconPrint';

var _excluded$1b = ["color"];
var IconToolRotate = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1b);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M39.001 12.3379C35.5244 7.87238 30.0976 5 24 5C13.5066 5 5 13.5066 5 24H9C9 15.7157 15.7157 9 24 9C28.9074 9 33.2644 11.3566 36.001 14.9998L31 15V19H42.5C42.7762 19 43 18.7761 43 18.5V7H39L39.001 12.3379ZM24 43C34.4934 43 43 34.4934 43 24H39C39 32.2842 32.2842 39 24 39C19.093 39 14.7364 36.6438 11.9997 33.001L17 33V29H5.5C5.22386 29 5 29.2238 5 29.5V41H9L8.9996 35.6628C12.4762 40.128 17.9027 43 24 43Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconToolRotate.displayName = 'IconToolRotate';

var _excluded$1c = ["color"];
var IconToolRotateLeft90 = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1c);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M41.5 24C41.5 14.0589 33.4412 6 23.5 6C18.1237 6 13.298 8.35702 9.99974 12.0941L10 7H6V18.5C6 18.7761 6.22386 19 6.5 19H18V15L12.7757 15.0001C15.3438 11.9431 19.195 10 23.5 10C31.232 10 37.5 16.268 37.5 24C37.5 31.732 31.232 38 23.5 38C19.1494 38 15.2622 36.0154 12.6944 32.9022L9.04474 34.7278C12.3252 39.1408 17.5787 42 23.5 42C33.4412 42 41.5 33.9412 41.5 24ZM17.6959 20.5C18.4183 20.5 19.0717 20.6852 19.6561 21.0556C20.2405 21.426 20.6958 21.9496 21.0219 22.6266C21.3479 23.3035 21.516 24.0839 21.526 24.9677V25.7881C21.526 27.0194 21.289 27.948 20.8149 28.8524C20.3409 29.7566 19.737 30.3566 18.8591 30.8418C17.9812 31.3272 16.8858 31.5 15.7169 31.5H15.5589V29.431L16.0405 29.4232C17.7862 29.3364 18.7569 28.8432 18.9526 27.3362C18.4058 27.8369 17.7937 28.0872 17.1165 28.0872C16.1232 28.0872 15.3356 27.7449 14.7537 27.0602C14.1718 26.3756 13.8809 25.6293 13.8809 24.4849C13.8809 23.7697 14.0439 23.1055 14.37 22.4924C14.696 21.8794 15.1538 21.394 15.7432 21.0364C16.3327 20.6788 16.9836 20.5 17.6959 20.5ZM29.4884 21.7415C28.8212 20.919 27.8806 20.5077 26.6666 20.5077C25.4526 20.5077 24.5133 20.9164 23.8486 21.7338C23.1839 22.5512 22.8516 23.7135 22.8516 25.2206V26.7104C22.8516 28.2073 23.1852 29.3671 23.8524 30.1896C24.5196 31.0121 25.4626 31.4234 26.6816 31.4234C27.8907 31.4234 28.8275 31.0147 29.4922 30.1972C30.1569 29.3799 30.4892 28.2176 30.4892 26.7104V25.2283C30.4892 23.7263 30.1556 22.564 29.4884 21.7415ZM34.887 21.1361C34.478 20.7172 33.9928 20.5077 33.4308 20.5077C32.859 20.5077 32.3636 20.7172 31.9448 21.1361C31.5259 21.555 31.3164 22.0633 31.3164 22.6611C31.3164 23.2537 31.5233 23.7556 31.9372 24.1669C32.351 24.5782 32.849 24.7838 33.4308 24.7838C34.0028 24.7838 34.4906 24.5782 34.8944 24.1669C35.2983 23.7556 35.5002 23.2537 35.5002 22.6611C35.5002 22.0633 35.2958 21.555 34.887 21.1361ZM33.4306 21.6802C33.1647 21.6802 32.9402 21.776 32.757 21.9675C32.574 22.1591 32.4824 22.3903 32.4824 22.6611C32.4824 22.9318 32.5764 23.1579 32.7646 23.3393C32.9527 23.5206 33.1747 23.6113 33.4306 23.6113C33.6964 23.6113 33.9146 23.5194 34.0852 23.3354C34.2557 23.1515 34.341 22.9267 34.341 22.6611C34.341 22.3954 34.2558 22.1655 34.0852 21.9714C33.9146 21.7772 33.6964 21.6802 33.4306 21.6802ZM16.6829 23.0748C16.9237 22.6866 17.3241 22.4924 17.6803 22.4924C18.0816 22.4924 18.4002 22.6636 18.6359 23.0059C18.8717 23.3482 19.0006 23.8487 19.0006 24.2796C19.0006 24.7104 18.952 25.0711 18.7864 25.5096C18.6209 25.948 18.1275 26.225 17.7029 26.225C17.2765 26.225 16.9362 26.0526 16.6904 25.7077C16.4446 25.3628 16.3438 25.0673 16.3438 24.4849C16.3438 23.9331 16.4421 23.4631 16.6829 23.0748ZM25.7143 23.0519C25.9125 22.684 26.2298 22.5001 26.6662 22.5001C27.1126 22.5001 27.4388 22.6981 27.6444 23.094C27.8501 23.49 27.953 24.089 27.953 24.8911V27.1012C27.9479 27.9033 27.8426 28.4921 27.637 28.8676C27.4312 29.2432 27.1126 29.431 26.6812 29.431C26.2348 29.431 25.9087 29.238 25.703 28.8524C25.4974 28.4667 25.3945 27.8574 25.3945 27.0246V24.7225C25.4096 23.9766 25.5162 23.4197 25.7143 23.0519ZM12.0224 25.1843V27.1844H7.5V25.1843H12.0224Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconToolRotateLeft90.displayName = 'IconToolRotateLeft90';

var _excluded$1d = ["color"];
var IconToolRotateRight90 = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1d);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M37.5002 12.0941C34.202 8.35702 29.3762 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9412 14.0589 42 24 42C29.9212 42 35.1748 39.1408 38.4552 34.7278L34.8056 32.9022C32.2378 36.0154 28.3506 38 24 38C16.268 38 10 31.732 10 24C10 16.268 16.268 10 24 10C28.305 10 32.1562 11.9431 34.7244 15.0001L29.5 15V19H41C41.2762 19 41.5 18.7761 41.5 18.5V7H37.5L37.5002 12.0941ZM22.1959 20.5C22.9183 20.5 23.5717 20.6852 24.1561 21.0556C24.7406 21.426 25.1958 21.9496 25.5219 22.6266C25.8479 23.3035 26.016 24.0839 26.026 24.9677V25.7881C26.026 27.0194 25.789 27.948 25.3149 28.8524C24.8409 29.7566 24.237 30.3566 23.3591 30.8418C22.4812 31.3272 21.3858 31.5 20.2169 31.5H20.0589V29.431L20.5405 29.4232C22.2862 29.3364 23.2569 28.8432 23.4526 27.3362C22.9058 27.8369 22.2937 28.0872 21.6165 28.0872C20.6232 28.0872 19.8356 27.7449 19.2537 27.0602C18.6718 26.3756 18.3809 25.6293 18.3809 24.4849C18.3809 23.7697 18.5439 23.1055 18.87 22.4924C19.196 21.8794 19.6538 21.394 20.2432 21.0364C20.8327 20.6788 21.4836 20.5 22.1959 20.5ZM33.9884 21.7415C33.3212 20.919 32.3806 20.5077 31.1666 20.5077C29.9526 20.5077 29.0133 20.9164 28.3486 21.7338C27.6839 22.5512 27.3516 23.7135 27.3516 25.2206V26.7104C27.3516 28.2073 27.6852 29.3671 28.3524 30.1896C29.0196 31.0121 29.9627 31.4234 31.1816 31.4234C32.3907 31.4234 33.3275 31.0147 33.9922 30.1972C34.6569 29.3799 34.9892 28.2176 34.9892 26.7104V25.2283C34.9892 23.7263 34.6556 22.564 33.9884 21.7415ZM39.387 21.1361C38.978 20.7172 38.4928 20.5077 37.9308 20.5077C37.359 20.5077 36.8636 20.7172 36.4448 21.1361C36.0259 21.555 35.8164 22.0633 35.8164 22.6611C35.8164 23.2537 36.0233 23.7556 36.4372 24.1669C36.851 24.5782 37.349 24.7838 37.9308 24.7838C38.5028 24.7838 38.9906 24.5782 39.3944 24.1669C39.7983 23.7556 40.0002 23.2537 40.0002 22.6611C40.0002 22.0633 39.7958 21.555 39.387 21.1361ZM37.9306 21.6802C37.6647 21.6802 37.4402 21.776 37.257 21.9675C37.074 22.1591 36.9824 22.3903 36.9824 22.6611C36.9824 22.9318 37.0764 23.1579 37.2646 23.3393C37.4527 23.5206 37.6747 23.6113 37.9306 23.6113C38.1964 23.6113 38.4146 23.5194 38.5852 23.3354C38.7557 23.1515 38.841 22.9267 38.841 22.6611C38.841 22.3954 38.7558 22.1655 38.5852 21.9714C38.4146 21.7772 38.1964 21.6802 37.9306 21.6802ZM21.1829 23.0748C21.4237 22.6866 21.8241 22.4924 22.1803 22.4924C22.5816 22.4924 22.9002 22.6636 23.1359 23.0059C23.3717 23.3482 23.5006 23.8487 23.5006 24.2796C23.5006 24.7104 23.452 25.0711 23.2864 25.5096C23.1209 25.948 22.6275 26.225 22.2029 26.225C21.7765 26.225 21.4362 26.0526 21.1904 25.7077C20.9446 25.3628 20.8438 25.0673 20.8438 24.4849C20.8438 23.9331 20.9421 23.4631 21.1829 23.0748ZM30.2144 23.0519C30.4124 22.684 30.7298 22.5001 31.1662 22.5001C31.6126 22.5001 31.9388 22.6981 32.1444 23.094C32.3501 23.49 32.453 24.089 32.453 24.8911V27.1012C32.4479 27.9033 32.3426 28.4921 32.137 28.8676C31.9312 29.2432 31.6126 29.431 31.1812 29.431C30.7348 29.431 30.4088 29.238 30.203 28.8524C29.9974 28.4667 29.8946 27.8574 29.8946 27.0246V24.7225C29.9096 23.9766 30.0162 23.4197 30.2144 23.0519ZM15.262 23.72L15.2618 25.184L16.7208 25.1843V27.1844L15.2618 27.184L15.262 28.65H13.2619L13.2618 27.184L11.8008 27.1844V25.1843L13.2618 25.184L13.2619 23.72H15.262Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconToolRotateRight90.displayName = 'IconToolRotateRight90';

var _excluded$1e = ["color"];
var IconToolLocked = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1e);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.3139 11.9998C32.3137 7.5817 28.732 3.99998 24.3139 3.99983C19.8956 3.99984 16.3138 7.58162 16.3138 11.9999L16.3138 15.9999C16.3138 18.9607 17.9223 21.5459 20.313 22.9292L20.3138 11.9999C20.3139 9.79071 22.1047 7.99989 24.3138 7.99996L24.5332 8.00587C26.6403 8.11979 28.3139 9.86434 28.3137 12L28.3142 22.9295C30.7052 21.5463 32.3138 18.9609 32.3138 15.9999L32.3139 11.9998ZM24.3144 15.4992C25.419 15.4992 26.3144 16.3946 26.3144 17.4992L26.3145 30.4992C26.3144 31.6038 25.419 32.4992 24.3145 32.4992C23.2098 32.4991 22.3145 31.6038 22.3145 30.4993L22.3145 17.4992C22.3144 16.3946 23.2099 15.4992 24.3144 15.4992ZM20.313 25.0707L20.3138 36.0001C20.3137 38.2091 22.1045 40 24.3138 40C26.5228 40 28.3137 38.2091 28.3137 36L28.314 25.0703C30.7052 26.4537 32.3137 29.0389 32.3137 32L32.3137 36C32.3137 40.4183 28.732 44 24.3137 44C19.8954 44 16.3137 40.4182 16.3137 36L16.3137 32C16.3137 29.0392 17.9222 26.4541 20.313 25.0707Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconToolLocked.displayName = 'IconToolLocked';

var _excluded$1f = ["color"];
var IconToolUnlocked = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1f);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.3139 12.3136C32.3137 7.89548 28.732 4.31376 24.3139 4.31362C19.8956 4.31362 16.3138 7.8954 16.3138 12.3137L16.3138 16.3137C16.3138 19.2745 17.9223 21.8596 20.313 23.243L20.3138 12.3137C20.3139 10.1045 22.1047 8.31368 24.3138 8.31375L24.5332 8.31966C26.6403 8.43357 28.3139 10.1781 28.3137 12.3137L28.3142 23.2433C30.7052 21.8601 32.3138 19.2747 32.3138 16.3137L32.3139 12.3136ZM20.313 25.3845L20.3138 36.3139C20.3137 38.5229 22.1045 40.3137 24.3138 40.3138C26.5228 40.3137 28.3137 38.5229 28.3137 36.3138L28.314 25.3841C30.7052 26.7675 32.3137 29.3527 32.3137 32.3138L32.3137 36.3138C32.3137 40.7321 28.732 44.3138 24.3137 44.3138C19.8954 44.3138 16.3137 40.732 16.3137 36.3137L16.3137 32.3138C16.3137 29.353 17.9222 26.7678 20.313 25.3845Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconToolUnlocked.displayName = 'IconToolUnlocked';

var _excluded$1g = ["color"];
var IconProgress0 = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1g);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M42.3625 28.9139C44.5356 20.8097 41.115 11.9434 33.5032 7.54869C29.918 5.47882 25.9387 4.71012 22.1121 5.09609C19.3597 5.36805 16.78 6.22736 14.4999 7.54693C12.2195 8.861 10.1875 10.6638 8.5769 12.9089C7.25355 14.7457 6.25018 16.8284 5.64845 19.0754C5.04128 21.3312 4.86771 23.6464 5.09749 25.9081C5.37051 28.6507 6.22679 31.2218 7.54049 33.4953C8.85625 35.7822 10.6632 37.8198 12.9147 39.4336C16.0352 41.68 19.8647 43.0032 24.0032 43.0032C32.7984 43.0032 40.1979 37.027 42.3625 28.9139ZM39.0057 24.0032C39.0008 18.8241 36.311 13.7886 31.5032 11.0128C29.1366 9.64646 26.5525 8.99829 24.0032 9.00067V9.00316C23.4997 9.00316 23.002 9.02797 22.5112 9.07643C20.3995 9.28927 18.3467 9.94752 16.5002 11.0116C14.6578 12.0779 13.0634 13.5249 11.8243 15.2449C11.5362 15.6465 11.2651 16.0661 11.0128 16.5032C10.3429 17.6635 9.84563 18.8761 9.51303 20.1112C9.1805 21.3524 9.00319 22.6571 9.00319 24.0032C9.00319 24.5114 9.02846 25.0137 9.07783 25.5089C9.29175 27.6118 9.94736 29.656 11.0056 31.4957C12.0736 33.3444 13.5246 34.9439 15.2502 36.1859C15.5668 36.4128 15.8944 36.629 16.233 36.8339L16.5032 36.9936L16.5019 36.9957C18.7085 38.2724 21.2705 39.0032 24.0032 39.0032C29.5548 39.0032 34.402 35.9872 36.9957 31.5044L36.9936 31.5032C37.6663 30.3379 38.1649 29.12 38.4976 27.8794C38.8016 26.7396 38.9747 25.5465 39 24.317L39.0032 24.0032H39.0057Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconProgress0.displayName = 'IconProgress0';

var _excluded$1h = ["color"];
var IconRetry = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1h);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M6 24C6 14.0589 14.0588 6 24 6C29.3763 6 34.202 8.35702 37.5003 12.0941L37.5 7H41.5V18.5C41.5 18.7761 41.2761 19 41 19H29.5V15L34.7243 15.0001C32.1562 11.9431 28.305 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C28.3506 38 32.2378 36.0154 34.8056 32.9022L38.4553 34.7278C35.1748 39.1408 29.9213 42 24 42C14.0588 42 6 33.9412 6 24Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconRetry.displayName = 'IconRetry';

var _excluded$1i = ["color"];
var IconAsPublic = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1i);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M42 42H5.99999V38H42V42Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M12.5 21V40H8.49999V21H12.5ZM39.5 21V40H35.5V21H39.5ZM22.8466 5.36606C23.5381 4.87798 24.4619 4.87798 25.1534 5.36606L42.1534 17.3661C42.8653 17.8686 43.1699 18.7744 42.9063 19.605 42.6426 20.4357 41.8715 21 41 21H6.99999C6.1285 21 5.35734 20.4357 5.0937 19.605 4.83006 18.7744 5.13465 17.8686 5.84662 17.3661L22.8466 5.36606ZM13.3014 17H34.6985L24 9.44808 13.3014 17Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M17.5 19C17.5 17.8954 18.3954 17 19.5 17H28.5C29.6046 17 30.5 17.8954 30.5 19V39H26.5V21H21.5V39H17.5V19Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconAsPublic.displayName = 'IconAsPublic';

var _excluded$1j = ["color"];
var IconStepBackLine = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1j);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M21.2688 6.15103C22.0177 6.45984 22.5064 7.18992 22.5064 8V15.062C27.8952 15.5213 32.5828 17.7011 36.4882 21.5812C40.8363 25.9011 43.3316 31.2902 43.9894 37.6496C44.0799 38.5244 43.5882 39.3557 42.778 39.6978C41.9678 40.04 41.0292 39.8127 40.4653 39.1378C36.1132 33.9295 32.5761 31.4066 29.8606 30.8418C27.2831 30.3056 24.8344 30.1411 22.5064 30.3326V38C22.5064 38.8198 22.0061 39.5566 21.244 39.859C20.482 40.1614 19.6126 39.9681 19.0505 39.3713L4.54413 23.9701C3.80444 23.1848 3.82089 21.9543 4.5813 21.1891L19.0877 6.59028C19.6587 6.01565 20.5199 5.84221 21.2688 6.15103ZM8.78253 22.636L18.5064 32.9597V28.5615C18.5064 27.5793 19.2196 26.7424 20.1894 26.5868C23.5461 26.0479 27.0467 26.1708 30.6753 26.9256C33.1405 27.4384 35.6646 28.8827 38.2492 31.1026C37.1733 28.6055 35.6458 26.3828 33.669 24.4188L33.6689 24.4188C30.0441 20.8175 25.6894 19.0111 20.4909 18.9708C19.3924 18.9623 18.5064 18.0694 18.5064 16.9709V12.8502L8.78253 22.636Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconStepBackLine.displayName = 'IconStepBackLine';

var _excluded$1k = ["color"];
var IconStepNextLine = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1k);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26.7312 6.15103C25.9823 6.45984 25.4936 7.18992 25.4936 8V15.062C20.1048 15.5213 15.4172 17.7011 11.5118 21.5812C7.16365 25.9011 4.66836 31.2902 4.01061 37.6496C3.92013 38.5244 4.41175 39.3557 5.22196 39.6978C6.03216 40.04 6.9708 39.8127 7.53473 39.1378C11.8868 33.9295 15.4239 31.4066 18.1394 30.8418C20.7169 30.3056 23.1656 30.1411 25.4936 30.3326V38C25.4936 38.8198 25.9939 39.5566 26.756 39.859C27.518 40.1614 28.3874 39.9681 28.9495 39.3713L43.4559 23.9701C44.1956 23.1848 44.1791 21.9543 43.4187 21.1891L28.9123 6.59028C28.3413 6.01565 27.4801 5.84221 26.7312 6.15103ZM39.2175 22.636L29.4936 32.9597V28.5615C29.4936 27.5793 28.7804 26.7424 27.8106 26.5868C24.4539 26.0479 20.9533 26.1708 17.3247 26.9256C14.8595 27.4384 12.3354 28.8827 9.75085 31.1026C10.8267 28.6055 12.3542 26.3828 14.331 24.4188L14.3311 24.4188C17.9559 20.8175 22.3106 19.0111 27.5091 18.9708C28.6076 18.9623 29.4936 18.0694 29.4936 16.9709V12.8502L39.2175 22.636Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconStepNextLine.displayName = 'IconStepNextLine';

var _excluded$1l = ["color"];
var IconZoomIn = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1l);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 22C40 12.6112 32.3888 5 23 5C13.6112 5 6 12.6112 6 22C6 31.3888 13.6112 39 23 39C26.9734 39 30.6284 37.6368 33.5228 35.3527L40.0858 41.9142L42.9142 39.0858L36.3527 32.5228C38.6368 29.6284 40 25.9734 40 22ZM10 22C10 14.8203 15.8203 9 23 9C30.1797 9 36 14.8203 36 22C36 29.1797 30.1797 35 23 35C15.8203 35 10 29.1797 10 22Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M25 14H21V20H15V24H21V30H25V24H31V20H25V14Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconZoomIn.displayName = 'IconZoomIn';

var _excluded$1m = ["color"];
var IconZoomOut = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1m);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 22C40 12.6112 32.3888 5 23 5C13.6112 5 6 12.6112 6 22C6 31.3888 13.6112 39 23 39C26.9734 39 30.6284 37.6368 33.5228 35.3527L40.0858 41.9142L42.9142 39.0858L36.3527 32.5228C38.6368 29.6284 40 25.9734 40 22ZM10 22C10 14.8203 15.8203 9 23 9C30.1797 9 36 14.8203 36 22C36 29.1797 30.1797 35 23 35C15.8203 35 10 29.1797 10 22Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M15 20V24H31V20H15Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconZoomOut.displayName = 'IconZoomOut';

var _excluded$1n = ["color"];
var IconFlipHorizontally = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1n);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M22 8H26V12H22V8ZM22 16H26V20H22V16ZM22 28H26V32H22V28ZM22 36H26V40H22V36ZM43 11.9393C43 11.1444 42.0927 10.7102 41.4951 11.2191L27.3301 23.2798C26.89 23.6546 26.89 24.3454 27.3301 24.7202L41.4951 36.7809C42.0927 37.2898 43 36.8556 43 36.0607V11.9393Z",
    fill: color
  }), React.createElement("path", {
    d: "M5 36.0607C5 36.8556 5.90732 37.2898 6.50494 36.7809L20.6699 24.7202C21.1101 24.3454 21.11 23.6546 20.6699 23.2798L6.50493 11.2191C5.90732 10.7102 5 11.1444 5 11.9393V36.0607ZM8.67016 17.944V30.056L15.7827 24L8.67016 17.944Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconFlipHorizontally.displayName = 'IconFlipHorizontally';

var _excluded$1o = ["color"];
var IconFlipVertically = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1o);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 22 40 26 36 26 36 22 40 22ZM32 22 32 26 28 26 28 22 32 22ZM20 22 20 26 16 26 16 22 20 22ZM12 22 12 26 8 26 8 22 12 22ZM36.0607 43C36.8556 43 37.2898 42.0927 36.7809 41.4951L24.7202 27.3301C24.3454 26.89 23.6546 26.89 23.2798 27.3301L11.2191 41.4951C10.7102 42.0927 11.1444 43 11.9393 43L36.0607 43Z",
    fill: color
  }), React.createElement("path", {
    d: "M11.9393 5C11.1444 5 10.7102 5.90732 11.2191 6.50493L23.2798 20.6699C23.6546 21.11 24.3454 21.11 24.7202 20.6699L36.7809 6.50493C37.2898 5.90732 36.8556 5 36.0607 5L11.9393 5ZM30.056 8.67016L17.944 8.67016L24 15.7827L30.056 8.67016Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconFlipVertically.displayName = 'IconFlipVertically';

var _excluded$1p = ["color"];
var IconAlignLeft = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1p);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M42.0002 22.0003 17 22.0003 17 26.0003 42.0002 26.0003V22.0003ZM7.99979 6.00018 7.99979 42.0002H11.9998L11.9998 6.00018 7.99979 6.00018Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M23 29.5361V18.4639C23 18.0786 22.5494 17.8618 22.2402 18.0984L15.2908 23.4152C14.9031 23.7118 14.9031 24.2882 15.2908 24.5848L22.2402 29.9016C22.5494 30.1382 23 29.9214 23 29.5361Z",
    fill: color
  }));
});
IconAlignLeft.displayName = 'IconAlignLeft';

var _excluded$1q = ["color"];
var IconAlignCenterHorizontally = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1q);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M4.00021 21.9999H17.0002V25.9999H4.00021L4.00021 21.9999ZM43.9998 25.9999H30.9998V21.9999H43.9998L43.9998 25.9999ZM21.9996 42 21.9996 6 25.9996 6 25.9996 42H21.9996Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M36 29.5361V18.4639C36 18.0786 35.5494 17.8618 35.2402 18.0984L28.2908 23.4152C27.9031 23.7118 27.9031 24.2882 28.2908 24.5848L35.2402 29.9016C35.5494 30.1382 36 29.9214 36 29.5361ZM12 29.5361V18.4639C12 18.0786 12.4506 17.8618 12.7598 18.0984L19.7092 23.4152C20.0969 23.7118 20.0969 24.2882 19.7092 24.5848L12.7598 29.9016C12.4506 30.1382 12 29.9214 12 29.5361Z",
    fill: color
  }));
});
IconAlignCenterHorizontally.displayName = 'IconAlignCenterHorizontally';

var _excluded$1r = ["color"];
var IconAlignRight = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1r);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M5.99979 22.0003 31 22.0003 31 26.0003 5.99979 26.0003V22.0003ZM40.0002 6.00018 40.0002 42.0002H36.0002L36.0002 6.00018 40.0002 6.00018Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M25 29.5361V18.4639C25 18.0786 25.4505 17.8618 25.7597 18.0984L32.7092 23.4152C33.0969 23.7118 33.0969 24.2882 32.7092 24.5848L25.7597 29.9016C25.4505 30.1382 25 29.9214 25 29.5361Z",
    fill: color
  }));
});
IconAlignRight.displayName = 'IconAlignRight';

var _excluded$1s = ["color"];
var IconAlignTop = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1s);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M25.9999 42.0004 25.9999 17.0002 21.9999 17.0002 21.9999 42.0004 25.9999 42.0004ZM42 8 5.99998 8 5.99998 12 42 12 42 8Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M18.4641 23.0002L29.5362 23.0002C29.9216 23.0002 30.1383 22.5497 29.9018 22.2404L24.585 15.291C24.2884 14.9033 23.712 14.9033 23.4153 15.291L18.0986 22.2404C17.862 22.5497 18.0788 23.0002 18.4641 23.0002Z",
    fill: color
  }));
});
IconAlignTop.displayName = 'IconAlignTop';

var _excluded$1t = ["color"];
var IconAlignCenterVertically = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1t);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26.0001 4.00018 26.0001 17.0002 22.0001 17.0002 22.0001 4.00018 26.0001 4.00018ZM22.0001 43.9998 22.0001 30.9998 26.0001 30.9998 26.0001 43.9998 22.0001 43.9998ZM6 21.9996 42 21.9996 42 25.9996 6 25.9996 6 21.9996Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M18.4639 36 29.5361 36C29.9214 36 30.1382 35.5494 29.9016 35.2402L24.5848 28.2908C24.2882 27.903 23.7118 27.903 23.4152 28.2908L18.0984 35.2402C17.8618 35.5494 18.0786 36 18.4639 36ZM18.4639 12 29.5361 12C29.9214 12 30.1382 12.4505 29.9016 12.7597L24.5848 19.7092C24.2882 20.0969 23.7118 20.0969 23.4152 19.7092L18.0984 12.7597C17.8618 12.4505 18.0786 12 18.4639 12Z",
    fill: color
  }));
});
IconAlignCenterVertically.displayName = 'IconAlignCenterVertically';

var _excluded$1u = ["color"];
var IconAlignBottom = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1u);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M25.9999 5.99997 25.9999 31.0002 21.9999 31.0002 21.9999 5.99997 25.9999 5.99997ZM42 40.0004 5.99998 40.0004 5.99998 36.0004 42 36.0004 42 40.0004Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M18.4641 25.0002L29.5362 25.0002C29.9216 25.0002 30.1383 25.4507 29.9018 25.7599L24.585 32.7094C24.2884 33.0971 23.712 33.0971 23.4153 32.7094L18.0986 25.7599C17.862 25.4507 18.0788 25.0002 18.4641 25.0002Z",
    fill: color
  }));
});
IconAlignBottom.displayName = 'IconAlignBottom';

var _excluded$1v = ["color"];
var IconTailoring = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1v);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M11 35V5H15V33H43V37H13C11.8954 37 11 36.1046 11 35Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M33 15H21V11H35C36.1046 11 37 11.8954 37 13V27H33V15ZM5 11H13V15H5V11ZM37 35V43H33V35H37Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTailoring.displayName = 'IconTailoring';

var _excluded$1w = ["color"];
var IconPaste = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1w);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M30 13C31.5977 13 32.9037 14.2489 32.9949 15.8237L33 16V40C33 41.5977 31.7511 42.9037 30.1763 42.9949L30 43H10C8.40232 43 7.09634 41.7511 7.00509 40.1763L7 40V16C7 14.4023 8.24892 13.0963 9.82373 13.0051L10 13H30ZM29 39V17H11V39H29ZM23.5625 9H20V5H23.5625V9ZM33.0625 9H25.9375V5H33.0625V9ZM37 9H35.4375V5H39C40.1046 5 41 5.89543 41 7V9H37ZM37 16.6667V10.9167H41V16.6667H37ZM37 24.3333V18.5833H41V24.3333H37ZM37 30V26.25H41V30H37Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPaste.displayName = 'IconPaste';

var _excluded$1x = ["color"];
var IconSendBckward = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1x);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.0395 35.4905L25.3336 41.4905C24.5661 42.1772 23.4026 42.1688 22.6451 41.4711L16.1308 35.4711L18.8407 32.5289L24.0195 37.2989L29.3723 32.5095L32.0395 35.4905Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M26 19V38H22V19H26Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M25.1534 6.36606C24.4619 5.87798 23.5381 5.87798 22.8466 6.36606L5.84664 18.3661C5.3497 18.7168 5.03941 19.2747 5.0035 19.8819C4.96758 20.4891 5.20995 21.0797 5.66208 21.4866L10.3475 25.7034L13.3379 23.0134L10.2 20.1893L24 10.4481L37.8 20.1893L34.6621 23.0134L37.6748 25.6834L42.3379 21.4866C42.7901 21.0797 43.0324 20.4891 42.9965 19.8819C42.9606 19.2747 42.6503 18.7168 42.1534 18.3661L25.1534 6.36606Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSendBckward.displayName = 'IconSendBckward';

var _excluded$1y = ["color"];
var IconBringForward = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1y);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.0395 12.5095L25.3336 6.50952C24.5661 5.8228 23.4026 5.83119 22.6451 6.52891L16.1308 12.5289L18.8407 15.4711L24.0195 10.7011L29.3723 15.4905L32.0395 12.5095Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M26 29V10H22V29H26Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M25.1534 41.6339C24.4619 42.122 23.5381 42.122 22.8466 41.6339L5.84664 29.6339C5.3497 29.2832 5.03941 28.7253 5.0035 28.1181C4.96758 27.5109 5.20995 26.9203 5.66208 26.5134L10.3475 22.2966L13.3379 24.9866L10.2 27.8107L24 37.5519L37.8 27.8107L34.6621 24.9866L37.6748 22.3166L42.3379 26.5134C42.7901 26.9203 43.0324 27.5109 42.9965 28.1181C42.9606 28.7253 42.6503 29.2832 42.1534 29.6339L25.1534 41.6339Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconBringForward.displayName = 'IconBringForward';

var _excluded$1z = ["color"];
var IconSendToBack = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1z);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.0395 37.4905L25.3336 43.4905C24.5661 44.1772 23.4026 44.1688 22.645 43.4711L16.1308 37.4711L18.8407 34.5289L24.0195 39.2989L29.3723 34.5095L32.0395 37.4905Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M26 25V40H22V25H26Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M25.1534 13.418C24.4619 12.9299 23.5381 12.9299 22.8466 13.418L5.84664 25.418C5.3497 25.7688 5.03941 26.3266 5.0035 26.9339C4.96758 27.5411 5.20995 28.1316 5.66208 28.5385L10.3475 32.7554L13.3379 30.0654L10.2 27.2412L24 17.5L37.8 27.2412L34.6621 30.0654L37.6748 32.7354L42.3379 28.5385C42.7901 28.1316 43.0324 27.5411 42.9965 26.9339C42.9606 26.3266 42.6503 25.7688 42.1534 25.418L25.1534 13.418Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M25.1534 5.36613C24.4619 4.87804 23.5381 4.87804 22.8466 5.36613L5.84664 17.3661C5.3497 17.7169 5.03941 18.2748 5.0035 18.882C4.96758 19.4892 5.20995 20.0797 5.66208 20.4866L10.3475 24.7035L13.3379 22.0135L10.2 19.1893L24 9.44814L37.8 19.1893L34.6621 22.0135L37.6748 24.6835L42.3379 20.4866C42.7901 20.0797 43.0324 19.4892 42.9965 18.882C42.9606 18.2748 42.6503 17.7169 42.1534 17.3661L25.1534 5.36613Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSendToBack.displayName = 'IconSendToBack';

var _excluded$1A = ["color"];
var IconBringToFront = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1A);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.0395 10.5096L25.3336 4.50961C24.5661 3.82289 23.4026 3.83128 22.645 4.52899L16.1308 10.529L18.8407 13.4712L24.0195 8.7012L29.3723 13.4906L32.0395 10.5096Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M26 23.0001V8.00008H22V23.0001H26Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M25.1534 34.5821C24.4619 35.0701 23.5381 35.0701 22.8466 34.5821L5.84664 22.5821C5.3497 22.2313 5.03941 21.6734 5.0035 21.0662C4.96758 20.459 5.20995 19.8684 5.66208 19.4615L10.3475 15.2447L13.3379 17.9347L10.2 20.7589L24 30.5L37.8 20.7589L34.6621 17.9347L37.6748 15.2647L42.3379 19.4615C42.7901 19.8684 43.0324 20.459 42.9965 21.0662C42.9606 21.6734 42.6503 22.2313 42.1534 22.5821L25.1534 34.5821Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M25.1534 42.6339C24.4619 43.122 23.5381 43.122 22.8466 42.6339L5.84664 30.6339C5.3497 30.2832 5.03941 29.7253 5.0035 29.1181C4.96758 28.5109 5.20995 27.9203 5.66208 27.5134L10.3475 23.2966L13.3379 25.9866L10.2 28.8107L24 38.5519L37.8 28.8107L34.6621 25.9866L37.6748 23.3166L42.3379 27.5134C42.7901 27.9203 43.0324 28.5109 42.9965 29.1181C42.9606 29.7253 42.6503 30.2832 42.1534 30.6339L25.1534 42.6339Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconBringToFront.displayName = 'IconBringToFront';

var _excluded$1B = ["color"];
var IconHand = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1B);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M23.7034 7.78924C22.8039 7.78924 22.2043 8.62035 22.2043 9.31558V25.5H19.0324V13.7904C19.0324 13.0667 18.4655 12.3 17.6286 12.3C16.7243 12.3 16.1487 13.0668 16.1487 13.7904V27.5L12.9752 28.6634L10.8315 26.1327C10.3624 25.5788 9.52446 25.5322 8.99674 26.0306C8.54791 26.4545 8.4704 27.1403 8.8133 27.6537L13.5707 34.7762C15.8342 38.1651 19.6404 40.2 23.7158 40.2H27.0493C30.664 40.2 33.9535 38.1124 35.4927 34.8418C35.8782 34.0225 36.0781 33.1281 36.0781 32.2226V17.5C36.0781 16.9631 35.6406 16.3 35.0243 16.3C34.2199 16.3 33.8781 16.9631 33.8781 17.5V25.5L30.8781 25.5V13.5622C30.8781 12.9969 30.4627 12.3 29.6671 12.3C28.8714 12.3 28.4252 12.9969 28.4252 13.5622V25.5H25.1207V9.31557C25.1207 8.62035 24.521 7.78924 23.7034 7.78924ZM28.4809 8.81505C28.3539 6.24486 26.2298 4.20001 23.6281 4.20001C21.0053 4.20001 18.8678 6.27817 18.7726 8.8777C18.3545 8.7619 17.9139 8.70002 17.459 8.70002C14.7471 8.70004 12.5487 10.8984 12.5487 13.6103V22.8898C10.7143 21.6761 8.20881 21.823 6.5249 23.4133C4.79943 25.0429 4.50143 27.6796 5.81966 29.6532L10.577 36.7758C13.5085 41.1647 18.4379 43.8 23.7158 43.8H27.0493C32.0585 43.8 36.6171 40.9071 38.75 36.3747C39.3612 35.0758 39.6781 33.6581 39.6781 32.2226V17.2721C39.6781 14.747 37.6312 12.7 35.1061 12.7C34.7625 12.7 34.4277 12.7379 34.1057 12.8098C33.8502 10.4981 31.8903 8.70001 29.5104 8.70001C29.1566 8.70001 28.812 8.73977 28.4809 8.81505Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconHand.displayName = 'IconHand';

var _excluded$1C = ["color"];
var IconFile = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1C);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M36 16.164V39L12 39L12 9H15.2258V10.0857V18.3714C15.2258 20.5806 17.0167 22.3714 19.2258 22.3714H23.6129C25.8221 22.3714 27.6129 20.5806 27.6129 18.3714V10.0857V9H30.324L36 16.164ZM8 9C8 6.79086 9.79086 5 12 5H30.324C31.5457 5 32.7005 5.55836 33.4592 6.51596L39.1352 13.6799C39.6953 14.3868 40 15.2622 40 16.164V39C40 41.2091 38.2091 43 36 43H12C9.79086 43 8 41.2091 8 39V9ZM19.2258 10.0857H23.6129V18.3714H19.2258V10.0857Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconFile.displayName = 'IconFile';

var _excluded$1D = ["color"];
var IconClear = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1D);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M15.9207 12.5827C16.722 12.0776 17.7663 12.1945 18.4362 12.8643L35.1357 29.5638C35.8055 30.2336 35.9224 31.2779 35.4172 32.0793L28.4991 43.0535C28.1702 43.5751 27.6219 43.9188 27.0091 43.9874C26.3963 44.056 25.7855 43.842 25.3495 43.406L4.594 22.6505C4.15797 22.2144 3.94401 21.6037 4.0126 20.9909C4.08119 20.3781 4.42487 19.8297 4.94652 19.5009L15.9207 12.5827ZM16.7135 16.8776L9.2575 21.5779L26.422 38.7425L31.1223 31.2865L16.7135 16.8776Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M35.818 9.97997 30.732 15.066C30.3517 15.4463 29.8359 15.66 29.298 15.66 28.7602 15.66 28.2443 15.4463 27.864 15.066L21.694 8.89603 18.081 12.5091 35.4909 29.919 39.104 26.3059 32.934 20.136C32.5537 19.7556 32.34 19.2398 32.34 18.702 32.34 18.1641 32.5537 17.6483 32.934 17.2679L38.02 12.1819 35.818 9.97997ZM37.2521 5.67793 42.3221 10.7479C42.7024 11.1283 42.916 11.6441 42.916 12.1819 42.916 12.7198 42.7024 13.2356 42.3221 13.616L37.236 18.702 43.406 24.8719C44.198 25.6639 44.198 26.948 43.406 27.74L36.9249 34.2211C36.1329 35.013 34.8489 35.013 34.0569 34.2211L13.7789 13.9431C12.987 13.1511 12.987 11.8671 13.7789 11.0751L20.26 4.59399C20.6404 4.21366 21.1562 4 21.694 4 22.2319 4 22.7477 4.21366 23.1281 4.59399L29.298 10.7639 34.384 5.67793C35.176 4.88595 36.4601 4.88595 37.2521 5.67793ZM10.9983 25.8089 16.3334 21.7255 18.7986 24.9464 13.4635 29.0298 10.9983 25.8089Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconClear.displayName = 'IconClear';

var _excluded$1E = ["color"];
var IconImageError = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1E);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M41.9949 8.82373C41.9037 7.24892 40.5977 6 39 6H9L8.82373 6.00509C7.24892 6.09634 6 7.40232 6 9V39L6.00509 39.1763C6.09634 40.7511 7.40232 42 9 42H27V38H10V10H38V27H42V9L41.9949 8.82373ZM35 17V27H31L27 31V35H13V33L21 24L25 28L35 17ZM19 19V13H13V19H19Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M33.1716 36L29.636 39.5355L32.4645 42.364L36 38.8284L39.5355 42.364L42.364 39.5355L38.8284 36L42.364 32.4645L39.5355 29.636L36 33.1716L32.4645 29.636L29.636 32.4645L33.1716 36Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconImageError.displayName = 'IconImageError';

var _excluded$1F = ["color"];
var IconAiRecognition = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1F);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M40 42H32V38H38V32H42V40C42 41.1046 41.1046 42 40 42ZM10 38V32H6V40C6 41.1046 6.89543 42 8 42H16L16 38H10ZM10 10H16L16 6H8C6.89543 6 6 6.89543 6 8V16H10V10ZM38 10V16H42V8C42 6.89543 41.1046 6 40 6H32V10H38ZM20.2 16H22.9778V12.5H21.7C20.8716 12.5 20.2 13.1716 20.2 14V16ZM24.7 16H29.8111V12.5H24.7V16ZM35.0056 14.25V17.5H31.5056V12.5H33.2556C34.2221 12.5 35.0056 13.2835 35.0056 14.25ZM31.5056 19.0833V23.9167H35.0056V19.0833H31.5056ZM31.5056 25.5V29.5H33.5056C34.334 29.5 35.0056 28.8284 35.0056 28V25.5H31.5056ZM15.2 18.25C14.2335 18.25 13.45 19.0335 13.45 20V33.25C13.45 34.2165 14.2335 35 15.2 35H27.2C28.1665 35 28.95 34.2165 28.95 33.25V20C28.95 19.0335 28.1665 18.25 27.2 18.25H15.2ZM16.95 31.5V21.75H25.45V31.5H16.95Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconAiRecognition.displayName = 'IconAiRecognition';

var _excluded$1G = ["color"];
var IconCornerLeftUp = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1G);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M16.5858 8.58579C17.3668 7.80474 18.6332 7.80474 19.4142 8.58579L27.4142 16.5858L24.5858 19.4142L18 12.8284L11.4142 19.4142L8.58578 16.5858L16.5858 8.58579Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M20 10V33C20 33.5523 20.4477 34 21 34H40V38H21C18.2385 38 16 35.7615 16 33V10H20Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconCornerLeftUp.displayName = 'IconCornerLeftUp';

var _excluded$1H = ["color"];
var IconComputer = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1H);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M5 10C5 7.79086 6.79086 6 9 6H39C41.2091 6 43 7.79086 43 10V32C43 34.2091 41.2091 36 39 36H9C6.79086 36 5 34.2091 5 32V10ZM39 10H9V32H39V10Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M14 39H34V43H14V39ZM22 35H26V39H22V35Z",
    fill: color
  }));
});
IconComputer.displayName = 'IconComputer';

var _excluded$1I = ["color"];
var IconMobile = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1I);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M10 9C10 6.79086 11.7909 5 14 5H34C36.2091 5 38 6.79086 38 9V39C38 41.2091 36.2091 43 34 43H14C11.7909 43 10 41.2091 10 39V9ZM34 9H14V39H34V9Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M22 32H26V36H22V32Z",
    fill: color
  }));
});
IconMobile.displayName = 'IconMobile';

var _excluded$1J = ["color"];
var IconRead = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1J);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M27 6H9L8.82373 6.00509C7.24892 6.09634 6 7.40232 6 9V39L6.00509 39.1763C6.09634 40.7511 7.40232 42 9 42H39L39.1763 41.9949C40.7511 41.9037 42 40.5977 42 39V26H38V38H10V10H27V6Z",
    fill: color
  }), React.createElement("path", {
    d: "M41.5298 11.7883L25.5298 30.7883C25.169 31.2167 24.6451 31.4742 24.0855 31.4982C23.5259 31.5221 22.9819 31.3103 22.5858 30.9142L13.0858 21.4142L15.9142 18.5858L23.8736 26.5452L38.4702 9.21173L41.5298 11.7883Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconRead.displayName = 'IconRead';

var _excluded$1K = ["color"];
var IconHourglass = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1K);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M39 9H9V5H39V9ZM39 43H9V39H39V43Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M14.7316 39H33.2679C32.1786 34.695 30.8626 31.528 29.3824 29.393C27.6796 26.9369 25.8884 26.0017 23.9983 26C22.1098 25.9984 20.32 26.9303 18.6176 29.3859C17.1373 31.5211 15.821 34.6903 14.7316 39ZM15.3303 27.1069C17.5564 23.8959 20.4506 21.9969 24.0017 22C27.5512 22.0031 30.444 23.9036 32.6697 27.1141C34.8537 30.2642 36.5101 34.8116 37.7417 40.5826C37.8677 41.173 37.7202 41.7887 37.3405 42.258C36.9608 42.7273 36.3894 43 35.7857 43H12.2143C11.6107 43 11.0393 42.7274 10.6596 42.2581C10.2799 41.7889 10.1324 41.1733 10.2583 40.5829C11.4898 34.8074 13.1461 30.2574 15.3303 27.1069Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M10.6595 5.74199C11.0392 5.27268 11.6106 5 12.2143 5H35.7857C36.3893 5 36.9607 5.27263 37.3404 5.74186C37.7201 6.21109 37.8676 6.82672 37.7417 7.41708C36.5102 13.1926 34.8539 17.7426 32.6697 20.8931C30.4436 24.1041 27.5494 26.0031 23.9983 26C20.4488 25.9969 17.556 24.0964 15.3303 20.8859C13.1463 17.7358 11.4899 13.1884 10.2583 7.41742C10.1323 6.82702 10.2798 6.2113 10.6595 5.74199ZM14.7321 9C15.8214 13.305 17.1374 16.472 18.6175 18.607C20.3204 21.0631 22.1116 21.9983 24.0017 22C25.8902 22.0017 27.68 21.0697 29.3824 18.6141C30.8627 16.4789 32.179 13.3097 33.2684 9H14.7321Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconHourglass.displayName = 'IconHourglass';

var _excluded$1L = ["color"];
var IconVerification = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1L);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M33 14C33 9.02944 28.9706 5 24 5C19.0294 5 15 9.02944 15 14C15 18.9706 19.0294 23 24 23C28.9706 23 33 18.9706 33 14ZM24 9C21.2386 9 19 11.2386 19 14C19 16.7614 21.2386 19 24 19C26.7614 19 29 16.7614 29 14C29 11.2386 26.7614 9 24 9Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M5 42V37C5 30.4745 10.2085 25.1656 16.695 25.0038L17 25H23V29H17C12.6651 29 9.13546 32.4478 9.00381 36.7508L9 37V38H23V42H5Z",
    fill: color
  }), React.createElement("path", {
    d: "M33.5 43C38.7467 43 43 38.7467 43 33.5C43 28.2533 38.7467 24 33.5 24C28.2533 24 24 28.2533 24 33.5C24 38.7467 28.2533 43 33.5 43ZM33.7358 38.1578L39.9122 31.1578L37.2878 28.8422L32.3651 34.4212L29.8584 31.8274L27.3416 34.2596L31.1651 38.2161C31.5044 38.5672 31.975 38.7606 32.4632 38.7495C32.9514 38.7385 33.4127 38.524 33.7358 38.1578Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconVerification.displayName = 'IconVerification';

var _excluded$1M = ["color"];
var IconPuzzle = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1M);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M22.5 8C20.567 8 19 9.567 19 11.5C19 11.6085 19.0049 11.7154 19.0143 11.8205C19.0648 12.3799 18.8776 12.9347 18.4987 13.3493C18.1198 13.7638 17.5841 14 17.0224 14H10.5V38.5H15.15C15.8449 35.0766 18.8716 32.5 22.5 32.5C26.1284 32.5 29.1551 35.0766 29.85 38.5H34V31.4776C34 30.9159 34.2362 30.3802 34.6507 30.0013C35.0653 29.6224 35.6201 29.4352 36.1795 29.4857C36.2846 29.4951 36.3914 29.5 36.5 29.5C38.433 29.5 40 27.933 40 26C40 24.067 38.433 22.5 36.5 22.5C36.3915 22.5 36.2846 22.5049 36.1795 22.5144C35.6201 22.5648 35.0653 22.3776 34.6507 21.9987C34.2362 21.6198 34 21.0841 34 20.5224V14H27.9776C27.4159 14 26.8802 13.7638 26.5013 13.3493C26.1224 12.9347 25.9352 12.3799 25.9857 11.8205C25.9951 11.7154 26 11.6086 26 11.5C26 9.567 24.433 8 22.5 8ZM15.15 10C15.8449 6.57664 18.8716 4 22.5 4C26.1284 4 29.1551 6.57664 29.85 10H36C37.1046 10 38 10.8954 38 12V18.65C41.4234 19.3449 44 22.3716 44 26C44 29.6284 41.4234 32.6551 38 33.35V40.5C38 41.6046 37.1046 42.5 36 42.5H27.9776C27.4159 42.5 26.8802 42.2638 26.5013 41.8493C26.1224 41.4347 25.9352 40.8799 25.9857 40.3205C25.9951 40.2154 26 40.1086 26 40C26 38.067 24.433 36.5 22.5 36.5C20.567 36.5 19 38.067 19 40C19 40.1085 19.0049 40.2154 19.0143 40.3205C19.0648 40.8799 18.8776 41.4347 18.4987 41.8493C18.1198 42.2638 17.5841 42.5 17.0224 42.5H8.5C7.39543 42.5 6.5 41.6046 6.5 40.5V12C6.5 10.8954 7.39543 10 8.5 10H15.15Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPuzzle.displayName = 'IconPuzzle';

var _excluded$1N = ["color"];
var IconFeedback = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1N);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M18.5455 33C19.6724 33 20.7471 33.4754 21.5052 34.3093L24 37.0536L26.4948 34.3093C27.2529 33.4754 28.3276 33 29.4545 33H39V12H9V33H18.5455ZM5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V35C43 36.1046 42.1046 37 41 37H29.4545L24.7399 42.1861C24.3432 42.6225 23.6568 42.6225 23.2601 42.1861L18.5455 37H7C5.89543 37 5 36.1046 5 35V10Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M15 16H33V20H15V16ZM15 24H23V28H15V24Z",
    fill: color
  }));
});
IconFeedback.displayName = 'IconFeedback';

var _excluded$1O = ["color"];
var IconMyProduct = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1O);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24.6248 13.8844C24.3659 13.3719 23.6341 13.3719 23.3752 13.8844L21.7417 17.1182L18.2447 17.7648C17.7035 17.8649 17.4842 18.5217 17.8567 18.9269L20.0288 21.2897C20.2298 21.5084 20.3232 21.805 20.2837 22.0994L19.8518 25.3199C19.7766 25.8802 20.3624 26.2939 20.8653 26.0357L24 24.4262L27.1347 26.0357C27.6376 26.2939 28.2233 25.8802 28.1482 25.3199L27.654 21.6348L30.1433 18.9269C30.5158 18.5217 30.2965 17.8649 29.7552 17.7648L26.2583 17.1182L24.6248 13.8844Z",
    fill: color
  }), React.createElement("path", {
    d: "M12.5 5C9.73858 5 7.5 7.23858 7.5 10V41C7.5 41.6877 7.85327 42.3271 8.43541 42.6931C9.01755 43.0592 9.74691 43.1005 10.3666 42.8025L24 36.007L37.6334 42.8025C38.2531 43.1005 38.9825 43.0592 39.5646 42.6931C40.1467 42.3271 40.5 41.6877 40.5 41V10C40.5 7.23858 38.2614 5 35.5 5H12.5ZM11.5 10C11.5 9.44772 11.9477 9 12.5 9H35.5C36.0523 9 36.5 9.44772 36.5 10V37.8192L24.8666 31.9854C24.3189 31.722 23.6811 31.722 23.1334 31.9854L11.5 37.8192V10Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconMyProduct.displayName = 'IconMyProduct';

var _excluded$1P = ["color"];
var IconPlusCircleLine = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1P);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 5C34.4934 5 43 13.5066 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5ZM24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9ZM26 22V16H22V22H16V26H22V32H26V26H32V22H26Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPlusCircleLine.displayName = 'IconPlusCircleLine';

var _excluded$1Q = ["color"];
var IconCheckCircleLine = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1Q);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 5C34.4934 5 43 13.5066 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5ZM24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9ZM34.4142 19.4142L31.5858 16.5858L22 26.171L16.4142 20.5858L13.5858 23.4142L22 31.8284L34.4142 19.4142Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconCheckCircleLine.displayName = 'IconCheckCircleLine';

var _excluded$1R = ["color"];
var IconErrorCircleLine = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1R);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 5C34.4934 5 43 13.5066 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5ZM24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9ZM31.0711 19.7574L28.2426 16.9289L24 21.1716L19.7574 16.9289L16.9289 19.7574L21.1716 24L16.9289 28.2426L19.7574 31.0711L24 26.8284L28.2426 31.0711L31.0711 28.2426L26.8284 24L31.0711 19.7574Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconErrorCircleLine.displayName = 'IconErrorCircleLine';

var _excluded$1S = ["color"];
var IconExclamationCircleLine = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1S);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24ZM9 24C9 15.7157 15.7157 9 24 9C32.2843 9 39 15.7157 39 24C39 32.2843 32.2843 39 24 39C15.7157 39 9 32.2843 9 24ZM22 30V34H26V30H22ZM22 28V14H26V28H22Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconExclamationCircleLine.displayName = 'IconExclamationCircleLine';

var _excluded$1T = ["color"];
var IconQuestionCircleLine = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1T);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24ZM9 24C9 15.7157 15.7157 9 24 9C32.2843 9 39 15.7157 39 24C39 32.2843 32.2843 39 24 39C15.7157 39 9 32.2843 9 24ZM26 31V35H22V31H26ZM30.2889 21.8944C32.216 18.0402 29.4439 13 24 13C19.5621 13 17 15.5621 17 20H21L21.0024 19.7888C21.0513 17.7223 21.8431 17 24 17C26.3561 17 27.3554 18.817 26.7111 20.1056C26.6368 20.2542 26.5132 20.4258 26.3232 20.6381L26.1106 20.8646C26.0319 20.945 25.9452 21.0306 25.8499 21.1221L25.5374 21.4146L24.7882 22.0944L24.3178 22.5358C22.681 24.1101 22 25.2314 22 27V29H26V27L26.0028 26.937C26.0239 26.7029 26.1639 26.4311 26.4935 26.0461L26.6926 25.8244L26.9318 25.5776L27.2138 25.3028L27.541 24.9974L28.4869 24.1345C29.3595 23.3142 29.8941 22.684 30.2889 21.8944Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconQuestionCircleLine.displayName = 'IconQuestionCircleLine';

var _excluded$1U = ["color"];
var IconTextBold = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1U);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24.5 7C29.7467 7 34 11.2533 34 16.5C34 18.7615 33.2098 20.8385 31.8904 22.4698L31.792 22.586L31.8415 22.6043C35.3597 23.9265 37.8857 27.276 37.9962 31.2295L38 31.5C38 36.6562 33.8921 40.853 28.7705 40.9962L28.5 41H15C13.4023 41 12.0963 39.7511 12.0051 38.1763L12 38V10C12 8.40232 13.2489 7.09634 14.8237 7.00509L15 7H24.5ZM16 37H28.5C31.5376 37 34 34.5376 34 31.5C34 28.5365 31.6562 26.1205 28.7212 26.0044L28.5 26H16V37ZM24.5 22H16V11H24.5L24.7212 11.0044C27.6562 11.1205 30 13.5365 30 16.5C30 19.5376 27.5376 22 24.5 22Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTextBold.displayName = 'IconTextBold';

var _excluded$1V = ["color"];
var IconTextItalic = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1V);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M35 7V11H28.639L23.439 37H30V41H13V37H19.359L24.559 11H18V7H35Z",
    fill: color
  }));
});
IconTextItalic.displayName = 'IconTextItalic';

var _excluded$1W = ["color"];
var IconTextUnderline = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1W);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M15 22V6H11V22L11.0036 22.3069C11.1666 29.3448 16.9229 35 24 35C31.1797 35 37 29.1797 37 22V6H33V22L32.9962 22.2654C32.8558 27.1132 28.8818 31 24 31C19.0294 31 15 26.9706 15 22ZM38 42V38H10V42H38Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTextUnderline.displayName = 'IconTextUnderline';

var _excluded$1X = ["color"];
var IconTextUnorderedList = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1X);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M6 10H10V14H6V10ZM14 10H42V14H14V10ZM6 22H10V26H6V22ZM14 22H42V26H14V22ZM6 34H10V38H6V34ZM14 34H42V38H14V34Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTextUnorderedList.displayName = 'IconTextUnorderedList';

var _excluded$1Y = ["color"];
var IconTextOrderedList = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1Y);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M14 10H42V14H14V10ZM14 22H42V26H14V22ZM14 34H42V38H14V34ZM8.49023 16H6.6748V10.2207L4.8916 10.7417V9.3667L8.32373 8.17969H8.49023V16ZM9.93506 28H4.47803V26.8184L6.9917 24.1758C7.61117 23.4704 7.9209 22.91 7.9209 22.4946C7.9209 22.158 7.84749 21.902 7.70068 21.7266C7.55387 21.5511 7.34082 21.4634 7.06152 21.4634C6.78581 21.4634 6.56201 21.5806 6.39014 21.8152C6.21826 22.0497 6.13232 22.3424 6.13232 22.6934H4.31689C4.31689 22.2135 4.43685 21.7704 4.67676 21.364C4.91667 20.9576 5.24967 20.6398 5.67578 20.4106C6.10189 20.1815 6.57812 20.0669 7.10449 20.0669C7.94954 20.0669 8.60034 20.262 9.05688 20.6523C9.51343 21.0426 9.7417 21.603 9.7417 22.3335C9.7417 22.6414 9.68441 22.9413 9.56982 23.2332C9.45524 23.525 9.2771 23.8311 9.0354 24.1516C8.85413 24.392 8.58977 24.6933 8.24232 25.0555L7.86719 25.438L6.85742 26.6035H9.93506V28ZM6.13232 35.3325H6.98633C7.66309 35.3325 8.00146 35.0013 8.00146 34.3389C8.00146 34.0811 7.9209 33.8707 7.75977 33.7078C7.59863 33.5448 7.37126 33.4634 7.07764 33.4634C6.83773 33.4634 6.62915 33.5332 6.4519 33.6729C6.27466 33.8125 6.18604 33.9862 6.18604 34.1938H4.37598C4.37598 33.7821 4.49056 33.415 4.71973 33.0928C4.94889 32.7705 5.26668 32.519 5.6731 32.3381C6.07951 32.1573 6.5262 32.0669 7.01318 32.0669C7.8833 32.0669 8.56722 32.2656 9.06494 32.6631C9.56266 33.0605 9.81152 33.6066 9.81152 34.3013C9.81152 34.6379 9.70858 34.9556 9.50269 35.2546C9.29679 35.5536 8.99691 35.7962 8.60303 35.9824C9.01839 36.1328 9.34424 36.3611 9.58057 36.6672C9.81689 36.9734 9.93506 37.3521 9.93506 37.8032C9.93506 38.5015 9.6665 39.0601 9.12939 39.479C8.59229 39.8979 7.88688 40.1074 7.01318 40.1074C6.50114 40.1074 6.0258 40.0098 5.58716 39.8147C5.14852 39.6195 4.81641 39.3492 4.59082 39.0037C4.36523 38.6581 4.25244 38.2651 4.25244 37.8247H6.07324C6.07324 38.0646 6.16992 38.2723 6.36328 38.4478C6.55664 38.6232 6.79476 38.7109 7.07764 38.7109C7.39632 38.7109 7.65055 38.6223 7.84033 38.4451C8.03011 38.2678 8.125 38.0413 8.125 37.7656C8.125 37.3717 8.02653 37.0924 7.82959 36.9277C7.63265 36.763 7.36051 36.6807 7.01318 36.6807H6.13232V35.3325Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTextOrderedList.displayName = 'IconTextOrderedList';

var _excluded$1Z = ["color"];
var IconTextAlignLeft = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1Z);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M5 7H43V11H5V7ZM5 17H25V21H5V17ZM5 37H25V41H5V37ZM5 27H39V31H5V27Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTextAlignLeft.displayName = 'IconTextAlignLeft';

var _excluded$1_ = ["color"];
var IconTextAlignCenter = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1_);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M5 7H43V11H5V7ZM14 17H34V21H14V17ZM14 37H34V41H14V37ZM7 27H41V31H7V27Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTextAlignCenter.displayName = 'IconTextAlignCenter';

var _excluded$1$ = ["color"];
var IconTextAlignRight = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1$);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M43 7H5V11H43V7ZM43 17H23V21H43V17ZM43 37H23V41H43V37ZM43 27H9V31H43V27Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTextAlignRight.displayName = 'IconTextAlignRight';

var _excluded$20 = ["color"];
var IconExpandWindow = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$20);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M18 11.5858L20.8284 14.4142L11.2432 24L20.8284 33.5858L18 36.4142L5.58578 24L18 11.5858ZM31.4142 11.5858L28.5858 14.4142L38.171 24L28.5858 33.5858L31.4142 36.4142L43.8284 24L31.4142 11.5858Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconExpandWindow.displayName = 'IconExpandWindow';

var _excluded$21 = ["color"];
var IconMenuFold = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$21);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M6.2 13H42.2V9H6.2V13ZM5.4 23.8L15.9 30.6V17L5.4 23.8ZM6.2 39H42.2V35H6.2V39ZM42.2 26H22.2V22H42.2V26Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconMenuFold.displayName = 'IconMenuFold';

var _excluded$22 = ["color"];
var IconMenuUnFold = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$22);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M6 13H42V9H6V13ZM16.5 24L6 17.2V30.8L16.5 24ZM6 39H42V35H6V39ZM42 26H22V22H42V26Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconMenuUnFold.displayName = 'IconMenuUnFold';

var _excluded$23 = ["color"];
var IconAttributeX = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$23);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M34.4 41.2L10.4 9.19999L13.6 6.79999L37.6 38.8L34.4 41.2Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M13.6 41.2L37.6 9.19999L34.4 6.79999L10.4 38.8L13.6 41.2Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconAttributeX.displayName = 'IconAttributeX';

var _excluded$24 = ["color"];
var IconAttributeA = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$24);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M10 20.5C10 14.701 14.701 10 20.5 10C24.2967 10 27.6227 12.0151 29.4669 15.0341C31.2251 15.1585 32.8903 15.6196 34.3984 16.3533C32.6146 10.3658 27.0671 6 20.5 6C12.4919 6 6 12.4919 6 20.5C6 27.0671 10.3658 32.6146 16.3533 34.3984C15.6196 32.8903 15.1585 31.2251 15.0341 29.4669C12.0151 27.6227 10 24.2967 10 20.5Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    opacity: ".5",
    d: "M25.2202 15.4017C26.2722 15.139 27.3713 15 28.5 15C29.6287 15 30.7278 15.139 31.7798 15.4017L30.8107 19.2825C30.0731 19.0983 29.2994 19 28.5 19C27.7006 19 26.9269 19.0983 26.1893 19.2825L25.2202 15.4017ZM16.9201 21.5573C18.0615 19.6569 19.6569 18.0615 21.5573 16.9201L23.6169 20.349C22.2782 21.1531 21.1531 22.2782 20.349 23.6169L16.9201 21.5573ZM35.4427 16.9201C37.3431 18.0615 38.9385 19.6569 40.0799 21.5573L36.651 23.6169C35.8469 22.2782 34.7218 21.1531 33.3831 20.349L35.4427 16.9201ZM15 28.5C15 27.3713 15.139 26.2722 15.4017 25.2202L19.2825 26.1893C19.0983 26.9269 19 27.7006 19 28.5C19 29.2994 19.0983 30.0731 19.2825 30.8107L15.4017 31.7798C15.139 30.7278 15 29.6287 15 28.5ZM41.5983 25.2202C41.861 26.2722 42 27.3713 42 28.5C42 29.6287 41.861 30.7278 41.5983 31.7798L37.7175 30.8107C37.9017 30.0731 38 29.2994 38 28.5C38 27.7006 37.9017 26.9269 37.7175 26.1893L41.5983 25.2202ZM21.5573 40.0799C19.6569 38.9385 18.0615 37.3431 16.9201 35.4427L20.349 33.3831C21.1531 34.7218 22.2782 35.8469 23.6169 36.651L21.5573 40.0799ZM40.0799 35.4427C38.9385 37.3431 37.3431 38.9385 35.4427 40.0799L33.3831 36.651C34.7218 35.8469 35.8469 34.7218 36.651 33.3831L40.0799 35.4427ZM28.5 42C27.3713 42 26.2722 41.861 25.2202 41.5983L26.1893 37.7175C26.9269 37.9017 27.7006 38 28.5 38C29.2994 38 30.0731 37.9017 30.8107 37.7175L31.7798 41.5983C30.7278 41.861 29.6287 42 28.5 42Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconAttributeA.displayName = 'IconAttributeA';

var _excluded$25 = ["color"];
var IconAttributeH = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$25);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M12 8H16V40H12V8ZM32 8H36V40H32V8Z",
    fill: color
  }), React.createElement("path", {
    d: "M13 26L13 22L35 22V26L13 26Z",
    fill: color
  }));
});
IconAttributeH.displayName = 'IconAttributeH';

var _excluded$26 = ["color"];
var IconAttributeY = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$26);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M9.44777 9.2612L12.5522 6.73883L24 20.8284L35.4478 6.73883L38.5522 9.2612L24 27.1716L9.44777 9.2612Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M22 22H26V41H22V22Z",
    fill: color
  }));
});
IconAttributeY.displayName = 'IconAttributeY';

var _excluded$27 = ["color"];
var IconAttributeW = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$27);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M34.5445 37.5276L41.9291 10.5276L38.0708 9.47235L32.3239 30.4845L25.8743 13.1594C25.5829 12.3764 24.8354 11.8571 24 11.8571C23.1645 11.8571 22.4171 12.3764 22.1257 13.1594L15.676 30.4845L9.92914 9.47235L6.07084 10.5276L13.4555 37.5276C13.6845 38.3651 14.4278 38.9592 15.2952 38.998C16.1627 39.0368 16.956 38.5115 17.2589 37.6977L24 19.5898L30.741 37.6977C31.044 38.5115 31.8373 39.0368 32.7047 38.998C33.5722 38.9592 34.3155 38.3651 34.5445 37.5276Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconAttributeW.displayName = 'IconAttributeW';

var _excluded$28 = ["color"];
var IconAttributeDeg = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$28);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M7.2224 37.5834L23.7224 5.58337L27.2776 7.41653L12.2815 36.5H42V40.5H9C8.30242 40.5 7.65525 40.1365 7.2922 39.5408C6.92916 38.9452 6.9027 38.2034 7.2224 37.5834Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M26.2432 38.1098C26.2432 31.5869 22.2133 26.0005 16.5 23.7135L17.9865 20C25.1661 22.8738 30.2432 29.8965 30.2432 38.1098H26.2432Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconAttributeDeg.displayName = 'IconAttributeDeg';

var _excluded$29 = ["color"];
var IconAttributeOpacity = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$29);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    fill: color,
    d: "M8 8H16V16H8z"
  }), React.createElement("path", {
    opacity: ".5",
    fill: color,
    d: "M24 8H32V16H24z"
  }), React.createElement("path", {
    opacity: ".75",
    fill: color,
    d: "M16 16H24V24H16z"
  }), React.createElement("path", {
    opacity: ".3",
    fill: color,
    d: "M32 16H40V24H32z"
  }), React.createElement("path", {
    fill: color,
    d: "M8 24H16V32H8z"
  }), React.createElement("path", {
    opacity: ".5",
    fill: color,
    d: "M24 24H32V32H24z"
  }), React.createElement("path", {
    opacity: ".75",
    fill: color,
    d: "M16 32H24V40H16z"
  }), React.createElement("path", {
    opacity: ".3",
    fill: color,
    d: "M32 32H40V40H32z"
  }));
});
IconAttributeOpacity.displayName = 'IconAttributeOpacity';

var _excluded$2a = ["color"];
var IconPattern1 = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2a);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M6.5 5C6.22386 5 6 5.22386 6 5.5V20.5C6 20.7761 6.22386 21 6.5 21H9.5C9.77614 21 10 20.7761 10 20.5V17H12C15.3137 17 18 14.3137 18 11 18 7.68629 15.3137 5 12 5H6.5ZM10 13H12C13.1046 13 14 12.1046 14 11 14 9.89543 13.1046 9 12 9H10V13ZM30.5 5C30.2239 5 30 5.22386 30 5.5V20.5C30 20.7761 30.2239 21 30.5 21H33.5C33.7761 21 34 20.7761 34 20.5V17H36C39.3137 17 42 14.3137 42 11 42 7.68629 39.3137 5 36 5H30.5ZM34 13H36C37.1046 13 38 12.1046 38 11 38 9.89543 37.1046 9 36 9H34V13ZM6.5 27C6.22386 27 6 27.2239 6 27.5V42.5C6 42.7761 6.22386 43 6.5 43H9.5C9.77614 43 10 42.7761 10 42.5V39H12C15.3137 39 18 36.3137 18 33 18 29.6863 15.3137 27 12 27H6.5ZM10 35H12C13.1046 35 14 34.1046 14 33 14 31.8954 13.1046 31 12 31H10V35ZM30.5 27C30.2239 27 30 27.2239 30 27.5V42.5C30 42.7761 30.2239 43 30.5 43H33.5C33.7761 43 34 42.7761 34 42.5V39H36C39.3137 39 42 36.3137 42 33 42 29.6863 39.3137 27 36 27H30.5ZM34 35H36C37.1046 35 38 34.1046 38 33 38 31.8954 37.1046 31 36 31H34V35Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPattern1.displayName = 'IconPattern1';

var _excluded$2b = ["color"];
var IconPattern2 = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2b);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M17.917 44C17.441 41.1623 14.973 39 12 39H6.5C6.22386 39 6 39.2239 6 39.5V44H10V43H12C12.7403 43 13.3866 43.4022 13.7324 44H17.917ZM17.917 4C17.441 6.83771 14.973 9 12 9H10V12.5C10 12.7761 9.77614 13 9.5 13H6.5C6.22386 13 6 12.7761 6 12.5V4H10V5H12C12.7403 5 13.3866 4.5978 13.7324 4H17.917Z",
    fill: color
  }), React.createElement("path", {
    d: "M6.5 18C6.22386 18 6 18.2239 6 18.5V33.5C6 33.7761 6.22386 34 6.5 34H9.5C9.77614 34 10 33.7761 10 33.5V30H12C15.3137 30 18 27.3137 18 24 18 20.6863 15.3137 18 12 18H6.5ZM10 26H12C13.1046 26 14 25.1046 14 24 14 22.8954 13.1046 22 12 22H10V26ZM30 5.5C30 5.22386 30.2239 5 30.5 5H36C39.3137 5 42 7.68629 42 11 42 14.3137 39.3137 17 36 17H34V20.5C34 20.7761 33.7761 21 33.5 21H30.5C30.2239 21 30 20.7761 30 20.5V5.5ZM36 13H34V9H36C37.1046 9 38 9.89543 38 11 38 12.1046 37.1046 13 36 13ZM30.5 27C30.2239 27 30 27.2239 30 27.5V42.5C30 42.7761 30.2239 43 30.5 43H33.5C33.7761 43 34 42.7761 34 42.5V39H36C39.3137 39 42 36.3137 42 33 42 29.6863 39.3137 27 36 27H30.5ZM34 35H36C37.1046 35 38 34.1046 38 33 38 31.8954 37.1046 31 36 31H34V35Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPattern2.displayName = 'IconPattern2';

var _excluded$2c = ["color"];
var IconPattern3 = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2c);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M4 43V27H8C11.3137 27 14 29.6863 14 33 14 36.3137 11.3137 39 8 39H6V42.5C6 42.7761 5.77614 43 5.5 43H4ZM8 35H6V31H8C9.10457 31 10 31.8954 10 33 10 34.1046 9.10457 35 8 35ZM44 27.3414C43.3744 27.1203 42.7013 27 42 27H36.5C36.2239 27 36 27.2239 36 27.5V42.5C36 42.7761 36.2239 43 36.5 43H39.5C39.7761 43 40 42.7761 40 42.5V39H42C42.7013 39 43.3744 38.8797 44 38.6586V33 27.3414ZM44 33C44 31.8954 43.1046 31 42 31H40V35H42C43.1046 35 44 34.1046 44 33ZM10.5 5C10.2239 5 10 5.22386 10 5.5V20.5C10 20.7761 10.2239 21 10.5 21H13.5C13.7761 21 14 20.7761 14 20.5V17H16C19.3137 17 22 14.3137 22 11 22 7.68629 19.3137 5 16 5H10.5ZM14 13H16C17.1046 13 18 12.1046 18 11 18 9.89543 17.1046 9 16 9H14V13ZM28.5 5C28.2239 5 28 5.22386 28 5.5V20.5C28 20.7761 28.2239 21 28.5 21H31.5C31.7761 21 32 20.7761 32 20.5V17H34C37.3137 17 40 14.3137 40 11 40 7.68629 37.3137 5 34 5H28.5ZM32 13H34C35.1046 13 36 12.1046 36 11 36 9.89543 35.1046 9 34 9H32V13ZM19.5 27C19.2239 27 19 27.2239 19 27.5V42.5C19 42.7761 19.2239 43 19.5 43H22.5C22.7761 43 23 42.7761 23 42.5V39H25C28.3137 39 31 36.3137 31 33 31 29.6863 28.3137 27 25 27H19.5ZM23 35H25C26.1046 35 27 34.1046 27 33 27 31.8954 26.1046 31 25 31H23V35Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPattern3.displayName = 'IconPattern3';

var _excluded$2d = ["color"];
var IconPattern4 = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2d);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M6.5 5C6.22386 5 6 5.22386 6 5.5V20.5C6 20.7761 6.22386 21 6.5 21H9.5C9.77614 21 10 20.7761 10 20.5V17H12C15.3137 17 18 14.3137 18 11 18 7.68629 15.3137 5 12 5H6.5ZM10 13H12C13.1046 13 14 12.1046 14 11 14 9.89543 13.1046 9 12 9H10V13ZM6.5 43C6.22386 43 6 42.7761 6 42.5V27.5C6 27.2239 6.22386 27 6.5 27H9.5C9.77614 27 10 27.2239 10 27.5V31H12C15.3137 31 18 33.6863 18 37 18 40.3137 15.3137 43 12 43H6.5ZM10 35H12C13.1046 35 14 35.8954 14 37 14 38.1046 13.1046 39 12 39H10V35ZM41.5 5C41.7761 5 42 5.22386 42 5.5V20.5C42 20.7761 41.7761 21 41.5 21H38.5C38.2239 21 38 20.7761 38 20.5V17H36C32.6863 17 30 14.3137 30 11 30 7.68629 32.6863 5 36 5H41.5ZM38 13H36C34.8954 13 34 12.1046 34 11 34 9.89543 34.8954 9 36 9H38V13ZM41.5 43C41.7761 43 42 42.7761 42 42.5V27.5C42 27.2239 41.7761 27 41.5 27H38.5C38.2239 27 38 27.2239 38 27.5V31H36C32.6863 31 30 33.6863 30 37 30 40.3137 32.6863 43 36 43H41.5ZM38 35H36C34.8954 35 34 35.8954 34 37 34 38.1046 34.8954 39 36 39H38V35Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPattern4.displayName = 'IconPattern4';

var _excluded$2e = ["color"];
var IconPattern5 = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2e);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M4 32V16H8C11.3137 16 14 18.6863 14 22 14 25.3137 11.3137 28 8 28H6V31.5C6 31.7761 5.77614 32 5.5 32H4ZM6 24H8C9.10457 24 10 23.1046 10 22 10 20.8954 9.10457 20 8 20H6V24ZM44 16.3414C43.3744 16.1203 42.7013 16 42 16H36.5C36.2239 16 36 16.2239 36 16.5V31.5C36 31.7761 36.2239 32 36.5 32H39.5C39.7761 32 40 31.7761 40 31.5V28H42C42.7013 28 43.3744 27.8797 44 27.6586V22 16.3414ZM44 22C44 20.8954 43.1046 20 42 20H40V24H42C43.1046 24 44 23.1046 44 22ZM19.5 16C19.2239 16 19 16.2239 19 16.5V31.5C19 31.7761 19.2239 32 19.5 32H22.5C22.7761 32 23 31.7761 23 31.5V28H25C28.3137 28 31 25.3137 31 22 31 18.6863 28.3137 16 25 16H19.5ZM23 24H25C26.1046 24 27 23.1046 27 22 27 20.8954 26.1046 20 25 20H23V24Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPattern5.displayName = 'IconPattern5';

var _excluded$2f = ["color"];
var IconPattern6 = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2f);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M29.917 44C29.441 41.1623 26.973 39 24 39H18.5C18.2239 39 18 39.2239 18 39.5V44H22V43H24C24.7403 43 25.3866 43.4022 25.7324 44H29.917ZM29.917 4C29.441 6.83771 26.973 9 24 9H22V12.5C22 12.7761 21.7761 13 21.5 13H18.5C18.2239 13 18 12.7761 18 12.5V4H22V5H24C24.7403 5 25.3866 4.5978 25.7324 4H29.917Z",
    fill: color
  }), React.createElement("path", {
    d: "M18.5 18C18.2239 18 18 18.2239 18 18.5V33.5C18 33.7761 18.2239 34 18.5 34H21.5C21.7761 34 22 33.7761 22 33.5V30H24C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18H18.5ZM22 26H24C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22H22V26Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconPattern6.displayName = 'IconPattern6';

var _excluded$2g = ["color"];
var IconCloseCircleFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2g);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM29.0858 16.0858L23.9998 21.1718L18.9142 16.0858L16.0858 18.9142L21.1718 23.9998L16.0858 29.0858L18.9142 31.9142L23.9998 26.8278L29.0858 31.9142L31.9142 29.0858L26.8278 23.9998L31.9142 18.9142L29.0858 16.0858Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconCloseCircleFill.displayName = 'IconCloseCircleFill';

var _excluded$2h = ["color"];
var IconCheckCircleFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2h);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM31.5858 16.5858L22 26.171L16.4142 20.5858L13.5858 23.4142L22 31.8284L34.4142 19.4142L31.5858 16.5858Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconCheckCircleFill.displayName = 'IconCheckCircleFill';

var _excluded$2i = ["color"];
var IconHeartFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2i);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M31 9C37.0751 9 42 13.9249 42 20C42 22.9894 40.8076 25.7002 38.8724 27.6828L38.6035 27.9538L25.3735 40.4538C24.6449 41.1422 23.5282 41.1798 22.7571 40.5671L22.6248 40.4522L9.88066 28.3862C9.44353 28.0146 9.03351 27.6073 8.65497 27.1669C6.95319 25.1868 6 22.6644 6 20C6 13.9249 10.9249 9 17 9C19.43 9 21.7319 9.79425 23.6047 11.2021L23.8824 11.4179L23.999 11.514L24.3371 11.2467C26.0339 9.95272 28.0899 9.16615 30.2772 9.02351L30.6645 9.00506L31 9Z",
    fill: color
  }));
});
IconHeartFill.displayName = 'IconHeartFill';

var _excluded$2j = ["color"];
var IconExclamationCircleFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2j);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM26.1053 30.3158H21.8947V34.5263H26.1053V30.3158ZM26.1053 13.4737H21.8947V28.2105H26.1053V13.4737Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconExclamationCircleFill.displayName = 'IconExclamationCircleFill';

var _excluded$2k = ["color"];
var IconInfoCircleFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2k);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44ZM21.8947 17.6842H26.1053V13.4737H21.8947V17.6842ZM21.8947 34.5263H26.1053V19.7895H21.8947V34.5263Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconInfoCircleFill.displayName = 'IconInfoCircleFill';

var _excluded$2l = ["color"];
var IconQuestionCircleFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2l);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM26.1053 31.3684H21.8947V35.5789H26.1053V31.3684ZM24 12.4211C19.4258 12.4211 16.7448 15.0068 16.6351 19.5001L16.6316 19.7895H20.8421L20.8447 19.5672C20.8961 17.3919 21.7296 16.6316 24 16.6316C26.4801 16.6316 27.532 18.5442 26.8538 19.9006C26.7912 20.0258 26.6954 20.1664 26.5572 20.3321L26.4455 20.4612L26.2217 20.6995L26.091 20.8307L25.9473 20.9706L25.6184 21.2785L24.8297 21.9941L24.3346 22.4588C22.6936 24.037 21.9653 25.1828 21.8996 26.8965L21.8947 27.1579V29.2632H26.1053V27.1579L26.1083 27.0916C26.1276 26.876 26.2429 26.63 26.5039 26.3003L26.6248 26.1538L26.8343 25.9204L27.0861 25.6606L27.3829 25.3714L27.7274 25.0499L28.723 24.1416C29.6416 23.2781 30.2043 22.6148 30.6198 21.7836C32.6484 17.7265 29.7304 12.4211 24 12.4211Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconQuestionCircleFill.displayName = 'IconQuestionCircleFill';

var _excluded$2m = ["color"];
var IconSubscription = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2m);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M10.1298 12.7544L17 19L22.239 9.27033C22.7627 8.29779 23.9756 7.93391 24.9482 8.45759C25.2928 8.64314 25.5754 8.92573 25.7609 9.27033L31 19L37.8702 12.7544C38.6875 12.0114 39.9524 12.0716 40.6954 12.8889C41.0977 13.3315 41.2809 13.931 41.1946 14.5229L38.5 33H9.49999L6.80541 14.5229C6.64601 13.4299 7.40285 12.4146 8.49586 12.2552C9.08776 12.1689 9.68722 12.352 10.1298 12.7544ZM9.99999 36H38V40H9.99999V36Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconSubscription.displayName = 'IconSubscription';

var _excluded$2n = ["color"];
var IconProducts = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2n);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.048 15.0526H37.0557C37.7606 15.0528 38.3451 15.5989 38.3935 16.3026L39.9968 39.5657C40.0224 39.9367 39.8929 40.3017 39.6393 40.5736C39.3857 40.8455 39.0307 40.9999 38.6591 41H9.34093C8.96926 40.9999 8.6143 40.8455 8.36071 40.5736C8.10712 40.3017 7.97765 39.9367 8.00317 39.5657L9.60652 16.3026C9.65492 15.5989 10.2394 15.0528 10.9443 15.0526H15.952C15.952 10.6053 19.5552 7 24 7C28.4448 7 32.048 10.6053 32.048 15.0526ZM16.7264 27.0528C16.233 27.0528 15.7794 27.3237 15.5453 27.7582C15.3113 28.1928 15.3345 28.7208 15.6059 29.1331C17.3922 32.0595 20.5729 33.8438 24 33.8421C27.5528 33.8421 30.6656 31.9578 32.3941 29.1331C32.7808 28.5006 32.5818 27.6742 31.9497 27.2873C31.3175 26.9003 30.4916 27.0994 30.1049 27.7319C28.8062 29.8605 26.4933 31.1586 24.0009 31.1579C21.5084 31.1591 19.1951 29.8613 17.896 27.7328C17.6569 27.3125 17.2107 27.0529 16.7273 27.0528H16.7264ZM18.6346 15.0526C18.6346 12.0877 21.0368 9.68421 24 9.68421C26.9632 9.68421 29.3654 12.0877 29.3654 15.0526H18.6346Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconProducts.displayName = 'IconProducts';

var _excluded$2o = ["color"];
var IconWallet = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2o);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.0081 9C34.1503 9 35.8992 10.684 36.0032 12.8004L36.0081 13V16H40.0081C41.1127 16 42.0081 16.8954 42.0081 18V24H34.0081C31.8659 24 30.117 25.684 30.013 27.8004L30.0081 28C30.0081 30.1422 31.6921 31.8911 33.8085 31.9951L34.0081 32H42.0081V38C42.0081 39.1046 41.1127 40 40.0081 40H8.00811C6.90354 40 6.00811 39.1046 6.00811 38L6.00783 16.2813L6.00267 16.0275L6 15.5338L6.00811 14.5C6.00811 11.5365 8.35189 9.12046 11.2869 9.00437L11.5081 9H32.0081ZM35.0081 26C36.1127 26 37.0081 26.8954 37.0081 28C37.0081 29.1046 36.1127 30 35.0081 30C33.9035 30 33.0081 29.1046 33.0081 28C33.0081 26.8954 33.9035 26 35.0081 26ZM11.5081 13H32.0081V16H11.5081L11.3636 15.9931C10.603 15.9204 10.0081 15.2797 10.0081 14.5C10.0081 13.6716 10.6797 13 11.5081 13Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconWallet.displayName = 'IconWallet';

var _excluded$2p = ["color"];
var IconFilter = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2p);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M39 10C40.1046 10 41 10.8954 41 12V13.85C41 16.3131 40.0118 17.6732 38.2569 19.4014L27 29.502V38L21 41V29.503L9.74314 19.4014C7.98819 17.6732 7 16.3131 7 13.85V12C7 10.8954 7.89543 10 9 10H39Z",
    fill: color
  }));
});
IconFilter.displayName = 'IconFilter';

var _excluded$2q = ["color"];
var IconEmpty = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2q);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26 7H22V15H26V7ZM42 39C42 40.1046 41.1046 41 40 41H8C6.89543 41 6 40.1046 6 39V27.9528L10.4627 21H37.5373L42 27.9528V39ZM35.351 25H12.648L10.722 28L18.083 28.0003C18.5592 30.8379 21.0271 33 24 33C26.9729 33 29.4408 30.8379 29.917 28.0003L37.277 28L35.351 25ZM8.89676 12.2214L11.9609 9.65025L17.1032 15.7786L14.0391 18.3498L8.89676 12.2214ZM36.0391 9.65025L39.1032 12.2214L33.9609 18.3498L30.8968 15.7786L36.0391 9.65025Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconEmpty.displayName = 'IconEmpty';

var _excluded$2r = ["color"];
var IconStepBackFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2r);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M21.2688 7.15109C22.0177 7.4599 22.5064 8.18998 22.5064 9.00006V16.0621C27.8952 16.5214 32.5828 18.7012 36.4882 22.5813C40.8363 26.9011 43.3316 32.2902 43.9894 38.6497C44.0799 39.5245 43.5882 40.3558 42.778 40.6979C41.9678 41.04 41.0292 40.8128 40.4653 40.1379C36.1132 34.9296 32.5761 32.4067 29.8606 31.8418C27.2831 31.3057 24.8344 31.1412 22.5064 31.3327V39.0001C22.5064 39.8199 22.0061 40.5567 21.244 40.8591C20.482 41.1614 19.6126 40.9681 19.0505 40.3713L4.54413 24.9701C3.80444 24.1848 3.82089 22.9544 4.5813 22.1891L19.0877 7.59034C19.6587 7.01571 20.5199 6.84227 21.2688 7.15109Z",
    fill: color
  }));
});
IconStepBackFill.displayName = 'IconStepBackFill';

var _excluded$2s = ["color"];
var IconStepNextFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2s);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26.7312 7.15109C25.9823 7.4599 25.4936 8.18998 25.4936 9.00006V16.0621C20.1048 16.5214 15.4172 18.7012 11.5118 22.5813C7.16365 26.9011 4.66836 32.2902 4.01061 38.6497C3.92013 39.5245 4.41175 40.3558 5.22196 40.6979C6.03216 41.04 6.9708 40.8128 7.53473 40.1379C11.8868 34.9296 15.4239 32.4067 18.1394 31.8418C20.7169 31.3057 23.1656 31.1412 25.4936 31.3327V39.0001C25.4936 39.8199 25.9939 40.5567 26.756 40.8591C27.518 41.1614 28.3874 40.9681 28.9495 40.3713L43.4559 24.9701C44.1956 24.1848 44.1791 22.9544 43.4187 22.1891L28.9123 7.59034C28.3413 7.01571 27.4801 6.84227 26.7312 7.15109Z",
    fill: color
  }));
});
IconStepNextFill.displayName = 'IconStepNextFill';

var _excluded$2t = ["color"];
var IconSpotify = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2t);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24C44 13 35.1 4 24 4ZM33.2017 32.9C32.8017 33.4983 32.1017 33.7 31.5 33.3C26.8 30.4 20.9 29.7983 13.8983 31.3983C13.2017 31.6017 12.6 31.1 12.4 30.5C12.2 29.7983 12.7 29.2 13.3 29C20.9 27.2983 27.5 28 32.7 31.2C33.4 31.5 33.4983 32.2983 33.2017 32.9ZM35.6017 27.4C35.1 28.1 34.2 28.4 33.4983 27.9C28.1 24.6 19.9 23.6 13.6 25.6C12.8017 25.8 11.9 25.4 11.7 24.6C11.5 23.8 11.9 22.8983 12.7 22.6983C20 20.5 29 21.6017 35.2 25.4C35.8017 25.7017 36.1 26.7 35.6017 27.4ZM35.8017 21.8C29.4 18 18.7 17.6 12.6 19.5017C11.6 19.8 10.6 19.2 10.3 18.3C10 17.2983 10.6 16.3 11.5 15.9983C18.6 13.8983 30.3 14.2983 37.7017 18.7C38.6 19.2 38.9 20.4 38.4 21.3C37.9017 22.0017 36.7 22.2983 35.8017 21.8Z",
    fill: color
  }));
});
IconSpotify.displayName = 'IconSpotify';

var _excluded$2u = ["color"];
var IconRetryCircle = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2u);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM15.75 24C15.75 19.4437 19.4437 15.75 24 15.75C26.3204 15.75 28.4171 16.708 29.9161 18.25H26V21.75H33.5C34.4665 21.75 35.25 20.9665 35.25 20V12.5H31.75V15.168C29.6814 13.3514 26.9693 12.25 24 12.25C17.5107 12.25 12.25 17.5107 12.25 24C12.25 30.4893 17.5107 35.75 24 35.75C28.2975 35.75 32.0561 33.4429 34.1049 29.9998L31.0949 28.2126C29.6564 30.6301 27.0174 32.25 24 32.25C19.4437 32.25 15.75 28.5563 15.75 24Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconRetryCircle.displayName = 'IconRetryCircle';

var _excluded$2v = ["color"];
var IconNotificationFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2v);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M26.0006 8.14186 26 5H22L22.0002 8.14175C15.2155 9.11215 10 14.947 10 22V32H7V36H41V32H38V22L37.9966 21.6874C37.8451 14.7754 32.6844 9.09819 26.0006 8.14186ZM31 39H17V43H31V39Z",
    fill: color
  }));
});
IconNotificationFill.displayName = 'IconNotificationFill';

var _excluded$2w = ["color"];
var IconTimeCircleFill = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2w);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM22 13V25C22 25.4774 22.1708 25.9391 22.4815 26.3016L28.4815 33.3016L31.5185 30.6984L26 24.2602V13H22Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconTimeCircleFill.displayName = 'IconTimeCircleFill';

var _excluded$2x = ["color"];
var IconRefunded = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2x);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M32.4468 7.5C34.7075 7.5 36.5531 9.27712 36.6629 11.5106L36.6681 11.7213V14.8872H40.8894C42.055 14.8872 43 15.8322 43 16.9979V36.6993C42.5539 34.4715 41.4225 32.4704 39.8074 30.9158C38.1477 29.3181 36.1554 28.4205 33.8652 28.2314V25.3236C33.8652 24.99 33.6575 24.6894 33.3392 24.5622C33.021 24.4351 32.6549 24.5065 32.4123 24.7431L26.2471 30.7543C25.9239 31.0694 25.9169 31.5761 26.2313 31.8994L32.3965 38.2411C32.6354 38.4868 33.0048 38.5664 33.3287 38.4419C33.6526 38.3174 33.8652 38.014 33.8652 37.6764V34.5193C34.8546 34.4404 35.8953 34.5082 36.9908 34.729C38.1448 34.9615 39.6481 36.0004 41.4977 38.145C41.8427 38.6113 42.0868 39.1708 42.2727 39.6983C41.9023 40.0201 41.4186 40.2149 40.8894 40.2149H8C6 40.2149 5.00856 39 5.00856 37L5.00826 15.1841L5.00282 14.9162L5 14.3952L5.00856 12.5C5.00856 9.5 7.5 7.50461 10 7.50461L10.8128 7.5H32.4468ZM10.8128 11.7213H32.4468V14.8873H10.8128L10.6604 14.88C9.85762 14.8033 9.22983 14.1271 9.22983 13.3043C9.22983 12.43 9.93855 11.7213 10.8128 11.7213Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconRefunded.displayName = 'IconRefunded';

var _excluded$2y = ["color"];
var IconThunbsUp = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2y);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24.2998 6.00031C25 5 25.7998 4 27 4C30 4 30.5 7.99999 30 9.99999C29.5 12 28.4158 16.6889 28 18.0001H37.7233C39.3618 17.9851 40.9247 18.7635 42 20.0001C43.078 21.2398 43.5573 22.8907 43.3108 24.5151L43.3073 24.5375L40.5854 38.3271C40.1621 41.0776 37.7826 43.1 35 43.0748L16.0002 42.9998C14.8956 42.9998 14.0002 42.1044 14.0002 40.9998V22.1998C14.0002 21.92 14.0589 21.6433 14.1726 21.3876L24.2998 6.00031ZM5 23C5 21.8955 5.89543 21 7 21H9.5C10.6046 21 11.5 21.8955 11.5 23V41C11.5 42.1046 10.6046 43 9.5 43H7C5.89543 43 5 42.1046 5 41V23Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconThunbsUp.displayName = 'IconThunbsUp';

var _excluded$2z = ["color"];
var IconThunbsDown = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2z);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24.2998 42.0746C25 43.075 25.7998 44.075 27 44.075C30 44.075 30.5 40.075 30 38.075C29.5 36.075 28.4158 31.3861 28 30.0749H37.7233C39.3618 30.0898 40.9247 29.3114 42 28.0749C43.078 26.8351 43.5573 25.1843 43.3108 23.5599L43.3073 23.5374L40.5854 9.74782C40.1621 6.99734 37.7826 4.97495 35 5.00019L16.0002 5.07511C14.8956 5.07511 14.0002 5.97054 14.0002 7.07511V25.8751C14.0002 26.1549 14.0589 26.4317 14.1726 26.6874L24.2998 42.0746ZM5 25.0749C5 26.1795 5.89543 27.0749 7 27.0749H9.5C10.6046 27.0749 11.5 26.1795 11.5 25.0749V7.07491C11.5 5.97034 10.6046 5.07491 9.5 5.07491H7C5.89543 5.07491 5 5.97034 5 7.07491V25.0749Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconThunbsDown.displayName = 'IconThunbsDown';

var _excluded$2A = ["color"];
var IconMirrorHorizontal = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2A);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M30.2099 9.2969L41.3183 35.5528C42.0069 37.1806 41.2456 39.0582 39.618 39.7468C39.2235 39.9138 38.7995 39.9998 38.3712 39.9998H28.7996C27.0323 39.9998 25.5996 38.567 25.5996 36.7998V10.232C25.5996 8.90655 26.6741 7.83203 27.9996 7.83203C28.9637 7.83203 29.8343 8.40897 30.2099 9.2969Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M22.4012 10.2323V36.8001C22.4012 38.5673 20.9685 40.0001 19.2012 40.0001H9.62969C7.86238 40.0001 6.42969 38.5673 6.42969 36.8001C6.42969 36.3717 6.51569 35.9477 6.68259 35.5533L17.7909 9.29715C18.3074 8.07642 19.7156 7.5055 20.9364 8.02196C21.8243 8.39762 22.4012 9.26816 22.4012 10.2323Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    fillOpacity: ".3"
  }));
});
IconMirrorHorizontal.displayName = 'IconMirrorHorizontal';

var _excluded$2B = ["color"];
var IconMirrorVertical = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2B);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M12.4468 6.68113L38.7028 17.7894C39.9236 18.3059 40.4946 19.7142 39.978 20.9349C39.6024 21.8228 38.7318 22.3998 37.7678 22.3998H11.2C9.43269 22.3998 8 20.9671 8 19.1998V9.62822C8 7.86091 9.43269 6.42822 11.2 6.42822C11.6284 6.42822 12.0523 6.51422 12.4468 6.68113Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    fillOpacity: ".3"
  }), React.createElement("path", {
    d: "M12.4468 41.3186L38.7028 30.2103C39.9236 29.6938 40.4946 28.2856 39.978 27.0648C39.6024 26.1769 38.7318 25.6 37.7678 25.6H11.2C9.43269 25.6 8 27.0327 8 28.8V38.3715C8 40.1388 9.43269 41.5715 11.2 41.5715C11.6284 41.5715 12.0523 41.4855 12.4468 41.3186Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconMirrorVertical.displayName = 'IconMirrorVertical';

var _excluded$2C = ["color"];
var IconStockBicolor = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2C);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M35.1997 8C37.8506 8 39.9998 10.149 39.9998 12.8V25.6C39.9998 27.9786 38.2696 29.953 35.9993 30.3338L35.9997 19.2C35.9997 15.2235 32.7762 12 28.7997 12L17.666 12.0005C18.0467 9.73007 20.0212 8 22.3997 8H35.1997Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    fillOpacity: ".3"
  }), React.createElement("path", {
    d: "M33.6 19.2C33.6 16.5491 31.451 14.4 28.8 14.4H12.8C10.149 14.4 8 16.5491 8 19.2V35.2C8 37.851 10.149 40 12.8 40H28.8C31.451 40 33.6 37.851 33.6 35.2V19.2ZM19.738 20.9018C20.0099 20.5274 20.3639 20.2269 20.7999 20C21.2359 20.2268 21.5898 20.5274 21.8618 20.9018C22.8012 22.1947 23.0014 23.7992 22.5393 25.2091C23.7402 24.3361 25.3282 24.0307 26.8482 24.5246C27.2887 24.6677 27.6842 24.9118 28.034 25.2565C27.9529 25.741 27.7764 26.1703 27.5045 26.5445C26.5653 27.8373 25.1015 28.5235 23.6179 28.5203C24.8189 29.3927 25.5999 30.8084 25.5999 32.4064C25.5999 32.8686 25.4904 33.3193 25.2719 33.76C24.7854 33.8329 24.322 33.7979 23.8817 33.6548C22.3632 33.1614 21.2588 31.9829 20.8005 30.5723C20.3412 31.9827 19.2367 33.1613 17.7181 33.6548C17.2796 33.7972 16.8183 33.8326 16.3289 33.7602C16.1096 33.3204 15.9999 32.8692 15.9999 32.4064C15.9999 30.8085 16.7807 29.3929 17.9816 28.5235C16.4975 28.5232 15.0342 27.837 14.0952 26.5445C13.8231 26.1699 13.6465 25.74 13.5664 25.2552C13.9167 24.911 14.3117 24.6675 14.7515 24.5246C16.2716 24.0307 17.8595 24.3361 19.0573 25.2111C18.5983 23.7992 18.7986 22.1947 19.738 20.9018Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
IconStockBicolor.displayName = 'IconStockBicolor';

var _excluded$2D = ["color"];
var IconUploadText = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2D);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M8 16C8 12.4654 10.8654 9.59998 14.4 9.59998H28.8C32.3346 9.59998 35.2 12.4654 35.2 16V20.8H31.2022C30.1486 18.273 28.1264 16.2509 25.5996 15.197V38.3998L25.6004 34.6374C25.6004 37.0098 27.1991 38.2639 30.3966 38.3998L30.4008 41.5998H12.8008V38.3998C15.9508 38.266 17.5504 37.0488 17.5996 34.748V15.1967C15.0724 16.2505 13.05 18.2728 11.9962 20.8H8V16Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M36.7496 18.4V12.8L36.8749 12.8015C40.3795 12.8433 43.1986 15.6962 43.1986 19.2011V24H39.9504C39.9504 21.6472 38.8835 19.7806 36.7496 18.4ZM27.2123 34.1915V16.2864C28.2666 16.6364 29.1192 17.3411 29.7701 18.4002C30.0639 18.8783 30.3973 19.9115 30.3973 20.6022V22.3829H33.5818V33.8012C33.5818 35.2652 33.5922 36.4256 34.8741 37.4394C35.5415 37.9672 36.7029 38.2874 38.3584 38.4002V41.6002H31.9895V36.8946C30.9918 36.8454 30.252 36.7969 29.7701 36.749C29.0473 36.6772 28.5754 36.5018 28.1856 36.3456C27.4511 36.0511 27.1266 35.333 27.2123 34.1915Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    fillOpacity: ".3"
  }));
});
IconUploadText.displayName = 'IconUploadText';

var _excluded$2E = ["color"];
var IconDeviceDesktopBicolor = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2E);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M36.7778 8C39.7233 8 42.1111 10.3878 42.1111 13.3333V36.4444H43.8889C44.8707 36.4444 45.6667 37.2404 45.6667 38.2222C45.6667 39.204 44.8707 40 43.8889 40H4.77778C3.79594 40 3 39.204 3 38.2222C3 37.2404 3.79594 36.4444 4.77778 36.4444H6.55556V13.3333C6.55556 10.3878 8.94338 8 11.8889 8H36.7778ZM11.8872 11.5558H36.776L36.9833 11.5677C37.8676 11.6704 38.5538 12.4218 38.5538 13.3336V31.1113H10.1094V13.3336L10.1213 13.1262C10.224 12.2421 10.9754 11.5558 11.8872 11.5558ZM21.3454 34.0266C20.7563 34.0266 20.2787 34.5042 20.2787 35.0933C20.2787 35.6824 20.7563 36.1599 21.3454 36.1599H27.7454C28.3345 36.1599 28.8121 35.6824 28.8121 35.0933C28.8121 34.5042 28.3345 34.0266 27.7454 34.0266H21.3454Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M20.2787 35.0933C20.2787 34.5042 20.7563 34.0266 21.3454 34.0266H27.7454C28.3345 34.0266 28.812 34.5042 28.812 35.0933C28.812 35.6824 28.3345 36.1599 27.7454 36.1599H21.3454C20.7563 36.1599 20.2787 35.6824 20.2787 35.0933Z",
    fill: color,
    fillOpacity: ".3"
  }));
});
IconDeviceDesktopBicolor.displayName = 'IconDeviceDesktopBicolor';

var _excluded$2F = ["color"];
var IconMoreBicolor = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2F);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    opacity: ".2",
    d: "M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    d: "M17.25 24C17.25 25.6569 15.9069 27 14.25 27 12.5931 27 11.25 25.6569 11.25 24 11.25 22.3431 12.5931 21 14.25 21 15.9069 21 17.25 22.3431 17.25 24ZM27 24C27 25.6569 25.6569 27 24 27 22.3431 27 21 25.6569 21 24 21 22.3431 22.3431 21 24 21 25.6569 21 27 22.3431 27 24ZM36.75 24C36.75 25.6569 35.4069 27 33.75 27 32.0931 27 30.75 25.6569 30.75 24 30.75 22.3431 32.0931 21 33.75 21 35.4069 21 36.75 22.3431 36.75 24Z",
    fill: color
  }));
});
IconMoreBicolor.displayName = 'IconMoreBicolor';

var _excluded$2G = ["color"];
var IconLoadingM = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2G);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    opacity: ".08",
    d: "M24 5C34.4934 5 43 13.5066 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5ZM24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM31.8264 25.6758L29.645 19.0956C28.7027 16.4566 25.2367 16.2718 24.0347 18.759L24 18.8332L23.9653 18.759C22.7511 16.2466 19.227 16.4606 18.3272 19.1763L16.1736 25.6758L16.1058 25.9072C15.6905 27.5354 16.5301 29.2507 18.0611 29.8167L18.1092 29.834C19.3785 30.279 20.7338 29.8011 21.512 28.7377L21.5368 28.7033L21.5785 28.7617C22.7994 30.4284 25.2626 30.4114 26.4632 28.7033L26.488 28.7377C27.276 29.8146 28.6559 30.291 29.9389 29.8167C31.5427 29.2238 32.3878 27.3698 31.8264 25.6758Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("path", {
    opacity: ".2",
    d: "M7.5 21.5C8.88071 21.5 10 22.6193 10 24C10 31.732 16.268 38 24 38C25.3807 38 26.5 39.1193 26.5 40.5C26.5 41.8807 25.3807 43 24 43C13.5066 43 5 34.4934 5 24C5 22.6193 6.11929 21.5 7.5 21.5Z",
    fill: color
  }));
});
IconLoadingM.displayName = 'IconLoadingM';

var _excluded$2H = ["color"];
var IconInstagram = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2H);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M14.143 43.8585C11.7641 43.7503 10.4719 43.3545 9.61239 43.0192C8.4735 42.5758 7.66154 42.048 6.80679 41.1944C5.95203 40.3408 5.42301 39.5289 4.98196 38.39C4.64671 37.5305 4.25084 36.2382 4.14266 33.8594C4.02378 31.288 4 30.5165 4 24.0018C4 17.4871 4.02615 16.7167 4.14147 14.143C4.24965 11.7641 4.6479 10.4743 4.98077 9.61239C5.4242 8.4735 5.95322 7.66154 6.8056 6.8056C7.65917 5.95203 8.47113 5.42182 9.6112 4.98077C10.4707 4.64553 11.7629 4.24965 14.1418 4.14147C16.7144 4.02378 17.4871 4 23.9994 4C30.5141 4 31.2845 4.02615 33.8582 4.14147C36.237 4.24965 37.5269 4.6479 38.3888 4.98077C39.5277 5.42182 40.3396 5.95203 41.1944 6.8056C42.0492 7.65917 42.5758 8.47232 43.0192 9.6112C43.3545 10.4707 43.7503 11.7629 43.8585 14.1418C43.9762 16.7155 44 17.4859 44 24.0006C44 30.5129 43.9762 31.2856 43.8585 33.8594C43.7503 36.2382 43.3521 37.5305 43.0192 38.39C42.5758 39.5289 42.048 40.3408 41.1944 41.1944C40.3408 42.048 39.5277 42.5758 38.3888 43.0192C37.5293 43.3545 36.237 43.7503 33.8582 43.8585C31.2868 43.9762 30.5141 44 23.9994 44C17.4871 44 16.7144 43.9774 14.143 43.8585Z",
    fill: color
  }), React.createElement("path", {
    d: "M14.143 43.8585C11.7641 43.7503 10.4719 43.3545 9.61239 43.0192C8.4735 42.5758 7.66154 42.048 6.80679 41.1944C5.95203 40.3408 5.42301 39.5289 4.98196 38.39C4.64671 37.5305 4.25084 36.2382 4.14266 33.8594C4.02378 31.288 4 30.5165 4 24.0018C4 17.4871 4.02615 16.7167 4.14147 14.143C4.24965 11.7641 4.6479 10.4743 4.98077 9.61239C5.4242 8.4735 5.95322 7.66154 6.8056 6.8056C7.65917 5.95203 8.47113 5.42182 9.6112 4.98077C10.4707 4.64553 11.7629 4.24965 14.1418 4.14147C16.7144 4.02378 17.4871 4 23.9994 4C30.5141 4 31.2845 4.02615 33.8582 4.14147C36.237 4.24965 37.5269 4.6479 38.3888 4.98077C39.5277 5.42182 40.3396 5.95203 41.1944 6.8056C42.0492 7.65917 42.5758 8.47232 43.0192 9.6112C43.3545 10.4707 43.7503 11.7629 43.8585 14.1418C43.9762 16.7155 44 17.4859 44 24.0006C44 30.5129 43.9762 31.2856 43.8585 33.8594C43.7503 36.2382 43.3521 37.5305 43.0192 38.39C42.5758 39.5289 42.048 40.3408 41.1944 41.1944C40.3408 42.048 39.5277 42.5758 38.3888 43.0192C37.5293 43.3545 36.237 43.7503 33.8582 43.8585C31.2868 43.9762 30.5141 44 23.9994 44C17.4871 44 16.7144 43.9774 14.143 43.8585Z",
    fill: color
  }), React.createElement("path", {
    d: "M19.3345 24C19.3345 21.4228 21.4232 19.333 24.0006 19.333C26.5779 19.333 28.6678 21.4228 28.6678 24C28.6678 26.5772 26.5779 28.667 24.0006 28.667C21.4232 28.667 19.3345 26.5772 19.3345 24ZM16.8114 24C16.8114 27.9704 20.03 31.1888 24.0006 31.1888C27.9711 31.1888 31.1897 27.9704 31.1897 24C31.1897 20.0296 27.9711 16.8112 24.0006 16.8112C20.03 16.8112 16.8114 20.0294 16.8114 24ZM29.7943 16.5261C29.7942 16.8584 29.8926 17.1833 30.0771 17.4596C30.2616 17.7359 30.5239 17.9514 30.8308 18.0787C31.1378 18.2059 31.4756 18.2393 31.8015 18.1746C32.1274 18.11 32.4269 17.9501 32.6619 17.7152C32.897 17.4804 33.0571 17.1811 33.122 16.8552C33.187 16.5293 33.1539 16.1915 33.0268 15.8845C32.8998 15.5775 32.6846 15.315 32.4083 15.1303C32.1321 14.9456 31.8074 14.8469 31.4751 14.8468C31.0297 14.847 30.6019 15.024 30.2869 15.3389C29.9719 15.6537 29.7947 16.0807 29.7943 16.5261ZM18.3443 35.3958C16.9793 35.3336 16.2374 35.1063 15.7444 34.9142C15.0907 34.6597 14.6243 34.3566 14.134 33.867C13.6436 33.3773 13.3401 32.9114 13.0867 32.2578C12.8945 31.765 12.6672 31.0228 12.6051 29.6579C12.5372 28.1822 12.5237 27.7389 12.5237 24.0002C12.5237 20.2616 12.5384 19.8195 12.6051 18.3425C12.6673 16.9776 12.8963 16.2369 13.0867 15.7427C13.3412 15.0891 13.6443 14.6227 14.134 14.1324C14.6237 13.642 15.0896 13.3385 15.7444 13.0852C16.2372 12.893 16.9793 12.6656 18.3443 12.6036C19.8201 12.5357 20.2634 12.5221 24.0006 12.5221C27.7377 12.5221 28.1815 12.5366 29.6585 12.6038C31.0235 12.6659 31.7642 12.895 32.2584 13.0854C32.9121 13.3387 33.3785 13.6429 33.8688 14.1326C34.3592 14.6222 34.6616 15.0893 34.9161 15.7429C35.1083 16.2357 35.3356 16.9778 35.3977 18.3428C35.4656 19.8197 35.4791 20.2618 35.4791 24.0004C35.4791 27.7391 35.4656 28.1812 35.3977 29.6581C35.3355 31.0231 35.107 31.765 34.9161 32.258C34.6616 32.9116 34.3585 33.378 33.8688 33.8672C33.3791 34.3564 32.9121 34.6599 32.2584 34.9144C31.7656 35.1066 31.0235 35.334 29.6585 35.396C28.1827 35.4639 27.7394 35.4774 24.0006 35.4774C20.2617 35.4774 19.8197 35.4636 18.3443 35.3958ZM18.2284 10.0848C16.738 10.1527 15.7195 10.389 14.8301 10.7351C13.9095 11.0924 13.1292 11.5719 12.35 12.3499C11.5708 13.1278 11.0925 13.9082 10.7351 14.8299C10.389 15.7198 10.1527 16.7377 10.0848 18.2281C10.0158 19.7208 10 20.198 10 24C10 27.802 10.0158 28.2792 10.0848 29.7719C10.1527 31.2624 10.389 32.2802 10.7351 33.1701C11.0925 34.0906 11.5709 34.8725 12.35 35.6501C13.1291 36.4277 13.9084 36.9065 14.8301 37.2649C15.7212 37.611 16.738 37.8473 18.2284 37.9152C19.722 37.9831 20.1985 38 24.0006 38C27.8027 38 28.2799 37.9842 29.7727 37.9152C31.2633 37.8473 32.2811 37.611 33.171 37.2649C34.0916 36.9065 34.8719 36.4281 35.6512 35.6501C36.4304 34.8722 36.9076 34.0906 37.266 33.1701C37.6121 32.2802 37.8496 31.2623 37.9163 29.7719C37.9842 28.2781 38 27.802 38 24C38 20.198 37.9842 19.7208 37.9163 18.2281C37.8485 16.7376 37.6121 15.7193 37.266 14.8299C36.9076 13.9094 36.4291 13.1291 35.6512 12.3499C34.8732 11.5707 34.0916 11.0924 33.1722 10.7351C32.2811 10.389 31.2632 10.1515 29.7738 10.0848C28.2808 10.0166 27.8038 10 24.0022 10C20.2007 10 19.722 10.0158 18.2284 10.0848Z",
    fill: color
  }), React.createElement("defs", null, React.createElement("radialGradient", {
    id: "a",
    cx: "0",
    cy: "0",
    r: "1",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "translate(6.589 43.124) scale(50.7852)"
  }, React.createElement("stop", {
    offset: ".09",
    stopColor: "#FA8F21"
  }), React.createElement("stop", {
    offset: ".78",
    stopColor: "#D82D7E"
  })), React.createElement("radialGradient", {
    id: "b",
    cx: "0",
    cy: "0",
    r: "1",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "translate(31.707 41.84) scale(44.6914)"
  }, React.createElement("stop", {
    offset: ".64",
    stopColor: "#8C3AAA",
    stopOpacity: "0"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#8C3AAA"
  }))));
});
IconInstagram.displayName = 'IconInstagram';

var _excluded$2I = ["color"];
var IconFacebook = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2I);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z",
    fill: color
  }), React.createElement("path", {
    d: "M30.0975 23.9885H26.1635V38.4008H20.2032V23.9885H17.3684V18.9234H20.2032V15.6458C20.2032 13.3019 21.3165 9.63159 26.2165 9.63159L30.6316 9.65006V14.5666H27.4282C26.9027 14.5666 26.1639 14.8291 26.1639 15.9472V18.9281H30.6182L30.0975 23.9885Z",
    fill: color
  }));
});
IconFacebook.displayName = 'IconFacebook';

var _excluded$2J = ["color"];
var IconGoogledrive = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2J);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M6.91816 36.8216L8.69322 39.8877C9.06205 40.5331 9.59224 41.0403 10.2147 41.4091C11.9975 39.1461 13.2385 37.4095 13.9377 36.1992C14.6473 34.971 15.5194 33.05 16.5542 30.436C13.7657 30.069 11.6525 29.8855 10.2147 29.8855C8.83493 29.8855 6.72176 30.069 3.87518 30.436C3.87518 31.1507 4.05961 31.8653 4.42845 32.5108L6.91816 36.8216Z",
    fill: color
  }), React.createElement("path", {
    d: "M37.7858 41.4091C38.4082 41.0403 38.9384 40.5331 39.3072 39.8877L40.0449 38.6198L43.572 32.5108C43.9408 31.8653 44.1252 31.1507 44.1252 30.436C41.2622 30.069 39.1529 29.8855 37.7973 29.8855C36.3404 29.8855 34.2311 30.069 31.4693 30.436C32.4918 33.0643 33.3525 34.9853 34.0512 36.1992C34.7561 37.4238 36.001 39.1604 37.7858 41.4091Z",
    fill: color
  }), React.createElement("path", {
    d: "M24.0002 17.5264C26.063 15.035 27.4846 13.114 28.265 11.7632C28.8934 10.6755 29.5849 8.93887 30.3397 6.55327C29.7173 6.18442 29.0026 6 28.265 6H19.7355C18.9978 6 18.2831 6.20747 17.6607 6.55327C18.6208 9.28931 19.4354 11.2365 20.1046 12.3949C20.8442 13.675 22.1427 15.3855 24.0002 17.5264Z",
    fill: color
  }), React.createElement("path", {
    d: "M31.4462 30.4359H16.5541L10.2147 41.409C10.8371 41.7779 11.5517 41.9622 12.2894 41.9622H35.711C36.4487 41.9622 37.1633 41.7548 37.7857 41.409L31.4462 30.4359Z",
    fill: color
  }), React.createElement("path", {
    d: "M24.0002 17.5264L17.6607 6.55334C17.0383 6.92219 16.5081 7.42933 16.1392 8.07483L4.42845 28.3612C4.05961 29.0067 3.87518 29.7213 3.87518 30.436H16.5542L24.0002 17.5264Z",
    fill: color
  }), React.createElement("path", {
    d: "M37.7164 18.4137L31.861 8.27051C31.4922 7.625 30.9619 7.11787 30.3395 6.74902L24 17.7221L31.446 30.6317H44.102C44.102 29.917 43.9176 29.2024 43.5487 28.5569L37.7164 18.4137Z",
    fill: color
  }));
});
IconGoogledrive.displayName = 'IconGoogledrive';

var _excluded$2K = ["color"];
var IconCanva = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2K);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45ZM41.595 26.0101C41.64 25.9201 41.685 25.875 41.775 25.875C41.9099 25.875 42 26.055 42 26.325C42 27.3151 40.9651 28.575 39.7049 28.575C38.9399 28.575 38.5349 27.99 38.3549 27.2251C37.86 28.125 37.2299 28.575 36.42 28.575C35.7001 28.575 34.7999 28.035 34.7999 26.235C34.8067 25.6179 34.9288 25.0073 35.1599 24.435C34.6199 24.7951 34.0799 24.7951 33.72 24.75C32.775 26.73 31.2449 28.575 30.345 28.575C29.625 28.575 29.1749 27.2251 28.9949 25.56C28.275 27.36 27.2849 28.575 26.295 28.575C25.3951 28.575 24.945 27.9 24.945 26.865C24.945 26.3612 25.0857 25.7038 25.217 25.0907L25.2171 25.09L25.2176 25.0881C25.3324 24.5524 25.4399 24.0506 25.4399 23.715C25.4399 23.535 25.3951 23.4 25.2599 23.4C24.81 23.4 23.1899 25.56 22.56 28.2601C22.47 28.485 22.155 28.575 21.8401 28.575C21.2551 28.575 21.0751 27.9 21.0751 27.2251C20.445 28.125 19.86 28.575 19.095 28.575C18.42 28.575 17.9249 28.125 17.7449 27.2251C17.2049 28.125 16.5751 28.575 15.765 28.575C14.865 28.575 14.235 27.9 14.1451 26.595C13.335 28.1701 11.805 29.52 10.0499 29.52C7.48497 29.52 5.99999 27.72 5.99999 24.75C5.99999 20.88 8.96996 18 11.8951 18C13.65 18 14.64 18.855 14.64 20.115C14.64 21.375 13.74 22.275 12.975 22.275C12.9245 22.275 12.8811 22.2644 12.8447 22.2471C12.7516 22.2028 12.7049 22.1148 12.7049 22.05C12.7049 21.8943 12.7847 21.7321 12.8829 21.5325L12.8833 21.5317C13.0406 21.2121 13.2449 20.7968 13.2449 20.16C13.2449 19.3501 12.8849 18.81 11.985 18.81C10.2299 18.81 7.79992 21.465 7.84496 24.75C7.84496 27 8.74492 28.4401 10.4099 28.4401C12.345 28.4401 13.74 26.55 14.46 24.615C14.9549 23.13 16.125 22.05 17.2049 22.05C17.835 22.05 18.3299 22.32 18.4651 22.95C18.8699 22.23 19.365 22.05 19.7701 22.05C20.1749 22.05 20.3549 22.185 20.3549 22.5C19.8537 23.9572 19.5216 25.4671 19.365 27C19.365 27.4051 19.4549 27.63 19.68 27.63C20.85 27.63 22.11 23.985 22.0201 22.5451C22.0107 22.4739 22.023 22.4017 22.055 22.3375C22.0871 22.2733 22.1376 22.2202 22.2001 22.185C22.3954 22.088 22.612 22.0416 22.8299 22.05C23.7299 22.05 23.64 23.31 23.28 24.66C24.3149 22.95 25.35 21.96 26.115 21.96C26.79 21.96 27.15 22.5 27.15 23.31C27.15 23.8842 26.9976 24.4937 26.8484 25.0903C26.7052 25.6626 26.5649 26.2233 26.5649 26.73C26.5649 27.09 26.61 27.3151 26.835 27.3151C27.42 27.3151 28.2299 26.235 28.6349 24.7951C28.7701 24.48 28.7701 24.12 28.7701 23.7601C28.86 22.8151 29.1749 22.005 30.1199 22.005C30.525 22.005 30.615 22.095 30.615 22.275C30.615 22.3697 30.6041 22.4367 30.5898 22.5225L30.5892 22.525C30.5625 22.684 30.525 22.9085 30.525 23.49C30.525 25.11 30.6599 27.27 31.11 27.27C31.47 27.27 32.3699 26.0101 33 24.57C32.235 24.21 31.92 23.4 31.92 22.68C31.92 21.645 32.46 20.745 33.4501 20.745C34.0799 20.745 34.485 21.24 34.485 22.05C34.4535 22.7797 34.2856 23.4971 33.99 24.165C34.485 24.3 35.2049 24.0301 35.79 23.265C36.375 22.455 37.095 22.005 37.86 22.005C38.49 22.005 38.985 22.275 39.1199 22.95C39.525 22.185 40.0201 22.05 40.4249 22.05C40.8299 22.05 41.0099 22.185 41.0099 22.5C40.5084 23.9571 40.1761 25.467 40.0201 27C40.0201 27.4051 40.11 27.675 40.335 27.675C40.74 27.675 41.235 27.0451 41.595 26.0101ZM15.81 26.37C15.81 27.09 16.0351 27.585 16.485 27.585C17.3401 27.585 18.1501 25.29 18.1501 23.985C18.1501 23.4 18.015 22.95 17.61 22.95C16.71 22.95 15.81 25.065 15.81 26.37ZM33.3149 23.76C33.0361 23.4007 32.8927 22.9546 32.9101 22.5C32.9101 22.005 33.1349 21.555 33.36 21.555C33.585 21.555 33.6751 21.7801 33.6751 22.095C33.6751 22.59 33.4501 23.355 33.3149 23.76ZM36.4651 26.37C36.4651 27 36.6901 27.585 37.14 27.585C37.9951 27.585 38.8052 25.29 38.8052 23.985C38.8052 23.4 38.7151 22.95 38.265 22.95C37.365 22.95 36.4651 25.11 36.4651 26.37Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }), React.createElement("defs", null, React.createElement("radialGradient", {
    id: "a",
    cx: "0",
    cy: "0",
    r: "1",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(22.10526 35.3684 -52.8107 33.0067 14.053 5.21)"
  }, React.createElement("stop", {
    stopColor: "#02BFCD"
  }), React.createElement("stop", {
    offset: ".229",
    stopColor: "#02BFCD"
  }), React.createElement("stop", {
    offset: ".719",
    stopColor: "#3A6CE5"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#7428EF"
  }))));
});
IconCanva.displayName = 'IconCanva';

var _excluded$2L = ["color"];
var IconGoogle = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2L);
  return React.createElement("svg", Object.assign({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "mm-icon"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M12.9519 24C12.9519 22.766 13.1625 21.5823 13.5352 20.473L6.99286 15.5825C5.67839 18.1937 4.99579 21.0769 5.00002 24C5.00002 27.0249 5.71614 29.8783 6.98962 32.411L13.5287 27.5124C13.1474 26.3805 12.9526 25.1943 12.9519 24Z",
    fill: color
  }), React.createElement("path", {
    d: "M24.4423 12.7729C27.1805 12.7729 29.6545 13.7219 31.5987 15.2765L37.2548 9.7496C33.8087 6.81369 29.3904 5 24.4423 5C16.7594 5 10.1555 9.29941 6.99286 15.5825L13.5384 20.473C15.0452 15.9939 19.342 12.7729 24.4423 12.7729Z",
    fill: color
  }), React.createElement("path", {
    d: "M24.4423 35.2271C19.3403 35.2271 15.0436 32.0061 13.5352 27.527L6.99286 32.4175C10.1539 38.7006 16.7578 43 24.4423 43C29.183 43 33.7098 41.3531 37.109 38.265L30.8972 33.5656C29.1457 34.6457 26.939 35.2271 24.4407 35.2271",
    fill: color
  }), React.createElement("path", {
    d: "M43 24C43 22.8778 42.8218 21.6681 42.5577 20.5459H24.4407V27.8865H34.8683C34.3482 30.39 32.9289 32.3138 30.8988 33.5656L37.109 38.265C40.6783 35.023 43 30.1941 43 24Z",
    fill: color
  }));
});
IconGoogle.displayName = 'IconGoogle';

exports.IconAdd = IconAdd;
exports.IconAiRecognition = IconAiRecognition;
exports.IconAlignBottom = IconAlignBottom;
exports.IconAlignCenterHorizontally = IconAlignCenterHorizontally;
exports.IconAlignCenterVertically = IconAlignCenterVertically;
exports.IconAlignLeft = IconAlignLeft;
exports.IconAlignRight = IconAlignRight;
exports.IconAlignTop = IconAlignTop;
exports.IconApp = IconApp;
exports.IconArticle = IconArticle;
exports.IconAsPublic = IconAsPublic;
exports.IconAttributeA = IconAttributeA;
exports.IconAttributeDeg = IconAttributeDeg;
exports.IconAttributeH = IconAttributeH;
exports.IconAttributeOpacity = IconAttributeOpacity;
exports.IconAttributeW = IconAttributeW;
exports.IconAttributeX = IconAttributeX;
exports.IconAttributeY = IconAttributeY;
exports.IconBilling = IconBilling;
exports.IconBringForward = IconBringForward;
exports.IconBringToFront = IconBringToFront;
exports.IconCanva = IconCanva;
exports.IconCart = IconCart;
exports.IconCheck = IconCheck;
exports.IconCheckCircleFill = IconCheckCircleFill;
exports.IconCheckCircleLine = IconCheckCircleLine;
exports.IconCheckbox = IconCheckbox;
exports.IconClear = IconClear;
exports.IconClose = IconClose;
exports.IconCloseCircleFill = IconCloseCircleFill;
exports.IconColor = IconColor;
exports.IconComputer = IconComputer;
exports.IconCopy = IconCopy;
exports.IconCornerLeftUp = IconCornerLeftUp;
exports.IconCurrency = IconCurrency;
exports.IconCustomerService = IconCustomerService;
exports.IconDashboard = IconDashboard;
exports.IconDelete = IconDelete;
exports.IconDeviceDesktopBicolor = IconDeviceDesktopBicolor;
exports.IconDown = IconDown;
exports.IconDownArrow = IconDownArrow;
exports.IconDownBold = IconDownBold;
exports.IconDownCaret = IconDownCaret;
exports.IconDownload = IconDownload;
exports.IconDrag = IconDrag;
exports.IconDragHorizontally = IconDragHorizontally;
exports.IconDragVertically = IconDragVertically;
exports.IconEarth = IconEarth;
exports.IconEmpty = IconEmpty;
exports.IconErrorCircleLine = IconErrorCircleLine;
exports.IconExclamationCircleFill = IconExclamationCircleFill;
exports.IconExclamationCircleLine = IconExclamationCircleLine;
exports.IconExpandWindow = IconExpandWindow;
exports.IconEye = IconEye;
exports.IconEyeClose = IconEyeClose;
exports.IconFacebook = IconFacebook;
exports.IconFeedback = IconFeedback;
exports.IconFile = IconFile;
exports.IconFilter = IconFilter;
exports.IconFilters = IconFilters;
exports.IconFlipHorizontally = IconFlipHorizontally;
exports.IconFlipVertically = IconFlipVertically;
exports.IconGoogle = IconGoogle;
exports.IconGoogledrive = IconGoogledrive;
exports.IconHand = IconHand;
exports.IconHeartFill = IconHeartFill;
exports.IconHeartLine = IconHeartLine;
exports.IconHome = IconHome;
exports.IconHourglass = IconHourglass;
exports.IconImage = IconImage;
exports.IconImageAdd = IconImageAdd;
exports.IconImageError = IconImageError;
exports.IconInfoCircleFill = IconInfoCircleFill;
exports.IconInstagram = IconInstagram;
exports.IconLanguage = IconLanguage;
exports.IconLeft = IconLeft;
exports.IconLeftArrow = IconLeftArrow;
exports.IconLeftBold = IconLeftBold;
exports.IconLeftCaret = IconLeftCaret;
exports.IconList = IconList;
exports.IconLoading = IconLoading;
exports.IconLoadingM = IconLoadingM;
exports.IconLocation = IconLocation;
exports.IconMaker = IconMaker;
exports.IconMenu = IconMenu;
exports.IconMenuFold = IconMenuFold;
exports.IconMenuUnFold = IconMenuUnFold;
exports.IconMinus = IconMinus;
exports.IconMirrorHorizontal = IconMirrorHorizontal;
exports.IconMirrorVertical = IconMirrorVertical;
exports.IconMobile = IconMobile;
exports.IconMore = IconMore;
exports.IconMoreBicolor = IconMoreBicolor;
exports.IconMoreVertical = IconMoreVertical;
exports.IconMyProduct = IconMyProduct;
exports.IconNav = IconNav;
exports.IconNotificationFill = IconNotificationFill;
exports.IconNotificationLine = IconNotificationLine;
exports.IconOrder = IconOrder;
exports.IconPalette = IconPalette;
exports.IconPaste = IconPaste;
exports.IconPattern = IconPattern;
exports.IconPattern1 = IconPattern1;
exports.IconPattern2 = IconPattern2;
exports.IconPattern3 = IconPattern3;
exports.IconPattern4 = IconPattern4;
exports.IconPattern5 = IconPattern5;
exports.IconPattern6 = IconPattern6;
exports.IconPen = IconPen;
exports.IconPlus = IconPlus;
exports.IconPlusCircleLine = IconPlusCircleLine;
exports.IconPrint = IconPrint;
exports.IconProducts = IconProducts;
exports.IconProgress0 = IconProgress0;
exports.IconPuzzle = IconPuzzle;
exports.IconQuestionCircleFill = IconQuestionCircleFill;
exports.IconQuestionCircleLine = IconQuestionCircleLine;
exports.IconQuit = IconQuit;
exports.IconRead = IconRead;
exports.IconRefunded = IconRefunded;
exports.IconRetry = IconRetry;
exports.IconRetryCircle = IconRetryCircle;
exports.IconRight = IconRight;
exports.IconRightArrow = IconRightArrow;
exports.IconRightBold = IconRightBold;
exports.IconRightCaret = IconRightCaret;
exports.IconSafety = IconSafety;
exports.IconSearch = IconSearch;
exports.IconSendBckward = IconSendBckward;
exports.IconSendToBack = IconSendToBack;
exports.IconSettings = IconSettings;
exports.IconShareOpen = IconShareOpen;
exports.IconSignIn = IconSignIn;
exports.IconSignUp = IconSignUp;
exports.IconSkin = IconSkin;
exports.IconSkinAdd = IconSkinAdd;
exports.IconSpotify = IconSpotify;
exports.IconStepBackFill = IconStepBackFill;
exports.IconStepBackLine = IconStepBackLine;
exports.IconStepNextFill = IconStepNextFill;
exports.IconStepNextLine = IconStepNextLine;
exports.IconStockBicolor = IconStockBicolor;
exports.IconStore = IconStore;
exports.IconStoreImport = IconStoreImport;
exports.IconSubscription = IconSubscription;
exports.IconSwap = IconSwap;
exports.IconSwapBold = IconSwapBold;
exports.IconSymbol = IconSymbol;
exports.IconTag = IconTag;
exports.IconTailoring = IconTailoring;
exports.IconTextAlignCenter = IconTextAlignCenter;
exports.IconTextAlignLeft = IconTextAlignLeft;
exports.IconTextAlignRight = IconTextAlignRight;
exports.IconTextBold = IconTextBold;
exports.IconTextItalic = IconTextItalic;
exports.IconTextOrderedList = IconTextOrderedList;
exports.IconTextUnderline = IconTextUnderline;
exports.IconTextUnorderedList = IconTextUnorderedList;
exports.IconThunbsDown = IconThunbsDown;
exports.IconThunbsUp = IconThunbsUp;
exports.IconTimeCircleFill = IconTimeCircleFill;
exports.IconToolLocked = IconToolLocked;
exports.IconToolRotate = IconToolRotate;
exports.IconToolRotateLeft90 = IconToolRotateLeft90;
exports.IconToolRotateRight90 = IconToolRotateRight90;
exports.IconToolUnlocked = IconToolUnlocked;
exports.IconUp = IconUp;
exports.IconUpArrow = IconUpArrow;
exports.IconUpBold = IconUpBold;
exports.IconUpCaret = IconUpCaret;
exports.IconUpload = IconUpload;
exports.IconUploadText = IconUploadText;
exports.IconVerification = IconVerification;
exports.IconWallet = IconWallet;
exports.IconZoomIn = IconZoomIn;
exports.IconZoomOut = IconZoomOut;
//# sourceMappingURL=icons.cjs.development.js.map
