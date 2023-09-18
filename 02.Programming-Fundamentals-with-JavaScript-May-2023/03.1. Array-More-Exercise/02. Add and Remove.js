function addAndRemove(arr) {
  let array = arr;
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let index = i;
  
    let command = array[i];

    switch (command) {
      case "add":
        newArr.push(index + 1);
        break;
      case "remove":
        newArr.pop(index + 1);
        break;
      default:
        console.log("Empty");
        break;
    }
  }
  if (newArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
  
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(["remove", "remove", "remove"]);
