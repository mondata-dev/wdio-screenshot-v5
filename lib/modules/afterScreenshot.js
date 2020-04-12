'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _scrollbars = require('../scripts/scrollbars');

var _scrollbars2 = _interopRequireDefault(_scrollbars);

var _removeElements = require('../scripts/removeElements');

var _removeElements2 = _interopRequireDefault(_removeElements);

var _hideElements = require('../scripts/hideElements');

var _hideElements2 = _interopRequireDefault(_hideElements);

var _getElements = require('../utils/getElements');

var _getElements2 = _interopRequireDefault(_getElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('wdio-screenshot:afterScreenshot');

exports.default = function afterScreenshot(browser, options) {
    var i, elements, _i, _elements;

    return _regenerator2.default.async(function afterScreenshot$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    if (!(Array.isArray(options.hide) && options.hide.length)) {
                        _context.next = 12;
                        break;
                    }

                    log('show the following elements again: %s', options.hide.join(', '));

                    i = 0;

                case 3:
                    if (!(i < options.hide.length)) {
                        _context.next = 12;
                        break;
                    }

                    _context.next = 6;
                    return _regenerator2.default.awrap((0, _getElements2.default)(options.hide[i]));

                case 6:
                    elements = _context.sent;
                    _context.next = 9;
                    return _regenerator2.default.awrap(browser.execute(_hideElements2.default, elements, false));

                case 9:
                    i++;
                    _context.next = 3;
                    break;

                case 12:
                    if (!(Array.isArray(options.remove) && options.remove.length)) {
                        _context.next = 24;
                        break;
                    }

                    log('add the following elements again: %s', options.remove.join(', '));

                    _i = 0;

                case 15:
                    if (!(_i < options.remove.length)) {
                        _context.next = 24;
                        break;
                    }

                    _context.next = 18;
                    return _regenerator2.default.awrap((0, _getElements2.default)(options.remove[_i]));

                case 18:
                    _elements = _context.sent;
                    _context.next = 21;
                    return _regenerator2.default.awrap(browser.execute(_removeElements2.default, _elements, false));

                case 21:
                    _i++;
                    _context.next = 15;
                    break;

                case 24:

                    // show scrollbars
                    log('show scrollbars again');
                    _context.next = 27;
                    return _regenerator2.default.awrap(browser.execute(_scrollbars2.default, true));

                case 27:
                case 'end':
                    return _context.stop();
            }
        }
    }, null, this);
};