function fishingBoatRent(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermen = Number(input[2]);

  let boatRent = 0;

  switch (season) {
    case "Spring":
      boatRent = 3000;
      break;
    case "Summer":
      boatRent = 4200;
      break;
    case "Autumn":
      boatRent = 4200;
      break;
    case "Winter":
      boatRent = 2600;
      break;
  }

  if (fishermen <= 6) {
    boatRent = boatRent * 0.9;
  } else if (fishermen <= 11) {
    boatRent = boatRent * 0.85;
  } else if (fishermen >= 12) {
    boatRent = boatRent * 0.75;
  }
  if (fishermen % 2 === 0 && season !== "Autumn") {
    boatRent = boatRent * 0.95;
  }

  if (budget >= boatRent) {
    let restBudget = budget - boatRent;
    console.log(`Yes! You have ${restBudget.toFixed(2)} leva left.`);
  } else {
    let needBudget = boatRent - budget;
    console.log(`Not enough money! You need ${needBudget.toFixed(2)} leva.`);
  }
}
fishingBoatRent(["3000", "Summer", "11"]);
fishingBoatRent(["4200", "Spring", "13"]);
fishingBoatRent(["3600", "Autumn", "6"]);
fishingBoatRent(["2000", "Winter", "13"]);

