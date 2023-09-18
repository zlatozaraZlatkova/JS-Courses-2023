function vacation(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let accommodation = "";
  let location = "";

  if (budget <= 1000) {
    accommodation = "Camp";

    switch (season) {
      case "Summer":
        location = "Alaska";
        price = budget * 0.65;
        break;
      case "Winter":
        location = "Morocco";
        price = budget * 0.45;
        break;
    }
  } else if (budget > 1000 && budget <= 3000) {
    accommodation = "Hut";
    switch (season) {
      case "Summer":
        location = "Alaska";
        price = budget * 0.8;
        break;
      case "Winter":
        location = "Morocco";
        price = budget * 0.6;
        break;
    }
  } else if (budget > 3000) {
    accommodation = "Hotel";
    switch (season) {
      case "Summer":
        location = "Alaska";
        price = budget * 0.9;
        break;
      case "Winter":
        location = "Morocco";
        price = budget * 0.9;
        break;
    }
  }
  console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`);
}
vacation([800, "Summer"]);
vacation([799.5, "Winter"]);
vacation([1100, "Summer"]);
vacation([2543.99, "Winter"]);
vacation([3460, "Summer"]);
vacation([5000, "Winter"]);
