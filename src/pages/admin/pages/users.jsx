import React from 'react';
import { connect } from 'react-redux';
import List from '../../../components/adminComponents/list/List.jsx';
import { navDialogueMenu } from '../../../redux/nav/nav.actions.js';
import {
  getUsers,
  getUser,
  deleteUser,
} from '../../../redux/admin/admin.actions.js';

class User extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  HandleEdit = (id) => {
    this.props.getUser(id);
    this.props.navDialogueMenu('edit user');
  };

  HandleDelete = (id, images) => {
    if (id !== this.props.curUser) {
      this.props.deleteUser(id, images);
    }
  };

  render() {
    return (
      <div className='w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal'>
        <List
          col1='Username'
          col2='Role'
          col3='Status'
          col4='actions'
          data={[
            ...this.props.users.map((user) => {
              return {
                name: `${user.firstname} ${user.lastname}`,
                role: user.isAdmin ? 'admin' : 'guest',
                status: 'active',
                actions: {
                  edit: (e) => this.HandleEdit(user.id),
                  remove: (e) => this.HandleDelete(user.id, user.images),
                },
              };
            }),
          ]}
          onClick={() => this.props.navDialogueMenu('add user')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.admin.users,
  curUser: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
  getUsers: () => dispatch(getUsers()),
  getUser: (id) => dispatch(getUser(id)),
  deleteUser: (id, images) => dispatch(deleteUser(id, images)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
