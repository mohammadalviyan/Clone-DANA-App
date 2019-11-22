const initialState = {
    resultTopUp: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  const topUp = (state = initialState, action) => {
    switch (action.type) {
      //GET
      case 'TOPUP_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'TOPUP_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'TOPUP_FULFILLED':
        // console.log('PAYLOAD', action.payload);
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          resultTopUp: action.payload.data.data,
        };
      //DEFAULT STATE
      default:
        return {
          ...state,
        };
    }
  };

  export default topUp;
