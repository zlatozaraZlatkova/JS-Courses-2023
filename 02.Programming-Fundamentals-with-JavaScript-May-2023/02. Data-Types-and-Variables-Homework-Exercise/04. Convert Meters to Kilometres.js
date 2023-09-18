//You will be given a number that will be the distance in meters. Write a program that converts meters to kilometers formatted to the second decimal point.
function convertMetersToKm(num) {
  console.log((num / 1000).toFixed(2));
}
convertMetersToKm(1852);
convertMetersToKm(789);
