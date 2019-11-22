const initialState = {
  resultTransfer: [],
  resultPpob:[],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const transfer = (state = initialState, action) => {
  switch (action.type) {
    //GET
    case 'TRANSFER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'TRANSFER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'TRANSFER_FULFILLED':
      //   console.log('PAYLOAD', action.payload);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultTransfer: action.payload.data.data,
      };

    //GET
    case 'PPOB_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PPOB_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'PPOB_FULFILLED':
        console.log('PAYLOAD', action.payload);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultPpob: action.payload.data.data,
      };
    //DEFAULT STATE
    default:
      return {
        ...state,
      };
  }
};

export default transfer;
