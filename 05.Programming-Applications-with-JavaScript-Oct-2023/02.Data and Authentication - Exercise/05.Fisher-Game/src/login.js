//console.log('TODO:// Implement Login functionality');

window.addEventListener("load", async () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", onLogin);
  document.getElementById("user").style.display =" none";
})

async function onLogin(event) {
  const url = "http://localhost:3030/users/login";

  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");


  if (!email) {
    throw new Error("Email is required!");
  } else if (!password) {
    throw new Error("Password is required!");
  }

  try {
    
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    if(response.ok !== true) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();

    const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken 
    }

    sessionStorage.setItem("accessToken", JSON.stringify(userData));

    window.location = "../index.html";

  } catch(error) {
    alert(error.message);
    form.querySelector("input[type=text]").value = "";
    form.querySelector("input[type=password]").value = "";
  }


}
