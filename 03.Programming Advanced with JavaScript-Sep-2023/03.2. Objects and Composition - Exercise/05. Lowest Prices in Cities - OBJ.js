function getLowestPriseInCities(data) {
  let priceList = {};

  for (let token of data) {
    let [town, product, price] = token.split(" | ");
    price = Number(price);

    if (!priceList.hasOwnProperty(product)) {
      priceList[product] = {
        price: 0,
        town: town,
      };
      priceList[product].price = price;
    } else {
      if (priceList[product].price > price) {
        priceList[product].price = price;
        priceList[product].town = town;
      }
    }
  }
  

  let entires = Object.entries(priceList);

  for (let [product, data] of entires) {
    let dataEntries = Object.entries(data);
    console.log(`${product} -> ${dataEntries[0][1]} (${dataEntries[1][1]})`);
  }
}
getLowestPriseInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

// console.log("--------");
// getLowestPriseInCities([
//   "Sample Town | Sample Product | 100",
//   "Sample Town | Sample Product | 2",
//   "Sample Town | Sample Product | 3",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 5",
//   "Sofia | Orange | 13",
//   "Sofia | Peach | 25",
//   "New York | Sample Product | 9",
//   "New York | Burger | 10",
//   "Sample Town | Sample Product | 0.9",
// ]);
