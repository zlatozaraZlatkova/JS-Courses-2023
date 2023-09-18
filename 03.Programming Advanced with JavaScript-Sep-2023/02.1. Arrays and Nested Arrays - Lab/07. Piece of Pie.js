function getPieceOfPie(arrFlavorsPie, targetFlavorsA, targetFlavorsB) {
  let targetArr = [];
  if (
    arrFlavorsPie.includes(targetFlavorsA) &&
    arrFlavorsPie.includes(targetFlavorsB)
  ) {
    let startIndex = arrFlavorsPie.indexOf(targetFlavorsA);
    let endIndex = arrFlavorsPie.indexOf(targetFlavorsB);
    targetArr = arrFlavorsPie.slice(startIndex, endIndex + 1);
  }
  return targetArr;
  
}
console.log(getPieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
));

