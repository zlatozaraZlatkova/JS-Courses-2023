function vegetableMarket(input) {
  let priceVegetablesKg = Number(input[0]);
  let priceFruitKg = Number(input[1]);
  let totalVegetablesKg = Number(input[2]);
  let totalFruitKg = Number(input[3]);

  let income =
    (priceVegetablesKg * totalVegetablesKg + priceFruitKg * totalFruitKg) /
    1.94;

  console.log(income.toFixed(2));
}
vegetableMarket([0.194, 19.4, 10, 10]);
vegetableMarket([1.5, 2.5, 10, 10]);
