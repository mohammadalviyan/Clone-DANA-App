const Sequelize = require("sequelize");
const sequelize = require('../database/database');

const CategoryTransactions = sequelize.define('category_transactions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  code: {
    type: Sequelize.STRING
  },
  latitude: {
    type: Sequelize.TEXT
  },
  longitude: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false
});

module.exports = CategoryTransactions;