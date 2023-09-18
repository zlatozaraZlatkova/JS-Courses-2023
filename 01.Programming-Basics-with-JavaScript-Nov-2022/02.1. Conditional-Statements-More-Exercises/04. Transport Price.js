function transportPrice(input) {
  let n = Number(input[0]);
  let partOfDay = input[1];

  let tariff = 0;

  if (n !== 0 && n < 20) {
    //taxi
    switch (partOfDay) {
      case "day":
        tariff = 0.7 + n * 0.79;
        break;
      case "night":
        tariff = 0.7 + n * 0.9;
        break;
    }
  } else if (n >= 20 && n < 100) {
    //autobus
    tariff = n * 0.09;
  } else if (n >= 100) {
    //railway
    tariff = n * 0.06;
  }

  console.log(tariff.toFixed(2));
}
transportPrice([0, "day"]);
transportPrice([7, "night"])
transportPrice([25, "day"])
transportPrice([180, "night"])
