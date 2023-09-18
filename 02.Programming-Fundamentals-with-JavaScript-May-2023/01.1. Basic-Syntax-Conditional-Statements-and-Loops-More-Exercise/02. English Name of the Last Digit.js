function lastNumber(number) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let lastNumber = number.toString().split("").pop();

  if (numbers[+lastNumber]) {
    console.log(numbers[+lastNumber]);
  }
}
lastNumber(7826417246);
