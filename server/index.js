const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRouter");
const bookingRoutes = require("./routes/bookingRouter");
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.urlencoded({ extended: false }));

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_URL.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection Successfull");
  })
  .catch((err) => {
    console.log("Database not connected", err);
  });

app.use("/", userRoutes);
app.use("/book", bookingRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`the server running on port ${port}`);
});
