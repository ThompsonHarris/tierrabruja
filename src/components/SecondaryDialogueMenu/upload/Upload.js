import React from 'react';
import { connect } from 'react-redux';
import {
  navSecondaryDialogueMenu,
  uploadingToServer,
} from '../../../redux/nav/nav.actions.js';
import { FileDrop } from 'react-file-drop';

class Upload extends React.Component {
  uploadfile = (file, id) => {
    this.props.uploadingToServer(
      file,
      this.props.uploadId,
      this.props.catagory
    );
  };

  render() {
    return (
      <div className='w-full flex flex-row justify-around h-full'>
        <div className='flex flex-col w-5/6 heightMod self-center'>
          {this.props.isLoading ? (
            <div className='w-full border-dashed border-4 border-gray-600 self-center flex flex-col justify-center transition-all duration-500 ease-in-out h-full'>
              <div className='shadow w-full bg-grey-200'>
                <div
                  className='bg-red-500 text-xs leading-none py-1 text-center text-white w-0'
                  style={{ width: `${this.props.UpPercent}%` }}
                >
                  {this.props.UpType}
                </div>
              </div>
            </div>
          ) : (
            <FileDrop
              onDrop={(files, e) => {
                e.preventDefault();
                this.uploadfile(files[0]);
              }}
              className='w-full border-dashed border-4 border-gray-600 self-center flex flex-col justify-center transition-all duration-500 ease-in-out h-full'
            >
              <div className='flex flex-row justify-center'>
                <div className='flex flex-col justify-start self-center uppercase text-center '>
                  <label className='self-center '>
                    Drop files or click to browse
                  </label>
                  <input
                    type='file'
                    value=''
                    id='content_upload'
                    className='self-center text-center'
                    onChange={(e) => {
                      e.preventDefault();
                      this.uploadfile(e.target.files[0], this.props.uploadId);
                    }}
                  />
                </div>
              </div>
            </FileDrop>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  uploadId: state.nav.SecondaryDialogueOption,
  catagory: state.nav.SecondaryDialogueOptionTwo,
  isLoading: state.nav.Uploading,
  UpType: state.nav.Uptype,
  UpPercent: state.nav.Uppercent,
});

const mapDispatchToProps = (dispatch) => ({
  uploadingToServer: (file, id, catagory) =>
    dispatch(uploadingToServer(file, id, catagory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
