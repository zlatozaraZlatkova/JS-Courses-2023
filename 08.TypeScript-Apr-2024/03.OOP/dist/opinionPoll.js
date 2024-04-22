class Person {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    printPersonData() {
        return `${this.name} is ${this.age} years old.`;
    }
}
function getPersonData(str) {
    const [name, age] = srt.split(" ");
    const person = new Person(name, Number(age));
    console.log(person.printPersonData());
}
const srt = "Peter 12";
getPersonData(srt);
