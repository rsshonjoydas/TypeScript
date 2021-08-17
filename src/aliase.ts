type strNumType = string | number;
type nameAgeType = { name: string; age: number };

const userDetails = (id: strNumType, user: nameAgeType) => {
  return `User id is ${id}, name is ${user.name} and age is ${user.age}`;
};

const shonjoy = userDetails(37, {
  name: 'Shonjoy',
  age: 21,
});
console.log(shonjoy);

const Lovelace = (user: nameAgeType) => {
  return `Hello ${user.age > 50 ? 'Mr' : 'programmer'} ${user.name}`;
};

const lovelace = Lovelace({
  age: 18,
  name: 'Lovelace',
});
console.log(lovelace);
