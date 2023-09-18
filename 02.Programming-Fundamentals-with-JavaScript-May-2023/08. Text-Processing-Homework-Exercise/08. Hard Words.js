/*You will receive an array, which holds the string and another array. 
The string is a letter from a young boy who does not yet know some words and you have to help him. 
The letter has a few holes, these holes are the words unknown to the boy and you must fill them with strings from the array you receive at the second index. 
If the length of the hole is 4 you have to replace it with string with the same length and so on…


*/
//VERSION 1
function stringDemo(array) {
  const words = array.pop();
  words.sort((a, b) => b.length - a.length);

  let text = array.toString();
  let cutString = array.toString().split(" ");

  for (let word of words) {
    for (let hole of cutString) {
      if (hole.startsWith("_") && hole.endsWith("_")) {
        if (hole.length === word.length) {
          text = text.replace(hole, word);
        }
      }
      if (hole.startsWith("_") && !hole.endsWith("_")) {
        let newHole = hole.slice(0, hole.length - 1);
        if (newHole.length === word.length) {
          text = text.replace(newHole, word);
        }
      }
    }
  }

  console.log(text);
}
stringDemo([
  "Hi, grandma! I'm so ____ to write to you. ______, the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);

//VERSION 2
function solve(input) {
  let text = input[0];
  let wordsArr = input[1];
  let sortWordsArr = wordsArr.sort((a, b) => b.length - a.length);

  sortWordsArr.forEach((word) => {
    let match = `${"_".repeat(word.length)}`;
    text = text.replace(match, word);
  });

  console.log(text);
}
solve([
  "Hi, grandma! I'm so ____ to write to you. ______, the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);

//VERSION 3

function hardWords(data) {
  let text = data[0].split(" ");
  let words = data[1];

  for (let i = 0; i < text.length; i++) {
    if (text[i].includes("_")) {
      let substr = text[i].substring(
        text[i].indexOf("_"),
        text[i].lastIndexOf("_") + 1
      );

      let endElement = text[i].substring(text[i].lastIndexOf("_") + 1);
      let firstElement = text[i].substring(0, text[i].indexOf("_"));

      for (let el of words) {
        if (substr.length === el.length) {
          text[i] = el;

          if (endElement) {
            text[i] = text[i] + endElement;
          }
          if (firstElement) {
            text[i] = firstElement + text[i];
          }
        }
      }
    }
  }

  console.log(text.join(" "));
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______, the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
