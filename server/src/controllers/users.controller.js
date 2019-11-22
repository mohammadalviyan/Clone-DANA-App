const Users = require('../models/Users');
const modelOtp = require('../models/Otp');

const Nexmo = require('nexmo');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY || '270400';
const salt = bcrypt.genSaltSync(10);



// Register Users
exports.createUsers = async (req, res) => {
  //Hash passw
  const pin = bcrypt.hashSync(req.body.pin, salt)

  const {
    name,
    refferal,
    phone,
    balance,
    email,
    type_user
  } = req.body;

  const image = req.file ?
    "/images/uploads/" + req.file.filename :
    "/images/avatar.png";

  try {
    let checkNumber = await Users.findOne({
      where: {
        phone
      }
    });

    //Check Phone Number Existed
    if (checkNumber == null) {

      // Insert New Users
      let newUsers = await Users.create({
        name,
        image,
        refferal,
        pin,
        phone,
        balance,
        email,
        type_user
      }, {
        fields: ['name', 'image', 'refferal', 'pin', 'phone', 'balance', 'email', 'type_user']
      });

      
      //Success Insert Users
      if (newUsers) {
        //GET DATA
        const userInserted = await Users.findOne({
          where: {
            phone
          }
        });

        // Create and assign token
        const token = jwt.sign({
          pin:pin,
          phone: phone
        }, secretKey, {
          expiresIn: '10h'
        })

        return res.json({
          status:'success',
          message: 'Users was created successfully',
          data: userInserted,
          token:token
        });
      } else {
        //Failed Insert Users
        return res.json({
          status:'error',
          message: 'Failed Insert New Users',
        });
      }
    } else {
      //Number Already Existed
      return res.json({
        status:'error',
        message: 'Already Existed',
      });
    }
  } catch (error) {
    res.status(500).json({
      status:'error',
      message: 'Something goes wrong',
      data: {
        error
      }
    })
  }
};

//Signin Users
exports.usersLogin = async (req, res) => {
  const phone = req.body.phone
  const pin = req.body.pin

  console.log(req.body)

  // try {
    const usersLogin = await Users.findOne({
      where: {
        phone
      }
    });

    // check hashed pin
    const validPin = bcrypt.compareSync(pin, usersLogin.dataValues.pin)

    //Validation Data
    if (pin === "" || pin === null || pin === undefined) {
      return res.json({
        status: "error",
        response: "Pin can't be empty"
      });
    }

    //Validation Pin Check
    if (!validPin) {
      return res.json({
        status:'error',
        message: 'Wrong PIN!'
      })
    } else {
      //GET DATA
      const userInserted = await Users.findOne({
        where: {
          phone
        }
      });

      // Create and assign token
      const token = jwt.sign({
        pin: pin,
        phone:phone
      }, secretKey, {
        expiresIn: '10h'
      })

      res.json({
        status:'success',
        message: 'Succes Login',
        data: userInserted,
        token: token
      })
    }
  // } catch (error) {
  //   res.status(500).json({
  //     status:'error',
  //     message: 'Something goes wrong',
  //     data: {
  //       error
  //     }
  //   })
  // }
};

//OTP REGISTER
exports.otpUsers = async (req, res) => {
  try {
    phone = req.body.phone;
    type = req.body.otpType

    //Check OTP Type
    if (type === 'reset') {
      const checkNumber = await Users.findOne({
        where: {
          phone
        }
      });

      if (!checkNumber) {
        res.json({
          status:'error',
          message: 'Number Not Found '
        })
      }
    }

    //API
    const nexmo = new Nexmo({
      apiKey: "f477fda7",
      apiSecret: "O28vfatvtLvhCh7o",
    })

    //Find Users With OTP
    const oldOTP = await modelOtp.findOne({
      where: {
        phone
      }
    });

    //Delete Old OTP Users If OTP Found
    if (oldOTP) {
      await modelOtp.destroy({
        where: {
          phone
        }
      });
    }
    //Make Random OTP
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    const newOtpEncrypt = bcrypt.hashSync(newOtp, salt)
    const otp = newOtpEncrypt

    //Insert New OTP
    const insertNewOtp = await modelOtp.create({
      otp,
      phone
    }, {
      fields: ['otp', 'phone']
    });

    //Check Insert Success And Send Message
    if (insertNewOtp) {
      const from = "DANAIN";
      const number = req.body.phone
      const to = "62" + number + "";
      const text = "Info<#>" + newOtp + ".Hati-hati penipuan!, Ini Hanya Untuk Kamu Iya Kamu";
      nexmo.message.sendSms(from, to, text);

      //Set Time Out Destroy Database
      setTimeout(async () => {
        await modelOtp.destroy({
          where: {
            phone
          }
        });
      }, 180000);

      //Set Response [Besok Ganti Dengan Response Reset Password]
     

      if (type === 'reset') {
        res.json({
          status:'success',
          message: 'success reset password'
        })
      }
      res.json({
        status:'success',
        message: 'new'
      })

    } else {
      //Set Response
      res.json({
        status:'error',
        message: 'Failed Send Message '
      })
    }
  } catch (error) {
    res.status(500).json({
      status:'error',
      message: 'Something goes wrong',
      data: {
        error
      }
    })
  }

}

