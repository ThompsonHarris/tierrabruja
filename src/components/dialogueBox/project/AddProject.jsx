import React from 'react';
import Input from '../../input/Input.jsx';
import { connect } from 'react-redux';
import TextField from '../../input/TextField.jsx';
import { createProject } from '../../../redux/admin/admin.actions.js';

class AddProject extends React.Component {
  state = {};
  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  handleProject = () => {
    this.props.createProject({
      title: this.state.Title,
      address: this.state.Address,
      state: this.state.State,
      city: this.state.City,
      status: this.state.Status,
    });
  };

  render() {
    return (
      <div className='w-full flex flex-col justify-around self-center overflow-hidden'>
        <div className='w-5/6 self-center text-center text-2xl font-bold text-gray-600 my-4'>
          Add a Project
        </div>
        <Input
          label='Title'
          placeholder='Enter project tile'
          onChange={(e) => this.onChange(e)}
          value={this.state.Title}
        />
        <Input
          label='Address'
          placeholder='Enter project adress'
          onChange={(e) => this.onChange(e)}
          value={this.state.Address}
        />
        <Input
          label='City'
          placeholder='Enter project city'
          onChange={(e) => this.onChange(e)}
          value={this.state.City}
        />
        <Input
          label='State'
          placeholder='Enter project state'
          onChange={(e) => this.onChange(e)}
          value={this.state.State}
        />
        <Input
          label='Status'
          placeholder='Enter current project status'
          onChange={(e) => this.onChange(e)}
          value={this.state.Status}
        />
        <button
          className={
            'w-full self-center shadow bg-gray-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-6'
          }
          onClick={(e) => this.handleProject(e)}
        >
          create project
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project)),
});

export default connect(null, mapDispatchToProps)(AddProject);
