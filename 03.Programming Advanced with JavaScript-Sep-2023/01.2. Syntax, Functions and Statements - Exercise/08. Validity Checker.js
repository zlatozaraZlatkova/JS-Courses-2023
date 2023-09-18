function validityChecker(x1, y1, x2, y2) {
  let isValidFirstGroup = isValidFirstPairs();
  let isValidSecondGroup = isValidSecondPairs();
  let isValidDistanceBetweenPoints = isValidThirdPairs();

  if (isValidFirstGroup === Math.ceil(isValidFirstGroup)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  
  if (isValidSecondGroup === Math.ceil(isValidSecondGroup)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (
    isValidDistanceBetweenPoints === Math.ceil(isValidDistanceBetweenPoints)
  ) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }

  function isValidFirstPairs() {
    let firstPairs = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    return firstPairs;
  }

  function isValidSecondPairs() {
    let secondPairs = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    return secondPairs;
  }

  function isValidThirdPairs() {
    let thirdPairs = Math.sqrt(
      Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2)
    );
    return thirdPairs;
  }
}
validityChecker(3, 0, 0, 4);
console.log("---------");
validityChecker(2, 1, 1, 1);

