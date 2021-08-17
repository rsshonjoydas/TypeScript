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
