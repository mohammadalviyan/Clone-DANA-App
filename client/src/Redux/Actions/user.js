import axios from 'axios';
const API_URL_V2 = "https://danain-v2-clone.herokuapp.com"
const API_URL_V1 = "https://clonedana.herokuapp.com"

export const getUser = (id) => {
  return {
    type: 'GET_USER',
    id,
    payload: axios.get(`${API_URL_V2}/api/users/${id}`),
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


