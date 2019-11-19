"use-strict";

const Sequelize = require("sequelize");

module.exports = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@remotemysql.com/${process.env.DB_DATABASE}`,
  {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);