function solve(input) {
  let arr = input;
  let arrL = input.length;
  let value = 0;

  for (let i = 0; i < arrL; i++) {
    let command = arr[i];

    switch (command) {
      case "soap":
        value += 10;
        break;
      case "water":
        value += value * 0.2;
        break;
      case "vacuum cleaner":
        value += value * 0.25;
        break;
      case "mud":
        value -= value * 0.1;
        break;
    }
  }

  console.log(`The car is ${value.toFixed(2)}% clean.`);
}
solve(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);

solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
