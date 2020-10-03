import { ADMIN_TYPES } from './admin.types';

const INITIAL_STATE = {
  users: [],
  projects: [],
  user: {
    createdAt: '',
    email: '',
    firstname: '',
    id: '',
    images: [],
    isAdmin: false,
    lastname: '',
    updatedAt: '',
  },
  project: {
    address: '',
    city: '',
    createdAt: '',
    description: '',
    id: '',
    images: [],
    state: '',
    status: '',
    title: '',
    updatedAt: '',
    userId: null,
  },
};

export const AdminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADMIN_TYPES.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADMIN_TYPES.SEL_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADMIN_TYPES.SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADMIN_TYPES.SEL_PROJECT:
      return {
        ...state,
        project: action.payload,
      };

    default:
      return state;
  }
};
