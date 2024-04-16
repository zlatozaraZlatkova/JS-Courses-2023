class Employee {
    name;
    personalNumber;
    constructor(name, personalNumber) {
        this.name = name;
        this.personalNumber = personalNumber;
    }
    print() {
        return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`;
    }
}
function getEmployeeData(arr) {
    let data = arr.slice();
    for (let line of data) {
        let name = line;
        let personalNumber = Number(name.length);
        let employee = new Employee(name, personalNumber);
        console.log(employee.print());
    }
}
getEmployeeData([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log("-----");
getEmployeeData([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
