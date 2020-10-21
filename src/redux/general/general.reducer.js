import { GENERAL_TYPES } from './general.types';

const INITIAL_STATE = {
  id: '',
  sitename: '',
  sitedescription: '',
  aboutdescription: '',
  defaultemail: '',
  images: [],
};

export const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENERAL_TYPES.SET_SITE_INFO:
      return {
        id: action.payload.id,
        sitename: action.payload.sitename,
        sitedescription: action.payload.sitedescription,
        aboutdescription: action.payload.aboutdescription,
        defaultemail: action.payload.defaultemail,
        images: action.payload.images,
      };
    default:
      return {
        ...state,
      };
  }
};
