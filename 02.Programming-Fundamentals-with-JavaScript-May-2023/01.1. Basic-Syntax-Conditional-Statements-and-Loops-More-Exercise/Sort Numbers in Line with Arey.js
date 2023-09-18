function sortNumbers(firstNum, secondNum, thirdNum) {
  let numArr = [
    firstNum.toString(),
    secondNum.toString(),
    thirdNum.toString(),
  ].map(Number);

  let sortedArr = numArr.sort((a, b) => b - a);

  sortedArr.forEach((digit) => console.log(digit));
}
sortNumbers(9,1,5)