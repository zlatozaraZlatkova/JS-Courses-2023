
import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { updateNav } from "../app.js";
import { post } from "../src/api.js";


const registerTemplate = () => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Register New User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit="${onSubmit}">
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class="form-control" id="email" type="text" name="email" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="rePass">Repeat</label>
          <input
            class="form-control"
            id="rePass"
            type="password"
            name="rePass"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </div>
    </div>
  </form>
`;


export async function registerView() {
  
  const root = document.querySelector("body div.container");
  render(registerTemplate(), root);
}


async function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const repass = formData.get("rePass");

  if (!email || !password || !repass) {
    throw new Error("All fields are required!");
  }
  if (password !== repass) {
    throw new Error("Passwords don't match");
  }

  //IMPORTANT - REQUEST to api.js
  //res = await post(url, dataObject)
  const data = await post("/users/register", { email, password });


  const userData = {
    id: data._id,
    email: data.email, 
    accessToken: data.accessToken,
  };

  sessionStorage.setItem("userData", JSON.stringify(userData));

  form.reset();
  updateNav();
  page.redirect("/");
  console.log(page.redirect("/"))


}
