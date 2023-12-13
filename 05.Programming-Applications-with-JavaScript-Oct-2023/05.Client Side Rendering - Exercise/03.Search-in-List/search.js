import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const root = document.getElementById("towns");


const resultHTML = document.getElementById("result");
document.querySelector("button").addEventListener("click", search);



function search() {
  let inputText = document.querySelector("#searchText").value;
  const resultMatches = searchTown(towns, inputText);
  resultHTML.textContent = `${resultMatches.length} matches found`;
}

const searchTown = (towns, inputText) => {
  return towns.filter((town) => {
    if (town.includes(inputText)) {
      let match = document.getElementById(`${town}`); //id
      match.setAttribute("class", "active");
     
      return town;
    }

  });

};

const listTemplate = (towns) => html` <ul>
  ${towns.map((item) => html`<li id=${item}>${item}</li>`)}
</ul>`;

const renderComponentList = (towns) => {
  listTemplate(towns);
  render(listTemplate(towns), root);
};

renderComponentList(towns);
