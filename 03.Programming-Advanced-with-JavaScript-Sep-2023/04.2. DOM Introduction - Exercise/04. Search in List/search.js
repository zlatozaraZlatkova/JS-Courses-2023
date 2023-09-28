function search() {
  let searchText = document.getElementById("searchText").value;
  let townsArr = Array.from(document.querySelectorAll("#towns li"));
  let counter = 0;

  townsArr.forEach((town) => {
    if (town.textContent.includes(searchText)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      counter++;
      return;
    }
    town.style.fontWeight = "";
    town.textDecoration = "none";
  });

  document.getElementById("result").textContent = `${counter} matches found`;
}
