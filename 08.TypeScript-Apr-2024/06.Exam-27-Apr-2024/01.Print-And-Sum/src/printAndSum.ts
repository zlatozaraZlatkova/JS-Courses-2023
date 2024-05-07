function printAndSum(a: number, b: number): string {
  let numArr: number[] = [];

  for (let i = a; i <= b; i++) {
    numArr.push(i);
  }

  return `${getPrint(numArr)}\nSum: ${getSum(numArr)}`;
}

function getSum(arr: number[]): number {
  const sum: number = arr.reduce((acc, value) => acc + value, 0);
  return sum;
}

function getPrint(arr: number[]): string {
  const arrStr = arr.join(" ");
  return `${arrStr}`;
}

console.log(printAndSum(5, 10));
console.log("---------");
console.log(printAndSum(0, 26));
console.log("---------");
console.log(printAndSum(50, 60));

