const Sequelize = require("sequelize");
const sequelize = require('../database/database');

const Transactions = sequelize.define('transaction', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  invoice: {
    type: Sequelize.TEXT
  },
  customer: {
    type: Sequelize.STRING
  },
  id_user: {
    type: Sequelize.INTEGER
  },
  amount: {
    type: Sequelize.INTEGER
  },
  id_services: {
    type: Sequelize.INTEGER
  },
  id_vouchers: {
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
  },
  payment_method: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

module.exports = Transactions;