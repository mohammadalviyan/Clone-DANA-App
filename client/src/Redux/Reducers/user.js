const initialState = {
    resultUser: [],
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
          resultUser: action.payload.data.data[0],
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
        // console.log(state.resultUser, "userresult")
        const { field } = action;
        const newUser = action.payload.data.data[0];
        // if (typeof user[field] !== 'undefined' && typeof action.payload.data.data[field] !== 'undefined') {
        // const user = state.resultUser.hasOwnProperty(field) && newUser.hasOwnProperty(field) ? {
        //   ...state.resultUser,
        //   [field]: newUser[field]
        // } : state.resultUser;
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          resultUser: newUser,
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