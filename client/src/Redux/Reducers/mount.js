const initialState = {
  resultMount: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const mount = (state = initialState, action) => {
  switch (action.type) {
    //GET
    case 'MOUNT_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'MOUNT_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'MOUNT_USER_FULFILLED':
        // console.log('RED', action.payload)
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultMount: JSON.parse(action.payload.data.data.balance)
      };
    //DEFAULT STATE
    default:
      return {
        ...state,
      };
  }
};

export default mount;
