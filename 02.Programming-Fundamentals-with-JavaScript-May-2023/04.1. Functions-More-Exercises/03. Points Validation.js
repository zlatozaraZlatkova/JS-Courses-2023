function pointsValidation(arr) {
  let x1 = arr.shift();
  let y1 = arr.shift();
  let x2 = arr.shift();
  let y2 = arr.shift();

  let isValidFirstGroup = isValidFirstPairs(arr);
  let isValidSecondGroup = isValidSecondPairs(arr);
  let isValidDistanceBetweenPoints = isValidThirdPairs(arr);

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
pointsValidation([2, 1, 1, 1]);
pointsValidation([3, 0, 0, 4]);
