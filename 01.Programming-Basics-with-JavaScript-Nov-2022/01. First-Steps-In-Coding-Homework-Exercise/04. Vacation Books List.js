function vacationBooksList(input) {
  let bookPages = Number(input[0]);
  let readPagesPerHour = Number(input[1]);
  let totalDaysNeeded = Number(input[2]);
  let totalHourPerDay = (bookPages / readPagesPerHour) / totalDaysNeeded;
  console.log(totalHourPerDay);
}
vacationBooksList(["212", "20", "2"])