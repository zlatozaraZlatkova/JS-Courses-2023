function footballTickets(input) {
  let budget = Number(input[0]);
  let ticketType = input[1];
  let peopleNum = Number(input[2]);

  let ticketPrice = 0;
  let transportCosts = 0;

  if (peopleNum >= 1 && peopleNum <= 4) {
    transportCosts = budget * 0.75;
  } else if (peopleNum >= 5 && peopleNum <= 9) {
    transportCosts = budget * 0.6;
  } else if (peopleNum >= 10 && peopleNum <= 24) {
    transportCosts = budget * 0.5;
  } else if (peopleNum >= 25 && peopleNum <= 49) {
    transportCosts = budget * 0.4;
  } else {
    transportCosts = budget * 0.25;
  }
  switch (ticketType) {
    case "VIP":
      ticketPrice = peopleNum * 499.99;
      break;
    case "Normal":
      ticketPrice = peopleNum * 249.99;
      break;
  }

  let restBudget = budget - transportCosts;

  let diff = Math.abs(restBudget - ticketPrice);

  if (restBudget > ticketPrice) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
}
footballTickets([1000, "Normal", 1]);
footballTickets([30000, "VIP", 49]);
