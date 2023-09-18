function tennisRankList(input) {
  index = 0;
  let competitionCount = Number(input[index]);
  index++;
  let startPoints = Number(input[index]);
  index++;

  let temporaryPoints = 0;
  let countWin = 0;

  for (let i = 0; i < competitionCount; i++) {
    let result = input[index];
    index++;

    switch (result) {
      case "W":
        temporaryPoints += 2000;
        countWin++;
        break;
      case "F":
        temporaryPoints += 1200;
        break;
      case "SF":
        temporaryPoints += 720;
        break;
    }
  }

  let finalPoints = startPoints + temporaryPoints;
  console.log(`Final points: ${finalPoints}`);

  let average = temporaryPoints / competitionCount;
  console.log(`Average points: ${Math.floor(average)}`);

  let percentWin = (countWin / competitionCount) * 100;
  console.log(`${percentWin.toFixed(2)}%`);
}
tennisRankList(["4", "750", "SF", "W", "SF", "W"]);
