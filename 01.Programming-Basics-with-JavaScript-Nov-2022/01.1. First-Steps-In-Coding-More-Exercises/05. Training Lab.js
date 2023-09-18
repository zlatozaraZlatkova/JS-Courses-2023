function trainingLab(input) {
  let wRoom = Number(input[0]);
  let hRoom = Number(input[1]);

  let corridor = 100;
  let lostPlace = 3;

  let wDesk = 120;
  let hDesk = 70;

  let desksRow = Math.floor((hRoom * 100 - corridor) / hDesk);

  let desksColumn = Math.floor((wRoom * 100) / wDesk);

  let desksAtRoom = desksColumn * desksRow - lostPlace;
  console.log(desksAtRoom);
}
trainingLab([15, 8.9]);
