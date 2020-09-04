import { NAV_TYPES } from './nav.types';

export const navDialogueMenu = (type, width, height) => {
  return {
    type: NAV_TYPES.DIALOGUE_MENU,
    payload: { type: type, width: width, height: height },
  };
};
