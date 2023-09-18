function budget(input) {
  let filmBudget = Number(input[0]);
  let numWorkers = Number(input[1]);
  let costsClothes = Number(input[2]);

  let decors = filmBudget * 0.1;

  if (numWorkers > 150) {
    costsClothes = costsClothes * 0.9;
  }

  let totalPriceClothes = numWorkers * costsClothes;
  let neededMoney = decors + totalPriceClothes;
  let diff = Math.abs(neededMoney - filmBudget);

  if (filmBudget < neededMoney) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  }
}
budget(["20000", "120", "55.5"]);
budget(["15437.62", "186", "57.99"]);
budget(["9587.88", "222", "55.68"]);
