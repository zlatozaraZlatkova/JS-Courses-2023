function solve(data) {
  let firstStr = data[0];
  let secondStr = data[1];
  let keyWord = data[2].toUpperCase();

  let password = firstStr.concat(secondStr).toLowerCase();
  let vowel = ["a", "e", "i", "o", "u"];
  let currentKeyWordIndex = 0;

  for (let char of password) {
    if (vowel.includes(char)) {
      let currentVowel = char;
      password = password.replace(currentVowel, keyWord[currentKeyWordIndex++]);

      if (keyWord[currentKeyWordIndex] === undefined) {
        currentKeyWordIndex = 0;
      }
    }
  }

  let finalPassword = password.split("").reverse().join("");
  console.log(`Your generated password is ${finalPassword}`);
}

solve(["ilovepizza", "ihatevegetables", "orange"]);
console.log("------");
solve(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
console.log("------");
solve(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);
