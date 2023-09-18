function gladiatorExpenses(
  lostFightCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let totalCounter = 0;
  let sum = 0;
  let counterSword = 0;

  for (let i = 0; i < lostFightCount; i++) {
    totalCounter++;

    if (
      totalCounter % 2 === 0 &&
      totalCounter % 3 === 0 &&
      totalCounter !== 1
    ) {
      sum += shieldPrice + swordPrice + helmetPrice;
      counterSword++;
      if (counterSword % 2 === 0) {
        sum += armorPrice;
      }
    } else if (totalCounter % 3 === 0) {
      sum += swordPrice;
    } else if (totalCounter % 2 === 0) {
      sum += helmetPrice;
    }
  }

  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
// gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
