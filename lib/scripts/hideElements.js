"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hideElements;
function hideElements(elems) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


    console.log("INIT");
    console.log(elems);
    console.log(flag);

    if (flag) {
        return elems.forEach(function (ele) {
            console.log("YEYY");
            console.log(ele);
            ele.style.setProperty('opacity', '0.0', 'important');
        });
    } else {
        return elems.forEach(function (ele) {
            console.log("NOOOOOOO");
            console.log(ele);
            ele.style.setProperty('opacity', '1.0');
        });
    }
}