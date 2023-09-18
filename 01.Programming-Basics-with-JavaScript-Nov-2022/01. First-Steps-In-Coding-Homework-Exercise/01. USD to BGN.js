function currencyCalculator(input) {
  let usd = Number(input[0]);
  let exchangeRateUsd = Number(input[1]);
  let bgn = usd * exchangeRateUsd;
  console.log(`${bgn.toFixed(3)}`);
}
currencyCalculator(["22", "1.79549"]);

