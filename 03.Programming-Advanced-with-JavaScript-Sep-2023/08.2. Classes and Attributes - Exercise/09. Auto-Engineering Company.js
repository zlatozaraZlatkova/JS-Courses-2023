function autoCompany(data) {
  let register = new Map();

  for (let line of data) {
    let [brand, model, quantity] = line.split(" | ");
    quantity = Number(quantity);
    
    if (!register.has(brand)) {
      register.set(brand, new Map());
    }
   
    if (!register.get(brand).has(model)) {
      register.get(brand).set(model, 0);
    }
  
    register.get(brand).set(model, register.get(brand).get(model) + quantity);
  }
  let listOfProducts = [];

  for (let [carBrand, carData] of register) {
    if (!listOfProducts.includes(carBrand)) {
      listOfProducts.push(carBrand);
    }
    for (let [carModel, producedCars] of carData) {
      listOfProducts.push(`###${carModel} -> ${producedCars}`);
    }
  }

  console.log(listOfProducts.join("\n"));
}