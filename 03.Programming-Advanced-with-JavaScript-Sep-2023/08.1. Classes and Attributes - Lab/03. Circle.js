/**
 * Write a class that represents a Circle. It has only one data property
 *  - its radius, and it is set through the constructor.
 * The class needs to have getter and setter methods for its diameter
 * - the setter needs to calculate the radius and change it and the getter needs to use the radius to calculate the diameter and return it.
 * The circle also has a getter area(), which calculates and returns its area.
 */
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  set diameter(value) {
    return (this.radius = value / 2);
  }

  get area() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);