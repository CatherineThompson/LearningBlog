'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require("./style.css");

var _practice1Jsx = require("./practice1.jsx");

var _practice1Jsx2 = _interopRequireDefault(_practice1Jsx);

var thingsToSay = {
  greeting: "Hello Mr. Bond"
};

var MyComponentClass = _react2['default'].createClass({
  displayName: 'MyComponentClass',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h1',
        null,
        'Helllllo World!!'
      ),
      _react2['default'].createElement(_practice1Jsx2['default'], { words: thingsToSay })
    );
  }
});

_reactDom2['default'].render(_react2['default'].createElement(MyComponentClass, null), document.getElementById('app2'));