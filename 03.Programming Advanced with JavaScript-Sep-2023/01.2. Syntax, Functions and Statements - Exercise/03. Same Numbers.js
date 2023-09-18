function getSameNumbers(input) {
  let integerNum = String(input);
  let sum = 0;
  

  if (allCharactersSame(integerNum)) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(getSumOfElements());


  function allCharactersSame(elements) {
    return elements.split("").every((digit) => digit === elements[0]);
  }

  function getSumOfElements() {
    let numbersArr = [];
    for (let i = 0; i < integerNum.length; i++) {
      let currDigit = integerNum[i];
      numbersArr.push(Number(currDigit));
    }
    numbersArr.map((x) => (sum += x));
    return sum;
  }
}
getSameNumbers(2222222);
getSameNumbers(1234);
getSameNumbers("000");
getSameNumbers(12);

