import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: axios.get('https://clonedana.herokuapp.com/api/users/'),
  };
};

