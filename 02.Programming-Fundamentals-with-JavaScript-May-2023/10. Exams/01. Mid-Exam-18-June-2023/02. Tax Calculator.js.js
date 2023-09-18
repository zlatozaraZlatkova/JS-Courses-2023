function taxCalculator(input) {
  let carType = input.shift().split(">>");
  let totalTaxes = 0;

  while (carType.length > 0) {
    let car = carType.shift().split(" ");
    let [type, yearsOfUse, kmOfUse] = car;

    yearsOfUse = Number(yearsOfUse);
    kmOfUse = Number(kmOfUse);
    let totalCarTypeTax = 0;

    switch (type) {
      case "family":
        calculate(type, totalCarTypeTax, kmOfUse, yearsOfUse);
        break;
      case "heavyDuty":
        calculate(type, totalCarTypeTax, kmOfUse, yearsOfUse);
        break;
      case "sports":
        calculate(type, totalCarTypeTax, kmOfUse, yearsOfUse);
        break;
      default:
        print();
        break;
    }
  }

  return `The National Revenue Agency will collect ${totalTaxes.toFixed(
    2
  )} euros in taxes.`;

  function calculate(type, total, used, years) {
    if (type === "family") {
      total = Math.floor(used / 3000) * 12 + (50 - years * 5);
    } else if (type === "heavyDuty") {
      total = Math.floor(used / 9000) * 14 + (80 - years * 8);
    } else if (type === "sports") {
      total = Math.floor(used / 2000) * 18 + (100 - years * 9);
    }
    totalTaxes += total;

    console.log(`A ${type} car will pay ${total.toFixed(2)} euros in taxes.`);
  }

  function print() {
    console.log(`Invalid car type.`);
  }
}

console.log(
  taxCalculator(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"])
);
console.log("-------");
console.log(
  taxCalculator([
    "family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012",
  ])
);

//Version 2

function taxCalculator(input) {
  let carType = input.shift().split(">>");

  let totalTaxes = 0;

  for (i = 0; i < carType.length; i++) {
    let car = carType[i];
    let currentCar = car.split(" ");
    let type = currentCar[0];
    let yearsOfUse = Number(currentCar[1]);
    let kmOfUse = Number(currentCar[2]);

    if (type === "family") {
      let totalCarTypeTax =
        Math.floor(kmOfUse / 3000) * 12 + (50 - yearsOfUse * 5);
      totalTaxes += totalCarTypeTax;
      console.log(
        `A ${type} car will pay ${totalCarTypeTax.toFixed(2)} euros in taxes.`
      );
    } else if (type === "heavyDuty") {
      let totalCarTypeTax =
        Math.floor(kmOfUse / 9000) * 14 + (80 - yearsOfUse * 8);
      totalTaxes += totalCarTypeTax;
      console.log(
        `A ${type} car will pay ${totalCarTypeTax.toFixed(2)} euros in taxes.`
      );
    } else if (type === "sports") {
      let totalCarTypeTax =
        Math.floor(kmOfUse / 2000) * 18 + (100 - yearsOfUse * 9);
      totalTaxes += totalCarTypeTax;
      console.log(
        `A ${type} car will pay ${totalCarTypeTax.toFixed(2)} euros in taxes.`
      );
    } else {
      console.log("Invalid car type.");
    }
  }
  console.log(
    `The National Revenue Agency will collect ${totalTaxes.toFixed(
      2
    )} euros in taxes.`
  );
}
taxCalculator(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
console.log("------");
taxCalculator([
  "family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012",
]);
