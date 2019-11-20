import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const check = input => {
  return {
    type: 'CHECK',
    payload: axios.post('https://clonedana.herokuapp.com/api/users/checkusers/', input),
  };
};

export const register = (input) => {
  console.log('REGIST',input)
  // console.log('PIN',pin);
  return {
    type: 'REGISTER',
    payload: axios.post(
      'https://clonedana.herokuapp.com/api/users/register/',
      input
    ),
  };
};