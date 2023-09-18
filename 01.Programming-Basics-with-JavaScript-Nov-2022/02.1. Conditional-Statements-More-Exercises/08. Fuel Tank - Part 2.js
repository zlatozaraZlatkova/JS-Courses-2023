
function fuelTank2(input) {
  let fuelType = input[0];
  let fuelQuantity = Number(input[1]);
  let discountCard = input[2];

  let price = 0;

  switch (fuelType) {
    case "Gas":
      price = discountCard == "Yes" ? 0.93 - 0.08 : 0.93;
      break;
    case "Gasoline":
      price = discountCard == "Yes" ? 2.22 - 0.18 : 2.22;
      break;
    case "Diesel":
      price = discountCard == "Yes" ? 2.33 - 0.12 : 2.33;
      break;
  }

  if (fuelQuantity > 25) {
    price *= 0.9;
  } else if (fuelQuantity >= 20) {
    price *= 0.92;
  }

  let result = fuelQuantity * price;
  console.log(`${result.toFixed(2)} lv.`);
}

fuelTank2(["Gas", "30", "Yes"])
fuelTank2(["Gasoline", "25", "No"])
fuelTank2(["Diesel", "19", "No"])
