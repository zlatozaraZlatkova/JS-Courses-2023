
function getSumOfFirstAndLastNumber(arr) {
  let firstEl = Number(arr[0]);
  let lastEl = Number(arr[arr.length - 1]);

  let sum = firstEl + lastEl;
  console.log(sum)
  return sum
 
}
getSumOfFirstAndLastNumber(["20", "30", "30", "30", "30", "30", "30", "40"]);
getSumOfFirstAndLastNumber(["5", "30", "30", "30", "30", "30", "30", "10"]);

