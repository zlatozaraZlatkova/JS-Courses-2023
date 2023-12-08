class FashionRetailInventory {
  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
    this.productStock = [];
  }

  addProduct(productName, size, quantity, price) {
    quantity = Number(quantity);
    price = Number(price);

    const currentProduct = this.productStock.find(
      (pr) => pr.productName == productName && pr.size == size
    );
    if (!currentProduct) {
      this.productStock.push({ productName, size, quantity, price });
      return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }

    currentProduct.quantity += quantity;
    return `You added ${quantity} more pieces of product ${productName} size ${size}`;
  }

  sendProduct(productName, size) {
    const index = this.productStock.findIndex(
      (pr) => pr.productName === productName && pr.size === size
    );
    let currentProduct = this.productStock[index];

    if (!currentProduct) {
      throw new Error(
        `The product ${productName}, size ${size} is not in the inventory`
      );
    }

    this.productStock.splice(index, 1);
    return `The product ${productName}, size ${size} was successfully removed from the inventory`;
  }

  findProductsBySize(size) {
    const match = this.productStock.find((s) => s.size == size);
    let result = [];
    if (!match) {
      return `There are no products available in that size`;

    } else {
      for(let currProduct of this.productStock) {
        if(currProduct.size === size) {
          result.push(`${currProduct.productName}-${currProduct.quantity} pieces`);
        }
  
      }
      return result.join(", ");
    }
    
  }

  listProducts() {
    if (this.productStock.length === 0) {
      return `${this.storehouse} storehouse is empty`;
    }

    const result = [
      `${this.storehouse} storehouse in ${this.location} available products:`,
      ...this.productStock
        .sort((a, b) => a.productName.localeCompare(b.productName))
        .map(
          (pr) =>
            `${pr.productName}/Size:${pr.size}/Quantity:${pr.quantity}/Price:${pr.price}$`
        ),
    ];
    return result.join("\n");
  }
}

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "S", 1, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "L", 10, 25.0));
console.log(storeHouse.findProductsBySize("M"));
console.log(storeHouse.findProductsBySize("L"));
console.log(storeHouse.findProductsBySize("XL"));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
// console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.listProducts());
