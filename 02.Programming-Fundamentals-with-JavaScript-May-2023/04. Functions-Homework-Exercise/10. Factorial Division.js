function solve(firstNum, secondNum) {
  let firstFactorial = factorial(firstNum);
  let secondFactorial = factorial(secondNum);
  let result = division(firstFactorial, secondFactorial);
  console.log(result.toFixed(2));

  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

  function division(a, b) {
    return a / b;
  }
}
solve(5, 2);
