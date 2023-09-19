function addAndRemoveEl(commandArr) {
  let arr = [];
  for (let i = 0; i < commandArr.length; i++) {
    if (commandArr[i] === "add") {
      //result[i] = i + 1;
      arr.push(i + 1);
    } else if (commandArr[i] === "remove") {
      //result.splice(i - 1, 1);
      arr.pop();
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined || arr[i] == "") {
    } else {
      console.log(arr[i]);
    }
  }

  if (arr.length === 0) {
    console.log("Empty");
  }
}
addAndRemoveEl(["add", "add", "add", "add"]);
addAndRemoveEl(["add", "add", "remove", "add", "add"]);
addAndRemoveEl(["remove", "remove", "remove"]);
