function histogram(input) {
  let n = Number(input[0]);

  let p1CountGroup1 = 0;
  let p2CountGroup2 = 0;
  let p3CountGroup3 = 0;
  let p4CountGroup4 = 0;
  let p5CountGroup5 = 0;

  for (let i = 1; i <= n; i++) {
    let currentNum = Number(input[i]);

    if (currentNum < 200) {
      p1CountGroup1 += 1;
    } else if (currentNum >= 200 && currentNum <= 399) {
      p2CountGroup2 += 1;
    } else if (currentNum >= 400 && currentNum <= 599) {
      p3CountGroup3 += 1;
    } else if (currentNum >= 600 && currentNum <= 799) {
      p4CountGroup4 += 1;
    } else if (currentNum >= 800) {
      p5CountGroup5 += 1;
    }
  }

  let p1Percent = (p1CountGroup1 / n) * 100;
  let p2Percent = (p2CountGroup2 / n) * 100;
  let p3Percent = (p3CountGroup3 / n) * 100;
  let p4Percent = (p4CountGroup4 / n) * 100;
  let p5Percent = (p5CountGroup5 / n) * 100;

  console.log(`${p1Percent.toFixed(2)} + "%"`);
  console.log(`${p2Percent.toFixed(2)} + "%"`);
  console.log(`${p3Percent.toFixed(2)} + "%"`);
  console.log(`${p4Percent.toFixed(2)} + "%"`);
  console.log(`${p5Percent.toFixed(2)} + "%"`);
}
histogram(["3", "1", "2", "999"]);
