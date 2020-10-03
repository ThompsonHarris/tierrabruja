import React from 'react';
import Graph from '../../Icons/graph.jsx';

class Widget extends React.Component {
  render() {
    return (
      <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
        <div className='bg-white border rounded shadow p-2'>
          <div className='flex flex-row items-center'>
            <div className='flex-shrink flex flex-row justify-center w-1/2'>
              <div className='p-3 w-1/2'>
                <Graph className='text-gray-500' />
              </div>
            </div>
            <div className='flex-1 text-right md:text-center'>
              <h5 className='uppercase text-grey'>{this.props.title}</h5>
              <h3 className='text-3xl'>{this.props.value}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;
