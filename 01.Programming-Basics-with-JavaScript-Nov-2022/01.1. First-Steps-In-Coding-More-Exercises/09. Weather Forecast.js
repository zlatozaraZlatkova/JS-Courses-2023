
function weatherForecast(input) {
  let weather = input[0];

  switch (weather) {
    case "sunny":
      console.log("It's warm outside!");
      break;
    case "cloudy":
      console.log("It's cold outside!");
      break;
    case "snowy":
      console.log("It's cold outside!");
      break;
  }
}
weatherForecast(["sunny"]);
weatherForecast(["cloudy"]);
weatherForecast(["snowy"]);
