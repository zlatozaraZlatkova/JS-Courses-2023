function flowerShop(input) {
  let countType1 = Number(input[0]);
  let countType2 = Number(input[1]);
  let countType3 = Number(input[2]);
  let countType4 = Number(input[3]);
  let priceGift = Number(input[4]);

  let priceType1 = countType1 * 3.25;
  let priceType2 = countType2 * 4.0;
  let priceType3 = countType3 * 3.5;
  let priceType4 = countType4 * 8.0;

  let order = priceType1 + priceType2 + priceType3 + priceType4;


  let incomeAfterTax = order * 0.95;

  let diff = Math.abs(incomeAfterTax - priceGift);

  if (incomeAfterTax >= priceGift) {
    console.log(`She is left with ${Math.floor(diff)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
  }
}
flowerShop([2, 3, 5, 1, 50]);

flowerShop([15, 7, 5, 10, 100]);
