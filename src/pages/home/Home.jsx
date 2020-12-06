import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
//components
import Logo from '../../components/Icons/Logo.jsx';
//actions
import { navDialogueMenu } from '../../redux/nav/nav.actions.js';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className='container mx-auto flex flex-col justify-center h-screen'>
          <Logo className='fill-current cus-blue' />
          <a
            className='text-center cursor-pointer font-bold cus-blue animate-bounce'
            onClick={() => this.props.navDialogueMenu('email')}
          >
            summon us
          </a>
          <Link to='/portfolio' className={'text-center cursor-pointer font-bold cus-blue animate-bounce'}>portfolio</Link>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
});

export default connect(null, mapDispatchToProps)(Home);
