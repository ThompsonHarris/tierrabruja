import React from 'react'
import Branch from '../Icons/branch'

class Team extends React.Component{
  render(){
    return(
      <div className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Reach out to our team of experts and get a quote on your next big project!</p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 rounded-full inline-flex items-center justify-center bg-white text-gray-400">
                <Branch className={"fill-current cus-blue"}/>
              </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Babbie Dunnington</h2>
                  <p className="text-gray-500">landscape designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="w-16 h-16 rounded-full inline-flex items-center justify-center bg-white text-gray-400">
                  <Branch className={"fill-current cus-blue"}/>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Margaret Mulligan</h2>
                  <p className="text-gray-500">landscape designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Team