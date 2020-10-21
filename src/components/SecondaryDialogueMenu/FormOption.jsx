import React from 'react';
import { connect } from 'react-redux';
import {
  navDialogueMenu,
  navSecondaryDialogueMenu,
} from '../../redux/nav/nav.actions.js';
import Upload from '../SecondaryDialogueMenu/upload/Upload.js';

class FormOption extends React.Component {
  render() {
    return (
      <div
        className='fixed transition-all duration-500 ease-in-out flex items-center justify-center h-screen invisible text-black overflow-hidden sm:w-1/3 w-5/6'
        style={{
          visibility: this.props.SecondaryDialogue ? 'visible' : 'hidden',
          transform: this.props.SecondaryDialogue
            ? 'translateY(0)'
            : 'translateY(-100%)',
        }}
      >
        <div class='bg-white font-bold rounded-lg border shadow-lg sm:p-10 p-0 w-full relative'>
          {this.props.SecondaryDialogueType === 'upload user image' ? (
            <Upload />
          ) : null}
          {this.props.SecondaryDialogueType === 'upload project image' ? (
            <Upload />
          ) : null}
          {this.props.SecondaryDialogueType === 'upload general image' ? (
            <Upload />
          ) : null}
          <div
            className=' absolute top-0 right-0 modal-close cursor-pointer z-30 w-8 h-8 pt-3 pr-3 flex flex-row justify-center'
            onClick={() => {
              this.props.navSecondaryDialogueMenu('');
            }}
          >
            <svg
              className='fill-current text-white h-full w-full self-center bg-gray-600 rounded-full'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 18 18'
            >
              <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dialogueMenu: state.nav.dialogueMenu,
  SecondaryDialogue: state.nav.SecondaryDialogue,
  SecondaryDialogueType: state.nav.SecondaryDialogueType,
});

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
  navSecondaryDialogueMenu: (str) => dispatch(navSecondaryDialogueMenu(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormOption);
