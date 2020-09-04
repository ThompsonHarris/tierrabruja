import React from 'react';
import Input from '../../input/Input.jsx';

class Email extends React.Component {
  state = {};
  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className='w-full flex flex-col justify-around self-center overflow-hidden'>
        <div className='w-5/6 self-center text-center text-2xl font-bold text-gray-600 my-4'>
          REACH OUT
        </div>
        <Input
          label='Name'
          placeholder='Enter your name'
          onChange={(e) => this.onChange(e)}
          value={this.state.Name}
        />
        <Input
          label='Email'
          placeholder='Enter your email'
          onChange={(e) => this.onChange(e)}
          value={this.state.Email}
        />
        <Input
          label='Message'
          placeholder='Enter your message'
          onChange={(e) => this.onChange(e)}
          value={this.state.Messaage}
        />
        <button
          className={
            'w-5/6 self-center shadow bg-gray-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-6'
          }
          onClick={(e) => console.log('...sending email')}
        >
          send
        </button>
      </div>
    );
  }
}

export default Email;
