function bookShelf(input) {
  const shelves = new Map();

  for (const command of input) {
    if (command.includes(" -> ")) {
      createShelf(command);
    } else {
      addBook(command);
    }
  }

  sortAndPrint();

  function createShelf(command) {
    const [id, shelfGenre] = command.split(" -> ");

    if (!shelves.has(id)) {
      shelves.set(id, [shelfGenre]);
    }
  }

  function addBook(command) {
    const tokens = command.split(": ");
    const title = tokens.shift();
    const [author, bookGenre] = tokens.join("").split(", ");

    for (let [currId, data] of shelves) {
      const currGenre = data[0];

      if (currGenre === bookGenre) {
        shelves.get(currId).push({ title, author });
        break;
      }
    }
  }

  function sortAndPrint() {
    const sortedShelves = Array.from(shelves).sort(
      (a, b) => b[1].length - a[1].length
    );

    for (let shelf of sortedShelves) {
      const id = shelf.shift();
      shelf = shelf[0];
      const shelfGenre = shelf.shift();
      const booksCount = shelf.length;

      console.log(`${id} ${shelfGenre}: ${booksCount}`);

      shelf
        .sort((a, b) => a.title.localeCompare(b.title))
        .forEach((book) => console.log(`--> ${book.title}: ${book.author}`));
    }
  }
}

bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);

console.log("---------");

bookShelf([
  "1 -> mystery",
  "2 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Lions and Rats: Gabe Roads, history",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
]);

// version with object

function bookShelf(input) {
  const shelves = {};

  for (const command of input) {
    if (command.includes(" -> ")) {
      createShelf(command);
    } else {
      addBook(command);
    }
  }

  sortAndPrint();

  function createShelf(command) {
    const [id, shelfGenre] = command.split(" -> ");

    if (!shelves.hasOwnProperty(id)) {
      shelves[id] = [shelfGenre];
    }
  }

  function addBook(command) {
    const tokens = command.split(": ");
    const title = tokens.shift();
    const [author, bookGenre] = tokens.join("").split(", ");

    for (let [currId, data] of Object.entries(shelves)) {
      const currGenre = data[0];

      if (currGenre === bookGenre) {
        shelves[currId].push({ title, author });
        break;
      }
    }
  }

  function sortAndPrint() {
    const sortedShelves = Object.entries(shelves).sort(
      (a, b) => b[1].length - a[1].length
    );

    for (let shelf of sortedShelves) {
      const id = shelf.shift();
      shelf = shelf[0];
      const shelfGenre = shelf.shift();
      const booksCount = shelf.length;

      console.log(`${id} ${shelfGenre}: ${booksCount}`);

      shelf
        .sort((a, b) => a.title.localeCompare(b.title))
        .forEach((book) => console.log(`--> ${book.title}: ${book.author}`));
    }
  }
}
