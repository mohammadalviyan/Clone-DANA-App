export const setUser = (phone) => ({
  type: 'SET_USER',
  payload: {phone},
});

export const setUserNull = () => ({
  type: 'SET_USER',
  payload: {},
});
