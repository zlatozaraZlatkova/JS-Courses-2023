function dnaPrint(number) {
  let helixLength = number;
  let sequenceArr = "ATCGTTAGGG".split("");

  for (let index = 1; index <= helixLength; index++) {
    let [firstCharacter, secondCharacter] = sequenceArr.splice(0, 2);

    if (index === 1 || index % 4 === 1) {
      console.log(`**${firstCharacter}${secondCharacter}**`);
    } else if (index === 2 || index % 4 === 2) {
      console.log(`*${firstCharacter}--${secondCharacter}*`);
    } else if (index === 3 || index % 4 === 3) {
      console.log(`${firstCharacter}----${secondCharacter}`);
    } else if (index === 4 || index % 4 === 0) {
      console.log(`*${firstCharacter}--${secondCharacter}*`);
    }

    sequenceArr.push(firstCharacter);
    sequenceArr.push(secondCharacter);
  }
}
dnaPrint(10);
