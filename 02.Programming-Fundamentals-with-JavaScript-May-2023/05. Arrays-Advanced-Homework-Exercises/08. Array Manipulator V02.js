function manipulateArr(arr, commands) {
  for (let el of commands) {
    let [command, value, ...restEl] = el.split(" ");
    value = Number(value);
    restEl = restEl.map(Number);

    switch (command) {
      case "add":
        arr.splice(value, 0, restEl[0]);
        break;
      case "addMany":
        arr.splice(value, 0, ...restEl);
        break;
      case "contains":
        console.log(arr.indexOf(value));
        break;
      case "remove":
        arr.splice(value, 1);
        break;
      case "shift":
        shift(value);
        break;
      case "sumPairs":
        let newArr = [];
        arr = sumPairs(arr, newArr);
        break;
      case "print":
        console.log(`[ ${arr.join(", ")} ]`);
        break;
      default:
        break;
    }
  }

  function shift(shiftAmount) {
    for (let j = 0; j < shiftAmount; j++) {
      let temp = arr.shift();
      arr.push(temp);
    }
  }

  function sumPairs(arr, newArr) {
    for (let i = 0; i < arr.length - 1; i = i + 2) {
      let currEl = arr[i];
      let nextEl = arr[i + 1];
      let sum = currEl + nextEl;
      newArr.push(sum);
    }

    if (arr.length % 2 !== 0) {
      newArr.push(arr[arr.length - 1]);
    }
    return newArr;
  }
}
// solve(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "remove 3", "contains 3", "print"]
// );
// solve(
//   [1, 2, 3, 4, 5],
//   ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );
// solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
//     ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])

manipulateArr([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
