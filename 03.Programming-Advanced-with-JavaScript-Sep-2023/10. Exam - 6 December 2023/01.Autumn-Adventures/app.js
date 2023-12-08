window.addEventListener("load", solve);

function solve() {
  const timeInput = document.getElementById("time");
  const dateInput = document.getElementById("date");
  const placeInput = document.getElementById("place");
  const eventInput = document.getElementById("event-name");
  const contactInput = document.getElementById("email");

  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", onSubmit);

  const ulLastCheckSection = document.getElementById("check-list");
  const ulUpcomingSection = document.getElementById("upcoming-list");
  const ulFinishedSection = document.getElementById("finished-list");

  const clearBtn = document.getElementById("clear");

  function onSubmit(event) {
    event.preventDefault();

    const time = timeInput.value;
    const data = dateInput.value;
    const eventContent = eventInput.value;
    const place = placeInput.value;
    const email = contactInput.value;

    if (!time || !data || !eventContent || !place || !email) {
      return;
    }

    const liEl = document.createElement("li");
    liEl.className = "event-content";

    const articleEl = genElements("article", liEl);
    genElements("p", articleEl, `Begins: ${data} at: ${time}`);
    genElements("p", articleEl, `In: ${place}`);
    genElements("p", articleEl, `Event: ${eventContent}`);
    genElements("p", articleEl, `Contact: ${email}`);

    const editBtn = genElements("button", liEl, "Edit", "edit-btn");
    const continueBtn = genElements("button", liEl, "Continue", "continue-btn");

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    ulLastCheckSection.appendChild(liEl);
    removeInput();

    addBtn.disabled = true;
  }

  function onEdit(event) {
    const source = event.currentTarget.parentElement;

    const [timeDataP, placeP, eventP, emailP] = Array.from(
      source.querySelectorAll("article > p")
    );

    const dataAndTime = timeDataP.textContent.split(" at: ");
    const data = dataAndTime[0].slice(8);
    const time = dataAndTime[1];

    const place = placeP.textContent.slice(4);
    const events = eventP.textContent.slice(7);
    const email = emailP.textContent.slice(9);

    timeInput.value = time;
    dateInput.value = data;
    placeInput.value = place;
    eventInput.value = events;
    contactInput.value = email;

    source.remove();
    addBtn.disabled = false;
  }

  function onContinue(event) {
    const source = event.currentTarget.parentElement;

    const clonedDishEl = source.cloneNode(true);

    const editBtnClone = clonedDishEl.querySelector(".edit-btn");
    const continueBtnClone = clonedDishEl.querySelector(".continue-btn");

    clonedDishEl.removeChild(continueBtnClone);
    clonedDishEl.removeChild(editBtnClone);

    const moveBtn = genElements("button", clonedDishEl, "Move to Finished", "finished-btn");
    moveBtn.addEventListener("click", onFinished);

    ulUpcomingSection.appendChild(clonedDishEl);

    source.remove();
    addBtn.disabled = false;
  }

  function onFinished(event) {
    const source = event.currentTarget.parentElement;
    const clonedDishEl = source.cloneNode(true);
    const moveBtnClone = clonedDishEl.querySelector(".finished-btn");
    clonedDishEl.removeChild(moveBtnClone);
    ulFinishedSection.appendChild(clonedDishEl);
    source.remove();
  }

  clearBtn.addEventListener("click", (event) => {
    const source = event.currentTarget.parentElement;
    const liEl = source.querySelectorAll("#finished-list > li");

    Array.from(liEl).forEach((element) => {
      element.remove();
    });
  });

  function removeInput() {
    timeInput.value = "";
    dateInput.value = "";
    eventInput.value = "";
    placeInput.value = "";
    contactInput.value = "";
  }

  function genElements(tag, parent, content, className) {
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
}
