

function angryCat (input){
 
  let inputMessage = input;
  //• The count of string-number pairs will be in the range [1 … 20 000].
  //• Each string will contain any character except digits. The length of each string will be in the range [1 … 20].
  //• The repeat count for each string will be an integer in the range [0 … 20].

  let regex = /(?<chochkoEachMessage>\D{1,20})(?=(?<counter>\d{1,2}))/g;
  let match = regex.exec(inputMessage);
  console.log(match)
  let resultObj = {};

  while (match != null) {
  
      let currentMatchString = match.groups.chochkoEachMessage;
      let currentCounter = Number(match.groups.counter);

      if ( currentCounter <= 20 && currentCounter >= 0) {
          resultObj[currentMatchString] = currentCounter;
          match = regex.exec(inputMessage);
      } else {
          break;
      }
      
  }
  

  let finalMessage = '';
    for (let  key in resultObj ) {
    finalMessage += key.repeat(resultObj[key]);
  }

  finalMessage = finalMessage.toUpperCase();

  let uniqueCount = new Set(finalMessage).size;
  console.log(`Unique symbols used: ${uniqueCount}`);
  console.log(finalMessage);
  
  // AAA
  // ASDASD&&&&&S@

} 


//solve ("a3"); 
console.log(`*************`);
angryCat("aSd2&5s@1");
console.log(`***`)

//version 2

function angryCat(input) {
  let series = input[0].split(/[0-9]+/).filter((x) => x != '');
  let repeaters = input[0].split(/[^0-9]+/).filter((x) => x != '');
  let result = '';
  for (let i = 0; i < series.length; i++) {
      result += series[i].toUpperCase().repeat(repeaters[i]);
  }
  console.log(`Unique symbols used: ${[...new Set(result)].length}`);
  console.log(result);
}
angryCat("aSd2&5s@1");
