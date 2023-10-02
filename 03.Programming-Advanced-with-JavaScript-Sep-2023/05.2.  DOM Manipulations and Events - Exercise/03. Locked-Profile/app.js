function lockedProfile() {
    const contRef = document.querySelector("#main");
    contRef.addEventListener("click", showMore);
  
    function showMore(event) {
      if (event.target.tagName === "BUTTON") {
        const btnShowHide = event.target;
        const userData = event.target.parentElement.querySelector("div");
        const isCheckedRadioBtn = event.target.parentElement.querySelector("input[type=radio][value=unlock]").checked;
  
        if (isCheckedRadioBtn === true) {
          btnShowHide.textContent =
            btnShowHide.textContent === "Show more" ? "Hide it" : "Show more";
  
          userData.style.display =
            userData.style.display === "none" || userData.style.display === ""
              ? (userData.style.display = "block")
              : (userData.style.display = "none");
        }
      }
    }
  }
  