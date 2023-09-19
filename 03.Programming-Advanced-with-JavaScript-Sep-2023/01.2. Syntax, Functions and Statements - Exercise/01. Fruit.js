function getTotalSum(fruitName, fruitWeightGr, fruitPrice) {
  let weightKg = fruitWeightGr / 1000;
  let money = weightKg * fruitPrice;

  console.log(
    `I need $${money.toFixed(2)} to buy ${weightKg.toFixed(
      2
    )} kilograms ${fruitName}.`
  );
}
getTotalSum("orange", 2500, 1.8);
getTotalSum("apple", 1563, 2.35);
