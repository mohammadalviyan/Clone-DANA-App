import auth from './auth';
import coupon from './coupon';
import {combineReducers} from 'redux';

export default combineReducers({
  auth,
  coupon
});
