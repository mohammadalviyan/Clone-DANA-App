import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
const API_URL_V2 = "https://danain-v2-clone.herokuapp.com"
const API_URL_V1 = "https://clonedana.herokuapp.com"

export const topUp = (input) => {
  console.log('PULSA',input)
  return {
    type: 'TOPUP_USER',
    payload: axios.post(`${API_URL_V2}/api/transactions/`, input),
  };
};
