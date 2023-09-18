function circleAreaAndPerimeter(input) {
  let r = Number(input[0]);

  let area = Math.PI * r * r;
  console.log(`${area.toFixed(2)}`);

  let parameter = 2 * Math.PI * r;
  console.log(`${parameter.toFixed(2)}`);
}
circleAreaAndPerimeter([3]);
circleAreaAndPerimeter([4.5]);

// "Area = " + Math.PI * r * r);
// "Perimeter = " + 2 * Math.PI * r);
