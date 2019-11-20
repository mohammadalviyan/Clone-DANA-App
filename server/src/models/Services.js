const Sequelize = require("sequelize");
const sequelize = require('../database/database');

const Services = sequelize.define('services', {
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
  latitude: {
    type: Sequelize.TEXT
  },
  longitude: {
    type: Sequelize.TEXT
  },
  type: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

module.exports = Services;