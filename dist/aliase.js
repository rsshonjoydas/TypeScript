"use strict";
const userDetails = (id, user) => {
    return `User id is ${id}, name is ${user.name} and age is ${user.age}`;
};
const shonjoy = userDetails(37, {
    name: 'Shonjoy',
    age: 21,
});
console.log(shonjoy);
const Lovelace = (user) => {
    return `Hello ${user.age > 50 ? 'Mr' : 'programmer'} ${user.name}`;
};
const lovelace = Lovelace({
    age: 18,
    name: 'Lovelace',
});
console.log(lovelace);
