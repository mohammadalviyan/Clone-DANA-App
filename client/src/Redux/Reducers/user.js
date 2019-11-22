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
      //////////perlu direvisi ulang
      case 'UPDATE_USER_FULFILLED':
        const dataAfterPut = (singleData) => {
          state.resultUser.map (user => {
            if (user.id === action.payload.data.data.id) {
              {
                [...action.payload.data.data, action.payload.data.data.singleData]
              }
              return action.payload.data.data;
            }
            return user;
          })
        };
        const dataAfterPut = state.resultUser.map(user => {
          if (user.id === action.payload.data.data.id) {
            const { field } = action;
            // if (typeof user[field] !== 'undefined' && typeof action.payload.data.data[field] !== 'undefined') {
            if (user.hasOwnProperty(field) && action.payload.data.data.hasOwnProperty(field)) {
              user[field] = action.payload.data.data[field];
            }
          }
          return user;
        });
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          resultUser: dataAfterPut,
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
  