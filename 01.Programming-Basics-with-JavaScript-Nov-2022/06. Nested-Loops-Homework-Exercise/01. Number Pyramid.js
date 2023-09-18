function numberPyramid(input) {
  let n = Number(input[0]);

  let currentRow = 1;
  let flag = false;
  let printCurrentLine = "";

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (currentRow > n) {
        flag = true;
        break;
      }
      printCurrentLine += currentRow + " ";
      currentRow++;
    }
    console.log(printCurrentLine);
    printCurrentLine = "";
    if (flag) {
      break;
    }
  }
}
numberPyramid(["7"]);
