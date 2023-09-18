function harvest(input) {
  let areaVineyard = Number(input[0]);
  let productionGrapes = Number(input[1]);
  let quantityGoal = Number(input[2]);
  let numWorkers = Number(input[3]);

  let grapeHarvest = areaVineyard * productionGrapes;

  let productionWine = (grapeHarvest * 0.4) / 2.5;

  let diff = Math.abs(productionWine - quantityGoal);
  let wineForWorker = diff / numWorkers;

  if (productionWine < quantityGoal) {
    console.log(
      `It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`
    );
  } else if (productionWine >= quantityGoal) {
    console.log(
      `Good harvest this year! Total wine: ${Math.ceil(productionWine)} liters.`
    );

    console.log(
      `${Math.ceil(diff)} liters left -> ${Math.ceil(
        wineForWorker
      )} liters per person.`
    );
  }
}
harvest([650, 2, 175, 3]);

harvest([1020, 1.5, 425, 4]);
