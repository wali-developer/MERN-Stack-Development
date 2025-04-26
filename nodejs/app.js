const express = require("express");
const DB_Connection = require("./config/db");
const app = express();
const PORT = 8000 || process.env.PORT;
require("dotenv").config();
const studentRoutes = require("./routes/studentRoute");

const authenticateUser = (req, res, next) => {
  console.log("User Authenticated!");
  next();
};

app.use(express.json());
app.use("/api/students", authenticateUser, studentRoutes);

DB_Connection();

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
