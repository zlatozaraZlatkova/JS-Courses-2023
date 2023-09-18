function solve(num) {
  getLastDigit = (num) => +(num + "").slice(-1);

  console.log(getLastDigit(num));
}
solve(657);
