const Message = require("../models/messageModel");
const userMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name) {
      return res.json({ error: "name is required" });
    }

    if (!subject) {
      return res.json({ error: "subject is required" });
    }

    if (!message) {
      return res.json({ error: "message is required" });
    }

    if (!email) {
      return res.json({ error: "message is required" });
    }

    const user = await Message.create({ name, email, subject, message });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { userMessage };
