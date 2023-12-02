// ! example of type alias vs interface
// type UserProps = {
//   name: string;
//   age: number;
// };

// interface UserProps {
//   name: string;
//   age: number;
// }

// ! combining a base with additional properties
// ? "intersection"
// type UserProps = {
//   name: string;
//   age: number;
// };

// type AdminProps = UserProps & {
//   role: string;
// };

// ? "extending"
// interface UserProps {
//   name: string;
//   age: number;
// }

// interface AdminProps extends UserProps {
//   role: string;
// }

// ! interface problem 1
// ? interface can only describe object - type alias can describe object AND everything else (g.g. primitive values such as string, number, boolean)
// type Address = string;
// const address: Address = '123 Main St';

// interface Address {
//   address: string;
// }

// const address: Address = {
//   address: '123 Main St',
// };

// ! interface problem 2
// ? type alias can also describe union types - interface cannot
// type Address = string | string[];
// const address: Address = ['123 Main St', '321 Main St'];

// ! interface problem 3
// type Address = [number, string]
// const address: Address = [2, 'Other St.']

// interface Address extends Array<number | string> {
//   0: number;
//   1: string;
// }
// const address: Address = [2, 'Other St.'];

// ! interface problem 4
const project = {
  title: 'Project 1',
  specification: {
    areaSize: 100,
    rooms: 3,
  },
} as const;

type Project = typeof project;
type Specification = (typeof project)['specification'];
