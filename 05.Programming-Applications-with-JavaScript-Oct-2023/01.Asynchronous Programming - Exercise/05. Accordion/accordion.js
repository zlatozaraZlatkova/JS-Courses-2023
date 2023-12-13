solution();

async function solution() {
  //2. GET data form request
  const articles = await getArticles();

  //3. ADD data to the main container
  //--take reference to main
  const main = document.querySelector("#main");

  //--read data and create new article
  articles.map(createArticle).forEach((el) => main.appendChild(el));
}

//4. CREATE article incl. function generate elements
function createArticle(article) {
  const divAccordion = genElement("div", main, "", "accordion"); //tag, parent, content, className
  const divHead = genElement("div", divAccordion, "", "head");
  const span = genElement("span", divHead, article.title, "");
  const btn = genElement("button", divHead, "More", "button");
  btn.id = `${article._id}`; //add id
  const divExtra = genElement("div", divAccordion, "", "extra");
  divExtra.style.display = "none"; //add style not visible
  const pArticleText = genElement("p", divExtra, "", "");

  //5. ADD HANDLER to btn
  btn.addEventListener("click", () => {
    togglePreview(article._id, divAccordion);
  });

  return divAccordion;
}

//6. CREATE TOGGLE functionality
async function togglePreview(id, event) {

  //6.1 TAKE ID from GET request
  const article = await getArticleById(id);

  //--take ref. for btn, divExtra an pArticleText
  const bunRef = event.querySelector("button");
  const divExtraRex = event.querySelector(".extra");
  const pArticleTextRef = event.querySelector("p");

  //7. ADD ARTICLE CONTENT

  pArticleTextRef.textContent = `${article.content}`;

  if (bunRef.textContent == "More") {
    bunRef.textContent = "Less"; //change name of the btn;
    divExtraRex.style.display = "block"; //and display content
  } else {
    bunRef.textContent = "More";
    divExtraRex.style.display = "none";
  }
}

//4.1 GENERATE elements
function genElement(tag, parent, content, className) {
  const element = document.createElement(tag);
  if (content) {
    element.textContent = content;
  }
  if (className) {
    element.className = className;
  }

  parent.appendChild(element);

  return element;
}

//1. GET REQUEST
async function getArticles() {
  const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
  const response = await fetch(url);
  try {
    if (response.status !== 200) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return Object.values(data);
    
  } catch (error) {
    main.innerHTML = `<li>Error: ${error.message}</li>`;
  }
}

async function getArticleById(id) {
  const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
  const res = await fetch(url);
  const data = res.json();

  return data;
}
