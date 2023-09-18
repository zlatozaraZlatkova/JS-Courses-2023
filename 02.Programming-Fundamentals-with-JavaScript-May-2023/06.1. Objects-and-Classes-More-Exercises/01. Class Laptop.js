/**
 * Create a class Laptop that has the following properties:
    • info – object that contains:
    • producer – string
    • age – number
    • brand – string
    • isOn – boolean (false by default)
    • turnOn – a function that sets the isOn variable to true
    • turnOff – a function that sets the isOn variable to false
    • showInfo – a function that returns the producer, age, and brand as JSON
    • quality – number (every time the laptop is turned on/off the quality decreases by 1)
    • getter price – number (800 – {age * 2} + (quality * 0.5)) 
The constructor should receive the info as an object and the quality.
 */

class Laptop {
  constructor(info, quality) {
    this.info = info;
    //quality – number (every time the laptop is turned on/off the quality decreases by 1)
    this.quality = quality;
    this.isOn = false;
  }
  //turnOn – a function that sets the isOn variable to true
  turnOn() {
    this.isOn = true;
    this.quality -= 1; //every time the laptop is turned on/off the quality decreases by 1
  }

  //turnOff – a function that sets the isOn variable to false
  turnOff() {
    this.isOn = false;
    this.quality -= 1; //every time the laptop is turned on/off the quality decreases by 1
  }
  //showInfo – a function that returns the producer, age, and brand as JSON
  showInfo() {
    return JSON.stringify(this.info);
  }

  //getter price – number (800 – {age * 2} + (quality * 0.5))
  get price() {
    return 800 - this.info.age * 2 + this.quality * 0.5;
  }
}
let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Always(info, 10);

laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
