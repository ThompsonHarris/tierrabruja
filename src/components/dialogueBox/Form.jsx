import React from 'react';
import Input from '../input/Input.jsx';
import { connect } from 'react-redux';
import Email from './email/Email.jsx';
import LogIn from './logIn/LogIn.jsx';
import AddProject from './project/AddProject.jsx';
import AddUser from './user/AddUser.jsx';
import EditProject from './project/EditProject.jsx';
import EditUser from './user/EditUser.jsx';
import EditImage from './EditImage/EditImage.jsx';

import { navDialogueMenu } from '../../redux/nav/nav.actions.js';

class Form extends React.Component {
  state = {};

  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  render() {
    return (
      <div
        className='fixed transition-all duration-500 ease-in-out flex items-center justify-center h-screen invisible text-black overflow-hidden sm:w-1/3 w-5/6'
        style={{
          visibility: this.props.dialogueMenu ? 'visible' : 'hidden',
          transform: this.props.dialogueMenu
            ? 'translateY(0)'
            : 'translateY(-100%)',
        }}
      >
        <div class='bg-white font-bold rounded-lg border shadow-lg sm:p-10 p-0 w-full relative'>
          {this.props.type === 'email' ? <Email /> : null}
          {this.props.type === 'login' ? <LogIn /> : null}
          {this.props.type === 'add user' ? <AddUser /> : null}
          {this.props.type === 'edit user' ? <EditUser /> : null}
          {this.props.type === 'add project' ? <AddProject /> : null}
          {this.props.type === 'edit project' ? <EditProject /> : null}
          {this.props.type === 'edit images' ? <EditImage /> : null}
          <div
            className=' absolute top-0 right-0 modal-close cursor-pointer z-30 w-8 h-8 pt-3 pr-3 flex flex-row justify-center'
            onClick={() => {
              this.props.navDialogueMenu('');
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
  type: state.nav.dialogueType,
  dialogueWidth: state.nav.DialogueWidth,
  dialogueHeight: state.nav.DialogueHeight,
});

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
