function cityTaxes(name, population, treasury) {
  cityData = {
    name,
    population,
    treasury,
    taxRate: 10,
    
  };
  return cityData;
}
console.log(cityTaxes("Tortuga", 7000, 15000));
console.log(cityTaxes("Santo Domingo", 12000, 23500));
