function wordsUpperCase(text) {
  let textToUpperCase = text.toUpperCase(0);
  let regex = /[a-zA-Z0-9_]+/gm;
  let result = textToUpperCase.match(regex);
  console.log(result.join(", "));
}
wordsUpperCase("Hi, how are you?");
console.log("-------");
wordsUpperCase("hello");

// short version 2
function solve(text) {
  const regex = /\w+/gm;
  let result = text.match(regex);
  console.log(result.join(", ").toUpperCase());
}

// version 3
function wordsUpperCase(text) {
  return text
    .split(/[^a-zA-Z0-9_]+/gm)
    .join(" ")
    .trim()
    .split(" ")
    .map((x) => {
      if (x) {
        return x.toUpperCase();
      }
    })
    .join(", ");
}
console.log(wordsUpperCase("Hi, how are you?"));
console.log("-------");
console.log(wordsUpperCase("hello"));
