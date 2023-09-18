function solveGarage(inputArr) {
  let garagesMap = new Map();

  for (let row of inputArr) {
    let rowArr = row.split(" - ");
    let garage = rowArr[0];
    let carKeyValues = rowArr[1];
    let availableCars = [];

    if (!garagesMap.has(garage)) {
      availableCars.push(carKeyValues); //
      garagesMap.set(garage, availableCars);
    } else {
      availableCars = garagesMap.get(garage);
      availableCars.push(carKeyValues);
      garagesMap.set(garage, availableCars);
    }
  }

  let sortedGarages = [...garagesMap.entries()];

  let output = "";
  for (let [currGarage, currCarKeyValue] of sortedGarages) {
    output += `Garage № ${currGarage}\n`;

    for (let currCarProperties of currCarKeyValue) {
      for (let everySymbol of currCarProperties) {
        currCarProperties = currCarProperties.replace(": ", " - ");
      }

      output += `--- ${currCarProperties}\n`;
    }
  }
  console.log(output);
}
solveGarage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);

function solve(input) {
  let result = {};
  // input.map(x => { // also works
  input.forEach((x) => {
    let [garage, carInfo] = x.split(" - ");

    if (!result.hasOwnProperty(garage)) {
      result[garage] = [];
    }

    result[garage].push(carInfo);
  });

  let sorted = Object.entries(result).sort((x, y) => x[0].localeCompare(y[0]));
  sorted.forEach((x) => {
    console.log(`Garage № ${x[0]}`);
    x[1].forEach((x) => console.log(`--- ${x}`));
  });
}
solve([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
