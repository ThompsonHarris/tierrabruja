import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
//components
import Logo from '../../components/Icons/Logo.jsx';
import Newsletter from '../../components/Newsletter/Newletter'
//actions
import { navDialogueMenu } from '../../redux/nav/nav.actions.js';

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render() {
    return (
      <>
        <div className='flex flex-col justify-between w-full'
        style={{height:'80vh'}}>
          <Logo className='fill-current cus-blue'/>
          <a
            className='text-center cursor-pointer font-bold cus-blue animate-bounce'
            onClick={() => {
              window.scrollTo(0, 0);
              this.props.navDialogueMenu('email')
            }}
          >
            summon us
          </a>
        </div>
        <Newsletter/>
        </>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
});

export default connect(null, mapDispatchToProps)(Home);
