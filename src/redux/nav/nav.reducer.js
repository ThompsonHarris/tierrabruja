import { NAV_TYPES } from './nav.types';

const initialState = {
  dialogueMenu: false,
};

export const NavReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAV_TYPES.DIALOGUE_MENU:
      return {
        ...state,
        dialogueMenu: !state.dialogueMenu,
      };
    default:
      return state;
  }
};
