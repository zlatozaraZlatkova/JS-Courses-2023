function ladybugs(input) {
  const fieldSize = parseInt(input[0]);
  const ladybugsIndexes = input[1].toString().split(" ");
  const field = [];

  for (let i = 0; i < fieldSize; i++) {
    field[i] = ladybugsIndexes.includes(i.toString()) ? 1 : 0;
  }

  for (let index = 2; index < input.length; index++) {
    let command = input[index].split(" ");
    let bugCurrentIndex = Number(command[0]);
    let flyDirection = command[1];
    let flyLength = Number(command[2]);

    let hasLadybugOnIndex = field[bugCurrentIndex] === 1 ? true : false;

    if (hasLadybugOnIndex) {
      field[bugCurrentIndex] = 0;
    } else {
      continue;
    }

    flyLength = flyDirection === "right" ? flyLength : flyLength * -1;

    let targetField = bugCurrentIndex + flyLength;

    if (targetField < 0 || targetField >= field.length) {
      continue;
    }

    while (targetField >= 0 && targetField < field.length) {
      if (field[targetField] === 0) {
        field[targetField] = 1;
        break;
      }
      targetField += flyLength;
    }
  }

  console.log(field.join(" "));
}
//ladybugs([3, '0 1', '0 right 1']);
//ladybugs([5, '1 21 -1', '0 right 1', '1 left 1']);
ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladybugs([5, "3", "3 left 2", "1 left -2"]);
