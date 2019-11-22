import axios from 'axios';

export const dataAsync = (dataApp) => {
  // console.log('ASD', pin, phone);
  return {
    type: 'DATA',
    dataApp
  };
};
