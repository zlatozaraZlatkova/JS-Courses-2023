
function colorize() {
  const evenRows = document.querySelectorAll("tr:nth-child(2n)");
  const arrOfEvenRows = [...evenRows];
  const colorizedRows = arrOfEvenRows.map(
    (row) => (row.style.background = "teal")
  );
}

