// ! normal function type
const myFunc: Function = () => {
  console.log('hello');
};
myFunc();

// ! parameterize function type
const myFunc2 = (a: string, b: string) => {
  console.log(`hello ${a} ${b}`);
};

myFunc2('Shonjoy', 'Das');

// ! optional function type
const myFunc3 = (a: string, b: string, c?: string) => {
  console.log(c);
  console.log(`hello ${a} ${b}`);
};

myFunc3('Shonjoy', 'Das');
