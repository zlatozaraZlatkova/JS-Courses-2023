function getstoreCatalogue(arr) {
  let collection = new Map();

  for (let line of arr) {
    let [product, price] = line.split(" : ");
    price = Number(price);
    if (!collection.get(product)) {
      collection.set(product, price);
    }
  }

  let sortEntries = Array.from(collection.entries());
  sortEntries.sort((keyA, keyB) => keyA[0].localeCompare(keyB[0]));

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
