import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './app.css';
import Home from './pages/home/Home.jsx';
import Admin from './pages/admin/Admin.jsx';
import Portfolio from './pages/portfolio/portfolio.jsx'
import Spider from './components/Icons/spider.jsx';
import Beehive from './components/Icons/beehive.jsx';
import Branch from './components/Icons/branch.jsx';
import Moth from './components/Icons/moth.jsx';
import Mail from './components/Icons/mail';
import { connect } from 'react-redux';
import { verify } from './redux/user/user.actions';
import Form from './components/dialogueBox/Form.jsx';
import FormOption from './components/SecondaryDialogueMenu/FormOption.jsx';
//actions
import { navDialogueMenu } from './redux/nav/nav.actions.js';

class App extends React.Component {
  componentDidMount() {
    this.props.verify();
  }
  render() {
    return (
      <div className=' flex justify-center h-full cusLG-blue relative'>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route path='/portfolio' component={Portfolio}/>
          <Route exact path='/*' component={Home} />
        </Switch>
        {this.props.loggedIn && this.props.privilege === 5 ? (
          <div className='fixed left-0 top-0 lg:w-1/12 md:w-2/12 w-5/12 flex flex-row justify-start ml-1 mt-1'>
            <Link to='/admin' className='w-1/4'>
              <Spider className='cus-fill-blue' />
            </Link>
          </div>
        ) :  <div className='fixed left-0 top-0 lg:w-1/12 md:w-2/12 w-5/12 flex flex-row justify-start ml-1 mt-1'>
        <Link onClick={() => this.props.navDialogueMenu('login')} className='w-1/2'>
          <Moth className='cus-fill-blue' />
        </Link>
      </div>}
        <div className='fixed bottom-0 right-0 lg:w-1/12 md:w-2/12 w-5/12 flex flex-row justify-end'>
          <Link to='/' className='w-1/2'>
            <Beehive className='cus-fill-blue' />
          </Link>
        </div>
        <div className='fixed bottom-0 left-0 lg:w-1/12 md:w-2/12 w-5/12 flex flex-row justify-start'>
        <Link onClick={() => this.props.navDialogueMenu('email')} className='w-1/2'>
          <Mail className='cus-fill-blue' />
        </Link>
      </div>
         <div className='fixed top-0 right-0 flex flex-row justify-end lg:w-1/12 md:w-2/12 w-5/12'>
          <Link to='/portfolio' className='w-1/2'>
            <Branch className='cus-fill-blue' />
          </Link>
        </div>
        <Form />
        <FormOption />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  privilege: state.user.privilege,
});

const mapDispatchToProps = (dispatch) => ({
  verify: () => dispatch(verify()),
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
