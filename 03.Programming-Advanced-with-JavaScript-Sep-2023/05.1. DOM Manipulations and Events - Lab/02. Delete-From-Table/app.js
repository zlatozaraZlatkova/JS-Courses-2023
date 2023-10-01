function deleteByEmail() {
  const inputRef = document.querySelector('input[name="email"]');
  const inputValue = inputRef.value;
  const rows = Array.from(document.querySelectorAll("tbody tr"));

  const result = document.getElementById("result");
  let isFound = false;

  for (let row of rows) {
    if (row.children[1].textContent === inputValue) {
      row.remove();
      isFound = true;
    }
  }

  result.textContent = isFound ? "Deleted." : "Not found.";
}
