function getAggregateSum(data: number[]): void {
  let sum: number = 0;
  let concatSum: string = "";
  let inverseSum: number = 0;

  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    concatSum += String(data[i]);
    inverseSum += 1 / data[i];
  }

  console.log(`${sum}\n${inverseSum}\n${concatSum}`);
}

getAggregateSum([1, 2, 3]);
console.log("----");
getAggregateSum([2, 4, 8, 16]);

//version 2
const sumNumbers = (numbers: number[], inverse = false): number => {
  let sum: number = 0;
  numbers.forEach((num) => {
    const numToSum = inverse ? 1 / num : num;
    sum += numToSum;
  });
  return sum;
};

const concatNumbers = (numbers: number[]): string => {
  return numbers.join("");
};

const getAggregateElements = (numbers: number[]): void => {
  const sum: number = sumNumbers(numbers);
  const sumInverse: number = sumNumbers(numbers, true);
  const sumConcat: string = concatNumbers(numbers);

  console.log(`${sum}\n${sumInverse}\n${sumConcat}`);
};
