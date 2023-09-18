function checkLeapYear(year) {

  if (year % 4 === 0 && year % 100 !== 0) {
    console.log("yes");
  } else if (year % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
// checkLeapYear(1984)
// checkLeapYear(2003)
// checkLeapYear(4)

// checkLeapYear(1999)
// checkLeapYear(2000)
// checkLeapYear(2016)

checkLeapYear(1900);
checkLeapYear(1952);
