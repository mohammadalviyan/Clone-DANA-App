import auth from './auth';
import coupon from './coupon';
import user from './user';
import mount from './mount';
import transfer from './transfer';
import {combineReducers} from 'redux';

export default combineReducers({
  auth,
  coupon,
  user,
  mount,
  transfer
});
