import { render } from './node_modules/lit-html/lit-html.js';
import { getAllData } from './src/data.js';
import { rowTemplate } from './src/template.js';
import { onSearch } from './src/searchHandler.js';


loadData();
document.querySelector('#searchBtn').addEventListener('click', onSearch);


async function loadData() {
   const data = await getAllData();
   render(Object.values(data).map(rowTemplate), document.querySelector('tbody'));
}