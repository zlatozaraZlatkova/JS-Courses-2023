/**
 * Write a JS class that represents a Point. It has x and y coordinates as properties, 
 * that are set through the constructor, and a static method for finding the distance between two points, called distance().
 */
class Point {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }

  static distance(a, b) {
    let x = b.x - a.x;
    let y = b.y - a.y;
    let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return dist;
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));