const Router = require('express');
const router = Router();
const usersController = require("../controllers/users.controller");
const { upload } = require('../middleware/uploadImage');
const verify = require('../middleware/verifyToken');

router
  .post("/register",upload.single("image"), usersController.createUsers)
  .post("/login", usersController.usersLogin)
  .post("/checkusers", usersController.checkNumber)
  .post("/otp", usersController.otpUsers)
  .post("/otpverify", usersController.otpVerify)
  .post("/resetpin", usersController.resetPin)

  .get("/",usersController.getAllUsers)
  .patch("/:number",usersController.updateProfile)

module.exports = router;
