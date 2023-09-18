function solve(baseSide, blockHeight) {
  baseSide = Number(baseSide);
  blockHeight = Number(blockHeight);
  let floor = 0;
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  while (baseSide > 1) {
    let totalBlocks = baseSide * baseSide * blockHeight;
    let innerBlocks = (baseSide - 2) * (baseSide - 2) * blockHeight;
    let outerBlocks = totalBlocks - innerBlocks;

    if (baseSide - 2 === 0) {
      break;
    }

    floor++;
    baseSide -= 2;

    if (floor % 5 === 0) {
      lapis += outerBlocks;
      stone += innerBlocks;
    } else {
      marble += outerBlocks;
      stone += innerBlocks;
    }
  }
  floor++;
  height = Math.floor(floor * blockHeight);
  gold += Math.ceil(baseSide * baseSide * blockHeight);

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${height}`);
}
solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23,0.5)
