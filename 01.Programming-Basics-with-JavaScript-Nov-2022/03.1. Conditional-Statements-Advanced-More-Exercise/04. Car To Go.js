function carToGo(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let carClass = "";
  let carType = "";
  let price = 0;

  if (budget <= 100) {
    carClass = "Economy class";
    switch (season) {
      case "Summer":
        price = budget * 0.35;
        carType = "Cabrio";
        break;

      case "Winter":
        price = budget * 0.65;
        carType = "Jeep";
        break;
    }
  } else if (budget > 100 && budget <= 500) {
    carClass = "Compact class";
    switch (season) {
      case "Summer":
        price = budget * 0.45;
        carType = "Cabrio";
        break;

      case "Winter":
        price = budget * 0.8;
        carType = "Jeep";
        break;
    }
  } else if (budget > 500) {
    carClass = "Luxury class";
    switch (season) {
      case "Summer":
        price = budget * 0.9;
        carType = "Jeep";
        break;

      case "Winter":
        price = budget * 0.9;
        carType = "Jeep";
        break;
    }
  }

  console.log(`${carClass}`);
  console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo([450, "Winter"]);
carToGo([99.99, "Summer"]);
carToGo([70.5, "Winter"]);
carToGo([1010, "Summer"]);
carToGo([1010, "Winter"]);
