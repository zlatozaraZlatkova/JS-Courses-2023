export function initializer(links) {
  const main = document.getElementById("mainView");

  const navBar = document.querySelector("nav");
  navBar.addEventListener("click", onNavigate);

  const context = {
    showSection,
    goTo,
    updateNavBar,
  };

  return context;



  function showSection(section) {
    main.replaceChildren(section);
  }

  function onNavigate(event) {
    event.preventDefault();
    let target = event.target;
    if (target.tagName === "IMG") {
      target = target.parentElement;
    }

    if (target.tagName === "A") {
      const url = new URL(target.href);
      goTo(url.pathname);
    }
  }

  function goTo(name, ...params) {
    const handler = links[name];
    if (typeof handler === "function") {
      handler(context, ...params);
    }
  }

  function updateNavBar() {
    const user = sessionStorage.getItem("user");

    if (user !== null) {
      navBar
        .querySelectorAll(".user")
        .forEach((element) => (element.style.display = "block"));
      navBar
        .querySelectorAll(".guest")
        .forEach((element) => (element.style.display = "none"));
    } else {
      navBar
        .querySelectorAll(".user")
        .forEach((element) => (element.style.display = "none"));
      navBar
        .querySelectorAll(".guest")
        .forEach((element) => (element.style.display = "block"));
    }
  }
}
