const Sequelize = require("sequelize");
const sequelize = require('../database/database');

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.TEXT
  },
  refferal: {
    type: Sequelize.TEXT
  },
  pin: {
    type: Sequelize.TEXT
  },
  phone: {
    type: Sequelize.TEXT
  },
  balance: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.TEXT
  },
  type_user: {
    type: Sequelize.TEXT
  },
  otp: {
    type: Sequelize.TEXT
  },
  id_vouchers: {
    type: Sequelize.INTEGER
  }
},{
  timestamps: false
});

module.exports = Users;