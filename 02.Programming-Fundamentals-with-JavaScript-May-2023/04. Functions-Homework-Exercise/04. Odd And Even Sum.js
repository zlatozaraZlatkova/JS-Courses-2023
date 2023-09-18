//You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.

function printResult(num) {
  let numAsString = String(num);
  let numAsStringL = numAsString.length;

  let takeEvenSum = (numAsString) => {
    let evenSum = 0;
    for (let i = 0; i < numAsStringL; i++) {
      let currentNum = Number(numAsString[i]);
      if (currentNum % 2 === 0) {
        evenSum += currentNum;
      }
    }
    return evenSum;
  };

  let takeOddSum = (numAsString) => {
    let oddSum = 0;
    for (let i = 0; i < numAsStringL; i++) {
      let currentOddNum = Number(numAsString[i]);
      if (currentOddNum % 2 !== 0) {
        oddSum += currentOddNum;
      }
    }
    return oddSum;
  };

  console.log(
    `Odd sum = ${takeOddSum(numAsString)}, Even sum = ${takeEvenSum(
      numAsString
    )}`
  );
}
printResult(1000435);
