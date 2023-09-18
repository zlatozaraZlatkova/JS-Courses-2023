//Write a JS function that calculates the distance between two points by given x and y coordinates.
//The input comes as four number elements in the format x1, y1, x2, y2. Each pair of elements are the coordinates of a point in 2D space.

function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;
  let distance = Math.sqrt((x * x) + (y * y));

  console.log(distance)
}
getDistance(2, 4, 5, 0);
getDistance(2.34, 15.66, -13.55, -2.9985);
