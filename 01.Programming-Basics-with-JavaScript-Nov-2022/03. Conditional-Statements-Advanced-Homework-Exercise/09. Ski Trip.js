
function skiTrip(input) {
  let daysOfStay = Number(input[0]);
  let roomType = input[1];
  let rate = input[2];
  let accommodations = daysOfStay - 1;
  let price = 0;

  switch (roomType) {
    case "room for one person":
      price = accommodations * 18;
      break;

    case "apartment":
      price = accommodations * 25;
      if (daysOfStay > 15) {
        price = price * 0.5;
      } else if (daysOfStay >= 10 && daysOfStay <= 15) {
        price = price * 0.65;
      } else {
        price = price * 0.7;
      }

      break;
    case "president apartment":
      price = accommodations * 35;

      if (daysOfStay > 15) {
        price = price * 0.8;
      } else if (daysOfStay >= 10 && daysOfStay <= 15) {
        price = price * 0.75;
      } else {
        price = price * 0.9;
      }

      break;
  }

  if (rate === "positive") {
    price = price * 1.25;
  } else {
    price = price * 0.9;
  }

  console.log(price.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
