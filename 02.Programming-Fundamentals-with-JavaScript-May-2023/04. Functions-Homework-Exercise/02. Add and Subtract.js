function solve(a, b, c) {
  let sum = sumOfTwoNumbers(a, b);
  let subtract = subtractSecondTwoNumbers(sum, c);

  return subtract;
}
function sumOfTwoNumbers(a, b) {
  return a + b;
}
function subtractSecondTwoNumbers(a, b) {
  return a - b;
}
console.log(solve(23, 6, 10));
