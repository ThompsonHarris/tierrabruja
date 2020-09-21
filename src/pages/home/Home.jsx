import React from 'react';
import { connect } from 'react-redux';
//components
import Logo from '../../components/Icons/Logo.jsx';
import Form from '../../components/dialogueBox/Form.jsx';
//actions
import { navDialogueMenu } from '../../redux/nav/nav.actions.js';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className='container mx-auto flex flex-col justify-center'>
          <Logo className='fill-current cus-blue' />
          <a
            className='text-center cursor-pointer font-bold cus-blue animate-bounce'
            onClick={() => this.props.navDialogueMenu('email', 75, 65)}
          >
            summon us
          </a>
          <a
            className='text-center cursor-pointer font-bold cus-blue animate-bounce'
            onClick={() => this.props.navDialogueMenu('login', 75, 65)}
          >
            login
          </a>
        </div>
        <Form />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str, width, height) =>
    dispatch(navDialogueMenu(str, width, height)),
});

export default connect(null, mapDispatchToProps)(Home);
