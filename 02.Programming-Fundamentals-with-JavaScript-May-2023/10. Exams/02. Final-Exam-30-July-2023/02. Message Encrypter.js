function getMessage(input) {
  let num = input.shift();
  let regex = /(@|\*)(?<message>[A-Z][a-z]{2,})\1:\s([\[])(?<firstW>\w)([\]][\|])([\[])(?<secondW>\w)([\]][\|])([\[])(?<thirdW>\w)([\]][\|])$/gm;

  for (let i = 0; i < num; i++) {
    let match = input[i].match(regex);
    
    if (match === null) {
      console.log(`Valid message not found!`);
    } else {
      let matches = input[i].matchAll(regex);
      for (let match of matches) {
        let firstChar = match.groups.firstW;
        let secondChar = match.groups.secondW;
        let thirdChar = match.groups.thirdW;

        let firstCharCode = firstChar.charCodeAt(0);
        let secondCharCode = secondChar.charCodeAt(0);
        let thirdCharCode = thirdChar.charCodeAt(0);

        console.log(
          `${match.groups.message}: ${firstCharCode} ${secondCharCode} ${thirdCharCode}`
        );
      }
    }
  }
}
getMessage([
  "3",
  "*Request*: [I]|[s]|[i]|",
  "*Taggy@: [73]|[73]|[73]|",
  "Should be valid @Taggy@: [v]|[a]|[l]|",
]);
