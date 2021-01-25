import React from 'react';
import { connect } from 'react-redux';
import { mobileMenu,navDialogueMenu } from '../../redux/nav/nav.actions.js';
import {withRouter} from 'react-router-dom'

class MobileMenu extends React.Component {
  onHandleMenuClick = e => {
    this.props.slideMenu();
  };

  render() {
    return (
        <div className="z-10 fixed inset-0 bg-black opacity-75">
          <div className="z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col">
            <div className="px-4 flex flex-1 flex-col justify-center items-center">
                <div className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug my-4"
                  onClick={()=>{
                    this.props.history.push('/')
                    this.props.mobileMenu()
                  }
                  }
                >
                  <span className="inline-block mt-2">Home</span>
                </div>
                <div className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug my-4"
                onClick={()=>{
                  this.props.history.push('/about')
                  this.props.mobileMenu()
                }
                }>
                  <span className="inline-block mt-2">About</span>
                </div>
                <div className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug my-4"
                onClick={()=>{
                  this.props.history.push('/contact')
                  window.scrollTo(0,0)
                  this.props.mobileMenu()
                  this.props.navDialogueMenu('email')
                }
                }>
                  <span className="inline-block mt-2">Contact Us</span>
                </div>
                <div className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug my-4"
                onClick={()=>{
                  this.props.history.push('/portfolio')
                  this.props.mobileMenu()
                }
                }>
                  <span className="inline-block mt-2">Portfolio</span>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  history: ownProps.history
})

const mapDispatchToProps = dispatch => ({
  mobileMenu: () => dispatch(mobileMenu()),
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MobileMenu));
