export class Programmer {
    constructor(n, a, c) {
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
const programmers = [];
programmers.push(Shonjoy);
console.log(programmers);
