
function sumTable() {
  const list = Array.from(document.querySelectorAll("td:nth-child(2)"));
  const arr = list.slice(0, list.length - 1);
 
  let sum = 0;
  for (let row of arr) {
    const value = Number(row.textContent);
    sum += value;
  }
 
  document.getElementById("sum").textContent = sum;
}

