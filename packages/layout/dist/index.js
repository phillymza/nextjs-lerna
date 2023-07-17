'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var header = require('@boxfusion/header');
var footer = require('@boxfusion/footer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BoxLayout = function (_a) {
    var children = _a.children;
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement(header.Header, null),
        children,
        React__default["default"].createElement(footer.Footer, null)));
};

exports.BoxLayout = BoxLayout;
