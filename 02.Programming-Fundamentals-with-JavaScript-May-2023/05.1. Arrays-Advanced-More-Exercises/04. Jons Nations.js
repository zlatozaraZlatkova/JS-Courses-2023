function getNotations(input) {
  let arr = [];
  let symbols = ["+", "-", "*", "/"];

  for (let element of input) {
      if (!symbols.find(n => n === element)) {
          arr.push(Number(element));
          continue;
      }
      if (arr.length < 2) {
          return "Error: not enough operands!";
      }

      let num2 = arr.pop();
      let num1 = arr.pop();
      let sum = calculate(num1, num2, element);

      arr.push(sum);

  }
  if (arr.length > 1) {
     return "Error: too many operands!";
  } else {
      return arr.join("");
  }

  function calculate(num1, num2,element) {
      return element === "*" ?
          num1 * num2 : element === "/" ?
              num1 / num2 : element === "+" ?
                  num1 + num2 : num1 - num2;
  }
}

console.log(getNotations([20, 3, 4, '*', '-']));


// solve([5, 3, 4, '*', '-']);
// solve([15, '/']);
// solve([7, 33, 8, '-']);
// solve([3, 4, '+']);
// solve([31, 2, '+', 11, '/']);
// solve([-1, 1, '+', 101, '*', 18, '+', 3, '/']);