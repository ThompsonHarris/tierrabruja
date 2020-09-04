import React from 'react';
import './app.css';
import { connect } from 'react-redux';
//components
import Logo from './components/Icons/Logo.jsx';
import Form from './components/form/Form.jsx';
//actions
import { navDialogueMenu } from './redux/nav/nav.actions';

class App extends React.Component {
  render() {
    return (
      <div className=' flex justify-center h-screen cusLG-blue'>
        <Logo className='container mx-auto fill-current cus-blue' />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: () => dispatch(navDialogueMenu()),
});

export default connect(null, mapDispatchToProps)(App);
