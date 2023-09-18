
function houseParty(input) {
  let arr = input;
  let arrL = input.length;
  let myList = [];

  for (let i = 0; i < arrL; i++) {
    let [name, command] = arr[i].split(" is "); 

    if (command === "going!") {
      if (myList.indexOf(name) === -1) {
        myList.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else if (command === "not going!") {
      if (myList.indexOf(name) === -1) {
        console.log(`${name} is not in the list!`);
      } else {
        myList.splice(myList.indexOf(name), 1);
      }
    }
  }

  console.log(myList.join("\n"));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
