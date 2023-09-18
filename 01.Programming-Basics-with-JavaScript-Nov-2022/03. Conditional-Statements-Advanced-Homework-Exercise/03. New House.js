function newHouseGarden(input) {
  let flowerType = input[0];
  let flowersCount = Number(input[1]);
  let budget = Number(input[2]);
  let flowersPrice = 0;

  switch (flowerType) {
    case "Roses":
      flowersPrice = flowersCount * 5;
      if (flowersCount > 80) {
        flowersPrice = flowersPrice * 0.9;
      }
      break;

    case "Dahlias":
      flowersPrice = flowersCount * 3.8;
      if (flowersCount > 90) {
        flowersPrice = flowersPrice * 0.85;
      }
      break;

    case "Tulips":
      flowersPrice = flowersCount * 2.8;
      if (flowersCount > 80) {
        flowersPrice = flowersPrice * 0.85;
      }
      break;

    case "Narcissus":
      flowersPrice = flowersCount * 3;
      if (flowersCount < 120) {
        flowersPrice = flowersPrice * 1.15;
      }
      break;

    case "Gladiolus":
      flowersPrice = flowersCount * 2.5;
      if (flowersCount < 80) {
        flowersPrice = flowersPrice * 1.2;
      }
      break;
  }

  if (budget >= flowersPrice) {
    let restBudget = budget - flowersPrice;
    console.log(
      `Hey, you have a great garden with ${flowersCount} ${flowerType} and ${restBudget.toFixed(
        2
      )} leva left.`
    );
  } else {
    let needBudget = Math.abs(flowersPrice - budget);
    console.log(
      `Not enough money, you need ${needBudget.toFixed(2)} leva more.`
    );
  }
}

newHouseGarden(["Roses", "55", "250"]);
newHouseGarden(["Tulips", "88", "260"]);
newHouseGarden(["Narcissus", "119", "360"]);
