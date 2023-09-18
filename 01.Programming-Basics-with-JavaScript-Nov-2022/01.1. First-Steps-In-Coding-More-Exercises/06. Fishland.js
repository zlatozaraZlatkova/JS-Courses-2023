function fishStock(input) {
  let priceFishType1 = Number(input[0]);
  let priceFishType2 = Number(input[1]);

  let kgFishType3 = Number(input[2]);
  let kgFishType4 = Number(input[3]);
  let kgFishType5 = Number(input[4]);

  let priceFishType3 = kgFishType3 * (priceFishType1 * 1.6);
  let priceFishType4 = kgFishType4 * (priceFishType2 * 1.8);
  let priceFishType5 = kgFishType5 * 7.5;

  let budget = priceFishType3 + priceFishType4 + priceFishType5;
  console.log(budget.toFixed(2));
}
fishStock([6.9, 4.2, 1.5, 2.5, 1]);
fishStock([5.55, 3.57, 4.3, 3.6, 7]);
fishStock([7.79, 5.35, 9.3, 0, 0]);
