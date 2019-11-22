import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const transfer = input => {
  return {
    type: 'TRANSFER_USER',
    payload: axios.post(
      'https://clonedana.herokuapp.com/api/transactions/',
      input,
    ),
  };
};

export const PPOB = input => {
    console.log('ACT',input)
  return {
    type: 'PPOB_USER',
    payload: axios.post(
      'https://clonedana.herokuapp.com/api/transactions/',
      input,
    ),
  };
};