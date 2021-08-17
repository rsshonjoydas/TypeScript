"use strict";
// ! normal function type
var myFunc = function () {
    console.log('hello');
};
myFunc();
// ! parameterize function type
var myFunc2 = function (a, b) {
    console.log("hello " + a + " " + b);
};
myFunc2('Shonjoy', 'Das');
// ! optional function type
var myFunc3 = function (a, b, c) {
    console.log(c);
    console.log("hello " + a + " " + b);
};
myFunc3('Shonjoy', 'Das');
// ! default function type
var myFunc4 = function (a, b, c) {
    if (c === void 0) { c = 'welcome'; }
    console.log(c);
    console.log("hello " + a + " " + b);
};
myFunc4('Shonjoy', 'Das');
myFunc4('Shonjoy', 'Das', 'Programmer');
// ! specific function type
var myFunc5 = function (a, b) {
    return a + b;
};
console.log(myFunc5(3, 7));
