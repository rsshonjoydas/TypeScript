import { isProgrammer } from './isProgrammer';

class Coders implements isProgrammer {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  code() {
    console.log(`${this.name} from ${this.country} is Programmer!`);
  }
}

const joy = new Coders('Joy', 21, 'USA');
console.log(joy);
