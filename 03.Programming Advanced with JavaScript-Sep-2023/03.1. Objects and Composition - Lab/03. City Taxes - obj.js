
function cityTaxes(name, population, treasury) {
  const cityData = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      cityData.treasury += cityData.population * cityData.taxRate;
    },
    applyGrowth(percentage) {
      cityData.population += Math.floor((cityData.population * percentage) / 100);
    },
    applyRecession(percentage) {
      cityData.treasury -= Math.floor((cityData.treasury * percentage) / 100);
    },
  };
  return cityData;
}

const city = cityTaxes("Tortuga", 7000, 15000);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

city.applyRecession(15);
console.log(city.treasury);



