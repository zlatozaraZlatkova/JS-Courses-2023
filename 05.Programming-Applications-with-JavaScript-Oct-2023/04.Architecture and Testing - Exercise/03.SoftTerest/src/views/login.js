//import function login
import { login } from "../api/user.js";
const section = document.getElementById("loginView");

let ctx = null;

export function showLogin(context) {
  ctx = context;
  ctx.showSection(section);
}

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const { email, password } = Object.fromEntries(formData);

  try {
    if(!email || !password) {
      throw new Error("All fields are required!");
    }
  
    await login(email, password);
  
    form.reset();
    ctx.updateNavBar();
    ctx.goTo("/");


  } catch(err) {
    alert(err.message);
    throw err;
  }
  
  
}