import React from 'react';
import Input from '../../../input/Input.jsx';
import { connect } from 'react-redux';
import { updateUser } from '../../../../redux/admin/admin.actions.js';
import { validateEmail } from '../../../../utils/index.js';

class EditDetails extends React.Component {
  state = {};

  componentDidMount() {
    this.setState({
      FirstName: this.props.user.firstname,
      LastName: this.props.user.lastname,
      Email: this.props.user.email,
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  onUpdate = () => {
    if (this.state.PrevPassword && this.state.NewPassword) {
      if (
        this.state.FirstName &&
        this.state.LastName &&
        this.state.Email &&
        validateEmail(this.state.Email)
      ) {
        this.props.updateUser(this.props.user.id, {
          firstname: this.state.FirstName,
          lastname: this.state.LastName,
          email: this.state.Email,
          prevPassword: this.state.PrevPassword,
          newPassword: this.state.NewPassword,
        });
      }
    } else {
      if (
        this.state.FirstName &&
        this.state.LastName &&
        this.state.Email &&
        validateEmail(this.state.Email)
      ) {
        this.props.updateUser(this.props.user.id, {
          firstname: this.state.FirstName,
          lastname: this.state.LastName,
          email: this.state.Email,
        });
      }
    }
  };

  render() {
    return (
      <div className='w-full flex flex-col justify-around self-center overflow-hidden'>
        <Input
          label='FirstName'
          placeholder='Enter your name'
          onChange={(e) => this.onChange(e)}
          value={this.state.FirstName}
        />
        <Input
          label='LastName'
          placeholder='Enter your name'
          onChange={(e) => this.onChange(e)}
          value={this.state.LastName}
        />
        <Input
          label='Email'
          placeholder='Enter your email'
          onChange={(e) => this.onChange(e)}
          value={this.state.Email}
        />
        <Input
          label='PrevPassword'
          placeholder='Enter your a password'
          onChange={(e) => this.onChange(e)}
          value={this.state.Password}
        />
        <Input
          label='NewPassword'
          placeholder='Confirm password'
          onChange={(e) => this.onChange(e)}
          value={this.state.ConfirmPassword}
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
  user: state.admin.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, user) => dispatch(updateUser(id, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
