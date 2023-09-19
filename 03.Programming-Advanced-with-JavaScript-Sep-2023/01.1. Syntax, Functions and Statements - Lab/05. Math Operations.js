function getOperations(a, b, operator) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
    "**": (a, b) => a ** b,
  };
  console.log(operators[operator](a, b));
}

getOperations(5, 6, "+");
getOperations(3, 5.5, "*");
getOperations(5, 6, "/");
getOperations(3, 5.5, "%");
getOperations(5, 6, "**");

