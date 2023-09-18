function getCatalogue(arrStr) {
  let productCatalogue = {};

  for (let line of arrStr) {
    let [productName, productPrice] = line.split(" : ");
    productPrice = Number(productPrice);

    if (!productCatalogue.hasOwnProperty(productName)) {
      productCatalogue[productName] = 0;
    }
    productCatalogue[productName] = productPrice;
  }

  let sortedEntries = Object.entries(productCatalogue).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let listOfProducts = [];

  for (let [key, value] of sortedEntries) {
    let firstLetter = key[0];
    if (!listOfProducts.includes(firstLetter)) {
      listOfProducts.push(firstLetter);
    }
    listOfProducts.push(` ${key}: ${value}`);
  }

  console.log(listOfProducts.join("\n"));
}
getCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

console.log("--------");

getCatalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);





// version array

function solve(inputData) {
  let storeProducts = [];

  for (let line of inputData) {
    let currentLine = line.split(" : ");

    let name = currentLine[0];
    let price = Number(currentLine[1]);

    let store = {
      name: name,
      price: price,
    };

    storeProducts.push(store);
  }

  //sort the dictionary alphabetically by the terms

  storeProducts.sort(function (x, y) {
    let a = x.name.toUpperCase();
    let b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  });

  let groupChar = "";

  storeProducts.forEach((store) => {
    let firstChar = store.name.charAt(0);
    if (groupChar !== firstChar) {
      groupChar = firstChar;
      console.log(groupChar);
    }

    console.log(`  ${store.name}: ${store.price}`);
  });
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);


