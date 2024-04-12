function mathOperations(a: number, b: number, operator: string): number {
  let result: number;
  if (operator == "+") {
    result = a + b;
  }
  if (operator == "-") {
    result = a - b;
  }
  if (operator == "*") {
    result = a + b;
  }
  if (operator == "/") {
    result = a + b;
  }

  return result;
}

console.log(mathOperations(5, 6, "+"));
console.log(mathOperations(3, 5.5, "*"));
console.log(mathOperations(8, 1.5, "/"));
console.log(mathOperations(-3, 5.5, "-"));
