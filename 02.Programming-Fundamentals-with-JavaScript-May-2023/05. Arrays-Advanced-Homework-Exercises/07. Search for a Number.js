/**
 *     7. Search for a Number
You will receive two arrays of integers. The second array is containing exactly three numbers. 
The first number represents the number of elements you have to take from the first array (starting from the first one).
The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
The third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."
 */

function searchNumber(arrA, arrB) {
  let firstArr = arrA.slice(0);
  let secondArr = arrB.slice(0);

  let numOfTakenElements = secondArr.shift(0);
  let numOfDelElements = secondArr.shift(1);
  let searchCount = secondArr.shift(2);
  let countValue = 0;

  let newArr = [];
  let counter = 0;

  for (let i = 0; i < numOfTakenElements; i++) {
    let currentNum = firstArr[i];
    newArr.push(currentNum);

    if (counter < numOfDelElements) {
      newArr.shift(currentNum);
      counter++;
    }
  }

  newArr.forEach((x) => {
    if (x === searchCount) {
      return countValue++;
    }
  });

  console.log(`Number ${searchCount} occurs ${countValue} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);

// VERSION 2
function searchNumber(numbersArr, commandsArr) {
  let numbersToTake = commandsArr[0];
  let numbersToDel = commandsArr[1];
  let searchedNum = commandsArr[2];

  let newArr = numbersArr.slice(0, numbersToTake);
  console.log(newArr);

  newArr.splice(0, numbersToDel);
  console.log(newArr);

  let numberCounter = newArr.filter(
    (element) => element === searchedNum
  ).length;

  console.log(`Number ${searchedNum} occurs ${numberCounter} times.`);
}
searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
