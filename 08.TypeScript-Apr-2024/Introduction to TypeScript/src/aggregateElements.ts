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
