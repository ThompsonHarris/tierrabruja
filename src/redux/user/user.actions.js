import { USER_TYPES } from './user.types';
import axios from 'axios';
import { navDialogueMenu } from '../nav/nav.actions';
import { fetchSiteInfo } from '../general/general.actions';

export const setLogIn = (boolean) => ({
  type: USER_TYPES.LOGGEDIN,
  payload: boolean,
});

export const setUserName = (username) => ({
  type: USER_TYPES.SET_USERNAME,
  payload: username,
});

export const setUserId = (id) => ({
  type: USER_TYPES.SET_USERID,
  payload: id,
});

export const setUserType = (num) => ({
  type: USER_TYPES.SET_PRIVILEGE,
  payload: num,
});

export const setError = (error) => ({
  type: USER_TYPES.SET_ERROR_TYPE,
  payload: error,
});

export const login = (email, password) => {
  return (dispatch) => {
    axios
      .post('/login', { email, password })
      .then((response) => {
        dispatch(setUserName(response.data.username));
        dispatch(setUserType(response.data.isAdmin ? 5 : 0));
        dispatch(setUserId(response.data.id));
        dispatch(setLogIn(true));
        dispatch(setError(''));
        dispatch(navDialogueMenu('', 0, 0));
      })
      .catch((err) => dispatch(setError(err.response.data.error)));
  };
};

export const verify = (email, password) => {
  return (dispatch) => {
    dispatch(fetchSiteInfo());
    axios
      .get('/api/session/verify')
      .then((response) => {
        if (response.data.user) {
          dispatch(setUserName(response.data.user.email));
          dispatch(setLogIn(true));
          dispatch(setUserId(response.data.user.id));
          if (response.data.user.isAdmin) {
            dispatch(setUserType(response.data.user.isAdmin ? 5 : 0));
          }
        }
        if (response.data.guest) {
          dispatch(setUserType(0));
        }
      })
      .catch((err) => console.log(err.response.data));
  };
};

export const logout = () => {
  return (dispatch) => {
    axios
      .post('/logout')
      .then((response) => {
        console.log(response.data);
        dispatch(setUserName(''));
        dispatch(setUserId(''));
        dispatch(setUserType(0));
        dispatch(setLogIn(false));
        dispatch(setError(''));
        dispatch(navDialogueMenu('', 0, 0));
      })
      .catch((err) => console.log(err.response.data));
  };
};
