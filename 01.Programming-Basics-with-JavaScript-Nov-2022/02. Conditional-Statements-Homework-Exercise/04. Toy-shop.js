function toyShop(input) {
  let priceOfTrip = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let teddyBears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let totalOrder =
    puzzles * 2.6 + dolls * 3 + teddyBears * 4.1 + minions * 8.2 + trucks * 2;
  let totalToys = puzzles + dolls + teddyBears + minions + trucks;

  let profit = 0;

  if (totalToys >= 50) {
    let finalPrice = totalOrder * (1 - 0.25);
    let rent = finalPrice * 0.1;
    profit = finalPrice - rent;
  } else {
    let rent = totalOrder * 0.1;
    profit = totalOrder - rent;
  }

  if (profit >= priceOfTrip) {
    let remainingMoney = profit - priceOfTrip;
    console.log(`Yes! ${remainingMoney.toFixed(2)} lv left.`);
  } else if (profit < priceOfTrip) {
    let remainingMoney = priceOfTrip - profit;
    console.log(`Not enough money! ${remainingMoney.toFixed(2)} lv needed.`);
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
