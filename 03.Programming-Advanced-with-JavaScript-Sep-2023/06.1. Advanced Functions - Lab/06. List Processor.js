/**
 * Using a closure, create an inner object to process list commands. The commands supported should be the following:
  · add <string> - adds the following string in an inner collection.
  · remove <string> - removes all occurrences of the supplied <string> from the inner collection.
  · print - prints all elements of the inner collection joined by ",".
 */
function listProcessor(data) {
  let arr = [];

  const commandParser = {
    add: (item) => arr.push(item),
    remove: (item) => arr = arr.filter((i) => i !== item),
    print:()=> console.log(arr.join(","))
  };

  for (let token of data) {
    const [command, item] = token.split(" ");
    commandParser[command](item);

  }

}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
