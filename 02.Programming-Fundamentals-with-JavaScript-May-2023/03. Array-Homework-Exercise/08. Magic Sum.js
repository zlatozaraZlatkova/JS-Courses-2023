/**
 * Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.
 */

function magicSumOfNumbers(arr, n) {
  let arrLength = arr.length;
  let magicNum = n;
  let magicSum = 0;

  let result = [];

  for (let i = 0; i < arrLength; i++) {
    let firstNum = arr[i];

    for (let j = i + 1; j < arrLength; j++) {
      let secondNum = arr[j];
      magicSum = firstNum + secondNum;

      if (magicSum === magicNum) {
        result.push(firstNum);
        result.push(secondNum);
        console.log(result.join(" "));
        result = [];
      }
    }
  }
}
magicSumOfNumbers([1, 7, 6, 2, 19, 23], 8);
magicSumOfNumbers([14, 20, 60, 13, 7, 19, 8], 27);

//version 2

function solve(array, number) {
  let arrOfValidPairs = [];
  let validPair = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === number) {
        validPair = `${array[i]} ${array[j]}`;
        arrOfValidPairs.push(validPair);
      }
    }
  }
  console.log(arrOfValidPairs.join("\n"));
}
solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
