function getEvenPosition(data) {
  let arrEvenPosition = [];
  for (let i = 0; i < data.length; i++) {
    if (i % 2 == 0) {
      arrEvenPosition.push(data[i]);
    }
  }
  console.log(arrEvenPosition.join(" "));
}
getEvenPosition(["20", "30", "40", "50", "60"]);
getEvenPosition(["5", "10"]);
