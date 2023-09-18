function solve(num) {
  let symbolPr = "";
  let symbolPoints = "";

  if (num % 10 === 0) {
    if (num < 100) {
      let filledPr = num / 10;
      let remainingPr = Math.abs(filledPr - 10);

      for (let i = filledPr; i > 0; i--) {
        symbolPr += "%";
      }
      for (let j = 0; j < remainingPr; j++) {
        symbolPoints += ".";
      }
    }
  }

  if (num === 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  } else {
    console.log(`${num}% [${symbolPr}${symbolPoints}]`);
    console.log("Still loading...");
  }
}
solve(70);
