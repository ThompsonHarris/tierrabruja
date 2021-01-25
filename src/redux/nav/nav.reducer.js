import { NAV_TYPES } from './nav.types';

const initialState = {
  mobileMenu: false,
  dialogueMenu: false,
  dialogueType: '',
  DialogueOption: '',
  SecondaryDialogue: false,
  SecondaryDialogueType: '',
  SecondaryDialogueOption: '',
  SecondaryDialogueOptionTwo: '',
  Uploading: false,
  Uptype: '',
  Uppercent: 0,
  Upcatagory: '',
};

export const NavReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAV_TYPES.MOBILE_MENU:
      return {
        ...state,
        mobileMenu: !state.mobileMenu
      }
    case NAV_TYPES.DIALOGUE_MENU:
      return {
        ...state,
        dialogueMenu: !state.dialogueMenu,
        dialogueType: action.payload.type,
        DialogueOption: action.payload.option,
      };
    case NAV_TYPES.SECONDARY_DIALOGUE_MENU:
      return {
        ...state,
        SecondaryDialogue: !state.SecondaryDialogue,
        SecondaryDialogueType: action.payload.type,
        SecondaryDialogueOption: action.payload.option,
        SecondaryDialogueOptionTwo: action.payload.optionTwo,
      };
    case NAV_TYPES.UPLOADING:
      return {
        ...state,
        Uploading: !state.Uploading,
      };
    case NAV_TYPES.UPPERCENT:
      return {
        ...state,
        Uppercent: action.payload,
      };
    case NAV_TYPES.UPTYPE:
      return {
        ...state,
        Uptype: action.payload,
      };
    case NAV_TYPES.UPCATAGORY:
      return {
        ...state,
        Upcatagory: action.payload,
      };
    default:
      return state;
  }
};
