function sumPrimeNonPrime(input) {
  let index = 0;
  let command = input[index];
  index++;

  let sumPrimeNumber = 0;
  let sumNonPrimeNumber = 0;

  while (command !== "stop") {
    let currentNum = Number(command);

    if (currentNum < 0) {
      console.log("Number is negative.");

      command = input[index];
      index++;
      continue;
    }

    if (currentNum === 1) {
      sumNonPrimeNumber += 1;

      command = input[index];
      index++;
      continue;
    }
    let flag = true;
    for (let i = 2; i < currentNum; i++) {
      if (currentNum % i === 0) {
        sumNonPrimeNumber += currentNum;
        flag = false;
        break;
      }
    }
    if (flag) {
      sumPrimeNumber += currentNum;
    }

    command = input[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);

  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumber}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
