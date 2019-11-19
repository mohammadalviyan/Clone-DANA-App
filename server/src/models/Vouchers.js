const Sequelize = require("sequelize");
const sequelize = require('../database/database');

const Vouchers = sequelize.define('vouchers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.INTEGER
  },
  created_at: {
    type: Sequelize.DATE
  },
  expired_at: {
    type: Sequelize.DATE
  },
  image: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false
});

module.exports = Vouchers;