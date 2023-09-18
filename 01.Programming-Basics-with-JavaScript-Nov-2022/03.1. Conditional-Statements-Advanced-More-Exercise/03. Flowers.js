function flowers(input) {
  let countType1 = Number(input[0]);
  let countType2 = Number(input[1]);
  let countType3 = Number(input[2]);
  let season = input[3];
  let day = input[4];
  let price = 0;
  let bunch = countType1 + countType2 + countType3;

  if (season == "Spring" || season == "Summer") {
    price = countType1 * 2 + countType2 * 4.1 + countType3 * 2.5;

    if (countType3 > 7 && season == "Spring") {
      price = price * 0.95;
    }
    if (bunch > 20) {
      price = price * 0.8;
    }
  } else if (season == "Autumn" || season == "Winter") {
    price = countType1 * 3.75 + countType2 * 4.5 + countType3 * 4.15;

    if (countType2 > 7 && season == "Winter") {
      price = price * 0.9;
    }
    if (bunch > 20) {
      price = price * 0.8;
    }
  }
  switch (day) {
    case "Y":
      price = price * 1.15 + 2;
      break;
    case "N":
      price = price + 2;
      break;
  }

  console.log(price.toFixed(2));
}

flowers([2, 4, 8, "Spring", "Y"]);
flowers([3, 10, 9, "Winter", "N"]);
flowers([10, 10, 10, "Autumn", "N"]);
