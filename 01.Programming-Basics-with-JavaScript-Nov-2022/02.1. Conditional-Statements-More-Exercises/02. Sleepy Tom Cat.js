function sleepyCat(input) {
  let dayOff = Number(input[0]);
  let normCat = 30000;

  let workingDays = 365 - dayOff;
  let workingDaysPlayTime = workingDays * 63;

  let dayOffPlayTime = dayOff * 127;

  let totalPlayTime = workingDaysPlayTime + dayOffPlayTime;

  let diff = Math.abs(normCat - totalPlayTime);
  let diffHours = Math.floor(diff / 60);
  let diffMinutes = diff % 60;

  if (normCat < totalPlayTime) {
    console.log(`Tom will run away`);
    console.log(`${diffHours} hours and ${diffMinutes} minutes more for play`);
  } else {
    console.log(`Tom sleeps well`);
    console.log(`${diffHours} hours and ${diffMinutes} minutes less for play`);
  }
}
//sleepyCat([20])
sleepyCat([113]);
