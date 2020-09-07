import React from 'react';
import './app.css';
import { connect } from 'react-redux';
//components
import Logo from './components/Icons/Logo.jsx';
import Form from './components/dialogueBox/Form.jsx';
//actions
import { navDialogueMenu } from './redux/nav/nav.actions';

class App extends React.Component {
  render() {
    return (
      <div className=' flex justify-center h-screen cusLG-blue'>
        <div className='container mx-auto flex flex-col justify-center'>
          <Logo className='fill-current cus-blue' />
          <a
            className='text-center cursor-pointer font-bold cus-blue animate-bounce'
            onClick={() => this.props.navDialogueMenu('email', 75, 65)}
          >
            summon us
          </a>
        </div>
        <Form />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str, width, height) =>
    dispatch(navDialogueMenu(str, width, height)),
});

export default connect(null, mapDispatchToProps)(App);
