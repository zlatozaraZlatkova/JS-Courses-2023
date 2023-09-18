function operationsBetweenNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];
  let result = 0;

  switch (operator) {
    case "addition":
      result = n1 + n2;
    case "subtraction":
      result = n1 - n2;
    case "multiplication":
      result = n1 * n2;
  }

  if (operator === "+") {
    result = n1 + n2;
    if (result % 2 === 0) {
      console.log(`${n1} ${operator} ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
    }
  } else if (operator === "-") {
    result = n1 - n2;
    if (result % 2 === 0) {
      console.log(`${n1} ${operator} ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
    }
  } else if (operator === "*") {
    result = n1 * n2;
    if (result % 2 === 0) {
      console.log(`${n1} ${operator} ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
    }
  }

  if (operator === "/" && n2 !== 0) {
    result = Math.abs(n1 / n2);

    console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
  } else if (n2 === 0) {
    console.log(`Cannot divide ${n1} by zero`);
  } else if (operator === "%") {
    result = n1 % n2;
    console.log(`${n1} ${operator} ${n2} = ${result}`);
  }
}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["7", "3", "*"]);

operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);

operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);
