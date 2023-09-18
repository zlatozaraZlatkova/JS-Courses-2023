function oscars(input) {
  let index = 0;
  let actorName = input[index];
  index++;
  let academyPoints = Number(input[index]);
  index++;
  let n = Number(input[index]);
  index++;

  for (let i = 0; i < n; i++) {
    let judgeName = input[index];
    index++;

    let judgePoints = Number(input[index]);
    index++;

    let result = (judgeName.length * judgePoints) / 2;

    academyPoints += result;

    if (academyPoints > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(
          1
        )}!`
      );
      break;
    }
  }

  if (academyPoints <= 1250.5) {
    let diff = Math.abs(academyPoints - 1250.5);
    console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
  }
}
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
