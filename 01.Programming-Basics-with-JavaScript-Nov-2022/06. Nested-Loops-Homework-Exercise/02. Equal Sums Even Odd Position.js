function equalSumsEvenOddPosition(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);

  let result = ""; // printLine

  for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
    let currentNumString = currentNum.toString();
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < currentNumString.length; i++) {
      let currentNumDigit = Number(currentNumString[i]);

      if (i % 2 === 0) {
        sumEven += currentNumDigit;
      } else {
        sumOdd += currentNumDigit;
      }
    }
    if (sumEven === sumOdd) {
      result += `${currentNumString} `;
    }
  }
  console.log(result);
}
equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["100115", "100120"]);
