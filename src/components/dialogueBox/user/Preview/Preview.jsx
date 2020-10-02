import React from 'react';
import { connect } from 'react-redux';
import NoImage from '../../../Icons/NoImage.jsx';
import moment from 'moment';

class Preview extends React.Component {
  render() {
    return (
      <div className='w-full self-center flex flex-col justify-start '>
        <div className='self-center flex flex-col justify-center overflow-hidden text-gray-500 font-bold'>
          <NoImage className='cus-fill-blue' />
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          User Id: {this.props.user.id}
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Name: {`${this.props.user.firstname} ${this.props.user.lastname}`}
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          Date created:
          {moment(this.props.createdAt).format('dddd, MMMM Do YYYY')}
        </div>
        <div className='block text-gray-500 font-bold  mb-1  pr-4'>
          status: active
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.admin.user,
});

export default connect(mapStateToProps, null)(Preview);
