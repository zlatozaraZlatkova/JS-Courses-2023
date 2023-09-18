function solve(day) {
  let result;

  const dayOfWeek = {
    Monday: (result = 1),
    Tuesday: (result = 2),
    Wednesday: (result = 3),
    Thursday: (result = 4),
    Friday: (result = 5),
    Saturday: (result = 6),
    Sunday: (result = 7),
  };

  if (dayOfWeek[day] === undefined) {
    result = "error";
    console.log(result);
  } else {
    console.log(dayOfWeek[day]);
  }
}
solve("Monday");
solve("Friday");
solve("Invalid");
solve("HDGSGDSGDJshgzd");

