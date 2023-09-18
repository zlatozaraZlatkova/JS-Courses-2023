function searchBook(input) {
    let bookSearched = input[0];

    let index = 1;
    let currentBook = input[index];
    index++

    let booksChecked = 0;


    while (currentBook !== "No More Books") {

        if (currentBook === bookSearched) {
            console.log(`You checked ${booksChecked} books and found it.`);
            return;
        }

        booksChecked++;

        currentBook = input[index];
        index++;
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksChecked} books.`);

}
searchBook(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])

searchBook(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])

searchBook(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
