'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hideElements;
function hideElements(elems) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


    if (flag) {
        return elems.forEach(function (ele) {
            ele.style.setProperty('opacity', '0.0', 'important');
        });
    } else {
        return elems.forEach(function (ele) {
            ele.style.setProperty('opacity', '1.0');
        });
    }
}