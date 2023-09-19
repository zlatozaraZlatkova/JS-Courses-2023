
function timeToWalk(steps, footLength, speed) {
  let distanceInMeters = steps * footLength;
  let distanceInKm = distanceInMeters / 1000;
  let breakTime = Math.trunc(distanceInMeters / 500);
  let walkTime = (distanceInKm / speed);
  let hours = Math.trunc(walkTime);
  if (hours < 10) {
      hours = "0" + hours;
  }
  let minutes = Math.trunc(walkTime * 60 + breakTime);
  if (minutes < 10) {
      minutes = "0" + minutes;
  }
  let seconds = Math.round(walkTime * 3600 - (Math.trunc(walkTime * 60)) * 60);
  if (seconds < 10) {
      seconds = "0" + seconds;
  }
  console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(2564, 0.70, 5.5)

//VERSION 2

function timeToWalk(steps, stepLength, speed) {
 
  let timeInSec = steps * stepLength / 1000 / speed * 3600 + Math.floor(steps * stepLength / 1000 / 0.5) * 60;
  timeInSec = Number(timeInSec.toFixed(0));

  let hours = Math.floor(timeInSec / 3600);
  let minutes = Math.floor((timeInSec % 3600) / 60);
  let seconds = timeInSec % 60;

  let hh = hours.toString().padStart(2, '0');
  let mm = minutes.toString().padStart(2, '0');
  let ss = seconds.toString().padStart(2, '0');

  console.log(`${hh}:${mm}:${ss}`);
}

timeToWalk(4000, 0.60, 5);
console.log("------------");
timeToWalk(2564, 0.70, 5.5);

//VERSION 3

function timeToWalk(steps, footprintLength, speed) {
  let distance = Number(steps) * Number(footprintLength);
  let breaksCount = Math.floor(distance / 500);
  let distanceInKm = distance / 1000;
  let timeForOneKM = 60 / speed;
  let totalTime = timeForOneKM * distanceInKm + breaksCount;
  let hours = Math.trunc(totalTime / 60);
  let minutes = Math.trunc(totalTime - hours * 60);
  let seconds = (totalTime - hours * 60 - minutes) * 60;

  console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${Math.ceil(seconds).toString().padStart(2, '0') }`);

}