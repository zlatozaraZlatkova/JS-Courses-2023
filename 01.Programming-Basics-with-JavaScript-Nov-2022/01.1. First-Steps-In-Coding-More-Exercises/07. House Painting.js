function housePainting(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let h = Number(input[2]);

  let paintColorGreen = 3.4;
  let paintColorRed = 4.3;

  // Walls
  let areaFrontAndBackWall = 2 * (x * x);
  let areaDoor = 1.2 * 2;

  let areaSiteWalls = 2 * (x * y);
  let areaWindows = 2 * (1.5 * 1.5);

  let areaWalls =
    areaFrontAndBackWall - areaDoor + (areaSiteWalls - areaWindows);

  let areaWallsPainting = areaWalls / paintColorGreen;

  console.log(areaWallsPainting.toFixed(2));

  // Roof
  let areaFrontRoof = x * y;
  let areaSiteRoof = (x * h) / 2;

  let areaRoof = 2 * areaFrontRoof + 2 * areaSiteRoof;
  let areaRoofPainting = areaRoof / paintColorRed;

  console.log(areaRoofPainting.toFixed(2));
}
housePainting([6, 10, 5.2]);
console.log("-------");
housePainting([10.25, 15.45, 8.88]);
