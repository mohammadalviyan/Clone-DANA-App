import Sequelize from 'sequelize';
import {
  sequelize
} from '../database/database';

const Vouchers = sequelize.define('vouchers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  nominal: {
    type: Sequelize.INTEGER
  },
  created_at: {
    type: Sequelize.DATE
  },
  expired_at: {
    type: Sequelize.DATE
  },
  image: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false
});

export default Vouchers;