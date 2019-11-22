import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  resultsCheck: [],
  resultRegister: [],
  resultOtp: [],
  resultLogin: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    //CHECK
    case 'CHECK_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'CHECK_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'CHECK_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultsCheck: action.payload.data.Users,
      };

    //REGISTER
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'REGISTER_FULFILLED':
      const token = action.payload.data.token;
      AsyncStorage.setItem('xaccess-token', token);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultRegister: action.payload.data.data,
      };

    //OTP
    case 'OTP_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'OTP_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'OTP_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultOtp: action.payload.data.status,
      };

    //LOGIN
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'LOGIN_FULFILLED':
      // console.log('REDD',action.payload.data.data.id);
      const id = action.payload.data.data.id;
      const balance = action.payload.data.data.balance;
      let storage = () => {
        try {
          AsyncStorage.setItem(
            'user',
            JSON.stringify(action.payload.data.data),
          );
        } catch (e) {
          console.log(e);
        }
      };
      storage();
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultLogin: action.payload.data.data,
      };

    //GET_TOKEN
    case 'GET_TOKEN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_TOKEN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_TOKEN_FULFILLED':
      // console.log(action.payload ? JSON.parse(action.payload) : [], 'REDUCER');
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultLogin: action.payload ? JSON.parse(action.payload) : []
      };

    //DEFAULT STATE
    default:
      return {
        ...state,
      };
  }
};

export default auth;

