//Write a function that receives 3 parameters: a number, an operator (string), and another number.
//The operator can be:  '+', '-', '/', '*'.
//Print the result of the calculation on the console formatted to the second decimal point.

function calculator(a, operator, b) {
  let sum = 0;

  if (operator === "+") {
    sum = a + b;
  } else if (operator === "-") {
    sum = a - b;
  } else if (operator === "*") {
    sum = a * b;
  } else {
    sum = a / b;
  }
  console.log(`${sum.toFixed(2)}`);
}
calculator(5, "+", 10);
calculator(25.5, "-", 3);
// calculator(5, "*", 10)
// calculator(5, "/", 10)
