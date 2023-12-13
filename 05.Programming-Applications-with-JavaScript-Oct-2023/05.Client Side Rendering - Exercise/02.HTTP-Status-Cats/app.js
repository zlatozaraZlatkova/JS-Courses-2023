import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const root = document.getElementById("allCats");

const cardTemplate = (data) => html`
  <li>
    <img
      src="./images/${data.imageLocation}.jpg"
      width="250"
      height="250"
      alt="Card image cap"
    />
    <div class="info">
      <button class="showBtn" @click=${onClick}>Show status code</button>
      <div class="status" style="display: none" id="${data.id}">
        <h4 class="card-title">Status Code: ${data.statusCode}</h4>
        <p class="card-text">${data.statusMessage}</p>
      </div>
    </div>
  </li>
`;

const ulTemplate = (data) =>
  html`<ul>
    ${data.map((currCat) => cardTemplate(currCat))}
  </ul> `;

const renderComponent = (data) => {
  render(ulTemplate(data), root);
};

renderComponent(cats);

function onClick(event) {
  event.preventDefault();
  const parentEl = event.target.parentElement;
  const divStatus = parentEl.querySelector(".status");

  if (divStatus.style.display === "none") {
    parentEl.querySelector(".showBtn").textContent = "Hide status code";
    divStatus.style.display = "block";
  } else {
    parentEl.querySelector(".showBtn").textContent = "Show status code";
    divStatus.style.display = "none";
  }
}
