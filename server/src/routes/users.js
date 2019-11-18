const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router
  .post("/register", usersController.createUsers)

module.exports = router;