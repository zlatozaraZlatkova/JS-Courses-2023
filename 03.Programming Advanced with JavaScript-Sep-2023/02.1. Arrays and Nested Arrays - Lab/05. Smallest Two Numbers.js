function getSmallestTwoNumbers(arr) {
  let smallestNum = Math.min(...arr);
  let result = [];
  let newArr = [];

  for (let number of arr) {
    if (number === smallestNum) {
      result.push(smallestNum);
      let indexOfSmallestNumber = arr.indexOf(smallestNum);
      arr.splice(indexOfSmallestNumber, 1);
    }
    newArr = arr;
  }
  let secondSmallestNum = Math.min(...newArr);
  result.push(secondSmallestNum);

  if (result.length > 2) {
    let biggestNum = Math.max(...result);
    let indexOfBiggestNumber = result.indexOf(biggestNum);
    result.splice(indexOfBiggestNumber, 1);
  }
  console.log(result.join(" "));
}
getSmallestTwoNumbers([30, 15, 50, 5]);
getSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);
getSmallestTwoNumbers([-1, 0, 10, 4, 7, 3, -2]);
getSmallestTwoNumbers([-1, 0, 10, 4, 7, 3, 0, -1]);
getSmallestTwoNumbers([0, 0, 10, 4, 7, 3, 1, 0]);
