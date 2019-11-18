import Users from '../models/Users';

// Check Number Users
export const getoneUsers = async (number) => {
  const examples = await Examples.findOne({
    where: {
      number
    }
  });
  res.json({
    data: examples
  });
};

// Create Users
export const createUsers = async (req, res) => {
  
  const {
    name,
    image,
    refferal,
    pin,
    phone,
    balance,
    email,
    type_user
  } = req.body;

  try {
    getoneUsers(phone)
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
      fields: ['name', 'image', 'refferal','pin','phone','balance','email','type_user']
    });
    //
    if (newUsers) {
      return res.json({
        message: 'Users was created successfully',
        data: newUsers
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {error}
    })
  }
};



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