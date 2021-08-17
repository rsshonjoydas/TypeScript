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
// ! function signatures with object
var userDetail;
userDetail = function (id, user) {
    return "User id is " + id + ", name is " + user.name + " and age is " + user.age;
};
var userShonjoy = userDetail(37, {
    name: 'Shonjoy',
    age: 21,
});
console.log(userShonjoy);
