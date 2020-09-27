import React from 'react';
import Input from '../../../input/Input.jsx';
import { connect } from 'react-redux';
import TextField from '../../../input/TextField.jsx';

class EditDetails extends React.Component {
  state = {};

  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  render() {
    return (
      <div className='w-full flex flex-col justify-around self-center overflow-hidden'>
        <Input
          label='Title'
          placeholder='Change your project title'
          onChange={(e) => this.onChange(e)}
          value={this.state.Title}
        />
        <Input
          label='Status'
          placeholder='Change your project status'
          onChange={(e) => this.onChange(e)}
          value={this.state.Status}
        />
        <Input
          label='Location'
          placeholder='Change your project location'
          onChange={(e) => this.onChange(e)}
          value={this.state.Location}
        />
        <Input
          label='Client'
          placeholder='Connect your project to a client account'
          onChange={(e) => this.onChange(e)}
          value={this.state.Client}
        />
        <TextField
          label='Description'
          placeholder='Modify Project description'
          onChange={(e) => this.onChange(e)}
          value={this.state.Messaage}
        />
        <button
          className={
            'w-full self-center shadow bg-gray-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-6'
          }
        >
          save changes
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
