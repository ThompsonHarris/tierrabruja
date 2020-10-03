import React from 'react';
import { connect } from 'react-redux';
import { deleteImage } from '../../../../redux/admin/admin.actions.js';

class ImageCard extends React.Component {
  render() {
    return (
      <div className='bg-white border shadow-lg p-2 flex flex-row justify-start'>
        <div className=' flex justify-center w-3/4'>
          <div className='self-center'>
            <img src={this.props.image.fullImage} className='heightModMaxTwo' />
          </div>
        </div>
        <div className='w-full self-center flex flex-col justify-start'>
          <div
            className='block text-gray-500 font-bold  mb-1  pr-4 cursor-pointer hover:text-red-400'
            onClick={() => {
              this.props.deleteImage(this.props.image);
            }}
          >
            delete
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteImage: (image) => dispatch(deleteImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);
