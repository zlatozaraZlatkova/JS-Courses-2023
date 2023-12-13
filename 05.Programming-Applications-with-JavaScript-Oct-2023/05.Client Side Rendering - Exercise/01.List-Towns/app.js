import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById("btnLoadTowns").addEventListener("click", onLoad);
const root = document.getElementById("root");
let input = document.querySelector("#towns");
const dataFromInput = (input) => input.value.split(", ");
const clearInput = (input) => (input.value = "");

function onLoad(event) {
  event.preventDefault();
  const data = dataFromInput(input);
  renderComponentList(data);
  clearInput(input);
}

const renderComponentList = (data) => {
  render(listTemplate(data), root);
};

const listTemplate = (data) => html` <ul>
  ${data.map((item) => html`<li>${item}</li>`)}
</ul>`;
