import { render } from "../node_modules/lit-html/lit-html.js";
import { getBookById } from "./api.js";
import { editFormTemp } from "./templates/formTemplates.js";

export async function editButtonHandler(id) {
  document.querySelector("#add-form").style.display = "none";

  const currBook = await getBookById(id);

  const editFormEl = document.querySelector("#edit-form");
  editFormEl.style.display = "block"; 

  render(editFormTemp(currBook, id), editFormEl);


}
