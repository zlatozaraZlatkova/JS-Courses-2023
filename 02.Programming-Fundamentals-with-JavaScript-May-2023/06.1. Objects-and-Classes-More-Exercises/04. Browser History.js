function solve(browser, newCommands) {
  for (let commandString of newCommands) {
    let tokens = commandString.split(" ");
    let command = tokens[0];
    let value = tokens[1];

    if (command === "Close") {
      if (browser["Open Tabs"].includes(value)) {
        browser["Open Tabs"] = browser["Open Tabs"].filter((x) => x === value);
        browser["Recently Closed"].push(value);
        browser["Browser Logs"].push(commandString);
      }
    } else if (command === "Open") {
      browser["Open Tabs"].push(value);
      browser["Browser Logs"].push(commandString);
    } else if (commandString === "Clear History and Cache") {
      browser["Open Tabs"] = [];
      browser["Recently Closed"] = [];
      browser["Browser Logs"] = [];
    }
  }

  console.log(browser["Browser Name"]);
  console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}
solve(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
solve(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
