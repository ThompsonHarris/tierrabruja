import { USER_TYPES } from './user.types';

const initialState = {
  loggedIn: false,
  id: '',
  username: '',
  privilege: 0,
  error: '',
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES.LOGGEDIN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case USER_TYPES.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case USER_TYPES.SET_USERID:
      return {
        ...state,
        id: action.payload,
      };
    case USER_TYPES.SET_PRIVILEGE:
      return {
        ...state,
        privilege: action.payload,
      };
    case USER_TYPES.SET_ERROR_TYPE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
