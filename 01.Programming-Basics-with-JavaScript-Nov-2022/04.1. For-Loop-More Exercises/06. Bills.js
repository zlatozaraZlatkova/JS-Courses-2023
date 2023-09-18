function bills(input) {
  let index = 0;
  let months = Number(input[index]);
  index++;

  let electricity = 0;
  let water = months * 20;
  let internet = months * 15;

  for (let i = 1; i <= months; i++) {
    let currentBill = Number(input[index]);
    index++;

    electricity += currentBill;
  }

  let other = (electricity + water + internet) * 1.2;

  let average = (electricity + water + internet + other) / months;
  console.log(`Electricity: ${electricity.toFixed(2)} lv`);
  console.log(`Water: ${water.toFixed(2)} lv`);
  console.log(`Internet: ${internet.toFixed(2)} lv`);
  console.log(`Other: ${other.toFixed(2)} lv`);
  console.log(`Average: ${average.toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2]);
