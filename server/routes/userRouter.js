const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");
const { userMessage } = require("../controllers/messageController");

router.post("/register", registerUser);
router.post("/message", userMessage);

module.exports = router;
