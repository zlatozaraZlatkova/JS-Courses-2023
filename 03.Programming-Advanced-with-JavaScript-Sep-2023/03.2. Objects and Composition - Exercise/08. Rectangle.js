/**
 * const capitalize = s => s && s[0].toUpperCase() + s.slice(1)
to always return type string event when s may be falsy other than empty-string
const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""
 */
function rectangle(width, height, color) {

  const rectangleData = {
    width: width,
    height: height,
    color:  color && color[0].toUpperCase() + color.slice(1),
    calcArea() {
      return rectangleData.width * rectangleData.height;
    },
   

  };
 
  return rectangleData;
}
let rect = rectangle(4, 5, "red");

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

