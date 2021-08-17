"use strict";
var userDetails = function (id, user) {
    return "User id is " + id + ", name is " + user.name + " and age is " + user.age;
};
var shonjoy = userDetails(37, {
    name: 'Shonjoy',
    age: 21,
});
console.log(shonjoy);
var Lovelace = function (user) {
    return "Hello " + (user.age > 50 ? 'Mr' : 'programmer') + " " + user.name;
};
var lovelace = Lovelace({
    age: 18,
    name: 'Lovelace',
});
console.log(lovelace);
