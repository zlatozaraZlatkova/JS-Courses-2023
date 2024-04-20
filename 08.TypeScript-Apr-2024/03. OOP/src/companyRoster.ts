class Employee {
        name: string;
        salary: number;
        position: string;
        department: string;
        email?: string;
        age?: number;

        constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
                this.name = name;
                this.salary = salary;
                this.position = position;
                this.department = department;
                this.email = email;
                this.age = age;
        }


}


class Department extends Employee {

        constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
                super(name, salary, position, department, email, age);

        }

}


function getBestAvgSalaryByDepartment(inputData: string[]) {

        const fullData = getInputData(inputData)
        //console.log(fullData)

        const departmentsList: { [department: string]: Employee[] } = {};

        fullData.forEach((el) => {
                const [name, salaryString, position, department, email, ageString] = el.split(' ');
                const salary = Number(salaryString);
                const age = Number(ageString);

                const newEmployee = new Department(name, salary, position, department, email, age);

                if (!departmentsList[department]) {
                        departmentsList[department] = [];
                }
                departmentsList[department].push(newEmployee)


        })



        let highestAvgSalary = 0;
        let bestDepartment = "";

        for (const [department, salaryData] of Object.entries(departmentsList)) {
                let currentAvgSalary = salaryData.reduce((a, b) => a + Number(b.salary), 0) / salaryData.length;

                if (currentAvgSalary > highestAvgSalary) {
                        highestAvgSalary = currentAvgSalary;
                        bestDepartment = department;
                }
        }

        console.log(`Highest Average Salary: ${bestDepartment}\n` +
                `${departmentsList[bestDepartment]
                        .sort((a, b) => b.salary - a.salary)
                        .map(e => `${e.name} ${e.salary.toFixed(2)} ${e.email} ${e.age}`)
                        .join("\n")

                }`)





}




function getInputData(dateArr: string[]) {
        const inputData = [];

        for (let i = 0; i < dateArr.length; i++) {
                let [name, salary, position, department, emailStr, ageStr]: string[] = [];

                let email: string = "";
                let age: any = 0;

                let line = dateArr[i].split(" ");

                if (line.length == 4) {
                        [name, salary, position, department] = line;

                        email = "n/a";
                        age = -1;

                        inputData.push(
                                [name, salary, position, department, email, age].join(" ")
                        );
                } else {
                        [name, salary, position, department, emailStr, ageStr] = line;

                        let isNumberEmail = onlyDigits(emailStr);

                        if (typeof emailStr == "string" && typeof ageStr == "string") {
                                email = emailStr;
                                age = Number(ageStr);
                        } else {
                                if (isNumberEmail) {
                                        age = Number(emailStr);
                                        email = "n/a";
                                } else {
                                        email = emailStr;
                                        age = -1;
                                }
                        }

                        inputData.push([name, salary, position, department, email, age].join(" "));


                }




        }


        return inputData

}



function onlyDigits(numberAsString: string) {
        return numberAsString.match("^[0-9]+$");
}

getBestAvgSalaryByDepartment([
        "Peter 120.00 Dev Development peter@abv.bg 28",
        "Sam 840.20 ProjectLeader Development sam@sam.com",
        "Tina 333.33 Manager Marketing 33",
        "George 0.20 Freeloader Nowhere 18",
        "Teo 100 Freeloader Nowhere",
])

console.log("----")

getBestAvgSalaryByDepartment([
        'Silver 496.37 Temp Coding silver@yahoo.com ',
        'Sam 610.13 Manager Sales',
        'John 609.99 Manager Sales john@abv.bg 44',
        'Venci 0.02 Director BeerDrinking beer@beer.br 23',
        'Andre 700.00 Director Coding',
        'Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey'
])

console.log("----")

getBestAvgSalaryByDepartment([
        'Fritz 768.991 Temp Coding',
        'Claus 987.00 Manager Sales',
        'Johnathan 234.45 Manager Sales 44',
        'Kate 0.01 Director BeerDrinking 23',
        'Andy 700 Director Coding',
        'Poly 13.3333 Sailor SpinachGroup popeye@pop.ey'
])



