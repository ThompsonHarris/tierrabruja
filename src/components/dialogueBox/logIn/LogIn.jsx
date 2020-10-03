import React from 'react';
import Input from '../../input/Input.jsx';
import { connect } from 'react-redux';
import { login, logout } from '../../../redux/user/user.actions.js';

class LogIn extends React.Component {
  state = {};
  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  render() {
    return (
      <div className='w-full flex flex-col justify-around self-center overflow-hidden'>
        {this.props.loggedIn ? (
          <>
            <div className='w-5/6 self-center text-center text-2xl font-bold text-gray-600 my-4'>
              See yah next time
            </div>
            <button
              className={
                'w-full self-center shadow bg-gray-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-6'
              }
              onClick={() => this.props.logout()}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className='w-5/6 self-center text-center text-2xl font-bold text-gray-600 my-4'>
              Log In
            </div>
            {this.props.error.length ? (
              <div className='w-5/6 self-center text-center text-xl font-bold text-red-300'>
                {this.props.error}
              </div>
            ) : null}
            <Input
              label='Email'
              placeholder='Enter your email'
              onChange={(e) => this.onChange(e)}
              value={this.state.email}
            />
            <Input
              label='Password'
              placeholder='Enter your password'
              onChange={(e) => this.onChange(e)}
              value={this.state.password}
            />
            <button
              className={
                'w-5/6 self-center shadow bg-gray-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-6'
              }
              onClick={() =>
                this.props.login(this.state.Email, this.state.Password)
              }
            >
              send
            </button>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.user.error,
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
