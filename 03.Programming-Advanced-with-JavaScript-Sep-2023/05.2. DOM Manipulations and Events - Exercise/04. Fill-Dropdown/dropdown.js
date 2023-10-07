function addItem() {
    const inputItemText = document.querySelector("#newItemText").value;
    const inputItemValue = document.querySelector("#newItemValue").value;
    const container = document.querySelector("#menu");
    const inputFields = Array.from(document.querySelectorAll("input[type=text]"));
  
    const newOptionEl = document.createElement("option");
  
    newOptionEl.textContent = inputItemText;
    newOptionEl.value = inputItemValue;

    container.appendChild(newOptionEl);

    inputFields.forEach((el) => (el.value = ""));
  }
  
  