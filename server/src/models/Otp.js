const Sequelize = require("sequelize");
const sequelize = require('../database/database');

const Otp = sequelize.define('otp', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  otp: {
    type: Sequelize.TEXT
  },
  phone: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false
});

module.exports = Otp;