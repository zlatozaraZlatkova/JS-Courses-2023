function solve(input) {
  let allFlights = input.shift();
  let statusUpdate = input.shift();
  let statusCheck = input.shift();

  let listOfFlights = {};

  for (let line of allFlights) {
    let [number, destination] = line.split(" ");

    listOfFlights[number] = {
      Destination: destination,
      Status: "Ready to fly",
    };
  }

  for (let line of statusUpdate) {
    let [number, currentStatus] = line.split(" ");

    if (listOfFlights.hasOwnProperty(number)) {
      listOfFlights[number].Status = currentStatus;
    }
  }

  for (let fly in listOfFlights) {
    if (listOfFlights[fly].Status === String(statusCheck)) {
      console.log(listOfFlights[fly]);
    }
  }
}
solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
