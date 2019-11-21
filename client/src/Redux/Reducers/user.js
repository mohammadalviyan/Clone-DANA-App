const initialState = {
    resultUser: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      //CHECK
      case 'GET_USER_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'GET_USER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_USER_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          resultUser: action.payload.data.data[0],
        };
 
      //DEFAULT STATE
      default:
        return {
          ...state,
        };
    }
  };
  
  export default user;
  