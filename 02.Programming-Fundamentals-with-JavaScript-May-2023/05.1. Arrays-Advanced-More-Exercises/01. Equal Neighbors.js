function equalNeighborsCount(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i];

    for (let j = 0; j < currentArr.length; j++) {
      if (i < arr.length - 1) {
        if (arr[i][j] === arr[i + 1][j]) {
          counter++;
        }
      }
      if (j < arr[i].length) {
        if (arr[i][j] == arr[i][j + 1]) {
          counter++;
        }
      }
    }
  }
  return counter;
}

console.log(
  equalNeighborsCount([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"],
  ])
);

// version findingNeighbor

function findingNeighbors(myArray, i, j) {
  let rowLimit = myArray.length - 1;
  let columnLimit = myArray[0].length - 1;

  for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
    for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++) {
      if (x !== i || y !== j) {
        console.log(myArray[x][y]);
      }
    }
  }
}
