function triangleOfNumbers(n) {
  let buff = "";

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      buff += rows + " ";
    }

    buff += "\n";
  }

  console.log(buff);
}
triangleOfNumbers(3);
