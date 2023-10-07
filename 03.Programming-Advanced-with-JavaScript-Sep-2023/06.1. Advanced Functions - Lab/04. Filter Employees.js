/**
 *Write a program that filters the employees of your company. You should print the result in a specific format.
  You will receive 2 parameters (data, criteria). You should parse the input, find all employees that fulfill the criteria, and print them.
  If the criteria are "all" print all the employees in the given format.
 */
function filterEmployees(data, criteria) {
  const [key, value] = criteria.split('-');
  let counter = 0;

  JSON.parse(data)
    .forEach(employee => {
      if (key === 'all' || employee[key] === value) {
        console.log(`${counter++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
      }
    });
}

filterEmployees(
  `[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
},  
{
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}]`,
  "all"
);
console.log("------")
filterEmployees(
  `[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
},  
{
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}]`,
 'gender-Female'
);
