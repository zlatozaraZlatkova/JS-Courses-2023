//Write a function that calculates the area and the volume of a figure, which is defined by its coordinates (x, y, z).
function solve(area, vol, input) {
  return JSON.parse(input).map((cube) => ({
    area: area.apply(cube),
    volume: vol.apply(cube),
  }));
}


function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}

console.log(
  solve(
    area,
    vol,
    `[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]`
  )
);