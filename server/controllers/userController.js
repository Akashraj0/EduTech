const User = require("../models/userModel");
const registerUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.create({ email });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { registerUser };
