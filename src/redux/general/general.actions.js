import { GENERAL_TYPES } from './general.types';
import axios from 'axios';
import { fbStorage } from '../../Firebase/Firebase.utils.js';

export const setSiteInfo = (siteInfo) => ({
  type: GENERAL_TYPES.SET_SITE_INFO,
  payload: siteInfo,
});

export const fetchSiteInfo = () => {
  return (dispatch) => {
    axios.get('/api/settings/').then((response) => {
      dispatch(setSiteInfo(response.data[0]));
    });
  };
};

export const updateAndFetch = (siteInfo) => {
  const {
    sitename,
    sitedescription,
    defaultemail,
    aboutdescription,
  } = siteInfo;
  return (dispatch) => {
    axios
      .put('/api/settings/', {
        sitename,
        sitedescription,
        defaultemail,
        aboutdescription,
      })
      .then((response) => {
        dispatch(fetchSiteInfo());
      });
  };
};

export const deleteSettingImage = (image) => {
  return async (dispatch) => {
    if (image.fullImagePath) {
      const fullImage = await fbStorage.ref(image.fullImagePath);
      await fullImage.delete();
    }
    if (image.thumbImagePath) {
      const thumbImage = await fbStorage.ref(image.thumbImagePath);
      await thumbImage.delete();
    }
    axios.delete(`/api/settings/image/${image.id}`).then((response) => {
      dispatch(fetchSiteInfo());
    });
  };
};

export const moveSettingImage = (oldPos, newPos, id) => {
  return (dispatch) => {
    axios
      .put('/api/settings/image/move', { oldPos, newPos, id })
      .then((response) => {
        dispatch(fetchSiteInfo());
      });
  };
};
