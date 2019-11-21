import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: axios.get('https://clonedana.herokuapp.com/api/users/'),
  };
};


export const updateUser = (id, data) => {
  return {
    type: 'UPDATE_USER',
    payload: axios.put(`https://clonedana.herokuapp.com/api/users/${id}`, data),
  };
};


