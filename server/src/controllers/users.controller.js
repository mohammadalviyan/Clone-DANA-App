const Users = require('../models/Users');
const modelOtp = require('../models/Otp');
const Nexmo = require('nexmo');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY || '270400';
const salt = bcrypt.genSaltSync(10);

//Check New User/ Old User
exports.checkNumber=async(req,res)=>{
  const phone=req.body.phone

  try {
    const usersStatus = await Users.findOne({
      where: {
        phone
      }
    });

    //Status Check
    if(usersStatus){
      return res.status(200).json({
        Users:'old',
      });
    }else{
      return res.status(200).json({
        Users:'new',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    })
  }
};

// Register Users
exports.createUsers = async (req, res) => {
  //Hash password
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
        return res.status(200).json({
          message: 'Users was created successfully',
          data: newUsers
        });
      } else {
        //Failed Insert Users
        return res.status(400).json({
          message: 'Failed Insert New Users',
        });
      }
    } else {
      //Number Already Existed
      return res.status(400).json({
        message: 'Already Existed',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: { error }
    })
  }
};

//Signin Users
exports.usersLogin=async(req,res)=>{
  const phone=req.body.phone
  const pin=req.body.pin

  try {
    const usersLogin = await Users.findOne({
      where: {
        phone
      }
    });

    // check hashed pin
    const validPin = bcrypt.compareSync(pin, usersLogin.dataValues.pin)

    //Validation Pin Check
    if (!validPin) {
      return res.status(400).json({
        message: 'Wrong PIN!'
      })
    }else{
      // Create and assign token
      const token = jwt.sign({
        id: usersLogin.dataValues.id,
        phone: usersLogin.dataValues.phone
        }, secretKey, {
        expiresIn: '10h'
      })

      res.status(200).json({
        message: 'Succes Login',
        data:usersLogin,
        token:token
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
};


//OTP REGISTER
exports.otpUsers=async (req,res) =>{
  try {
    phone=req.body.phone;

    //API
    const nexmo = new Nexmo({
      apiKey: "834f12cf",
      apiSecret: "GliRLNgD3hK5BQKa",
    })

    //Find Users With Number Register
    const oldOTP = await Users.findOne({
      where: {
        phone
      }
    });

    //Delete Old OTP Users If Number Found
    if (oldOTP) {
      await Users.update(
        {
          otp: ' '
        },
        { where: { phone } }
      );

      //Make Random OTP 
      const newOtp = Math.floor(100000 + Math.random() * 900000);
      const newOtpEncrypt = bcrypt.hashSync(newOtp, salt)

      
      //Update New OTP
      const insertNewOtp = await Users.update(
        {
          otp: newOtpEncrypt
        },
        { where: { phone } }
      );

      //Check Update Success And Send Message
      if(insertNewOtp){
        const from = "DANAIN";
        const number=req.body.phone
        const to = "62"+number+"";
        const text = "Info<#>"+newOtp+".Hati-hati penipuan!, Ini Hanya Untuk Kamu Iya Kamu";
        nexmo.message.sendSms(from, to, text);

        //Set Time Out Destroy Database
        setTimeout(async () => {
          await Users.update(
            {
              otp: ' '
            },
            { where: { phone } }
          );
        }, 180000);
      }

      //Set Response
      res.status(200).json({
        message: 'Succes Send Message '
      })

    }else{
      res.status(400).json({
        status: "Users Not Found",
      });
    }

  } catch (error) {
    return res.status(400).json({
      status: "error",
      response: error
    });
  }

}

//Verify OTP
exports.otpVerify=async(req,res)=>{
  try {
    phone=req.body.phone
    otp=req.body.otp

    //Find Users With Number Register
    const findUsers = await Users.findOne({
      where: {
        phone
      }
    });

    if(findUsers){
      //Compare OTP 
      if(bcrypt.compareSync(otp, findUsers.dataValues.otp)) {

        //Delete OTP
        await Users.update(
          {
            otp: ' '
          },
          { where: { phone } }
        );

        //Send Response Succces
        res.json({
          status: "success",
          response: "Otp code is valid"
        });
      }else {
        //Send Response Otp Not Found
        res.json({
          status: "error",
          response: "Otp not match"
        });
      }
    }else{
      //Send Otp Response Expired
      res.json({
        status: "error",
        response: "Your OTP is expired, please request OTP again"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
}

//GET ALL USERS
exports.getAllUsers=async(req,res)=>{
  try {
    const users=await Users.findAll();
    res.status(200).json({
      data:users
    })
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    })
  }
}

//RESET PIN
exports.resetPin=async(req,res)=>{
  try {
    const pin=req.body.pin
    const phone=req.body.phone
    const newPinEncrypt = bcrypt.hashSync(pin, salt)

    //Upadate Pin 
    const updatePin=await Users.update(
      {
        pin:newPinEncrypt
      },
      {where:{phone}}
    );

    if(updatePin){
      res.status(200).json({
        status: "Succes Reset Pin",
      });
    }else{
      res.status(400).json({
        status: "Failed Reset Pin",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      response: error
    });
  }
}

//UPDATE PROFILE
exports.updateProfile=async(re,res)=>{
  
}