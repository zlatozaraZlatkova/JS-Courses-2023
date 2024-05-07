"use strict";
function cityTaxes(townName, population, treasury) {
    const town = {
        townName,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            return (this.treasury += Math.floor(this.population * this.taxRate));
        },
        applyGrowth: function (percentage) {
            return (this.population = Math.floor(this.population + (this.population * percentage) / 100));
        },
        applyRecession: function (percentage) {
            return (this.treasury -= Math.floor(this.treasury * percentage) / 100);
        },
    };
    return town;
}
const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
