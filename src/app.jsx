import React from 'react';
import { Route, bg, Switch } from 'react-router-dom';
import './app.css';
import Home from './pages/home/Home.jsx';
import Admin from './pages/admin/Admin.jsx';
import Portfolio from './pages/portfolio/portfolio.jsx'
import About from './pages/about/about'
import Spider from './components/Icons/spider.jsx';
import Beehive from './components/Icons/beehive.jsx';
import Branch from './components/Icons/branch.jsx';
import Moth from './components/Icons/moth.jsx';
import Mail from './components/Icons/mail';
import { connect } from 'react-redux';
import { verify } from './redux/user/user.actions';
import Form from './components/dialogueBox/Form.jsx';
import FormOption from './components/SecondaryDialogueMenu/FormOption.jsx';
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
//actions
import { navDialogueMenu, mobileMenu } from './redux/nav/nav.actions.js';

class App extends React.Component {
  componentDidMount() {
    this.props.verify();
  }
  render() {
    return (
      <div className="cusLG-blue cus-blue">
        <Navigation/>
        <Switch>
          <ProtectedRoute path='/admin' component={Admin} />
          <Route path='/portfolio' component={Portfolio}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/*' component={Home} />
        </Switch>
        <Footer/>
        <Form />
        <FormOption />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  privilege: state.user.privilege,
  mobile: state.nav.mobileMenu
});

const mapDispatchToProps = (dispatch) => ({
  verify: () => dispatch(verify()),
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
  mobileMenu: ()=>dispatch(mobileMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
