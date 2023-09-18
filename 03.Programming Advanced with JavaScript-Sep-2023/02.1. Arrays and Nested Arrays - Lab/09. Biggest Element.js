function getBiggestElement(matrix) {
  let biggestEl = 0;
  let arr = [];

  matrix.forEach((row) => {
    biggestEl = Math.max(...row);
    arr.push(biggestEl);
  });
  let result = Math.max(...arr);
  return result;
}
console.log(
  getBiggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
console.log(
  getBiggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
);

// Version 2

function biggestElement(input) {
  let arr = [];
  let inputL = input.length;
  for (let i = 0; i < inputL; i++) {
    let innerArr = input[i];
    let innerArrL = innerArr.length;
    for (let j = 0; j < innerArrL; j++) {
      let element = innerArr[j];
      arr.push(element);
    }
  }
  arr.sort((a, b) => {
    return a - b;
  });
  let biggestNum = arr.pop();
  console.log(biggestNum);
}