class CityTaxes {
  constructor(name, population, treasury) {
    this.name = name;
    this.population = population;
    this.treasury = treasury;
    this.taxRate = 10;
  }
  collectTaxes() {
    this.treasury += this.population * this.taxRate;
  }
  applyGrowth(percentage) {
    this.population += Math.floor(this.population * percentage / 100);
  }
  applyRecession(percentage) {
    this.treasury -= Math.floor(this.treasury * percentage);
  }
}

const city = new CityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
