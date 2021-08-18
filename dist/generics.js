"use strict";
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: 'Shonjoy',
    age: 21,
    country: 'Bangladesh',
});
const addUserID = addID(user);
console.log(addUserID);
