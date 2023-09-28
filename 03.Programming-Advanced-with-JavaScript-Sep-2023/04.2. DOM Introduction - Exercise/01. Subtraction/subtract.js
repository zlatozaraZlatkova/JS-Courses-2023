function subtract() {
  const fistNumValue = Number(document.getElementById("firstNumber").value);
  const secondNumValue = Number(document.getElementById("secondNumber").value);
  const sum = fistNumValue - secondNumValue;

  document.getElementById("result").textContent = sum;
}
