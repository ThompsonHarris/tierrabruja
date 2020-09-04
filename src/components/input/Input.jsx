import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div className='flex w-full justify-start'>
        <div className=''>{this.props.label}</div>
        <input
          title={this.props.label}
          className=''
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
        ></input>
      </div>
    );
  }
}

export default Input;
