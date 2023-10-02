function solve() {
  // # CONFIGURE EVENT LISTENER
  const [input, output] = [...document.querySelectorAll("textarea")];
  const [generateBtn, buyBtn] = [...document.querySelectorAll("button")];

  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  const tbody = document.querySelector("table.table tbody");
  

  // # TABLE GENERATION

  function generate(event) {
    const data = JSON.parse(input.value);

    for (let item of data) {
      const row = document.createElement("tr");

      row.appendChild(createCell("img", { src: item.img }));
      row.appendChild(createCell("p", {}, item.name));
      row.appendChild(createCell("p", {}, item.price));
      row.appendChild(createCell("p", {}, item.decFactor));
      row.appendChild(createCell("input", { type: "checkbox" }));

      tbody.appendChild(row);
    }

    function createCell(nestedTag, attributes, content) {
      const cell = document.createElement("td");
      const nested = document.createElement(nestedTag);
      for (let attr in attributes) {
        nested[attr] = attributes[attr];
      }
      if (content) {
        nested.textContent = content;
      }
      cell.appendChild(nested);

      return cell;
    }
  }
  
  // # BUY FURNITURE

  function buy(event) {
    const furnitureCheckedBoxes = Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    )
      .map((box) => box.parentElement.parentElement)
      .map((currentRow) => ({
        name: currentRow.children[1].textContent,
        price: Number(currentRow.children[2].textContent),
        decFactor: Number(currentRow.children[3].textContent),
      }));


    const names = [];
    let total = 0;
    let decFactor = 0;

    for (let item of furnitureCheckedBoxes) {
      names.push(item.name);
      total += item.price;
      decFactor += item.decFactor;
    }
    let avrDecFactor = decFactor / furnitureCheckedBoxes.length;

    const result = `Bought furniture: ${names.join(
      ", "
    )}\nTotal price: ${total.toFixed(
      2
    )}\nAverage decoration factor: ${avrDecFactor.toFixed(2)}`;
    output.value = result;
  }
}
