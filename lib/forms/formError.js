'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormError;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formConstants = require('./formConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormError(_ref) {
  var forInput = _ref.forInput,
      msg = _ref.msg,
      className = _ref.className;

  return _react2.default.createElement(
    'span',
    { className: _formConstants.ERROR_MSG_CLASS_NAME + ' ' + _formConstants.ERROR_MSG_CLASS_NAME + '--' + forInput + ' ' + (className || '') },
    msg
  );
}

FormError.displayName = 'FormError';
FormError.propTypes = {
  forInput: _react.PropTypes.string.isRequired,
  msg: _react.PropTypes.string,
  className: _react.PropTypes.string
};
//# sourceMappingURL=formError.js.map