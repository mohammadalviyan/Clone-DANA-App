const initialState = {
  resultsCheck: [],
  resultRegister: [],
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
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultRegister: action.payload.data.data,
      };

    //DEFAULT STATE
    default:
      return {
        ...state,
      };
  }
};

export default auth;

