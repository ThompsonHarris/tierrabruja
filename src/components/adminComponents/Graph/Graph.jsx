import React from 'react';
import Chart from 'chart.js';

class Graph extends React.Component {
  chartRef = React.createRef();
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'line',
      data: {
        //Bring in data
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'Sales',
            data: [86, 67, 91],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  }
  render() {
    return (
      <div className='w-full md:w-1/2 p-3'>
        <div className='bg-white border rounded shadow'>
          <div className='border-b p-3'>
            <h5 className='uppercase text-grey-dark'>{this.props.title}</h5>
          </div>
          <div className='p-5'>
            <canvas id='myChart' ref={this.chartRef} />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
