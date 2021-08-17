"use strict";
//! access modifier
var Coder = /** @class */ (function () {
    function Coder(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Coder.prototype.coding = function () {
        console.log(this.name + " from " + this.country + " is Programmer!");
    };
    return Coder;
}());
var rsshonjoy = new Coder('Shonjoy', 21, 'Bangladesh');
console.log(rsshonjoy);
//? private - don't modify & access anywhere
// rsshonjoy.name = "Joy"
// console.log(rsshonjoy.name);
//? public - do access & modify
rsshonjoy.age = 22;
console.log(rsshonjoy.age);
//? readonly - don't modify but access
// rsshonjoy.country = "USA"
console.log(rsshonjoy.country);
//! access modifier shortcut
var Coders = /** @class */ (function () {
    function Coders(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Coders.prototype.coding = function () {
        console.log(this.name + " from " + this.country + " is Programmer!");
    };
    return Coders;
}());
var joy = new Coders('Joy', 21, 'USA');
console.log(joy);
//? private - don't modify & access anywhere
// joy.name = "Joy"
// console.log(joy.name);
//? public - do access & modify
joy.age = 22;
console.log(joy.age);
//? readonly - don't modify but access
// joy.country = "Bangladesh"
console.log(joy.country);
