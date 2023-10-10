function solve() {
  //boards ref 
  const [_, boardOpen, boardInProgress, boardComplete] = document.querySelectorAll("section > div:nth-child(2)");
  //input
  const task = document.querySelector("#task");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  //btn
  const btnAdd = document.querySelector("#add");
  btnAdd.addEventListener("click", addTask);

  function addTask(event) {
    //add prevent on form
    event.preventDefault();

    //validating the input fields
    if (task.value && description.value && date.value) {
      //add the new task (article) in the "Open" section.
      const article = document.createElement("article");
      boardOpen.appendChild(article);

      const header = document.createElement("h3");
      header.textContent = task.value;
      article.appendChild(header);

      const phDescription = document.createElement("p");
      phDescription.textContent = `Description: ${description.value}`;
      article.appendChild(phDescription);

      const phDate = document.createElement("p");
      phDate.textContent = `Due Date: ${date.value}`;
      article.appendChild(phDate);

      const div = document.createElement("div");
      div.className = "flex";
      article.appendChild(div);

      const btnStart = document.createElement("button");
      btnStart.className = "green";
      btnStart.textContent = "Start";
      div.appendChild(btnStart);
      //handler
      btnStart.addEventListener("click", changeBoard);

      const btnDel = document.createElement("button");
      btnDel.className = "red";
      btnDel.textContent = "Delete";
      div.appendChild(btnDel);
      //handler
      btnDel.addEventListener("click", deleteTask);

      [task.value, description.value, date.value] = ["", "", ""];

      function changeBoard(event) {
        event.preventDefault();
        //change board
        boardInProgress.appendChild(article);
        btnStart.remove();

        //create and add btn finish
        const btnFinish = document.createElement("button");
        btnFinish.className = "orange";
        btnFinish.textContent = "Finish";
        div.appendChild(btnDel);
        //handler
        btnFinish.addEventListener("click", finishTask);

        div.appendChild(btnFinish);
      }
    }
  }

  function finishTask(event) {
    const finishArticleRef = event.target.parentElement.parentElement;
    //change board
    boardComplete.appendChild(finishArticleRef);
    //del buttons
    const divBoardComplete = finishArticleRef.querySelector("div");
    divBoardComplete.remove();
  }

  function deleteTask(event) {
    const delArticleRef = event.target.parentElement.parentElement;
    delArticleRef.remove();
  }
}
