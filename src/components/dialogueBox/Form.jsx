import React from 'react';
import Input from '../input/Input.jsx';
import { connect } from 'react-redux';
//cpmponent
import Email from './email/Email.jsx';

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
        className='fixed bg-white transition-all duration-500 ease-in-out flex flex-row justify-start invisible text-black border shadow-lg overflow-hidden'
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
          height: this.props.dialogueMenu
            ? `${this.props.dialogueHeight}vh`
            : 0,
        }}
      >
        {this.props.type === 'email' ? <Email /> : null}
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

export default connect(mapStateToProps, null)(Form);
