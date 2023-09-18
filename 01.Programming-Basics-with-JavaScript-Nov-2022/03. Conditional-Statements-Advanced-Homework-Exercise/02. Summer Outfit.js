function summerOutfit(input) {
  let temperature = Number(input[0]);
  let partOfDay = input[1];
  let isValid = true;

  // part 1
  if (temperature >= 10 && temperature <= 18) {
    switch (partOfDay) {
      case "Morning":
        if (isValid) {
          let outfit = "Sweatshirt";
          let shoes = "Sneakers";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
        break;
      case "Afternoon":
        if (isValid) {
          let outfit = "Shirt";
          let shoes = "Moccasins";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
        break;
      case "Evening":
        if (isValid) {
          let outfit = "Shirt";
          let shoes = "Moccasins";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
        break;
      default:
        break;
    }
  }
  // part 2
  if (temperature > 18 && temperature <= 24) {
    switch (partOfDay) {
      case "Morning":
        if (isValid) {
          let outfit = "Shirt";
          let shoes = "Moccasins";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
        break;
      case "Afternoon":
        if (isValid) {
          let outfit = "T-Shirt";
          let shoes = "Sandals";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
        break;
      case "Evening":
        if (isValid) {
          let outfit = "Shirt";
          let shoes = "Moccasins";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
        break;

      default:
        break;
    }
  }
  // part 3
  if (temperature >= 25) {
    switch (partOfDay) {
      case "Morning":
        if (isValid) {
          let outfit = "T-Shirt";
          let shoes = "Sandals";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
        break;
      case "Afternoon":
        if (isValid) {
          let outfit = "Swim Suit";
          let shoes = "Barefoot";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
        break;
      case "Evening":
        if (isValid) {
          let outfit = "Shirt";
          let shoes = "Moccasins";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
        break;
      default:
        break;
    }
  }
}
summerOutfit(["16", "Morning"]);
summerOutfit(["20", "Morning"]);
summerOutfit(["27", "Morning"]);

summerOutfit(["28", "Afternoon"]);
summerOutfit(["17", "Afternoon"]);
summerOutfit(["10", "Afternoon"]);

summerOutfit(["30", "Evening"]);
summerOutfit(["10", "Evening"]);
summerOutfit(["18", "Evening"]);
