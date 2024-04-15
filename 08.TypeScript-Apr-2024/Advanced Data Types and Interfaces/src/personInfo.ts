class Person {
  public fistName: string;
  public lastName: string;
  public age: number;

  constructor(fName: string, lName: string, age: number) {
    this.fistName = fName;
    this.lastName = lName;
    this.age = age;
  }
}

function getPersonInfo(fName: string, lName: string, age: string) {
  let person = new Person(fName, lName, Number(age));

  console.log(person);
}
getPersonInfo("Peter", "Pan", "20");
getPersonInfo("George", "Smith", "18");
