/**
  Write a JS function that checks if a given matrix of numbers is magical. 
  A matrix is magical if the sums of the cells of every row and every column are equal.
  The input comes as an array of arrays, containing numbers (number 2D matrix). 
  The input numbers will always be positive.
 */

function doMagic(arr) {
  return checkMagic(arr) && checkMagic(rotate(arr));

  function rotate(array) {
    return array[0].map((x, i) => array.map((x) => x[i]));
  }

  function checkMagic(arr) {
    arr = arr.map((x) => x.reduce((a, b) => a + b));

    return Array.from(new Set(arr)).length === 1;
  }
}
console.log(
  doMagic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

// version 2
function solve(matrix) {
  let rowTotal = matrix[0].reduce((a, b) => a + b);
  let colTotal = 0;

  matrix.forEach((row) => {
    colTotal += row[0];
  });

  let result = true;

  for (let i = 0; i < matrix.length; i++) {
    const sumCurrentRow = matrix[i].reduce((acc, item) => acc + item);
    let sumCurrentCol = 0;

    for (let j = 0; j < matrix.length; j++) {
      const num = matrix[j][i];
      sumCurrentCol += num;
    }
    if (sumCurrentRow !== rowTotal || sumCurrentCol !== colTotal) {
      result = false;
      break;
    }
  }

  console.log(result);
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
