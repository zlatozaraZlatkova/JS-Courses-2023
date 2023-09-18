function getListOfNames(arr) {
  let sortedArr = arr.sort((a, b) => a.localeCompare(b));
  sortedArr.forEach((name, index) => console.log(`${index + 1}.${name}`));

}
getListOfNames(["John", "Bob", "Christina", "Ema"]);
