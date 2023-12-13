import { html } from "../../node_modules/lit-html/lit-html.js";
import { addFormTemp } from "./formTemplates.js";
import { loadButtonTemp } from "./loadBtnTemplate.js";
import { tableTemplate } from "./tableTemplate.js";

export const mainTemplate = () => {
  return html`
    ${loadButtonTemp()} ${tableTemplate()}
    <form id="add-form">${addFormTemp()}</form>
    <form id="edit-form" style="display: none"></form>
    
  `;
};

