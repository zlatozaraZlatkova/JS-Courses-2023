/**
 * 3. Deserialize String
Write a function, which takes the output from the previous task and turns it back into a string.
Until you receive the line “end”, you will receive several lines of input on the console, in the following format:
    • "{letter}:{index1}/{index2}/{index…}/{indexN}"
Your task is to take every letter and its index and form a string out of them.

 */

function deserializeString(input) {
  let arr = [];
  while(input[0] !== 'end') {
      let el = input.shift().split(':');
      let letter = el.shift();
      let indexes = el.join('').split('/').map(Number);
      
      for(let num of indexes) {
          arr[num] = letter;
      } 
  }
  console.log(arr.join(''));
}
deserializeString(['a:0/2/4/6',
'b:1/3/5',
'end'])


  