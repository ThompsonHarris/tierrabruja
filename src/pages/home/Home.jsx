import React from 'react';
import { connect } from 'react-redux';
//components
import Logo from '../../components/Icons/Logo.jsx';
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
            onClick={() => this.props.navDialogueMenu('email')}
          >
            summon us
          </a>
          <a
            className='text-center cursor-pointer font-bold cus-blue animate-bounce'
            onClick={() => this.props.navDialogueMenu('login')}
          >
            login
          </a>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
});

export default connect(null, mapDispatchToProps)(Home);
