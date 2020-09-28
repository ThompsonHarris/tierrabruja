import React from 'react';
import { connect } from 'react-redux';
import Preview from './Preview/Preview.jsx';
import EditDetails from './EditDetails/EditDetails.jsx';
import ManageAssets from './ManageAssets/ManageAssets.jsx';

class EditUser extends React.Component {
  state = { displayPanel: 'preview' };

  changePanel = (panel) => {
    this.setState({ displayPanel: panel });
  };

  render() {
    return (
      <div className='w-full flex flex-col justify-around self-center overflow-hidden'>
        <div className='w-5/6 self-center text-center text-2xl font-bold text-gray-600 my-4'>
          Edit User
        </div>
        <div className='w-full'>
          <ul className='flex'>
            <li
              className={
                this.state.displayPanel === 'preview' ? '-mb-px mr-1' : 'mr-1'
              }
            >
              <a
                className={
                  this.state.displayPanel === 'preview'
                    ? 'bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-500 font-bold'
                    : 'bg-white inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-bold'
                }
                onClick={() => {
                  this.changePanel('preview');
                }}
              >
                detail
              </a>
            </li>
            <li
              className={
                this.state.displayPanel === 'edit' ? '-mb-px mr-1' : 'mr-1'
              }
            >
              <a
                className={
                  this.state.displayPanel === 'edit'
                    ? 'bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-500 font-bold'
                    : 'bg-white inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-bold'
                }
                onClick={() => {
                  this.changePanel('edit');
                }}
              >
                Edit
              </a>
            </li>
            <li
              className={
                this.state.displayPanel === 'assets' ? '-mb-px mr-1' : 'mr-1'
              }
            >
              <a
                className={
                  this.state.displayPanel === 'assets'
                    ? 'bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-500 font-bold'
                    : 'bg-white inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-bold'
                }
                onClick={() => {
                  this.changePanel('assets');
                }}
              >
                Assets
              </a>
            </li>
          </ul>
          <div className='bg-white text-black border shadow-lg p-10 rounded-tr-lg rounded-br-lg rounded-bl-lg'>
            {this.state.displayPanel === 'edit' ? <EditDetails /> : null}
            {this.state.displayPanel === 'preview' ? <Preview /> : null}
            {this.state.displayPanel === 'assets' ? <ManageAssets /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(EditUser);
