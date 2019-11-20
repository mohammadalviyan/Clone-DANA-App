const Router = require('express');
const router = Router();
const usersController = require("../controllers/users.controller");
<<<<<<< HEAD
const { upload } = require('../middleware/uploadImage');
=======
const verify = require('../middleware/verifyToken');

>>>>>>> fa1519780c4e033545aa656301e76f7b385012a0

router
  .post("/register",upload.single("image"), usersController.createUsers)
  .post("/login", usersController.usersLogin)
  .post("/checkusers", usersController.checkNumber)
  .post("/otp/signup", usersController.otpSignup)
  // .get("/",verify,usersController.getAllUsers)
  // .patch("/:number",usersController.updateProfile)

module.exports = router;
