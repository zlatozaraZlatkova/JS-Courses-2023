function solve(arr) {
  let elementN = arr.pop();
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % elementN === 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}

solve(["5", "20", "31", "4", "20", "2"]);
solve(["dsa", "asd", "test", "test", "2"]);
solve(["1", "2", "3", "4", "5", "6"]);
