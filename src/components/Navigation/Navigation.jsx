import React from 'react'
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import {mobileMenu, navDialogueMenu } from '../../redux/nav/nav.actions';
import MobileMenu from '../MobileMenu/MobileMenu'



class Navigation extends React.Component{
  render(){
    return (
      <div className="relative z-20 w-full h-24 px-8 pt-2">
        <div className="container flex items-center justify-between h-full max-w-6xl mx-auto ">
            <Link to="/" className="relative flex items-center inline-block h-5 h-full">
                <span className="ml-3 text-2xl font-bold">TIERRA BRUJA</span>
            </Link>

            <div id="nav" className="absolute top-0 left-0 hidden block w-full mt-20 border-b border-gray-200 sm:border-none sm:px-5 sm:block sm:relative sm:mt-0 sm:px-0 sm:w-auto">
                <nav className="flex flex-col items-center py-3 bg-white border border-gray-100 sm:flex-row sm:bg-transparent sm:border-none sm:py-0">
                    <Link to="/" className="px-1 mb-1 mb-5 mr-0 text-base font-bold sm:mb-0 sm:mr-4 lg:mr-8"
                    style={
                      this.props.location==='/'?{position: 'relative'}:null
                    }>
                      Home
                      {this.props.location==='/'?<span className="absolute bottom-0 left-0 w-full h-1 -mb-2 bg-yellow-300 rounded-full"></span>:null}
                    </Link>
                    <Link to="/about"  className="px-1 mb-1 mb-5 mr-0 text-base font-bold sm:mb-0 sm:mr-4 lg:mr-8"
                    style={
                      this.props.location==='/about'?{position: 'relative'}:null
                    }>
                      About
                      {this.props.location==='/about'?<span className="absolute bottom-0 left-0 w-full h-1 -mb-2 bg-yellow-300 rounded-full"></span>:null}
                    </Link>
                    <Link onClick={() => {
                      window.scrollTo(0, 0);
                      this.props.navDialogueMenu('email')
                    }} to="/contact" className="px-1 mb-1 mb-5 mr-0 text-base font-bold sm:mb-0 sm:mr-4 lg:mr-8"
                    style={
                      this.props.location==='/contact'?{position: 'relative'}:null
                    }>
                      Contact
                      {this.props.location==='/contact'?<span className="absolute bottom-0 left-0 w-full h-1 -mb-2 bg-yellow-300 rounded-full"></span>:null}
                    </Link>
                    <Link to="/portfolio" className="relative mb-5 sm:mb-0">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded"></span>
                        <span 
                        className="relative inline-block w-full h-full px-3 py-1 text-base font-bold transition duration-100 bg-white border-2 border-black rounded fold-bold hover:bg-yellow-400 hover:text-gray-900"
                        style={
                          this.props.location==='/portfolio'?{backgroundColor: 'background-color: rgba(252, 211, 77)'}:null
                        }
                        >
                        Portfolio
                        </span>
                    </Link>
                </nav>
            </div>

            <div 
              id="nav-mobile-btn" 
              className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none sm:hidden sm:mt-10" 
              onClick={()=>this.props.mobileMenu()}
              >
                <span className="block w-full h-1 mt-2 transform bg-gray-800 rounded-full sm:mt-1 transition-all duration-500 ease-in-out" 
                style={{
                  transform: this.props.mobile ? 'rotate(-45deg)' : 'rotate(0)',
                  top: this.props.mobile ? '4px':'0px',
                  position: this.props.mobile ? 'relative':'block',
                  background:this.props.mobile ? '#ffffff': 'rgb(60, 104, 129)',
                }}></span>
                <span className="block w-full h-1 mt-1 transform bg-gray-800 rounded-full transition-all duration-500 ease-in-out" 
                style={{
                  transform: this.props.mobile ? 'rotate(45deg)' : 'rotate(0)',
                  marginTop: this.props.mobile ? '0px':'4px',
                  background:this.props.mobile ? '#ffffff': 'rgb(60, 104, 129)',
                }}></span>
            </div>
        </div>
        {this.props.mobile?<MobileMenu />:null}
        </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => ({
  location: ownProps.location.pathname,
  mobile: state.nav.mobileMenu
});

const mapDispatchToProps = (dispatch) => ({
  mobileMenu: ()=>dispatch(mobileMenu()),
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
