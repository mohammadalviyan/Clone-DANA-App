import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
const API_URL_V2 = "https://danain-v2-clone.herokuapp.com"
const API_URL_V1 = "https://clonedana.herokuapp.com"

export const getVoucher = () => {
  return {
    type: 'VOUCHER',
    payload: axios.get(`${API_URL_V2}/api/vouchers`),
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
      `${API_URL_V2}/api/users/register/`),
  };
};