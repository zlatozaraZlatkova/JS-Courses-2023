function wsRecord(input) {
  let recordInSeconds = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let speed = Number(input[2]);

  let result = distanceInMeters * speed;

  let delay = Math.floor(distanceInMeters / 15) * 12.5;

  let totalTime = result + delay;

  let diff = Math.abs(totalTime - recordInSeconds);

  if (totalTime < recordInSeconds) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
  }
}
wsRecord(["10", "1500", "20"]);
wsRecord(["555555.67", "3017", "5.03"]);
