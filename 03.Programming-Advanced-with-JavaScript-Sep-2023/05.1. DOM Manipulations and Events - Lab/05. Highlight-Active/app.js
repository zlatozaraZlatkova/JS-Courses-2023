function focused() {
  const inputFields = Array.from(document.querySelectorAll("input"));
  inputFields.forEach((filed) => {
    filed.addEventListener("focus", onFocusedHandler);
    filed.addEventListener("blur", onBlurHandler);
  });

  function onFocusedHandler(event) {
    event.target.parentNode.classList.add("focused");
  }

  function onBlurHandler(event) {
    event.target.parentNode.classList.remove("focused");
  }
}
