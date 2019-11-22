import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const check = input => {
  return {
    type: 'CHECK',
    payload: axios.post('https://clonedana.herokuapp.com/api/users/checkusers/', {
      phone:input
    }),
  };
};

export const register = (input) => {
  // console.log('REGIST',input)
  // console.log('PIN',pin);
  return {
    type: 'REGISTER',
    payload: axios.post(
      'https://clonedana.herokuapp.com/api/users/register/',
      input
    ),
  };
};

export const otpreq = (otp, input) => {
  return {
    type: 'OTP',
    payload: axios.post(
      'https://clonedana.herokuapp.com/api/users/otpverify/', {
        otp, 
        phone: input
      }
    ),
  };
};

export const login = (pin, phone) => {
  // console.log('ASD', pin, phone);
  return {
    type: 'LOGIN',
    payload: axios.post(
      'https://clonedana.herokuapp.com/api/users/login/', {
        pin: pin,
        phone: phone,
      },
    ),
  };
};

export const getToken = () => {
  return {
    type: 'GET_TOKEN',
    payload: AsyncStorage.getItem('user')
  };
};