function bitcoinMining(input) {
  let priceBitcoin = 11949.16;
  let priceGold = 67.51;

  let money = 0;
  let boughtBitcoins = 0;
  let daysCounter = 0;
  let fistDayOfBay = 0;

  for (let i = 0; i < input.length; i++) {
    let gold = input[i];
    daysCounter++;

    if (daysCounter % 3 === 0) {
      money += gold * 0.7 * priceGold;
    } else {
      money += gold * priceGold;
    }
    while (money >= priceBitcoin) {
      if (fistDayOfBay === 0) {
        fistDayOfBay = daysCounter;
      }
      money -= priceBitcoin;
      boughtBitcoins++;
    }
  }

  console.log(`Bought bitcoins: ${boughtBitcoins}`);

  if (boughtBitcoins >= 1) {
    console.log(`Day of the first purchased bitcoin: ${fistDayOfBay}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
