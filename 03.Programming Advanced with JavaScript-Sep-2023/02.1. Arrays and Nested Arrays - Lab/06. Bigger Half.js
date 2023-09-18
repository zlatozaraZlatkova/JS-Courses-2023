function getBiggestHalf(inputArr) {
  let sortedArr = inputArr.sort((a, b) => a - b);
  let newArr = [];
  if (inputArr.length % 2 !== 0) {
    let startOddIndex = Math.ceil(inputArr.length / 2);
    for (let i = startOddIndex - 1; i < sortedArr.length; i++) {
      newArr.push(sortedArr[i]);
    }
  } else {
    let startEvenIndex = inputArr.length / 2;
    for (let i = startEvenIndex; i < sortedArr.length; i++) {
      newArr.push(sortedArr[i]);
    }
  }
  return newArr;
  
}
getBiggestHalf([4, 7, 2, 5]);
getBiggestHalf([3, 19, 14, 7, 2, 19, 6]);
