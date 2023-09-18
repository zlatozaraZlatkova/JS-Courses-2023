function rounding(number, precision) {
  if (precision > 15) {
    precision = 15;
  }
  console.log(parseFloat(number.toFixed(precision)));
  console.log(Number(number.toFixed(precision)));
  console.log(parseInt(number.toFixed(precision)));
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);

//version 2

function rounding(firstNumber, secondNumber) {
  let multiplier = Math.pow(10, secondNumber);

  console.log(Math.round(firstNumber * multiplier) / multiplier);
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);
