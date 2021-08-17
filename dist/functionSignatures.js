"use strict";
// ! function signatures
var add;
add = function (a, b) {
    return a + b;
};
console.log(add(3, 7));
// ! function signatures with if else
var calculation;
calculation = function (a, b, c) {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(3, 7, 'add'));
console.log(calculation(3, 7, 'minus'));
