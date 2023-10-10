function sortArray(arr, type) {
  const methods = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };

  arr.sort(methods[type]);

  return arr;
}

//Version 2

function sortArr(arr, orderType) {
  orderType == "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
  return arr;
}
console.log(sortArr([14, 7, 17, 6, 8], "asc"));
console.log(sortArr([14, 7, 17, 6, 8], "desc"));