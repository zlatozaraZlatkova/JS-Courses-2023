function steps(input) {
  let index = 0;

  let command = input[index];
  index++;

  let target = 10000;

  let totalSteps = 0;

  while (command !== "Going home") {
    let currentSteps = Number(command);
    totalSteps += currentSteps;

    if (totalSteps >= target) {
      break;
    }

    command = input[index];
    index++;
  }

  if (command === "Going home") {
    currentSteps = Number(input[index]);
    index++;
    totalSteps += +currentSteps;
  }

  let diff = Math.abs(target - totalSteps);

  if (totalSteps >= target) {
    console.log(`Goal reached! Good job!`);
    console.log(`${diff} steps over the goal!`);
  } else {
    console.log(`${diff} more steps to reach goal.`);
  }
}

steps(["1000", "1500", "2000", "6500"]);

steps(["1500", "300", "2500", "3000", "Going home", "200"]);
