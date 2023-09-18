function gameOfIntervals(input) {
  let index = 0;
  let movesCounter = Number(input[index]);
  index++;
  let totalPoints = 0;
  let totalCounter = 0;

  let numGroup1 = 0;
  let numGroup2 = 0;
  let numGroup3 = 0;
  let numGroup4 = 0;
  let numGroup5 = 0;
  let numGroup6 = 0;

  for (i = 0; i < movesCounter; i++) {
    let num = Number(input[index]);
    index++;

    totalCounter++;

    if (num >= 0 && num <= 9) {
      numGroup1++;
      totalPoints += num * 0.2;
    } else if (num >= 10 && num <= 19) {
      numGroup2++;
      totalPoints += num * 0.3;
    } else if (num >= 20 && num <= 29) {
      numGroup3++;
      totalPoints += num * 0.4;
    } else if (num >= 30 && num <= 39) {
      numGroup4++;
      totalPoints += 50;
    } else if (num >= 40 && num <= 50) {
      numGroup5++;
      totalPoints += 100;
    } else if (num < 0 || num > 50) {
      numGroup6++;
      totalPoints /= 2;
    }
  }

  let numGroup1Pr = (numGroup1 / totalCounter) * 100;
  let numGroup2Pr = (numGroup2 / totalCounter) * 100;
  let numGroup3Pr = (numGroup3 / totalCounter) * 100;
  let numGroup4Pr = (numGroup4 / totalCounter) * 100;
  let numGroup5Pr = (numGroup5 / totalCounter) * 100;
  let numGroup6Pr = (numGroup6 / totalCounter) * 100;

  console.log(`${totalPoints.toFixed(2)}`);
  console.log(`From 0 to 9: ${numGroup1Pr.toFixed(2)}%`);
  console.log(`From 10 to 19: ${numGroup2Pr.toFixed(2)}%`);
  console.log(`From 20 to 29: ${numGroup3Pr.toFixed(2)}%`);
  console.log(`From 30 to 39: ${numGroup4Pr.toFixed(2)}%`);
  console.log(`From 40 to 50: ${numGroup5Pr.toFixed(2)}%`);
  console.log(`Invalid numbers: ${numGroup6Pr.toFixed(2)}%`);
}
gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);
