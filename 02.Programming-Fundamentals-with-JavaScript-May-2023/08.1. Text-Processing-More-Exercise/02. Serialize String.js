/*2. Serialize String
You have been tasked to serialize a string. Serialization is done specially, in which a character from that string is saved with the indexes at which it is found.
The input will consist array, containing a single string, which may consist of ANY ASCII characters. Your task is to serialize the string in the following way:
{char}:{index1}/{index2}/{index3}
The char will be the character, and the indexes will be the indexes it is found at in the string.


*/

function serializeString(str) {
  let text = str[0].split("");
  let result = {};

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let index = i;
    if (!result.hasOwnProperty(char)) {
      result[char] = [index];
      console.table(result);
    } else {
      result[char].push(index);
      console.table(result);
    }
  }

  let entries = Object.entries(result);

  for (let [key, value] of entries) {
    console.log(`${key}:${value.join("/")}`);
  }
}
serializeString(["abababa"]);

//version 2
function serializeString(input) {
  let text = input[0].split("");
  let uniqueLetters = input[0].split("");
  uniqueLetters = uniqueLetters.filter(
    (char, index) => uniqueLetters.indexOf(char) === index
  );

  for (let uniqueLetter of uniqueLetters) {
    let buff = `${uniqueLetter}:`;

    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      if (uniqueLetter === letter) {
        buff += `${i}/`;
      }
    }
    console.log(buff.slice(0, buff.length - 1));
  }
}
serializeString(["abababa"]);
