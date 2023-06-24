import { SET_USERS, SELECT_USER } from './actions';

const initialState = {
  users: [],
  selectedUserId: null,
};

const reducer = (state = initialState, action) => {
  console.log("inside reducer", action.type, action.payload)
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case SELECT_USER:
      return { ...state, selectedUserId: action.payload };
    default:
      return state;
  }
};

export default reducer;

