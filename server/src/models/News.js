import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const News = sequelize.define('news', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  icon: {
    type: Sequelize.TEXT
  },
  title: {
    type: Sequelize.TEXT
  },
  name: {
    type: Sequelize.DATE
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

export default News;