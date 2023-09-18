function salary(input) {
  let openTabs = Number(input[0]);
  let salary = Number(input[1]);

  let fineFacebook = 150;
  let fineInstagram = 100;
  let fineReddit = 50;

  for (let i = 0; i < openTabs; i++) {
    let websiteName = input[i + 2]; 

    if (websiteName === "Facebook") {
      salary -= fineFacebook;
    } else if (websiteName === "Instagram") {
      salary -= fineInstagram;
    } else if (websiteName === "Reddit") {
      salary -= fineReddit;
    }
  }

  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else if (salary > 0) {
    console.log(salary);
  }
}
salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
