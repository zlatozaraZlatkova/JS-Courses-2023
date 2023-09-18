//Write a function, which will be given a single number. Your task is to find the sum of its digits.

function sumOfDigit(num) {
  let numToString = String(num);
  let sum = 0;

  for (let i = 0; i < numToString.length; i++) {
    let currentDigit = Number(numToString[i]);
    sum += currentDigit;
  }
  console.log(`${sum}`);
}
sumOfDigit(245678);
sumOfDigit(97561);
sumOfDigit(543);
