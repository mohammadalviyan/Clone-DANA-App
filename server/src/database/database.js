import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'clonedana',
  'clonedana',
  'Sekolahku25*',
  {
    host: 'clonedana.cziqdpn1fufp.us-east-1.rds.amazonaws.com',
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