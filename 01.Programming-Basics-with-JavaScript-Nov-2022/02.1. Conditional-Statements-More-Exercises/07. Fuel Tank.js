function fuelTanks(input) {
  let fuelType = input[0];
  let quantityInTank = Number(input[1]);

  switch (fuelType) {
    case "Diesel":
    case "Gasoline":
    case "Gas":
      if (quantityInTank >= 25) {
        console.log(`You have enough ${fuelType.toLowerCase()}.`);
      } else if (quantityInTank < 25) {
        console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
      }
      break;
    default:
      console.log(`Invalid fuel!`);
      break;
  }
}
fuelTanks(["Diesel", "10"]);
fuelTanks(["Gasoline", "40"]);
fuelTanks(["Gas", "25"]);
fuelTanks(["Kerosene", "200"]);
