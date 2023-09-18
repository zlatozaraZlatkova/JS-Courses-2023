function stringManipulator(data) {
  let text = data.shift();

  let commandParser = {
    Translate: (text, char, replacement) => {
      let regex = new RegExp(char, "g");
      text = text.replace(regex, replacement);
      console.log(text);
      return text;
    },
    Includes: (text, substring) => {
      if (text.includes(substring)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
      return text;
    },
    Start: (text, substring) => {
      if (text.startsWith(substring)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
      return text;
    },
    Lowercase: (text) => {
      text = text.toLowerCase();
      console.log(`${text}`);
      return text;
    },
    FindIndex: (text, char) => {
      let index = text.lastIndexOf(char);
      console.log(index);
      return text;
    },
    Remove: (text, startIndex, count) => {
      startIndex = Number(startIndex);
      count = Number(count);
      let subStr = text.substring(startIndex, startIndex + count);
      text = text.replace(subStr, "");
      console.log(text);
      return text;
    },
  };
  for (let line of data) {
    if (line === "End") {
      break;
    }
    let [command, ...tokens] = line.split(" ");
    text = commandParser[command](text, ...tokens);
  }
}
stringManipulator([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);
console.log("--------");
stringManipulator([
  "*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End",
]);

