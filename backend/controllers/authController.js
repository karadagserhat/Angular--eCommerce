const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
// const { attachCookiesToResponse, createTokenUser } = require("../utils");

const register = async (req, res) => {
  const { email, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }

  res.status(StatusCodes.CREATED).json({ email });
};

const login = async (req, res) => {
  res.send("login oser");
};

const logout = async (req, res) => {
  res.send("logout oser");
};

module.exports = {
  register,
  login,
  logout,
};
