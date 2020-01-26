import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
const API_URL_V2 = "https://danain-v2-clone.herokuapp.com"
const API_URL_V1 = "https://clonedana.herokuapp.com"

export const mount = id => {
    console.log('ID',id)
  return {
    type: 'MOUNT_USER',
    payload: axios.get(
      `${API_URL_V2}/api/users/` + id
    ),
  };
};
