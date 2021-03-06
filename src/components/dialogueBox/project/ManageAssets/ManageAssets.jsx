import React from 'react';
import { connect } from 'react-redux';
import Add from '../../../Icons/add.jsx';
import ImageCard from './ImageCard.jsx';
import { navSecondaryDialogueMenu } from '../../../../redux/nav/nav.actions';
import { moveProjectImage } from '../../../../redux/admin/admin.actions';
import * as reactsortablehoc from 'react-sortable-hoc';
reactsortablehoc.SortableElement;

const SortableImagesContainer = reactsortablehoc.SortableContainer(
  ({ children }) => <div className='overflow-scroll'>{children}</div>
);

const SortableImage = reactsortablehoc.SortableElement(
  ({ image, collection }) => {
    return <ImageCard image={image} />;
  }
);

class ManageAssets extends React.Component {
  onSortEnd = ({ oldIndex, newIndex, collection }) => {
    if (oldIndex !== newIndex) {
      this.props.moveProjectImage(
        oldIndex + 1,
        newIndex + 1,
        collection.projectId
      );
    }
  };
  render() {
    return (
      <div className='flex flex-col justify-center '>
        <div className='w-full cus-bg-blue text-center text-2xl mb-6 text-gray-400 flex flex-col justify-start'>
          <div className='self-center mb-3'>resources</div>
          <div className='self-center mb-3'>
            <svg
              className='animate-bounce w-6 h-6 text-white'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
            </svg>
          </div>
          <SortableImagesContainer
            axis='y'
            onSortEnd={this.onSortEnd}
            distance={1}
          >
            {this.props.project.images.map((image, i) => (
              <SortableImage
                index={i}
                key={i}
                image={image}
                collection={image}
              />
            ))}
          </SortableImagesContainer>
          <div className='self-center my-1'>
            <div
              className='cursor-pointer text-white w-8 h-8 flex flex-row justify-end'
              onClick={() =>
                this.props.navSecondaryDialogueMenu(
                  'upload user image',
                  this.props.project.id,
                  'project'
                )
              }
            >
              <Add className='fill-current h-full w-full self-center rounded-full' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.admin.project,
});

const mapDispatchToProps = (dispatch) => ({
  navSecondaryDialogueMenu: (str, opt, opt2) =>
    dispatch(navSecondaryDialogueMenu(str, opt, opt2)),
  moveProjectImage: (oldPos, newPos, id) =>
    dispatch(moveProjectImage(oldPos, newPos, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageAssets);
