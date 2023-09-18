//A palindrome is a number, which reads the same backward as forward, such as 323 or 1001.
//Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.


function solve(array) {
  let arrOfNumbers = array;

  let isPalindrome = (num) => {
    let startNum = num;
    let reversedNum = Number(num.toString().split("").reverse("").join(""));
    let result = startNum === reversedNum;
    return result ? "true" : "false";
  };
  for (let i = 0; i < array.length; i++) {
    let currentNumber = arrOfNumbers[i];
    console.log(isPalindrome(currentNumber));
  }
}
solve([123, 323, 421, 121]);
