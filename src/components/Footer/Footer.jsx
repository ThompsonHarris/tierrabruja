import React from 'react'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {navDialogueMenu} from '../../redux/nav/nav.actions.js'
import Insta from '../Icons/insta'

class Footer extends React.Component{
  render(){
    return(
      <>
      <div 
        style={{
              width: '100%',
              overflow: 'hidden',
              lineHeight: '0',
              }}>
          <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{
                  position: 'relative',
                  display: 'block',
                  width: 'calc(148% + 1.3px)',
                  height: '122px',
                  }}>
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-current cus-blue"></path>
          </svg>
      </div>
      <div className="px-4 pt-12 pb-8 text-white cus-bg-blue">
        <div className="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
                <Link to='/' className="block w-1/3 mr-4">
                    <span className="flex items-center">
                        <span className="ml-2 text-lg font-bold">Tierra Bruja</span>
                    </span>
                </Link>
              <div className="block w-2/3 mt-6 text-sm sm:flex lg:mt-0">
                  <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
                      <li className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Sitemap</li>
                      <li><Link to='/about' className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">About</Link></li>
                      <li><Link to='/contact' className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white" 
                      onClick={() => {
                        window.scrollTo(0, 0);
                        this.props.navDialogueMenu('email')
                      }}>Contact</Link></li>
                      <li><Link to='/portfolio' className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">Portfolio</Link></li>
                      <li><Link to='/' className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">Home</Link></li>
                  </ul>
              {
                  // <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
                  //     <li className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Company</li>
                  //     <li><a className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">Privacy</a></li>
                  //     <li><a className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">Terms of Service</a></li>
                  // </ul>
                  // <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
                  //     <li className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Locations</li>
                  //     <li><a className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">New York</a></li>
                  //     <li><a className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">Miami</a></li>
                  //     <li><a className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">Virginia</a></li>
                  // </ul>
              }
              {
                this.props.user===5?
                <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
                      <li className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Administration</li>
                      <li><Link to='/admin/users' className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">users</Link></li>
                      <li><Link to='/admin/projects' className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">projects</Link></li>
                      <li><Link to='/admin/settings' className="inline-block px-3 py-2 text-gray-300 no-underline hover:text-white">settings</Link></li>
                </ul>
                :
                null
              }
              <div className="flex flex-col w-full text-gray-700">
              <div className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Follow Us</div>
              <div className="flex justify-start pl-4 mt-2">
                  <a className="flex items-center block text-gray-300 no-underline hover:text-white" rel="noopener noreferrer" target="_blank" href='https://instagram.com/tierrabruja?igshid=10274m51y81ad'>
                      <Insta className="w-5 h-5 fill-current" /><span> instagram</span> 
                  </a>
              </div>
          </div>
              </div>
            <div className="pt-4 pt-6 mt-10 text-center text-white border-t border-white" onClick={()=>{this.props.navDialogueMenu('login')}}> ©2020 Tierra Bruja. All rights reserved.</div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user.privilege
})

const mapDispatchToProps = (dispatch) => ({
  navDialogueMenu: (str) => dispatch(navDialogueMenu(str)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Footer)