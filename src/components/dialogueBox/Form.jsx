import React from 'react';
import Input from '../input/Input.jsx';
import { connect } from 'react-redux';
//cpmponent
import Email from './email/Email.jsx';
//actions
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
        className='fixed bg-white transition-all duration-500 ease-in-out flex flex-row justify-start invisible text-black border shadow-lg h-auto overflow-hidden'
        style={{
          visibility: this.props.dialogueMenu ? 'visible' : 'hidden',
          transform: this.props.dialogueMenu
            ? 'translateY(0)'
            : 'translateY(-100%)',
          top: this.props.dialogueMenu
            ? `${Math.abs(this.props.dialogueHeight - 100) / 2}vh`
            : 0,

          width: this.props.dialogueMenu
            ? `${this.props.dialuogeWidth}vw`
            : '50vw',
          minHeight: this.props.dialogueMenu
            ? `${this.props.dialogueHeight}vh`
            : 0,
        }}
      >
        {this.props.type === 'email' ? <Email /> : null}
        <div
          className=' absolute top-0 right-0 modal-close cursor-pointer z-30 w-8 h-8 pt-3 pr-3 flex flex-row justify-center'
          onClick={() => {
            this.props.navDialogueMenu('', 0, 0);
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
  navDialogueMenu: (str, width, height) =>
    dispatch(navDialogueMenu(str, width, height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
