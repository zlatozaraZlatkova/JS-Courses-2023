function cookingByNumbers(n1, n2, n3, n4, n5, n6) {
  let points = Number(n1);
  let operationArr = [n2, n3, n4, n5, n6];
  let result;
  let operations = {
    chop: () => (points /= 2),
    dice: () => (points = Math.sqrt(points)),
    spice: () => (points += 1),
    bake: () => (points *= 3),
    fillet: () => (points *= 0.8),
  };

  for (let i = 0; i < operationArr.length; i++) {
    let command = operationArr[i];
    result = operations[command]();
    console.log(points);
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
console.log("------");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
