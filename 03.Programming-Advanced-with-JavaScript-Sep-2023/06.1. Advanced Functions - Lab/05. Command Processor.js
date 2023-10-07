/**
 * Write a program that keeps a string inside its context and can execute different commands that modify or print the string on the console.
  append(string) - append the given string at the end of the internal string
  removeStart(n) - remove the first n characters from the string, n is an integer
  removeEnd(n) - remove the last n characters from the string, n is an integer
  print - print the stored string on the console
 */
function solution() {
  let context = "";
  const result = {
    append,
    removeStart,
    removeEnd,
    print
  }
  return result;

  function append(string) {
    context += string;

  }
  function removeStart(index) {
    context = context.slice(index);
  }
  function removeEnd(index) {
    context = context.slice(0, context.length - index);
  }
  function print() {
    console.log(context);
  }
}
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();