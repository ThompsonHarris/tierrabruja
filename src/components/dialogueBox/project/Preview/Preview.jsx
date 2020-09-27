import React from 'react';
import { connect } from 'react-redux';
import NoImage from '../../../Icons/NoImage.jsx';

class Preview extends React.Component {
  render() {
    return (
      <div className='w-full self-center flex flex-col justify-start'>
        <div className='self-center flex flex-col justify-center overflow-hidden text-gray-500 font-bold'>
          <NoImage className='cus-fill-blue' />
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Project Id: ?
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Project title: ?
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Date creates: ?
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          status: ?
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Location: ?
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Assoc client or user: ?
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(Preview);
