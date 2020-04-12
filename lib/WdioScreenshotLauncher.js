"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeViewportScreenshot = exports.makeElementScreenshot = exports.makeDocumentScreenshot = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

exports.init = init;

var _saveDocumentScreenshot = require("./commands/saveDocumentScreenshot");

var _saveDocumentScreenshot2 = _interopRequireDefault(_saveDocumentScreenshot);

var _saveElementScreenshot = require("./commands/saveElementScreenshot");

var _saveElementScreenshot2 = _interopRequireDefault(_saveElementScreenshot);

var _saveViewportScreenshot = require("./commands/saveViewportScreenshot");

var _saveViewportScreenshot2 = _interopRequireDefault(_saveViewportScreenshot);

var _makeDocumentScreenshot = require("./modules/makeDocumentScreenshot");

var _makeDocumentScreenshot2 = _interopRequireDefault(_makeDocumentScreenshot);

var _makeElementScreenshot = require("./modules/makeElementScreenshot");

var _makeElementScreenshot2 = _interopRequireDefault(_makeElementScreenshot);

var _makeViewportScreenshot = require("./modules/makeViewportScreenshot");

var _makeViewportScreenshot2 = _interopRequireDefault(_makeViewportScreenshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WdioScreenshot = function () {
  function WdioScreenshot() {
    var browser = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var standalone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    (0, _classCallCheck3.default)(this, WdioScreenshot);

    if (!browser) {
      throw new Error('A WebdriverIO instance is needed to initialise wdio-screenshot');
    }
  }

  (0, _createClass3.default)(WdioScreenshot, [{
    key: "before",
    value: function before() {
      // add commands to WebdriverIO instance
      browser.addCommand('saveDocumentScreenshot', _saveDocumentScreenshot2.default);
      browser.addCommand('saveElementScreenshot', _saveElementScreenshot2.default);
      browser.addCommand('saveViewportScreenshot', _saveViewportScreenshot2.default);
    }
  }]);
  return WdioScreenshot;
}();

exports.default = WdioScreenshot;
function init(webdriverInstance) {
  // return new WdioScreenshot(webdriverInstance, options, true);


  webdriverInstance.addCommand('saveDocumentScreenshot', _saveDocumentScreenshot2.default);
  webdriverInstance.addCommand('saveElementScreenshot', _saveElementScreenshot2.default);
  webdriverInstance.addCommand('saveViewportScreenshot', _saveViewportScreenshot2.default);
}

exports.makeDocumentScreenshot = _makeDocumentScreenshot2.default;
exports.makeElementScreenshot = _makeElementScreenshot2.default;
exports.makeViewportScreenshot = _makeViewportScreenshot2.default;