//Check New User/ Old User
exports.checkNumber = async (req, res) => {
  const phone = req.body.phone

  try {

    //Validation Number
    if (phone === "" || phone === null || phone === undefined) {
      return res.json({
        status: "error",
        response: "Phone Number can't be empty"
      });
    }

    const usersStatus = await Users.findOne({
      where: {
        phone
      }
    });

    //Status Check
    if (usersStatus) {
      return res.json({
        status:'success',
        message: 'old',
      });
    } else {
      await this.otpUsers(req, res);
    }

  } catch (error) {
    res.status(500).json({
      status:'error',
      message: 'Something goes wrong',
      data: {
        error
      }
    })
  }
};

//Verify OTP
exports.otpVerify = async (req, res) => {
  try {
    phone = req.body.phone
    otp = req.body.otp

    //Validation Data
    if (otp === "" || otp === null || otp === undefined) {
      return res.json({
        status: "error",
        response: "Pin can't be empty"
      });
    }

    //Find Users With Number Register
    const findOtp = await modelOtp.findOne({
      where: {
        phone
      }
    });
    if (findOtp) {
      //Compare OTP
      if (bcrypt.compareSync(otp, findOtp.dataValues.otp)) {

        //Delete OTP
        await modelOtp.destroy({
          where: {
            phone
          }
        });

        //Send Response Succces
        res.json({
          status: "success",
          message: "Otp code is valid"
        });
      } else {
        //Send Response Otp Not Found
        res.json({
          status: "error",
          message: "Otp not match"
        });
      }
    } else {
      //Send Otp Response Expired
      res.json({
        status: "error",
        message: "Your OTP is expired, please request OTP again"
      });
    }
  } catch (error) {
    res.status(500).json({
      status:'error',
      message: 'Something goes wrong',
      data: {}
    })
  }
}

//GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json({
      status:'success',
      data: users
    })
  } catch (error) {
    res.status(500).json({
      status:'error',
      message: 'Something goes wrong',
      data: {error}
    })
  }
}

//RESET PIN
exports.resetPin = async (req, res) => {
  try {

    const pin = req.body.pin
    const phone = req.body.phone
    const newPinEncrypt = bcrypt.hashSync(pin, salt)

    //Validation Data
    if (phone === "" || phone === null || phone === undefined) {
      return res.json({
        status: "error",
        response: "Phone Number can't be empty"
      });
    }else if (pin === "" || pin === null || pin === undefined) {
      return res.json({
        status: "error",
        response: "Pin Number can't be empty"
      });
    }

    //Upadate Pin
    const updatePin = await Users.update({
      pin: newPinEncrypt
    }, {
      where: {
        phone
      }
    });

    if (updatePin) {
      res.json({
        status: "success",
        message:"Succes Reset Pin"
      });
    } else {
      res.json({
        status: "error",
        message:"Failed Reset Pin"
      });
    }
  } catch (error) {
    res.status(500).json({
      status:'error',
      message: 'Something goes wrong',
      data: {
        error
      }
    })
  }
}

//UPDATE PROFILE
exports.updateProfile = async (req, res) => {
  try {
    const {
      id
    } = req.params;

    const {
      name,
      refferal,
      pin,
      phone,
      balance,
      email,
      type_user,
      otp,
      id_vouchers
    } = req.body;

    const image = req.file ?
      "/images/uploads/" + req.file.filename :
      "/images/avatar.png";

    const users = await Users.findAll({
      attributes: ['id', 'name', 'image', 'refferal', 'pin', 'phone', 'balance', 'email', 'type_user', 'otp', 'id_vouchers'],
      where: {
        id
      }
    });

    if (users.length > 0) {
      users.forEach(async user => {
        await user.update({
          name,
          image,
          refferal,
          pin,
          phone,
          balance,
          email,
          type_user,
          otp,
          id_vouchers
        });
      });
    }
    res.json({
      status:'success',
      message: 'Users updated succesfully',
      data: users
    });
  } catch (error) {
    res.status(500).json({
      status:'error',
      message: 'Something goes wrong',
      data: {}
    })
  }
}

//GET BY ID
exports.getUsersbyId=async(req,res)=>{
  const{
    id
  }=req.params
}
