import React from 'react';
import Widget from '../../../components/adminComponents/widget/widget.jsx';
import Graph from '../../../components/adminComponents/Graph/Graph.jsx';

class Main extends React.Component {
  render() {
    return (
      <div className='w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal'>
        <div className='flex flex-wrap'>
          <Widget title='TOTAL REVENUE' value='$3249' />
          <Widget title='TOTAL USERS' value='249' />
          <Widget title='NEW USERS' value='2' />
          <Widget title='SERVER UPTIME' value='152 days' />
          <Widget title='TO DO LIST' value='7 tasks' />
          <Widget title='ISSUES' value='3' />
        </div>
        <hr className='border-b-2 border-gray-300 my-8 mx-2' />
        <div className='flex flex-row flex-wrap flex-grow mt-2'>
          <Graph title='Graph' />
          <Graph title='Graph' />
        </div>
      </div>
    );
  }
}

export default Main;
