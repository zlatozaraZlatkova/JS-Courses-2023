function solve(arr, num) {
  let sequence = arr.slice(0);
  let specialNumber = num[0];
  let bombPower = num[1];

  while (sequence.includes(specialNumber)) {
    let index = sequence.indexOf(specialNumber);
    let elementsToRemove = bombPower * 2 + 1;
    let startIndex = index - bombPower;
    //let startIndex = Math.max(0, i - power); //math.max in cases where index is -1(outside the array)

    if (startIndex < 0) {
      elementsToRemove += startIndex;
      startIndex = 0;
    }
    sequence.splice(startIndex, elementsToRemove);
  }

  let sum = sequence.reduce((a, b) => {
    return a + b;
  }, 0);

  console.log(sum);
}
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
