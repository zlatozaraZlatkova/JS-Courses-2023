function movie(input) {
  let filmScreening = input[0];
  let row = Number(input[1]);
  let column = Number(input[2]);
  let area = row * column;

  switch (filmScreening) {
    case "Premiere":
      income = area * 12;
      break;
    case "Normal":
      income = area * 7.5;
      break;
    case "Discount":
      income = area * 5;
      break;
  }
  console.log(`${income.toFixed(2)} leva`);
}
movie(["Premiere", "10", "12"]);
movie(["Normal", "21", "13"]);
movie(["Discount", "12", "30"]);
