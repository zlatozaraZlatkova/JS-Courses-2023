function roadRadar(speed, area) {
  let areaSpeedLimit = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  if (areaSpeedLimit[area] < speed) {
    let overSpeedLimit = speed - areaSpeedLimit[area];
    let status = speedLimitStatus(overSpeedLimit);

    console.log(
      `The speed is ${overSpeedLimit} km/h faster than the allowed speed of ${areaSpeedLimit[area]} - ${status}`
    );
  } else {
    console.log(`Driving ${speed} km/h in a ${areaSpeedLimit[area]} zone`);
  }

  function speedLimitStatus(overSpeedLimit) {
    if (overSpeedLimit <= 20) {
      return `speeding`;
    } else if (overSpeedLimit <= 40) {
      return `excessive speeding`;
    } else {
      return `reckless driving`;
    }
  }
}
roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
