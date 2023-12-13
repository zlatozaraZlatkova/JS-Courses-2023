
import { getIdeaById, deleteIdeaById } from "../api/data.js";

const section = document.getElementById("detailsView");

export async function showDetails(context, id) {
  const idea = await getIdeaById(id);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const isOwner = user && user._id === idea._ownerId;
 
  section.innerHTML = createIdeaDetails(idea, isOwner);
 
  if(isOwner) {

    section.querySelector("a").addEventListener("click", async(event) => {
      event.preventDefault();
      await deleteIdeaById(id);
      context.goTo("/catalog")
    })

  }

  
  context.showSection(section);
}

function createIdeaDetails(idea, isOwner) {
  let htmlTemplate = `
  <img class="det-img" src="${idea.img}" />
  <div class="desc">
      <h2 class="display-5">${idea.title}</h2>
      <p class="infoType">Description:</p>
      <p class="idea-description">${idea.description}</p>
  </div>`;

  if (isOwner) {
    htmlTemplate += `
    <div class="text-center">
        <a data-id="${idea._id}" id="deleteBtn" class="btn detb" href="">Delete</a>
    </div>`;
  }

  return htmlTemplate;

}