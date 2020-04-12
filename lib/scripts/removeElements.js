'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hideElements;
function hideElements(elems) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


  if (flag) {
    return elems.forEach(function (ele) {
      ele.style.setProperty('display', 'none', 'important');
    });
  } else {
    return elems.forEach(function (ele) {
      ele.style.setProperty('display', '');
    });
  }
}