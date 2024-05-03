const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
