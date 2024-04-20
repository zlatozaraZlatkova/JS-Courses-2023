class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }

  public printPersonData() {
    return `${this.name} is ${this.age} years old.`;
  }
}

function getPersonData(str: string): void {
  const [name, age] = srt.split(" ");

  const person = new Person(name, Number(age));
  console.log(person.printPersonData());
}
const srt = "Peter 12";
getPersonData(srt);
