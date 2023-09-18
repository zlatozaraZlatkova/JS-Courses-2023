function comments(data) {
  let articles = {};
  let usersList = [];
  let articlesList = [];

  for (let command of data) {
    let tokens = command.split(" ");

    let addToList = (list) => list.push(tokens.pop());

    if (tokens[0] === "user") {
      addToList(usersList);
    } else if (tokens[0] === "article") {
      addToList(articlesList);
    } else {
      saveInfo(command);
    }
  }

  sortAndPrint();

  function saveInfo(command) {
    let pattern =
      /(?<user>\w+) [a-z]+ [a-z]+ (?<article>\w+): (?<title>[\w+ ]+), (?<content>[\w+ ]+)/g;
    let match = pattern.exec(command);

    if (match) {
      let username = match.groups.user;
      let article = match.groups.article;
      let title = match.groups.title;
      let content = match.groups.content;

      if (usersList.includes(username) && articlesList.includes(article)) {
        if (!articles.hasOwnProperty(article)) {
          articles[article] = [];
        }

        articles[article].push({ username, title, content });
      }
    }
  }

  function sortAndPrint() {
    let sortedArticles = Object.entries(articles).sort(
      (a, b) => b[1].length - a[1].length
    );

    for (let [article, data] of sortedArticles) {
      console.log(`Comments on ${article}`);
      data
        .sort((a, b) => a.username.localeCompare(b.username))
        .forEach((obj) =>
          console.log(
            `--- From user ${obj.username}: ${obj.title} - ${obj.content}`
          )
        );
    }
  }
}
comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);

console.log("-----");

comments([
  "user Mark",
  "Mark posts on someArticle: NoTitle, stupidComment",
  "article Bobby",
  "article Steven",
  "user Liam",
  "user Henry",
  "Mark posts on Bobby: Is, I do really like them",
  "Mark posts on Steven: title, Run",
  "someUser posts on Movies: Like",
]);
