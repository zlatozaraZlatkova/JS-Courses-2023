function addItem() {
  const ul = document.getElementById("items");
  const inputText = document.getElementById("newItemText");

  ul.addEventListener("click", delHandler);

  const liElement = document.createElement("li");
  liElement.textContent = inputText.value;
  ul.appendChild(liElement);

  const delBtn = document.createElement("a");
  delBtn.textContent = "[Delete]";
  delBtn.href = "#";
  liElement.appendChild(delBtn);

  inputText.value = "";

  function delHandler(event) {
    if (event.target.tagName === "A") event.target.parentNode.remove();
  }
}
