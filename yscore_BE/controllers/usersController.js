const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../schemas/mongooseSchema/userSchema");
const { signUpModel } = require("../models/usersModel");

async function signup(req, res) {
  const { firstName,lastName, email,dateOfBirth, password, repassword } = req.body;
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
    });
    const user = await signUpModel(newUser);
    const copyUser = user.toObject();
    delete copyUser.password;
    await res.send(copyUser);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { signup };
