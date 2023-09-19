function sortingNumbers(arr) {
  let sortedArr = arr.sort((a, b) => a - b);

  let newArr = [];

  while (sortedArr.length !== 0) {
    let smallerNum = sortedArr.shift();
    let biggestNum = sortedArr.pop();
    newArr.push(smallerNum);
    newArr.push(biggestNum);
  }

  return newArr;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));


//VERSION 2

function sortingNums(array) {
  let result = array.sort((a, b) => { return b - a; });

  for (let i = 0; i < result.length; i += 2) {
      let num = result.pop();
      result.splice(i, 0, num)
  }

  return result;
}
