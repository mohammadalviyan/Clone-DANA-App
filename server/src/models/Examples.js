import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Examples = sequelize.define('examples', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  deliverydate: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

export default Examples;