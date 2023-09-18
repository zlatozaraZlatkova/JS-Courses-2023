function printAndSum(startNum, endNum) {
  let sum = 0;
  let buff = "";

  for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
    sum += currentNum;
    buff += `${currentNum} `;
  }
  console.log(buff.trim());
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
