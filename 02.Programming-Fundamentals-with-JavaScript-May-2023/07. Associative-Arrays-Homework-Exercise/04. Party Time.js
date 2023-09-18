/**
 *     4. Party Time
There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists. 
The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".
All VIP numbers start with a digit.
When you receive the command "PARTY", the guests start coming.
Print the count of guests then all guests, who didn't come to the party (VIP must be printed first). 
Hint: Guest names are not unique. Only the first match is removed when receiving a name.
 */

function partyTime(input) {
  let vipList = [];
  let regularLIst = [];

  let command = input.shift();

  while (command !== "PARTY") {
    let isFirstCharNum = startsWithNumber(command);

    if (isFirstCharNum === true) {
      vipList.push(command);
    } else {
      regularLIst.push(command);
    }

    command = input.shift();
  }

  let allGuests = vipList.concat(regularLIst);

  for (let guest of input) {
    allGuests.splice(allGuests.indexOf(guest), 1);
  }

  console.log(allGuests.length);
  console.log(allGuests.join("\n"));

  function startsWithNumber(str) {
    return /^\d/.test(str);
  }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
