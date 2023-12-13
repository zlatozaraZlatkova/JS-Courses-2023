const form = document.getElementById("form");
form.addEventListener("submit", submitStudent);
getStudents();

async function getStudents() {
  const tbody = document.querySelector("tbody");
  tbody.replaceChildren();
  const url = "http://localhost:3030/jsonstore/collections/students";
  const response = await fetch(url);

  try {

    if(response.ok == false) {
      const error = await response.json();
      return error;
    }
    const data = await response.json();
    const students = Object.values(data);

    students.forEach(st => {
      const row = document.createElement("tr");
      genElement("td", row, st.firstName);
      genElement("td", row, st.lastName);
      genElement("td", row, st.facultyNumber);
      genElement("td", row, st.grade);
      tbody.appendChild(row);
    })

  } catch(error) {
    alert(error.message);
  }
  
}

async function submitStudent(event) {
  event.preventDefault();
  formRef = event.target;
  const formData = new FormData(formRef);

  const firstName = formData.get("firstName").trim();
  const lastName = formData.get("lastName").trim();
  const facultyNumber = formData.get("facultyNumber").trim();
  const grade = formData.get("grade").trim();

  const student = { firstName, lastName, facultyNumber, grade };
 
  if(!firstName || !lastName || !facultyNumber || !grade) {
    return;
  }

  try {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(student)
    }

    const response = await fetch(url, options);
  
    if(response.ok == false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data 

  } catch(error) {
    alert(error.message);
  }
  

}

function genElement(tag, parent, content, className) {
  const element = document.createElement(tag);
  if(content) {
    element.textContent = content;
  }
  if(className) {
    element.className = className;
  }
  parent.appendChild(element);
  return element;
}