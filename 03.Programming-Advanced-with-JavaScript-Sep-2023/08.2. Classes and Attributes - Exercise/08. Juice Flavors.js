function juiceFlavors(data) {
  let typeOfJuice = new Map();
  let storeBottles = new Map();

  for (let line of data) {
    let [juice, quantity] = line.split(" => ");
    quantity =  Number(quantity);

    if(!typeOfJuice.has(juice)) {
      typeOfJuice.set(juice, 0);
    } 

    typeOfJuice.set(juice, typeOfJuice.get(juice) + quantity);
    

    if(typeOfJuice.get(juice) >= 1000) {
      let bottle = Math.floor(typeOfJuice.get(juice) / 1000);
      //typeOfJuice.set(juice, typeOfJuice.get(juice) - bottle * 1000);

      if(!storeBottles.has(typeOfJuice)) {
        storeBottles.set(juice, bottle);
      } else {
        storeBottles.set(juice, storeBottles.get(juice) + bottle);
      }
      
    }
    
  }

  for (let el of storeBottles) {
    console.log(`${el[0]} => ${el[1]}`);
  }

}