const express = require("express");
const { signUp, login } = require("../controller/user.controller");
const Router = express.Router();

Router.post("/signup", signUp);
Router.post("/login", login);

module.exports = Router;
