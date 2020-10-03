import { ADMIN_TYPES } from './admin.types';
import { navDialogueMenu } from '../nav/nav.actions';
import axios from 'axios';
import { fbStorage } from '../../Firebase/Firebase.utils.js';

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

export const selectProject = (project) => {
  return {
    type: ADMIN_TYPES.SEL_PROJECT,
    payload: project,
  };
};

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

export const deleteUser = (id, images) => {
  return async (dispatch) => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].fullImagePath) {
        const fullImage = await fbStorage.ref(images[i].fullImagePath);
        await fullImage.delete();
      }
      if (images[i].thumbImagePath) {
        const thumbImage = await fbStorage.ref(images[i].thumbImagePath);
        await thumbImage.delete();
      }
    }
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

export const deleteImage = (image) => {
  return async (dispatch) => {
    if (image.fullImagePath) {
      const fullImage = await fbStorage.ref(image.fullImagePath);
      await fullImage.delete();
    }
    if (image.thumbImagePath) {
      const thumbImage = await fbStorage.ref(image.thumbImagePath);
      await thumbImage.delete();
    }
    axios.delete(`/api/user/image/${image.id}`).then((response) => {
      dispatch(getUser(image.userId));
      dispatch(getUsers());
    });
  };
};

export const moveImage = (oldPos, newPos, id) => {
  return (dispatch) => {
    axios
      .put('/api/user/image/move', { oldPos, newPos, id })
      .then((response) => {
        dispatch(getUser(id));
      });
  };
};

export const getProject = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/project/${id}`)
      .then((response) => {
        console.log(response.data);
        dispatch(selectProject(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getProjects = () => {
  return (dispatch) => {
    axios
      .get('/api/project')
      .then((response) => {
        dispatch(setProjects(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const createProject = (project) => {
  return (dispatch) => {
    axios
      .post('/api/project', project)
      .then((response) => {
        dispatch(getProjects());
        dispatch(navDialogueMenu(''));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateProject = (id, project) => {
  return (dispatch) => {
    axios
      .put(`/api/project/${id}`, { project })
      .then((response) => {
        dispatch(getProject(id));
        dispatch(getProjects());
        dispatch(navDialogueMenu(''));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteProject = (id, images) => {
  return async (dispatch) => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].fullImagePath) {
        const fullImage = await fbStorage.ref(images[i].fullImagePath);
        await fullImage.delete();
      }
      if (images[i].thumbImagePath) {
        const thumbImage = await fbStorage.ref(images[i].thumbImagePath);
        await thumbImage.delete();
      }
    }
    axios
      .delete(`/api/project/${id}`)
      .then((response) => {
        dispatch(getProjects());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteProjectImage = (image) => {
  return async (dispatch) => {
    if (image.fullImagePath) {
      const fullImage = await fbStorage.ref(image.fullImagePath);
      await fullImage.delete();
    }
    if (image.thumbImagePath) {
      const thumbImage = await fbStorage.ref(image.thumbImagePath);
      await thumbImage.delete();
    }
    axios.delete(`/api/project/image/${image.id}`).then((response) => {
      dispatch(getProject(image.projectId));
      dispatch(getProjects());
    });
  };
};

export const moveProjectImage = (oldPos, newPos, id) => {
  return (dispatch) => {
    axios
      .put('/api/project/image/move', { oldPos, newPos, id })
      .then((response) => {
        dispatch(getProject(id));
      });
  };
};
