import { html, render } from "../node_modules/lit-html/lit-html.js";
import { get } from "../src/api.js";
import { onDelete } from "./deleteView.js";



const furnitureDetailsTemplate = (furniture, isOwner) => html` 
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>

  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src="${furniture.img}" />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Make: <span>${furniture.make}</span></p>
      <p>Model: <span>${furniture.model}</span></p>
      <p>Year: <span>${furniture.year}</span></p>
      <p>Description: <span>${furniture.description}</span></p>
      <p>Price: <span>${furniture.price}</span></p>
      <p>Material: <span>${furniture.material}</span></p>
      <div>
        ${furniture._ownerId === JSON.parse(sessionStorage.getItem("userData"))?.id
          ? html`<a href="/edit/${furniture._id}" class="btn btn-info" id="${furniture._id}">Edit</a>`
          : null}
        ${furniture._ownerId === JSON.parse(sessionStorage.getItem("userData"))?.id
          ? html`<a href="javascript:void(0)" class="btn btn-red" id="${furniture._id}" >Delete</a>`
          : null}
      </div>
    </div>
  </div>
`;



export async function detailsView(ctx) {
  let id = ctx.params.id;
  const data = await getDetails(id);
  render(furnitureDetailsTemplate(data), document.querySelector("body div.container"));

  document.querySelector(".btn-red").addEventListener("click", onDelete);
}


//GET request by ID
async function getDetails(id) {
  return await get(`/data/catalog/${id}`);
}



