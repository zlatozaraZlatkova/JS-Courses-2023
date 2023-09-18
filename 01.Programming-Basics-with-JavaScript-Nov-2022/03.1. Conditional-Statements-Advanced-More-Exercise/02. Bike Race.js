function bikeRace(input) {
  let bikersJunior = Number(input[0]);
  let bikersSenior = Number(input[1]);
  let race = input[2];

  let income = 0;

  switch (race) {
    case "trail":
      income = bikersJunior * 5.5 + bikersSenior * 7.0;
      break;
    case "cross-country":
      income = bikersJunior * 8.0 + bikersSenior * 9.5;
      break;
    case "downhill":
      income = bikersJunior * 12.25 + bikersSenior * 13.75;
      break;
    case "road":
      income = bikersJunior * 20.0 + bikersSenior * 21.5;
      break;
  }

  let bikersGroup = bikersJunior + bikersSenior;

  if (race == "cross-country" && bikersGroup >= 50) {
    income = income * 0.75;
  }

  income = income * 0.95;

  console.log(`${income.toFixed(2)}`);
}
bikeRace([10, 20, "trail"]);
bikeRace([21, 26, "cross-country"]); 
bikeRace([30, 25, "cross-country"]); 
bikeRace([10, 10, "downhill"]);
bikeRace([3, 40, "road"]);
