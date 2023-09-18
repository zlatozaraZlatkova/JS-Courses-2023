function celsiusToFahrenheit(input) {
  let c = Number(input[0]);
  let convertToFahrenheit = (c * 9) / 5 + 32;
  console.log(convertToFahrenheit.toFixed(2));
}
celsiusToFahrenheit([25]);
celsiusToFahrenheit([0]);
celsiusToFahrenheit([-5.5]);
celsiusToFahrenheit([32.3]);
