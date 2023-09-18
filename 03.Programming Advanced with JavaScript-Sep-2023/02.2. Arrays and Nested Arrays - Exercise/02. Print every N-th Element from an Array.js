function printNthElement(arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += n) {
    newArr.push(arr[i]);
  }
  
  return newArr;
}
printNthElement(["5", "20", "31", "4", "20"], 2);
console.log("-----");
printNthElement(["dsa", "asd", "test", "tset"], 2);
console.log("-----");
printNthElement(["1", "2", "3", "4", "5"], 6);
console.log("-----");
