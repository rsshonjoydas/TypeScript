"use strict";
var Programmer = /** @class */ (function () {
    function Programmer(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Programmer.prototype.programming = function () {
        console.log(this.name + " from " + this.country + " is Programmer!");
    };
    return Programmer;
}());
var Shonjoy = new Programmer('Shonjoy', 21, 'Bangladesh');
console.log(Shonjoy);
console.log(Shonjoy.name);
var programmers = [];
programmers.push(Shonjoy);
console.log(programmers);
