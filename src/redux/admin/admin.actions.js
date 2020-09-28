import { ADMIN_TYPES } from './admin.types';
import { navDialogueMenu } from '../nav/nav.actions';
import axios from 'axios';

export const setUsers = (users) => ({
  type: ADMIN_TYPES.SET_USERS,
  payload: users,
});

export const setProjects = (projects) => ({
  type: ADMIN_TYPES.SET_PROJECTS,
  payload: projects,
});

export const selectUser = (user) => ({
  type: ADMIN_TYPES.SEL_USER,
  payload: user,
});

export const selectProject = (project) => ({
  type: ADMIN_TYPES.SEL_PPROJECT,
  payload: project,
});

export const getUser = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/user/${id}`)
      .then((response) => {
        const filteredUser = Object.entries(response.data).reduce(
          (acc, [key, value]) => {
            if (key !== 'password') {
              acc[key] = value;
            }
            return acc;
          },
          {}
        );
        dispatch(selectUser(filteredUser));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get('/api/user')
      .then((response) => {
        const filteredUsers = response.data.map((user) => {
          return Object.entries(user).reduce((acc, [key, value]) => {
            if (key !== 'password') {
              acc[key] = value;
            }
            return acc;
          }, {});
        });
        dispatch(setUsers(filteredUsers));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const createUser = (user) => {
  return (dispatch) => {
    axios
      .post('/api/user', user)
      .then((response) => {
        dispatch(getUsers());
        dispatch(navDialogueMenu(''));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateUser = (id, user) => {
  return (dispatch) => {
    axios
      .put(`/api/user/${id}`, { user })
      .then((response) => {
        dispatch(getUser(id));
        dispatch(getUsers());
        dispatch(navDialogueMenu(''));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`/api/user/${id}`)
      .then((response) => {
        dispatch(getUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
