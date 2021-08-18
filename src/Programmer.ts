import { isProgrammer } from './isProgrammer';

class Coders implements isProgrammer {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  getProperty() {
    return this.name;
  }

  code() {
    console.log(`${this.name} from ${this.country} is Programmer!`);
  }
}

const joy = new Coders('Joy', 21, 'USA');
console.log(joy);
