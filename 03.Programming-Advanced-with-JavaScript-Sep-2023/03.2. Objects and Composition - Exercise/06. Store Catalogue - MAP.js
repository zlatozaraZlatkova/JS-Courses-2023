function getstoreCatalogue(arr) {
  const catalogue = new Map();

  let currentLetter;

  arr.forEach((el) => {
    let [product, price] = el.split(" : ");
    if (!catalogue.has(product)) {
      catalogue.set(product, price);
    }
    catalogue.get(product, price);
  });

  let sortProducts = Array.from(catalogue.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [product, price] of sortProducts) {
    getFirstLetter(product);
    if (currentLetter === product[0]) {
      console.log(`  ${product}: ${price}`);
    }
  }

  function getFirstLetter(item) {
    if (item[0] !== currentLetter) {
      currentLetter = item[0];
      console.log(currentLetter);
      return currentLetter;
    }
  }
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
