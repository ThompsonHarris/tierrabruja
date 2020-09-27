import React from 'react';
import { connect } from 'react-redux';
import List from '../../../components/adminComponents/list/List.jsx';
import { navDialogueMenu } from '../../../redux/nav/nav.actions.js';

class Project extends React.Component {
  render() {
    return (
      <div className='w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal'>
        <List
          col1='Project Name'
          col2='location'
          col3='Status'
          col4='actions'
          data={[
            {
              name: 'Client',
              location: 'Long Island, NY',
              status: 'complete',
              actions: {
                edit: (e) => this.props.navDialogueMenu('edit project'),
                remove: (e) => console.log('remove!'),
              },
            },
            {
              name: 'Client 2',
              location: 'TBD',
              status: 'pending',
              actions: {
                edit: (e) => this.props.navDialogueMenu('edit project'),
                remove: (e) => console.log('remove!'),
              },
            },
          ]}
          onClick={() => this.props.navDialogueMenu('add project')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
