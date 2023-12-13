
import { get } from "../src/api.js";
import { updateNav } from "../app.js";
import page from "../node_modules/page/page.mjs";



export async function logOutView() {
  await get("/users/logout");
  sessionStorage.clear();
  
  updateNav();
  page.redirect("/");

}
