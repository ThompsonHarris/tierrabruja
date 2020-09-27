import React from 'react';
import { connect } from 'react-redux';
import List from '../../../components/adminComponents/list/List.jsx';
import { navDialogueMenu } from '../../../redux/nav/nav.actions.js';

class User extends React.Component {
  render() {
    return (
      <div className='w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal'>
        <List
          col1='Username'
          col2='Role'
          col3='Status'
          col4='actions'
          data={[
            { name: 'Tierra Bruja', role: 'admin', status: 'active' },
            { name: 'Tierra Bruja', role: 'admin', status: 'active' },
            { name: 'Tierra Bruja', role: 'admin', status: 'active' },
          ]}
          onClick={() => this.props.navDialogueMenu('add user')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
