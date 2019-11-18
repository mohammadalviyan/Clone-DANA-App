import Users from '../models/Users';
import Nexmo from  'nexmo';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const secretKey = process.env.SECRET_KEY || '270400';
const salt = bcrypt.genSaltSync(10);

//Check New User/ Old User
export const checkNumber=async(req,res)=>{
  const phone=req.body.phone

  try {
    const usersStatus = await Users.findOne({
      where: {
        phone
      }
    });

    //Status Check
    if(usersStatus){
      return res.json({
        Users:'new',
      });
    }else{
      return res.json({
        Users:'old',
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
export const createUsers = async (req, res) => {
  //Hash password
  const pin = bcrypt.hashSync(req.body.pin, salt)

  const {
    name,
    image,
    refferal,
    phone,
    balance,
    email,
    type_user
  } = req.body;

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
        return res.json({
          message: 'Users was created successfully',
          data: newUsers
        });
      } else {
        //Failed Insert Users
        return res.json({
          message: 'Failed Insert New Users',
        });
      }
    } else {
      //Number Already Existed
      return res.json({
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
export const usersLogin=async(req,res)=>{
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
      return res.json({
        status: 400,
        message: 'Wrong PIN!'
      })
    }else{
      // // Create and assign token
      const token = jwt.sign({
        id: usersLogin.dataValues.id,
        phone: usersLogin.dataValues.phone
        }, secretKey, {
        expiresIn: '10h'
      })

      res.json({
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
export const otpSignup=async (req,res) =>{
  // phone=req.body.phone;
  
  //API
  const nexmo = new Nexmo({
    apiKey: "0aa0e459",
    apiSecret: "pQ24Q6CN8fRIslA7",
  })

  const from = "demy myxl";
  // const to = '6281910508754';
  // let tmpNumber = number;
  const to = "6281331994242";

  const text = "Hello Fucking Iyan";

  nexmo.message.sendSms(from, to, text);

  // const from = 6285643709737
  // const to = 6281331994242
  // const text = 'A text message sent using the Nexmo SMS API'

  // nexmo.channel.send(
  //   { "type": "sms", "number":to },
  //   { "type": "sms", "number": from },
  //   {
  //     "content": {
  //       "type": "text",
  //       "text": "This is an SMS sent from the Messages API"
  //     }
  //   },
  //   (err, data) => { console.log(data.message_uuid); }
  // );

  res.status(200).json({
    message: 'Succes Send Message '
  })

}

// Delete example
// export const deleteExample = async (req, res) => {
//   const {
//     id
//   } = req.params;
//   const deleteRowCount = await Examples.destroy({
//     where: {
//       id
//     }
//   });
//   res.json({
//     message: 'Example deleted succesfully',
//     count: deleteRowCount
//   });
// };

// Update example
// export const updateExample = async (req, res) => {
//   const {
//     id
//   } = req.params;
//   const {
//     name,
//     description,
//     deliverydate
//   } = req.body;

//   const examples = await Examples.findAll({
//     attributes: ['id', 'name', 'description', 'deliverydate'],
//     where: {
//       id
//     }
//   });

//   if (examples.length > 0) {
//     examples.forEach(async example => {
//       await example.update({
//         name,
//         description,
//         deliverydate
//       });
//     });
//   }

//   return res.json({
//     message: 'Example updated succesfully',
//     data: examples
//   });
// };