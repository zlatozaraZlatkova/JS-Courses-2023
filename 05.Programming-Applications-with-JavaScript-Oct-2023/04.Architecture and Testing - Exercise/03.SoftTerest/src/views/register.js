
import { register } from '../api/user.js';

const section = document.getElementById("registerView");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);


let ctx = null;

export function showRegister(context) {
  ctx = context;
  ctx.showSection(section)
}


async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const repeatPassword = formData.get("repeatPassword");
  //sort syntax
  //const { email, password, repeatPassword } = Object.formEntries(formData); 

  try {

    if(!email || !password || !repeatPassword) {
      throw new Error("All fields are required!");
      
    }
    if(email.length < 3) {
      throw new Error("Email should be at least 3 character long!");
    }
    if(password.length < 3) {
      throw new Error("Password should be at least 3 character long!");
    }
    if(password !== repeatPassword) {
      throw new Error("Password don\'t match!");
    }

    const data = await register(email, password);

    form.reset();

    ctx.updateNavBar();
    ctx.goTo("/"); //home view


  } catch(err) {
    alert(err.message);
    throw err;
  }


}
