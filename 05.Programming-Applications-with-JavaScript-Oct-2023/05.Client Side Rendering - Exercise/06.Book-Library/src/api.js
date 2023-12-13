const url = "http://localhost:3030/jsonstore/collections/books";

export async function getAllBooks() {
  const response = await fetch(url);
  try {
    if(response.ok !== true) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = response.json();
    return data;


  } catch(err) {
    alert(err.message);
    throw err;
  }

  //sort syntax
  //return fetch(url).then(res => res.json());
}

export async function createBook(bookObject) {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookObject)
  })
  
  const data = response.json();
  return data;

  /* sort syntax

  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookObject)
  }).then(res => json()); */

}

export async function getBookById(id) {
  const response = await fetch(`${url}/${id}`);
  const data = response.json();
  return data;

  //sort syntax
  //return fetch(`${url}/${id}`).then(res => res.json());
}

export async function updateBook(id, bookObject) {
  const response = await fetch(`${url}/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookObject)
  })
  
  const data = response.json();
  return data;

  /*
  return fetch(`${url}/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookObject)
  }).then(res => json()); 
  
  */
}

export async function deleteBook(id) {

  const response = await fetch(`${url}/${id}`, {
    method: "delete",
  })
  
  const data = response.json();
  return data;

  /*
    return fetch(`${url}/${id}`, {
      method: "delete"
    }).then(res => json()); 
  
  */

}