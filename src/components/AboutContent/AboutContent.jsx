import React from 'react'
import Moth from '../Icons/moth'

class AboutContent extends React.Component{
  render(){
    return (
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-80 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src={window.location.origin + '/assets/aboutimg.jpg'}/>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-white text-gray-400">
                  <Moth className={"fill-current cus-blue"}/>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{this.props.sitename}</h2>
                  <div className="w-12 h-1 cus-bg-blue rounded mt-2 mb-4"></div>
                  <p className="text-base">{this.props.sitedescription}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">{this.props.aboutdescription}</p>
                {
                //<a className="text-indigo-500 inline-flex items-center">Learn More
                  //<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    //<path d="M5 12h14M12 5l7 7-7 7"></path>
                   // </svg>
                //</a>
                } 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContent