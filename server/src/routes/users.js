const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router
  .post("/register", usersController.createUsers)
  .post("/login", usersController.loginUsers)

module.exports = router;