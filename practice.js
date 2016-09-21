'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

//var React = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require("babel-polyfill");

require("./style.css");

var MyComponentClass = _react2['default'].createClass({
  displayName: 'MyComponentClass',

  render: function render() {
    return _react2['default'].createElement(
      'h1',
      null,
      'Helllllo World'
    );
  }
});

_reactDom2['default'].render(_react2['default'].createElement(MyComponentClass, null), document.getElementById('app2'));