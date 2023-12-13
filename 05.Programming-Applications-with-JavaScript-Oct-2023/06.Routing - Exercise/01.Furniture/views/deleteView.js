
import { del } from "../src/api.js";
import page from "../node_modules/page/page.mjs";

export async function onDelete(event) {
  const id = event.target.id;
  const confirmDeletion = confirm("Are you sure you want to delete this furniture?");
 
  if(confirmDeletion) {
    del(`/data/catalog/${id}`);
    page.redirect("/");
  }
 
}