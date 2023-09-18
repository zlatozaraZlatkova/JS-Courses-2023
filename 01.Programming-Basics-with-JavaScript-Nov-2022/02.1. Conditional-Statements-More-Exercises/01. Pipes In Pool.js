function pipesInPool(input) {
  let v = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let h = Number(input[3]);

  let p1WorkingH = p1 * h;
  let p2WorkingH = p2 * h;

  let occupancy = p1WorkingH + p2WorkingH;
  let occupancyPr = (occupancy / v) * 100;

  let p1Pr = (p1WorkingH / occupancy) * 100;
  let p2Pr = (p2WorkingH / occupancy) * 100;

  let diff = Math.abs(v - occupancy);

  if (v >= occupancy) {
    console.log(
      `The pool is ${occupancyPr.toFixed(2)}% full. Pipe 1: ${p1Pr.toFixed(
        2
      )}%.Pipe 2: ${p2Pr.toFixed(2)}%.`
    );
  } else {
    console.log(
      `For ${h} hours the pool overflows with ${diff.toFixed(2)} liters.`
    );
  }
}
pipesInPool([1000, 100, 120, 3]);

pipesInPool([100, 100, 100, 2.5]);
