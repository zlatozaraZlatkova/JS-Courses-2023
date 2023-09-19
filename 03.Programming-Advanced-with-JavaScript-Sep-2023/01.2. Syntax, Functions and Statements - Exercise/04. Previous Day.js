function getPreviousDay(year, month, day) {
  let previousDay = new Date(year, month + 1, day - 1);
  let newYear = previousDay.getFullYear();
  let newMonth = previousDay.getMonth() - 1;
  let newDate = previousDay.getDate();

  return `${newYear}-${newMonth}-${newDate}`;
}
console.log(getPreviousDay(2016, 9, 30));
console.log(getPreviousDay(2015, 5, 10));
console.log(getPreviousDay(2015, 2, 1));



