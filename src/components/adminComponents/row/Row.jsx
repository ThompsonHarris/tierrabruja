import React from 'react';

class Row extends React.Component {
  render() {
    return (
      <div className='bg-white lg:hover:bg-gray-100 flex flex-row flex-wrap mb-10 lg:mb-0'>
        {Object.entries(this.props.data).map(([key, val]) => {
          if (key === 'actions') {
            const { edit, remove } = val;
            return (
              <div className='p-3 text-gray-800 text-center border border-b w-1/4'>
                <a
                  onClick={edit}
                  className='text-blue-400 hover:text-blue-600 underline cursor-pointer'
                >
                  Edit
                </a>
                <a
                  onClick={remove}
                  className='text-blue-400 hover:text-blue-600 underline pl-6 cursor-pointer'
                >
                  Remove
                </a>
              </div>
            );
          } else {
            return (
              <div className='p-3 text-gray-800 text-center border border-b w-1/4'>
                {val}
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Row;
