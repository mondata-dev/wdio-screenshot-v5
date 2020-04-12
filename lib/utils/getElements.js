'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function getElements(elementOrSelector) {
  return _regenerator2.default.async(function getElements$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(0, _isString3.default)(elementOrSelector)) {
            _context.next = 6;
            break;
          }

          _context.next = 3;
          return _regenerator2.default.awrap(browser.$$(elementOrSelector));

        case 3:
          return _context.abrupt('return', _context.sent);

        case 6:
          if (!(0, _isArray3.default)(elementOrSelector)) {
            _context.next = 10;
            break;
          }

          return _context.abrupt('return', elementOrSelector);

        case 10:
          return _context.abrupt('return', [elementOrSelector]);

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};