function winningTicket(input) {
  let separatorRegex = /\s*,\s*/g;
  let line = input.split(separatorRegex);

  let ticketInfo = {};

  for (let token of line) {
    let ticket = token;
    let isValidLength = ticket.length;
    let wonSymbol = "";
    let ticketLength = 0;

    if (isValidLength === 20) {
      let leftRange = ticket.slice(0, isValidLength / 2);
      let rightRange = ticket.slice(isValidLength / 2, isValidLength + 1);

      let wonSymbolsRegex = /(\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/g; // NB!!

      let left = leftRange.match(wonSymbolsRegex);
      let right = rightRange.match(wonSymbolsRegex);

      if (left === null || right === null) {
        left = [];
        right = [];
      } else {
        left = left.toString(); //NB!!
        right = right.toString(); //NB!!

        if (left[0][0] === right[0][0]) {
          if (left.length === right.length) {
            wonSymbol = left[0][0];
            ticketLength = left.length;
          } else if (
            (left.length >= 6 || left.length <= 9) &&
            (right.length >= 6 || right.length <= 9)
          ) {
            if (left.length > right.length) {
              wonSymbol = right[0][0];
              ticketLength = right.length;
            } else {
              wonSymbol = left[0][0];
              ticketLength = left.length;
            }
          }
        }
      }
    }

    ticketInfo[ticket] = [wonSymbol, ticketLength];
  }

  //console.table(ticketInfo);

  for (let [ticket, info] of Object.entries(ticketInfo)) {
    let [wonSymbol, ticketLength] = info;

    if (ticket.length !== 20) {
      console.log(`invalid ticket`);
    } else if ((wonSymbol === "" && ticketLength === 0) || ticketLength < 6) {
      console.log(`ticket "${ticket}" - no match`);
    } else if (ticketLength >= 6 && ticketLength <= 9) {
      console.log(`ticket "${ticket}" - ${ticketLength}${wonSymbol}`);
    } else if (ticketLength === 10) {
      console.log(`ticket "${ticket}" - ${ticketLength}${wonSymbol} Jackpot!`);
    }
  }
}
winningTicket("Cash$$$$$$Ca$$$$$$sh");
console.log("-----");
winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
console.log("-----");
winningTicket("validticketnomatch:(");
console.log("-----");
winningTicket("####$$$$$$Ca$$$$$$sh");
console.log("-----");
winningTicket("Cash$$$xxxCa$$$xxxsh");
console.log("-----");
winningTicket("Cash$$$$$$Caaaaa$ash");
console.log("-----");
winningTicket("Cash$$$$$$Caaaaa#ash");
console.log("-----");
winningTicket("C$$$$$$$$$Ca$$$$$$sh");

winningTicket("Ca$$$$$$shC$$$$$$$$$");
winningTicket("dad$ghghgh$$$$$$$$$$");

//version 2
function winningTicket(input) {
  let arr = input
    .split(/\s*\s*/)
    .join("")
    .split(",")
    .join(" ");
  let pattern = /(\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/g;
  let newArr = arr.split(" ");
  for (let reg of newArr) {
    if (reg.length !== 20) {
      console.log(`invalid ticket`);
    } else {
      let left = reg
        .toString()
        .substring(0, reg.length / 2)
        .match(pattern);
      let right = reg
        .toString()
        .substring(reg.length / 2)
        .match(pattern);

      if (left == null || right == null) {
        console.log(`ticket "${reg}" - no match`);
      }

      if (left !== null && right !== null) {
        left = left.toString();
        right = right.toString();

        if (left.length == 10 && right.length == 10) {
          console.log(`ticket "${reg}" - ${left.length}${left[0]} Jackpot!`);
        } else if (right[0] == left[0]) {
          if (left.length < right.length) {
            console.log(`ticket "${reg}" - ${left.length}${left[0]}`);
          }
          if (right.length < left.length) {
            console.log(`ticket "${reg}" - ${right.length}${right[0]}`);
          }
          if (right.length == left.length) {
            console.log(`ticket "${reg}" - ${left.length}${left[0]}`);
          }
        } else {
          console.log(`invalid ticket`);
        }
      }
    }
  }
}
// winningTicket("Cash$$$$$$Ca$$$$$$sh");
// console.log("-----");
winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
// console.log("-----");
// winningTicket("validticketnomatch:(");
// console.log("-----");
// winningTicket("####$$$$$$Ca$$$$$$sh");
// console.log("-----");
// winningTicket("Cash$$$xxxCa$$$xxxsh");
// console.log("-----");
// winningTicket("Cash$$$$$$Caaaaa$ash");
// console.log("-----");
// winningTicket("Cash$$$$$$Caaaaa#ash");
// console.log("-----");
// winningTicket("C$$$$$$$$$Ca$$$$$$sh");

// winningTicket("Ca$$$$$$shC$$$$$$$$$");
// winningTicket("dad$ghghgh$$$$$$$$$$");


