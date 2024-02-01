async function login(username, password) {
  return new Promise((res, rej) => {
    let name = username.toLowerCase().trim();
    let pass = password.trim();
    
    if (name === "tommy" && pass === "12345q") {
      res({
        _id: "293486c598234cebf",
        username: "Tommy",
        roles: ["user"],
      });
    } else {
      rej(new Error("Incorrect username or password"));
    }
  });
}

module.exports = {
  login,
};
