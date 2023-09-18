/**
 * 
 * You will receive a single string. 
This string is written in PascalCase format. Your task here is to split this string by every word in it. 
Print them joined by comma and space.
 */
function pascalCaseSplitter(input) {
  // let text = input.replace(/([A-Z][a-z])/g, " $1").replace(/(\d)/g, " $1");
  let text = input.replace(/([a-z])([A-Z])/g, '$1, $2');
  
  console.log(text)
  
 
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");

function solve(text) {
  let result = text[0];
  let lower = text.toLowerCase();

  for (let index = 1; index < text.length; index++) {
    if (text[index] !== lower[index]) {
      result += ', '
    }
    result += text[index];
  }
  console.log(result)
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan")

//VERSION 2

function pascalCaseSplitter(input) {
  let wordsArr = [];
  let index = 0;

  for (let i = 1; i < input.length; i++) {
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) { 
      wordsArr.push(input.substring(index, i)); 
      index = i; 

    } 

  }
  let lastWord = wordsArr.push(input.substring(index, input.length))
  console.log(wordsArr.join(", "))
  


}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')