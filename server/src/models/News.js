const Sequelize = require("sequelize");
const sequelize = require('../database/database');

const News = sequelize.define('news', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  icon: {
    type: Sequelize.TEXT
  },
  title: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false
});

module.exports = News;