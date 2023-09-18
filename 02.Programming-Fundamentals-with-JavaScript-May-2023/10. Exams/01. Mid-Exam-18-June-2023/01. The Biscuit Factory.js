function theBiscuitFactory(arr) {
  let input = arr.map(Number);

  let numberOfBiscuitsPerDayProduced = input.shift();
  let countOfTheWorkers = input.shift();
  let otherFactory = input.shift();
  let myFactory = 0;

  for (let i = 1; i <= 30; i++) {
    let totalDailyProd = numberOfBiscuitsPerDayProduced * countOfTheWorkers;
    if (i % 3 === 0) {
      totalDailyProd *= 0.75;
    }

    myFactory += Math.floor(totalDailyProd);
  }

  let minNum = Math.min(otherFactory, myFactory);
  let maxNum = Math.max(otherFactory, myFactory);

  let diff = maxNum - minNum;
  let result;

  console.log(`You have produced ${myFactory} biscuits for the past month.`);

  if (myFactory > otherFactory) {
    result = (diff / minNum) * 100;
    console.log(`You produce ${result.toFixed(2)} percent more biscuits.`);
    return;
  }

  result = (diff / maxNum) * 100;
  console.log(`You produce ${result.toFixed(2)} percent less biscuits.`);
}

theBiscuitFactory(["78", "8", "16000"]);
theBiscuitFactory(["65", "12", "26000"]);
