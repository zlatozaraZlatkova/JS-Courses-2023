function schoolCamp(input) {
  let season = input[0];
  let groupType = input[1];
  let peopleCount = Number(input[2]);
  let nights = Number(input[3]);
  let price = 0;
  let sportType = "";

  if (groupType == "boys" || groupType == "girls") {
    switch (season) {
      case "Winter":
        price = peopleCount * nights * 9.6;
        if (groupType == "boys") {
          sportType = "Judo";
        } else if (groupType == "girls") {
          sportType = "Gymnastics";
        }
        break;
      case "Spring":
        price = peopleCount * nights * 7.2;
        if (groupType == "boys") {
          sportType = "Tennis";
        } else if (groupType == "girls") {
          sportType = "Athletics";
        }

        break;
      case "Summer":
        price = peopleCount * nights * 15.0;
        if (groupType == "boys") {
          sportType = "Football";
        } else if (groupType == "girls") {
          sportType = "Volleyball";
        }
        break;
    }
  } else if (groupType == "mixed") {
    switch (season) {
      case "Winter":
        price = peopleCount * nights * 10.0;
        sportType = "Ski";
        break;
      case "Spring":
        price = peopleCount * nights * 9.5;
        sportType = "Cycling";
        break;
      case "Summer":
        price = peopleCount * nights * 20.0;
        sportType = "Swimming";
        break;
    }
  }

  if (peopleCount >= 50) {
    price *= 0.5;
  } else if (peopleCount >= 20 && peopleCount < 50) {
    price *= 0.85;
  } else if (peopleCount >= 10 && peopleCount < 20) {
    price *= 0.95;
  }

  console.log(`${sportType} ${price.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", 20, 7]);

schoolCamp(["Winter", "mixed", 9, 15]);
schoolCamp(["Summer", "boys", 60, 7]);
schoolCamp(["Spring", "mixed", 17, 14]);
