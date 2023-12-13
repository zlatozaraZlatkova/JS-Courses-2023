import * as api from './api.js';

const endpoints = {
  "items": "/jsonstore/advanced/table",

}


export async function getAllData() {
  return api.get(endpoints.items);
}
