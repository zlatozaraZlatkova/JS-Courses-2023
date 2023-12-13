function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", onLoad);
    document.getElementById("btnCreate").addEventListener("click", addPhone);
  }
  attachEvents();
  
  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");
  const ul = document.getElementById("phonebook");
  
  //create new phone
  async function addPhone() {
    const person = personInput.value;
    const phone = phoneInput.value;
  
    if(!person || !phone) {
      return
    }
  
    const result = await onCreate({ person, phone });
  
    personInput.value = "";
    phoneInput.value = "";
  
  }
  
  //get all phone book
  async function onLoad() {
    ul.replaceChildren();
  
    const url = "http://localhost:3030/jsonstore/phonebook";
    const response = await fetch(url);
  
    try {
      if (response.ok == false) {
        const error = (`${response.status}`);
        return error
      }
      const data = await response.json();
      const phoneBookData = Object.values(data);
  
  
      phoneBookData.forEach(currContact => {
        const li = genElement("li", ul, `${currContact.person}: ${currContact.phone}`, "");
  
        const btnDel = genElement("button", li, "Delete", "btnDelete");
        btnDel.addEventListener('click', () => deleteContact(li, currContact._id));
      });
  
    } catch (error) {
      alert(error.message);
    }
  }
  
  async function deleteContact(li, key) {
    const url = `http://localhost:3030/jsonstore/phonebook/${key}`;
    const options = {
      method: "delete",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    li.remove();
    return data;
    
  }
  
  async function onCreate(phone) {
    const url = "http://localhost:3030/jsonstore/phonebook";
    const options = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(phone),
    };
  
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
  
  function genElement(tag, parent, content, id) {
    const element = document.createElement(tag);
    if (content) {
      element.textContent = content;
    }
    if (id) {
      element.id = id;
    }
    parent.appendChild(element);
    return element;
  }
  