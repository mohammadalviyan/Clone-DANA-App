const initialState = {
    VoucherList: [],
    PromoList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  const coupon = (state = initialState, action) => {
    switch (action.type) {
      //VOUCHER
      case 'VOUCHER_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'VOUCHER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'VOUCHER_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          VoucherList: action.payload.data.data, //check again
        };
  
      //PROMO
      case 'PROMO_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'PROMO_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'PROMO_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          resultPromo: action.payload.data.data, //check again
        };
  
      //DEFAULT STATE
      default:
        return {
          ...state,
        };
    }
  };
  
  export default coupon;
  