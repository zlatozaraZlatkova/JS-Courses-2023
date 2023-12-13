import { render } from "./node_modules/lit-html/lit-html.js";
import { getAllBooks, createBook, updateBook, deleteBook } from "./src/api.js";
import { mainTemplate } from "./src/templates/mainTemplate.js";
import { tableRowsTemp } from "./src/templates/tableRowsTemplate.js";
import { editButtonHandler } from "./src/actions.js";

const documentBody = document.querySelector("body");
render(mainTemplate(), documentBody);

//-----LOAD DATA--------
const loadBtn = documentBody.querySelector("#loadBooks");
loadBtn.addEventListener("click", async () => {
  const booksData = await getAllBooks();
  const sectionTbody = documentBody.querySelector("table tbody");

  const books = [];

  for (let id in booksData) {
    books.push({
      author: booksData[id].author,
      title: booksData[id].title,
      _id: id,
    });
  }

  const context = {
    books,
    deleteFunction,
    editButtonHandler,
  };

  render(tableRowsTemp(context), sectionTbody);
});

//------ADD-------------

const addFormElement = document.querySelector("#add-form");
addFormElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(addFormElement);
  const { title, author } = Object.fromEntries(formData);

  if (!title || !author) {
    throw new Error("All fields are required!");
  }

  const book = { title, author };

  await createBook(book).then((data) => {
    addFormElement.reset();
    documentBody.querySelector("#loadBooks").click();
  });
});

//--------EDIT-------------
const editFormElement = documentBody.querySelector("#edit-form");
editFormElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(editFormElement);
  const { title, author, id } = Object.fromEntries(formData);
  if (!title || !author) {
    throw new Error("All fields are required!");
  }

  const updatedBook = { title, author };

  await updateBook(id, updatedBook).then((data) => {
    documentBody.querySelector("#loadBooks").click();
    editFormElement.style.display = "none";
    editFormElement.reset();
    addFormElement.style.display = "block";
  });
});

//--------DELETE-------------

async function deleteFunction(id) {
  await deleteBook(id);
  documentBody.querySelector("#loadBooks").click();
}
