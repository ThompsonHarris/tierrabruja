import { NAV_TYPES } from './nav.types';

const initialState = {
  dialogueMenu: false,
  dialogueType: '',
  DialogueWidth: 0,
  DialogueHeight: 0,
};

export const NavReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAV_TYPES.DIALOGUE_MENU:
      return {
        ...state,
        dialogueMenu: !state.dialogueMenu,
        dialogueType: action.payload.type,
        DialogueWidth: action.payload.width,
        DialogueHeight: action.payload.height,
      };
    default:
      return state;
  }
};
