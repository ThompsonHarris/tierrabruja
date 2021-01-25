import { NAV_TYPES } from './nav.types';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { convertToBlob } from '../../utils/index.js';
import { fbStorage } from '../../Firebase/Firebase.utils.js';
import {
  getUser,
  getProject,
  getProjects,
  getUsers,
} from '../admin/admin.actions';
import { fetchSiteInfo } from '../general/general.actions';

export const setUploading = () => ({
  type: NAV_TYPES.UPLOADING,
});

export const mobileMenu = () => ({
  type: NAV_TYPES.MOBILE_MENU,
});

export const setUpPercent = (percent) => ({
  type: NAV_TYPES.UPPERCENT,
  payload: percent,
});

export const setUpType = (type) => ({
  type: NAV_TYPES.UPTYPE,
  payload: type,
});

export const setUpCatagory = (catagory) => ({
  type: NAV_TYPES.UPCATAGORY,
  payload: catagory,
});

export const navDialogueMenu = (type, option = '') => {
  return {
    type: NAV_TYPES.DIALOGUE_MENU,
    payload: { type: type, option: option },
  };
};

export const navSecondaryDialogueMenu = (type, option = '', optionTwo = '') => {
  return {
    type: NAV_TYPES.SECONDARY_DIALOGUE_MENU,
    payload: { type: type, option: option, optionTwo: optionTwo },
  };
};

export const sendEmail = (name, email, subject, text) => {
  return (dispatch) => {
    axios
      .post('/api/email/sendemail', { name, email, subject, text })
      .then(({ data: { message } }) => {
        console.log('message:', message);
        if (message === 'success') {
          dispatch(navDialogueMenu(''));
        } else {
          console.log('there was an error!!');
        }
      });
  };
};

export const uploadingToServer = (file, uploadId, catagory) => {
  return (dispatch) => {
    dispatch(setUploading());
    dispatch(setUpType('server'));
    dispatch(setUpCatagory(catagory));
    const formData = new FormData();
    formData.append('file', file);
    axios
      .post(`/api/${catagory}/image/upload`, formData, {
        onUploadProgress: (ProgressEvent) => {
          const percent = (ProgressEvent.loaded / ProgressEvent.total) * 100;
          dispatch(setUpPercent(percent));
        },
      })
      .then(async (res) => {
        const { thumb, full } = res.data;
        let name = uuidv4();
        const thumbBlob = await convertToBlob(thumb.buffer.data, name);
        const fullBlob = await convertToBlob(full.buffer.data, name);
        const thumbUpload = await uploadBlob(
          thumbBlob,
          'thumb',
          dispatch,
          catagory
        );
        const FullUpload = await uploadBlob(
          fullBlob,
          'full',
          dispatch,
          catagory
        );
        return { thumbUpload, FullUpload };
      })
      .then((fileOBJ) => {
        if (catagory === 'user') {
          return axios.post(`/api/${catagory}/image`, {
            type: 'user',
            userId: uploadId,
            thumbImage: fileOBJ.thumbUpload.fileUrl,
            thumbImagePath: fileOBJ.thumbUpload.path,
            fullImage: fileOBJ.FullUpload.fileUrl,
            fullImagePath: fileOBJ.FullUpload.path,
          });
        } else if (catagory === 'project') {
          return axios.post(`/api/${catagory}/image`, {
            type: 'project',
            projectId: uploadId,
            thumbImage: fileOBJ.thumbUpload.fileUrl,
            thumbImagePath: fileOBJ.thumbUpload.path,
            fullImage: fileOBJ.FullUpload.fileUrl,
            fullImagePath: fileOBJ.FullUpload.path,
          });
        } else if (catagory === 'settings') {
          return axios.post(`/api/${catagory}/image`, {
            type: 'settings',
            settingId: uploadId,
            thumbImage: fileOBJ.thumbUpload.fileUrl,
            thumbImagePath: fileOBJ.thumbUpload.path,
            fullImage: fileOBJ.FullUpload.fileUrl,
            fullImagePath: fileOBJ.FullUpload.path,
          });
        }
      })
      .then((response) => {
        dispatch(setUploading());
        if (catagory === 'user') {
          dispatch(getUser(uploadId));
          dispatch(getUsers());
        } else if (catagory === 'project') {
          dispatch(getProject(uploadId));
          dispatch(getProjects());
        } else if (catagory === 'settings') {
          dispatch(fetchSiteInfo());
        }
        dispatch(setUpCatagory(''));
        dispatch(navSecondaryDialogueMenu('', ''));
      });
  };
};

const uploadBlob = async (blob, size, dispatch, catagory) => {
  return new Promise((res, rej) => {
    return StoreFile(blob, size, dispatch, catagory)
      .then(async (fileData) => {
        console.log('fileData', fileData);
        const URL = await fileData.ref.getDownloadURL();
        return {
          path: fileData.ref.location.path,
          fileUrl: URL,
        };
      })
      .then((filespecs) => {
        console.log('filespecs', filespecs);
        res(filespecs);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const StoreFile = async (blob, size, dispatch, catagory) => {
  dispatch(setUpType(size));
  return new Promise((res, rej) => {
    const update = (number) => {
      dispatch(setUpPercent(number));
    };
    let storageRef = fbStorage.ref(`images/${catagory}/${size}/` + blob.name);
    console.log(`${size} ref:`, storageRef);
    let task = storageRef.put(blob);
    task.on(
      'state_changed',
      function progress(snapshot) {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        update(percentage);
      },
      function error(err) {
        console.log(err);
        rej(err);
      },
      function complete() {
        res(task);
      }
    );
  });
};