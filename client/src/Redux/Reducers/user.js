const initialState = {
    activeUser: {},
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      //GET
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
          activeUser: action.payload.data.data,
        };

      //UPDATE
      case 'UPDATE_USER_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'UPDATE_USER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'UPDATE_USER_FULFILLED':
        const newUser = action.payload.data.data;
        // if (typeof user[field] !== 'undefined' && typeof action.payload.data.data[field] !== 'undefined') {
        // const user = state.activeUser.hasOwnProperty(field) && newUser.hasOwnProperty(field) ? {
        //   ...state.activeUser,
        //   [field]: newUser[field]
        // } : state.activeUser;
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          activeUser: newUser,
        };
      /////////////////////////////////////////
 
      //DEFAULT STATE
      default:
        return {
          ...state,
        };
    }
  };
  
  export default user;