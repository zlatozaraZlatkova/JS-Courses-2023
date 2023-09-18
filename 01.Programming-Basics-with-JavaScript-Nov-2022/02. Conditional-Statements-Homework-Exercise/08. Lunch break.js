function lunchBreak(input) {
  let movieTitle = input[0];
  let episodeDuration = Number(input[1]);
  let breakDuration = Number(input[2]);

  let lunchTime = (1 / 8) * breakDuration;
  let leisureTime = (1 / 4) * breakDuration;

  let busyTime = lunchTime + leisureTime;
  let timeLeft = breakDuration - busyTime;

  if (timeLeft >= episodeDuration) {
    let timeAfterMovie = timeLeft - episodeDuration;
    console.log(
      `You have enough time to watch ${movieTitle} and left with ${Math.ceil(
        timeAfterMovie
      )} minutes free time.`
    );
  } else {
    let timeNeeded = episodeDuration - timeLeft;
    console.log(
      `You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(
        timeNeeded
      )} more minutes.`
    );
  }
}
lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
