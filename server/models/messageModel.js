const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
});

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;
