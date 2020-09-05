import { NAV_TYPES } from './nav.types';
import axios from 'axios';

export const navDialogueMenu = (type, width, height) => {
  return {
    type: NAV_TYPES.DIALOGUE_MENU,
    payload: { type: type, width: width, height: height },
  };
};

export const sendEmail = (name, email, subject, text) => {
  return (dispatch) => {
    axios
      .post('/api/email/sendemail', { name, email, subject, text })
      .then(({ data: { message } }) => {
        console.log('message:', message);
        if (message === 'success') {
          dispatch(navDialogueMenu('', 0, 0));
        } else {
          console.log('there was an error!!');
        }
      });
  };
};
