//Write a function that receives a single integer number n and prints nxn matrix with that number.

function printMatrix(n) {
  function rowGenerator() {
    let row = "";
    for (let i = 1; i <= n; i++) {
      row += `${n} `;
    }
    return row;
  }

  for (let col = 1; col <= n; col++) {
    console.log(rowGenerator());
  }
}
printMatrix(3);
