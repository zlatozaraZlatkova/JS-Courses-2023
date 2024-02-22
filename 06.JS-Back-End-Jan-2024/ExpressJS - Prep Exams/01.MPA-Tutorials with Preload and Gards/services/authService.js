const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const JWT_SECRET = "hyRqt6gs!gshGW@";

async function register(username, password) {
  const existingUser = await User.findOne({ username }).collation({ locale: "en", strength: 2 });
  
  if (existingUser) {
    throw new Error("Username is already taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username, 
    hashedPassword,
  });


  const token = createSession(user);
  return token;

}

async function login(username, password) {
  const user = await User.findOne({ username }).collation({ locale: "en", strength: 2});

  if(!user) {
    throw new Error("Incorrect username or password");
  }


  const match = await bcrypt.compare(password, user.hashedPassword);
  if(!match) {
    throw new Error("Incorrect username or password");

  }


  const token = createSession(user);
  return token;

}


function createSession( {_id, username }) {
  const payload = {
    _id,
    username
  }

  const token = jwt.sign(payload, JWT_SECRET);
  return token;
}


function verifyToken(token) {
  const data = jwt.verify(token, JWT_SECRET);
  return data;
}

module.exports = {
  register,
  login, 
  verifyToken

}
