import React from 'react';
import { connect } from 'react-redux';

class ImageCard extends React.Component {
  render() {
    return (
      <div className='bg-white text-black border shadow-lg p-8 flex flex-row justify-start z-40 mb-6'>
        <div className=' flex justify-center w-3/4'>
          <div className='self-center'>
            <img src='' className='' />
          </div>
        </div>
        <div className='flex flex-col justify-evenly  w-1/4'>
          <div className='flex flex-row justify-center  text-gray-500 font-bold mb-1 self-center w-full '>
            small
          </div>
          <div className='flex flex-row justify-center  text-gray-500 font-bold mb-1 self-center w-full'>
            large
          </div>
          <div className='flex flex-row justify-center  text-gray-500 font-bold mb-1 self-center w-full'>
            high-res
          </div>
          <div className='flex flex-row justify-center  text-gray-500 font-bold mb-1 self-center w-full'>
            <div className='block text-2xl font-bold mb-1 text-center text-red-300 cursor-pointer'>
              delete
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);
