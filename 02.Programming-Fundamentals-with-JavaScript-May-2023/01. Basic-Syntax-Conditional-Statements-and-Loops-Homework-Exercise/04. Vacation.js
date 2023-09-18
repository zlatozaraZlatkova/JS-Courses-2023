function vacation(counterOfPeople, typeOfGroup, dayOfWeek) {
  let price = 0;

  if (dayOfWeek === "Friday") {
    switch (typeOfGroup) {
      case "Students":
        price = counterOfPeople * 8.45;
        if (counterOfPeople >= 30) {
          price *= 0.85
        }
        break;

      case "Business":
        price = counterOfPeople * 10.9;
        if (counterOfPeople >= 100) {
          price -= 10 * 10.90
        }
        break;
      case "Regular":
        price = counterOfPeople * 15;
        if (counterOfPeople >= 10 && counterOfPeople <= 20) {
          price = price * 0.95;
        }
        break;
    }
  } else if (dayOfWeek === "Saturday") {
    switch (typeOfGroup) {
      case "Students":
        price = counterOfPeople * 9.8;
        if (counterOfPeople >= 30) {
          price = price * 0.85;
        }
        break;

      case "Business":
        price = counterOfPeople * 15.6;
        if (counterOfPeople >= 100) {
          price = (counterOfPeople - 10) * 15.6;
        }
        break;
      case "Regular":
        price = counterOfPeople * 20;
        if (counterOfPeople >= 10 && counterOfPeople <= 20) {
          price = price * 0.95;
        }
        break;
    }
  } else if (dayOfWeek === "Sunday") {
    switch (typeOfGroup) {
      case "Students":
        price = counterOfPeople * 10.46;
        if (counterOfPeople >= 30) {
          price = price * 0.85;
        }
        break;

      case "Business":
        price = counterOfPeople * 16;
        if (counterOfPeople >= 100) {
          price = (counterOfPeople - 10) * 16;
        }
        break;

      case "Regular":
        price = counterOfPeople * 22.5;
        if (counterOfPeople >= 10 && counterOfPeople <= 20) {
          price = price * 0.95;
        }
        break;
    }
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
