/**
   * You will be given an array of strings.
      The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 
      The second element in the array will be the max capacity of each wagon (single number).
      The rest of the elements will be commands in the following format:
          • Add {passengers} – add a wagon to the end with the given number of passengers.
          • {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
      At the end, print the final state of the train (all the wagons separated by a space).

   */

function passengers(arr) {
  let wagons = arr
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let maxCapacity = Number(arr.shift(1));

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i].split(" ");

    if (currentEl[0] === "Add") {
      wagons.push(Number(currentEl[1]));
    } else {
      let newPassengers = Number(currentEl[0]);

      for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] + newPassengers <= maxCapacity) {
          wagons[j] += newPassengers;
          break;
        }
      }
    }
  }

  console.log(wagons.join(" "));
}
passengers(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
