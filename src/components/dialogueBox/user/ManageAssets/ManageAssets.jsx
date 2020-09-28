import React from 'react';
import { connect } from 'react-redux';
import Add from '../../../Icons/add.jsx';
import ImageCard from './ImageCard.jsx';

class ManageAssets extends React.Component {
  render() {
    return (
      <div className='flex flex-col justify-center'>
        <div className='w-full cus-bg-blue text-center text-2xl mb-6 text-gray-400 flex flex-col justify-start'>
          <div className='self-center mb-3'>resources</div>
          <div className='self-center mb-3'>
            <svg
              className='animate-bounce w-6 h-6 text-white'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ManageAssets);
