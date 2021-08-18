"use strict";
// ! function signatures
let add;
add = (a, b) => {
    return a + b;
};
console.log(add(3, 7));
// ! function signatures with if else
let calculation;
calculation = (a, b, c) => {
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
let userDetail;
userDetail = (id, user) => {
    return `User id is ${id}, name is ${user.name} and age is ${user.age}`;
};
const userShonjoy = userDetail(37, {
    name: 'Shonjoy',
    age: 21,
});
console.log(userShonjoy);
