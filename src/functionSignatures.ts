// ! function signatures
let add: (x: number, y: number) => number;

add = (a, b) => {
  return a + b;
};

console.log(add(3, 7));

// ! function signatures with if else
let calculation: (x: number, y: number, z: string) => number;

calculation = (a, b, c) => {
  if (c === 'add') {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculation(3, 7, 'add'));
console.log(calculation(3, 7, 'minus'));

// ! function signatures with object
let userDetail: (
  id: number,
  user: {
    name: string;
    age: number;
  }
) => void;

userDetail = (id, user) => {
  return `User id is ${id}, name is ${user.name} and age is ${user.age}`;
};

const userShonjoy = userDetail(37, {
  name: 'Shonjoy',
  age: 21,
});
console.log(userShonjoy);
