import React from 'react';

class TextField extends React.Component {
  render() {
    return (
      <div className='w-full self-center flex flex-col justify-start'>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          {this.props.label}
        </div>
        <textarea
          title={this.props.label}
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple'
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
          rows='5'
          cols='33'
        ></textarea>
      </div>
    );
  }
}

export default TextField;
