const Router = require('express');
const router = Router();
const usersController = require("../controllers/users.controller");

router
  .post("/register", usersController.createUsers)
  .post("/login", usersController.usersLogin)
  .post("/checkusers", usersController.checkNumber)
  .post("/otp/signup", usersController.otpSignup)
  .get('/test',
    (req, res) => res.send('Hello World!')
  )

module.exports = router;
