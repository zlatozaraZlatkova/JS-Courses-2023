function getLength(firstParam, secondParam, thirdParam) {
  let firstParamLen = firstParam.length;
  let secondParamLen = secondParam.length;
  let thirdParamLen = thirdParam.length;

  let sumLen = firstParamLen + secondParamLen + thirdParamLen;

  let avrLen = Math.floor(sumLen / 3);
  console.log(`${sumLen}\n${avrLen}`);
}
getLength("chocolate", "ice cream", "cake");
getLength("pasta", "5", "22.3");
