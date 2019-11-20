const Sequelize = require("sequelize");
const sequelize = require('../database/database');

const Transactions = sequelize.define('transaction', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  id_user: {
    type: Sequelize.INTEGER
  },
  amount: {
    type: Sequelize.INTEGER
  },
  id_type: {
    type: Sequelize.INTEGER
  },
  id_voucher: {
    type: Sequelize.INTEGER
  },
  date_added: {
    type: Sequelize.DATE
  },
  date_updated: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false
});

module.exports = Transactions;