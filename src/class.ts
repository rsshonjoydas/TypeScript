export class Programmer {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  programming() {
    console.log(`${this.name} from ${this.country} is Programmer!`);
  }
}

const Shonjoy = new Programmer('Shonjoy', 21, 'Bangladesh');
console.log(Shonjoy);
console.log(Shonjoy.name);

const programmers: Programmer[] = [];

programmers.push(Shonjoy);
console.log(programmers);
