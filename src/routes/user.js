const express = require("express");
const controller = require("../controller/user-controller");

const AuthUser = new express.Router();

AuthUser.post("/login", controller.login);
AuthUser.post("/signup", controller.signup);

module.exports = AuthUser;
