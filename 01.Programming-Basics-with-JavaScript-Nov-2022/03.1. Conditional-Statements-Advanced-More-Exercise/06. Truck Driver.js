function truckDriver(input) {
  let season = input[0];
  let km = Number(input[1]);
  let income = 0;

  if (km <= 5000) {
    switch (season) {
      case "Spring":
      case "Autumn":
        income = km * 0.75;
        break;
      case "Summer":
        income = km * 0.9;
        break;
      case "Winter":
        income = km * 1.05;
        break;
    }
  } else if (km <= 10000) {
    switch (season) {
      case "Spring":
      case "Autumn":
        income = km * 0.95;
        break;
      case "Summer":
        income = km * 1.1;
        break;
      case "Winter":
        income = km * 1.25;
        break;
    }
  } else if (km <= 20000) {
    switch (season) {
      case "Spring":
      case "Autumn":
      case "Summer":
      case "Winter":
        income = km * 1.45;
        break;
    }
  }
  let profit = income * 4 * 0.9;
  console.log(`${profit.toFixed(2)}`);
}
truckDriver(["Summer", 3455]);
truckDriver(["Winter", 4350]);
truckDriver(["Spring", 1600]);
truckDriver(["Winter", 5678]);
truckDriver(["Autumn", 8600]);
truckDriver(["Winter", 16042]);
truckDriver(["Spring", 16942]);
