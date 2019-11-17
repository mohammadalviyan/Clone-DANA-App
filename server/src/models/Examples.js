import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Task from './Task';

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

Examples.hasMany(Task, { foreignKey: 'examplesId', sourceKey: 'id' });
Task.belongsTo(Examples, { foreignKey: 'examplesId', sourceKey: 'id'});

export default Examples;