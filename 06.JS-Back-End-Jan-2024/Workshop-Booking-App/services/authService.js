const bcrypt = require("bcrypt");
const User = require("../models/User");

async function register(username, password) {
  const existingUser = await User.findOne({ username }).collation({ locale: "en", strength: 2});

  if (existingUser) {
    throw new Error("Username is invalid or already taken");

  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    hashedPassword

  });

  //view model
  return {
    username,
    roles: user.roles
  }

}

async function login(username, password) {
  const user = await User.findOne({ username }).collation({ locale: "en", strength: 2});

  if (!user) {
    throw new Error("Incorrect username or password");
  }

  const match = await bcrypt.compare(password, user.hashedPassword);

  if (!match) {
    throw new Error("Incorrect username or password");
  }

  //view model
  return {

    username: user.username,
    roles: user.roles
  }

}

module.exports = {
  login,
  register
};