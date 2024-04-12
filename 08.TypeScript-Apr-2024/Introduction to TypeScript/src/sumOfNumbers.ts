function getSum(a: string, b: string): number {
  let sum: number = 0;
  let n = Number(a);
  let m = Number(b);

  for (let i = n; i <= m; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum("1", "5"));
console.log(getSum("-8", "20"));
