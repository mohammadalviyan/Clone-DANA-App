import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const getVoucher = () => {
  return {
    type: 'VOUCHER',
    payload: axios.get('https://clonedana.herokuapp.com/api/vouchers'),
  };
};

export const getVoucherDetail = (id) => {
  return {
    type: 'VOUCHER_DETAIL',
    id
  };
};

export const getPromo = () => {
  return {
    type: 'PROMO',
    payload: axios.get(
      'https://clonedana.herokuapp.com/api/users/register/'),
  };
};