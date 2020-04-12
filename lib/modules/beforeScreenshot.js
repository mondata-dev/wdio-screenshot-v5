'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _scroll = require('../scripts/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _scrollbars = require('../scripts/scrollbars');

var _scrollbars2 = _interopRequireDefault(_scrollbars);

var _removeElements = require('../scripts/removeElements');

var _removeElements2 = _interopRequireDefault(_removeElements);

var _triggerResize = require('../scripts/triggerResize');

var _triggerResize2 = _interopRequireDefault(_triggerResize);

var _hideElements = require('../scripts/hideElements');

var _hideElements2 = _interopRequireDefault(_hideElements);

var _getElements = require('../utils/getElements');

var _getElements2 = _interopRequireDefault(_getElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('wdio-screenshot:beforeScreenshot');

exports.default = function beforeScreenshot(browser, options) {
  var i, elements, _i, _elements, x, y, pause;

  return _regenerator2.default.async(function beforeScreenshot$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // hide scrollbars
          log('hide scrollbars');
          _context.next = 3;
          return _regenerator2.default.awrap(browser.execute(_scrollbars2.default, false));

        case 3:

          log('trigger resize event to allow js components to resize properly');
          _context.next = 6;
          return _regenerator2.default.awrap(browser.execute(_triggerResize2.default));

        case 6:
          if (!(Array.isArray(options.hide) && options.hide.length)) {
            _context.next = 30;
            break;
          }

          log('hide the following elements: %s', options.hide.join(', '));

          i = 0;

        case 9:
          if (!(i < options.hide.length)) {
            _context.next = 30;
            break;
          }

          _context.prev = 10;

          console.log("GO 1");
          _context.next = 14;
          return _regenerator2.default.awrap((0, _getElements2.default)(options.hide[i]));

        case 14:
          elements = _context.sent;

          console.log("GO 2");
          console.log("GO 3");
          _context.next = 19;
          return _regenerator2.default.awrap(browser.execute(_hideElements2.default, elements, true));

        case 19:
          console.log("GO 4");
          _context.next = 27;
          break;

        case 22:
          _context.prev = 22;
          _context.t0 = _context['catch'](10);

          console.error(_context.t0);
          _context.next = 27;
          return _regenerator2.default.awrap(browser.pause(30000));

        case 27:
          i++;
          _context.next = 9;
          break;

        case 30:
          if (!(Array.isArray(options.remove) && options.remove.length)) {
            _context.next = 42;
            break;
          }

          log('remove the following elements: %s', options.remove.join(', '));

          _i = 0;

        case 33:
          if (!(_i < options.remove.length)) {
            _context.next = 42;
            break;
          }

          _context.next = 36;
          return _regenerator2.default.awrap((0, _getElements2.default)(options.remove[_i]));

        case 36:
          _elements = _context.sent;
          _context.next = 39;
          return _regenerator2.default.awrap(browser.execute(_removeElements2.default, _elements, true));

        case 39:
          _i++;
          _context.next = 33;
          break;

        case 42:

          // scroll back to start
          x = 0;
          y = 0;

          log('scroll back to start x: %s, y: %s', x, y);
          _context.next = 47;
          return _regenerator2.default.awrap(browser.execute(_scroll2.default, x, y));

        case 47:

          // wait a bit for browser render
          pause = 200;

          log('wait %s ms for browser render', pause);
          _context.next = 51;
          return _regenerator2.default.awrap(browser.pause(pause));

        case 51:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this, [[10, 22]]);
};