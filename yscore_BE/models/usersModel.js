const User = require("../schemas/mongooseSchema/userSchema");

async function signUpModel(newUser) {
    try {
      console.log("newUser", newUser);
      const user = new User(newUser);
      console.log("My new signedup user: ", user);
      await user.save();
      return user;
    } catch (err) {
      console.log(err.message);
    }
}

async function getUserByEmailModel(email) {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (err) {
    console.log(err.message);
  }
}
  
module.exports = {signUpModel, getUserByEmailModel};