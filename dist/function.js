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
