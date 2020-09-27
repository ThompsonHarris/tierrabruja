import { NAV_TYPES } from './nav.types';

const initialState = {
  dialogueMenu: false,
  dialogueType: '',
  DialogueOption: '',
};

export const NavReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAV_TYPES.DIALOGUE_MENU:
      return {
        ...state,
        dialogueMenu: !state.dialogueMenu,
        dialogueType: action.payload.type,
        DialogueOption: action.payload.option,
      };
    default:
      return state;
  }
};
