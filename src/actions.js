export const SET_USERS = 'SET_USERS';
export const SELECT_USER = 'SELECT_USER';

export const setUsers = (users) => {
    console.log("inside action setUsers")
    return({
  type: SET_USERS,
  payload: users,
})};

export const selectUser = (userId) => ({
  type: SELECT_USER,
  payload: userId,
});

