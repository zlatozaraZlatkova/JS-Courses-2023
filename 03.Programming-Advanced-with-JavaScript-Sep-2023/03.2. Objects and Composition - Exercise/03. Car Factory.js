function carFactory(data) {
  const carComponents = { ...data };
  const engine = {
    smallEngine: { power: 90, volume: 1800 },
    normalEngine: { power: 120, volume: 2400 },
    monsterEngine: { power: 200, volume: 3500 },
  };
  const carriage = {
    hatchback: { type: "hatchback", color: "as require" },
    coupe: { type: "coupe", color: "as require" },
  };
  getEngine(carComponents);
  getCarriage(carComponents);
  getWheels(carComponents);
  return carComponents;

  function getEngine(carComponents) {
    if (carComponents.power <= engine.smallEngine.power) {
      carComponents.engine = engine.smallEngine;
      delete carComponents.power;
    } else if (carComponents.power <= engine.normalEngine.power) {
      carComponents.engine = engine.normalEngine;
      delete carComponents.power;
    } else if (carComponents.power <= engine.monsterEngine.power) {
      carComponents.engine = engine.monsterEngine;
      delete carComponents.power;
    }
  }
  function getCarriage(carComponents) {
    if (carComponents.carriage == carriage.hatchback.type) {
      carriage.hatchback.color = carComponents.color;
      carComponents.carriage = carriage.hatchback;
      delete carComponents.color;
    } else if (carComponents.carriage == carriage.coupe.type) {
      carriage.coupe.color = carComponents.color;
      carComponents.carriage = carriage.coupe;
      delete carComponents.color;
    }
  }

  function getWheels(carComponents) {
    if (carComponents.wheelsize > 1) {
      let wheelsizeDiameter = 0;
      if (carComponents.wheelsize % 2 == 0) {
        wheelsizeDiameter = 2 * Math.floor(carComponents.wheelsize / 2) - 1;
      } else {
        wheelsizeDiameter = carComponents.wheelsize;
      }

      let wheelsizeArr = [];
      for (let i = 0; i < 4; i++) {
        wheelsizeArr.push(wheelsizeDiameter);
      }
      carComponents.wheelsize = wheelsizeArr;
      //rename the key obj property
      Object.assign(carComponents, { wheels: carComponents.wheelsize })["wheelsize"];
      delete carComponents["wheelsize"];
    }
  }
 
  
}
carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});

console.log("-----");
carFactory({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});
console.log("-----");

carFactory({
  model: "Ferrari",
  power: 200,
  color: "red",
  carriage: "coupe",
  wheelsize: 21,
});

console.log("-----");

carFactory({
  model: "Brichka",
  power: 65,
  color: "white",
  carriage: "hatchback",
  wheelsize: 16,
});
console.log("-----");
