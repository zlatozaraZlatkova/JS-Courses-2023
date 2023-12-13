import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { post } from "../src/api.js";

const createTemplate = () => html`<div class="row space-top">
<div class="col-md-12">
    <h1>Create New Furniture</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit="${onSubmit}">
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class="form-control valid" id="new-make" type="text" name="make">
        </div>
        <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class="form-control is-valid" id="new-model" type="text" name="model">
        </div>
        <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class="form-control is-invalid" id="new-year" type="number" name="year">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class="form-control" id="new-description" type="text" name="description">
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class="form-control" id="new-price" type="number" name="price">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class="form-control" id="new-image" type="text" name="img">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-material">Material (optional)</label>
            <input class="form-control" id="new-material" type="text" name="material">
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
    </div>
</div>
</form>`;

export async function createView() {
  render(createTemplate(), document.querySelector("body div.container"));

}

function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const makeInput = formData.get("make");
  const priceInput = formData.get("price");
  const modelInput = formData.get("model");
  const yearInput = formData.get("year");
  const materialInput = formData.get("material");
  const descriptionInput = formData.get("description");
  const imgInput = formData.get("img");


  let make = document.querySelector("#new-make");
  let price = document.querySelector("#new-price");
  let model = document.querySelector("#new-model");
  let img = document.querySelector("#new-image");
  let year = document.querySelector("#new-year");
  let material = document.querySelector("#new-material");
  let description = document.querySelector("#new-description");
  let priceAsNum = Number(price.value)
  let yearAsNum = Number(year.value)

  let isValid = true;
  if (!makeInput || !modelInput || !yearInput || !descriptionInput || !priceInput || !imgInput) {
    throw new Error("All fields are required!");
  }
  if (makeInput.length < 4 || modelInput.length < 4) {
    throw new Error("Please insert at least 4 symbols");
  }
  if (yearAsNum < 1950 || yearAsNum > 2050) {
    throw new Error("Year must be between 1950 and 2050");
  }
  if (descriptionInput.length < 10) {
    throw new Error("Description must be at least 10 characters");
  }
  debugger
  if (Number.isInteger(priceAsNum) === false || priceAsNum < 0) {
    throw new Error("Price must be a positive number");
  }
  if (!imgInput) {
    throw new Error("Image URL is required!");
  }

  make.value.length >= 4
    ? validate(make, true)
    : validate(make, false);
  model.value.length >= 4
    ? validate(model, true)
    : validate(model, false);
    priceAsNum > 0
    ? validate(price, true)
    : validate(price, false);
  img.value !== "" ? validate(img, true) : validate(img, false);
  yearAsNum >= 1950 && yearAsNum <= 2050
    ? validate(year, true)
    : validate(year, false);
  description.value.length > 10
    ? validate(description, true)
    : validate(description, false);

  let data = {
    make: makeInput,
    price: priceInput,
    model: modelInput,
    img: imgInput,
    year: yearInput,
    material: materialInput,
    description: descriptionInput
  }



  function validate(element, boolean) {
    const IS_INVALID = "is-invalid";
    const IS_VALID = "is-valid";

    if (boolean === false) {
      isValid = false;
      element.classList.add(IS_INVALID);
      element.classList.remove(IS_VALID);
    } else {
      element.classList.add(IS_VALID);
      element.classList.remove(IS_INVALID);
    }
  }

  if(isValid) {
    //REQUEST
    post(`/data/catalog`, data);
    page.redirect("/");
  }
}