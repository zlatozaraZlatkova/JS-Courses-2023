let loadBooksButton = document.getElementById("loadBooks");
loadBooksButton.addEventListener("click", getBooks);
const booksTableBody = document.querySelector("tbody");

let bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", handelFormSubmit);

const authorRef = document.querySelector('[name="author"]');
const titleRef = document.querySelector('[name="title"]');

const formHeading = document.querySelector("form h3");
const formBtn = document.querySelector("form button");

const url = "http://localhost:3030/jsonstore/collections/books";

function handelEdit(event) {
  debugger;

  let currentBook = event.target.closest(".book");
  let currentTitle = currentBook.querySelector(".title");
  let currentAuthor = currentBook.querySelector(".author");

  formHeading.textContent = "Edit";
  formBtn.textContent = "Save";
  
  bookForm.dataset.entryId = currentBook.dataset.id;
  bookForm.dataset.isEdit = true;

  let titleInput = bookForm.querySelector('[name="title"]');
  let authorInput = bookForm.querySelector('[name="author"]');

  titleInput.value = currentTitle.textContent;
  authorInput.value = currentAuthor.textContent;

}


async function handelFormSubmit(event) {
  event.preventDefault();
  let form = event.currentTarget;
  let formData = new FormData(form);

  if (form.dataset.isEdit !== undefined) {
    let id = form.dataset.entryId;
    editBook(formData, id);
  } else {
    createBook(formData);
  }
}


async function deleteBook(event) {
  let bookToDelete = event.target.closest(".book");
  let id = bookToDelete.dataset.id;
  let deleteResponse = await fetch(url + `/${id}`, {
    method: "delete",
  });

  if (deleteResponse.status == 200) {
    bookToDelete.remove();
  }
}

async function editBook(formData, id) {
  let editBook = {
    title: formData.get("title"),
    author: formData.get("author"),
  };
  const editResponse = await fetch(url + `/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editBook),
  });
  const editResult = await editResponse.json();


  let editedBook = booksTableBody.querySelector(`tr.book[data-id="${id}"]`);
  let editHtmlBook = loadAndCreateBook(editResult, editResult._id);
  editedBook.replaceWith(editHtmlBook);

  authorRef.value = "";
  titleRef.value = "";
}


async function createBook(formData) {
  let newBook = {
    title: formData.get("title"),
    author: formData.get("author"),
  };

  let response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  });

  let data = await response.json();

  let createdHtmlBook = loadAndCreateBook(data, data._id);
  booksTableBody.appendChild(createdHtmlBook);

  authorRef.value = "";
  titleRef.value = "";
  return data;
}


function loadAndCreateBook(book, id) {
  let titleTd = createEl("td", { class: "title" }, book.title);
  let authorTd = createEl("td", { class: "author" }, book.author);
  let editBtn = createEl("button", undefined, "Edit");
  let deleteBtn = createEl("button", undefined, "Delete");
  let buttonsTd = createEl("td", undefined, editBtn, deleteBtn);
  let tr = createEl("tr", { class: "book" }, titleTd, authorTd, buttonsTd);
  tr.dataset.id = id;

  editBtn.addEventListener("click", handelEdit);
  deleteBtn.addEventListener("click", deleteBook);

  return tr;
}


async function getBooks() {
  booksTableBody.replaceChildren();
  const getBooksResponse = await fetch(url);
  let books = await getBooksResponse.json();

  Object.keys(books).forEach((key) => {
    let id = key;
    let currBook = loadAndCreateBook(books[key], id);
    booksTableBody.appendChild(currBook);
  });
}


function createEl(tag, attributes, ...params) {
  let element = document.createElement(tag);

  let firstValue = params[0];
  if (params.length == 1 && typeof firstValue !== "object") {
    if (["input", "textarea"].includes(tag)) {
      element.value = firstValue;
    } else {
      element.textContent = firstValue;
    }
  } else {
    element.append(...params);
  }
  if (attributes !== undefined) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }

  return element;
}
