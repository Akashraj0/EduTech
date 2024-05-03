const User = require("../models/userModel");
const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name) {
      return res.json({ error: "name is required" });
    }

    const checkemail = await User.findOne({ email });
    if (checkemail) {
      return res.json({ error: "email is registered already" });
    }

    const user = await User.create({ name, email });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { registerUser };
