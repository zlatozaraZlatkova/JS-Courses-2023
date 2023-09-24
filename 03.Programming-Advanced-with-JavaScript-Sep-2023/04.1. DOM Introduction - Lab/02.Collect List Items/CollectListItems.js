function extractText() {
   const items = document.querySelectorAll('li');
   const itemsArr = Array.from(items);
   const result = itemsArr.map((el) => el.textContent).join('\n');

   document.getElementById('result').value = result;
}