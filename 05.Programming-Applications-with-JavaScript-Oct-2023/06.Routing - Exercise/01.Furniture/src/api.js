const host = "http://localhost:3030";

async function apiCalls(method, url, data) {
  const options = {
    method,
    headers: {}
  }

  if(data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const userData = JSON.parse(sessionStorage.getItem("userData"));

  if(userData) {
    options.headers["X-Authorization"] = userData.accessToken;
  }

  try {
    const response = await fetch(`${host}${url}`, options);
    
    if(response.ok !== true) {
      if(response.status === 403) {
        localStorage.removeItem("userData");
      }
      const error = await response.json();
      throw new Error(error.message);
    }

    if(response.status === 204) {
      return response;

    } else {
      return await response.json(); 
    }
    //sort syntax 
    //return response.status === (204 || 409) ? response : await response.json();

  } catch(err) {
    alert(err.message);
    throw err;
  }


}

//sort syntax 
// export const get = apiCalls(null, "get");
// export const post = apiCalls(null, "post");
// export const put = apiCalls(null, "put");
// export const del = apiCalls(null, "delete");

const methodsEnum = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
}

//GET request
export function get(url) {
  return apiCalls(methodsEnum.GET, url);
}

//POST request
export function post(url, data) {
  return apiCalls(methodsEnum.POST, url, data);
}

//PUT request
export function put(url, data) {
  return apiCalls(methodsEnum.PUT, url, data);
}

//DEL request
export function del(url) {
  return apiCalls(methodsEnum.DELETE, url);
}
