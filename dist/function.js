"use strict";
// ! normal function type
const myFunc = () => {
    console.log('hello');
};
myFunc();
// ! parameterize function type
const myFunc2 = (a, b) => {
    console.log(`hello ${a} ${b}`);
};
myFunc2('Shonjoy', 'Das');
// ! optional function type
const myFunc3 = (a, b, c) => {
    console.log(c);
    console.log(`hello ${a} ${b}`);
};
myFunc3('Shonjoy', 'Das');
// ! default function type
const myFunc4 = (a, b, c = 'welcome') => {
    console.log(c);
    console.log(`hello ${a} ${b}`);
};
myFunc4('Shonjoy', 'Das');
myFunc4('Shonjoy', 'Das', 'Programmer');
// ! specific function type
const myFunc5 = (a, b) => {
    return a + b;
};
console.log(myFunc5(3, 7));
