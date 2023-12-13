import { html, render } from "./node_modules/lit-html/lit-html.js";
import { getAllItems, createItem } from "./src/data.js";

//items = async function getAllItems 
//itemTemplate = items.map(html..)
//render itemTemplate


document.querySelector('[type="submit"]').addEventListener('click', addItem);
renderComponentList();

const listTemplate = (data) => html`<option value="${data._id}">${data.text}</option>`;

async function addItem(event) {
    event.preventDefault();
    const inputText = document.getElementById("itemText").value;
    await createItem(inputText);
    renderComponentList();

}


async function renderComponentList()  {
    const data = await getAllItems();
    const root = document.getElementById("menu");
 
    render(Object.values(data).map(listTemplate), root);

}



   

