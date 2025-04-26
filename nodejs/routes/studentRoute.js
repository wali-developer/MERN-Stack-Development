const express = require("express");
const Router = express.Router();
const {
  createStudent,
  studentsList,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/student.controller");

Router.post("/create", createStudent);
Router.get("/list", studentsList);
Router.get("/:id", getStudent);
Router.put("/update/:id", updateStudent);
Router.delete("/delete/:id", deleteStudent);

module.exports = Router;
