function logistics(input) {
  let index = 0;
  let cargoCount = Number(input[index]);
  index++;

  let microbusTonnage = 0;
  let truckTonnage = 0;
  let railwayTonnage = 0;
  let totalCargoTonnage = 0;

  for (let i = 0; i < cargoCount; i++) {
    let cargoTonnage = Number(input[index]);
    index++;

    totalCargoTonnage += cargoTonnage;

    if (cargoTonnage <= 3) {
      microbusTonnage += cargoTonnage;
    } else if (cargoTonnage <= 11) {
      truckTonnage += cargoTonnage;
    } else if (cargoTonnage >= 12) {
      railwayTonnage += cargoTonnage;
    }
  }

  let microbusFreight = microbusTonnage * 200;
  let truckFreight = truckTonnage * 175;
  let railwayFreight = railwayTonnage * 120;

  let avrFreightPreTon =
    (microbusFreight + truckFreight + railwayFreight) / totalCargoTonnage;

  let microbusFreightPr = (microbusTonnage / totalCargoTonnage) * 100;
  let truckTonnagePr = (truckTonnage / totalCargoTonnage) * 100;
  let railwayTonnagePr = (railwayTonnage / totalCargoTonnage) * 100;

  console.log(`${avrFreightPreTon.toFixed(2)}`);
  console.log(`${microbusFreightPr.toFixed(2)}%`);
  console.log(`${truckTonnagePr.toFixed(2)}%`);
  console.log(`${railwayTonnagePr.toFixed(2)}%`);
}
logistics([4, 1, 5, 16, 3]);
logistics([5, 2, 10, 20, 1, 7]);
