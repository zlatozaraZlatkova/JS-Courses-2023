function multiply(input) {
  let command = Number(input.shift());
  let sum = 0;
  while (true) {
    if (command < 0) {
      console.log("Negative number!");
      break;
    }
    sum = command * 2;
    console.log(`Result: ${sum.toFixed(2)}`);
    command = input.shift();
  }
}
multiply([12, 43.2144, 12.3, 543.23, -20]);

multiply([12, 43.2144, 12.3, 543.23, -20]);

multiply([23.43, 12.3245, 0, 65.23432, 23, 65, -12]);

multiply(["-123"]);
