import React from 'react';
import Input from '../input/Input.jsx';

class Form extends React.Component {
  state = {};

  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  render() {
    return (
      <div className=''>
        <Input
          label='name'
          placeholder='enter name here'
          value={this.state.name}
          onChange={(e) => this.onChange(e)}
        />
        <Input
          label='email'
          placeholder='enter email'
          value={this.state.email}
          onChange={(e) => this.onChange(e)}
        />
        <Input
          label='message'
          placeholder='enter message'
          value={this.state.mesasage}
          onChange={(e) => this.onChange(e)}
        />
      </div>
    );
  }
}

export default Form;
