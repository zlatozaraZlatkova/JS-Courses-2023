function printDelimiter(arr, delimiter) {
  let newArr = [];
  for (let token of arr) {
    newArr.push(token);
  }
  console.log(newArr.join(`${delimiter}`));
}
printDelimiter(["One", "Two", "Three", "Four", "Five"], "-");
printDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_')
