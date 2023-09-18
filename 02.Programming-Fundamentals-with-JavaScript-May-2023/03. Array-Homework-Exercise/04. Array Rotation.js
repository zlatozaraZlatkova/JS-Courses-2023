function arrayRotation(arr, numOfRotations) {
  let separator = " ";

  for (let i = 0; i < numOfRotations; i++) {
    let elementMoveToEnd = arr.shift();
    arr.push(elementMoveToEnd);
  }
  console.log(arr.join(separator));
}
arrayRotation([51, 47, 32, 61, 21], 2)

//Version 2

function solve(arr, rotationCount) {
  let bufferArr = [];
  let separator = " ";

  for (let i = 0; i < rotationCount; i++) {
    let currentNum = arr[0];

    for (let j = 1; j < arr.length; j++) {
      bufferArr.push(arr[j]);
    }
    bufferArr.push(currentNum);
    arr = bufferArr;
    bufferArr = [];
  }
  console.log(arr.join(separator));
}
solve([51, 47, 32, 61, 21], 2);
