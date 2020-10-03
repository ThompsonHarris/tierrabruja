import React from 'react';
import Input from '../../input/Input.jsx';
import { connect } from 'react-redux';
import { validateEmail } from '../../../utils/index.js';
import { createUser } from '../../../redux/admin/admin.actions.js';

class AddUser extends React.Component {
  state = {};
  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  handleUser = () => {
    if (
      this.state.FirstName &&
      this.state.LastName &&
      this.state.Email &&
      this.state.Password &&
      validateEmail(this.state.Email) &&
      this.state.Password === this.state.ConfirmPassword
    ) {
      this.props.createUser({
        firstname: this.state.FirstName,
        lastname: this.state.LastName,
        email: this.state.Email,
        password: this.state.Password,
        isAdmin: false,
      });
    }
  };

  render() {
    return (
      <div className='w-full flex flex-col justify-around self-center overflow-hidden'>
        <div className='w-5/6 self-center text-center text-2xl font-bold text-gray-600 my-4'>
          Add a User
        </div>
        <Input
          label='FirstName'
          placeholder='Enter your name'
          onChange={(e) => this.onChange(e)}
          value={this.state.FirstName}
        />
        <Input
          label='LastName'
          placeholder='Enter your name'
          onChange={(e) => this.onChange(e)}
          value={this.state.LastName}
        />
        <Input
          label='Email'
          placeholder='Enter your email'
          onChange={(e) => this.onChange(e)}
          value={this.state.Email}
        />
        <Input
          label='Password'
          placeholder='Enter your a password'
          onChange={(e) => this.onChange(e)}
          value={this.state.Password}
        />
        <Input
          label='ConfirmPassword'
          placeholder='Confirm password'
          onChange={(e) => this.onChange(e)}
          value={this.state.ConfirmPassword}
        />
        <button
          className={
            'w-full self-center shadow bg-gray-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-6'
          }
          onClick={(e) => this.handleUser(e)}
        >
          create user
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
});

export default connect(null, mapDispatchToProps)(AddUser);
