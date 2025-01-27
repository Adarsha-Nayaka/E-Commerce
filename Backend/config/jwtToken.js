const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, '6f1b71ec9bafc7c0b8d6d5db65923eb4eea3bbf520329e4900942f28579e52dc35dce714bd53f3c9f28a024d5046c8336f7c6dc1d9258815f8a1b8eff2389cc3', { expiresIn: "1d" });
};

module.exports = { generateToken };
