/**
 *     3. Piccolo
Write a function that:
    • Records a car number for every car that enters the parking lot
    • Removes a car number when the car goes out
    • Input will be an array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number.
If the parking lot is empty, print: "Parking Lot is Empty".

 */
function printPiccolo(arr) {
  let garage = {};

  for (let token of arr) {
    let [direction, carNumber] = token.split(", ");

    if (direction === "IN") {
      garage[carNumber] = carNumber;
    } else if (direction === "OUT") {
      if (garage.hasOwnProperty(carNumber)) {
        delete garage[carNumber];
      }
    }
  }
  let sorted = Object.entries(garage).sort((a, b) => a[0].localeCompare(b[0]));

  if (sorted.length === 0) {
    console.log("Parking Lot is Empty");
  }

  for (let car of sorted) {
    console.log(`${car[0]}`);
  }
}
printPiccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
console.log("-------");
printPiccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "OUT, CA1234TA",
]);

// VERSION WITH SET()
function printPiccolo(arr) {
  let garage = new Set();

  for (let token of arr) {
    let [direction, carNumber] = token.split(", ");

    if (direction === "IN") {
      garage.add(carNumber);
    } else if (direction === "OUT") {
      garage.delete(carNumber);
    }
  }

  if (garage.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let sortedCarNum = Array.from(garage).sort((a, b) => a.localeCompare(b));
    sortedCarNum.forEach((carNumber) => console.log(`${carNumber}`));
  }
}

printPiccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "OUT, CA1234TA",
]);
