import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './app.css';
import Home from './pages/home/Home.jsx';
import Admin from './pages/admin/Admin.jsx';
import Spider from './components/Icons/spider.jsx';
import Beehive from './components/Icons/beehive.jsx';
import { connect } from 'react-redux';
import { verify } from './redux/user/user.actions';
import Form from './components/dialogueBox/Form.jsx';
import FormOption from './components/SecondaryDialogueMenu/FormOption.jsx';

class App extends React.Component {
  componentDidMount() {
    this.props.verify();
  }
  render() {
    return (
      <div className=' flex justify-center h-screen cusLG-blue relative'>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route exact path='/' component={Home} />
        </Switch>
        {this.props.loggedIn && this.props.privilege === 5 ? (
          <div className='absolute left-0 top-0 w-1/12 flex flex-row justify-start ml-1 mt-1'>
            <Link to='/admin' className='w-1/4'>
              <Spider className='cus-fill-blue' />
            </Link>
          </div>
        ) : null}
        <div className='absolute bottom-0 right-0 w-1/12 flex flex-row justify-end'>
          <Link to='/' className='w-1/2'>
            <Beehive className='cus-fill-blue' />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
