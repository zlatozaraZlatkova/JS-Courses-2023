function getDayOfMonth(month, year) {
  return new Date(year, month, 0).getDate();

}
console.log(getDayOfMonth(1, 2012))
console.log(getDayOfMonth(2, 2020))
