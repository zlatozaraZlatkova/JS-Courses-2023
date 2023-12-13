
import page from "./node_modules/page/page.mjs";

//import all views
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { detailsView }  from "./views/detailsViews.js";
import { editView } from "./views/editView.js";
import { myFurnitureView } from "./views/myFurnitureView.js";
import { logInView } from "./views/loginView.js";
import { logOutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

//LOGOUT 
document.getElementById("logoutBtn").addEventListener("click", logOutView);

page("/", catalogView);
page("/create", createView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/my-publications", myFurnitureView);
page("/login", logInView);
page("/register", registerView);


//Start of the application
updateNav();
page.start();


//NAV bar
export async function updateNav() {
  const userNav = document.getElementById("user");
  const guestNav = document.getElementById("guest");

  const userData = sessionStorage.getItem("userData");

  if(userData !== null) {
    userNav.style.display = "inline-block";
    guestNav.style.display = "none";
  } else {
    guestNav.style.display = "inline-block";
    userNav.style.display = "none";
  }

}