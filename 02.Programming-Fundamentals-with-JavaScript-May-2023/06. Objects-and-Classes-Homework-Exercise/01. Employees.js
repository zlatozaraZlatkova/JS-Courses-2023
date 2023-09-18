/**
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
Try to use an object.
At the end print all the list employees in the following format:"Name: {employeeName} -- Personal Number: {personalNum}" 

 */
// version array
function solve(input) {
  let result = [];

  for (let name of input) {
    let myInfo = {
      name: name,
      number: name.length,
    };

    result.push(myInfo);
  }

  console.table(result);

  for (let obj of result) {
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

//version class

function solve(input) {
  class Employees {
    constructor(name, length) {
      this.name = name;

      this.length = length;
    }
  }
  let listOfEmployees = [];

  for (let element of input) {
    let currentElement = new Employees(element, element.length);
    listOfEmployees.push(currentElement);
  }

  listOfEmployees.forEach((currentEmployee) =>
    console.log(
      `Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.length}`
    )
  );
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

//version object

function solve(input) {
  let listOfEmployees = {};

  for (let el of input) {
    listOfEmployees.name = el;

    listOfEmployees.personalNumber = el.length;

    console.log(
      `Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNumber}`
    );
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

//version nested for loops

function employees(strArr) {
  let personalNum = 0;
  let employeeName = "";

  for (let i = 0; i < strArr.length; i++) {
    employeeName = strArr[i];

    for (let i = 0; i < employeeName.length; i++) {
      personalNum++;
    }
    console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    personalNum = 0;
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
