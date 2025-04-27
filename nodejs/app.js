const express = require("express");
const DB_Connection = require("./config/db");
const app = express();
const cors = require("cors");
const PORT = 8000 || process.env.PORT;
require("dotenv").config();
const studentRoutes = require("./routes/studentRoute");
const userRoutes = require("./routes/userRoute");
const authMiddlware = require("./middlwares/auth.middlware");

app.use(express.json());
app.use(cors());
app.use("/api/students", authMiddlware, studentRoutes);
app.use("/api/users/auth", userRoutes);

DB_Connection();

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
