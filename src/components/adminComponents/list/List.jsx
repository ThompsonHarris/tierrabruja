import React from 'react';
import Row from '../row/Row.jsx';
import Add from '../../Icons/add.jsx';

class List extends React.Component {
  render() {
    return (
      <div className='w-full p-3'>
        <div className='w-full border rounded shadow bg-white flex flex-col justify-start p-2 relative'>
          <div className='w-full flex flex-row justify-around'>
            <div className='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 table-cell w-1/4 text-center'>
              {this.props.col1}
            </div>
            <div className='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 table-cell w-1/4 text-center'>
              {this.props.col2}
            </div>
            <div className='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 table-cell w-1/4 text-center'>
              {this.props.col3}
            </div>
            <div className='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 table-cell w-1/4 text-center'>
              {this.props.col4}
            </div>
          </div>
          <div>
            {this.props.data.map((vals) => (
              <Row data={vals} />
            ))}
          </div>
          <div
            className='absolute top-0 right-0 cursor-pointer text-green-400 w-8 h-8 flex flex-row justify-end'
            onClick={this.props.onClick}
          >
            <Add className='fill-current h-full w-full self-center rounded-full' />
          </div>
        </div>
      </div>
    );
  }
}

export default List;
