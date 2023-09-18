
function repaintingCost(input) {
   
  let nylonCosts = (Number(input[0]) + 2) * 1.5;
  let colorCosts = ((Number(input[1]) * 0.1 ) + Number(input[1]))  * 14.5;
  let paintThinnerCosts = Number(input[2]) * 5;
  let packagesCost = 0.40;
  let totalCostMaterials = nylonCosts + colorCosts + paintThinnerCosts + packagesCost;
  let hourWorkPrice = (totalCostMaterials * 0.3) * Number(input[3]);
  let totalRepaintingCost = totalCostMaterials + hourWorkPrice;

  console.log(`${nylonCosts}\n${colorCosts}\n${paintThinnerCosts}\n${totalCostMaterials}\n${hourWorkPrice}\n${totalRepaintingCost}`);

}
repaintingCost(["5", "10", "10", "1"]);