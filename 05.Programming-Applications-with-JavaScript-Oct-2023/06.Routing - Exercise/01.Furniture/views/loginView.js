
import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { updateNav } from "../app.js";
import { post } from "../src/api.js";

const loginTemplate = () => html`<div class="row space-top">
    <div class="col-md-12">
      <h1>Login User</h1>
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
        <input type="submit" class="btn btn-primary" value="Login" />
      </div>
    </div>
  </form>`;

export async function logInView() {
  const root = document.querySelector("body div.container");
  render(loginTemplate(), root);
}

async function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    throw new Error("All fields are required!");
  }

  const data = await post("/users/login", { email, password });

  const userData = {
    id: data._id,
    email: data.email,
    accessToken: data.accessToken,
  };

  sessionStorage.setItem("userData", JSON.stringify(userData));
  form.reset();

  updateNav();
  page.redirect("/");
}
