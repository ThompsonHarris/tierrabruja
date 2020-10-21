import React from 'react';
import Input from '../../../components/input/Input';
import TextField from '../../../components/input/TextField';
import { connect } from 'react-redux';
import { updateAndFetch } from '../../../redux/general/general.actions';
import { navDialogueMenu } from '../../../redux/nav/nav.actions';
import Add from '../../../components/Icons/add';

class Settings extends React.Component {
  state = {};

  componentDidMount() {
    this.setState({
      SiteName: this.props.SiteName,
      Description: this.props.Description,
      Email: this.props.Email,
      AboutDescription: this.props.AboutDescription,
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value,
    });
  };

  onSubmit = (e) => {
    this.props.updateAndFetch({
      sitename: this.state.SiteName,
      sitedescription: this.state.Description,
      defaultemail: this.state.Email,
      aboutdescription: this.state.AboutDescription,
    });
  };

  render() {
    return (
      <div className='w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal'>
        <div className='w-full p-3'>
          <div className='w-full border rounded shadow bg-white flex flex-col justify-start p-2 text-red-300 font-bold'>
            <div className='w-5/6 self-center text-center text-2xl font-bold text-gray-600 my-4'>
              GENERAL SETTINGS :
            </div>
            <Input
              label='SiteName'
              placeholder='Change your SiteName'
              onChange={(e) => this.onChange(e)}
              value={this.state.SiteName}
            />
            <TextField
              label='Description'
              placeholder='Modify Project description'
              onChange={(e) => this.onChange(e)}
              value={this.state.Description}
            />
            <Input
              label='Email'
              placeholder='Change your site email'
              onChange={(e) => this.onChange(e)}
              value={this.state.Email}
            />
            <TextField
              label='AboutDescription'
              placeholder='Modify site about description'
              onChange={(e) => this.onChange(e)}
              value={this.state.AboutDescription}
            />
            <div className='p-3 font-bold uppercase  text-gray-500  flex flex-row text-center'>
              <div
                className='text-green-400 w-8 h-8 flex flex-row justify-end self-center cursor-pointer'
                onClick={() => this.props.navDialogueMenu('edit images')}
              >
                <Add className='fill-current h-full w-full self-center rounded-full ' />
              </div>
              <div className='self-center'>Add and manage site images</div>
            </div>
            <button
              className={
                'w-full self-center shadow bg-gray-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-6'
              }
              onClick={(e) => this.onSubmit(e)}
            >
              save changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  SiteName: state.general.sitename,
  Description: state.general.sitedescription,
  Email: state.general.defaultemail,
  AboutDescription: state.general.aboutdescription,
});
const mapDispatchToProps = (dispatch) => ({
  updateAndFetch: (siteInfo) => dispatch(updateAndFetch(siteInfo)),
  navDialogueMenu: (type) => dispatch(navDialogueMenu(type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
