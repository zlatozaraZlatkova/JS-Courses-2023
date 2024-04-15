class Person {
    fistName;
    lastName;
    age;
    constructor(fName, lName, age) {
        this.fistName = fName;
        this.lastName = lName;
        this.age = age;
    }
}
function getPersonInfo(fName, lName, age) {
    let person = new Person(fName, lName, Number(age));
    console.log(person);
}
getPersonInfo("Peter", "Pan", "20");
getPersonInfo("George", "Smith", "18");
