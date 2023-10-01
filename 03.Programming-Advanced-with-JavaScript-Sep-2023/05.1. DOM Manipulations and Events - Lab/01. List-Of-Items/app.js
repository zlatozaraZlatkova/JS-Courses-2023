function addItem() {
  const inputText = document.getElementById("newItemText").value;
  const newElementLi = document.createElement("li");
  newElementLi.textContent = inputText;
  const ul = document.getElementById("items");
  ul.appendChild(newElementLi);
  document.getElementById("newItemText").value = "";
}
