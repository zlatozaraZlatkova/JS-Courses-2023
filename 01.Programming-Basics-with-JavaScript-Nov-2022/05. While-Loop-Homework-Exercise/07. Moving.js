function moving(input) {
  index = 0;
  let width = Number(input[index]);
  index++;
  let length = Number(input[index]);
  index++;
  let height = Number(input[index]);
  index++;

  let boxes = input[index];
  index++;

  let volume = width * length * height;

  while (boxes !== "Done") {
    boxes = Number(boxes);

    volume -= boxes;
    if (volume <= 0) {
      console.log(
        `No more free space! You need ${Math.abs(volume).toFixed(
          0
        )} Cubic metres more`
      );
      return;
    }

    boxes = input[index];
    index++;
  }

  console.log(`${volume} Cubic meters left.`);
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
