function getAggregateElements(inputArr) {
  let arr = inputArr.slice(0).map(Number);
  let sum = 0;

  console.log(getSumOfElements(sum, arr));
  console.log(sumOfInverse(sum, arr));
  console.log(concatenates(arr));

  function getSumOfElements(sum, arr) {
    arr.map((x) => (sum += x));
    return sum;
  }

  function sumOfInverse(sum, arr) {
    sum = arr.reduce((a, b) => a + 1 / b, 0);
    return sum;
  }

  function concatenates(arr) {
    return `${arr.join("")}`;
  }
}
getAggregateElements([1, 2, 3]);
getAggregateElements([2, 4, 8, 16]);

