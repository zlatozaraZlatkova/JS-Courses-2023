//Write a JS function that calculates the date of the next day by given year, month, and day.

function nextDay(year, month, day) {

  let myDate = new Date(year, month - 1, day + 1);
  console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);

  // console.log(myDate.getFullYear());
  // console.log(myDate.getMonth() + 1);
  // console.log(myDate.getDate());

}
nextDay(2023,9,30)

