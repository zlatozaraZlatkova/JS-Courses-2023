import { html } from "../node_modules/lit-html/lit-html.js";

export const rowTemplate = (data) => html`
<tr>
  <td>${data.firstName} ${data.lastName}</td>
  <td>${data.email}</td>
  <td>${data.course}</td>
</tr>`;

// export const  studentsTemplate = (studentData) => html`
// ${studentData.map(student => rowTemplate(student))}`;


// const rowTemplate = (student) => html`
// <tr>
// <td>${student.firstName} ${student.lastName}</td>
// <td>${student.email}</td>
// <td>${student.course}</td>
// </tr>
// `


