function equalNeighbors(matrix) {
  let equalPairsAmount = 0;
  let matrixLength = matrix.length;

  for (let i = 0; i < matrixLength; i++) {
      let rowLength = matrix[i].length;

      for (let j = 0; j < rowLength; j++) {
          let currNum = matrix[i][j];

          if (i !== matrixLength - 1) {
              let nextNum = matrix[i][j + 1];

              if (currNum === nextNum) {
                  equalPairsAmount++;
              }

              let beneathNum = matrix[i + 1][j];

              if (currNum === beneathNum) {
                  equalPairsAmount++;
              }

          } else {
              let nextNum = matrix[i][j + 1];

              if (currNum === nextNum) {
                  equalPairsAmount++;
              }
          }
      }
  }

  return equalPairsAmount;
}