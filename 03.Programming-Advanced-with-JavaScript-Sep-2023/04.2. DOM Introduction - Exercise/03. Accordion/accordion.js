function toggle() {
  const MORE = "More";
  const LESS = "Less";

  const buttonSpan = document.querySelector(".button");
  const divWrapperText = document.querySelector("#extra");

  buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE;

  divWrapperText.style.display =
    divWrapperText.style.display === "none" ||
    divWrapperText.style.display === ""
      ? (divWrapperText.style.display = "block")
      : (divWrapperText.style.display = "none");
}
