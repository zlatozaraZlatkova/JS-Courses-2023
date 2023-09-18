function solve(input) {
  let budget = Number(input[0]);
  let yearInPast = Number(input[1]);
  let age = 17;

  for (i = 1800; i <= yearInPast; i++) {
    if (i % 2 === 0) {
      budget -= 12000;
    } else {
      budget -= 12000 + 50 * age;
    }
    age++;
  }

  if (budget > 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${budget.toFixed(
        2
      )} dollars left`
    );
  } else {
    console.log(
      `He will need ${Math.abs(budget.toFixed(2))} dollars to survive.`
    );
  }
}
solve(["50000", "1802"]);
