const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {}
  }
  if(data) {
    options.headers["Content-Type"] = "application.json";
    options.body = JSON.stringify(data);
  }
  const user = JSON.parse(sessionStorage.getItem("user"));
  if(user) {
    options.headers["X-Authorization"] = user.accessToken;
  }
  try {
    const response = await fetch(host + url, options);
    if(response.ok !== true) {
      if(response.status === 403) {
        sessionStorage.removeItem("user");
      }
      const error = await response.json();
      throw new Error(error.message);
    }

    if(response.status === 204) {
      return response;
    } else {
      return await response.json();
    }



  } catch(err) {
    alert(err.message);
    throw err;
  }


}


export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');