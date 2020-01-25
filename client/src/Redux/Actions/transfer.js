import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
const API_URL_V2 = "https://danain-v2-clone.herokuapp.com"
const API_URL_V1 = "https://clonedana.herokuapp.com"

export const transfer = input => {
  return {
    type: 'TRANSFER_USER',
    payload: axios.post(
      `${API_URL_V2}/api/transactions/`,
      input,
    ),
  };
};

export const PPOB = input => {
    console.log('ACT',input)
  return {
    type: 'PPOB_USER',
    payload: axios.post(
      `${API_URL_V2}/api/transactions/`,
      input,
    ),
  };
};