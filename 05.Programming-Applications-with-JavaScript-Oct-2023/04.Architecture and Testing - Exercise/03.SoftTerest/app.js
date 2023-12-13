import { initializer } from "./router.js";
import { logout } from "./src/api/user.js";
import { showCatalog } from "./src/views/catalog.js";
import { showCreate } from "./src/views/create.js";
import { showDetails } from "./src/views/details.js";
import { showHomeView } from "./src/views/home.js";
import { showLogin } from "./src/views/login.js";
import { showRegister } from "./src/views/register.js";



document.getElementById("defSection").remove();
debugger 

const links = {
  "/": showHomeView,
  "/catalog": showCatalog,
  "/create": showCreate,
  "/details": showDetails,
  "/login": showLogin,
  "/register": showRegister,
  "/logout": onLogout

};

const router = initializer(links);
router.updateNavBar();
//start the application in home view
router.goTo("/");


//LOGOUT
async function onLogout() {
  await logout();
  router.updateNavBar();
  router.goTo('/');
}