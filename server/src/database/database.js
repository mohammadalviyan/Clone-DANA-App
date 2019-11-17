import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      require: 3000,
      idle: 1000
    },
    logging: false
  }
)