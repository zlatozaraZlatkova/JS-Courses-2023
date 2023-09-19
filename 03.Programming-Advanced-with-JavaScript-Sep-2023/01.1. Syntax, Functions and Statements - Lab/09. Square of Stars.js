function getSquareOfStars(inputParam) {
  if (inputParam == null) {
    inputParam = 5;
  }

  let string = "";

  for (let i = 0; i < inputParam; i++) {
    for (let j = 0; j < inputParam; j++) {
      string += `* `;
    }
    string += "\n";
  }

  console.log(string);
}
getSquareOfStars(1);
console.log("------");
getSquareOfStars(2);
console.log("------");
getSquareOfStars(7);
console.log("------");
getSquareOfStars();
