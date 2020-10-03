import React from 'react';
import { connect } from 'react-redux';
import NoImage from '../../../Icons/NoImage.jsx';
import moment from 'moment';

class Preview extends React.Component {
  render() {
    return (
      <div className='w-full self-center flex flex-col justify-start'>
        <div className='self-center flex flex-col justify-center overflow-hidden text-gray-500 font-bold'>
          {this.props.project.images.length ? (
            <img src={this.props.project.images[0].thumbImage} className='' />
          ) : (
            <NoImage className='cus-fill-blue' />
          )}
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Project Id: {this.props.project.id}
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Project title: {this.props.project.title}
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Date creates:
          {moment(this.props.project.createdAt).format('dddd, MMMM Do YYYY')}
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          status: {this.props.project.status}
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Location: {this.props.project.state}
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Assoc client or user: ?
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.admin.project,
});

export default connect(mapStateToProps, null)(Preview);
