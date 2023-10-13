function requestValidator(dataObj) {
  const validRequest = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  let uriPattern = /[^A-Za-z0-9\.\*]+/;
  let msgPattern = /[<>\\\&\'\"]+/;

  if ((dataObj.method === undefined) || !(validRequest.includes(dataObj.method))) {
      throw new Error ('Invalid request header: Invalid Method');
  };
  if ((dataObj.uri === undefined) || dataObj.uri == '' || uriPattern.test(dataObj.uri)) {
      throw new Error ('Invalid request header: Invalid URI');
  };
  if ((dataObj.version === undefined) || !(validVersion.includes(dataObj.version))) {
      throw new Error ('Invalid request header: Invalid Version');
  }
  if ((dataObj.message === undefined) || ((msgPattern.test(dataObj.message)) == true)) {
      throw new Error ('Invalid request header: Invalid Message');
  }
  return dataObj;
}

console.log(requestValidator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
}))