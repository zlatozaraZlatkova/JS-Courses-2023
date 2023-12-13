function attachEvents() {
    const btnRefresh = document.getElementById("refresh");
    btnRefresh.addEventListener("click", loadMessages); 
    const btnSend = document.getElementById("submit");
    btnSend.addEventListener("click", addMessage);
    
  }
  attachEvents();
  
  const listMSGSection = document.getElementById("messages");
  const authorInput = document.querySelector('[name="author"]');
  const contentMSGInput = document.querySelector('[name="content"]');
  
  
  async function addMessage() {
    const author = authorInput.value;
    const content = contentMSGInput.value;
    const result = await createMessage({ author, content }); 
  }
  
  
  async function loadMessages() {
    const url = "http://localhost:3030/jsonstore/messenger";
    const response = await fetch(url);
    const data = await response.json();
  
    const messages = Object.values(data); 
    listMSGSection.value = messages.map((msg) => `${msg.author}: ${msg.content}`).join("\n");
  }
  
  
  async function createMessage(message) {
    const url = "http://localhost:3030/jsonstore/messenger";
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message), 
    };
  
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
  