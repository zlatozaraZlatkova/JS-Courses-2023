export async function onSearch() {
  const input = document.getElementById("searchField");

  document.querySelectorAll("tr").forEach((tr) => {
    if (
      tr.textContent.toLowerCase().trim().includes(input.value.toLowerCase())
    ) {
      tr.classList.add("select");
    } else {
      tr.classList.remove("select");
    }
  });

  input.value = "";
}
