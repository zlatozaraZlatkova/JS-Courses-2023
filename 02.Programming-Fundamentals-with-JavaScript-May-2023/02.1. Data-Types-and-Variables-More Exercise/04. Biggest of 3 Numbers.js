function biggestOfThreeNumbers(num1, num2, num3) {
  //use Math.max for the shortest solution
  let maxNum = Math.max(num1, num2, num3);
  console.log(maxNum);
}
biggestOfThreeNumbers(-2, 7, 3)

//version 2

function solve(num1, num2, num3) {
  let largest = 0;

  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }

  console.log(`${largest}`);
}
solve(-2, 7, 3);
