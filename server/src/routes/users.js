import { Router } from 'express';
const router = Router();
const usersController = require("../controllers/users.controller");

router
  .post("/register", usersController.createUsers)
  .post("/login", usersController.usersLogin)
  .post("/checkusers", usersController.checkNumber)

module.exports = router;