function getCircleArea(input) {
  let inputType = typeof input;
  if (inputType !== "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${inputType}.`
    );
  } else {
    let radius = Number(input);
    let circleArea = Math.PI * radius * radius; // Math.PI * Math.pow(input, 2);
    console.log(circleArea.toFixed(2));
  }
}
getCircleArea(5);
getCircleArea("name");
