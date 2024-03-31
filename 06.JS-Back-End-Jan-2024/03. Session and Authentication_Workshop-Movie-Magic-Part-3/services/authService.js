const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const JWT_SECRET = "sjasjash452151!#@a3wsdfasa,";


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

  //! IMPORTANT {expiresIn: "2h"}
  const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "2h"});
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