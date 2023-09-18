function footballLeague(input) {
  let index = 0;
  let stationSeats = Number(input[index]);
  index++;
  let fensCounter = Number(input[index]);
  index++;
  let sectorA = 0;
  let sectorB = 0;
  let sectorG = 0;
  let sectorV = 0;

  for (let i = 1; i <= fensCounter; i++) {
    let sector = String(input[index]);
    index++;
    switch (sector) {
      case "A":
        sectorA++;
        break;
      case "B":
        sectorB++;
        break;
      case "G":
        sectorG++;
        break;
      case "V":
        sectorV++;
        break;
    }
  }
  let prFensSectorA = (sectorA / fensCounter) * 100;
  let prFensSectorB = (sectorB / fensCounter) * 100;
  let prFensSectorV = (sectorV / fensCounter) * 100;
  let prFensSectorG = (sectorG / fensCounter) * 100;

  let allFansAtStation = (fensCounter / stationSeats) * 100;

  console.log(`${prFensSectorA.toFixed(2)}%`);
  console.log(`${prFensSectorB.toFixed(2)}%`);
  console.log(`${prFensSectorV.toFixed(2)}%`);
  console.log(`${prFensSectorG.toFixed(2)}%`);

  console.log(`${allFansAtStation.toFixed(2)}%`);
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);

footballLeague([
  "1000",
  "12",
  "A",
  "A",
  "V",
  "V",
  "A",
  "G",
  "A",
  "A",
  "V",
  "G",
  "V",
  "A",
  "",
]);

footballLeague([
  "93",
  "16",
  "A",
  "V",
  "G",
  "G",
  "B",
  "B",
  "G",
  "B",
  "A",
  "B",
  "B",
  "B",
  "A",
  "B",
  "B",
  "A",
]);
