function getLowestPriceInCities(data: string[]): void {
  interface CityData {
    town: string,
    product: string,
    price: number
  }


  let priceList = {} as CityData;

  for (let token of data) {
    const [town, product, price] = token.split(" | ");
    
    if (!priceList.hasOwnProperty(product)) {
      priceList[product] = {
        price: Number(price),
        town: town,
      }

      priceList[product].price = price;

    } else {
      if (priceList[product].price > price) {
        priceList[product].price = price;
        priceList[product].town = town;
      }

    }

  }

  const entries = Object.entries(priceList);
    
    for(const [product, data] of entries) {
      let dataEntries = Object.entries(data);
      console.log(`${product} -> ${dataEntries[0][1]} (${dataEntries[1][1]})`);
    }



}

getLowestPriceInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);