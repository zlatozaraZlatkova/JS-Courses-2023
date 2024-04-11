const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const JWT_SECRET = "63ga3#KRbJa!sh877";


async function register(email, password) {
  const existingEmail = await User.findOne({ email }).collation({ locale: "en", strength: 2 });
 
  if (existingEmail) {
    throw new Error("Email is already taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    hashedPassword
  })


  const token = createSession(user);
  return token;

}


async function login(email, password) {
  const user = await User.findOne({ email }).collation({ locale: "en", strength: 2 });

  if (!user) {
    throw new Error("Incorrect email or password");
  }

  const match = await bcrypt.compare(password, user.hashedPassword);
  if (!match) {
    throw new Error("Incorrect email or password");
  }

  const token = createSession(user);
  return token;

}


function createSession({ _id, email }) {
  const payload = {
    _id,
    email,
  }

  const token = jwt.sign(payload, JWT_SECRET);
  return token;

}


function verifyToken(token) {
  const data = jwt.verify(token, JWT_SECRET);
  return data;
}

module.exports = {
  login,
  register,
  verifyToken
}