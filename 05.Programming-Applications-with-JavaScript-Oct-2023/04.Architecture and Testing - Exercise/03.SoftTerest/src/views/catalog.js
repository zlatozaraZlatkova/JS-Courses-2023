//visualization of all ideas
import { getAllIdeas } from "../api/data.js";

const section = document.getElementById("dashboard-holder");
let ctx = null;

export async function showCatalog(context) {
  ctx = context;
  //NB! 
  //REQUEST
  const ideas = await getAllIdeas();

  if (ideas.length == 0) {
    section.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`;
  } else {
    section.replaceChildren(...ideas.map(createNewIdea));
  }

  context.showSection(section);
}

//CREATING CARD
function createNewIdea(idea) {
  const div = document.createElement("div");
  div.className = "card overflow-hidden current-card details";
  div.style.width = "20rem";
  div.style.height = "18rem";

  div.innerHTML = `
  <div class="card-body">
    <p class="card-text">"${idea.title}"</p>
  </div>
  <img class="card-image" src="${idea.img}" alt="Card image cap">
  <a data-id="${idea._id}" class="btn" href="/details">Details</a>`;

  return div;
}

//AFTER CREATING CARD => event click on btn "details"
section.addEventListener("click", onDetailsSelect)


function onDetailsSelect(event) {
  if(event.target.tagName === "A" || event.target.tagName === "BUTTON") {
    event.preventDefault();
    const id = event.target.dataset.id;
    debugger
    console.log(id)
    //NB: syntax ("/details", id);
    if(id) {
      ctx.goTo("/details", id);
    }
   

  }
}