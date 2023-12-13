import { html } from "../../node_modules/lit-html/lit-html.js";


//All table rows
export const tableRowsTemp = (context) => html`
  ${context.books.map((book) => bookRowTemp(book, context.deleteFunction, context.editButtonHandler))}
`;

//current row
export const bookRowTemp = (book, deleteFunc, updateHandler) => {
  return html` <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
      <button @click=${updateHandler.bind(null, book._id)}>Edit</button>
      <button @click=${deleteFunc.bind(null, book._id)}>Delete</button>
    </td>
  </tr>`;
};
