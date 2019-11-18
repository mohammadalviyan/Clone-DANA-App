const Router = require('express');
const router = Router();
const usersController = require("../controllers/users.controller");
const verify = require('../middleware/verifyToken');


router
  .post("/register", usersController.createUsers)
  .post("/login", usersController.usersLogin)
  .post("/checkusers", usersController.checkNumber)
  .post("/otp/signup", usersController.otpSignup)
  // .get("/",verify,usersController.getAllUsers)
  // .patch("/:number",usersController.updateProfile)

module.exports = router;
