import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const topUp = (input) => {
  console.log('PULSA',input)
  return {
    type: 'TOPUP_USER',
    payload: axios.post('https://clonedana.herokuapp.com/api/transactions/', input),
  };
};
