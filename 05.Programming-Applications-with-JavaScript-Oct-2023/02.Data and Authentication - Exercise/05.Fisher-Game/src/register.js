//console.log('TODO:// Implement Register functionality');

window.addEventListener("DOMContentLoaded", async () => {
  const formRegister = document.querySelector("form");
  formRegister.addEventListener("submit", registerNewUser);
  document.getElementById("user").style.display =" none";
})

async function registerNewUser(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");
  const repeatPass = formData.get("rePass");
  const registerUserData = { email, password};

  if (!email) {
    throw new Error("Email is required!");
  } else if (!password) {
    throw new Error("Password is required!");
  } else if (password !== rePass) {
    throw new Error("Password and Repeat must match!");
  }

  try {

    if(!email || !password || ! repeatPass) {
      throw new Error("All fields are required!")
    }
    if(password !== repeatPass) {
      throw new Error("Passwords don't match!")
    }

    const response = await fetch("http://localhost:3030/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerUserData)
      
    });

    if(response.ok !== true) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();

    //TOKEN 
    const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken 
    }

    sessionStorage.setItem("accessToken", JSON.stringify(userData));

    form.reset();
    window.location = "../index.html";


  } catch(err) {
    alert(err.message);
    form.reset();

  }
}