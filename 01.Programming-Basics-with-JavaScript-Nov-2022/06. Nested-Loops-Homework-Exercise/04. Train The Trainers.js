function train(input) {
  let index = 0;
  let jugsCount = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let counter = 0;
  let totalGrade = 0;

  while (command !== "Finish") {
    let presentationName = command;

    counter++;

    let sumGradeCount = 0;

    for (let i = 0; i < jugsCount; i++) {
      let gradeCount = Number(input[index]);
      index++;
      sumGradeCount += gradeCount;
    }

    let avrGradeCount = sumGradeCount / jugsCount;
    totalGrade += avrGradeCount;
    console.log(`${presentationName} - ${avrGradeCount.toFixed(2)}.`);

    command = input[index];
    index++;
  }
  let totalAvgGrade = totalGrade / counter;
  console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}

train([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
