function solve() {
  const input = document.getElementById("input");
  const selectMenu = document.querySelector("#selectMenuTo");
  const btnElement = document.querySelector("button");
  const result = document.getElementById("result");

  const binaryOption = document.createElement("option");
  binaryOption.value = "binary";
  binaryOption.textContent = "Binary";
  selectMenu.add(binaryOption);

  const hexadecimalOption = document.createElement("option");
  hexadecimalOption.value = "hexadecimal";
  hexadecimalOption.textContent = "Hexadecimal";
  selectMenu.add(hexadecimalOption);

  const convertOptions = {
    binary: (num) => num.toString(2),
    hexadecimal: (num) => num.toString(16).toLocaleUpperCase(),
    "": (num) => num,
  };

  btnElement.addEventListener("click", (element) => {
    result.value = convertOptions[selectMenu.value](Number(input.value));
  });
}
