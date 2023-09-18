function exam(input) {
  let index = 0;

  let maxNegativeGrade = Number(input[index]);
  index++;

  let tasksName = input[index];
  index++;

  let grade = Number(input[index]);
  index++;

  let command = "Enough";

  let negativeGrade = 0;
  let totalGrade = 0;
  let gradeCount = 0;

  let totalTasks = 0;
  let lastTasksName = "";

  while (tasksName !== command) {
    lastTasksName = tasksName;

    if (grade <= 4) {
      negativeGrade++;
      if (negativeGrade >= maxNegativeGrade) {
        console.log(`You need a break, ${negativeGrade} poor grades.`);
        return;
      }
    }
    totalGrade += grade;
    gradeCount++;
    totalTasks++;

    tasksName = input[index];
    index++;

    grade = Number(input[index]);
    index++;
  }
  let averageGrade = totalGrade / gradeCount;

  console.log(`Average score: ${averageGrade.toFixed(2)}`);
  console.log(`Number of problems: ${totalTasks}`);
  console.log(`Last problem: ${lastTasksName}`);
}
exam([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
