import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const voucher = () => {
  return {
    type: 'VOUCHER',
    payload: axios.post('https://clonedana.herokuapp.com/api/users/voucher/'),
  };
};

export const promo = () => {
  return {
    type: 'PROMO',
    payload: axios.post(
      'https://clonedana.herokuapp.com/api/users/register/'),
  };
};