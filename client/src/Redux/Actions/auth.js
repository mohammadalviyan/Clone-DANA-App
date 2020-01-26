import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const API_URL_V2 = "https://danain-v2-clone.herokuapp.com"
const API_URL_V1 = "https://clonedana.herokuapp.com"

export const check = input => {
  return {
    type: 'CHECK',
    payload: axios.post(`${API_URL_V2}/api/users/checkusers/`, {
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
      `${API_URL_V2}/api/users/register/`,
      input
    ),
  };
};

export const otpreq = (otp, input) => {
  return {
    type: 'OTP',
    payload: axios.post(
      `${API_URL_V2}/api/users/otpverify/`, {
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
      `${API_URL_V2}/api/users/login/`, {
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

export const updateUser = (id, data) => {
  console.log(data,'data update')
  return {
    type: 'UPDATE_USER',
    payload: axios.put(`${API_URL_V2}/api/users/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }}
    ),
  };
};