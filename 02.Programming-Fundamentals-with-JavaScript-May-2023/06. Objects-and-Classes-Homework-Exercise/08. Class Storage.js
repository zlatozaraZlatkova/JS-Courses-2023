/**
 * Create a class Storage. It should have the following properties, while the constructor should only receive a capacity:
    • capacity – a number that decreases when adding a given quantity of products to storage
    • storage – list of products (object). Each product should have:
    • name - a string
    • price – a number (price is for a single piece of product)
    • quantity – a number
    • totalCost – the sum of the cost of the products
The class should also have the following methods:
    • addProduct – a function that receives a product and adds it to the storage
    • getProducts – a function that returns all the products in storage in JSON format, each on a new line
Paste only the class Storage in judge (Note: all names should be as described)
 */

class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
    this.totalCost = 0;
  }

  addProduct(product) {
    this.capacity -= product.quantity;
    this.totalCost += product.price * product.quantity;
    this.storage.push(product);
  }

  getProducts() {
    return this.storage.map((product) => JSON.stringify(product)).join("\n");
  }
}

let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };

console.log(productOne);
console.log(productTwo);
console.log(productThree);

let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.capacity);
console.log(storage.totalCost);

console.log(storage.getProducts());

//Version 2

class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
  }

  addProduct(product) {
    this.storage.push(product);
    this.capacity -= product.quantity;
  }
  getProducts() {
    let result = [];
    this.storage.forEach((product) => {
      console.log(JSON.stringify(product));
      result.push(JSON.stringify(product));
    });
    return result.join("\n");
  }
  get totalCost() {
    let totalCost = 0;
    this.storage.forEach((product) => {
      totalCost += product.quantity * product.price;
    });
    return totalCost;
  }
}

