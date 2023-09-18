
 /*1. Reveal Words
Write a function, which receives two parameters. 
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string that contains templates containing '*'.
Find the word with the same length as the template and replace it.


 */

function revealWords(words, inputText) {
  let text = inputText
  let wordsArr = words.split(', '); 
 
  wordsArr.forEach(word => {
    let match = `${'*'.repeat(word.length)}`;
    text = text.replace(match, word);
  });
  console.log(text);

}
revealWords('great',
'softuni is ***** place for learning new programming languages')

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')



