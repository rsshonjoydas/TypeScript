class Coders {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    code() {
        console.log(`${this.name} from ${this.country} is Programmer!`);
    }
}
const joy = new Coders('Joy', 21, 'USA');
console.log(joy);
export {};
