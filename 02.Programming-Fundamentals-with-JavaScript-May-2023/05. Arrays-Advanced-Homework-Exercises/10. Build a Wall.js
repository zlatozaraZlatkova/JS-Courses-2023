function solve(input) {
  let arr = input.map(Number);
  let dailyCQuantity = [];
  let totalQuantity = 0;
  let costs = 0;
  let crews = arr.filter((wallLength) => wallLength < 30).length;

  while (crews !== 0) {
    let quantityByAllCrews = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 30) {
        arr[i]++;
        quantityByAllCrews += 195;
        if (arr[i] == 30) {
          crews--;
        }
      }
    }
    totalQuantity += quantityByAllCrews;
    dailyCQuantity.push(quantityByAllCrews);
  }
  costs = totalQuantity * 1900;
  console.log(dailyCQuantity.join(", "));
  console.log(`${costs} pesos`);
}
solve([21, 25, 28]);

//VERSION 2

function buildWall(strArr) {
  let initialWallHeight = strArr.slice(0).map(Number);
  let days = 0;
  let cbYards = 0;
  let result = [];

  while (initialWallHeight.length > 0) {
    let currentHeightArr = [];
    cbYards = 0;

    for (let i = 0; i < initialWallHeight.length; i++) {
      let currentHeight = initialWallHeight[i];

      if (currentHeight !== 30) {
        currentHeight += 1;
        cbYards += 195;
        currentHeightArr.push(currentHeight);
      }
    }
    days++;

    if (cbYards !== 0) {
      result.push(cbYards);
    }

    initialWallHeight = currentHeightArr;
  }

  let totalCbYards = 0;

  for (let sum of result) {
    totalCbYards += sum;
  }

  let totalCosts = totalCbYards * 1900;

  console.log(`${result.join(", ")}`);
  console.log(`${totalCosts} pesos`);
}
buildWall([17, 22, 17, 19, 17]);
console.log("----");
buildWall([21, 25, 28]);
console.log("------");
buildWall([17]);
