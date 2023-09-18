function getstoreCatalogue(arr) {
  let collection = {};

  for (let line of arr) {
    let [product, price] = line.split(" : ");
    price = Number(price);
    if (!collection.hasOwnProperty(product)) {
      collection[product] = 0;
    }
    collection[product] = price;
  }

  let sortEntries = Object.entries(collection).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let listOfProducts = [];
  for (let [key, value] of sortEntries) {
    let firstLetter = key[0];
    if (!listOfProducts.includes(firstLetter)) {
      listOfProducts.push(firstLetter);
    }
    listOfProducts.push(` ${key}: ${value}`);
  }
  console.log(listOfProducts.join("\n"));
}
getstoreCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
