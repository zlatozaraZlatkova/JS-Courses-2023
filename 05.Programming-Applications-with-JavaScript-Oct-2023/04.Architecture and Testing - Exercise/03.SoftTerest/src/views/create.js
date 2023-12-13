import { createIdea } from "../api/data.js";

const section = document.getElementById("createView");
let ctx = null;

export function showCreate(context) {
  ctx = context;
  context.showSection(section);
}
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const { title, description, imageURL } = Object.fromEntries(formData);

  try {

    if(!title || !description || !imageURL) {
      throw new Error("All fields are required!");
    }
    debugger
    if (title.length < 6) {
      throw new Error('Title should be at least 6 characters long!');
    }
    if (description.length < 10) {
      throw new Error('Description should be at least 10 characters lo!');
    }
    if (imageURL.length < 5) {
      throw new Error('Image should be at least 5 characters lon!');
    }

    await createIdea( { title, description, img: imageURL } ); //PARAMS AS A OBJ
    form.reset();
    ctx.updateNavBar();
    ctx.goTo("/catalog");
    


  } catch(err) {
    alert(err.message);
    throw err;
  }

  

}