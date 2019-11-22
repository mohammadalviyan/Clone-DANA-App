import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  resultData: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const dataAsync = (state = initialState, action) => {
  switch (action.type) {

    case 'DATA':

      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultData: action.payload
      };

    //DEFAULT STATE
    default:
      return {
        ...state,
      };
  }
};

export default auth;
