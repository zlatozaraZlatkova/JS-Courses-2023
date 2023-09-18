function chessBoard(n) {
  let boardSize = 0;

  console.log(`<div class="chessboard">`);

  for (let i = 1; i <= n; i++) {
    console.log(`  <div>`);

    for (let j = 1; j <= n; j++) {
      boardSize++;

      if (boardSize % 2 === 0) {
        console.log(`    <span class="white"></span>`);
      } else {
        console.log(`    <span class="black"></span>`);
      }

      if (j === n) {
        if (j % 2 === 0) {
          boardSize++;
        }
      }
    }

    console.log(`  </div>`);
  }

  console.log(`</div>`);
}