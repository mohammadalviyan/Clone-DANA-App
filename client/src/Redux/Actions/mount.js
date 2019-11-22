import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const mount = id => {
    console.log('ID',id)
  return {
    type: 'MOUNT_USER',
    payload: axios.get(
      'https://clonedana.herokuapp.com/api/users/' + id
    ),
  };
};
