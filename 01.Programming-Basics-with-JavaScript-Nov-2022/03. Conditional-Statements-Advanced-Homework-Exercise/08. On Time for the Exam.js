function onTime(input) {
  let hourExam = Number(input[0]);
  let minutesExam = Number(input[1]);
  let hourArrival = Number(input[2]);
  let minutesArrival = Number(input[3]);

  let totalTimeExam = hourExam * 60 + minutesExam;
  let totalTimeArrival = hourArrival * 60 + minutesArrival;

  let diffTime = Math.abs(totalTimeExam - totalTimeArrival);

  if (totalTimeExam < totalTimeArrival) {
    console.log("Late");

    let hours = Math.floor(diffTime / 60);
    let minutes = diffTime % 60;

    if (diffTime >= 60) {
      if (minutes < 10) {
        console.log(`${hours}:0${minutes} hours after the start`);
      } else {
        console.log(`${hours}:${minutes} hours after the start`);
      }
    } else {
      console.log(`${minutes}  minutes after the start`);
    }
  } else if (
    totalTimeExam === totalTimeArrival ||
    totalTimeExam - totalTimeArrival <= 30
  ) {
    console.log("On time");
    if (diffTime > 0) {
      let minutes = diffTime % 60;
      console.log(`${minutes} minutes before the start`);
    }
  } else {
    console.log("Early");

    let hours = Math.floor(diffTime / 60);
    let minutes = diffTime % 60;

    if (diffTime >= 60) {
      if (minutes < 10) {
        console.log(`${hours}:0${minutes} hours before the start`);
      } else {
        console.log(`${hours}:${minutes} hours before the start`);
      }
    } else {
      console.log(`${minutes} minutes before the start`);
    }
  }
}

onTime(["9", "30", "8", "29"]);
onTime(["9", "00", "8", "30"]);
onTime(["16", "00", "15", "00"]);

onTime(["9", "00", "10", "30"]);
onTime(["14", "00", "13", "55"]);
onTime(["11", "30", "8", "12"]);

onTime(["10", "00", "10", "00"]);
onTime(["11", "30", "10", "55"]);
onTime(["11", "30", "12", "29"]);
