class Employee {
    public name: string;
    public personalNumber: number;

    constructor(name: string, personalNumber: number) {
        this.name = name;
        this.personalNumber = personalNumber;

    }
    print() {
        return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`;
    }
}

function getEmployeeData(arr: string[]): void {
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
])
console.log("-----")

getEmployeeData([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])