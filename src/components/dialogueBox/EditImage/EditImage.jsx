import React from 'react';
import ManageAssets from './manageAssets/ManageAssets';

class EditImage extends React.Component {
  render() {
    return (
      <div className='flex flex-col justify-center bg-black overflow-scroll '>
        <ManageAssets />
      </div>
    );
  }
}

export default EditImage;
