function foodDelivery(input) {
  let chickenMenuCosts = Number(input[0]) * 10.35;
  let fishMenuCosts = Number(input[1]) * 12.40;
  let veganMenuCost = Number(input[2]) * 8.15;
  let totalMenuCost = chickenMenuCosts + fishMenuCosts + veganMenuCost;
  let dessertCost = totalMenuCost * 0.2;
  let deliveryCost = 2.5;
  let totalCost = totalMenuCost + dessertCost + deliveryCost;
  console.log(totalCost);

}
foodDelivery(["9", "2", "6"])