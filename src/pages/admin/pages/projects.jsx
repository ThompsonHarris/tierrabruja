import React from 'react';
import { connect } from 'react-redux';
import List from '../../../components/adminComponents/list/List.jsx';
import { navDialogueMenu } from '../../../redux/nav/nav.actions.js';
import {
  getProjects,
  getProject,
  deleteProject,
} from '../../../redux/admin/admin.actions.js';

class Project extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }

  HandleEdit = (id) => {
    this.props.getProject(id);
    this.props.navDialogueMenu('edit project');
  };

  render() {
    return (
      <div className='w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal'>
        <List
          col1='Project Name'
          col2='location'
          col3='Status'
          col4='actions'
          data={[
            ...this.props.projects.map((project) => {
              return {
                name: project.title,
                location: project.state,
                status: project.status,
                actions: {
                  edit: (e) => this.HandleEdit(project.id),
                  remove: (e) =>
                    this.props.deleteProject(project.id, project.images),
                },
              };
            }),
          ]}
          onClick={() => this.props.navDialogueMenu('add project')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.admin.projects,
});

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
  getProjects: () => dispatch(getProjects()),
  getProject: (id) => dispatch(getProject(id)),
  deleteProject: (id, images) => dispatch(deleteProject(id, images)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
