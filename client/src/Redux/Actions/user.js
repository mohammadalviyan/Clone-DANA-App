import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const getUser = (id) => {
  return {
    type: 'GET_USER',
    id,
    payload: axios.get(`https://clonedana.herokuapp.com/api/users/${id}`),
  };
};


export const updateUser = (field, id, data) => {
  return {
    type: 'UPDATE_USER',
    field,
    // payload: axios.put(`https://clonedana.herokuapp.com/api/users/${id}`, data
    payload: axios.put(`https://clonedana.herokuapp.com/api/users/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'multipart/form-data'
      }}
    ),
  };
};


