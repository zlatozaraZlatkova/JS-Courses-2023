const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = "63ga3#KRbJa!sh877";
const tokenBlackList = new Set();

//REGISTER
async function register(email, password) {
  const existingEmail = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });

  if (existingEmail) {
    throw new Error("Email is already taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    hashedPassword,
  });

  const token = createToken(user);
  return token;
}

//LOGIN
async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (!user) {
    throw new Error("Incorrect email or password");
  }

  const match = await bcrypt.compare(password, user.hashedPassword);

  if (!match) {
    throw new Error("Incorrect email or password");
  }

  const token = createToken(user);
  return token;
}

//LOGOUT

async function logout(token) {
  tokenBlackList.add(token);
}

function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET);

  return {
    _id: user._id,
    email: user.email,
    accessToken: token,
  };
}

function verifyToken(token) {
  if (tokenBlackList.has(token)) {
    throw new Error("Invalid token!");
  }
  const payloadData = jwt.verify(token, JWT_SECRET);
  return payloadData;
}

module.exports = {
  register,
  login,
  logout,
  verifyToken,
};
