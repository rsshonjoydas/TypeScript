class Coders {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProperty() {
        return this.name;
    }
    code() {
        console.log(`${this.name} from ${this.country} is Programmer!`);
    }
}
const joy = new Coders('Joy', 21, 'USA');
console.log(joy);
export {};
