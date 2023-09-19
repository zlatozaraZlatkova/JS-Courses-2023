function getLastKNumber(n, k) {
  let arr = [1];
  for (let i = 1; i < n; i++) {
    arr[i] = sumLastK(arr, k);
  }
  
  return arr

  function sumLastK(arr, k) {
    if (k < arr.length ) {
      k = k;
    } else {
      k = arr.length;
    }
    //k = arr.length > k ? k : arr.length;
    let sum = 0;
    for (let i = 1; i <= k; i++) {
      sum += arr[arr.length - i];
    }
    return sum;
  }
}

console.log(getLastKNumber(6, 3));
console.log("======");
console.log(getLastKNumber(8, 2))
