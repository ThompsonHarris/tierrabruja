import React from 'react';
import Input from '../../input/Input.jsx';
import { connect } from 'react-redux';
import TextField from '../../input/TextField.jsx';
import { sendEmail } from '../../../redux/nav/nav.actions.js';
import { validateEmail } from '../../../utils/index.js';

class AddProject extends React.Component {
  state = {};
  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  sendMessage = () => {
    if (
      this.state.Name &&
      this.state.Email &&
      this.state.Subject &&
      this.state.Message &&
      validateEmail(this.state.Email)
    ) {
      this.props.sendMail(
        this.state.Name,
        this.state.Email,
        this.state.Subject,
        this.state.Message
      );
    }
  };

  render() {
    return (
      <div className='w-full flex flex-col justify-around self-center overflow-hidden'>
        <div className='w-5/6 self-center text-center text-2xl font-bold text-gray-600 my-4'>
          Add a Project
        </div>
        <Input
          label='Name'
          placeholder='Enter project name'
          onChange={(e) => this.onChange(e)}
          value={this.state.Name}
        />
        <Input
          label='Location'
          placeholder='Enter project location'
          onChange={(e) => this.onChange(e)}
          value={this.state.Location}
        />
        <Input
          label='Status'
          placeholder='Enter current project status'
          onChange={(e) => this.onChange(e)}
          value={this.state.Password}
        />
        <button
          className={
            'w-full self-center shadow bg-gray-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-6'
          }
          onClick={(e) => this.sendMessage(e)}
        >
          create project
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendMail: (name, email, subject, text) =>
    dispatch(sendEmail(name, email, subject, text)),
});

export default connect(null, mapDispatchToProps)(AddProject);
