const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "User sholud provide name"],
  },
  email: {
    type: String,
    required: [true, "User sholud provide name"],
  },
  phoneNumber: {
    type: String,
    required: [true, "User sholud provide phoneNumber"],
  },
  purchase: {
    type: String,
    required: [true, "User sholud provide purchase name"],
  },
  price: {
    type: String,
    required: [true, "User sholud provide price"],
  },
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
