import React from 'react';
import Input from '../../../input/Input.jsx';
import { connect } from 'react-redux';
import { updateProject } from '../../../../redux/admin/admin.actions.js';
import TextField from '../../../input/TextField.jsx';

class EditDetails extends React.Component {
  state = {};

  componentDidMount() {
    this.setState({
      Title: this.props.project.title,
      Status: this.props.project.status,
      Address: this.props.project.address,
      State: this.props.project.state,
      City: this.props.project.city,
      Description: this.props.project.description,
      Client: '',
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  onUpdate = () => {
    this.props.updateProject(this.props.project.id, {
      title: this.state.Title,
      status: this.state.Status,
      address: this.state.Address,
      state: this.state.State,
      city: this.state.City,
      description: this.state.Description,
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
          label='Address'
          placeholder='Change your project Address'
          onChange={(e) => this.onChange(e)}
          value={this.state.Address}
        />
        <Input
          label='City'
          placeholder='Change your project City'
          onChange={(e) => this.onChange(e)}
          value={this.state.City}
        />
        <Input
          label='State'
          placeholder='Change your project State'
          onChange={(e) => this.onChange(e)}
          value={this.state.State}
        />
        <TextField
          label='Description'
          placeholder='Modify Project description'
          onChange={(e) => this.onChange(e)}
          value={this.state.Description}
        />
        <Input
          label='Client'
          placeholder='Connect your project to a client account'
          onChange={(e) => this.onChange(e)}
          value={this.state.Client}
        />
        <button
          className={
            'w-full self-center shadow bg-gray-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-6'
          }
          onClick={(e) => this.onUpdate(e)}
        >
          save changes
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.admin.project,
});

const mapDispatchToProps = (dispatch) => ({
  updateProject: (id, project) => dispatch(updateProject(id, project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
