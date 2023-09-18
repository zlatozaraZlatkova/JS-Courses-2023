function equalPairs(input) {
  let index = 0;

  let countOfPairs = Number(input[index]);
  index++;

  let minSum = 0;
  let maxSum = 0;
  let currentSum = 0;
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < countOfPairs; i++) {
    num1 = Number(input[index]);
    index++;
    num2 = Number(input[index]);
    index++;

    currentSum = num1 + num2;

    if (i == 0) {
      minSum = num1 + num2;
      maxSum = num1 + num2;
    }
    if (minSum != currentSum && i > 0) {
      if (currentSum < minSum) {
        minSum = currentSum;
      }
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  if (minSum == maxSum) {
    console.log(`Yes, value=${currentSum}`);
  } else {
    console.log(`No, maxdiff=${Math.abs(maxSum - minSum)}`);
  }
 
}

equalPairs([7, 34, -33, 52, 12, -32, 32, 23, 41, 7, 25, 34, 23, 124, 21]);
equalPairs([3, 1, 2, 0, 3, 4, -1]);
equalPairs([2, 1, 2, 2, 2]);
