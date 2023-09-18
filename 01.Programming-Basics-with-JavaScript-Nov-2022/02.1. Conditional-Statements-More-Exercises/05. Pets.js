function pets(input) {
  let days = Number(input[0]);
  let leftFood = Number(input[1]); //kg
  let dayPortionDog = Number(input[2]); //kg
  let dayPortionCat = Number(input[3]); //kg
  let dayPortionTurtle = Number(input[4]); //gr

  let needFoodDog = days * dayPortionDog;
  let needFoodCat = days * dayPortionCat;

  //1 g = (1/1000) kg = 0.001 kg.
  let needFoodTurtle = (days * dayPortionTurtle) / 1000;

  let totalConsume = needFoodDog + needFoodCat + needFoodTurtle;

  let diff = Math.abs(leftFood - totalConsume);

  if (leftFood > totalConsume) {
    console.log(`${Math.floor(diff)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
  }
}
pets([2, 10, 1, 1, 1200]);

pets([5, 10, 2.1, 0.8, 321]);
