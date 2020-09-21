import React from 'react';
import { Route } from 'react-router-dom';
import './app.css';
import Home from './pages/home/Home.jsx';
import { connect } from 'react-redux';
import { verify } from './redux/user/user.actions';

class App extends React.Component {
  componentDidMount() {
    this.props.verify();
  }
  render() {
    return (
      <div className=' flex justify-center h-screen cusLG-blue'>
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  verify: () => dispatch(verify()),
});

export default connect(null, mapDispatchToProps)(App);
