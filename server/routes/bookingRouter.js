const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router
  .route("/create-checkout-session/")
  .post(bookingController.getCheckoutSession);

router.route("/session-status/").get(bookingController.sessionStatus);

module.exports = router;
