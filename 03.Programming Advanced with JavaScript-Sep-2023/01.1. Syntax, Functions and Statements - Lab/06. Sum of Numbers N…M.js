function getSum(numN, numM) {
  let n = Number(numN);
  let m = Number(numM);
  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum("1", "5"));
console.log(getSum("-8", "20"));
