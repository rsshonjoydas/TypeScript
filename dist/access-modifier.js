"use strict";
//! access modifier
class Coder {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    coding() {
        console.log(`${this.name} from ${this.country} is Programmer!`);
    }
}
const rsshonjoy = new Coder('Shonjoy', 21, 'Bangladesh');
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
class Coders {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    coding() {
        console.log(`${this.name} from ${this.country} is Programmer!`);
    }
}
const joy = new Coders('Joy', 21, 'USA');
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
