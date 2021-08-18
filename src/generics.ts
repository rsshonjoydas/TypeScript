const addID = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: 'Shonjoy',
  age: 21,
  country: 'Bangladesh',
});

const addUserID = addID(user);
console.log(addUserID);
